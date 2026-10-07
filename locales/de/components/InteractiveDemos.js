import { imageGroups } from "@/locales/de/data/site";
const imageSets = {
  home: ['/site-assets/home-demo-20261005/untitled-design-18.webp', imageGroups.payment[1]],
  platform: ['/site-assets/social/8.webp', imageGroups.payment[3]],
  demo: [imageGroups.comments[15], imageGroups.table[10]]
};
export default function InteractiveDemos({
  variant = 'home'
}) {
  const [ownerImage, guestImage] = imageSets[variant] || imageSets.home;
  return <section className="section demoSection" id="demo">

      <div className="container">

        <div className="sectionHeading centerHeading demoSectionHeading">

          <span className="eyebrow">
            Operationen für Menschen. Kontext für KI.
          </span>

          <h2>
            Teams erhalten fokussierte Bildschirme.
Management bekommt das breitere Bild.
KI hilft, die Signale zwischen ihnen zu verbinden.
          </h2>

          <p>
            PayMyDine hält tägliche Schnittstellen für die Menschen praktisch
die Arbeit beim Sammeln des gemeinsamen Restaurant-Kontexts erforderlich
für Berichterstattung und KI-gestützte Review. Das Ergebnis ist kein anderes
isolierter Chatbot - es ist eine Hilfe, die um die Operation herum aufgebaut ist
Es passiert bereits im Restaurant.
          </p>

        </div>


        <div className="demoShowcaseGrid">

          <article className="demoShowcaseCard demoShowcaseWide">

            <div className="demoShowcaseMedia demoShowcaseMediaProduct">

              <img src={ownerImage} alt={"PayMyDine Besitzer und Restaurant-Betrieb Ablauf"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Eigentümer, Management & KI
              </span>

              <h3>
                Sehen Sie sich das Geschäftsbild an und bitten Sie KI, die Bewegung zu erklären
Über Einnahmen, Gäste, Tische, Bestellungen und Rentabilität.
              </h3>

              <p>
                Bewegen Sie sich von einer High-Level-Metrik zur Quellansicht dahinter,
Perioden vergleichen, ungewöhnliche Veränderungen an der Oberfläche und entscheiden, welche
Boden, Kanal, Kategorie oder Gegenstand müssen untersucht werden.
              </p>

            </div>

          </article>


          <article className="demoShowcaseCard">

            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">

              <img src={guestImage} alt={"PayMyDine Gästeerlebnis"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Gästereise
              </span>

              <h3>
                Vier klare Maßnahmen:
Scannen, durchsuchen, bestellen und bezahlen.
              </h3>

              <p>
                Die Tabelle QR Reise hält Gast, Tisch, Bestellung und Zahlung
Kontext verbunden durch Bezahlvorgang. Diese Interaktionen auch
zu strukturierten Betriebsdaten für die Berichterstattung werden und
KI-gestützte Überprüfung.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
