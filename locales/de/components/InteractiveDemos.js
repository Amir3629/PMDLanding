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
            Teams sehen die Aufgaben, die für sie wichtig sind. Das Management behält den Überblick. KI hilft, Zusammenhänge in den Daten zu erkennen.
          </h2>

          <p>
            PayMyDine bietet jedem Team eine passende Arbeitsansicht und führt die Informationen im Hintergrund zusammen. So kann KI Fragen zum tatsächlichen Restaurantbetrieb beantworten, statt nur einen losgelösten Chat bereitzustellen.
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
                Geschäftszahlen im Blick behalten und mit KI untersuchen, was sich bei Umsatz, Gästen, Tischen, Bestellungen und Rentabilität verändert hat.
              </h3>

              <p>
                Öffnen Sie zu einer Kennzahl die zugrunde liegenden Daten, vergleichen Sie Zeiträume und erkennen Sie, welcher Standort, Kanal, Artikel oder Bereich genauer untersucht werden sollte.
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
                Vier einfache Schritte: Scannen, auswählen, bestellen und bezahlen.
              </h3>

              <p>
                Der QR-Code am Tisch verbindet Gäste, Bestellung und Zahlung bis zum Abschluss. Diese Vorgänge liefern zugleich strukturierte Daten für Berichte und KI-gestützte Auswertungen.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
