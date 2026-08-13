import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = { title: 'Pricing' };

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
        title="Price the configuration, implementation and integration scope you will actually use."
        intro="A practical proposal starts with locations, selected product areas, role workspaces and integration work. It should also state what remains outside PayMyDine and which assumptions affect the final scope."
        image="/site-assets/extra/qr-couple.webp"
        accent="green"
      />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Define the scope before the price</span>
            <h2>Four inputs make the commercial proposal understandable and comparable.</h2>
            <p>The proposal should show what is included, which systems connect, which roles are configured, what implementation work is required and what may change the scope.</p>
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
        title="Request pricing with a clear restaurant scope."
        body="Tell us the locations, product areas, roles, current systems and implementation needs. We will use those four inputs to shape the commercial proposal."
        primaryLabel="Request pricing"
        primaryHref="/contact"
        secondaryLabel="See the 6 implementation stages"
        secondaryHref="/implementation"
      />
    </>
  );
}
