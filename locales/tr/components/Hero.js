import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix">
      <div className="heroAura heroAuraOne" />
      <div className="heroAura heroAuraTwo" />

      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">
            Birbirine bağlı 9 ürün alanı
          </span>

          <h1 className="pmdGrowthHeroTitle">
            Yapay Zekâ Destekli
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

          <p className="heroText">
            PayMyDine; rezervasyon, sipariş, mutfak, ödeme ve ekip iş akışlarını
            otomatikleştirmeye, her masayı ve müşteri yolculuğunu daha verimli
            yönetmeye, CRM ile analitiği tek bir canlı operasyon görünümünde
            birleştirmeye yardımcı olur. Yapay Zekâ destekli içgörüler dikkat
            gerektiren noktaları öne çıkarır; manuel işi ve bekleme sürelerini
            azaltmaya, servisi hızlandırmaya, masa devir hızını ve müşteri
            deneyimini iyileştirmeye ve gelir artışını desteklemeye yardımcı olur.
          </p>

          <div className="heroButtons">
            <a className="button" href="/tr/contact">
              Demo Talep Edin <Icon name="arrow" size={18}/>
            </a>

            <a className="button buttonGhost" href="/tr/ai">
              <Icon name="play" size={18}/>
              Yapay Zekâyı Keşfedin
            </a>
          </div>

          <div className="heroProof">
            {[
              'Birbirine bağlı 9 ürün alanı',
              '6 Yapay Zekâ destekli işlem',
              '6 rol bazlı çalışma alanı',
              'Kaynak veriye dayalı Yapay Zekâ incelemesi'
            ].map((item) => (
              <span key={item}>
                <Icon name="check" size={15}/>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroImageFrame heroImageFrameClean heroRightPanel pmdHeroArtworkWrapFix">
            <img
              src="/site-assets/hero-platform.webp"
              alt="PayMyDine platformu ve müşteri deneyimi"
              className="heroImage pmdHeroArtworkFix"
            />
          </div>
        </div>
      </div>

      <div className="pmdHeroSecondaryLayerV2" aria-hidden="true">
        <img
          src="/site-assets/custom/home-hero-secondary-18.webp"
          alt=""
          className="pmdHeroSecondaryImageV2"
        />
      </div>
    </section>
  );
}
