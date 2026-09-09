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
              Her role sorumlu olduğu işi verin;
              Yapay Zekaya da restoran genelinde ne olduğunu anlaması için
              gereken ortak içeriği sağlayın.
            </h2>
          </div>

          <p>
            Masa, sipariş, müşteri, zamanlama ve ödeme içerikleri bağlantılıyken
            işletme sahibi, yöneticiler, servis personeli, mutfak, rezervasyon
            ekibi ve finans konsantre bilgiyi kullanabilir. Yönetim daha sonra
            PayMyDine Yapay Zeka ile bir uyarıdan arkasındaki kaynak veriye
            kadar ilerleyebilir.
          </p>
        </div>

        <div className="container darkStoryGrid">
          <article className="darkStoryCard wideDarkCard">
            <div className="darkCardCopy">
              <span>
                İŞLETME SAHİPLERİ + YAPAY ZEKA
              </span>

              <h3>
                İşletme göstergelerini inceleyin; ardından neyin değiştiğini
                ve nerede daha derine bakılması gerektiğini Yapay Zekaya sorun.
              </h3>

              <p>
                Gelir, müşteri sayısı, masalar, rezervasyonlar, mutfak durumu
                ve en çok satan ürünlerle başlayın. Sonra dönemleri karşılaştırın,
                olağandışı hareketleri öne çıkarın ve yanıtın arkasındaki kaynak
                görünümü açın.
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
              Ayrı bir gösterge paneline değil,
              restoranın tamamına soru sorun.
            </h2>

            <p>
              PayMyDine Yapay Zeka, platformda zaten bulunan operasyon görünümü
              üzerinden çalışır. Gelir, müşteri sayısı, ortalama hesap tutarı,
              masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme
              yöntemi dağılımı, tahminler veya kârlılık hakkında soru sorun;
              ardından yanıtı kaynak veriye kadar takip edin.
            </p>
          </div>

          {/* === PMD AI IMPACT GRAPH V6 START === */}
          <figure className="pmdAiImpactVisual">
            <img
              src="/site-assets/custom/ai-impact-growth.png"
              alt="Yapay Zeka desteğiyle restoran verimliliği, gelir, masa devir hızı ve müşteri memnuniyeti artarken maliyet, bekleme süresi ve manuel işin azaldığını gösteren illüstrasyon."
              loading="lazy"
              decoding="async"
            />
          </figure>
          {/* === PMD AI IMPACT GRAPH V6 END === */}

          <div className="twoUpStoryGrid">
            <article>
              <img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" />
              <div>
                <span className="eyebrow">
                  Sorun, karşılaştırın, inceleyin
                </span>

                <h2>
                  Neyin değiştiğini sorun, dönemleri karşılaştırın ve bir sonraki
                  adımda açılması gereken kaynak görünümü bulun.
                </h2>

                <p>
                  Her olası açıklama için ayrı raporları tek tek kontrol etmek
                  yerine, ana ölçütten arkasındaki restoran içeriğine ilerleyin.
                </p>
              </div>
            </article>

            <article>
              <img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" />
              <div>
                <span className="eyebrow">
                  Günlük özetler, uyarılar ve tahmin desteği
                </span>

                <h2>
                  Canlı operasyon verisini, sinyalden yönetim kararına giden
                  daha kısa bir yola dönüştürün.
                </h2>

                <p>
                  Kaynak ölçütü, karşılaştırma aralığını ve insan kararını
                  görünür tutarken Yapay Zeka destekli günlük özetleri,
                  olağandışı hareket uyarılarını, dönem karşılaştırmalarını ve
                  tahmin desteğini kullanın.
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
              Rolleri, modülleri, servis alanı planlarını ve müşteri yolculuklarını
              bir kez tanımlayın; ortak veriyi hem günlük işler hem de
              Yapay Zeka destekli inceleme için kullanın.
            </h2>

            <p>
              İşlettiğiniz restorandan başlayın. Hangi ürün alanlarının
              tekrarlanan işi azalttığını seçin, her kontrolü kimin görebileceğini
              belirleyin ve yönetimin raporlama, karşılaştırma ve Yapay Zeka
              destekli sorular için ihtiyaç duyduğu içeriği koruyun.
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
              Restoran verisini zaten tutan sistemleri bağlayın; operasyon,
              raporlama ve Yapay Zeka daha geniş bir resim üzerinden çalışsın.
            </h2>

            <p>
              Desteklenen POS, muhasebe, teslimat ve ödeme bağlantıları;
              merkezi raporlama, şube karşılaştırması, stok ve kârlılık iş
              akışlarına yararlı kaynak veri sağlayabilir. İzin verilen kaynak
              resmi ne kadar eksiksiz olursa Yapay Zeka destekli karşılaştırma
              ve incelemeler de o kadar faydalı olabilir.
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
              src={imageGroups.comments[16]}
              alt="POS entegrasyonu konsepti"
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
