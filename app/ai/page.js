import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';

export const metadata = {
  title: 'PayMyDine AI',
  description: 'AI assistance for restaurant questions, daily briefings, alerts, comparisons, forecasts and next-step investigation.'
};

const questions = [
  ['Ask a business question', 'Ask about revenue, guests, average check, table turnover, sales timing, best sellers, payment mix or profitability using the data available in the configured environment.'],
  ['Receive a daily briefing', 'Summarise the previous period, highlight unusual movement and list the metrics or locations that deserve a closer look.'],
  ['Investigate an alert', 'Move from an unusual signal to the source period, category, location or operating context behind it.'],
  ['Compare and forecast', 'Compare periods or locations and use historical patterns to support demand, sales and profitability forecasting.']
];

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="6 AI-assisted actions"
        title="Ask what changed, compare the source data and decide what to inspect next."
        intro="PayMyDine AI can support questions, daily briefings, alerts, comparisons, forecasting and next-step investigation across the restaurant data available in your setup. It supports decisions; it does not replace them."
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
              <span className="eyebrow">9 metrics in context</span>
              <h2>Start with a number, then keep the comparison period and operating cause visible.</h2>
              <p>Revenue, guests, average check, table turnover, sales timing, best sellers, payment mix, forecasts and profitability are more useful when the owner can move from the summary to the source view behind it.</p>
              <a className="textArrow" href="/solutions/insights">See the 9 management metrics <Icon name="arrow" size={15}/></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Decision support, not autopilot</span>
              <h2>Use AI to shorten investigation time while the team verifies and decides.</h2>
              <p>Every summary depends on the modules, data quality, comparison period and integrations available. The restaurant team keeps control of the operational or commercial action.</p>
              <a className="textArrow" href="/teams/owner">See the owner decision view <Icon name="arrow" size={15}/></a>
            </div>
          </article>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Available AI actions</span>
            <h2>Ask, summarise, compare, alert, forecast and investigate.</h2>
            <p>Exact outputs depend on the data, modules, locations and connected systems available in the PayMyDine environment.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Natural-language questions</span>
            <span><Icon name="check" size={16}/>Daily AI briefing</span>
            <span><Icon name="check" size={16}/>Smart alerts</span>
            <span><Icon name="check" size={16}/>Period and location comparison</span>
            <span><Icon name="check" size={16}/>Forecasting support</span>
            <span><Icon name="check" size={16}/>Next metric to investigate</span>
          </div>
        </div>
      </section>

      <CTA
        title="Bring one real management question to an AI demo."
        body="We will identify which PayMyDine data is needed, show the source views behind the answer and explain where human review remains essential."
      />
    </>
  );
}
