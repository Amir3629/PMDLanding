import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from "@/locales/tr/data/site";
export function RoleAndAISections() {
  return <>

      <section className="section darkStorySection">

        <div className="container darkIntro">

          <div>

            <span className="eyebrow darkEyebrow">
              6 rol çalışma alanları + paylaşılan AI context
            </span>

            <h2>
              Her rolü kendi işlerini verin –
ve AI'e ortak bağlamı açıklamaya yardımcı olmak için verin
Restoranda neler oluyor.
            </h2>

          </div>

          <p>
            Sahipler, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans
Masa, sipariş, misafir, zamanlama ve ödeme yaparken odaklanmış görüşler
bağlam bağlı kalır. Yönetim daha sonra PayMyDine AI'i kullanabilir
Arkadaki kaynak verilerine bir sinyalden hareket edin.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FOR OWNERS + AI
              </span>

              <h3>
                İş sinyallerini gözden geçirin,
Sonra AI'e neyin değiştiğini ve nerede araştırılacağını sorun.
              </h3>

              <p>
                Gelirle başlayın, konuklar, masalar, rezervasyonlar,
mutfak durumu ve en çok satan öğeler.
Sonra dönemleri, yüzey olağandışı hareketi ve açık açık
Cevabın arkasındaki kaynak görüşü.
              </p>

              <a href="/tr/ai">
                PayMyDine AI
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.owner[2]} alt={"Restoran sahibi PayMyDine"} loading="lazy" />

          </article>


          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                FOR TEAMS
              </span>

              <h3>
                Bunun sorumlu rolüne bir sonraki eylemi yollayın.
              </h3>

              <p>
                Servis personeli masaları ve misafir talepleri görür.
Mutfak biletleri ve zamanlamayı görür.
Rezervasyonlar varışları ve kullanılabilirliği görür.
Ortak statü yönetim ve AI daha net bir resim sunar
İş nerede bekliyor.
              </p>

              <a href="/tr/teams">
                Tüm 6 iş alanıyla karşılaştırın
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.staff[4]} alt={"Restoran ekibi PayMyDine"} loading="lazy" />

          </article>


          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                GUEST GROWTH
              </span>

              <h3>
                Ziyaretler, siparişler ve geri bildirimler daha kullanışlı bir misafir resmine girin.
              </h3>

              <p>
                Profiller, sadakat, teklifler, kampanyalar, geri bildirim ve saklama
sinyalleri, yaratılan ziyaret tarihine bağlı kalabilir
Onlar, gelecekteki kararlar için daha iyi bir bağlam verirler.
              </p>

              <a href="/tr/solutions/guest-ordering">
                Misafir büyüme iş akışına bakın
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.comments[8]} alt={"Konuk QR deneyim kazanmak"} loading="lazy" />

          </article>

        </div>

      </section>


      <section className="section twoUpStorySection">

        <div className="container">

          <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              PayMyDine AI platformda
            </span>

            <h2>
              Restorana sorun,
Başka bir izole pano değil.
            </h2>

            <p>
              PayMyDine AI zaten mevcut işletim resminden çalışıyor
Platformda. Gelir hakkında sorun, konuklar, ortalama kontrol,
Tablo cirosu, satış zamanlaması, en iyi satıcılar, ödeme karışımı,
Tahminler veya kârlılık, sonra cevabı geri izler
Kaynak verileri.
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img src="/site-assets/custom/ai-impact-growth.png" alt={"AI- Desteklenen restoran verimliliği, gelir, masa cirosu ve misafir memnuniyeti zaman maliyetleri, bekleme süreleri ve manuel çalışmaları zamanla azalır."} loading="lazy" decoding="async" />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  Soru, karşılaştırma, araştırma
                </span>

                <h2>
                  Ne değiştiğini sorun, dönemi karşılaştır
Ve kaynak görüşü bir sonraki açılışa değer bulmak.
                </h2>

                <p>
                  Bir başlık metrikten restoran bağlamında hareket edin
Bunun yerine, ayrı raporları kontrol etmek yerine arkasında
Her olası açıklama için.
                </p>

              </div>

            </article>


            <article>

              <img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  Notlar, uyarılar ve tahmin desteği
                </span>

                <h2>
                  Canlı işletim verileri daha kısa bir yol haline getirin
