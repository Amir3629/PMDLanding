'use client';

import { useEffect, useRef } from 'react';
import { mountHomepageMainModern } from './motion';

export default function HomepageMainExperience({ children }) {
  const root = useRef(null);
  const controller = useRef(null);

  useEffect(() => {
    controller.current = mountHomepageMainModern(root.current);
    return () => {
      controller.current?.destroy();
      controller.current = null;
    };
  }, []);

  return (
    <div id="pmd-home-main-modern" ref={root}>
      <div data-main-modern-content>{children}</div>
    </div>
  );
}
