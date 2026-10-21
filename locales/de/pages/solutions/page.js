import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { Icon } from "@/locales/de/components/Icons";
import { productAreas } from "@/locales/de/data/site";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/solutions');
export default function SolutionsPage() {
  return <>
      <PageHero eyebrow={"9 PayMyDine Produktbereiche"} title={"Neun Module. Ein vernetzter Betrieb."} intro={"Wählen Sie den Ablauf, den Sie verbessern möchten. Weitere Module können hinzukommen."} image="/site-assets/extra/restaurant-team-planning.webp" accent="green" />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Produktabbildung nach Betriebsaufgaben</span>
            <h2>Die Aufgabe kennen. Das passende Modul finden.</h2>
            <p>Jedes Modul erfüllt eine Aufgabe. Die Daten bleiben verbunden.</p>
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
            <h2>Ein gemeinsamer Blick auf die Gästereise.</h2>
            <p>Weniger doppelte Eingaben. Klare Aufgaben für jedes Team.</p>
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

      <CTA title={"Finden Sie Ihr PayMyDine-Setup."} body={"Bestehende Systeme behalten und passende Module anbinden."} />
    </>;
}
