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
      <PageHero eyebrow="4 restaurant setup patterns" title="Configure the roles, floor, guest journey and metrics around the service model you already run." intro="The product areas stay the same, but the priority, permissions and workflow change by restaurant type. Start with the real service path and select only the controls that support it." image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt=""/><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Configuration decisions</span><h2>For every setup, define six things before choosing modules.</h2><p>Document roles, floor structure, order channels, guest touchpoints, current systems and the baseline metrics used to judge the result.</p></div><div className="capabilityList"><span>Role ownership</span><span>Floor and table model</span><span>Dine-in and takeaway channels</span><span>Guest ordering path</span><span>POS and payment boundaries</span><span>Baseline operating metrics</span></div></div></section>
      <CTA title="Map one real service model to PayMyDine." body="We will identify the responsible roles, product areas, floor configuration, integrations and metrics needed for that setup." />
    </>
  );
}
