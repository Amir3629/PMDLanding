import PageHero from '@/components/PageHero';
import OfferGrid from '@/components/OfferGrid';
import Workflow from '@/components/Workflow';
import InteractiveDemos from '@/components/InteractiveDemos';
import CTA from '@/components/CTA';
import { imageGroups } from '@/data/site';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/platform');

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="9 product areas - 6 role workspaces"
        title="One operating layer for the actions, status and metrics behind the restaurant day."
        intro="Use reservations, tables, ordering, kitchen, payments, guest CRM, analytics, team controls, integrations and AI as connected product areas. Each role receives a focused workspace while management keeps the shared operating picture."
        image="/site-assets/custom/platform-hero.webp"
      />
      <OfferGrid compact />
      <Workflow variant="platform" />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt=""/><div><span className="eyebrow">Role-aware workflow</span><h2>Move table, order and guest context to the role responsible for the next action.</h2><p>Service staff receives service work, kitchen receives preparation work, reservations receives arrivals and managers receive exceptions without copying information between systems.</p></div></article>
          <article><img src={imageGroups.social[3]} alt=""/><div><span className="eyebrow">9 decision metrics</span><h2>Track the number, comparison period and operating context behind it.</h2><p>Review revenue, guests, average check, table turnover, sales timing, best sellers, payment mix, forecasting and profitability, then use AI assistance to ask why a signal changed.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant="platform" />
      <CTA title="Choose the product areas that remove the most duplicate work first." body="We can map all 9 areas to your current tools, team responsibilities and reporting needs, then define a practical first scope." />
    </>
  );
}
