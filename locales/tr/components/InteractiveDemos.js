import { imageGroups } from '@/locales/tr/data/site';

const imageSets = {
  home: [
    '/site-assets/home-demo-20261005/untitled-design-18.webp',
    imageGroups.payment[1]
  ],
  platform: [
    '/site-assets/social/8.webp',
    imageGroups.payment[3]
  ],
  tanıtım: [
    imageGroups.comments[15],
    imageGroups.table[10]
  ]
};

export default function InteractiveDemos({ variant = 'home' }) {
  const [ownerImage, customerImage] = imageSets[variant] || imageSets.home;

  return (
    <section className="section demoSection" id="tanıtım">
      <div className="container">
        <div className="sectionHeading centerHeading demoSectionHeading">
          <span className="eyebrow">
            İnsanlar için operasyon. Yapay Zeka için içerik.
          </span>

          <h2>
            Her ekip kendi işini, yönetim genel durumu görür.
          </h2>

          <p>
            Ekipler günlük işlerine odaklanır. Yönetim değişimleri yapay zekâyla inceler.
          </p>
        </div>

        <div className="demoShowcaseGrid">
          <article className="demoShowcaseCard demoShowcaseWide">
            <div className="demoShowcaseMedia demoShowcaseMediaProduct">
              <img
                src={ownerImage}
                alt="PayMyDine işletme sahibi ve restoran operasyon iş akışı"
                loading="lazy"
              />
            </div>

            <div className="demoShowcaseCopy">
              <span>
                İşletme sahibi, yönetim ve Yapay Zeka
              </span>

              <h3>
                Yapay zekâya sorun. Rakamları kontrol edin.
              </h3>

              <p>
                Dönemleri karşılaştırın; değişimleri şube, kanal veya ürüne göre inceleyin.
              </p>
            </div>
          </article>

          <article className="demoShowcaseCard">
            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
              <img
                src={customerImage}
                alt="PayMyDine müşteri deneyimi"
                loading="lazy"
              />
            </div>

            <div className="demoShowcaseCopy">
              <span>
                Müşteri yolculuğu
              </span>

              <h3>
                Tara. İncele. Sipariş ver. Öde.
              </h3>

              <p>
                Tek QR kodu masayı, siparişi ve ödemeyi birbirine bağlar.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