sinyalden yönetim kararına.
                </h2>

                <p>
                  AI-assisted günlük kısaltmalar, anomali bayraklar,
Zaman karşılaştırmaları ve tahmin desteği, tutarken
Kaynak metrik, karşılaştırma penceresi ve insan kararı
görünür.
                </p>

              </div>

            </article>

          </div>


          <div className="sectionHeading centerHeading">

            <a className="button buttonGhost" href="/tr/ai">
              PayMyDine AI
            </a>

          </div>

        </div>

      </section>

    </>;
}
export function FlexibilityAndIntegrationSections() {
  return <>

      <section className="section flexibilitySection">

        <div className="container flexibilityGrid">

          <div className="flexibilityCopy">

            <span className="eyebrow">
              Operasyonu yapılandırın, AI bağlamını güçlendirin
            </span>

            <h2>
              Harita rolleri, modüller, kat haritaları ve misafir yolculukları bir kez,
Daha sonra her iki günlük iş için paylaşılan verileri kullanın
AI-assisted inceleme.
            </h2>

            <p>
              Zaten çalıştırdığınız restoranla başlayın.
Hangi ürün alanlarının tekrarlanan çalışmasını seçin,
Her kontrolü kimin görebilir ve bağlamı koruyabilir
Bu yönetim raporlamaya, karşılaştırmalara ve
AI-assisted sorular.
            </p>

            <div className="featureList">

              <span>
                <Icon name="team" size={20} />
                <b>6 rol tabanlı iş alanları</b>
              </span>

              <span>
                <Icon name="chart" size={20} />
                <b>AI-assisted sorular ve kısalamalar</b>
              </span>

              <span>
                <Icon name="phone" size={20} />
                <b>Konuk menü ve QR akışları</b>
              </span>

              <span>
                <Icon name="link" size={20} />
                <b>Desteklenen POS bağlantıları</b>
              </span>

            </div>

            <a className="button buttonGhost" href="/tr/restaurant-types">
              Karşılaştırma restoran kurulumları
            </a>

          </div>


          <div className="flexImageStack">

            <figure className="stackMain">

              <img src={imageGroups.table[8]} alt={"Restoran masası deneyimi"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallA">

              <img src={imageGroups.social[11]} alt={"Restoran misafir deneyimi"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallB">

              <img src={imageGroups.staff[1]} alt={"Restoran takımı çalışma alanı"} loading="lazy" />

            </figure>

          </div>

        </div>

      </section>


      <section className="section integrationSection">

        <div className="container integrationGrid">

          <div className="integrationCopy">

            <span className="eyebrow">
              Bağlantılı sistemler, daha iyi AI context
            </span>

            <h2>
              Restoran verilerini zaten tutan sistemlere bağlanın
Bu nedenle operasyonlar, raporlama ve AI daha geniş bir resimden çalışabilir.
            </h2>

            <p>
              Desteklenen POS, muhasebe, teslimat ve ödeme bağlantıları
Merkezi raporlamaya faydalı kaynak verileri katkıda bulunabilir,
Yer karşılaştırması, envanter ve kârlı akışlar.
İzin verilen kaynak resmi daha tamamlanmış,
Daha kullanışlı AI-assisted karşılaştırmalar ve soruşturmalar olabilir.
            </p>

            <div className="integrationNote">

              <Icon name="link" size={18} />

              Entegrasyon ve AI kapsamı API'lere bağlıdır,
Her dış sistemden mevcut olan izinler ve veri alanları.

            </div>

            <a className="textArrow" href="/tr/integrations">
              Bütünleştirme kapsamı
              {' '}
              <Icon name="arrow" size={15} />
            </a>

          </div>


          <div className="integrationVisual">

            <div className="integrationBrand">

              <img src="/site-assets/logo.svg" alt="" />

              <b>
                PayMyDine
              </b>

            </div>

            <div className="integrationPills">

              {integrationFeaturePills.map(name => <span key={name}>
                  {name}
                </span>)}

            </div>

            <img className="integrationPhoto" src={imageGroups.comments[16]} alt={"POS entegrasyonu konsepti"} loading="lazy" />

          </div>

        </div>

      </section>

    </>;
}
export default function StorySections() {
  return <>
      <RoleAndAISections />
      <FlexibilityAndIntegrationSections />
    </>;
}
