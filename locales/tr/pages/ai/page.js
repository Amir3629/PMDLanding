import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';
import { Icon } from '@/locales/tr/components/Icons';
import ProductDetailSections from '@/locales/tr/components/ProductDetailSections';

export const metadata = {
  title: 'Restoran Operasyonları için Yapay Zekâ',
  description: 'Gelir, müşteri, masa, satış ve kârlılık verileri üzerinde sorular, günlük özetler, uyarılar, karşılaştırmalar, tahminler ve kaynak veriye dayalı incelemeler için Yapay Zekâ desteği.'
};

const questions = [
  ['Bir işletme sorusu sorun', 'Yapılandırılmış ortamınızdaki mevcut verileri kullanarak gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı veya kârlılık hakkında soru sorun.'],
  ['Günlük özet alın', 'Önceki dönemi özetleyin, olağandışı değişimleri öne çıkarın ve daha yakından incelenmesi gereken metrikleri veya şubeleri listeleyin.'],
  ['Bir uyarının nedenini araştırın', 'Olağandışı bir sinyalden başlayarak arkasındaki döneme, kategoriye, şubeye veya operasyon bağlamına ilerleyin.'],
  ['Karşılaştırın ve tahminleri destekleyin', 'Dönemleri veya şubeleri karşılaştırın; talep, satış ve kârlılık tahminlerini desteklemek için geçmiş verilerdeki örüntülerden yararlanın.']
];

