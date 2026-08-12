'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      html.classList.remove('pmd-motion-ready');
      html.classList.add('pmd-reduce-motion');
      return;
    }

    html.classList.remove('pmd-reduce-motion');

    const selectors = [
      '.sectionHeading',
      '.splitHeading',
      '.offerCard',
      '.statusCard',
      '.storyFeature',
      '.resourceCard',
      '.setupCard',
      '.pricingFactorGrid > *',
      '.companyValueCards > *',
      '.integrationPills > *',
      '.workflowStep',
      '.demoShowcaseCard',
      '.darkStoryCard',
      '.wideDarkCard',
      '.pageHeroCopy > *',
      '.pageHeroImage',
      '.highlightGrid > *',
      '.twoUpStoryGrid > *',
      '.capabilityPanel > *',
      '.integrationGrid > *',
      '.companyGalleryGrid > *',
      '.footerGrid > *'
    ];

    const nodes = [...new Set(
      [...document.querySelectorAll(selectors.join(','))]
        .filter(el => !el.closest('.siteHeader, .megaMenu, .hero, [data-no-motion]'))
    )];

    const siblingIndex = new Map();

    nodes.forEach((el) => {
      el.classList.remove('pmd-in-view-v2');
      el.classList.add('pmd-reveal-v2');

      const parent = el.parentElement;
      const n = siblingIndex.get(parent) || 0;
      siblingIndex.set(parent, n + 1);
      el.style.setProperty('--pmd-stagger', `${Math.min(n, 6) * 45}ms`);
    });

    /*
      HOMEPAGE HERO:
      Animate text/copy only.
      DO NOT animate the main hero image or secondary overlay image.
    */
    const enterNodes = [
      ...document.querySelectorAll(
        '.heroCopy > *, .capabilityStrip, .pageHeroCopy > *, .pageHeroImage'
      )
    ];

    enterNodes.forEach((el, i) => {
      el.classList.remove('pmd-enter-v2');
      void el.offsetWidth;
      el.style.setProperty('--pmd-enter-delay', `${60 + Math.min(i, 8) * 55}ms`);
      el.classList.add('pmd-enter-v2');
    });

    // Explicitly guarantee homepage hero images never inherit motion classes.
    document.querySelectorAll(
      '.heroVisual, .heroImage, .pmdHeroSecondaryLayerV2, .pmdHeroSecondaryImageV2'
    ).forEach((el) => {
      el.classList.remove(
        'pmd-enter',
        'pmd-enter-v2',
        'pmd-reveal',
        'pmd-reveal-v2',
        'pmd-in-view',
        'pmd-in-view-v2',
        'pmd-soft-lift',
        'pmd-soft-lift-v2'
      );
      el.style.removeProperty('--pmd-enter-delay');
      el.style.removeProperty('--pmd-stagger');
    });

    document.querySelectorAll(
      '.offerCard,.resourceCard,.setupCard,.statusCard,.demoShowcaseCard,.storyFeatureImage,.pageHeroImage'
    ).forEach(el => el.classList.add('pmd-soft-lift-v2'));

    const reveal = (el) => el.classList.add('pmd-in-view-v2');

    html.classList.add('pmd-motion-ready');

    nodes.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight * 0.96) {
        reveal(el);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -4% 0px'
      }
    );

    nodes.forEach((el) => {
      if (!el.classList.contains('pmd-in-view-v2')) io.observe(el);
    });

    const safety = window.setTimeout(() => {
      document.querySelectorAll('.pmd-reveal-v2:not(.pmd-in-view-v2)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.35) reveal(el);
      });
    }, 900);

    return () => {
      clearTimeout(safety);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
