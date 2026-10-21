import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { Icon } from "@/locales/de/components/Icons";
import ProductDetailSections from "@/locales/de/components/ProductDetailSections";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/ai');
const questions = [["Stellen Sie eine Geschäftsfrage", "Fragen Sie nach Umsatz, Gästen, Durchschnittsbon, Tischwechsel, Verkaufszeitpunkt, Bestsellern, Zahlungsmix oder Rentabilität mit den in der konfigurierten Umgebung verfügbaren Daten."], ["Erhalten Sie ein tägliches Briefing", "Fassen Sie den vorherigen Zeitraum zusammen, heben Sie ungewöhnliche Bewegungen hervor und listen Sie die Metriken oder Orte auf, die einen genaueren Blick verdienen."], ["Auffälligkeiten untersuchen", "Bewegen Sie sich von einem ungewöhnlichen Signal zu der Datenzeitraum, Kategorie, Standort oder Betriebskontext dahinter."], ["Vergleich und Prognose", "Vergleichen Sie Zeiträume oder Standorte und verwenden Sie historische Muster, um Nachfrage-, Verkaufs- und Rentabilitätsprognosen zu unterstützen."]];
const aiDetails = {
  factsEyebrow: "KI-Funktionen und Grenzen",
  factsTitle: "Sechs KI-Funktionen. Neun Kennzahlen.",
  factsIntro: "Die Zahlen beschreiben den vorgesehenen Funktionsumfang. Aussagekraft und Genauigkeit hängen von den verfügbaren Daten, klaren Definitionen und Berechtigungen ab.",
  facts: [
    ['06', 'KI-gestützte Funktionen', 'Fragen beantworten, Tagesübersichten erstellen, Auffälligkeiten erkennen, Zeiträume vergleichen, Prognosen unterstützen und nächste Prüfschritte vorschlagen.'],
    ['09', 'Managementkennzahlen', 'Umsatz, Gästezahl, Durchschnittsbon, Tischwechsel, Verkäufe nach Tageszeit, Bestseller, Zahlungsarten, Prognosen und Rentabilität.'],
    ['04', 'Entscheidungsrollen', 'Geschäftsführung, Management, Finanzen und standortübergreifende Leitung nutzen dieselben Daten für unterschiedliche Fragen.'],
    ['01', 'Menschliche Entscheidung', 'KI kann Informationen aufbereiten und Hinweise geben. Das Restaurantteam überprüft die Ergebnisse und entscheidet.']
  ],
  workflowEyebrow: "KI sinnvoll und nachvollziehbar einsetzen",
  workflowTitle: "Von der Frage zur Datenquelle.",
  workflowIntro: "Datenquelle, Zeitraum und Definition der Kennzahl müssen bei jedem Schritt erkennbar bleiben.",
  workflow: [
    ['Konkrete Frage stellen', 'Zum Beispiel: Was hat sich verändert? Welcher Standort weicht ab? Warum fällt der Ertrag eines Artikels auf?'],
    ['Verfügbare Daten prüfen', 'Feststellen, welche Module, Standorte, Zeiträume und Kennzahlendefinitionen die Frage beantworten können.'],
    ['Ergebnisse zusammenfassen oder vergleichen', 'Die vorhandenen Daten auswerten, vergleichen oder für Prognosen nutzen – ohne fehlende Angaben zu verbergen.'],
    ['Belege nachvollziehen', 'Die Kennzahl sowie Zeiträume, Standorte, Kategorien und Artikel hinter der KI-Ausgabe öffnen.'],
    ['Entscheiden und Wirkung überprüfen', 'Das Team legt die Maßnahme fest, dokumentiert die offene Frage und vergleicht dieselbe Kennzahl nach der Änderung.']
  ],
  rolesTitle: "Passende Antworten für jede Rolle.",
  rolesIntro: "Zugriffsrechte und betrieblicher Kontext bestimmen, welche Fragen und Daten eine Person sehen darf.",
  roleViews: [
    ['Geschäftsführung', 'Vergleicht Zeiträume oder Standorte, prüft Veränderungen der Rentabilität und erkennt wichtige Geschäftssignale.'],
    ['Betriebsleitung', 'Untersucht Auffälligkeiten während der Schicht, Tischwechsel und Umsatzveränderungen sowie deren Ursachen.'],
    ['Finanzen', 'Prüft Umsatz, Zahlungen, Kategorien und Kosten, bevor Berichte oder Vergleiche übernommen werden.'],
    ['Standortübergreifende Leitung', 'Vergleicht Standorte anhand einheitlicher Kennzahlen und kann die lokalen Daten dahinter einsehen.']
  ],
  metricsEyebrow: "Qualität der KI-Auswertung bewerten",
  metricsTitle: "Die Datenquelle zählt, nicht nur die Antwort.",
  metricsIntro: "KI-Funktionen sollten mit dokumentierten Fragen, ausreichender Datenabdeckung und messbaren Ergebnissen im Betrieb geprüft werden.",
  metrics: [
    ['Datenabdeckung', 'Prüfen, ob benötigte Daten vorhanden, aktuell und dem richtigen Standort sowie Zeitraum zugeordnet sind.'],
    ['Nachvollziehbarkeit', 'Prüfen, ob sich eine Zusammenfassung auf die zugrunde liegende Kennzahl, Filter und Datenquelle zurückführen lässt.'],
    ['Prognoseabweichung', 'Prognosen und tatsächliche Ergebnisse für denselben Zeitraum und dieselbe Kennzahlendefinition vergleichen.'],
    ['Zeit für die Analyse', 'Messen, wie lange die Klärung einer festgelegten Managementfrage vor und nach Einführung des KI-gestützten Ablaufs dauert.']
  ],
  implementationTitle: "Datenzugriff und Kontrolle klar regeln.",
  implementationIntro: "Eine verantwortungsvolle Umsetzung beschreibt, welche Daten KI nutzen darf, welche Informationen fehlen und wer Entscheidungen trifft.",
  implementation: [
    'Freigegebene Datenquellen, Standorte und historische Zeiträume',
    'Kennzahlendefinitionen und Vergleichsregeln',
    'Berechtigungen je Rolle und Datenansicht',
    'Mindestanforderungen an Datenqualität und Aktualität',
    'Prüfung durch Menschen bei betrieblichen und wirtschaftlichen Maßnahmen',
    'Dokumentierte Grenzen, Ausschlüsse und Eskalationswege'
  ],
  faqs: [
    ['Steuert PayMyDine KI den Restaurantbetrieb automatisch?', 'Nein. PayMyDine KI dient der Analyse und Entscheidungsunterstützung, nicht der autonomen Steuerung des Betriebs.'],
    ['Kann KI ohne zugrunde liegende Daten eine verlässliche Antwort liefern?', 'Nein. Dafür sind passende Daten, klare Definitionen, ein Zeitraum und die erforderlichen Berechtigungen nötig. Fehlende Angaben dürfen nicht verborgen werden.'],
    ['Sind Prognosen garantiert?', 'Nein. Prognosen sind Schätzungen. Das Team sollte sie mit tatsächlichen Ergebnissen vergleichen und regelmäßig überprüfen.'],
    ['Können verschiedene Rollen unterschiedliche Fragen stellen?', 'Ja. Zugriffsrechte und verfügbare Datenansichten bestimmen, welche Fragen und Details für die jeweilige Rolle zugänglich sind.']
  ]
};
export default function AIPage() {
  return <>
      <PageHero eyebrow={"6 KI-gestützte Aktionen"} title={"KI fragen. Quellen prüfen."} intro={"Fragen zu Umsatz, Gästen, Tischen oder Kosten stellen. Jede Antwort lässt sich anhand der Daten prüfen."} image="/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp" accent="green" />

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
              <h2>Veränderungen in Ihren Zahlen erkennen.</h2>
              <p>Umsatz, Nachfrage und Rentabilität mit Originaldaten prüfen.</p>
              <a className="textArrow" href="/de/solutions/insights">Siehe die 9 Management-Metriken <Icon name="arrow" size={15} /></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/custom/solution-story/ai-investigation-time-20260809.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Entscheidungsunterstützung, nicht Autopilot</span>
              <h2>KI gibt Hinweise. Ihr Team entscheidet.</h2>
              <p>Jede Zusammenfassung hängt von den verfügbaren Modulen, Datenqualität, Vergleichszeitraum und Integrationen ab. Das Restaurantteam behält die Kontrolle über die operativen oder kommerziellen Maßnahmen.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={aiDetails} productName={"PayMyDine KI"} />

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Verfügbare KI-Aktionen</span>
            <h2>Sechs KI-Funktionen für Ihr Restaurant.</h2>
            <p>Die genauen Ausgaben hängen von den Daten, Modulen, Standorten und angeschlossenen Systemen ab, die in der PayMyDine-Umgebung verfügbar sind.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />Natürliche Sprachfragen</span>
            <span><Icon name="check" size={16} />Tägliches KI-Briefing</span>
            <span><Icon name="check" size={16} />Intelligente Warnungen</span>
            <span><Icon name="check" size={16} />Zeitraum- und Standortvergleich</span>
            <span><Icon name="check" size={16} />Unterstützung bei der Prognose</span>
            <span><Icon name="check" size={16} />Nächste Kennzahl zur Prüfung</span>
          </div>
        </div>
      </section>

      <CTA title={"Bringen Sie eine echte Managementfrage zu einer KI-Demo."} body={"Wir werden herausfinden, welche PayMyDine-Daten benötigt werden, die Quellenansichten hinter der Antwort zeigen und erklären, wo eine Prüfung durch das Team unerlässlich bleibt."} />
    </>;
}
