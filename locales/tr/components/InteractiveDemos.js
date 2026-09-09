import { imageGroups } from '@/locales/tr/data/site';

const imageSets = {
  home: [
    imageGroups.pos[0],
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
            Takımlar odaklanmış ekranlar kullanır.
            Yönetim genel resmi görür.
            Yapay Zeka aradaki sinyalleri birleştirmeye yardımcı olur.
          </h2>

          <p>
            PayMyDine, günlük ekranları işi yapan takımlar için pratik tutarken
            raporlama ve Yapay Zeka destekli inceleme için gereken ortak restoran
            içeriğini da korur. Sonuç, ayrı çalışan bir sohbet aracı değil;
            restoranda zaten gerçekleşen operasyonun üzerine kurulan bir destek katmanıdır.
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
                İşletmenin genel görünümünü görün; ardından gelir, müşteriler,
                masalar, siparişler ve kârlılıktaki değişimi Yapay Zeka ile inceleyin.
              </h3>

              <p>
                Üst düzey bir ölçütten arkasındaki kaynak görünüme geçin,
                dönemleri karşılaştırın, olağandışı değişimleri öne çıkarın ve
                hangi salonun, kanalın, kategorinin veya ürünün incelenmesi
                gerektiğine karar verin.
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
                Dört net adım:
                tara, incele, sipariş ver ve öde.
              </h3>

              <p>
                Masa QR yolculuğu, ödeme tamamlanana kadar müşteri, masa,
                sipariş ve ödeme içeriğini birbirine bağlı tutar. Bu etkileşimler
                raporlama ve Yapay Zeka destekli inceleme için yapılandırılmış
                operasyon verisine de dönüşür.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
