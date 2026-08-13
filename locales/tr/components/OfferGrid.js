import { offerCards } from "@/locales/tr/data/site";
import { Icon } from './Icons';
export default function OfferGrid({
  compact = false
}) {
  return <section className={`section offerSection ${compact ? 'compactSection' : ''}`} id="what-we-offer">

      <div className="container">

        {!compact && <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              Birbirine bağlı 9 ürün alanı
            </span>

            <h2>
              Dokuz bağlantılı alan bir işletim resmi yaratır -
PayMyDine AI, neyin değiştiğini açıklamak için bağlamı verin.
            </h2>

            <p>
              Her alan kendi başına gerçek bir restoran akışı çözer.
Birlikte bağlanır, rezervasyonlar, masalar, siparişler, mutfak,
Ödemeler, konuklar, takımlar, analitik ve entegrasyonlar yaratır
AI, dönemleri karşılaştırmak için kullanabilir, bayrak sıra dışı
Hareket, tahminler ve nokta yönetimi
Bir sonraki dikkatinizi hak ediyor.
            </p>

          </div>}

        <div className="offerGrid offerGridVisual">

          {offerCards.map(card => <a className="offerCard offerCardWithImage" href={card.href} key={card.title}>

              <div className="offerCardMedia">

                <img src={compact ? card.compactImage : card.image} alt="" loading="lazy" />

              </div>

              <div className="offerCardBody">

                <span className="iconBubble">
                  <Icon name={card.icon} />
                </span>

                <h3>{card.title}</h3>

                <p>{card.body}</p>

                <span className="cardLink">
                  İş akışına bakın
                  {' '}
                  <Icon name="arrow" size={15} />
                </span>

              </div>

            </a>)}

        </div>

      </div>

    </section>;
}
