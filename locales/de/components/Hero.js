import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix pmdHomeHeroSingleBackground">
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">
            9 vernetzte Produktbereiche
          </span>

          <h1 className="pmdGrowthHeroTitle">
            KI-gestütztes
            <br />
            Restaurantwachstum.
            <br />
            <span>
              Weniger Kosten.
              <br />
              Schnellerer Service.
              <br />
              Mehr Umsatz.
            </span>
          </h1>

          <ul className="heroText pmdHeroBenefits">
            <li>Reservierungen, Tische, Bestellungen und Zahlungen verbinden.</li>
            <li>Jedes Team sieht seine Aufgaben auf einen Blick.</li>
            <li>KI erkennt Auffälligkeiten und zeigt die Daten dahinter.</li>
          </ul>

          <div className="heroButtons">
            <a className="button" href="/de/contact">
              Demo buchen <Icon name="arrow" size={18}/>
            </a>

            <a className="button buttonGhost" href="/de/ai">
              <Icon name="play" size={18}/>
              PayMyDine KI entdecken
            </a>
          </div>

          <div className="heroProof">
            {[
              '9 vernetzte Produktbereiche',
              '6 KI-gestützte Aktionen',
              '6 rollenbasierte Arbeitsbereiche',
              'KI-Analysen mit Quellenbezug'
            ].map((item) => (
              <span key={item}>
                <Icon name="check" size={15}/>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pmdMobileHeroMedia">
        <img
          src="/site-assets/home-hero-untitled-design-17.webp"
          alt="PayMyDine Kassengeräte für Restaurants"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}
