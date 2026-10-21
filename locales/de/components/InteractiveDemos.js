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
            Klare Arbeitsabläufe für Teams. Zusammenhänge für KI.
          </span>

          <h2>
            Jedes Team sieht seine Aufgaben. Das Management den Überblick.
          </h2>

          <p>
            Teams erledigen ihre Aufgaben. Das Management sieht das Gesamtbild und kann Veränderungen mit KI prüfen.
          </p>

        </div>


        <div className="demoShowcaseGrid">

          <article className="demoShowcaseCard demoShowcaseWide">

            <div className="demoShowcaseMedia demoShowcaseMediaProduct">

              <img src={ownerImage} alt={"PayMyDine: Ansicht für Restaurantleitung und Betrieb"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Eigentümer, Management & KI
              </span>

              <h3>
                KI fragen. Zahlen prüfen.
              </h3>

              <p>
                Zeiträume vergleichen und Änderungen nach Standort, Kanal oder Artikel prüfen.
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
                Scannen. Auswählen. Bestellen. Bezahlen.
              </h3>

              <p>
                Ein QR-Ablauf verbindet Tisch, Bestellung und Zahlung für Gäste und Team.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
