import { Icon } from './Icons';
export default function CTA({
  title = "Bereit, PayMyDine Ihrem Restaurant zuzuordnen?",
  body = "Bringen Sie Ihre aktuellen Tools, Rollen, Handoffs und Betriebsmetriken mit. Wir zeigen, welche Produktbereiche Duplikate ersetzen und welche Systeme vernetzt bleiben sollen.",
  primaryLabel = "Demo buchen",
  primaryHref = "/de/contact",
  secondaryLabel = "So funktioniert es",
  secondaryHref = "/de/how-it-works"
}) {
  return <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">Karte der realen Operation</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="ctaActions">
            <a className="button buttonLime" href={primaryHref}>{primaryLabel} <Icon name="arrow" size={17} /></a>
            <a className="button buttonOutlineLight" href={secondaryHref}>{secondaryLabel}</a>
          </div>
        </div>
      </div>
    </section>;
}
