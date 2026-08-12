import PageHero from './PageHero';
import CTA from './CTA';
import { Icon } from './Icons';

export default function SolutionPage({ page }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.heroImage} accent={page.accent} />
      <section className="section highlightSection">
        <div className="container highlightGrid">
          {page.highlights.map(([title, body], index) => (
            <article className="highlightCard" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          {page.story.map((item, index) => (
            <article className={`storyFeature ${index % 2 ? 'reverse' : ''}`} key={item.title}>
              <div className="storyFeatureImage"><img src={item.image} alt="" loading="lazy" /></div>
              <div className="storyFeatureCopy"><span className="eyebrow">{page.storyEyebrow || page.eyebrow}</span><h2>{item.title}</h2><p>{item.body}</p><a className="textArrow" href="/how-it-works">See the 5-step operating flow <Icon name="arrow" size={15}/></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">{page.capabilityEyebrow || 'What the team can do'}</span>
            <h2>{page.capabilityTitle || 'Keep the required actions and metrics in one workflow.'}</h2>
            {page.capabilityBody && <p>{page.capabilityBody}</p>}
          </div>
          <div className="capabilityList">{page.bullets.map((item) => <span key={item}><Icon name="check" size={16}/>{item}</span>)}</div>
        </div>
      </section>
      <CTA title={page.ctaTitle} body={page.ctaBody} />
    </>
  );
}
