import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';
import { teamPages } from '@/data/teams';

export const metadata = {
  title: 'Team Workspaces',
  description: 'Role-based PayMyDine workspaces for owners, managers, front of house, kitchen, reservations and finance.'
};

const order = ['owner', 'manager', 'front-of-house', 'kitchen', 'reservations', 'finance'];

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="For every restaurant role"
        title="One platform. A workspace built around each responsibility."
        intro="Owners need decisions. Managers need live context. Front of house needs tables and guests. Kitchen needs preparation work. PayMyDine keeps those views focused while the restaurant stays connected."
        image="/site-assets/extra/role-dashboard.webp"
        accent="green"
      />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Role-based by design</span>
            <h2>Give each team member the view that fits the job.</h2>
            <p>Separate workspaces reduce noise without separating the restaurant into disconnected systems.</p>
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
                    <span className="cardLink">Explore workspace <Icon name="arrow" size={15}/></span>
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
            <span className="eyebrow">One restaurant underneath</span>
            <h2>Different screens should still tell the same operational story.</h2>
            <p>Role-based access changes what each person sees, not whether the table, order, kitchen, reservation and payment journeys belong to the same restaurant flow.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Role-based access</span>
            <span><Icon name="check" size={16}/>Focused workspaces</span>
            <span><Icon name="check" size={16}/>Shared operating context</span>
            <span><Icon name="check" size={16}/>Clearer team handoffs</span>
            <span><Icon name="check" size={16}/>Owner visibility</span>
            <span><Icon name="check" size={16}/>AI-assisted understanding</span>
          </div>
        </div>
      </section>

      <CTA
        title="See the right PayMyDine view for every role in your restaurant."
        body="We can map your team structure and show how workspaces, permissions and modules can fit the way your operation is organised."
      />
    </>
  );
}
