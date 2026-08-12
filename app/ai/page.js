import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';

export const metadata = {
  title: 'PayMyDine AI',
  description: 'AI assistance for restaurant summaries, performance questions, patterns and decision support inside PayMyDine.'
};

const questions = [
  ['Ask questions', 'Ask natural questions about restaurant performance, guests, operations, menu behaviour and profitability.'],
  ['Daily AI briefing', 'Start the day with a concise view of the signals, changes and priorities that deserve attention.'],
  ['Smart alerts', 'Surface unusual movement and meaningful changes so the team can investigate what matters sooner.'],
  ['Forecasting', 'Use historical and live signals to support demand, sales and profitability forecasting.']
];

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="PayMyDine AI"
        title="Ask better questions of your restaurant data."
        intro="PayMyDine AI is designed to make restaurant information easier to explore, summarise and understand—so owners and managers can move from data to a clearer next question."
        image="/site-assets/owner/2.webp"
        accent="green"
      />

      <section className="section highlightSection">
        <div className="container highlightGrid">
          {questions.map(([title, body], index) => (
            <article className="highlightCard" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          <article className="storyFeature">
            <div className="storyFeatureImage"><img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">AI with restaurant context</span>
              <h2>Useful assistance starts with the information behind the question.</h2>
              <p>AI becomes more valuable when it can work alongside the sales, table, reservation, kitchen and menu signals already visible in the restaurant operating environment.</p>
              <a className="textArrow" href="/solutions/insights">Explore restaurant insights <Icon name="arrow" size={15}/></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Decision support</span>
              <h2>AI should make the picture easier to understand, not hide the source.</h2>
              <p>Summaries and observations should support human decisions. Owners and managers still need the underlying restaurant context to verify, compare and decide what to do next.</p>
              <a className="textArrow" href="/teams/owner">Explore the owner workspace <Icon name="arrow" size={15}/></a>
            </div>
          </article>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">AI assistance, not autopilot</span>
            <h2>Use AI to understand the restaurant. Keep decisions with the team.</h2>
            <p>Available AI outputs depend on the data, modules and restaurant configuration available in the PayMyDine environment.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Ask questions</span>
            <span><Icon name="check" size={16}/>Daily AI briefing</span>
            <span><Icon name="check" size={16}/>Smart alerts</span>
            <span><Icon name="check" size={16}/>Forecasting</span>
            <span><Icon name="check" size={16}/>Profitability by item or location</span>
            <span><Icon name="check" size={16}/>Next best action</span>
          </div>
        </div>
      </section>

      <CTA
        title="Want to explore AI around your restaurant workflow?"
        body="We can show how AI assistance fits alongside the PayMyDine data, roles and operating views relevant to your setup."
      />
    </>
  );
}
