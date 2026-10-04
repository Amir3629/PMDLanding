// Motion for the three approved homepage treatments only:
// hardware shelf, software/product index and 5-step operating flow.
export function mountHomepageMainModern(root, { onHardware = () => {} } = {}) {
  if (!root) return { destroy() {}, moveHardware() {} };

  const win = root.ownerDocument.defaultView;
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = win.matchMedia('(min-width: 1100px) and (min-height: 740px)');
  const precise = win.matchMedia('(hover: hover) and (pointer: fine)');
  const content = root.querySelector('[data-main-modern-content]');
  const hardware = content?.querySelector('section[aria-labelledby^="home-hardware-title-"]');
  const pin = hardware?.firstElementChild;
  const track = hardware?.querySelector('[role="list"]');
  const devices = [...(track?.querySelectorAll('[data-card]') || [])];
  const steps = [...root.querySelectorAll('.workflowJourneyItem')];
  const offerCards = [...root.querySelectorAll('.offerCard')];

  const originalAttributes = [];
  const changedStyles = new Map();
  const cleanups = [];
  let frame = 0;
  let measureFrame = 0;
  let disposed = false;
  let rail = false;
  let distance = 0;
  let span = 0;
  let pinTop = 110;
  let pinHeight = 0;
  let activeIndex = 0;
  let lastState = '';

  function attr(el, name, value) {
    if (!el) return;
    originalAttributes.push([el, name, el.getAttribute(name)]);
    el.setAttribute(name, value);
  }

  function style(el, name, value, priority = '') {
    if (!el) return;
    if (!changedStyles.has(el)) changedStyles.set(el, new Map());
    const originals = changedStyles.get(el);
    if (!originals.has(name)) originals.set(name, [el.style.getPropertyValue(name), el.style.getPropertyPriority(name)]);
    el.style.setProperty(name, value, priority);
  }

  function listen(el, event, handler, options) {
    el.addEventListener(event, handler, options);
    cleanups.push(() => el.removeEventListener(event, handler, options));
  }

  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const enabled = () => !reduced.matches;

  attr(root, 'data-main-motion', enabled() ? 'on' : 'off');
  attr(root, 'data-main-rail', 'off');
  attr(hardware, 'data-main-hardware', '');
  attr(pin, 'data-main-pin', '');
  attr(track, 'data-main-track', '');
  devices.forEach((el) => attr(el, 'data-main-tilt', ''));

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

    if (rail && hardware && track && pin) {
      const rect = hardware.getBoundingClientRect();
      const p = clamp((pinTop - rect.top) / Math.max(1, span));
      const x = Math.round(-distance * p);
      style(track, 'transform', `translate3d(${x}px, 0, 0)`, 'important');
      activeIndex = Math.round(p * Math.max(1, devices.length - 1));
      publish(rect.top <= pinTop + 40 && rect.bottom > pinTop + pinHeight - 30, activeIndex);
    } else {
      publish(false, 0);
    }

    if (!enabled()) return;
    steps.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const amount = clamp((vh * 0.8 - rect.top) / Math.max(1, vh * 0.42));
      style(el, '--pmdm-step', amount.toFixed(3));
    });
  }

  function schedule() {
    if (!frame && !disposed) frame = win.requestAnimationFrame(update);
  }

  function measure() {
    measureFrame = 0;
    if (disposed) return;
    root.setAttribute('data-main-motion', enabled() ? 'on' : 'off');
    rail = Boolean(enabled() && desktop.matches && track && pin && devices.length > 1);
    root.setAttribute('data-main-rail', rail ? 'on' : 'off');
    // Hardware rail is deliberately kept active on eligible desktop viewports.
    // The CSS composes all eight devices in one row before distance is measured.


    if (rail) {
      const width = pin.clientWidth;
      pinHeight = pin.offsetHeight;
      distance = Math.max(0, track.scrollWidth - width);
      span = distance * 0.9;
      pinTop = Math.max(104, Math.round((win.innerHeight - pinHeight) / 2));
      style(hardware, '--pmdm-pin-top', `${pinTop}px`);
      style(hardware, '--pmdm-rail-height', `${Math.ceil(pinHeight + span + 160)}px`);
    } else if (track) {
      pinHeight = 0;
      style(track, 'transform', 'translate3d(0, 0, 0)', 'important');
    }
    schedule();
  }

  function scheduleMeasure() {
    if (!measureFrame && !disposed) measureFrame = win.requestAnimationFrame(measure);
  }

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

  if (track) {
    listen(track, 'focusin', (event) => {
      const card = event.target.closest('[data-card]');
      const index = devices.indexOf(card);
      if (index >= 0) goToIndex(index, true);
    });
  }

  devices.forEach((card) => {
    listen(card, 'pointermove', (event) => {
      if (rail || !enabled() || !precise.matches || event.pointerType !== 'mouse') return;
      const rect = card.getBoundingClientRect();
      style(card, '--pmdm-rx', `${(1 - 2 * (event.clientY - rect.top) / rect.height).toFixed(2)}deg`);
      style(card, '--pmdm-ry', `${(2 * (event.clientX - rect.left) / rect.width - 1).toFixed(2)}deg`);
    }, { passive: true });
    listen(card, 'pointerleave', () => {
      style(card, '--pmdm-rx', '0deg');
      style(card, '--pmdm-ry', '0deg');
    });
  });

  offerCards.forEach((card) => {
    listen(card, 'focusin', () => card.setAttribute('data-main-focused', 'true'));
    listen(card, 'focusout', () => card.removeAttribute('data-main-focused'));
  });

  if (win.ResizeObserver && pin) {
    let lastWidth = 0;
    const observer = new win.ResizeObserver(([entry]) => {
      if (Math.abs(entry.contentRect.width - lastWidth) > 1) {
        lastWidth = entry.contentRect.width;
        scheduleMeasure();
      }
    });
    observer.observe(pin);
    cleanups.push(() => observer.disconnect());
  }

  root.ownerDocument.fonts?.ready.then(() => {
    if (!disposed) scheduleMeasure();
  });

  measure();

  return {
    moveHardware(delta) {
      goToIndex(activeIndex + delta);
    },
    destroy() {
      disposed = true;
      win.cancelAnimationFrame(frame);
      win.cancelAnimationFrame(measureFrame);
      cleanups.forEach((fn) => fn());
      offerCards.forEach((card) => card.removeAttribute('data-main-focused'));
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
