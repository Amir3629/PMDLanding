import { imageGroups } from '@/data/site';
import { Icon } from './Icons';

const steps = [

  {
    title: 'Action starts',
    body:
      'A guest scans a table QR, reception seats a booking, service staff opens an order or a manager changes a table.',
    icon: 'operations'
  },

  {
    title: 'Context is attached',
    body:
      'Table, guest, order, timing, notes and permissions travel with the action instead of being entered again.',
    icon: 'table'
  },

  {
    title: 'The responsible role receives it',
    body:
      'Service staff sees service work, kitchen sees preparation work and managers see exceptions and live status.',
    icon: 'kitchen'
  },

  {
    title: 'Service and checkout complete',
    body:
      'Preparation, ready status, handoff and payment continue from the same restaurant context, including three bill-split methods.',
    icon: 'card'
  },

  {
    title: 'Activity becomes insight and AI assistance',
    body:
      'Revenue, guests, average check, table turnover, sales timing, payment mix, forecasts and profitability become available for reporting, comparisons, anomaly review and AI-assisted questions.',
    icon: 'chart'
  }

];

export default function Workflow({ variant = 'home' }) {

  const workflowImage =
    variant === 'platform'
      ? imageGroups.comments[11]
      : imageGroups.pos[1];

  return (

    <section className="section workflowSection">

      <div className="container workflowShowcase">

        <div className="workflowShowcaseCopy">

          <span className="eyebrow">
            5-step operating flow + AI review
          </span>

          <h2>
            Every restaurant action creates context.
            PayMyDine keeps it connected so the next role —
            and AI — can understand what happened.
          </h2>

          <p>
            The same context follows the journey from guest or staff action
            through preparation, service and payment into reporting.
            PayMyDine AI can then help summarise the period, compare results,
            surface unusual movement and identify which metric or source view
            management should inspect next.
          </p>

        </div>

        <div className="workflowShowcaseVisual">

          <img
            src={workflowImage}
            alt="PayMyDine restaurant workflow"
            loading="lazy"
          />

        </div>

      </div>


      <div className="container">

        <div
          className="workflowJourneyPanel"
          aria-label="PayMyDine restaurant journey"
        >

          {steps.map((step, index) => (

            <article
              className="workflowJourneyItem"
              key={step.title}
            >

              <div className="workflowJourneyTop">

                <span className="workflowJourneyNumber">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="workflowJourneyIcon">
                  <Icon name={step.icon} size={22}/>
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.body}</p>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}
