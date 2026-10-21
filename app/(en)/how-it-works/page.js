import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/how-it-works');

const journeyCards = [
  {
    eyebrow: '4 guest actions',
    title: 'Scan, browse, order and pay without losing the table context.',
    body: 'A table QR can open the mobile menu, keep the table attached to the order, support service requests and continue into checkout.',
    image: '/site-assets/comments/16.webp',
    alt: 'Guests using a PayMyDine QR experience at the table'
  },
  {
    eyebrow: 'Restaurant-controlled service',
    title: 'Digital convenience feeds the team workflow instead of replacing it.',
    body: 'Service staff and kitchen receive the next action in role-focused views, while the restaurant controls menus, availability, service and payment options.',
    image: '/site-assets/table/11.webp',
    alt: 'Restaurant environment supported by PayMyDine'
  }
];

const flowSteps = [
  ['01', 'Action starts', 'A guest scans, reception seats, a waiter opens an order or a manager changes a table.'],
  ['02', 'Context is attached', 'Table, guest, order, timing, notes and permissions stay with the action.'],
  ['03', 'The responsible role receives it', 'Service staff sees service work, kitchen sees preparation work and managers see exceptions.'],
  ['04', 'Service and payment complete', 'Ready status, handoff and checkout continue from the same context, including three split-bill methods.'],
  ['05', 'Activity becomes management data', 'Revenue, guests, average check, table turnover, sales timing and profitability feed reporting and AI-assisted questions.']
];

const operationsCards = [
  {
    eyebrow: '6 role workspaces',
    title: 'Each role sees the queue, controls and status it is responsible for.',
    body: 'Owners, managers, service staff, kitchen, reservations and finance use focused views while the underlying restaurant context remains shared.',
    image: '/site-assets/owner/1.webp',
    alt: 'PayMyDine restaurant operations view'
  },
  {
    eyebrow: '4 kitchen ticket states',
    title: 'Received, preparing, ready and handed off stay visible across the service chain.',
    body: 'The kitchen can focus on preparation while service staff and managers see the status needed for the next handoff.',
    image: '/site-assets/kitchen/2.webp',
    alt: 'Kitchen team working with PayMyDine'
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="5-step operating flow"
        title="From first scan to final payment."
        intro="Guests order and pay. Teams receive the next task. Everything stays connected."
        image="/site-assets/extra/izakaya-phone.webp"
        accent="orange"
      />

      <section className="section howJourneySection">
        <div className="container">
          <div className="sectionHeading centerHeading howJourneyHeading">
            <span className="eyebrow">Guest actions remain restaurant work</span>
            <h2>Four simple steps for guests.</h2>
            <p>Scan, browse, order and pay. Your team sees the updates.</p>
          </div>

          <div className="demoShowcaseGrid howJourneyGrid">
            {journeyCards.map((card, index) => (
              <article className={`demoShowcaseCard ${index === 0 ? 'demoShowcaseWide' : ''}`} key={card.title}>
                <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="demoShowcaseCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div>
              <span className="eyebrow">Five explicit handoffs</span>
              <h2>Five clear steps behind every order.</h2>
            </div>
            <p>See what happens, who handles it and when it is done.</p>
          </div>

          <div className="howFlowGrid">
            {flowSteps.map(([number, title, body]) => (
              <article className="howFlowCard" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section howOperationsSection">
        <div className="container">
          <div className="sectionHeading howOperationsHeading">
            <span className="eyebrow">Behind the guest journey</span>
            <h2>Every team knows what comes next.</h2>
            <p>Orders and handoffs stay visible until completion.</p>
          </div>

          <div className="howOperationsGrid">
            {operationsCards.map((card) => (
              <article className="howOperationsCard" key={card.title}>
                <div className="howOperationsMedia">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="howOperationsCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See how PayMyDine fits your service."
        body="Show us a typical order or payment. We will map the steps."
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        secondaryLabel="Explore the 9 Product Areas"
        secondaryHref="/platform"
      />
    </>
  );
}
