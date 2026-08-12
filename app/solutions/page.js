import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';
import { productAreas } from '@/data/site';

export const metadata = {
  title: 'Product Areas',
  description: 'The nine PayMyDine product areas covering restaurant operations, guests, teams, intelligence, growth and integrations.'
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="PayMyDine product areas"
        title="One restaurant platform. Nine clear product areas."
        intro="Explore the capabilities behind PayMyDine—from daily operations and reservations to ordering, payments, guest growth, analytics, team management and integrations."
        image="/site-assets/extra/restaurant-team-planning.webp"
        accent="green"
      />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">The PayMyDine product map</span>
            <h2>Choose the area that matches the work you want to improve.</h2>
            <p>Each area keeps its own workflow and focus while remaining connected to the same restaurant operating layer.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {productAreas.map((item) => (
              <a className="offerCard offerCardWithImage" href={item.href} key={item.title}>
                <div className="offerCardMedia"><img src={item.image} alt="" loading="lazy" /></div>
                <div className="offerCardBody">
                  <span className="iconBubble"><Icon name={item.icon}/></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="cardLink">Explore product area <Icon name="arrow" size={15}/></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Connected by design</span>
            <h2>Different product areas. One restaurant underneath.</h2>
            <p>Operations, guests, teams, analytics and integrations can work as one system instead of becoming a collection of disconnected tools.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Restaurant operations</span>
            <span><Icon name="check" size={16}/>Reservations & table management</span>
            <span><Icon name="check" size={16}/>Ordering, kitchen & menu</span>
            <span><Icon name="check" size={16}/>Payments & guest ordering</span>
            <span><Icon name="check" size={16}/>Analytics & profitability</span>
            <span><Icon name="check" size={16}/>Guest growth & integrations</span>
          </div>
        </div>
      </section>

      <CTA title="Want to map the right product areas to your restaurant?" body="Book a demo and we’ll walk through the workflows, team roles and integrations that fit your operation." />
    </>
  );
}
