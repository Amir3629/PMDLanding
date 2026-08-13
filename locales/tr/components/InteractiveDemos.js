import { imageGroups } from "@/locales/tr/data/site";
const imageSets = {
  home: [imageGroups.pos[0], imageGroups.payment[1]],
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
            İnsanlar için operasyonlar. AI için metin.
          </span>

          <h2>
            Takımlar odaklanmış ekranlar alır.
Yönetim daha geniş resmi alır.
AI, sinyalleri aralarında bağlamaya yardımcı olur.
          </h2>

          <p>
            PayMyDine günlük arayüzleri insanlar için pratik tutar
Paylaşılan restoran bağlamını toplarken çalışma gerekli
raporlama ve AI-assisted inceleme için. Sonuç başka bir şey değildir
izole chatbot - operasyon etrafında inşa edilen yardım
Restoranda zaten oluyor.
          </p>

        </div>


        <div className="demoShowcaseGrid">

          <article className="demoShowcaseCard demoShowcaseWide">

            <div className="demoShowcaseMedia demoShowcaseMediaProduct">

              <img src={ownerImage} alt={"PayMyDine sahibi ve restoran işlemleri"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Sahibi, yönetim ve AI
              </span>

              <h3>
                İş resmini görün, sonra AI'e hareketi açıklamak için sorun
Gelir, konuklar, masalar, siparişler ve kârlılık.
              </h3>

              <p>
                Yüksek seviyeli bir metrikten arkasındaki kaynak görüşe geçin,
Zamanları, yüzey olağandışı değişiklikleri ve hangisine karar verir
zemin, kanal, kategori veya eşya soruşturmaya ihtiyaç duyar.
              </p>

            </div>

          </article>


          <article className="demoShowcaseCard">

            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">

              <img src={guestImage} alt={"PayMyDine misafir deneyimi"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Konuk yolculuğu
              </span>

              <h3>
                Dört açık eylem:
tarama, tarama, sipariş ve ödeme.
              </h3>

              <p>
                Masa QR yolculuğu misafir, masa, sipariş ve ödeme tutar
checkout ile bağlantılı bağlam. Bu etkileşimler de aynı zamanda
Raporlama ve raporlama için yapılandırılmış işletim verileri haline gelir
AI-assisted inceleme.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
