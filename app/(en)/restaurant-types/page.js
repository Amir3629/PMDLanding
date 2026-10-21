import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/restaurant-types');

const setups = [
  ['Full-service restaurants', 'Connect bookings, table assignment, waiter ordering, kitchen status, pay-at-table and ownership reporting around a seated guest journey.', '/site-assets/custom/restaurant-type-full-service.webp'],
  ['Casual dining', 'Keep table status, fast ordering, takeaway workload, menu availability and payment visible when service cycles are shorter.', '/site-assets/custom/restaurant-type-modern-dining.webp'],
  ['High-volume dining', 'Use role queues, kitchen ticket states, sold-out controls and guest ordering to keep the next action visible as demand builds.', '/site-assets/extra/qr-breakfast.webp'],
  ['Larger or multi-floor venues', 'Configure multiple floor maps, specialised workspaces, central reporting and selected integrations for more complex teams and spaces.', '/site-assets/extra/team-cafe-meeting.webp']
];

export default function RestaurantTypesPage() {
  return (
    <>
      <PageHero eyebrow="4 restaurant setup patterns" title="PayMyDine for your type of restaurant." intro="Choose tools that fit your service model, teams and space." image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt=""/><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Configuration decisions</span><h2>Start with how your restaurant works.</h2><p>Map your teams, tables, orders and current systems.</p></div><div className="capabilityList"><span>Role ownership</span><span>Floor and table model</span><span>Dine-in and takeaway channels</span><span>Guest ordering path</span><span>POS and payment boundaries</span><span>Baseline operating metrics</span></div></div></section>
      <CTA title="Find your restaurant setup." body="We will match modules and devices to your service flow." />
    </>
  );
}
