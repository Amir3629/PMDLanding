import { imageGroups } from '@/data/site';
import { Icon } from './Icons';

const steps = [
  { title: 'Guest or Staff Action', body: 'The journey starts from the table, reservation flow or a team workspace.', icon: 'operations' },
  { title: 'Restaurant Context', body: 'Table, order and guest context stay attached to the work that follows.', icon: 'table' },
  { title: 'Role-Specific Action', body: 'The next person sees the information needed for their responsibility.', icon: 'kitchen' },
  { title: 'Service & Checkout', body: 'Preparation, service and payment continue without breaking the operating picture.', icon: 'card' },
  { title: 'Insight & Assistance', body: 'Live activity becomes reporting, context and AI-assisted understanding for the business.', icon: 'chart' }
];

export default function Workflow({ variant = 'home' }) {
  const workflowImage = variant === 'platform' ? imageGroups.comments[11] : imageGroups.pos[1];

  return (
    <section className="section workflowSection">
      <div className="container workflowShowcase">
        <div className="workflowShowcaseCopy">
          <span className="eyebrow">One restaurant journey</span>
          <h2>Context moves with the work, from the guest moment to the business decision.</h2>
          <p>PayMyDine keeps the useful information connected while each role works from a view designed around what they need to do next.</p>
        </div>
        <div className="workflowShowcaseVisual">
          <img src={workflowImage} alt="PayMyDine restaurant workflow" loading="lazy" />
        </div>
      </div>
      <div className="container">
        <div className="workflowJourneyPanel" aria-label="PayMyDine restaurant journey">
          {steps.map((step, index) => (
            <article className="workflowJourneyItem" key={step.title}>
              <div className="workflowJourneyTop">
                <span className="workflowJourneyNumber">{String(index + 1).padStart(2, '0')}</span>
                <span className="workflowJourneyIcon"><Icon name={step.icon} size={22}/></span>
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
