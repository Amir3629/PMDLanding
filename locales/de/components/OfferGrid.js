import { offerCards } from "@/locales/de/data/site";
import { Icon } from './Icons';
const HOME_OFFER_IMAGES = {
  'PayMyDine AI': '/site-assets/home-product-areas-20261005/ai.webp',
  "Analysen, Prognosen und Rentabilität": '/site-assets/home-product-areas-20261005/analytics-sunlit-cafe.webp',
  "Gast CRM, Marketing & Wachstum": '/site-assets/home-product-areas-20261005/guest-crm-marketing-growth.webp',
  "Integrationen, Multi-Location & Inventory": '/site-assets/home-product-areas-20261005/integrations-multilocation-inventory.webp'
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
              Neun zusammenhängende Bereiche erzeugen ein Operationsbild -
und geben PayMyDine AI den Kontext, um zu erklären, was sich geändert hat.
            </h2>

            <p>
              Jeder Bereich löst einen echten Restaurant-Workflow selbst.
Verbunden, Reservierungen, Tische, Bestellungen, Küche,
Zahlungen, Gäste, Teams, Analysen und Integrationen erstellen
den Kontext KI verwenden kann, um Perioden zu vergleichen, Flag ungewöhnlich
Bewegung, Unterstützungsprognosen und Punktmanagement in Richtung
Was als nächstes Aufmerksamkeit verdient.
            </p>

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
                  Sehen Sie den Workflow
                  {' '}
                  <Icon name="arrow" size={15} />
                </span>

              </div>

            </a>)}

        </div>

      </div>

    </section>;
}