const aiDetails = {
  factsEyebrow: 'Yapay Zekâ kapsamı ve güvenlik sınırları',
  factsTitle: 'Altı destek biçimi, insan incelemesi iş akışında kalırken dokuz yönetim metriği üzerinde çalışabilir.',
  factsIntro: 'Bu sayılar ürün kapsamını tanımlar. Doğruluk ve fayda; kaynak veriye, tanımlara, yetkilere ve sorulan soruya bağlıdır.',
  facts: [
    ['06', 'Yapay Zekâ destekli işlem', 'Sorular, günlük özetler, uyarılar, karşılaştırmalar, tahminleme ve bir sonraki inceleme adımını belirleme mevcut kapsamı oluşturur.'],
    ['09', 'yönetim metriği', 'Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı, tahminleme ve kârlılık işletme bağlamını sağlar.'],
    ['04', 'karar rolü', 'İşletme sahibi, yönetici, finans ve çoklu şube yönetimi aynı veriyi farklı kararlar için inceleyebilir.'],
    ['01', 'nihai karar sahibi insan', 'Yapay Zekâ kanıtları düzenleyebilir ve neyin incelenmesi gerektiğini önerebilir; restoran ekibi doğrular ve karar verir.']
  ],
  workflowEyebrow: 'Sorumlu bir Yapay Zekâ incelemesi',
  workflowTitle: 'Bir restoran sorusu kaynak veriden gözden geçirilmiş bir sonraki aksiyona nasıl ilerler?',
  workflowIntro: 'Kaynak, dönem ve metrik tanımı inceleme boyunca görünür kalmalıdır.',
  workflow: [
    ['Net bir soru seçin', 'Neyin değiştiği, hangi şubenin farklılaştığı veya bir ürün marjının neden dikkat gerektirdiği gibi belirli bir kararla başlayın.'],
    ['Mevcut veri kaynağını doğrulayın', 'Soruyu destekleyebilecek modülleri, şubeleri, dönemleri ve tanımları belirleyin.'],
    ['Özet veya karşılaştırma oluşturun', 'Eksik girdileri gizlemeden değişimi, karşılaştırmayı veya tahmini açıklamak için mevcut veriyi kullanın.'],
    ['Kanıtı inceleyin', 'Yapay Zekâ çıktısının arkasındaki kaynak metriği, dönemi, şubeyi, kategoriyi veya ürünü açın.'],
    ['Karar verin ve sonucu yeniden inceleyin', 'Bir kişi aksiyonu seçer, yeniden ele alınacak soruyu kaydeder ve operasyon değişikliğinden sonra aynı metriği tekrar karşılaştırır.']
  ],
  rolesTitle: 'Yapay Zekâ her karar rolü için inceleme süresini kısaltmalı; herkese aynı cevabı vermemelidir.',
  rolesIntro: 'Hangi soruların ve kaynak görünümlerinin kullanılabileceğini rol yetkileri ve işletme bağlamı belirler.',
  roleViews: [
    ['İşletme sahibi', 'Dönemleri veya şubeleri karşılaştırır, kârlılık değişimini inceler ve hangi işletme göstergesinin dikkat gerektirdiğini sorar.'],
    ['Yönetici', 'Vardiya istisnalarını, masa veya satış değişimlerini ve olağandışı bir sonucun arkasındaki operasyon olaylarını araştırır.'],
    ['Finans', 'Finansal bir özet veya karşılaştırmayı kabul etmeden önce gelir, ödeme, kategori ve maliyet bağlamını kontrol eder.'],
    ['Çoklu şube yönetimi', 'Yerel kaynak bağlamını inceleme imkânını koruyarak şubeleri tutarlı tanımlarla karşılaştırır.']
  ],
  metricsEyebrow: 'Yapay Zekâ katmanını değerlendirin',
  metricsTitle: 'Yalnızca cevabın akıcı olmasını değil, kaynağa kadar izlenebilirliğini ve karar faydasını ölçün.',
  metricsIntro: 'Bir Yapay Zekâ özelliği; belgelenmiş sorular, kaynak veri kapsamı ve restoran iş akışındaki gerçek sonuçlar üzerinden değerlendirilmelidir.',
  metrics: [
    ['Kaynak veri kapsamı', 'Bir sorunun ihtiyaç duyduğu verinin mevcut, güncel ve doğru şube veya dönemle eşleşmiş olup olmadığını takip edin.'],
    ['Yanıtın izlenebilirliği', 'Kullanıcının bir özetten arkasındaki metriğe, filtreye ve kaynak bağlamına geri dönebildiğini doğrulayın.'],
    ['Tahmin hatası', 'Tahmini garanti gibi sunmak yerine aynı dönem ve tanımla tahmin edilen sonucu gerçekleşen sonuçla karşılaştırın.'],
    ['İnceleme süresi', 'Belirli bir yönetim sorusunu araştırmak için gereken süreyi Yapay Zekâ destekli iş akışından önce ve sonra karşılaştırın.']
  ],
  implementationTitle: 'Yapay Zekâ çıktısını kullanıma açmadan önce veri sözleşmesini ve insan inceleme sınırını tanımlayın.',
  implementationIntro: 'Güvenli bir uygulama; sistemin hangi veriyi bildiğini, neyi göremediğini ve nihai kararın kimde olduğunu açıkça belirtir.',
  implementation: [
    'Onaylanmış veri kaynakları, şubeler ve geçmiş dönemler',
    'Metrik tanımları ve karşılaştırma kuralları',
    'Sorular ve kaynak görünümler için rol yetkileri',
    'Minimum veri kalitesi ve güncellik kontrolleri',
    'Operasyon ve ticari aksiyonlarda insan incelemesi',
    'Belgelenmiş kapsam dışı alanlar, sınırlamalar ve yönlendirme süreci'
  ],
  faqs: [
    ['PayMyDine Yapay Zekâ restoranı otomatik olarak yönetir mi?', 'Hayır. Mevcut konumlandırma bağımsız operasyon kontrolü değil, Yapay Zekâ desteği ve karar desteğidir.'],
    ['Yapay Zekâ kaynak veri olmadan bir soruyu yanıtlayabilir mi?', 'Faydalı bir yanıt için ilgili veri, tanım, dönem ve yetkiler gerekir. Eksik girdiler gizlice varsayılmamalı, açıkça gösterilmelidir.'],
    ['Tahminler garanti midir?', 'Hayır. Tahminler gerçekleşen sonuçlarla karşılaştırılmalı ve vaat olarak değil, öngörü olarak değerlendirilmelidir.'],
    ['Farklı roller farklı sorular sorabilir mi?', 'Evet. Her sorumluluk için uygun soruları ve ayrıntı seviyesini rol yetkileri ile kullanılabilir kaynak görünümler belirlemelidir.']
  ]
};

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="6 Yapay Zekâ destekli işlem"
        title="Gelir, müşteriler, masalar veya kârlılık hakkında sorun; yanıtı kaynak veriye kadar takip edin."
        intro="PayMyDine Yapay Zekâ; kurulumunuzda mevcut olan restoran verileri üzerinden soruları, günlük özetleri, uyarıları, karşılaştırmaları, tahminleri ve bir sonraki inceleme adımını destekleyebilir. Kararları destekler; karar vericinin yerini almaz."
        image="/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp"
        accent="green"
      />

      <section className="section highlightSection">
        <div className="container highlightGrid">
          {questions.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          <article className="storyFeature">
            <div className="storyFeatureImage"><img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Bağlam içinde 9 metrik</span>
              <h2>Bir sayıyla başlayın; karşılaştırma dönemini ve operasyon nedenini görünür tutun.</h2>
              <p>Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı, tahminler ve kârlılık; işletme sahibi özetten arkasındaki kaynak görünüme ilerleyebildiğinde daha anlamlı hale gelir.</p>
              <a className="textArrow" href="/tr/solutions/insights">9 yönetim metriğini görün <Icon name="arrow" size={15} /></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/custom/solution-story/ai-investigation-time-20260809.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Karar desteği; otomatik pilot değil</span>
              <h2>Ekip doğrulamayı ve kararı elinde tutarken Yapay Zekâ ile inceleme süresini kısaltın.</h2>
              <p>Her özet; mevcut modüllere, veri kalitesine, karşılaştırma dönemine ve entegrasyonlara bağlıdır. Operasyon veya ticari aksiyonun kontrolü restoran ekibinde kalır.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={aiDetails} productName="PayMyDine Yapay Zekâ" />

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Kullanılabilir Yapay Zekâ işlemleri</span>
            <h2>Sorun, özetleyin, karşılaştırın, uyarıları inceleyin, tahminleri destekleyin ve araştırın.</h2>
            <p>Kesin çıktılar, PayMyDine ortamında bulunan verilere, modüllere, şubelere ve bağlı sistemlere göre değişir.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Doğal dilde sorular</span>
            <span><Icon name="check" size={16}/>Günlük Yapay Zekâ özeti</span>
            <span><Icon name="check" size={16}/>Akıllı uyarılar</span>
            <span><Icon name="check" size={16}/>Dönem ve şube karşılaştırması</span>
            <span><Icon name="check" size={16}/>Tahmin desteği</span>
            <span><Icon name="check" size={16}/>İncelenecek bir sonraki metrik</span>
          </div>
        </div>
      </section>

      <CTA title="Yapay Zekâ demosuna gerçek bir yönetim sorusu getirin." body="Hangi PayMyDine verisinin gerektiğini belirleyelim, yanıtın arkasındaki kaynak görünümleri gösterelim ve insan incelemesinin nerede gerekli olduğunu açıklayalım." />
    </>
  );
}
