import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { Icon } from '@/components/Icons';
import ProductDetailSections from '@/components/ProductDetailSections';

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

const aiDetails = {
  factsEyebrow: 'AI scope and safeguards',
  factsTitle: 'Six assistance modes can work across nine management metrics, with human review kept in the workflow.',
  factsIntro: 'These counts describe product scope. Accuracy and usefulness depend on source data, definitions, permissions and the question being asked.',
  facts: [
    ['06', 'AI-assisted actions', 'Questions, briefings, alerts, comparisons, forecasting and next-step investigation form the current AI scope.'],
    ['09', 'management metrics', 'Revenue, guests, average check, table turnover, sales timing, best sellers, payment mix, forecasting and profitability provide business context.'],
    ['04', 'decision roles', 'Owner, manager, finance and multi-location leadership can investigate the same data for different decisions.'],
    ['01', 'human decision owner', 'AI can organise evidence and suggest what to inspect; the restaurant team verifies and decides.']
  ],
  workflowEyebrow: 'A responsible AI investigation',
  workflowTitle: 'How a restaurant question moves from source data to a reviewed next action.',
  workflowIntro: 'The source, period and metric definition should remain visible throughout the investigation.',
  workflow: [
    ['Choose a specific question', 'Start with a decision such as what changed, which location moved or why an item margin requires attention.'],
    ['Confirm the available source', 'Identify the modules, locations, periods and definitions that can support the question.'],
    ['Generate a summary or comparison', 'Use the available data to describe the movement, comparison or forecast without hiding missing inputs.'],
    ['Inspect the evidence', 'Open the source metric, period, location, category or item behind the AI output.'],
    ['Decide and review the result', 'A person chooses the action, records the question to revisit and compares the same metric after the operating change.']
  ],
  rolesTitle: 'AI should shorten investigation for each decision role without giving every role the same answer.',
  rolesIntro: 'Permissions and business context determine which questions and source views should be available to each person.',
  roleViews: [
    ['Owner', 'Compares periods or locations, reviews profitability movement and asks which business signal deserves attention.'],
    ['Manager', 'Investigates shift exceptions, table or sales movement and the operating events behind an unusual result.'],
    ['Finance', 'Checks revenue, payment, category and cost context before accepting a financial summary or comparison.'],
    ['Multi-location leadership', 'Compares sites using consistent definitions while retaining the ability to inspect the local source context.']
  ],
  metricsEyebrow: 'Evaluate the AI layer',
  metricsTitle: 'Measure traceability and decision usefulness, not only how fluent the answer sounds.',
  metricsIntro: 'An AI feature should be reviewed against documented questions, source coverage and actual outcomes in the restaurant workflow.',
  metrics: [
    ['Source coverage', 'Track whether the data required by a question is present, current and mapped to the correct location or period.'],
    ['Answer traceability', 'Review whether the user can move from a summary back to the metric, filter and source context behind it.'],
    ['Forecast error', 'Compare forecasted and actual results using the same period and definition instead of presenting forecasts as guarantees.'],
    ['Investigation time', 'Baseline how long a defined management question takes to investigate before and after the AI-assisted workflow.']
  ],
  implementationTitle: 'Define the data contract and human-review boundary before enabling AI outputs.',
  implementationIntro: 'The safest AI implementation is explicit about what the system knows, what it cannot see and who owns the final decision.',
  implementation: [
    'Approved data sources, locations and historical periods',
    'Metric definitions and comparison rules',
    'Role permissions for questions and source views',
    'Minimum data-quality and freshness checks',
    'Human review for operational and commercial actions',
    'Documented exclusions, limitations and escalation path'
  ],
  faqs: [
    ['Does PayMyDine AI run the restaurant automatically?', 'No. The current positioning is AI assistance and decision support, not autonomous operational control.'],
    ['Can AI answer a question without the source data?', 'A useful answer requires the relevant data, definition, period and permissions. Missing inputs should be shown, not silently invented.'],
    ['Are forecasts guaranteed?', 'No. Forecasts should be measured against actual results and reviewed as estimates, not promises.'],
    ['Can different roles ask different questions?', 'Yes. Role permissions and available source views should control the questions and depth appropriate to each responsibility.']
  ]
};

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

      <ProductDetailSections details={aiDetails} productName="PayMyDine AI" />

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
