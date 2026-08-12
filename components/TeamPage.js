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
                <span className="eyebrow">Workspace in context</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <a className="textArrow" href="/teams">Explore all team workspaces <Icon name="arrow" size={15}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Role-focused workspace</span>
            <h2>Keep the right information close to the responsibility.</h2>
            <p>PayMyDine separates role views so people can stay focused while the restaurant continues to operate as one system.</p>
          </div>
          <div className="capabilityList">
            {page.bullets.map((item) => <span key={item}><Icon name="check" size={16}/>{item}</span>)}
          </div>
        </div>
      </section>

      <CTA
        title={`Want to see the ${page.label} workspace in context?`}
        body="Book a demo and we’ll walk through the roles, modules and operating flow that fit your restaurant."
      />
    </>
  );
}
