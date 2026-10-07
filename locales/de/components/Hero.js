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

          <p className="heroText">
            PayMyDine hilft Restaurants, Reservierungen, Bestellungen, Küche,
            Zahlungen und Teamabläufe zu automatisieren, jeden Tisch und die
            gesamte Gästejourney zu optimieren sowie CRM und Analysen in einem
            aktuellen Betriebsbild zu verbinden. KI-gestützte Einblicke zeigen,
            wo Handlungsbedarf besteht – damit weniger manuelle Arbeit und
            Wartezeit entstehen, der Service schneller wird, Tische effizienter
            genutzt werden, das Gästeerlebnis steigt und der Umsatz wachsen kann.
          </p>

          <div className="heroButtons">
            <a className="button" href="/de/contact">
              Demo buchen <Icon name="arrow" size={18}/>
            </a>

            <a className="button buttonGhost" href="/de/ai">
              <Icon name="play" size={18}/>
              PayMyDine AI entdecken
            </a>
          </div>

          <div className="heroProof">
            {[
              '9 vernetzte Produktbereiche',
              '6 KI-gestützte Aktionen',
              '6 rollenbasierte Arbeitsbereiche',
              'Quellenbasierte KI-Prüfung'
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
          alt="PayMyDine POS-Geräte für Restaurants"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}
