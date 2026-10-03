'use client';

import { useEffect, useRef, useState } from 'react';
import { mountHomepage2 } from './motion';

function Arrow({ back = false }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={back ? { transform: 'rotate(180deg)' } : undefined}>
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Homepage2Experience({ children }) {
  const root = useRef(null);
  const controller = useRef(null);
  const [paused, setPaused] = useState(false);
  const [hardware, setHardware] = useState({ visible: false, index: 0, count: 8 });

  useEffect(() => {
    controller.current = mountHomepage2(root.current, { paused, onHardware: setHardware });
    return () => { controller.current?.destroy(); controller.current = null; };
  }, [paused]);

  return (
    <div id="pmd-homepage2" ref={root} data-no-motion data-hp2-paused={paused ? 'true' : 'false'}>
      <div className="hp2-read-progress" aria-hidden="true"><i /></div>
      <div className="hp2-source" data-hp2-content>{children}</div>

      <nav className="hp2-comparison" aria-label="Homepage design comparison">
        <a href="/" title="Open the unchanged original homepage">Original</a>
        <span aria-current="page">Homepage 2</span>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} aria-label={paused ? 'Enable scroll effects' : 'Disable scroll effects'} title={paused ? 'Enable scroll effects' : 'Disable scroll effects'}>
          {paused ? <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 7 5-7 5Z" fill="currentColor" /></svg> : <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3v10M11 3v10" stroke="currentColor" strokeWidth="2" /></svg>}
        </button>
      </nav>

      <div className="hp2-hardware-nav" hidden={!hardware.visible} aria-label="Browse restaurant hardware">
        <button type="button" aria-label="Previous hardware device" disabled={hardware.index <= 0} onClick={() => controller.current?.moveHardware(-1)}><Arrow back /></button>
        <span aria-hidden="true">{String(hardware.index + 1).padStart(2, '0')}<b> / {String(hardware.count).padStart(2, '0')}</b></span>
        <button type="button" aria-label="Next hardware device" disabled={hardware.index >= hardware.count - 1} onClick={() => controller.current?.moveHardware(1)}><Arrow /></button>
      </div>
    </div>
  );
}
