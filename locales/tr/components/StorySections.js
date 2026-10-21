import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from '@/locales/tr/data/site';

export function RoleAndAISections() {
  return (
    <>
      <section className="section darkStorySection">
        <div className="container darkIntro">
          <div>
            <span className="eyebrow darkEyebrow">
              6 rol bazlı çalışma alanı + ortak Yapay Zeka içeriği
            </span>

            <h2>
              Her ekip için doğru araçlar.
            </h2>
          </div>

          <p>
            Altı ekip, ortak masa ve sipariş bilgileri. Yapay zekâ değişimleri incelemeye yardımcı olur.
          </p>
        </div>

        <div className="container darkStoryGrid">
          <article className="darkStoryCard wideDarkCard">
            <div className="darkCardCopy">
              <span>
                İŞLETME SAHİPLERİ + YAPAY ZEKA
              </span>

              <h3>
                Neyin değiştiğini görün. Yapay zekâya sorun.
              </h3>

              <p>
                Geliri, müşteri sayısını ve siparişleri kaynak verilerle karşılaştırın.
              </p>

              <a href="/tr/ai">
                PayMyDine Yapay Zekayı keşfedin{' '}
                <Icon name="arrow" size={15}/>
              </a>
            </div>

            <img
              src={imageGroups.owner[2]}
              alt="PayMyDine kullanan restoran işletme sahibi"
              loading="lazy"
            />
          </article>

          <article className="darkStoryCard">
            <div className="darkCardCopy">
              <span>
                TAKIMLAR İÇİN
              </span>

              <h3>
                Bir sonraki işi, ondan sorumlu role yönlendirin.
              </h3>

              <p>
                Servis ekibi masaları ve müşteri taleplerini, mutfak siparişleri
                ve zamanlamayı, rezervasyon ekibi gelişleri ve müsaitliği görür.
                Ortak durum yönetim ve Yapay Zekaya işin nerede beklediğini
                daha net gösterir.
              </p>

              <a href="/tr/solutions/team">
                6 çalışma alanını karşılaştırın{' '}
                <Icon name="arrow" size={15}/>
              </a>
            </div>

            <img
              src={imageGroups.staff[4]}
              alt="PayMyDine kullanan restoran ekibi"
              loading="lazy"
            />
          </article>

          <article className="darkStoryCard">
            <div className="darkCardCopy">
              <span>
                MÜŞTERİ ARTIŞI
              </span>

              <h3>
                Ziyaretleri, siparişleri ve geri bildirimleri daha kullanışlı
                bir müşteri resmine dönüştürün.
              </h3>

              <p>
                Profiller, sadakat, teklifler, kampanyalar, geri bildirim ve
                müşteri bağlılığı sinyalleri; bunları oluşturan ziyaret geçmişiyle
                bağlantılı kalabilir. Böylece yönetim sonraki kararlar için daha
                güçlü bir içeriğe sahip olur.
              </p>

              <a href="/tr/solutions/guest-ordering">
                Müşteri artışı iş akışını inceleyin{' '}
                <Icon name="arrow" size={15}/>
              </a>
            </div>

            <img
              src={imageGroups.comments[8]}
              alt="Masa QR koduyla sipariş veren müşteri"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">
              Platform genelinde PayMyDine Yapay Zeka
            </span>

            <h2>
              Restoran verilerinize sorun.
            </h2>

            <p>
              Satış, müşteri ve kârlılık verilerini inceleyin. Yanıtların kaynağına ulaşın.
            </p>
          </div>

          {/* === PMD AI IMPACT GRAPH V6 START === */}
          <figure className="pmdAiImpactVisual">
            <img
              src="/site-assets/custom/ai-impact-growth.webp"
              alt="Yapay Zeka desteğiyle restoran verimliliği, gelir, masa devir hızı ve müşteri memnuniyeti artarken maliyet, bekleme süresi ve manuel işin azaldığını gösteren illüstrasyon."
              loading="lazy"
              decoding="async"
            />
          </figure>
          {/* === PMD AI IMPACT GRAPH V6 END === */}

          <div className="twoUpStoryGrid">
            <article>
              <img src="/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp" alt="" loading="lazy" />
              <div>
                <span className="eyebrow">
                  Sorun, karşılaştırın, inceleyin
                </span>

                <h2>
                  Değişimi görün. Kaynağı bulun.
                </h2>

                <p>
                  Raporlar arasında geçmeden rakamların ayrıntılarına inin.
                </p>
              </div>
            </article>

            <article>
              <img src="/site-assets/home-ai-story-20261005/untitled-design-19.webp" alt="" loading="lazy" />
              <div>
                <span className="eyebrow">
                  Günlük özetler, uyarılar ve tahmin desteği
                </span>

                <h2>
                  Canlı veriden net aksiyonlara.
                </h2>

                <p>
                  Günlük özetleri, uyarıları ve tahminleri inceleyin. Kararı ekibiniz verir.
                </p>
              </div>
            </article>
          </div>

          <div className="sectionHeading centerHeading">
            <a className="button buttonGhost" href="/tr/ai">
              PayMyDine Yapay Zekayı keşfedin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function FlexibilityAndIntegrationSections() {
  return (
    <>
      <section className="section flexibilitySection">
        <div className="container flexibilityGrid">
          <div className="flexibilityCopy">
            <span className="eyebrow">
              Operasyonu yapılandırın, Yapay Zeka içeriğini güçlendirin
            </span>

            <h2>
              Restoranınızı istediğiniz gibi kurun.
            </h2>

            <p>
              Modülleri seçin, yetkileri belirleyin ve raporları günlük işle bağlayın.
            </p>

            <div className="featureList">
              <span><Icon name="team" size={20}/><b>6 rol bazlı çalışma alanı</b></span>
              <span><Icon name="chart" size={20}/><b>Yapay Zeka destekli sorular ve günlük özetler</b></span>
              <span><Icon name="phone" size={20}/><b>Müşteri menüsü ve QR akışları</b></span>
              <span><Icon name="link" size={20}/><b>Desteklenen POS bağlantıları</b></span>
            </div>

            <a className="button buttonGhost" href="/tr/restaurant-types">
              Restoran kurulumlarını karşılaştırın
            </a>
          </div>

          <div className="flexImageStack">
            <figure className="stackMain">
              <img src={imageGroups.table[8]} alt="Restoranda masa deneyimi" loading="lazy" />
            </figure>
            <figure className="stackSmall stackSmallA">
              <img src={imageGroups.social[11]} alt="Restoran müşteri deneyimi" loading="lazy" />
            </figure>
            <figure className="stackSmall stackSmallB">
              <img src={imageGroups.staff[1]} alt="Restoran ekip çalışma alanı" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section integrationSection">
        <div className="container integrationGrid">
          <div className="integrationCopy">
            <span className="eyebrow">
              Bağlı sistemler, daha güçlü Yapay Zeka içeriği
            </span>

            <h2>
              Mevcut sistemlerinizi bağlayın.
            </h2>

            <p>
              Desteklenen kasa, muhasebe, teslimat ve ödeme verilerini raporlara bağlayın.
            </p>

            <div className="integrationNote">
              <Icon name="link" size={18}/>
              Entegrasyon ve Yapay Zeka kapsamı, her dış sistemin sunduğu API'lere,
              yetkilere ve veri alanlarına bağlıdır.
            </div>

            <a className="textArrow" href="/tr/integrations">
              Entegrasyon kapsamını inceleyin{' '}
              <Icon name="arrow" size={15}/>
            </a>
          </div>

          <div className="integrationVisual">
            <div className="integrationBrand">
              <img src="/site-assets/logo.svg" alt="" />
              <b>PayMyDine</b>
            </div>

            <div className="integrationPills">
              {integrationFeaturePills.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>

            <img
              className="integrationPhoto"
              src='/site-assets/hardware-device-20261004/kiosk.webp'
              alt="POS entegrasyon kavramı"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default function StorySections() {
  return (
    <>
      <RoleAndAISections />
      <FlexibilityAndIntegrationSections />
    </>
  );
}
