import { imageGroups } from "@/locales/de/data/site";
import { Icon } from './Icons';
const steps = [{
  title: "Aktionsbeginn",
  body: "Ein Gast scannt einen Tisch QR, an der Rezeption sitzt eine Buchung, das Servicepersonal öffnet eine Bestellung oder ein Manager ändert einen Tisch.",
  icon: 'operations'
}, {
  title: "Kontext ist angehängt",
  body: "Tisch, Gast, Bestellung, Timing, Notizen und Berechtigungen reisen mit der Aktion, anstatt erneut eingegeben zu werden.",
  icon: 'table'
}, {
  title: "Die verantwortliche Rolle erhält es",
  body: "Servicemitarbeiter sehen Servicearbeit, Küche sieht Vorbereitungsarbeit und Manager sehen Ausnahmen und Live-Status.",
  icon: 'kitchen'
}, {
  title: "Service und Checkout komplett",
  body: "Vorbereitung, Bereitschaftsstatus, Übergabe und Zahlung werden aus dem gleichen Restaurantkontext fortgesetzt, einschließlich dreier auf Rechnung aufgeteilter Methoden.",
  icon: 'card'
}, {
  title: "Aktivität wird zu Einsicht und KI Unterstützung",
  body: "Umsatz, Gäste, durchschnittlicher Check, Tabellenumsatz, Verkaufszeitpunkt, Zahlungsmix, Prognosen und Rentabilität stehen für Berichte, Vergleiche, Anomalieprüfungen und KI-assistierte Fragen zur Verfügung.",
  icon: 'chart'
}];
export default function Workflow({
  variant = 'home'
}) {
  const workflowImage = variant === 'platform' ? imageGroups.comments[11] : '/site-assets/home-workflow-20261005/cozy-cafe-pos-ordering-scene.webp';
  return <section className="section workflowSection">

      <div className="container workflowShowcase">

        <div className="workflowShowcaseCopy">

          <span className="eyebrow">
            5-stufiger Betriebsfluss + KI Überprüfung
          </span>

          <h2>
            Jede Restaurantaktion schafft Kontext.
PayMyDine hält es so die nächste Rolle verbunden —
und KI - kann verstehen, was passiert ist.
          </h2>

          <p>
            Der gleiche Kontext folgt der Reise von Gast- oder Personalaktion
durch Vorbereitung, Service und Zahlung in die Berichterstattung.
PayMyDine AI kann dann helfen, den Zeitraum zusammenzufassen, Ergebnisse zu vergleichen,
Oberfläche ungewöhnliche Bewegung und identifizieren, welche Metrik oder Quelle Ansicht
Das Management sollte als nächstes prüfen.
          </p>

        </div>

        <div className="workflowShowcaseVisual">

          <img src={workflowImage} alt={"PayMyDine Restaurant-Workflow"} loading="lazy" />

        </div>

      </div>


      <div className="container">

        <div className="workflowJourneyPanel" aria-label={"PayMyDine Restaurant Reise"}>

          {steps.map((step, index) => <article className="workflowJourneyItem" key={step.title}>

              <div className="workflowJourneyTop">

                <span className="workflowJourneyNumber">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="workflowJourneyIcon">
                  <Icon name={step.icon} size={22} />
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.body}</p>

            </article>)}

        </div>

      </div>

    </section>;
}
