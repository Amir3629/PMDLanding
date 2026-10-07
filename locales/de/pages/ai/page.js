import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { Icon } from "@/locales/de/components/Icons";
import ProductDetailSections from "@/locales/de/components/ProductDetailSections";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/ai');
const questions = [["Stellen Sie eine Geschäftsfrage", "Fragen Sie nach Umsatz, Gästen, durchschnittlichem Scheck, Tabellenumsatz, Verkaufszeitpunkt, Bestsellern, Zahlungsmix oder Rentabilität mit den in der konfigurierten Umgebung verfügbaren Daten."], ["Erhalten Sie ein tägliches Briefing", "Fassen Sie den vorherigen Zeitraum zusammen, heben Sie ungewöhnliche Bewegungen hervor und listen Sie die Metriken oder Orte auf, die einen genaueren Blick verdienen."], ["Ermittlung einer Ausschreibung", "Bewegen Sie sich von einem ungewöhnlichen Signal zu der Quellenperiode, Kategorie, Standort oder Betriebskontext dahinter."], ["Vergleich und Prognose", "Vergleichen Sie Zeiträume oder Standorte und verwenden Sie historische Muster, um Nachfrage-, Verkaufs- und Rentabilitätsprognosen zu unterstützen."]];
const aiDetails = {
  factsEyebrow: "KI Umfang und Schutzmaßnahmen",
  factsTitle: "Sechs Assistenzmodi können über neun Managementmetriken hinweg funktionieren, wobei die menschliche Überprüfung im Workflow verbleibt.",
  factsIntro: "Diese Zählungen beschreiben den Warenumfang. Genauigkeit und Nützlichkeit hängen von Quelldaten, Definitionen, Berechtigungen und der gestellten Frage ab.",
  facts: [['06', "KI-assistierte Aktionen", "Fragen, Briefings, Warnungen, Vergleiche, Prognosen und Untersuchungen im nächsten Schritt bilden den aktuellen KI-Bereich."], ['09', "Managementmetriken", "Umsatz, Gäste, durchschnittlicher Scheck, Tabellenumsatz, Verkaufszeitpunkt, Bestseller, Zahlungsmix, Prognose und Rentabilität bieten Geschäftskontext."], ['04', "Entscheidungsrollen", "Eigentümer, Manager, Finanzen und Multi-Location-Führung können die gleichen Daten für verschiedene Entscheidungen untersuchen."], ['01', "Menschlicher Entscheidungsträger", "KI kann Beweise organisieren und vorschlagen, was zu inspizieren ist; das Restaurantteam überprüft und entscheidet."]],
  workflowEyebrow: "Eine verantwortungsvolle KI Untersuchung",
  workflowTitle: "Wie sich eine Restaurantfrage von den Quelldaten zu einer überprüften nächsten Aktion bewegt.",
  workflowIntro: "Quelle, Zeitraum und metrische Definition sollten während der gesamten Untersuchung sichtbar bleiben.",
  workflow: [["Wählen Sie eine spezifische Frage", "Beginnen Sie mit einer Frage, z. B. was sich geändert hat, welcher Standort sich bewegt hat oder warum ein Artikelrand Aufmerksamkeit erfordert."], ["Bestätige die verfügbare Quelle", "Identifizieren Sie die Module, Orte, Zeiträume und Definitionen, die die Frage unterstützen können."], ["Erstellen einer Zusammenfassung oder eines Vergleichs", "Verwenden Sie die verfügbaren Daten, um die Bewegung zu beschreiben, zu vergleichen oder zu prognostizieren, ohne fehlende Eingaben zu verbergen."], ["Prüfung der Beweise", "Öffnen Sie die Quellmetrik, den Zeitraum, den Ort, die Kategorie oder das Element hinter der Ausgabe von KI."], ["Entscheiden und überprüfen Sie das Ergebnis", "Eine Person wählt die Aktion aus, zeichnet die Frage auf, die erneut besucht werden soll, und vergleicht die gleiche Metrik nach der Betriebsänderung."]],
  rolesTitle: "KI sollte die Untersuchung für jede Entscheidungsrolle verkürzen, ohne jeder Rolle die gleiche Antwort zu geben.",
  rolesIntro: "Berechtigungen und Geschäftskontext bestimmen, welche Fragen und Quellansichten jeder Person zur Verfügung stehen sollten.",
  roleViews: [["Eigentümer", "Vergleicht Perioden oder Standorte, überprüft die Rentabilitätsbewegung und fragt, welches Geschäftssignal Aufmerksamkeit verdient."], ["Betriebsleiter", "Untersucht Verschiebungsausnahmen, Tabellen- oder Verkaufsbewegungen und die Betriebsereignisse hinter einem ungewöhnlichen Ergebnis."], ["Finanzen", "Überprüfen Sie den Umsatz-, Zahlungs-, Kategorie- und Kostenkontext, bevor Sie eine Finanzübersicht oder einen Vergleich annehmen."], ["Multilokale Führung", "Vergleicht Websites mit konsistenten Definitionen und behält gleichzeitig die Möglichkeit, den lokalen Quellkontext zu inspizieren."]],
  metricsEyebrow: "Bewerten der KI-Schicht",
  metricsTitle: "Messen Sie die Rückverfolgbarkeit und den Entscheidungsnutzen, nicht nur, wie fließend die Antwort klingt.",
  metricsIntro: "Eine KI-Funktion sollte anhand von dokumentierten Fragen, Quellenabdeckung und tatsächlichen Ergebnissen im Restaurant-Workflow überprüft werden.",
  metrics: [["Quellendeckung", "Verfolgen Sie, ob die von einer Frage benötigten Daten vorhanden, aktuell und an den richtigen Ort oder Zeitraum abgebildet sind."], ["Rückverfolgbarkeit der Antwort", "Überprüfen Sie, ob der Benutzer von einer Zusammenfassung zurück in den Metrik-, Filter- und Quellkontext dahinter wechseln kann."], ["Prognosefehler", "Vergleichen Sie die prognostizierten und tatsächlichen Ergebnisse mit dem gleichen Zeitraum und der gleichen Definition, anstatt Prognosen als Garantien darzustellen."], ["Untersuchungszeit", "Baseline, wie lange eine definierte Managementfrage dauert, um vor und nach dem KI-assisted Workflow zu untersuchen."]],
  implementationTitle: "Definieren Sie den Datenvertrag und die Grenze für die menschliche Überprüfung, bevor Sie KI-Ausgaben aktivieren.",
  implementationIntro: "Die sicherste KI-Implementierung ist explizit darüber, was das System weiß, was es nicht sehen kann und wer die endgültige Entscheidung besitzt.",
  implementation: ["Genehmigte Datenquellen, Orte und historische Perioden", "Metrische Definitionen und Vergleichsregeln", "Rollenberechtigungen für Fragen und Quellansichten", "Mindestdatenqualität und -frische", "Human Review für operative und kommerzielle Maßnahmen", "Dokumentierte Ausschlüsse, Beschränkungen und Eskalationspfade"],
  faqs: [["Führt PayMyDine AI das Restaurant automatisch aus?", "Nein. Die aktuelle Positionierung ist KI Unterstützung und Entscheidungsunterstützung, nicht autonome Betriebssteuerung."], ["Kann KI eine Frage ohne die Quelldaten beantworten?", "Eine nützliche Antwort erfordert die relevanten Daten, Definition, Zeitraum und Berechtigungen. Fehlende Inputs sollten gezeigt und nicht stillschweigend erfunden werden."], ["Sind Prognosen garantiert?", "Nein. Prognosen sollten an den tatsächlichen Ergebnissen gemessen und als Schätzungen und nicht als Versprechen überprüft werden."], ["Können verschiedene Rollen unterschiedliche Fragen stellen?", "Ja. Rollenberechtigungen und verfügbare Quellansichten sollten die Fragen und die für jede Verantwortung angemessene Tiefe steuern."]]
};
export default function AIPage() {
  return <>
      <PageHero eyebrow={"6 KI-gestützte Aktionen"} title={"Fragen Sie nach Einnahmen, Gästen, Tabellen oder Rentabilität und verfolgen Sie die Antwort auf die Quelldaten."} intro={"PayMyDine AI kann Fragen, tägliche Briefings, Warnungen, Vergleiche, Prognosen und Untersuchungen im nächsten Schritt über die in Ihrem Setup verfügbaren Restaurantdaten hinweg unterstützen. Sie unterstützt Entscheidungen; sie ersetzt sie nicht."} image="/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp" accent="green" />

      <section className="section highlightSection">
        <div className="container highlightGrid">
          {questions.map(([title, body], index) => <article className="highlightCard" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>)}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          <article className="storyFeature">
            <div className="storyFeatureImage"><img src="/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">9 Metriken im Kontext</span>
              <h2>Beginnen Sie mit einer Zahl und halten Sie dann den Vergleichszeitraum und die Betriebsursache sichtbar.</h2>
              <p>Einnahmen, Gäste, durchschnittlicher Scheck, Tabellenumsatz, Verkaufszeitpunkt, Bestseller, Zahlungsmix, Prognosen und Rentabilität sind nützlicher, wenn der Eigentümer von der Zusammenfassung in die dahinter liegende Quellansicht wechseln kann.</p>
              <a className="textArrow" href="/de/solutions/insights">Siehe die 9 Management-Metriken <Icon name="arrow" size={15} /></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/custom/solution-story/ai-investigation-time-20260809.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Entscheidungsunterstützung, nicht Autopilot</span>
              <h2>Verwenden Sie KI, um die Untersuchungszeit zu verkürzen, während das Team überprüft und entscheidet.</h2>
              <p>Jede Zusammenfassung hängt von den verfügbaren Modulen, Datenqualität, Vergleichszeitraum und Integrationen ab. Das Restaurantteam behält die Kontrolle über die operativen oder kommerziellen Maßnahmen.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={aiDetails} productName={"PayMyDine AI"} />

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Verfügbare KI-Aktionen</span>
            <h2>Fragen, zusammenfassen, vergleichen, alarmieren, vorhersagen und untersuchen.</h2>
            <p>Die genauen Ausgaben hängen von den Daten, Modulen, Standorten und angeschlossenen Systemen ab, die in der PayMyDine-Umgebung verfügbar sind.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />Natürliche Sprachfragen</span>
            <span><Icon name="check" size={16} />Tägliches KI Briefing</span>
            <span><Icon name="check" size={16} />Intelligente Warnungen</span>
            <span><Icon name="check" size={16} />Zeitraum- und Standortvergleich</span>
            <span><Icon name="check" size={16} />Unterstützung bei der Prognose</span>
            <span><Icon name="check" size={16} />Nächste Metrik zu untersuchen</span>
          </div>
        </div>
      </section>

      <CTA title={"Bringen Sie eine echte Managementfrage zu einer KI-Demo."} body={"Wir werden herausfinden, welche PayMyDine-Daten benötigt werden, die Quellenansichten hinter der Antwort zeigen und erklären, wo eine menschliche Überprüfung unerlässlich bleibt."} />
    </>;
}
