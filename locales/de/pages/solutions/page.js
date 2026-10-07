import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { Icon } from "@/locales/de/components/Icons";
import { productAreas } from "@/locales/de/data/site";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/solutions');
export default function SolutionsPage() {
  return <>
      <PageHero eyebrow={"9 PayMyDine Produktbereiche"} title={"Wählen Sie den Workflow, den Sie verbessern müssen, und halten Sie ihn dann mit dem Rest des Restaurants verbunden."} intro={"Jeder Produktbereich unten gibt die Aktionen an, die er unterstützt, den Restaurantkontext, den er behält, und die Metriken oder den Status, den das Team verwenden kann. Beginnen Sie mit einem Bereich oder kombinieren Sie alle neun."} image="/site-assets/extra/restaurant-team-planning.webp" accent="green" />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Produktabbildung nach Betriebsaufgaben</span>
            <h2>Wählen Sie den Bereich aus, der der Job-, Warteschlangen- oder Managementfrage entspricht, die Sie beheben möchten.</h2>
            <p>Reservierungen, Service, Küche, Bezahlung, Teams und Berichterstattung bleiben getrennte Verantwortlichkeiten, aber ihr nützlicher Kontext kann durch eine Betriebsschicht reisen.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {productAreas.map(item => <a className="offerCard offerCardWithImage" href={item.href} key={item.title}>
                <div className="offerCardMedia"><img src={item.image} alt="" loading="lazy" /></div>
                <div className="offerCardBody">
                  <span className="iconBubble"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="cardLink">Siehe Aktionen und Metriken <Icon name="arrow" size={15} /></span>
                </div>
              </a>)}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Verbunden durch Shared Context</span>
            <h2>Verschiedene Workflows können die gleiche Tabelle, Bestellung, Gast- und Zahlungsgeschichte verwenden.</h2>
            <p>Dies reduziert den Wiedereintritt und die wiederholte Statusüberprüfung, während gleichzeitig jeder Rolle ein fokussierter Bildschirm und eine Berechtigungseinstellung zugewiesen werden.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />9 Produktbereiche</span>
            <span><Icon name="check" size={16} />6 rollenbasierte Arbeitsbereiche</span>
            <span><Icon name="check" size={16} />5-stufiger Betriebsstrom</span>
            <span><Icon name="check" size={16} />3 Bill-Split-Verfahren</span>
            <span><Icon name="check" size={16} />9 Managementmetriken</span>
            <span><Icon name="check" size={16} />4 Integrationstypen</span>
          </div>
        </div>
      </section>

      <CTA title={"Weisen Sie die 9 Produktbereiche Ihren bestehenden Restaurantsystemen zu."} body={"Wir identifizieren, was PayMyDine besitzen soll, was in Ihrem POS oder Zahlungs-Setup bleiben soll und wo verbundener Kontext doppelte Arbeit entfernt."} />
    </>;
}
