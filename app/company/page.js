import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = { title: 'Company' };

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="How PayMyDine is designed"
        title="A restaurant platform organised around 9 product jobs, 6 role workspaces and shared operating context."
        intro="PayMyDine separates responsibilities without separating the restaurant. Guest actions, team queues, kitchen status, payment and management metrics can remain connected while each person sees the controls relevant to the job."
        image="/site-assets/extra/team-tech-meeting.webp"
        accent="green"
      />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">Four product rules</span><h2>Every feature should answer who acts, what context is required, which status proves completion and what metric changes.</h2><p>This keeps the product grounded in restaurant work rather than building a collection of disconnected dashboards and marketing claims.</p></div><div className="companyValueCards"><article><h3>Role ownership</h3><p>Owners, managers, front of house, kitchen, reservations and finance receive focused controls and permissions.</p></article><article><h3>Shared context</h3><p>Table, guest, order, timing and payment context can travel across the handoff instead of being entered again.</p></article><article><h3>Measured workflows</h3><p>Each setup identifies baseline and target metrics such as wait time, preparation time, turnover, average check or repeat rate.</p></article><article><h3>AI with source visibility</h3><p>AI can summarise and compare available data, but the source view and human decision remain visible.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt=""/><img src="/site-assets/extra/cafe-professional.webp" alt=""/><img src="/site-assets/extra/chef-gourmet.webp" alt=""/><img src="/site-assets/extra/rooftop-dinner.webp" alt=""/></div></section>
      <CTA title="Evaluate PayMyDine against a real restaurant workflow, not a generic feature list." body="Bring the roles, current systems, repeated work and metrics behind one operating problem. We will map the relevant product areas and boundaries." />
    </>
  );
}
