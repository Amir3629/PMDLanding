import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { Icon } from "@/locales/de/components/Icons";
import ProductDetailSections from "@/locales/de/components/ProductDetailSections";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/integrations');
const capabilities = [["POS-Daten", "Bringen Sie unterstützte Bestell-, Verkaufs-, Menü- oder Tabellendaten in das PayMyDine-Betriebsbild, ohne die Mitarbeiter zu bitten, die gleichen Informationen erneut einzugeben."], ["Rechnungslegungskontext", "Übergeben oder Anpassen der verfügbaren Berichtsfelder, die vom Finanz-Workflow benötigt werden, abhängig vom verbundenen System und den Berechtigungen."], ["Lieferkanäle", "Halten Sie unterstützte Lieferaufträge nach Kanälen unterscheidbar, während Sie sie in das breitere Workload- und Verkaufsbild aufnehmen."], ["Zahlungsdienstleister", "Verbinden Sie den unterstützten Zahlungsstatus und den Abwicklungskontext mit der Tisch- und Gäste-Checkout-Reise."]];
const integrationDetails = {
  factsEyebrow: "Integration und Umfang",
  factsTitle: "Vier Integrationstypen, sechs zentrale Steuerungen und vier aktuell benannte Anbietergespräche.",
  factsIntro: "Ein benannter Anbieter garantiert nicht jedes Feld oder jeden Workflow. Der Umfang hängt von verfügbaren Schnittstellen, Berechtigungen und dem vereinbarten Datenpfad ab.",
  facts: [['04', "Integrationsarten", "POS, Buchhaltung, Lieferung und Zahlungsverbindungen bilden die aktuellen Integrationskategorien."], ['06', "zentrale Steuerung", "Zentrale Eigentümeransicht, geteilte Menüs, zentrale Berichterstattung, Inventar, Lebensmittelkosten und Einkaufsunterstützung Gruppenoperationen."], ['04', "Namensgeber", "Die aktuellen Produktdatennamen SumUp, ready2order, Lightspeed und Square, je nach Schnittstelle und Projektumfang."], ['05', "Lieferphasen", "Discovery, Field Mapping, Access, Testing und Monitoring schaffen einen praktischen Integrationspfad."]],
  workflowEyebrow: "Vom Systeminventar zur überwachten Verbindung",
  workflowTitle: "Wie definiert man eine Integration um einen echten Restaurant-Workflow herum?",
  workflowIntro: "Beginnen Sie mit der Geschäftsmaßnahme oder dem Berichtsbedarf und entscheiden Sie dann, ob und wie sich Daten bewegen sollen.",
  workflow: [["Identifizieren Sie die Quelle der Wahrheit", "Dokumentieren Sie, welches System heute Bestellungen, Menüs, Zahlungen, Buchhaltungs-, Lager- oder Standortdaten besitzt."], ["Definieren Sie Felder und Richtung", "Listen Sie die genauen Felder auf, die erforderlich sind, ob Daten in PayMyDine verschoben werden und welche Rolle das Ergebnis verwendet."], ["Bestätigen Sie Zugriffe und Limits", "Überprüfen Sie die Provider-Schnittstelle, Authentifizierung, Berechtigungen, Tariflimits und Statusdetails, die tatsächlich verfügbar sind."], ["Test mit Abgleichfällen", "Validieren Sie normale Aufzeichnungen, Updates, Fehler und Duplikate mit vereinbarten Beispielen, bevor Sie live gehen."], ["Überwachung und Ausdehnung", "Verfolgen Sie Frische, fehlgeschlagene Übertragungen und Abgleichsausnahmen, bevor Sie den Konnektorumfang erweitern."]],
  rolesTitle: "Der Integrationswert unterscheidet sich für Implementierung, Betrieb, Finanzen und Eigentum.",
  rolesIntro: "Ein Connector sollte einen echten manuellen Schritt entfernen oder eine Datenlücke für eine benannte Rolle schließen.",
  roleViews: [["Implementierung oder IT", "Besitzt Authentifizierung, Field Mapping, Testfälle, Fehlerbehandlung und technische Anbieterkommunikation."], ["Restaurantbetrieb", "Verwendet verbundene Bestellungen, Menü, Tabelle oder Lieferkontext, ohne die gleichen Informationen erneut einzugeben."], ["Finanzen", "Bewertet Zahlungs-, Buchhaltungs- und Abstimmungsfelder mit einer klaren Wahrheitsquelle."], ["Eigentümer und Multi-Location Leadership", "Vergleicht Standorte, gemeinsame Standards, Inventar und Berichterstattung, während der lokale Kontext beibehalten wird."]],
  metricsEyebrow: "Integrationsgesundheit",
  metricsTitle: "Messen Sie, ob die Verbindung vollständig, frisch ist und die manuelle Abstimmung reduziert wird.",
  metricsIntro: "Ziele sollten pro Anbieter und Workflow vereinbart werden, da nicht jede Schnittstelle die gleichen Aktualisierungs- oder Fehlerdetails unterstützt.",
  metrics: [["Sync Erfolgsquote", "Verfolgen Sie erfolgreiche Aufzeichnungen gegen versuchte Übertragungen für die vereinbarten Datenobjekte und den Zeitraum."], ["Frische der Daten", "Messen Sie die Verzögerung zwischen dem Quellereignis und seinem verwendbaren Erscheinungsbild im Ziel-Workflow."], ["Ausnahmen für den Abgleich", "Zählen Sie fehlende, doppelte oder nicht übereinstimmende Datensätze, die eine Untersuchung durch Operationen oder Finanzen erfordern."], ["Manuelle Wiedereingabezeit", "Baseline die Zeit, die das Personal für das Kopieren oder Abgleichen von Daten vor und nach der Einführung der Integration aufgewendet hat."]],
  implementationTitle: "Schreiben Sie den Datenvertrag, bevor Sie den Connector erstellen oder aktivieren.",
  implementationIntro: "Im Vertrag sollten Quelle, Ziel, Eigentümer, Aktualisierungserwartung und Fehlerprozess für jede Feldgruppe erläutert werden.",
  implementation: ["Dokumentation des Anbieters, Anmeldeinformationen und genehmigte Berechtigungen", "Source-of-Truth-Entscheidung für jedes Datenobjekt", "Feldabbildung, Richtung und Aktualisierung", "Ort, Menü, Zahlungs- und Kontokennung", "Fehlerhaltung, Alarmierung und Abgleich", "Normal-, Update-, Duplikat- und Fehlertestfälle"],
  faqs: [["Welche Anbieter werden derzeit benannt?", "Die aktuellen Produktdatennamen SumUp, ready2order, Lightspeed und Square. Die genaue Fähigkeit hängt weiterhin von der verfügbaren Schnittstelle und dem vereinbarten Projektumfang ab."], ["Muss PayMyDine den POS ersetzen?", "Nein. Die Integrationsstrategie kann das bestehende POS als Quelle der Wahrheit beibehalten und ausgewählte PayMyDine-Workflows und -Ansichten hinzufügen."], ["Ist jede Integration in Echtzeit?", "Nein. Frische hängt von der Provider-Schnittstelle, Berechtigungen, Polling- oder Event-Optionen und dem Deployment-Design ab."], ["Funktioniert Inventar ohne Produkt- und Kostendaten?", "Kein vollständiges Inventar oder Lebensmittelkostenbild kann ohne den erforderlichen Artikel, Lager, Kauf und Kostenaufwand erstellt werden."]]
};
export default function IntegrationsPage() {
  return <>
      <PageHero eyebrow={"4 Integrationstypen - 6 zentrale Steuerungen"} title={"Verbinden Sie die Systeme, die bereits Restaurantdaten enthalten, und machen Sie diese Daten für die nächste Rolle nützlich."} intro={"PayMyDine kann mit unterstützten POS-, Buchhaltungs-, Liefer- und Zahlungsumgebungen arbeiten und dann zentrale Eigentümeransichten, freigegebene Menüs, Berichte, Inventar, Lebensmittelkosten und Einkaufskontext hinzufügen, wenn die Quellsysteme dies zulassen."} image="/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp" accent="green" />

      <section className="section integrationStepsSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Definieren Sie den Datenpfad vor dem Connector</span>
            <h2>Entscheiden Sie für jede Integration, welche Daten sich bewegen, welches System autoritativ bleibt und wer das Ergebnis verwendet.</h2>
            <p>Eine nützliche Integration entfernt den Wiedereintritt oder fehlenden Kontext. Es sollte keine Daten verschieben, nur weil eine Verbindung technisch möglich ist.</p>
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
            <h2>Vergleichen Sie Standorte zentral, während jedes Restaurant seinen lokalen Betriebskontext beibehält.</h2>
            <p>Eigentümer können die Standortleistung und gemeinsame Standards überprüfen, ohne jeden Standort in den gleichen Grundriss, das gleiche Servicemodell oder die gleiche Teamstruktur zu verwandeln.</p>
          </div>
          <div className="integrationNameGrid">
            {["Zentrale Eigentümeransicht", "Gemeinsame Menüs", "Zentrale Meldung", "Bestandsaufnahme", "Lebensmittelkosten", "Einkauf"].map(item => <span key={item}><Icon name="check" size={17} />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article>
            <img src="/site-assets/custom/integrations-capabilities-fit.webp" alt="" />
            <div>
              <span className="eyebrow">Integrationsbereich</span>
              <h2>Verbinden Sie nur die Felder, die einen echten Workflow oder Berichtsbedarf unterstützen.</h2>
              <p>Dokumentieren Sie Quelle, Richtung, Aktualisierungszeitpunkt, Berechtigung und verantwortliche Rolle für jedes Datenfeld vor der Implementierung.</p>
            </div>
          </article>
          <article>
            <img src="/site-assets/custom/integrations-operating-picture.webp" alt="" />
            <div>
              <span className="eyebrow">Ein Business-Bild</span>
              <h2>Lesen Sie Verkauf, Lager, Einkauf und Standortleistung zusammen.</h2>
              <p>Wo die angeschlossenen Systeme die Daten bereitstellen, können Eigentümer Standortergebnisse vergleichen, die Lebensmittelkostenbewegung verstehen und eine Geschäftsnummer bis zur Betriebsquelle zurückverfolgen.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={integrationDetails} productName={"Integrationen, Multi-Location & Inventory"} />

      <CTA title={"Überprüfen Sie eine echte Integration, bevor Sie jeden möglichen Connector besprechen."} body={"Sagen Sie uns das System, die Datenfelder, die Richtung, die Aktualisierungsanforderung und die Rolle, die das Ergebnis benötigt. Wir werden den praktischen Integrationsbereich um diesen Workflow herum definieren."} />
    </>;
}
