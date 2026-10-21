import { offerCards } from "@/locales/de/data/site";
import { Icon } from './Icons';
const HOME_OFFER_IMAGES = {
  'PayMyDine KI': '/site-assets/home-product-areas-20261005/ai.webp',
  "Analysen, Prognosen und Rentabilität": '/site-assets/home-product-areas-20261005/analytics-sunlit-cafe.webp',
  "Gäste-CRM, Marketing & Wachstum": '/site-assets/home-product-areas-20261005/guest-crm-marketing-growth.webp',
  "Integrationen, Standorte & Warenbestand": '/site-assets/home-product-areas-20261005/integrations-multilocation-inventory.webp'
};
export default function OfferGrid({
  compact = false
}) {
  return <section className={`section offerSection ${compact ? 'compactSection' : ''}`} id="what-we-offer">

      <div className="container">

        {!compact && <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              9 vernetzte Produktbereiche
            </span>

            <h2>
              Eine Plattform. Neun vernetzte Module.
            </h2>



          </div>}

        <div className="offerGrid offerGridVisual">

          {offerCards.map(card => <a className="offerCard offerCardWithImage" href={card.href} key={card.title}>

              <div className="offerCardMedia">

                <img src={compact ? card.compactImage : HOME_OFFER_IMAGES[card.title] || card.image} alt="" loading="lazy" />

              </div>

              <div className="offerCardBody">

                <span className="iconBubble">
                  <Icon name={card.icon} />
                </span>

                <h3>{card.title}</h3>

                <p>{card.body}</p>

                <span className="cardLink">
                  Sehen Sie den Ablauf
                  {' '}
                  <Icon name="arrow" size={15} />
                </span>

              </div>

            </a>)}

        </div>

      </div>

    </section>;
}
