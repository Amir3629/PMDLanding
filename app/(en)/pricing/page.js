import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/pricing');

const factors = [
  ['Restaurant and location scope', 'The number of locations, floor complexity, service model, order channels and environments that the configuration must support.'],
  ['Selected product areas', 'Which of the 9 product areas are included now, which are planned later and which current systems remain authoritative.'],
  ['Role and access scope', 'Which of the 6 role workspaces are required, how permissions differ and how many teams or locations need each view.'],
  ['Integration and implementation work', 'The supported POS, payment, accounting or delivery connections plus configuration, migration, validation and team preparation.']
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="4 pricing inputs"
        title="Pricing built around your restaurant."
        intro="Tell us your locations, modules and integrations. We will define the quote."
        image="/site-assets/extra/qr-couple.webp"
        accent="green"
      />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Define the scope before the price</span>
            <h2>Four things shape your quote.</h2>
            <p>Your quote lists modules, setup, integrations and any exclusions.</p>
          </div>
          <div className="pricingFactorGrid">
            {factors.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Get a quote for your setup."
        body="Share your locations, chosen modules and existing systems."
        primaryLabel="Request pricing"
        primaryHref="/contact"
        secondaryLabel="See the 6 implementation stages"
        secondaryHref="/implementation"
      />
    </>
  );
}
