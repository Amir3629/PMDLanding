import PageHero from './PageHero';
import CTA from './CTA';
import { Icon } from './Icons';

export default function TeamPage({ page }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.heroImage} accent={page.accent} />

      <section className="section highlightSection">
        <div className="container highlightGrid">
          {page.highlights.map(([title, body], index) => (
            <article className="highlightCard" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          {page.story.map((item, index) => (
            <article className={`storyFeature ${index % 2 ? 'reverse' : ''}`} key={item.title}>
              <div className="storyFeatureImage"><img src={item.image} alt="" loading="lazy" /></div>
              <div className="storyFeatureCopy">
                <span className="eyebrow">Role workflow in context</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <a className="textArrow" href="/teams">Compare all 6 workspaces <Icon name="arrow" size={15}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Signals and controls for this role</span>
            <h2>Show the information needed for the job without exposing unrelated admin controls.</h2>
            <p>Role-based access changes what a person can see and do. The underlying table, order, kitchen, reservation and payment context remains part of one restaurant flow.</p>
          </div>
          <div className="capabilityList">
            {page.bullets.map((item) => <span key={item}><Icon name="check" size={16}/>{item}</span>)}
          </div>
        </div>
      </section>

      <CTA
        title={`See the ${page.label} workspace with your real roles and workflow.`}
        body="Bring your current responsibilities, handoffs and reporting questions. We will map them to the controls and context this workspace should include."
      />
    </>
  );
}
