import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';
import ProductDetailSections from '@/components/ProductDetailSections';

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

const integrationDetails = {
  factsEyebrow: 'Integration and scale scope',
  factsTitle: 'Four integration types, six central controls and four currently named provider conversations.',
  factsIntro: 'A named provider does not guarantee every field or workflow. Scope depends on available interfaces, permissions and the agreed data path.',
  facts: [
    ['04', 'integration types', 'POS, accounting, delivery and payment connections form the current integration categories.'],
    ['06', 'central controls', 'Central owner view, shared menus, central reporting, inventory, food cost and purchasing support group operations.'],
    ['04', 'named providers', 'The current product data names SumUp, ready2order, Lightspeed and Square, subject to interface and project scope.'],
    ['05', 'delivery stages', 'Discovery, field mapping, access, testing and monitoring create a practical integration path.']
  ],
  workflowEyebrow: 'From system inventory to monitored connection',
  workflowTitle: 'How to define an integration around a real restaurant workflow.',
  workflowIntro: 'Start with the business action or reporting need, then decide whether and how data should move.',
  workflow: [
    ['Identify the source of truth', 'Document which system owns orders, menus, payments, accounting, stock or location data today.'],
    ['Define fields and direction', 'List the exact fields required, whether data moves into or out of PayMyDine and which role uses the result.'],
    ['Confirm access and limits', 'Review the provider interface, authentication, permissions, rate limits and status detail actually available.'],
    ['Test with reconciliation cases', 'Validate normal records, updates, failures and duplicates against agreed examples before go-live.'],
    ['Monitor and extend', 'Track freshness, failed transfers and reconciliation exceptions before expanding the connector scope.']
  ],
  rolesTitle: 'Integration value is different for implementation, operations, finance and ownership.',
  rolesIntro: 'A connector should remove a real manual step or close a data gap for a named role.',
  roleViews: [
    ['Implementation or IT', 'Owns authentication, field mapping, test cases, error handling and technical provider communication.'],
    ['Restaurant operations', 'Uses connected orders, menu, table or delivery context without re-entering the same information.'],
    ['Finance', 'Reviews payment, accounting and reconciliation fields with a clear source-of-truth decision.'],
    ['Owner and multi-location leadership', 'Compares locations, shared standards, inventory and reporting while retaining local context.']
  ],
  metricsEyebrow: 'Integration health',
  metricsTitle: 'Measure whether the connection is complete, fresh and reducing manual reconciliation.',
  metricsIntro: 'Targets should be agreed per provider and workflow because not every interface supports the same refresh or error detail.',
  metrics: [
    ['Sync success rate', 'Track successful records against attempted transfers for the agreed data objects and period.'],
    ['Data freshness', 'Measure the delay between the source event and its usable appearance in the destination workflow.'],
    ['Reconciliation exceptions', 'Count missing, duplicate or mismatched records that require investigation by operations or finance.'],
    ['Manual re-entry time', 'Baseline the staff time spent copying or reconciling data before and after the integration is introduced.']
  ],
  implementationTitle: 'Write the data contract before building or enabling the connector.',
  implementationIntro: 'The contract should explain the source, destination, ownership, refresh expectation and failure process for each field group.',
  implementation: [
    'Provider documentation, credentials and approved permissions',
    'Source-of-truth decision for each data object',
    'Field mapping, direction and refresh requirement',
    'Location, menu, payment and account identifier mapping',
    'Error ownership, alerting and reconciliation process',
    'Normal, update, duplicate and failure test cases'
  ],
  faqs: [
    ['Which providers are currently named?', 'The current product data names SumUp, ready2order, Lightspeed and Square. Exact capability still depends on the available interface and agreed project scope.'],
    ['Does PayMyDine have to replace the POS?', 'No. The integration strategy can keep the existing POS as a source of truth while adding selected PayMyDine workflows and views.'],
    ['Is every integration real time?', 'No. Freshness depends on the provider interface, permissions, polling or event options and deployment design.'],
    ['Does inventory work without product and cost data?', 'No complete inventory or food-cost picture can be produced without the required item, stock, purchase and cost inputs.']
  ]
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="4 integration types - 6 central controls"
        title="Connect the systems that already hold restaurant data, then make that data useful to the next role."
        intro="PayMyDine can work with supported POS, accounting, delivery and payment environments, then add central owner views, shared menus, reporting, inventory, food-cost and purchasing context where the source systems allow it."
        image="/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp"
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

      <ProductDetailSections details={integrationDetails} productName="Integrations, Multi-location & Inventory" />

      <CTA title="Review one real integration before discussing every possible connector." body="Tell us the system, data fields, direction, refresh requirement and role that needs the result. We will define the practical integration scope around that workflow." />
    </>
  );
}
