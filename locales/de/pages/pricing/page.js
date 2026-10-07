import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/pricing');
const factors = [["Restaurant- und Standortumfang", "Anzahl der Standorte, Komplexität des Bodens, Servicemodell, Bestellkanäle und Umgebungen, die die Konfiguration unterstützen muss."], ["Ausgewählte Produktbereiche", "Welche der 9 Produktbereiche sind jetzt enthalten, welche sind später geplant und welche aktuellen Systeme bleiben maßgeblich."], ["Rolle und Zugangsumfang", "Welche der 6 Rollen-Arbeitsbereiche erforderlich sind, wie sich die Berechtigungen unterscheiden und wie viele Teams oder Standorte jede Ansicht benötigen."], ["Integrations- und Umsetzungsarbeiten", "Die unterstützten POS, Zahlungs-, Buchhaltungs- oder Lieferverbindungen sowie Konfiguration, Migration, Validierung und Teamvorbereitung."]];
export default function PricingPage() {
  return <>
      <PageHero eyebrow={"4 Preisangaben"} title={"Preis den Konfigurations-, Implementierungs- und Integrationsumfang, den Sie tatsächlich verwenden werden."} intro={"Ein praktischer Vorschlag beginnt mit Standorten, ausgewählten Produktbereichen, Rollenarbeitsbereichen und Integrationsarbeit. Es sollte auch angegeben werden, was außerhalb von PayMyDine bleibt und welche Annahmen den endgültigen Umfang beeinflussen."} image="/site-assets/extra/qr-couple.webp" accent="green" />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Definieren Sie den Umfang vor dem Preis</span>
            <h2>Vier Inputs machen den kommerziellen Vorschlag verständlich und vergleichbar.</h2>
            <p>Der Vorschlag sollte zeigen, was enthalten ist, welche Systeme miteinander verbunden sind, welche Rollen konfiguriert sind, welche Implementierungsarbeit erforderlich ist und was den Umfang verändern kann.</p>
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
      <CTA title={"Fordern Sie Preise mit einem klaren Restaurantumfang an."} body={"Sagen Sie uns die Standorte, Produktbereiche, Rollen, aktuellen Systeme und Implementierungsbedürfnisse. Wir werden diese vier Inputs nutzen, um den kommerziellen Vorschlag zu gestalten."} primaryLabel={"Anfragepreis"} primaryHref="/de/contact" secondaryLabel={"Siehe die 6 Umsetzungsphasen"} secondaryHref="/de/implementation" />
    </>;
}
