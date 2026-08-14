import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';
import { productAreas } from '@/data/site';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/solutions');

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="9 PayMyDine product areas"
        title="Choose the workflow you need to improve, then keep it connected to the rest of the restaurant."
        intro="Each product area below states the actions it supports, the restaurant context it keeps and the metrics or status the team can use. Start with one area or combine all nine."
        image="/site-assets/extra/restaurant-team-planning.webp"
        accent="green"
      />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Product map by operational job</span>
            <h2>Pick the area that matches the job, queue or management question you want to fix.</h2>
            <p>Reservations, service, kitchen, payment, teams and reporting remain separate responsibilities, but their useful context can travel through one operating layer.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {productAreas.map((item) => (
              <a className="offerCard offerCardWithImage" href={item.href} key={item.title}>
                <div className="offerCardMedia"><img src={item.image} alt="" loading="lazy" /></div>
                <div className="offerCardBody">
                  <span className="iconBubble"><Icon name={item.icon}/></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="cardLink">See actions and metrics <Icon name="arrow" size={15}/></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Connected by shared context</span>
            <h2>Different workflows can use the same table, order, guest and payment story.</h2>
            <p>That reduces re-entry and repeated status checking while still giving each role a focused screen and permission set.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>9 product areas</span>
            <span><Icon name="check" size={16}/>6 role workspaces</span>
            <span><Icon name="check" size={16}/>5-step operating flow</span>
            <span><Icon name="check" size={16}/>3 bill-split methods</span>
            <span><Icon name="check" size={16}/>9 management metrics</span>
            <span><Icon name="check" size={16}/>4 integration types</span>
          </div>
        </div>
      </section>

      <CTA title="Map the 9 product areas to your existing restaurant systems." body="We will identify what PayMyDine should own, what should stay in your POS or payment setup and where connected context removes duplicate work." />
    </>
  );
}
