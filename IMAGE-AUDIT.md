# PayMyDine image and page audit

Audit source: the ZIP supplied in this chat on 9 Aug 2026.

- Active app/components/data source files checked for image usage: **28**
- Referenced image asset paths checked: **97**
- Unique referenced image asset paths: **97**
- Duplicate referenced image paths in active source: **0**
- JavaScript / JSX / MJS files syntax-parsed: **31**
- Syntax parse errors: **0**
- `Archive/`, `__MACOSX/`, build folders and dependencies are excluded because they are not active website source.
- The homepage lifestyle marquee intentionally renders a second copy of its full sequence for a seamless infinite loop. The images inside one sequence are distinct.

## Pricing page

- Removed the second green pricing CTA block.
- Kept one closing pricing CTA.
- Primary pricing action is `Request pricing` and uses the orange CTA treatment.
- Tightened the spacing between the pricing factors and the final CTA.

## Image reuse fixes

- Home and Platform offer cards use different images.
- Home, Platform and Demo showcase sections use separate image sets.
- Home and Platform workflow visuals use different images.
- Resource listing cards and resource article heroes use different images.
- Company, Contact, Pricing, Restaurant Types and Integrations use their own visual sets.
- All solution pages use topic-specific visual sets rather than recycling homepage photos.
- Added optimized WebP visuals under `public/site-assets/extra/` to broaden the visual library without replacing the user's existing `public/Images/` folders.
