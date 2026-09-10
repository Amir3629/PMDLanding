import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';
import { Icon } from '@/locales/tr/components/Icons';
import ProductDetailSections from '@/locales/tr/components/ProductDetailSections';

export const metadata = {
  title: 'Restoran Operasyonları için Yapay Zeka',
  description: 'Gelir, müşteri, masa, satış ve kârlılık verileri üzerinde sorular, günlük özetler, uyarılar, karşılaştırmalar, tahminler ve kaynak veriye dayalı incelemeler için Yapay Zeka desteği.'
};

const questions = [
  ['İşle ilgili bir soru sorun', 'Yapılandırılmış ortamınızdaki mevcut verileri kullanarak gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı veya kârlılık hakkında soru sorun.'],
  ['Günlük özet alın', 'Önceki dönemi özetleyin, olağandışı değişimleri öne çıkarın ve daha yakından incelenmesi gereken ölçütleri veya şubeleri listeleyin.'],
  ['Bir uyarının nedenini araştırın', 'Olağandışı bir sinyalden başlayarak arkasındaki döneme, kategoriye, şubeye veya operasyon içeriğine gidin.'],
  ['Karşılaştırın ve tahmin edin', 'Dönemleri veya şubeleri karşılaştırın; talep, satış ve kârlılık tahminlerini desteklemek için geçmiş verilerdeki örüntülerden yararlanın.']
];

