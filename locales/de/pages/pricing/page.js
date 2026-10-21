import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/pricing');
const factors = [["Restaurant- und Standortumfang", "Anzahl der Standorte, Komplexität des Bodens, Servicemodell, Bestellkanäle und Umgebungen, die die Konfiguration unterstützen muss."], ["Ausgewählte Produktbereiche", "Welche der 9 Produktbereiche sind jetzt enthalten, welche sind später geplant und welche aktuellen Systeme bleiben maßgeblich."], ["Rolle und Zugangsumfang", "Welche der 6 Rollen-Arbeitsbereiche erforderlich sind, wie sich die Berechtigungen unterscheiden und wie viele Teams oder Standorte jede Ansicht benötigen."], ["Integrations- und Umsetzungsarbeiten", "Die unterstützten Kassensystem, Zahlungs-, Buchhaltungs- oder Lieferverbindungen sowie Konfiguration, Migration, Validierung und Teamvorbereitung."]];
export default function PricingPage() {
  return <>
      <PageHero eyebrow={"4 Preisangaben"} title={"Preise passend zu Ihrem Restaurant."} intro={"Nennen Sie Standorte, Module und Anbindungen. Wir erstellen ein passendes Angebot."} image="/site-assets/extra/qr-couple.webp" accent="green" />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Definieren Sie den Umfang vor dem Preis</span>
            <h2>Vier Angaben für Ihr Angebot.</h2>
            <p>Ihr Angebot nennt Module, Einrichtung, Integrationen und Einschränkungen.</p>
          </div>
          <div className="pricingFactorGrid">
            {factors.map(([title, body], index) => <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>
      <CTA title={"Angebot für Ihr Restaurant anfordern."} body={"Teilen Sie uns Standorte, gewünschte Module und vorhandene Systeme mit."} primaryLabel={"Anfragepreis"} primaryHref="/de/contact" secondaryLabel={"Siehe die 6 Umsetzungsphasen"} secondaryHref="/de/implementation" />
    </>;
}
