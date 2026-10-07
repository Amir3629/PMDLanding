'use client';

import { useEffect, useRef, useState } from 'react';
import { mountHomepage3 } from './motion';
const SECTIONS = ["Held", "Rollen + KI", "KI Kontext", "Live-Status", "Schnittstellen", "Konfigurieren", "Integrationen", "Momente", "Nächster Schritt"];
export default function Homepage3Experience({
  children
}) {
  const root = useRef(null);
  const controller = useRef(null);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    controller.current = mountHomepage3(root.current, {
      paused,
      onSection: setActive
    });
    return () => {
      controller.current?.destroy();
      controller.current = null;
    };
  }, [paused]);
  return <div id="pmd-homepage3" ref={root} data-no-motion data-hp3-paused={paused ? 'true' : 'false'}>
      <div className="hp3-read-progress" aria-hidden="true"><i /></div>

      <div className="hp3-source" data-hp3-content>
        {children}
      </div>

      <nav className="hp3-section-index" aria-label={"Startseite 3 Abschnitt Navigation"}>
        {SECTIONS.map((label, index) => <button type="button" key={label} className={active === index ? 'isActive' : ''} aria-label={`Go to ${label}`} aria-current={active === index ? 'true' : undefined} title={label} onClick={() => controller.current?.scrollToSection(index)}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>)}
      </nav>

      <nav className="hp3-comparison" aria-label={"Homepage Design Vergleich"}>
        <a href="/de">Aktuell</a>
        <a href="/de/homepage2">Homepage 2</a>
        <span aria-current="page">Homepage 3</span>
        <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? "Startseite 3 Bewegung aktivieren" : "Pause Homepage 3 Bewegung"} title={paused ? "Bewegung ermöglichen" : "Pausenbewegung"}>
          {paused ? <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 7 5-7 5Z" fill="currentColor" /></svg> : <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3v10M11 3v10" stroke="currentColor" strokeWidth="2" /></svg>}
        </button>
      </nav>
    </div>;
}
