import { Icon } from './Icons';
const number = index => String(index + 1).padStart(2, '0');
export default function ProductDetailSections({
  details,
  productName = "Bu ürün alanı"
}) {
  if (!details) return null;
  const facts = details.facts || [];
  const workflow = details.workflow || [];
  const roleViews = details.roleViews || [];
  const metrics = details.metrics || [];
  const implementation = details.implementation || [];
  const faqs = details.faqs || [];
  return <>
      {facts.length > 0 && <section className="section highlightSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.factsEyebrow || `${productName} at a glance`}</span>
              <h2>{details.factsTitle || 'What is included, who uses it and what stays connected.'}</h2>
              <p>{details.factsIntro || 'These are product-scope facts, not promised customer performance results.'}</p>
            </div>
            <div className="highlightGrid">
              {facts.map(([value, title, body]) => <article className="highlightCard" key={`${value}-${title}`}>
                  <span>{value}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {workflow.length > 0 && <section className="section howFlowSection">
          <div className="container">
            <div className="splitHeading howFlowHeading">
              <div>
                <span className="eyebrow">{details.workflowEyebrow || `${productName} workflow`}</span>
                <h2>{details.workflowTitle || 'How the work moves from the first signal to a completed action.'}</h2>
              </div>
              <p>{details.workflowIntro || 'Each step keeps the restaurant context attached while responsibility moves to the next role.'}</p>
            </div>
            <div className="howFlowGrid">
              {workflow.map(([title, body], index) => <article className="howFlowCard" key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {roleViews.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.rolesEyebrow || 'What each role sees'}</span>
              <h2>{details.rolesTitle || 'The same restaurant context, presented around different responsibilities.'}</h2>
              <p>{details.rolesIntro || 'Role-based views reduce interface noise without creating separate versions of the restaurant.'}</p>
            </div>
            <div className="companyValueCards">
              {roleViews.map(([title, body]) => <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {metrics.length > 0 && <section className="section pricingSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.metricsEyebrow || 'Measure the workflow'}</span>
              <h2>{details.metricsTitle || 'Establish a baseline before claiming an improvement.'}</h2>
              <p>{details.metricsIntro || 'The exact metrics available depend on the modules, integrations and event data in the configured environment.'}</p>
            </div>
            <div className="pricingFactorGrid">
              {metrics.map(([title, body], index) => <article key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {implementation.length > 0 && <section className="section capabilitySection">
          <div className="container capabilityPanel">
            <div>
              <span className="eyebrow">{details.implementationEyebrow || 'Configuration and data requirements'}</span>
              <h2>{details.implementationTitle || 'Define the operating rules before expecting the workflow to perform.'}</h2>
              <p>{details.implementationIntro || 'Implementation should document the source of truth, role ownership, status definitions and measurement method.'}</p>
            </div>
            <div className="capabilityList">
              {implementation.map(item => <span key={item}><Icon name="check" size={16} />{item}</span>)}
            </div>
          </div>
        </section>}

      {faqs.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.faqEyebrow || 'Practical questions'}</span>
              <h2>{details.faqTitle || 'What to clarify before choosing the scope.'}</h2>
              <p>{details.faqIntro || 'The exact answer can depend on the restaurant setup, selected modules and connected systems.'}</p>
            </div>
            <div className="companyValueCards">
              {faqs.map(([title, body]) => <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}
    </>;
}
