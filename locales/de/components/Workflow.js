import { imageGroups } from "@/locales/de/data/site";
import { Icon } from './Icons';
const steps = [{
  title: "Eine Aktion startet den Ablauf",
  body: "Ein Gast scannt einen QR-Code am Tisch, die Rezeption weist eine Reservierung zu, der Service erfasst eine Bestellung oder das Management ändert eine Tischbelegung.",
  icon: 'operations'
}, {
  title: "Informationen bleiben verknüpft",
  body: "Tisch, Gast, Bestellung, Zeitangaben, Notizen und Berechtigungen begleiten die Aktion, statt erneut eingegeben werden zu müssen.",
  icon: 'table'
}, {
  title: "Die zuständige Rolle übernimmt",
  body: "Der Service sieht seine Aufgaben, die Küche die Zubereitungsschritte und das Management offene Punkte sowie den aktuellen Status.",
  icon: 'kitchen'
}, {
  title: "Service und Zahlung abschließen",
  body: "Zubereitung, Fertigmeldung, Übergabe und Zahlung greifen auf dieselben Informationen zurück – einschließlich drei Möglichkeiten, eine Rechnung aufzuteilen.",
  icon: 'card'
}, {
  title: "Betriebsdaten werden zu Erkenntnissen",
  body: "Umsatz, Gästezahl, Durchschnittsbon, Tischwechsel, Verkaufszeiten, Zahlungsarten, Prognosen und Rentabilität liefern die Grundlage für Berichte, Vergleiche und KI-gestützte Auswertungen.",
  icon: 'chart'
}];
export default function Ablauf({
  variant = 'home'
}) {
  const workflowImage = variant === 'platform' ? imageGroups.comments[11] : '/site-assets/home-workflow-20261005/cozy-cafe-pos-ordering-scene.webp';
  return <section className="section workflowSection">

      <div className="container workflowShowcase">

        <div className="workflowShowcaseCopy">

          <span className="eyebrow">
            5 Schritte im Restaurantbetrieb + KI-Auswertung
          </span>

          <h2>
            Von der Bestellung bis zur Zahlung.
          </h2>

          <p>
            Bestellung, Küche und Zahlung bleiben verbunden. Jedes Team sieht den nächsten Schritt; KI unterstützt die Auswertung.
          </p>

        </div>

        <div className="workflowShowcaseVisual">

          <img src={workflowImage} alt={"PayMyDine Restaurant-Ablauf"} loading="lazy" />

        </div>

      </div>


      <div className="container">

        <div className="workflowJourneyPanel" aria-label={"PayMyDine: Ablauf im Restaurant"}>

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
