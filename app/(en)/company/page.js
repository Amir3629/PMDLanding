import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/company');

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="How PayMyDine is designed"
        title="Built around restaurant work."
        intro="Every team gets the tools it needs. Restaurant data stays connected."
        image="/site-assets/extra/team-tech-meeting.webp"
        accent="green"
      />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">Four product rules</span><h2>Clear tasks. Shared data. Measurable results.</h2><p>A connected workflow matters more than another dashboard.</p></div><div className="companyValueCards"><article><h3>Role ownership</h3><p>Owners, managers, service staff, kitchen, reservations and finance receive focused controls and permissions.</p></article><article><h3>Shared context</h3><p>Table, guest, order, timing and payment context can travel across the handoff instead of being entered again.</p></article><article><h3>Measured workflows</h3><p>Each setup identifies baseline and target metrics such as wait time, preparation time, turnover, average check or repeat rate.</p></article><article><h3>AI with source visibility</h3><p>AI can summarise and compare available data, but the source view and human decision remain visible.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt=""/><img src="/site-assets/extra/cafe-professional.webp" alt=""/><img src="/site-assets/extra/chef-gourmet.webp" alt=""/><img src="/site-assets/extra/rooftop-dinner.webp" alt=""/></div></section>
      <CTA title="See PayMyDine in action." body="Show us your current process. We will match the right modules." />
    </>
  );
}
