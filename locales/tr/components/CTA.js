import { Icon } from './Icons';
export default function CTA({
  title = "PayMyDine'i restorana haritalamaya hazır mısın?",
  body = "Mevcut araçlarınızı, rollerinizi, elofflarınızı ve işletim ölçümlerinizi getirin. Hangi ürün alanlarının tekrarlanan işi değiştirdiğini ve hangi sistemlerin bağlı kaldığını göstereceğiz.",
  primaryLabel = "Demo Rezervasyonu Yap",
  primaryHref = "/tr/contact",
  secondaryLabel = "Nasıl Çalışır",
  secondaryHref = "/tr/how-it-works"
}) {
  return <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">Harita gerçek operasyon</span>
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
