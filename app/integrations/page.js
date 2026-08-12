import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';

export const metadata = {
  title: 'Integrations, Multi-location & Inventory',
  description: 'Connect supported POS, accounting, delivery and payment systems with central reporting, menus and inventory context.'
};

const capabilities = [
  ['POS data', 'Bring supported order, sales, menu or table data into the PayMyDine operating picture without asking staff to enter the same information again.'],
  ['Accounting context', 'Pass or align the available reporting fields needed by the finance workflow, subject to the connected system and permissions.'],
  ['Delivery channels', 'Keep supported delivery orders distinguishable by channel while including them in the wider workload and sales picture.'],
  ['Payment providers', 'Connect supported payment status and settlement context to the table and guest checkout journey.']
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="4 integration types - 6 central controls"
        title="Connect the systems that already hold restaurant data, then make that data useful to the next role."
        intro="PayMyDine can work with supported POS, accounting, delivery and payment environments, then add central owner views, shared menus, reporting, inventory, food-cost and purchasing context where the source systems allow it."
        image="/site-assets/custom/integrations-hero-restaurant-way-16.webp"
        accent="green"
      />

      <section className="section integrationStepsSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Define the data path before the connector</span>
            <h2>For each integration, decide which data moves, which system remains authoritative and who uses the result.</h2>
            <p>A useful integration removes re-entry or missing context. It should not move data simply because a connection is technically possible.</p>
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
            <span className="eyebrow darkEyebrow">6 multi-location controls</span>
            <h2>Compare locations centrally while each restaurant keeps its local operating context.</h2>
            <p>Ownership can review location performance and shared standards without turning every site into the same floor plan, service model or team structure.</p>
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
              <span className="eyebrow">Integration scope</span>
              <h2>Connect only the fields that support a real workflow or reporting need.</h2>
              <p>Document the source, direction, refresh timing, permission and responsible role for each data field before implementation.</p>
            </div>
          </article>
          <article>
            <img src="/site-assets/custom/integrations-operating-picture.webp" alt=""/>
            <div>
              <span className="eyebrow">One business picture</span>
              <h2>Read sales, stock, purchasing and location performance together.</h2>
              <p>Where the connected systems provide the data, owners can compare location results, understand food-cost movement and trace a business number back to its operating source.</p>
            </div>
          </article>
        </div>
      </section>

      <CTA title="Review one real integration before discussing every possible connector." body="Tell us the system, data fields, direction, refresh requirement and role that needs the result. We will define the practical integration scope around that workflow." />
    </>
  );
}
