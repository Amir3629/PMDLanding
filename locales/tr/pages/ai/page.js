import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
import { Icon } from "@/locales/tr/components/Icons";
import ProductDetailSections from "@/locales/tr/components/ProductDetailSections";
export const metadata = {
  title: 'PayMyDine AI',
  description: "AI restoran soruları için yardım, günlük brifingler, uyarılar, karşılaştırmalar, tahminler ve bir sonraki soruşturma."
};
const questions = [["Bir iş soruyu sorun", "Gelir hakkında sorun, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması, en iyi satıcılar, ödeme karışımı veya kârlılık, yapılandırılan ortamda mevcut verileri kullanarak."], ["Günlük kısa bir süre alın", "Summarise önceki dönemi, olağandışı hareketi vurgulayın ve daha yakın bir görünüm hak eden metrikleri veya yerleri listeleyin."], ["Bir uyarı", "Kaynak dönemi, kategori, konum veya işletim bağlamına alışılmadık bir sinyalden hareket edin."], ["Karşılaştırma ve tahmin", "Talep, satış ve kârlı tahminleri desteklemek için tarihsel kalıpları kullanın."]];
const aiDetails = {
  factsEyebrow: "AI kapsamı ve korumaları",
  factsTitle: "Altı yardım modu, iş akışında tutulan insan incelemesi ile dokuz yönetim ölçümleri arasında çalışabilir.",
  factsIntro: "Bunlar ürün kapsamını tanımlar. Hassasiyet ve kullanışlılık kaynak verilere, tanımlamalara, izinlere ve soru sormaya bağlıdır.",
  facts: [['06', "AI-assisted eylemleri", "Sorular, özetler, uyarılar, karşılaştırmalar, tahminler ve bir sonraki soruşturma formu mevcut AI kapsamı."], ['09', "Yönetim metrics", "Gelir, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması, en iyi satıcılar, ödeme karışımı, tahmin ve kârlılık iş kapsamı sağlar."], ['04', "Karar rolleri", "Sahibi, yönetici, finans ve çoklu konum liderliği farklı kararlar için aynı verileri araştırabilir."], ['01', "İnsan karar sahibi", "AI kanıtları organize edebilir ve ne denetleyeceğini önerebilir; restoran ekibi onaylar ve karar verebilir."]],
  workflowEyebrow: "Sorumlu bir AI soruşturma",
  workflowTitle: "Bir restoran sorusu kaynak verilerinden bir sonraki eyleme nasıl hareket eder.",
  workflowIntro: "Kaynak, dönem ve metrik tanım soruşturma boyunca görünür kalmalıdır.",
  workflow: [["Belirli bir soru seçin", "Ne değişti, hangi konum taşındı ya da bir öğe marjının neden dikkat gerektirdiği gibi bir kararla başlayın."], ["Mevcut kaynağı onaylayın", "Soruyu, yerlerini, dönemlerini ve tanımlarını tanımlayın."], ["Bir özet veya karşılaştırma", "Hareket, karşılaştırma veya tahminleri eksik girişler olmadan tanımlamak için mevcut verileri kullanın."], ["Kanıtlar", "Kaynak metrik, dönem, yer, kategori veya eşyayı AI çıkışının arkasındaki açın."], ["Sonuç olarak karar ve inceleme", "Bir kişi eylemi seçer, işletim değişikliğinden sonra aynı metriki tekrar gözden geçirme ve karşılaştırır."]],
  rolesTitle: "AI, aynı cevabı vermeden her karar rolü için kısa bir inceleme yapmalıdır.",
  rolesIntro: "İzinler ve iş bağlamı hangi soruları ve kaynak görüşlerinin her kişiye mevcut olması gerektiğini belirler.",
  roleViews: [["İşletme Sahibi", "Zamanları veya yerleri karşılaştırır, kârlı hareket eder ve hangi iş sinyalinin dikkat çektiğini sorar."], ["Yönetici", "Yatırım istisnaları, masa veya satış hareketi ve alışılmadık bir sonucun arkasındaki işletim olayları."], ["Finans Finans", "Finansal bir özet veya karşılaştırmayı kabul etmeden önce gelir, ödeme, kategori ve maliyet bağlamı kontrol eder."], ["Multi-location liderlik", "Yerel kaynak bağlamını incelemek için tutarlı tanımlamaları kullanarak siteleri karşılaştırır."]],
  metricsEyebrow: "AI katmanını Evaluate",
  metricsTitle: "Önlenebilirlik ve karar kullanışlılığı, cevabın ne kadar akıcı olduğunu değil.",
  metricsIntro: "Bir AI özelliği, restoran akışında belgeli sorular, kaynak kapsamı ve gerçek sonuçlarla incelenmelidir.",
  metrics: [["Kaynak kapsamı", "Bir soru tarafından gerekli verilerin mevcut olup olmadığını takip edin, mevcut ve doğru yere veya zamana haritalandı."], ["Yanıt izability", "Kullanıcının arkadaki metrik, filtre ve kaynak bağlamına geri dönebileceğini gözden geçirin."], ["Tahmin hatası", "Tahmin edilen ve gerçek sonuçları aynı dönemi kullanarak ve tanımı garanti olarak sunmak yerine."], ["İnceleme zamanı", "Baseline, tanımlanmış bir yönetim sorusu daha önce ve AI-assisted iş akışından sonra ne kadar uzun bir araştırma yapmak gerekir."]],
  implementationTitle: "AI çıktılarına izin vermeden önce veri sözleşmesini ve insan hakem sınırınızı tanımlayın.",
  implementationIntro: "En güvenli AI uygulaması, sistemin ne anlama geldiğini ve nihai kararı kimin sahibi olduğunu açık.",
  implementation: ["Onaylanmış veri kaynakları, yerler ve tarihsel dönemler", "Metrik tanımlamalar ve karşılaştırma kuralları", "Sorular ve kaynak görüşleri için Rol İzinleri", "Minimum veri kalitesi ve tazelik kontrolleri", "Operasyon ve ticari eylemler için insan incelemesi", "Belgelenen dışlamalar, kısıtlamalar ve escalation yol"],
  faqs: [["PayMyDine AI restoranı otomatik olarak yönetiyor mu?", "Hayır. Mevcut konum AI yardım ve karar desteğidir, bağımsız operasyonel kontrol değildir."], ["AI kaynak verileri olmadan bir soru cevaplayabilir mi?", "Yararlı bir cevap, ilgili verileri, tanımı, dönemi ve izinleri gerektirir. Eksik girişler gösterilmelidir, sessizce icat edilmemelidir."], ["Tahminler garantili midir?", "Hayır. Tahminler gerçek sonuçlara karşı ölçülmelidir ve tahminler olarak incelenmelidir, vaat etmemelidir."], ["Farklı roller farklı sorular sorabilir mi?", "Evet. Rol izinleri ve mevcut kaynak görüşleri her sorumluluğun uygun soruları ve derinliği kontrol etmelidir."]]
};
export default function AIPage() {
  return <>
      <PageHero eyebrow={"6 AI-assisted eylemleri"} title={"Gelir, konuklar, masalar veya kârlılık ve cevabı kaynağı verilere geri izler."} intro={"PayMyDine AI soruları destekleyebilir, günlük brifingler, uyarılar, karşılaştırmalar, tahminler ve kurulumunuzda mevcut olan restoran verileriyle ilgili bir sonraki soruşturma. Kararları destekliyor; onları değiştirmiyor."} image="/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp" accent="green" />

      <section className="section highlightSection">
        <div className="container highlightGrid">
          {questions.map(([title, body], index) => <article className="highlightCard" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>)}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          <article className="storyFeature">
            <div className="storyFeatureImage"><img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">bağlamda 9 metrik</span>
              <h2>Bir numarayla başlayın, sonra karşılaştırma süresini tutar ve ameliyat görünür.</h2>
              <p>Gelir, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması, en iyi satıcılar, ödeme karışımı, tahminler ve kârlılık, sahibinin arkadaki kaynak görüşe hareket edebileceği daha kullanışlıdır.</p>
              <a className="textArrow" href="/tr/solutions/insights">9 yönetim metriklerini görün <Icon name="arrow" size={15} /></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/custom/solution-story/ai-investigation-time-20260809.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Karar desteği, otomatik pilot değil</span>
              <h2>AI'i ekip onayladığı ve karar verirken kısa bir soruşturma zamanı kullanın.</h2>
              <p>Her özet modüllere, veri kalitesine, karşılaştırma süresine ve mevcut entegrasyonlara bağlıdır. Restoran ekibi operasyonel veya ticari eylemin kontrolünü tutar.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={aiDetails} productName={"PayMyDine AI"} />

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Mevcut AI eylemleri</span>
            <h2>Soru, özetleme, karşılaştırma, uyarı, tahmin ve araştırma.</h2>
            <p>Exact çıktıları, PayMyDine ortamında mevcut olan verilere, modüllere, konumlara ve bağlantılı sistemlere bağlıdır.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />Doğal dil soruları</span>
            <span><Icon name="check" size={16} />Daily AI kısaca</span>
            <span><Icon name="check" size={16} />Akıllı Uyarılar</span>
            <span><Icon name="check" size={16} />Dönem ve konum Karşılaştırma</span>
            <span><Icon name="check" size={16} />Hedeflenen destek</span>
            <span><Icon name="check" size={16} />Sonraki metrik araştırmak</span>
          </div>
        </div>
      </section>

      <CTA title={"Bir AI demoya gerçek bir yönetim sorusu getir."} body={"PayMyDine verilerinin gerekli olduğunu ve insan incelemesinin nerede önemli olduğunu açıklayacağız."} />
    </>;
}
