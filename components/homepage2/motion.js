// Attribute/style-only enhancement of the original server-rendered homepage.
// Never rewrites copy, reparents React nodes, intercepts the wheel, or captures touch.
export function mountHomepage2(root, { paused = false, onHardware = () => {} } = {}) {
  if (!root) return { destroy() {}, moveHardware() {} };
  const win = root.ownerDocument.defaultView;
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = win.matchMedia('(min-width: 1100px) and (min-height: 740px)');
  const precise = win.matchMedia('(hover: hover) and (pointer: fine)');
  const content = root.querySelector('[data-hp2-content]');
  const hero = content?.querySelector('section.hero');
  const hardware = content?.querySelector('section[aria-labelledby^="home-hardware-title-"]');
  const pin = hardware?.firstElementChild;
  const track = hardware?.querySelector('[role="list"]');
  const devices = [...(track?.querySelectorAll('[data-card]') || [])];
  const steps = [...root.querySelectorAll('.workflowJourneyItem')];
  const photos = [...root.querySelectorAll('.darkStoryCard > img, .demoShowcaseMedia > img')];
  const activeCards = [...root.querySelectorAll('.offerCard')];
  const statusCards = [...root.querySelectorAll('.statusCard')];
  const originalAttributes = [];
  const changedStyles = new Map();
  const cleanups = [];
  let frame = 0, measureFrame = 0, disposed = false;
  let rail = false, distance = 0, span = 0, pinTop = 110, activeIndex = 0;
  let lastState = '';

  function attr(el, name, value) {
    if (!el) return;
    originalAttributes.push([el, name, el.getAttribute(name)]);
    el.setAttribute(name, value);
  }
  function style(el, name, value) {
    if (!el) return;
    if (!changedStyles.has(el)) changedStyles.set(el, new Map());
    const originals = changedStyles.get(el);
    if (!originals.has(name)) originals.set(name, [el.style.getPropertyValue(name), el.style.getPropertyPriority(name)]);
    el.style.setProperty(name, value);
  }
  function listen(el, event, handler, options) {
    el.addEventListener(event, handler, options);
    cleanups.push(() => el.removeEventListener(event, handler, options));
  }
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const enabled = () => !paused && !reduced.matches;
  attr(root, 'data-hp2-enhanced', 'true');
  attr(root, 'data-hp2-motion', enabled() ? 'on' : 'off');
  attr(root, 'data-hp2-rail', 'off');
  attr(hardware, 'data-hp2-hardware', '');
  attr(pin, 'data-hp2-pin', '');
  attr(track, 'data-hp2-track', '');
  devices.forEach((el) => attr(el, 'data-hp2-tilt', ''));
  steps.forEach((el, index) => style(el, '--hp2-index', String(index)));
  statusCards.forEach((el, index) => style(el, '--hp2-stack', String(index)));

  function publish(visible, index) {
    const key = `${visible}:${index}`;
    if (key === lastState) return;
    lastState = key;
    onHardware({ visible, index, count: devices.length || 8 });
  }

  function update() {
    frame = 0;
    if (disposed) return;
    const vh = win.innerHeight;
    const pageRect = root.getBoundingClientRect();
    const progress = clamp(-pageRect.top / Math.max(1, root.offsetHeight - vh));
    style(root, '--hp2-read', String(progress));
    if (hero) {
      const rect = hero.getBoundingClientRect();
      style(root, '--hp2-hero', String(enabled() ? clamp(-rect.top / Math.max(1, rect.height)) : 0));
    }
    if (rail && hardware && track) {
      const rect = hardware.getBoundingClientRect();
      const p = clamp((pinTop - rect.top) / Math.max(1, span));
      style(track, '--hp2-track-x', `${(-distance * p).toFixed(2)}px`);
      // All eight devices have a reachable position, including those sharing the last viewport.
      activeIndex = Math.round(p * Math.max(1, devices.length - 1));
      publish(rect.top <= pinTop + 40 && rect.bottom > pinTop + pin.offsetHeight - 30, activeIndex);
    } else publish(false, 0);

    if (!enabled()) return;
    steps.forEach((el) => {
      const r = el.getBoundingClientRect();
      const amount = clamp((vh * .8 - r.top) / Math.max(1, vh * .42));
      style(el, '--hp2-step', amount.toFixed(3));
    });
    photos.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      style(el, '--hp2-photo-y', `${((clamp((vh - r.top) / (vh + r.height)) - .5) * 28).toFixed(2)}px`);
    });
  }

  function schedule() { if (!frame && !disposed) frame = win.requestAnimationFrame(update); }

  function measure() {
    measureFrame = 0;
    if (disposed) return;
    root.setAttribute('data-hp2-motion', enabled() ? 'on' : 'off');
    rail = Boolean(enabled() && desktop.matches && track && pin && devices.length > 1);
    root.setAttribute('data-hp2-rail', rail ? 'on' : 'off');
    if (rail) {
      const availableHeight = win.innerHeight - 142;
      // On short viewports or large text/zoom, do not pin an unreadable/taller-than-screen stage.
      if (pin.offsetHeight > availableHeight) {
        rail = false;
        root.setAttribute('data-hp2-rail', 'off');
      }
    }
    if (rail) {
      const width = pin.clientWidth;
      distance = Math.max(0, track.scrollWidth - width);
      span = distance * .9;
      pinTop = Math.max(104, Math.round((win.innerHeight - pin.offsetHeight) / 2));
      style(hardware, '--hp2-pin-top', `${pinTop}px`);
      style(hardware, '--hp2-rail-height', `${Math.ceil(pin.offsetHeight + span + 160)}px`);
    } else {
      style(track, '--hp2-track-x', '0px');
    }
    schedule();
  }
  function scheduleMeasure() { if (!measureFrame && !disposed) measureFrame = win.requestAnimationFrame(measure); }

  function goToIndex(index, immediate = false) {
    if (!rail || !hardware) return;
    const target = clamp(index, 0, devices.length - 1);
    const absoluteTop = win.scrollY + hardware.getBoundingClientRect().top;
    const nextY = absoluteTop - pinTop + (target / Math.max(1, devices.length - 1)) * span;
    win.scrollTo({ top: nextY, behavior: immediate || !enabled() ? 'auto' : 'smooth' });
  }

  listen(win, 'scroll', schedule, { passive: true });
  listen(win, 'resize', scheduleMeasure, { passive: true });
  listen(win, 'pageshow', scheduleMeasure);
  listen(root, 'load', scheduleMeasure, true);
  listen(reduced, 'change', scheduleMeasure);
  listen(desktop, 'change', scheduleMeasure);
  // Ensure a keyboard-focused off-screen link is brought into the visible hardware viewport.
  if (track) listen(track, 'focusin', (event) => {
    const index = devices.indexOf(event.target.closest('[data-card]'));
    if (index >= 0) goToIndex(index, true);
  });

  // A small orientation response on physical-device cards, not a glow effect on every block.
  devices.forEach((card) => {
    listen(card, 'pointermove', (event) => {
      if (!enabled() || !precise.matches || event.pointerType !== 'mouse') return;
      const rect = card.getBoundingClientRect();
      style(card, '--hp2-rx', `${(1 - 2 * (event.clientY - rect.top) / rect.height).toFixed(2)}deg`);
      style(card, '--hp2-ry', `${(2 * (event.clientX - rect.left) / rect.width - 1).toFixed(2)}deg`);
    }, { passive: true });
    listen(card, 'pointerleave', () => { style(card, '--hp2-rx', '0deg'); style(card, '--hp2-ry', '0deg'); });
  });
  activeCards.forEach((card) => {
    listen(card, 'focusin', () => card.setAttribute('data-hp2-focused', 'true'));
    listen(card, 'focusout', () => card.removeAttribute('data-hp2-focused'));
  });
  if (win.ResizeObserver && pin) {
    let lastWidth = 0;
    const ro = new win.ResizeObserver(([entry]) => {
      if (Math.abs(entry.contentRect.width - lastWidth) > 1) {
        lastWidth = entry.contentRect.width;
        scheduleMeasure();
      }
    });
    ro.observe(pin);
    cleanups.push(() => ro.disconnect());
  }
  root.ownerDocument.fonts?.ready.then(() => { if (!disposed) scheduleMeasure(); });
  measure();
  return {
    moveHardware(delta) { goToIndex(activeIndex + delta); },
    destroy() {
      disposed = true;
      win.cancelAnimationFrame(frame);
      win.cancelAnimationFrame(measureFrame);
      cleanups.forEach((fn) => fn());
      activeCards.forEach((card) => card.removeAttribute('data-hp2-focused'));
      originalAttributes.reverse().forEach(([el, name, value]) => value === null ? el.removeAttribute(name) : el.setAttribute(name, value));
      changedStyles.forEach((props, el) => props.forEach(([value, priority], name) => value ? el.style.setProperty(name, value, priority) : el.style.removeProperty(name)));
    },
  };
}
