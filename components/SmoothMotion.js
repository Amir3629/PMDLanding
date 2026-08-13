'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;

    const reduce =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      html.classList.remove('pmd-motion-ready');
      html.classList.add('pmd-reduce-motion');
      return;
    }

    html.classList.remove('pmd-reduce-motion');

    /*
      ----------------------------------------------------------
      MOBILE MOTION PROFILE
      ----------------------------------------------------------

      Desktop motion remains essentially unchanged.

      Mobile starts reveals EARLIER because users often scroll
      much faster with touch momentum than with a mouse wheel.
    */

    const mobile =
      window.matchMedia('(max-width: 820px)').matches;

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
      '.footerGrid > *',
      '.pmdAiImpactVisual'
    ];

    const nodes = [
      ...new Set(
        [
          ...document.querySelectorAll(
            selectors.join(',')
          )
        ].filter(
          (el) =>
            !el.closest(
              '.siteHeader, .megaMenu, .hero, [data-no-motion]'
            )
        )
      )
    ];

    const siblingIndex = new Map();

    nodes.forEach((el) => {
      el.classList.remove('pmd-in-view-v2');
      el.classList.add('pmd-reveal-v2');

      const parent = el.parentElement;

      const n =
        siblingIndex.get(parent) || 0;

      siblingIndex.set(parent, n + 1);

      /*
        DESKTOP:
          preserve existing 45ms stagger.

        MOBILE:
          maximum delay becomes only 72ms instead of ~270ms.
      */

      const delay = mobile
        ? Math.min(n, 4) * 18
        : Math.min(n, 6) * 45;

      el.style.setProperty(
        '--pmd-stagger',
        `${delay}ms`
      );
    });


    /*
      ----------------------------------------------------------
      PAGE-LOAD ELEMENTS
      ----------------------------------------------------------
    */

    const enterNodes = [
      ...document.querySelectorAll(
        '.heroCopy > *, .capabilityStrip, .pageHeroCopy > *, .pageHeroImage'
      )
    ];

    enterNodes.forEach((el, i) => {
      el.classList.remove('pmd-enter-v2');

      void el.offsetWidth;

      const delay = mobile
        ? 35 + Math.min(i, 6) * 30
        : 60 + Math.min(i, 8) * 55;

      el.style.setProperty(
        '--pmd-enter-delay',
        `${delay}ms`
      );

      el.classList.add('pmd-enter-v2');
    });


    /*
      Homepage hero artwork must remain completely static.
    */

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

      el.style.removeProperty(
        '--pmd-enter-delay'
      );

      el.style.removeProperty(
        '--pmd-stagger'
      );
    });


    document.querySelectorAll(
      '.offerCard,.resourceCard,.setupCard,.statusCard,.demoShowcaseCard,.storyFeatureImage,.pageHeroImage'
    ).forEach((el) =>
      el.classList.add('pmd-soft-lift-v2')
    );


    const reveal = (el) => {
      el.classList.add('pmd-in-view-v2');
    };


    /*
      Enable animation styling only after all target nodes have
      their reveal classes.
    */

    html.classList.add('pmd-motion-ready');


    /*
      ----------------------------------------------------------
      INITIAL VIEWPORT CHECK
      ----------------------------------------------------------

      MOBILE:
      reveal elements already within 118% of viewport height.

      This prevents content immediately below the fold from
      waiting for IntersectionObserver during the first swipe.
    */

    const initialBoundary =
      mobile
        ? window.innerHeight * 1.18
        : window.innerHeight * 0.96;

    nodes.forEach((el) => {

      const r =
        el.getBoundingClientRect();

      if (
        r.bottom > 0 &&
        r.top < initialBoundary
      ) {
        reveal(el);
      }

    });


    /*
      ----------------------------------------------------------
      INTERSECTION OBSERVER
      ----------------------------------------------------------

      OLD:
        rootMargin bottom = -4%

      That waited until content was basically already visible.

      NEW MOBILE:
        rootMargin bottom = +22%

      Content therefore begins moving BEFORE it reaches the
      physical viewport.
    */

    const io = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            reveal(entry.target);

            io.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold:
          mobile ? 0.01 : 0,

        rootMargin:
          mobile
            ? '0px 0px 22% 0px'
            : '0px 0px -4% 0px'
      }
    );


    nodes.forEach((el) => {

      if (
        !el.classList.contains(
          'pmd-in-view-v2'
        )
      ) {
        io.observe(el);
      }

    });


    /*
      ----------------------------------------------------------
      SAFETY REVEAL
      ----------------------------------------------------------

      Mobile safety happens sooner.

      This prevents Safari momentum scrolling / layout changes
      from ever leaving nearby content hidden.
    */

    const safety = window.setTimeout(
      () => {

        document
          .querySelectorAll(
            '.pmd-reveal-v2:not(.pmd-in-view-v2)'
          )
          .forEach((el) => {

            const r =
              el.getBoundingClientRect();

            const boundary =
              mobile
                ? window.innerHeight * 1.55
                : window.innerHeight * 1.35;

            if (
              r.top < boundary
            ) {
              reveal(el);
            }

          });

      },
      mobile ? 450 : 900
    );


    return () => {
      clearTimeout(safety);
      io.disconnect();
    };

  }, [pathname]);

  return null;
}