const aiDetails = {
  factsEyebrow: 'Yapay Zeka kapsamı ve güvenlik sınırları',
  factsTitle: 'Altı destek biçimi, insan incelemesi iş akışında kalırken dokuz yönetim ölçütü üzerinde çalışabilir.',
  factsIntro: 'Bu sayılar ürün kapsamını tanımlar. Doğruluk ve fayda kaynak veriye, tanımlara, yetkilere ve sorulan soruya bağlıdır.',
  facts: [
    ['06', 'Yapay Zeka destekli işlemler', 'Sorular, günlük özetler, uyarılar, karşılaştırmalar, tahminde bulunma ve bir sonraki inceleme mevcut YZ\'nın kapsamı oluşturur.'],
    ['09', 'yönetim ölçütleri', 'Gelir, müşteriler, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı, tahminde bulunma ve kârlılık işin içeriğini sağlar.'],
    ['04', 'karar rolleri', 'İşletme sahibi, yönetici, finans ve çoklu şube yönetimi aynı veriyi farklı kararlar için inceleyebilir.'],
    ['01', 'İnsan, nihai karar sahibi', 'Yapay Zeka kanıtları düzenleyebilir ve neyin incelenmesi gerektiğini önerebilir; restoran ekibi teyid eder ve karar verir.']
  ],
  workflowEyebrow: 'Sorumlu bir Yapay Zeka incelemesi',
  workflowTitle: 'Restorana ilişkin bir soru kaynak veriden gözden geçirilmiş bir sonraki aksiyona nasıl ilerler?',
  workflowIntro: 'Kaynak, dönem ve ölçüt tanımı inceleme boyunca görünür kalmalıdır.',
  workflow: [
    ['Belirli bir soru seçin', 'Neyin değiştiği, hangi şubenin farklılaştığı veya bir ürün marjının neden dikkat gerektirdiği gibi belirli bir soruyla başlayın.'],
    ['Mevcut veri kaynağını doğrulayın', 'Soruyu destekleyebilecek modülleri, şubeleri, dönemleri ve tanımları belirleyin.'],
    ['Bir özet veya karşılaştırma oluşturun', 'Eksik girdileri gizlemeden değişimi, karşılaştırmayı veya tahmini açıklamak için mevcut veriyi kullanın.'],
    ['Kanıtı inceleyin', 'Yapay Zeka çıktısının arkasındaki kaynak ölçütü, dönemi, şubeyi, kategoriyi veya ürünü açın.'],
    ['Karar verin ve sonucu yeniden inceleyin', 'Bir kişi aksiyonu seçer, yeniden ele alınacak soruyu kaydeder ve değişikliği uyguladıktan sonra aynı ölçütü tekrar karşılaştırır.']
  ],
  rolesTitle: 'Yapay Zeka her karar rolü için inceleme süresini kısaltmalı; herkese aynı cevabı vermemelidir.',
  rolesIntro: 'İzinler ve iş içeriği her personelin hangi soruları ve kaynak bilgilerini kullanabileceğini belirler.',
  roleViews: [
    ['İşletme sahibi', 'Dönemleri veya şubeleri karşılaştırır, kârlılık değişimini inceler ve hangi işletme göstergesinin dikkat gerektirdiğini sorar.'],
    ['Yönetici', 'Vardiya istisnalarını, masa veya satış değişimlerini ve olağandışı bir sonucun arkasındaki operasyon olaylarını araştırır.'],
    ['Finans', 'Finansal bir özet veya karşılaştırmayı kabul etmeden önce gelir, ödeme, kategori ve maliyet içeriğini kontrol eder.'],
    ['Çoklu şube yönetimi', 'Yerel kaynak içeriğini inceleme imkânını koruyarak şubeleri tutarlı tanımlarla karşılaştırır.']
  ],
  metricsEyebrow: 'Yapay Zeka katmanını değerlendirin',
  metricsTitle: 'Yalnızca cevabın akıcı olmasını değil, kaynağa kadar izlenebilirliğini ve karar faydalılığını ölçün.',
  metricsIntro: 'Bir Yapay Zeka özelliği; belgelenmiş sorular, kaynak veri kapsamı ve restoran iş akışındaki gerçek sonuçlar üzerinden değerlendirilmelidir.',
  metrics: [
    ['Kaynak veri kapsamı', 'Bir sorunun ihtiyaç duyduğu verinin mevcut, güncel ve doğru şube veya dönemle eşleşmiş olup olmadığını takip edin.'],
    ['Yanıtın izlenebilirliği', 'Kullanıcının bir özetten arkasındaki ölçüte, filtreye ve kaynak içeriğine geri dönebildiğini doğrulayın.'],
    ['Tahmin hatası', 'Tahmini garanti gibi sunmak yerine aynı dönem ve tanımla tahmin edilen sonucu gerçekleşen sonuçla karşılaştırın.'],
    ['İnceleme süresi', 'Belirli bir yönetim sorusunu araştırmak için gereken süreyi Yapay Zeka destekli iş akışından önce ve sonra karşılaştırın.']
  ],
  implementationTitle: 'Yapay Zeka çıktısını kullanıma açmadan önce veri sözleşmesini ve insan inceleme sınırını tanımlayın.',
  implementationIntro: 'Güvenli bir uygulama; sistemin hangi veriyi bildiğini, neyi göremediğini ve nihai kararın kimde olduğunu açıkça belirtir.',
  implementation: [
    'Onaylanmış veri kaynakları, şubeler ve geçmiş dönemler',
    'Ölçüt tanımları ve karşılaştırma kuralları',
    'Sorular ve kaynak görünümler için rol yetkileri',
    'Minimum veri kalitesi ve güncellik kontrolleri',
    'Operasyon ve ticari aksiyonlarda insan incelemesi',
    'Belgelenmiş kapsam dışı alanlar, sınırlamalar ve yönlendirme süreci'
  ],
  faqs: [
    ['PayMyDine Yapay Zeka restoranı otomatik olarak yönetir mi?', 'Hayır. Mevcut konumlandırma bağımsız operasyon kontrolü değil, Yapay Zeka desteği ve karar desteğidir.'],
    ['Yapay Zeka kaynak veri olmadan bir soruyu yanıtlayabilir mi?', 'Faydalı bir yanıt için ilgili veri, tanım, dönem ve yetkiler gerekir. Eksik girdiler gizlice varsayılmamalı, açıkça gösterilmelidir.'],
    ['Tahminler garanti midir?', 'Hayır. Tahminler gerçekleşen sonuçlarla karşılaştırılmalı ve vaat olarak değil, öngörü olarak değerlendirilmelidir.'],
    ['Farklı roller farklı sorular sorabilir mi?', 'Evet. Her sorumluluk için uygun soruları ve ayrıntı seviyesini rol yetkileri ile kullanılabilir kaynak görünümler belirlemelidir.']
  ]
};

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="6 Yapay Zeka destekli işlem"
        title="Gelir, müşteriler, masalar veya kârlılık hakkında sorun; yanıtı kaynak veriye kadar takip edin."
        intro="PayMyDine Yapay Zeka; kurulumunuzda mevcut olan restoran verileri üzerinden soruları, günlük özetleri, uyarıları, karşılaştırmaları, tahminleri ve bir sonraki inceleme adımını destekleyebilir. Kararları destekler; karar vericinin yerini almaz."
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
              <span className="eyebrow">İçerik içinde 9 ölçüt</span>
              <h2>Bir sayıyla başlayın; karşılaştırma dönemini ve operasyon nedenini görünür tutun.</h2>
              <p>Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı, tahminler ve kârlılık; işletme sahibi özetten arkasındaki kaynak içeriğine ilerleyebildiğinde daha anlamlı hale gelir.</p>
              <a className="textArrow" href="/tr/solutions/insights">9 yönetim ölçütünü görün <Icon name="arrow" size={15} /></a>
            </div>
          </article>
          <article className="storyFeature reverse">
            <div className="storyFeatureImage"><img src="/site-assets/custom/solution-story/ai-investigation-time-20260809.webp" alt="" loading="lazy" /></div>
            <div className="storyFeatureCopy">
              <span className="eyebrow">Karar desteği; otomatik pilot değil</span>
              <h2>Takım sağlama yapıp karar alırken, Yapay Zeka ile inceleme süresini kısaltın.</h2>
              <p>Her özet; mevcut modüllere, veri kalitesine, karşılaştırma dönemine ve entegrasyonlara bağlıdır. Operasyon veya ticari aksiyonun kontrolü restoran ekibinde kalır.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={aiDetails} productName="PayMyDine Yapay Zeka" />

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">Kullanılabilir Yapay Zeka işlemleri</span>
            <h2>Sorun, özetleyin, karşılaştırın, uyarıları inceleyin, tahminleri destekleyin ve araştırın.</h2>
            <p>Kesin çıktılar, PayMyDine ortamında bulunan verilere, modüllere, şubelere ve bağlı sistemlere göre değişir.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16}/>Doğal dilde sorular</span>
            <span><Icon name="check" size={16}/>Günlük Yapay Zeka özeti</span>
            <span><Icon name="check" size={16}/>Akıllı uyarılar</span>
            <span><Icon name="check" size={16}/>Dönem ve şube karşılaştırması</span>
            <span><Icon name="check" size={16}/>Tahmin desteği</span>
            <span><Icon name="check" size={16}/>İncelenecek bir sonraki ölçüt</span>
          </div>
        </div>
      </section>

      <CTA title="Yapay Zeka tanıtımına gerçek bir yönetim sorusu getirin." body="Hangi PayMyDine verisinin gerektiğini belirleyelim, yanıtın arkasındaki kaynak görünümleri gösterelim ve insan incelemesinin nerede gerekli olduğunu açıklayalım." />
    </>
  );
}
