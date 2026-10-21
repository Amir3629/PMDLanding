import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix pmdHomeHeroSingleBackground">
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">
            Birbirine bağlı 9 ürün alanı
          </span>

          <h1 className="pmdGrowthHeroTitle">
            Yapay Zeka Destekli
            <br />
            İşletme Büyümesi.
            <br />
            <span>
              Daha Düşük Maliyet.
              <br />
              Daha Hızlı Servis.
              <br />
              Daha Yüksek Gelir.
            </span>
          </h1>

          <ul className="heroText pmdHeroBenefits">
            <li>Rezervasyon, masa, sipariş ve ödemeleri bir araya getirin.</li>
            <li>Her ekip kendi görevlerini tek bakışta görsün.</li>
            <li>Yapay zekâ ile değişimleri ve kaynak verileri inceleyin.</li>
          </ul>

          <div className="heroButtons">
            <a className="button" href="/tr/contact">
              Tanıtım talep et <Icon name="arrow" size={18}/>
            </a>

            <a className="button buttonGhost" href="/tr/ai">
              <Icon name="play" size={18}/>
              Yapay Zekayı Keşfedin
            </a>
          </div>

          <div className="heroProof">
            {[
              'Birbirine bağlı 9 ürün alanı',
              '6 Yapay Zeka destekli işlem',
              '6 rol bazlı çalışma alanı',
              'Kaynak veriye dayalı Yapay Zeka incelemesi'
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
          alt="PayMyDine restoran POS cihazları"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}
