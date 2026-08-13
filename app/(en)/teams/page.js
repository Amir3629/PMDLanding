import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';
import { teamPages } from '@/data/teams';

export const metadata = {
  title: 'Team Workspaces',
  description: 'Six role-based PayMyDine workspaces for owners, managers, service staff, kitchen, reservations and finance.'
};

const order = ['owner', 'manager', 'service-staff', 'kitchen', 'reservations', 'finance'];

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="6 role workspaces"
        title="Show each role the queue, controls and metrics it is responsible for."
        intro="Owners need business signals. Managers need live exceptions. Service staff needs tables and guests. Kitchen needs tickets and timing. Reservations needs arrivals and capacity. Finance needs clean reporting."
        image="/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp"
        accent="green"
      />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Focused access, shared restaurant context</span>
            <h2>Six different responsibilities should not require six disconnected systems.</h2>
            <p>Each workspace limits noise and access while preserving the table, order, kitchen, reservation and payment context needed for the next handoff.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {order.map((slug) => {
              const page = teamPages[slug];
              return (
                <a className="offerCard offerCardWithImage" href={`/teams/${slug}`} key={slug}>
                  <div className="offerCardMedia"><img src={page.heroImage} alt="" loading="lazy" /></div>
                  <div className="offerCardBody">
                    <span className="iconBubble"><Icon name={slug === 'kitchen' ? 'kitchen' : slug === 'reservations' ? 'calendar' : slug === 'finance' ? 'chart' : 'team'} /></span>
                    <h3>{page.label}</h3>
                    <p>{page.intro}</p>
                    <span className="cardLink">See role signals and controls <Icon name="arrow" size={15}/></span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">One operating story underneath</span>
            <h2>Access changes by role. The status of the restaurant does not.</h2>
            <p>A table remains the same table as it moves from booking to order, preparation, service and payment, even though each role sees a different part of that journey.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Owner decisions</span>
            <span><Icon name="check" size={16}/>Manager exceptions</span>
            <span><Icon name="check" size={16}/>Service staff service</span>
            <span><Icon name="check" size={16}/>Kitchen tickets and timing</span>
            <span><Icon name="check" size={16}/>Reservation capacity</span>
            <span><Icon name="check" size={16}/>Finance reporting</span>
          </div>
        </div>
      </section>

      <CTA
        title="Map your team structure to the 6 PayMyDine workspaces."
        body="Bring your current responsibilities, permissions and handoff problems. We will show what each role should see and how the shared context moves between them."
      />
    </>
  );
}
