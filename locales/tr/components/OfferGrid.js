import { offerCards } from '@/locales/tr/data/site';
import { Icon } from './Icons';

export default function OfferGrid({ compact = false }) {
  return (
    <section
      className={`section offerSection ${compact ? 'compactSection' : ''}`}
      id="what-we-offer"
    >
      <div className="container">
        {!compact && (
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">
              Birbirine bağlı 9 ürün alanı
            </span>

            <h2>
              Dokuz bağlantılı alan tek bir operasyon resmi oluşturur ve
              PayMyDine Yapay Zekâya neyin değiştiğini açıklayacak bağlamı sağlar.
            </h2>

            <p>
              Her alan tek başına gerçek bir restoran iş akışını çözer.
              Rezervasyonlar, masalar, siparişler, mutfak, ödemeler, müşteriler,
              ekipler, analiz ve entegrasyonlar birlikte çalıştığında Yapay Zekâ;
              dönemleri karşılaştırmak, olağandışı hareketleri işaretlemek,
              tahminleri desteklemek ve yönetimin bir sonraki adımda neye
              odaklanması gerektiğini göstermek için gereken bağlama sahip olur.
            </p>
          </div>
        )}

        <div className="offerGrid offerGridVisual">
          {offerCards.map((card) => (
            <a
              className="offerCard offerCardWithImage"
              href={card.href}
              key={card.title}
            >
              <div className="offerCardMedia">
                <img
                  src={compact ? card.compactImage : card.image}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="offerCardBody">
                <span className="iconBubble">
                  <Icon name={card.icon}/>
                </span>

                <h3>{card.title}</h3>
                <p>{card.body}</p>

                <span className="cardLink">
                  İş akışını inceleyin{' '}
                  <Icon name="arrow" size={15}/>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
