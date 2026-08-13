import { Icon } from './Icons';
export default function Hero() {
  return <section className="hero section pmdHeroFullBleedFix">
      <div className="heroAura heroAuraOne" />
      <div className="heroAura heroAuraTwo" />

      <div className="container heroGrid">

        <div className="heroCopy">

          <span className="eyebrow">
            Birbirine bağlı 9 ürün alanı
          </span>

          <h1 className="pmdGrowthHeroTitle">
            AI Destekli
            <br />
            Restoran Büyümesi.
            <br />
            <span>
              Daha Düşük Maliyetler.
              <br />
              Daha Hızlı Servis.
              <br />
              Daha Yüksek Gelir.
            </span>
          </h1>

          <p className="heroText">
            PayMyDine restoranlar otomatik rezervasyonlara yardımcı olur, sipariş,
Mutfak, ödeme ve takım iş akışları, her masayı optimize edin ve
misafir yolculuğu ve CRM'i bağlayın ve bir canlı işletimde analitik
Resim. AI- güçlü içgörüler neye ihtiyaç duyar, yardımcı olur
manuel çalışmayı azaltır ve zaman bekler, hız hizmeti, masayı geliştirir
ciro ve misafir deneyimi ve gelir büyümesini destekler.
          </p>

          <div className="heroButtons">

            <a className="button" href="/tr/contact">
              Demo Rezervasyonu Yap <Icon name="arrow" size={18} />
            </a>

            <a className="button buttonGhost" href="/tr/ai">
              <Icon name="play" size={18} />
              PayMyDine AI
            </a>

          </div>

          <div className="heroProof">

            {["Birbirine bağlı 9 ürün alanı", "6 AI-assisted eylemleri", "6 rol çalışma alanları", "Source-linked AI inceleme"].map(item => <span key={item}>
                <Icon name="check" size={15} />
                {item}
              </span>)}

          </div>

        </div>


        <div className="heroVisual">

          <div className="heroImageFrame heroImageFrameClean heroRightPanel pmdHeroArtworkWrapFix">

            <img src="/site-assets/hero-platform.webp" alt={"PayMyDine platformu ve misafir deneyimi"} className="heroImage pmdHeroArtworkFix" />

          </div>

        </div>

      </div>


      <div className="pmdHeroSecondaryLayerV2" aria-hidden="true">

        <img src="/site-assets/custom/home-hero-secondary-18.webp" alt="" className="pmdHeroSecondaryImageV2" />

      </div>

    </section>;
}
