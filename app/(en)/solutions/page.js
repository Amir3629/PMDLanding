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
        title="Nine modules. Your restaurant, connected."
        intro="Choose the workflow you want to improve. Add more modules as you need them."
        image="/site-assets/extra/restaurant-team-planning.webp"
        accent="green"
      />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Product map by operational job</span>
            <h2>Choose the job. Find the right module.</h2>
            <p>Every module has a clear job. The data stays connected.</p>
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
            <h2>One shared view of the guest journey.</h2>
            <p>Less re-entry. Clear tasks for every team.</p>
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

      <CTA title="Find your ideal PayMyDine setup." body="Keep the systems that work. Connect the modules you need." />
    </>
  );
}
