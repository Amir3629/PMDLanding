import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = { title: 'Company' };

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="About PayMyDine"
        title="Restaurant technology designed around responsibilities, not just features."
        intro="PayMyDine brings guest journeys, role-based workspaces, operations, payments, live business visibility and AI assistance into a platform shaped around how restaurant teams actually work."
        image="/site-assets/extra/team-tech-meeting.webp"
        accent="green"
      />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">Our product direction</span><h2>Purpose-built for restaurants. Adaptable by design.</h2><p>We focus on making each role clearer, each handoff more useful and the wider restaurant easier to understand as the day unfolds.</p></div><div className="companyValueCards"><article><h3>Role-first</h3><p>Owners, managers, front of house, kitchen and reservation teams should see the information that matches their responsibility.</p></article><article><h3>Restaurant context</h3><p>Guest actions, team work and business signals become more useful when they contribute to the same operating story.</p></article><article><h3>Adaptable setup</h3><p>Modules, workspaces, floor maps, guest journeys and supported integrations can be shaped around the restaurant environment.</p></article><article><h3>AI with purpose</h3><p>AI assistance should help people explore, summarise and question restaurant information while decisions stay with the team.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt=""/><img src="/site-assets/extra/cafe-professional.webp" alt=""/><img src="/site-assets/extra/chef-gourmet.webp" alt=""/><img src="/site-assets/extra/rooftop-dinner.webp" alt=""/></div></section>
      <CTA title="Want to see the product direction in your own restaurant context?" body="Book a demo and we’ll focus on the roles, workflows, guest journey, AI and integrations relevant to your operation." />
    </>
  );
}
