import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from "@/locales/de/data/site";
export function RoleAndAISections() {
  return <>

      <section className="section darkStorySection">

        <div className="container darkIntro">

          <div>

            <span className="eyebrow darkEyebrow">
              6 Rollen-Arbeitsbereiche + gemeinsamer KI-Kontext
            </span>

            <h2>
              Geben Sie jeder Rolle die Arbeit, die sie besitzt -
und geben KI den gemeinsamen Kontext zu erklären
Was passiert im ganzen Restaurant?
            </h2>

          </div>

          <p>
            Eigentümer, Manager, Servicepersonal, Küche, Reservierungen und Finanzen
Verwenden Sie fokussierte Ansichten während Tisch, Bestellung, Gast, Timing und Zahlung
Der Kontext bleibt verbunden. Das Management kann dann PayMyDine AI verwenden
Bewegen Sie sich von einem Signal zu den Quelldaten dahinter.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FOR OWNERS + KI
              </span>

              <h3>
                Überprüfen Sie die Geschäftssignale,
dann fragen Sie KI, was sich geändert hat und wo Sie untersuchen sollen.
              </h3>

              <p>
                Beginnen Sie mit Einnahmen, Gästen, Tischen, Reservierungen,
Küchenstatus und meistverkaufte Artikel.
Dann vergleichen Sie Perioden, Oberfläche ungewöhnliche Bewegung und öffnen
Die Quellenansicht hinter der Antwort.
              </p>

              <a href="/de/ai">
                PayMyDine AI entdecken
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
                Servicemitarbeiter sehen Tische und Gästeanfragen.
Die Küche sieht Tickets und Timing.
Reservierungen sehen Ankunft und Verfügbarkeit.
Gemeinsamer Status gibt Management und KI ein klareres Bild
Wo die Arbeit wartet.
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
                Profile, Loyalität, Angebote, Kampagnen, Feedback und Bindung
Signale können mit der Besuchsgeschichte verbunden bleiben, die erstellt wurde
Sie geben dem Management einen besseren Kontext für zukünftige Entscheidungen.
              </p>

              <a href="/de/solutions/guest-ordering">
                Sehen Sie sich den Gastwachstums-Ablauf an
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
              PayMyDine AI auf der gesamten Plattform
            </span>

            <h2>
              Fragen Sie das Restaurant,
kein anderes isoliertes Dashboard.
            </h2>

            <p>
              PayMyDine AI funktioniert aus dem Operationsbild bereits verfügbar
auf der Plattform. Fragen Sie nach Einnahmen, Gästen, durchschnittlichem Scheck,
Tabellenumsatz, Verkaufszeitpunkt, Bestseller, Zahlungsmix,
Prognosen oder Rentabilität, dann verfolgen Sie die Antwort zurück zu
die Quelldaten.
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img src="/site-assets/custom/ai-impact-growth.webp" alt={"Abbildung zeigt, dass KI- die Restauranteffizienz, den Umsatz, den Tischumsatz und die Gästezufriedenheit unterstützt, während Kosten, Wartezeiten und manuelle Arbeit im Laufe der Zeit abnehmen."} loading="lazy" decoding="async" />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img src="/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  Fragen, vergleichen, untersuchen
                </span>

                <h2>
                  Fragen Sie, was sich geändert hat, vergleichen Sie den Zeitraum
und finden Sie die Quellansicht, die es wert ist, als nächstes geöffnet zu werden.
                </h2>

                <p>
                  Bewegen Sie sich von einer Headline-Metrik in den Restaurant-Kontext
dahinter, anstatt separate Berichte manuell zu überprüfen
für jede mögliche Erklärung.
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
                  Verwandeln Sie Live-Betriebsdaten in einen kürzeren Pfad
Vom Signal zur Managemententscheidung.
                </h2>

                <p>
                  Verwenden Sie KI-gestützte tägliche Briefings, Anomalie Flags,
Periodenvergleiche und prognostizierte Unterstützung bei Beibehaltung
die Quellmetrik, das Vergleichsfenster und die menschliche Entscheidung
sichtbar.
                </p>

              </div>

            </article>

          </div>


          <div className="sectionHeading centerHeading">

            <a className="button buttonGhost" href="/de/ai">
              PayMyDine AI entdecken
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
              Konfigurieren Sie die Operation, stärken Sie den KI-Kontext
            </span>

            <h2>
              Kartenrollen, Module, Bodenkarten und Gästereisen einmalig,
Verwenden Sie dann die gemeinsamen Daten für beide tägliche Arbeit
und KI-gestützte Review.
            </h2>

            <p>
              Beginnen Sie mit dem Restaurant, das Sie bereits betreiben.
Wählen Sie, welche Produktbereiche doppelte Arbeit entfernen,
definieren, wer jede Kontrolle sehen und den Kontext bewahren kann
dass das Management Berichtspflichten, Vergleiche und
KI-gestützte Fragen.
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
                <b>Gästemenü und QR Flows</b>
              </span>

              <span>
                <Icon name="link" size={20} />
                <b>Unterstützte POS-Verbindungen</b>
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

              <img src={imageGroups.staff[1]} alt={"Restaurant Team Workspace"} loading="lazy" />

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
              Verbinden Sie Systeme, die bereits Restaurantdaten enthalten
Operationen, Berichterstattung und KI können also aus einem größeren Bild heraus funktionieren.
            </h2>

            <p>
              Unterstützt POS, Buchhaltung, Lieferung und Zahlungsverbindungen
nützliche Quelldaten zur zentralen Berichterstattung beitragen können,
Standortvergleich, Inventar und Rentabilität Ablaufs.
Je vollständiger das erlaubte Quellbild ist,
die nützlicheren KI-gestützten Vergleiche und Untersuchungen können sein.
            </p>

            <div className="integrationNote">

              <Icon name="link" size={18} />

              Integration und KI-Bereich hängen von den APIs ab,
Berechtigungen und Datenfelder, die von jedem externen System verfügbar sind.

            </div>

            <a className="textArrow" href="/de/integrations">
              Überprüfung des Integrationsbereichs
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

            <img className="integrationPhoto" src='/site-assets/hardware-device-20261004/kiosk.webp' alt={"POS Integrationskonzept"} loading="lazy" />

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
