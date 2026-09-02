import { Icon } from './Icons';

export default function CTA({
  title = "PayMyDine'ı işletmenize nasıl uyarlayabileceğimizi görmeye hazır mısınız?",
  body = 'Kullandığınız araçları, ekip rollerini, sorumluluk devirlerini ve operasyon metriklerini paylaşın. Hangi ürün alanlarının tekrarlanan işi azaltacağını, hangi sistemlerin bağlı kalması gerektiğini birlikte belirleyelim.',
  primaryLabel = 'Demo Talep Edin',
  primaryHref = '/tr/contact',
  secondaryLabel = 'Nasıl Çalışır?',
  secondaryHref = '/tr/how-it-works'
}) {
  return (
    <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">Gerçek operasyonu haritalayın</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="ctaActions">
            <a className="button buttonLime" href={primaryHref}>{primaryLabel} <Icon name="arrow" size={17}/></a>
            <a className="button buttonOutlineLight" href={secondaryHref}>{secondaryLabel}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
