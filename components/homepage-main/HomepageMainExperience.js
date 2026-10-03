'use client';

import { useEffect, useRef, useState } from 'react';
import { mountHomepageMainModern } from './motion';

function Arrow({ back = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={back ? { transform: 'rotate(180deg)' } : undefined}
    >
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomepageMainExperience({ children }) {
  const root = useRef(null);
  const controller = useRef(null);
  const [hardware, setHardware] = useState({ visible: false, index: 0, count: 8 });

  useEffect(() => {
    controller.current = mountHomepageMainModern(root.current, { onHardware: setHardware });
    return () => {
      controller.current?.destroy();
      controller.current = null;
    };
  }, []);

  return (
    <div id="pmd-home-main-modern" ref={root}>
      <div data-main-modern-content>{children}</div>

      <div
        className="pmd-main-hardware-nav"
        hidden={!hardware.visible}
        aria-label="Browse restaurant hardware"
      >
        <button
          type="button"
          aria-label="Previous hardware device"
          disabled={hardware.index <= 0}
          onClick={() => controller.current?.moveHardware(-1)}
        >
          <Arrow back />
        </button>
        <span aria-hidden="true">
          {String(hardware.index + 1).padStart(2, '0')}
          <b> / {String(hardware.count).padStart(2, '0')}</b>
        </span>
        <button
          type="button"
          aria-label="Next hardware device"
          disabled={hardware.index >= hardware.count - 1}
          onClick={() => controller.current?.moveHardware(1)}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}
