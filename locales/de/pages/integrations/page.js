import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { Icon } from "@/locales/de/components/Icons";
import ProductDetailSections from "@/locales/de/components/ProductDetailSections";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/integrations');
const capabilities = [["Kassendaten", "Bringen Sie unterstützte Bestell-, Verkaufs-, Menü- oder Tabellendaten in das PayMyDine-Betriebsbild, ohne die Mitarbeiter zu bitten, die gleichen Informationen erneut einzugeben."], ["Buchhaltungsdaten", "Übergeben oder Anpassen der verfügbaren Berichtsfelder, die vom Finanz-Workflow benötigt werden, abhängig vom verbundenen System und den Berechtigungen."], ["Lieferkanäle", "Halten Sie unterstützte Lieferaufträge nach Kanälen unterscheidbar, während Sie sie in das breitere Workload- und Verkaufsbild aufnehmen."], ["Zahlungsdienstleister", "Verbinden Sie den unterstützten Zahlungsstatus und den Abwicklungskontext mit der Tisch- und Gäste-Checkout-Reise."]];
const integrationDetails = {
  factsEyebrow: "Integrationen und Funktionsumfang",
  factsTitle: "Vier Anbindungstypen. Sechs zentrale Funktionen.",
  factsIntro: "Die Nennung eines Anbieters bedeutet nicht, dass jede Funktion verfügbar ist. Entscheidend sind Schnittstellen, Berechtigungen und der vereinbarte Datenaustausch.",
  facts: [
    ['04', 'Integrationsbereiche', 'Kassensysteme, Buchhaltung, Lieferdienste und Zahlungen bilden die vorgesehenen Anbindungsbereiche.'],
    ['06', 'Zentrale Funktionen', 'Übergreifende Geschäftsführungsansicht, gemeinsame Menüs, Berichte, Warenbestand, Wareneinsatz und Einkaufsinformationen.'],
    ['04', 'Genannte Anbieter', 'SumUp, ready2order, Lightspeed und Square werden als mögliche Anbieter berücksichtigt – abhängig von verfügbaren Schnittstellen.'],
    ['05', 'Projektphasen', 'Bedarf klären, Datenfelder zuordnen, Zugriff einrichten, testen und laufend überwachen.']
  ],
  workflowEyebrow: "Vom bestehenden System zur überwachten Anbindung",
  workflowTitle: "Daten sinnvoll verbinden.",
  workflowIntro: "Erst den benötigten Arbeitsschritt oder Bericht festlegen. Danach entscheiden, welche Daten zwischen welchen Systemen fließen sollen.",
  workflow: [
    ['Führende Datenquelle festlegen', 'Dokumentieren, welches System Bestellungen, Menüs, Zahlungen, Buchhaltung, Warenbestand und Standorte verwaltet.'],
    ['Datenfelder und Richtung bestimmen', 'Festlegen, welche Felder erforderlich sind, wohin sie übertragen werden und welche Teamrolle sie benötigt.'],
    ['Zugriff und Grenzen prüfen', 'Schnittstellen, Anmeldung, Berechtigungen, Tarifgrenzen und verfügbare Statusinformationen mit dem Anbieter klären.'],
    ['Abgleich und Fehlerfälle testen', 'Normale Datensätze, Änderungen, Fehler und Duplikate anhand vereinbarter Beispiele prüfen.'],
    ['Anbindung überwachen und erweitern', 'Datenaktualität, fehlgeschlagene Übertragungen und Abweichungen beobachten, bevor weitere Funktionen hinzukommen.']
  ],
  rolesTitle: "Passende Daten für jedes Team.",
  rolesIntro: "Eine Anbindung sollte einen konkreten manuellen Schritt vermeiden oder eine wichtige Informationslücke schließen.",
  roleViews: [
    ['Implementierung und IT', 'Verantwortlich für Authentifizierung, Feldzuordnung, Tests, Fehlerbehandlung und Abstimmung mit Anbietern.'],
    ['Restaurantbetrieb', 'Nutzt verknüpfte Bestellungen, Menüs, Tische und Lieferinformationen, ohne Daten erneut einzutragen.'],
    ['Finanzen', 'Prüft Zahlungen, Buchhaltungsdaten und Abgleichsprozesse mit einer klar festgelegten führenden Datenquelle.'],
    ['Geschäftsführung und Standortleitung', 'Vergleicht Standorte, gemeinsame Standards, Bestände und Berichte, ohne lokale Besonderheiten zu verlieren.']
  ],
  metricsEyebrow: "Qualität der Anbindung",
  metricsTitle: "Datenaktualität und Abgleich prüfen.",
  metricsIntro: "Zielwerte müssen zum jeweiligen Anbieter und Ablauf passen, da Schnittstellen unterschiedliche Aktualisierungs- und Fehlerdaten liefern.",
  metrics: [
    ['Erfolgsquote der Synchronisation', 'Erfolgreich übertragene Datensätze mit allen Übertragungsversuchen des festgelegten Zeitraums vergleichen.'],
    ['Datenaktualität', 'Die Zeit zwischen einem Ereignis im Quellsystem und seiner Verfügbarkeit im Zielsystem messen.'],
    ['Abgleichsabweichungen', 'Fehlende, doppelte oder widersprüchliche Datensätze erfassen, die geprüft werden müssen.'],
    ['Zeit für manuelle Nacharbeit', 'Erfassen, wie viel Zeit das Team vor und nach Einführung der Anbindung für Kopieren und Abgleichen benötigt.']
  ],
  implementationTitle: "Datenaustausch vorab festlegen.",
  implementationIntro: "Darin werden Quelle, Ziel, Zuständigkeit, Aktualisierung und Umgang mit Fehlern für jede Datengruppe festgelegt.",
  implementation: [
    'Anbieterdokumentation, Zugangsdaten und freigegebene Berechtigungen',
    'Führendes System für jedes Datenobjekt',
    'Feldzuordnung, Übertragungsrichtung und Aktualisierungsintervall',
    'Zuordnung von Standort-, Menü-, Zahlungs- und Kontokennungen',
    'Fehlerbehandlung, Warnmeldungen und Datenabgleich',
    'Tests für Normalfälle, Änderungen, Duplikate und Fehler'
  ],
  faqs: [
    ['Welche Anbieter werden derzeit genannt?', 'Als mögliche Anbieter werden SumUp, ready2order, Lightspeed und Square genannt. Die konkreten Möglichkeiten hängen von Schnittstellen und Projektumfang ab.'],
    ['Muss PayMyDine das bestehende Kassensystem ersetzen?', 'Nein. Das bestehende Kassensystem kann weiterhin die führende Datenquelle sein, während PayMyDine ausgewählte Abläufe und Ansichten ergänzt.'],
    ['Ist jede Integration in Echtzeit?', 'Nein. Die Aktualität hängt von der Schnittstelle, den Berechtigungen, der Übertragungsmethode und der technischen Umsetzung ab.'],
    ['Funktioniert die Bestandsverwaltung ohne Artikel- und Kostendaten?', 'Nein. Für zuverlässige Bestands- und Wareneinsatzberichte werden die entsprechenden Artikel-, Lager-, Einkaufs- und Kostendaten benötigt.']
  ]
};
export default function IntegrationsPage() {
  return <>
      <PageHero eyebrow={"4 Anbindungsarten · 6 zentrale Funktionen"} title={"Ihre Restaurantsysteme verbinden."} intro={"Daten aus unterstützten Kassensystemen, Buchhaltung, Lieferdiensten und Zahlungen für Berichte nutzen."} image="/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp" accent="green" />

      <section className="section integrationStepsSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Definieren Sie den Datenpfad vor dem Connector</span>
            <h2>Nur nötige Daten anbinden.</h2>
            <p>Eine sinnvolle Anbindung spart doppelte Dateneingaben oder schließt eine Informationslücke. Daten sollten nicht allein deshalb übertragen werden, weil es technisch möglich ist.</p>
          </div>
          <div className="highlightGrid">
            {capabilities.map(([title, body], index) => <article className="highlightCard" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section darkIntegrationPage">
        <div className="container darkIntegrationGrid">
          <div>
            <span className="eyebrow darkEyebrow">6 Kontrollen an mehreren Standorten</span>
            <h2>Standorte zentral vergleichen.</h2>
            <p>Die Geschäftsführung kann die Leistung der Standorte und gemeinsame Standards überprüfen, ohne jeden Standort in den gleichen Grundriss, das gleiche Servicemodell oder die gleiche Teamstruktur zu verwandeln.</p>
          </div>
          <div className="integrationNameGrid">
            {["Zentrale Geschäftsführungsansicht", "Gemeinsame Menüs", "Zentrale Berichte", "Bestandsaufnahme", "Wareneinsatz", "Einkauf"].map(item => <span key={item}><Icon name="check" size={17} />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article>
            <img src="/site-assets/custom/integrations-capabilities-fit.webp" alt="" />
            <div>
              <span className="eyebrow">Integrationsbereich</span>
              <h2>Nur Daten, die das Team braucht.</h2>
              <p>Dokumentieren Sie Quelle, Richtung, Aktualisierungszeitpunkt, Berechtigung und verantwortliche Rolle für jedes Datenfeld vor der Implementierung.</p>
            </div>
          </article>
          <article>
            <img src="/site-assets/custom/integrations-operating-picture.webp" alt="" />
            <div>
              <span className="eyebrow">Ein gemeinsamer Geschäftsüberblick</span>
              <h2>Umsatz, Bestand und Einkauf gemeinsam sehen.</h2>
              <p>Wo die angeschlossenen Systeme die Daten bereitstellen, können Eigentümer Standortergebnisse vergleichen, die Wareneinsatzbewegung verstehen und eine Geschäftsnummer bis zur Betriebsquelle zurückverfolgen.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={integrationDetails} productName={"Integrationen, Standorte & Warenbestand"} />

      <CTA title={"Erste Integration besprechen."} body={"Nennen Sie uns das System, die benötigten Datenfelder, die Übertragungsrichtung, die gewünschte Aktualität und die zuständige Rolle. Daraus entwickeln wir einen realistischen Integrationsumfang."} />
    </>;
}
