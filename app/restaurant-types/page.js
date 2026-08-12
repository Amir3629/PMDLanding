import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = { title: 'Restaurant Setups' };

const setups = [
  ['Full-service restaurants', 'Bring reservations, table service, kitchen flow, payments, role-based workspaces and ownership visibility around a seated guest journey.', '/site-assets/custom/restaurant-type-full-service.webp'],
  ['Casual dining', 'Support a faster service rhythm with table activity, ordering, takeaway, payments and focused team views.', '/site-assets/custom/restaurant-type-modern-dining.webp'],
  ['High-volume dining', 'Keep guest ordering, service handoffs, kitchen preparation and checkout easier to follow when demand builds quickly.', '/site-assets/extra/qr-breakfast.webp'],
  ['Larger venues', 'Use multiple floor maps, specialised role workspaces and selected modules for bigger spaces and more complex team structures.', '/site-assets/extra/team-cafe-meeting.webp']
];

export default function RestaurantTypesPage() {
  return (
    <>
      <PageHero eyebrow="Restaurant setups" title="Shape PayMyDine around the service model you already run." intro="Different restaurants organise tables, teams, guest journeys and technology in different ways. PayMyDine can be configured around that operating structure instead of forcing every venue into the same template." image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt=""/><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Adaptable by design</span><h2>Choose the configuration that matches the restaurant.</h2><p>Start with the roles and workflows you need today, then extend the setup as the operation changes.</p></div><div className="capabilityList"><span>Role-based team workspaces</span><span>Multiple floor maps</span><span>Different guest menu styles</span><span>Selected modules</span><span>Dine-in & takeaway</span><span>Supported POS integrations</span></div></div></section>
      <CTA title="Want to map PayMyDine to your restaurant setup?" body="Book a demo and we’ll focus on the team structure, guest journey, floor, modules and integrations relevant to your venue." />
    </>
  );
}
