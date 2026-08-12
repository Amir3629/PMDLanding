import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = { title: 'Pricing' };

const factors = [
  ['Restaurant setup', 'The operating model, floor structure and service environment the PayMyDine configuration needs to support.'],
  ['Selected capabilities', 'The platform modules, guest journeys and reporting or AI areas included in the setup.'],
  ['Team management', 'The roles, permissions and focused views required across ownership, management and restaurant teams.'],
  ['Integrations & onboarding', 'Supported POS or payment connections plus the implementation scope needed to prepare the restaurant for go-live.']
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="A commercial plan shaped around the PayMyDine setup you actually use."
        intro="Pricing can reflect the restaurant environment, selected capabilities, team workspaces, implementation scope and supported integrations included in the configuration."
        image="/site-assets/extra/qr-couple.webp"
        accent="green"
      />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">How your plan is shaped</span>
            <h2>Define the operating scope before defining the commercial scope.</h2>
            <p>We start with what the restaurant wants to run through PayMyDine, then shape the configuration and commercial proposal around that real setup.</p>
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
        title="Tell us how your restaurant operates."
        body="We’ll use that context to shape the PayMyDine configuration, implementation conversation and commercial proposal around your needs."
        primaryLabel="Request pricing"
        primaryHref="/contact"
        secondaryLabel="Implementation"
        secondaryHref="/implementation"
      />
    </>
  );
}
