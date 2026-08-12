# PayMyDine Marketing Website — Complete Rebuild

A responsive multi-page Next.js marketing website for PayMyDine.

## Included pages

- Home
- Platform overview
- Operations
- Reservations & Tables
- Guest Ordering
- Payments & Split Bills
- Kitchen
- Team Workspaces
- Real-Time Insights
- POS Integrations
- Flexible Restaurant Setups
- Pricing
- Interactive Demo
- Resources hub + six resource articles
- Company
- Book a Demo / Contact

## Design direction

- Roboto typography
- White / forest green PayMyDine palette with restrained lime and warm accents
- Image-heavy hospitality storytelling
- Light and dark sections for visual rhythm
- Mega-menu navigation
- Responsive for desktop, tablet and mobile
- Interactive owner dashboard and guest ordering demos
- Positive restaurant-owner-friendly language

## Your existing images

The rebuild preserves your existing `public` folder. The included asset-preparation script reads images from:

- `public/Images/Comment Box`
- `public/Images/Kitchen`
- `public/Images/Owner`
- `public/Images/Paymet`
- `public/Images/POS`
- `public/Images/Social`
- `public/Images/Staff`
- `public/Images/Table`
- `public/Images/LOGO/p2.svg`

It creates normalized copies in `public/site-assets/` so the website code has simple paths.

## Install over your current project

Extract this package, then run:

```bash
bash install-paymydine-rebuild.sh
```

The installer defaults to:

```text
/Users/amir/Desktop/Projects/paymydine-landing-nextjs
```

It creates a timestamped backup of your existing source files and does **not** delete your current `public/Images` folder.

Then run:

```bash
cd "/Users/amir/Desktop/Projects/paymydine-landing-nextjs"
npm install
npm run dev
```

Open `http://localhost:3000`.

## Assets only

If you add or replace images later, run:

```bash
npm run assets
```

Then refresh the website.

## Important launch notes

- The contact form is front-end only and should be connected to your email/CRM/form provider before launch.
- POS integration availability should be confirmed per provider and per API capability.
- Pricing is intentionally presented as tailored configuration rather than showing invented prices.
