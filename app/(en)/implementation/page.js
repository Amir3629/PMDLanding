import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Implementation',
  description: 'A six-stage PayMyDine implementation path from operating discovery to configuration, validation, go-live and measurement.'
};

const steps = [
  ['01', 'Document the current operation', 'List roles, floor structure, order channels, guest touchpoints, current systems, repeated data entry and the metrics management uses today.'],
  ['02', 'Choose the first product scope', 'Select the smallest set of the 9 product areas that removes a clear workflow problem without replacing systems that should remain in place.'],
  ['03', 'Configure 6 role workspaces', 'Define permissions, queues, actions and visible status for owners, managers, service staff, kitchen, reservations and finance as required.'],
  ['04', 'Define integration contracts', 'For each POS, payment, delivery or accounting connection, document the source, fields, direction, refresh timing and responsible role.'],
  ['05', 'Validate real service scenarios', 'Test bookings, walk-ins, table orders, modifiers, kitchen handoffs, sold-out items, split bills, refunds and reporting before go-live.'],
  ['06', 'Go live and measure', 'Track agreed baseline metrics such as wait time, preparation time, table turnover, average check, payment time or repeat-visit rate, then adjust the configuration.']
];

export default function ImplementationPage() {
  return (
    <>
      <PageHero
        eyebrow="6-stage implementation"
        title="Configure PayMyDine around a documented restaurant workflow, then validate it with real service scenarios."
        intro="Implementation starts with roles, handoffs, current systems and baseline metrics. Product areas and integrations are selected only after the operating problem and responsible team are clear."
        image="/site-assets/extra/team-tech-meeting.webp"
        accent="green"
      />
      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div><span className="eyebrow">From baseline to measured go-live</span><h2>Six stages, each with a clear deliverable and owner.</h2></div>
            <p>The exact timeline varies by scope, but the sequence prevents configuration from starting before workflows, permissions, integrations and success metrics are understood.</p>
          </div>
          <div className="howFlowGrid">
            {steps.map(([number, title, body]) => <article className="howFlowCard" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <CTA title="Bring one workflow and one baseline metric to the implementation discussion." body="We will map the responsible roles, product areas, data fields, test scenarios and measurement plan needed for a practical first release." />
    </>
  );
}
