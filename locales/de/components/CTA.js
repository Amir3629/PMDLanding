import { Icon } from './Icons';
export default function CTA({
  title = "PayMyDine für Ihr Restaurant entdecken.",
  body = "Zeigen Sie uns Ihre Abläufe. Wir finden die passenden Module und Anbindungen.",
  primaryLabel = "Demo buchen",
  primaryHref = "/de/contact",
  secondaryLabel = "So funktioniert es",
  secondaryHref = "/de/how-it-works"
}) {
  return <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">Passend zu Ihrem Betrieb</span>
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
