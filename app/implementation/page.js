import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Implementation',
  description: 'How PayMyDine moves from restaurant discovery and configuration to team setup, integrations and go-live.'
};

const steps = [
  ['01', 'Understand the operation', 'Map the restaurant concept, team structure, current technology, guest journey and the workflows that matter most.'],
  ['02', 'Choose the first scope', 'Select the PayMyDine modules, team workspaces and guest touchpoints that belong in the initial setup.'],
  ['03', 'Configure roles & workflows', 'Shape permissions, floor structure, operational views and the handoffs between teams around the restaurant.'],
  ['04', 'Review integrations', 'Confirm supported POS or payment connections based on the capabilities available from the existing environment.'],
  ['05', 'Prepare the team', 'Walk the relevant roles through the views and actions they will use during the restaurant day.'],
  ['06', 'Go live & evolve', 'Launch the configured setup, review how it performs in practice and extend the platform as the restaurant needs change.']
];

export default function ImplementationPage() {
  return (
    <>
      <PageHero
        eyebrow="Implementation"
        title="Start with the restaurant. Configure the technology around it."
        intro="A PayMyDine rollout begins by understanding how the restaurant works today, then shaping modules, roles, guest journeys and supported integrations around that operating model."
        image="/site-assets/extra/team-tech-meeting.webp"
        accent="green"
      />
      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div><span className="eyebrow">From discovery to go-live</span><h2>A clear path from current setup to working restaurant flow.</h2></div>
            <p>The exact sequence can vary by restaurant, but the goal stays the same: configure around real responsibilities and real operating moments.</p>
          </div>
          <div className="howFlowGrid">
            {steps.map(([number, title, body]) => <article className="howFlowCard" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <CTA title="Ready to map your PayMyDine setup?" body="Book a demo and tell us how your restaurant works today. We’ll use that context to shape the right implementation conversation." />
    </>
  );
}
