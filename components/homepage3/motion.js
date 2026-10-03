// Homepage 3 experiments only on sections not already promoted from Homepage 2.
// Motion is scroll-linked, never wheel-hijacking, and respects reduced motion.
export function mountHomepage3(root, { paused = false, onSection = () => {} } = {}) {
  if (!root) return { destroy() {}, scrollToSection() {} };

  const win = root.ownerDocument.defaultView;
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = win.matchMedia('(min-width: 1040px) and (min-height: 700px)');
  const content = root.querySelector('[data-main-modern-content]');

  const hero = content?.querySelector('.hero');
  const role = content?.querySelector('.darkStorySection');
  const ai = content?.querySelector('.twoUpStorySection');
  const status = content?.querySelector('.statusSection');
  const demo = content?.querySelector('.demoSection');
  const flex = content?.querySelector('.flexibilitySection');
  const integration = content?.querySelector('.integrationSection');
  const moments = content?.querySelector('.photoMarquee');
  const cta = content?.querySelector('.ctaSection');
  const sections = [hero, role, ai, status, demo, flex, integration, moments, cta].filter(Boolean);

  const roleCards = [...(role?.querySelectorAll('.darkStoryCard') || [])];
  const aiCards = [...(ai?.querySelectorAll('.twoUpStoryGrid > article') || [])];
  const statusCards = [...(status?.querySelectorAll('.statusCard') || [])];
  const demoCards = [...(demo?.querySelectorAll('.demoShowcaseCard') || [])];
  const flexFigures = [...(flex?.querySelectorAll('.flexImageStack figure') || [])];
  const integrationPills = [...(integration?.querySelectorAll('.integrationPills > span') || [])];
  const momentsTrack = moments?.querySelector('.marqueeTrack');

  const originalAttributes = [];
  const changedStyles = new Map();
  const cleanups = [];
  let disposed = false;
  let frame = 0;
  let measureFrame = 0;
  let momentsDistance = 0;
  let momentsSpan = 1;
  let activeIndex = -1;

  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const enabled = () => !paused && !reduced.matches;

  function attr(el, name, value) {
    if (!el) return;
    originalAttributes.push([el, name, el.getAttribute(name)]);
    el.setAttribute(name, value);
  }

  function style(el, name, value) {
    if (!el) return;
    if (!changedStyles.has(el)) changedStyles.set(el, new Map());
    const originals = changedStyles.get(el);
    if (!originals.has(name)) {
      originals.set(name, [el.style.getPropertyValue(name), el.style.getPropertyPriority(name)]);
    }
    el.style.setProperty(name, value);
  }

  function listen(el, event, handler, options) {
    if (!el) return;
    el.addEventListener(event, handler, options);
    cleanups.push(() => el.removeEventListener(event, handler, options));
  }

  sections.forEach((section, index) => {
    attr(section, 'data-hp3-section', String(index));
  });

  attr(root, 'data-hp3-motion', enabled() ? 'on' : 'off');
  attr(root, 'data-hp3-desktop', desktop.matches ? 'true' : 'false');

  roleCards.forEach((card, index) => style(card, '--hp3-card-index', String(index)));
  aiCards.forEach((card, index) => style(card, '--hp3-card-index', String(index)));
  statusCards.forEach((card, index) => style(card, '--hp3-card-index', String(index)));
  demoCards.forEach((card, index) => style(card, '--hp3-card-index', String(index)));
  flexFigures.forEach((figure, index) => style(figure, '--hp3-card-index', String(index)));

  function orbit(progress) {
    if (!integrationPills.length) return;
    const count = integrationPills.length;
    const turn = enabled() ? (progress - 0.5) * 0.24 : 0;

    integrationPills.forEach((pill, index) => {
      const angle = -Math.PI / 2 + (index / count) * Math.PI * 2 + turn;
      const x = 50 + Math.cos(angle) * 38;
      const y = 50 + Math.sin(angle) * 34;
      style(pill, '--hp3-orbit-x', `${x.toFixed(3)}%`);
      style(pill, '--hp3-orbit-y', `${y.toFixed(3)}%`);
    });
  }

  function progressFor(section, start = 0.78, span = 0.72) {
    if (!section) return 0;
    const r = section.getBoundingClientRect();
    return clamp((win.innerHeight * start - r.top) / Math.max(1, win.innerHeight * span + r.height * 0.22));
  }

  function setActiveSection() {
    const target = win.innerHeight * 0.46;
    let next = 0;
    let best = Infinity;

    sections.forEach((section, index) => {
      const r = section.getBoundingClientRect();
      const inside = r.top <= target && r.bottom >= target;
      const d = inside ? 0 : Math.min(Math.abs(r.top - target), Math.abs(r.bottom - target));
      if (d < best) {
        best = d;
        next = index;
      }
    });

    if (next !== activeIndex) {
      activeIndex = next;
      onSection(next);
    }
  }

  function update() {
    frame = 0;
    if (disposed) return;

    const vh = win.innerHeight;
    const rr = root.getBoundingClientRect();
    style(root, '--hp3-read', String(clamp(-rr.top / Math.max(1, root.offsetHeight - vh))));

    const heroP = hero ? clamp(-hero.getBoundingClientRect().top / Math.max(1, hero.offsetHeight)) : 0;
    style(hero, '--hp3-p', enabled() ? heroP.toFixed(4) : '0');

    roleCards.forEach((card) => {
      const r = card.getBoundingClientRect();
      const p = clamp((vh * 0.84 - r.top) / Math.max(1, vh * 0.72));
      style(card, '--hp3-card-p', enabled() ? p.toFixed(4) : '1');
    });

    const aiP = progressFor(ai, 0.82, 0.9);
    style(ai, '--hp3-p', enabled() ? aiP.toFixed(4) : '0');
    aiCards.forEach((card) => {
      const r = card.getBoundingClientRect();
      const p = clamp((vh * 0.82 - r.top) / Math.max(1, vh * 0.62));
      style(card, '--hp3-card-p', enabled() ? p.toFixed(4) : '1');
    });

    statusCards.forEach((card) => {
      const r = card.getBoundingClientRect();
      const p = clamp((vh * 0.76 - r.top) / Math.max(1, vh * 0.58));
      style(card, '--hp3-card-p', enabled() ? p.toFixed(4) : '1');
    });

    const demoP = progressFor(demo, 0.86, 0.72);
    style(demo, '--hp3-p', enabled() ? demoP.toFixed(4) : '0');

    const flexP = progressFor(flex, 0.82, 0.76);
    style(flex, '--hp3-p', enabled() ? flexP.toFixed(4) : '0');

    const integrationP = progressFor(integration, 0.84, 0.88);
    style(integration, '--hp3-p', enabled() ? integrationP.toFixed(4) : '0');
    orbit(integrationP);

    if (moments && momentsTrack && desktop.matches) {
      const r = moments.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, momentsSpan));
      const x = enabled() ? -momentsDistance * p : 0;
      style(momentsTrack, '--hp3-moments-x', `${x.toFixed(2)}px`);
    } else if (momentsTrack) {
      style(momentsTrack, '--hp3-moments-x', '0px');
    }

    const ctaP = progressFor(cta, 0.9, 0.55);
    style(cta, '--hp3-p', enabled() ? ctaP.toFixed(4) : '1');

    setActiveSection();
  }

  function schedule() {
    if (!frame && !disposed) frame = win.requestAnimationFrame(update);
  }

  function measure() {
    measureFrame = 0;
    if (disposed) return;

    root.setAttribute('data-hp3-motion', enabled() ? 'on' : 'off');
    root.setAttribute('data-hp3-desktop', desktop.matches ? 'true' : 'false');

    if (moments && momentsTrack && desktop.matches) {
      momentsDistance = Math.max(0, momentsTrack.scrollWidth - win.innerWidth + Math.min(160, win.innerWidth * 0.08));
      momentsSpan = Math.max(win.innerHeight * 0.8, momentsDistance * 0.72);
      style(moments, '--hp3-moments-height', `${Math.ceil(win.innerHeight + momentsSpan)}px`);
    } else if (moments) {
      style(moments, '--hp3-moments-height', 'auto');
    }

    orbit(progressFor(integration, 0.84, 0.88));
    schedule();
  }

  function scheduleMeasure() {
    if (!measureFrame && !disposed) measureFrame = win.requestAnimationFrame(measure);
  }

  listen(win, 'scroll', schedule, { passive: true });
  listen(win, 'resize', scheduleMeasure, { passive: true });
  listen(win, 'pageshow', scheduleMeasure);
  listen(root, 'load', scheduleMeasure, true);
  listen(reduced, 'change', scheduleMeasure);
  listen(desktop, 'change', scheduleMeasure);

  if (win.ResizeObserver) {
    const observer = new win.ResizeObserver(scheduleMeasure);
    if (momentsTrack) observer.observe(momentsTrack);
    if (integration) observer.observe(integration);
    cleanups.push(() => observer.disconnect());
  }

  root.ownerDocument.fonts?.ready.then(() => {
    if (!disposed) scheduleMeasure();
  });

  measure();

  return {
    scrollToSection(index) {
      const section = sections[index];
      if (!section) return;
      section.scrollIntoView({ behavior: enabled() ? 'smooth' : 'auto', block: 'start' });
    },
    destroy() {
      disposed = true;
      win.cancelAnimationFrame(frame);
      win.cancelAnimationFrame(measureFrame);
      cleanups.forEach((fn) => fn());
      originalAttributes.reverse().forEach(([el, name, value]) => {
        if (value === null) el.removeAttribute(name);
        else el.setAttribute(name, value);
      });
      changedStyles.forEach((props, el) => {
        props.forEach(([value, priority], name) => {
          if (value) el.style.setProperty(name, value, priority);
          else el.style.removeProperty(name);
        });
      });
    },
  };
}
