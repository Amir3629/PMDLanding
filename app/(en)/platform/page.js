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
        title="One place for your restaurant operations."
        intro="Connect reservations, orders, payments, teams and reporting. Give each role a clear view."
        image="/site-assets/custom/platform-hero.webp"
      />
      <OfferGrid compact />
      <Workflow variant="platform" />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt=""/><div><span className="eyebrow">Role-aware workflow</span><h2>Get the next task to the right team.</h2><p>Service, kitchen and reception see their work. Managers see exceptions.</p></div></article>
          <article><img src={imageGroups.social[3]} alt=""/><div><span className="eyebrow">9 decision metrics</span><h2>Understand every change in the numbers.</h2><p>Review sales, demand and profitability. Use AI to investigate changes.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant="platform" />
      <CTA title="Start with the modules you need." body="See which modules fit your current tools and team." />
    </>
  );
}
