import { Icon } from './Icons';
const number = index => String(index + 1).padStart(2, '0');
export default function ProductDetailSections({
  details,
  productName = "Dieser Produktbereich"
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
              <h2>{details.factsTitle || "Was ist enthalten, wer nutzt es und was bleibt in Verbindung."}</h2>
              <p>{details.factsIntro || "Dies sind Produkt-Scope-Fakten, nicht versprochene Kundenleistungsergebnisse."}</p>
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
                <h2>{details.workflowTitle || "Wie sich die Arbeit vom ersten Signal zu einer abgeschlossenen Aktion bewegt."}</h2>
              </div>
              <p>{details.workflowIntro || "Jeder Schritt hält den Restaurantkontext fest, während die Verantwortung in die nächste Rolle wechselt."}</p>
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
              <span className="eyebrow">{details.rolesEyebrow || "Was jede Rolle sieht"}</span>
              <h2>{details.rolesTitle || "Der gleiche Restaurantkontext, der um verschiedene Verantwortlichkeiten herum präsentiert wird."}</h2>
              <p>{details.rolesIntro || "Rollenbasierte Ansichten reduzieren Schnittstellengeräusche, ohne separate Versionen des Restaurants zu erstellen."}</p>
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
              <span className="eyebrow">{details.metricsEyebrow || "Messen Sie den Workflow"}</span>
              <h2>{details.metricsTitle || "Legen Sie eine Baseline fest, bevor Sie eine Verbesserung geltend machen."}</h2>
              <p>{details.metricsIntro || "Die genauen verfügbaren Metriken hängen von den Modulen, Integrationen und Ereignisdaten in der konfigurierten Umgebung ab."}</p>
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
              <span className="eyebrow">{details.implementationEyebrow || "Konfigurations- und Datenanforderungen"}</span>
              <h2>{details.implementationTitle || "Definieren Sie die Betriebsregeln, bevor Sie erwarten, dass der Workflow ausgeführt wird."}</h2>
              <p>{details.implementationIntro || "Die Umsetzung sollte die Quelle der Wahrheit, Rollenbesitz, Statusdefinitionen und Messmethode dokumentieren."}</p>
            </div>
            <div className="capabilityList">
              {implementation.map(item => <span key={item}><Icon name="check" size={16} />{item}</span>)}
            </div>
          </div>
        </section>}

      {faqs.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.faqEyebrow || "Praktische Fragen"}</span>
              <h2>{details.faqTitle || "Was zu klären ist, bevor Sie den Anwendungsbereich auswählen."}</h2>
              <p>{details.faqIntro || "Die genaue Antwort kann vom Restaurant-Setup, ausgewählten Modulen und angeschlossenen Systemen abhängen."}</p>
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
