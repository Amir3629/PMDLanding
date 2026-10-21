import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/how-it-works');
const journeyCards = [{
  eyebrow: "4 Gastaktionen",
  title: "Scannen, durchsuchen, bestellen und bezahlen, ohne den Tabellenkontext zu verlieren.",
  body: "Eine Tabelle QR kann das mobile Menü öffnen, die Tabelle an die Bestellung anhängen, Serviceanfragen unterstützen und zur Kasse gehen.",
  image: '/site-assets/comments/16.webp',
  alt: "Gäste mit einem PayMyDine QR Erlebnis am Tisch"
}, {
  eyebrow: "Restaurantkontrollierter Service",
  title: "Digitaler Komfort füttert den Workflow des Teams, anstatt ihn zu ersetzen.",
  body: "Servicemitarbeiter und Küche erhalten die nächste Aktion in rollenorientierten Ansichten, während das Restaurant Menüs, Verfügbarkeit, Service und Zahlungsoptionen steuert.",
  image: '/site-assets/table/11.webp',
  alt: "Restaurantumgebung unterstützt von PayMyDine"
}];
const flowSteps = [['01', "Aktionsbeginn", "Ein Gast scannt, Empfangsplätze, ein Kellner öffnet eine Bestellung oder ein Manager wechselt einen Tisch."], ['02', "Kontext ist angehängt", "Tisch, Gast, Bestellung, Timing, Notizen und Berechtigungen bleiben bei der Aktion."], ['03', "Die verantwortliche Rolle erhält es", "Servicemitarbeiter sehen Servicearbeit, Küche sieht Vorbereitungsarbeit und Manager sehen Ausnahmen."], ['04', "Service und Zahlung vollständig", "Ready Status, Handoff und Checkout werden aus dem gleichen Kontext fortgesetzt, einschließlich drei Split-Bill-Methoden."], ['05', "Aktivität wird zu Managementdaten", "Umsatz, Gäste, durchschnittlicher Check, Tischwechsel, Verkaufszeitpunkt und Rentabilität Feed Reporting und KI-assisted Fragen."]];
const operationsCards = [{
  eyebrow: "6 rollenbasierte Arbeitsbereiche",
  title: "Jede Rolle sieht die Warteschlange, die Kontrollen und den Status, für den sie verantwortlich ist.",
  body: "Eigentümer, Manager, Servicemitarbeiter, Küche, Reservierungen und Finanzen verwenden fokussierte Ansichten, während der zugrunde liegende Restaurantkontext geteilt bleibt.",
  image: '/site-assets/owner/1.webp',
  alt: "PayMyDine Restaurantbetrieb Ansicht"
}, {
  eyebrow: "4 Küchenticket-Staaten",
  title: "Empfangen, vorbereiten, bereit und übergeben bleiben sichtbar in der gesamten service-Kette.",
  body: "Die Küche kann sich auf die Vorbereitung konzentrieren, während Servicemitarbeiter und Manager den Status für die nächste Übergabe sehen.",
  image: '/site-assets/kitchen/2.webp',
  alt: "Küchenteam arbeitet mit PayMyDine"
}];
export default function HowItWorksPage() {
  return <>
      <PageHero eyebrow={"5-stufiger Betriebsstrom"} title={"Vom ersten Scan bis zur Zahlung."} intro={"Gäste bestellen und bezahlen. Das Team sieht den nächsten Schritt. Alles bleibt verbunden."} image="/site-assets/extra/izakaya-phone.webp" accent="orange" />

      <section className="section howJourneySection">
        <div className="container">
          <div className="sectionHeading centerHeading howJourneyHeading">
            <span className="eyebrow">Gastaktionen bleiben Restaurantarbeit</span>
            <h2>Vier einfache Schritte für Gäste.</h2>
            <p>Scannen, auswählen, bestellen und bezahlen. Das Team bleibt informiert.</p>
          </div>

          <div className="demoShowcaseGrid howJourneyGrid">
            {journeyCards.map((card, index) => <article className={`demoShowcaseCard ${index === 0 ? 'demoShowcaseWide' : ''}`} key={card.title}>
                <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="demoShowcaseCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div>
              <span className="eyebrow">Fünf explizite Handoffs</span>
              <h2>Fünf klare Schritte hinter jeder Bestellung.</h2>
            </div>
            <p>Sehen Sie, was passiert, wer zuständig ist und wann eine Aufgabe erledigt ist.</p>
          </div>

          <div className="howFlowGrid">
            {flowSteps.map(([number, title, body]) => <article className="howFlowCard" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section howOperationsSection">
        <div className="container">
          <div className="sectionHeading howOperationsHeading">
            <span className="eyebrow">Hinter der Gästereise</span>
            <h2>Jedes Team kennt den nächsten Schritt.</h2>
            <p>Bestellungen und Übergaben bleiben bis zum Abschluss sichtbar.</p>
          </div>

          <div className="howOperationsGrid">
            {operationsCards.map(card => <article className="howOperationsCard" key={card.title}>
                <div className="howOperationsMedia">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="howOperationsCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <CTA title={"PayMyDine im echten Service erleben."} body={"Zeigen Sie uns einen Bestell- oder Zahlungsvorgang. Wir bilden die Schritte ab."} primaryLabel={"Demo buchen"} primaryHref="/de/contact" secondaryLabel={"Entdecken Sie die 9 Produktbereiche"} secondaryHref="/de/platform" />
    </>;
}
