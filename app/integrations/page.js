import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';


export const metadata = {
  title: 'Integrations, Multi-location & Inventory',
  description: 'Connect POS, accounting, delivery and payment providers while supporting central control, shared menus, reporting and inventory workflows.'
};

const capabilities = [
  ['POS integrations', 'Connect supported POS environments and bring the right operating data into the PayMyDine picture.'],
  ['Accounting', 'Keep accounting context closer to the wider restaurant operating and reporting environment.'],
  ['Delivery', 'Connect delivery workflows where the available integration supports the restaurant setup.'],
  ['Payment providers', 'Work with supported payment providers while keeping checkout part of the guest and restaurant journey.']
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations, multi-location & inventory"
        title="Connect the systems and restaurant locations behind the operation."
        intro="Bring POS, accounting, delivery and payment providers together with central owner visibility, shared menus, central reporting and inventory workflows where supported."
        image="/site-assets/custom/integrations-hero-restaurant-way-16.webp"
        accent="green"
      />

      <section className="section integrationStepsSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Connected restaurant infrastructure</span>
            <h2>Bring the systems, locations and stock context into one clearer operating picture.</h2>
            <p>Integration scope depends on the systems available, but the goal stays the same: make connected information more useful to the people running the restaurant.</p>
          </div>
          <div className="highlightGrid">
            {capabilities.map(([title, body], index) => (
              <article className="highlightCard" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section darkIntegrationPage">
        <div className="container darkIntegrationGrid">
          <div>
            <span className="eyebrow darkEyebrow">Multi-location & central control</span>
            <h2>Give ownership a central view while locations keep working locally.</h2>
            <p>Shared menus, central reporting and location-level inventory can help multi-site operators keep the wider business picture visible without removing local operating context.</p>
          </div>
          <div className="integrationNameGrid">
            {['Central owner view', 'Shared menus', 'Central reporting', 'Inventory', 'Food cost', 'Purchasing'].map((item) => (
              <span key={item}><Icon name="check" size={17}/>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article>
            <img src="/site-assets/custom/integrations-capabilities-fit.webp" alt=""/>
            <div>
              <span className="eyebrow">Flexible adoption</span>
              <h2>Connect the capabilities that fit the operation.</h2>
              <p>Start with the systems and workflows that matter most, then extend the setup as the restaurant or group grows.</p>
            </div>
          </article>
          <article>
            <img src="/site-assets/custom/integrations-operating-picture.webp" alt=""/>
            <div>
              <span className="eyebrow">One business picture</span>
              <h2>Keep reporting, inventory and operations connected.</h2>
              <p>The right connections can make multi-location performance, food cost, purchasing and operational data easier to understand together.</p>
            </div>
          </article>
        </div>
      </section>

      <CTA title="Want to review your integration and multi-location setup?" body="Tell us which systems and locations you use and what you want PayMyDine to connect. We can focus the conversation on the available integration path." />
    </>
  );
}
