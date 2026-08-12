import PageHero from '@/components/PageHero';
import OfferGrid from '@/components/OfferGrid';
import Workflow from '@/components/Workflow';
import InteractiveDemos from '@/components/InteractiveDemos';
import CTA from '@/components/CTA';
import { imageGroups } from '@/data/site';

export const metadata = { title: 'Product' };

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="PayMyDine product"
        title="Nine connected product areas for the modern restaurant."
        intro="Bring restaurant operations, reservations, ordering, kitchen and menu control, payments, guest growth, analytics, team management and integrations into one adaptable environment."
        image="/site-assets/custom/platform-hero.webp"
      />
      <OfferGrid compact />
      <Workflow variant="platform" />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt=""/><div><span className="eyebrow">Role-aware workflow</span><h2>Carry the right context to the person responsible for the next step.</h2><p>Guest actions, table context and kitchen progress can move through the restaurant while each role sees a workspace focused on its own responsibility.</p></div></article>
          <article><img src={imageGroups.social[3]} alt=""/><div><span className="eyebrow">Business intelligence</span><h2>Move from live activity to a clearer operating question.</h2><p>Owners and managers can combine performance visibility with AI-assisted summaries and comparisons around the restaurant data available to them.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant="platform" />
      <CTA title="Want to see how the PayMyDine product areas fit your restaurant?" body="We can walk through the nine product areas, the existing team workspaces and the integrations relevant to your setup." />
    </>
  );
}
