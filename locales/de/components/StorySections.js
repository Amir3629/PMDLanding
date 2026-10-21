import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from "@/locales/de/data/site";
export function RoleAndAISections() {
  return <>

      <section className="section darkStorySection">

        <div className="container darkIntro">

          <div>

            <span className="eyebrow darkEyebrow">
              6 Rollenbereiche mit gemeinsamem KI-Kontext
            </span>

            <h2>
              Jedes Team erhält die passenden Aufgaben und Werkzeuge. PayMyDine KI nutzt den gemeinsamen Kontext, um zu zeigen, was im Restaurant geschieht.
            </h2>

          </div>

          <p>
            Geschäftsführung, Management, Service, Küche, Reservierung und Finanzen arbeiten in eigenen Ansichten. Informationen zu Tischen, Bestellungen, Gästen, Zeiten und Zahlungen bleiben verknüpft. So kann das Management mit PayMyDine KI Veränderungen bis zu den Quelldaten zurückverfolgen.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FÜR GESCHÄFTSFÜHRUNG + KI
              </span>

              <h3>
                Geschäftszahlen prüfen und mit KI herausfinden, was sich verändert hat und wo eine genauere Analyse sinnvoll ist.
              </h3>

              <p>
                Ausgangspunkt sind Umsatz, Gäste, Tische, Reservierungen, Küchenstatus und meistverkaufte Artikel. Vergleichen Sie Zeiträume, erkennen Sie Auffälligkeiten und öffnen Sie die Daten hinter dem Ergebnis.
              </p>

              <a href="/de/ai">
                PayMyDine KI entdecken
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.owner[2]} alt={"Restaurantbesitzer mit PayMyDine"} loading="lazy" />

          </article>





          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                FÜR TEAMS
              </span>

              <h3>
                Leiten Sie die nächste Aktion an die dafür verantwortliche Rolle weiter.
              </h3>

              <p>
                Der Service bearbeitet Tische und Gästeanfragen, die Küche Bestellungen und Zubereitungszeiten. Die Reservierung verwaltet Ankünfte und Verfügbarkeit. Ein gemeinsamer Status macht sichtbar, wo Aufgaben noch offen sind.
              </p>

              <a href="/de/solutions/team">
                Vergleichen Sie alle 6 Arbeitsbereiche
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.staff[4]} alt={"Restaurantteam mit PayMyDine"} loading="lazy" />

          </article>


          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                GÄSTEWACHSTUM
              </span>

              <h3>
                Verwandeln Sie Besuche, Bestellungen und Feedback in ein nützlicheres Gästebild.
              </h3>

              <p>
                Besuche, Bestellungen und Feedback können Gästeprofile, Treueprogramme, Angebote und Kampagnen ergänzen. So lassen sich spätere Maßnahmen besser auf tatsächliche Gästeinteraktionen abstimmen.
              </p>

              <a href="/de/solutions/guest-ordering">
                Gästeentwicklung im Überblick
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.comments[8]} alt={"Gast QR Bestellerfahrung"} loading="lazy" />

          </article>

        </div>

      </section>


      <section className="section twoUpStorySection">

        <div className="container">

          <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              PayMyDine KI auf der gesamten Plattform
            </span>

            <h2>
              Fragen an den Restaurantbetrieb stellen – statt mehrere voneinander getrennte Dashboards zu durchsuchen.
            </h2>

            <p>
              PayMyDine KI arbeitet mit den verfügbaren Betriebsdaten. Fragen Sie nach Umsatz, Gästen, Durchschnittsbon, Tischwechsel, Verkaufszeiten, Bestsellern, Zahlungsarten, Prognosen oder Rentabilität. Die Antworten lassen sich zu ihren Datenquellen zurückverfolgen.
            </p>

          </div>


          {/* === PMD KI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img src="/site-assets/custom/ai-impact-growth.webp" alt={"Abbildung zeigt, dass KI-gestützte Restauranteffizienz, den Umsatz, den Tischumsatz und die Gästezufriedenheit unterstützt, während Kosten, Wartezeiten und manuelle Arbeit im Laufe der Zeit abnehmen."} loading="lazy" decoding="async" />

          </figure>

          {/* === PMD KI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img src="/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  Fragen, vergleichen, untersuchen
                </span>

                <h2>
                  Veränderungen erkennen, Zeiträume vergleichen und die relevante Datenquelle direkt öffnen.
                </h2>

                <p>
                  Wechseln Sie von einer Kennzahl zu den zugrunde liegenden Restaurantdaten. So müssen Sie nicht mehrere getrennte Berichte nach möglichen Ursachen durchsuchen.
                </p>

              </div>

            </article>


            <article>

              <img src="/site-assets/home-ai-story-20261005/untitled-design-19.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  Tagesübersichten, Warnmeldungen & Prognoseunterstützung
                </span>

                <h2>
                  Von aktuellen Betriebsdaten zur fundierten Managemententscheidung.
                </h2>

                <p>
                  Nutzen Sie KI-gestützte Tagesübersichten, Hinweise auf Auffälligkeiten, Zeitvergleiche und Prognosen. Die zugrunde liegenden Kennzahlen, Vergleichszeiträume und Entscheidungen des Teams bleiben dabei nachvollziehbar.
                </p>

              </div>

            </article>

          </div>


          <div className="sectionHeading centerHeading">

            <a className="button buttonGhost" href="/de/ai">
              PayMyDine KI entdecken
            </a>

          </div>

        </div>

      </section>

    </>;
}
export function FlexibilityAndIntegrationSections() {
  return <>

      <section className="section flexibilitySection">

        <div className="container flexibilityGrid">

          <div className="flexibilityCopy">

            <span className="eyebrow">
              Restaurantbetrieb konfigurieren, KI-Kontext verbessern
            </span>

            <h2>
              Legen Sie Rollen, Module, Tischpläne und Gästeabläufe einmal fest. Nutzen Sie die verknüpften Daten anschließend für den täglichen Betrieb und KI-gestützte Analysen.
            </h2>

            <p>
              Bauen Sie auf den bestehenden Abläufen Ihres Restaurants auf. Wählen Sie die Produktbereiche, die doppelte Arbeit vermeiden, legen Sie Berechtigungen fest und erhalten Sie den Datenkontext für Berichte, Vergleiche und KI-gestützte Fragen.
            </p>

            <div className="featureList">

              <span>
                <Icon name="team" size={20} />
                <b>6 rollenbasierte Arbeitsbereiche</b>
              </span>

              <span>
                <Icon name="chart" size={20} />
                <b>KI-gestützte Fragen und Briefings</b>
              </span>

              <span>
                <Icon name="phone" size={20} />
                <b>Gästemenü und QR-Abläufe</b>
              </span>

              <span>
                <Icon name="link" size={20} />
                <b>Unterstützte Kassenanbindungen</b>
              </span>

            </div>

            <a className="button buttonGhost" href="/de/restaurant-types">
              Vergleichen Sie Restaurant-Setups
            </a>

          </div>


          <div className="flexImageStack">

            <figure className="stackMain">

              <img src={imageGroups.table[8]} alt={"Restauranttischerfahrung"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallA">

              <img src={imageGroups.social[11]} alt={"Restaurant Gästeerlebnis"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallB">

              <img src={imageGroups.staff[1]} alt={"Arbeitsbereich des Restaurantteams"} loading="lazy" />

            </figure>

          </div>

        </div>

      </section>


      <section className="section integrationSection">

        <div className="container integrationGrid">

          <div className="integrationCopy">

            <span className="eyebrow">
              Vernetzte Systeme, besserer KI-Kontext
            </span>

            <h2>
              Binden Sie bestehende Restaurantsysteme an, damit Betrieb, Berichte und KI mit einem umfassenderen Datenbild arbeiten können.
            </h2>

            <p>
              Unterstützte Kassen-, Buchhaltungs-, Liefer- und Zahlungssysteme können Daten für zentrale Berichte, Standortvergleiche, Bestandsübersichten und Rentabilitätsanalysen liefern. Je vollständiger und verlässlicher die verfügbaren Daten sind, desto hilfreicher werden KI-gestützte Vergleiche und Untersuchungen.
            </p>

            <div className="integrationNote">

              <Icon name="link" size={18} />

              Umfang von Integrationen und KI-Funktionen hängen von den verfügbaren Schnittstellen, Berechtigungen und Datenfeldern der angebundenen Systeme ab.

            </div>

            <a className="textArrow" href="/de/integrations">
              Integrationsmöglichkeiten prüfen
              {' '}
              <Icon name="arrow" size={15} />
            </a>

          </div>


          <div className="integrationVisual">

            <div className="integrationBrand">

              <img src="/site-assets/logo.svg" alt="" />

              <b>
                PayMyDine
              </b>

            </div>

            <div className="integrationPills">

              {integrationFeaturePills.map(name => <span key={name}>
                  {name}
                </span>)}

            </div>

            <img className="integrationPhoto" src='/site-assets/hardware-device-20261004/kiosk.webp' alt={"Kassenintegrationskonzept"} loading="lazy" />

          </div>

        </div>

      </section>

    </>;
}
export default function StorySections() {
  return <>
      <RoleAndAISections />
      <FlexibilityAndIntegrationSections />
    </>;
}
