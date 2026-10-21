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
              Die richtigen Werkzeuge für jedes Team.
            </h2>

          </div>

          <p>
            Sechs Teams, ein gemeinsamer Blick auf Tische, Bestellungen und Zahlungen. KI hilft, Veränderungen zu prüfen.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FÜR GESCHÄFTSFÜHRUNG + KI
              </span>

              <h3>
                Veränderungen sehen. KI nach dem Grund fragen.
              </h3>

              <p>
                Umsatz, Gäste und Bestellungen vergleichen – mit Zugriff auf die Daten dahinter.
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
                Klare Übergaben zwischen Teams.
              </h3>

              <p>
                Service, Küche und Reservierung sehen ihre Aufgaben. Das Management erkennt, was noch offen ist.
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
                Gäste besser kennenlernen.
              </h3>

              <p>
                Besuche und Feedback mit Gästeprofilen, Treueprogrammen und Angeboten verknüpfen.
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
              Restaurantdaten direkt befragen.
            </h2>

            <p>
              Umsatz, Gäste, Verkäufe und Rentabilität auswerten. Jede Antwort führt zurück zur Datenquelle.
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
                  Änderungen erkennen. Quellen prüfen.
                </h2>

                <p>
                  Von der Kennzahl direkt zu den zugrunde liegenden Vorgängen.
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
                  Aus Live-Daten werden nächste Schritte.
                </h2>

                <p>
                  Tagesübersichten, Auffälligkeiten und Prognosen prüfen. Die Entscheidung bleibt beim Team.
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
              Richten Sie PayMyDine passend ein.
            </h2>

            <p>
              Module wählen, Berechtigungen festlegen und Berichte mit dem täglichen Betrieb verbinden.
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
              Bestehende Systeme verbinden.
            </h2>

            <p>
              Daten aus unterstützten Kassen-, Buchhaltungs-, Liefer- und Zahlungssystemen für gemeinsame Berichte nutzen. Der Umfang hängt von der Anbindung ab.
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
