import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';
import { Icon } from '@/locales/tr/components/Icons';
import ProductDetailSections from '@/locales/tr/components/ProductDetailSections';

export const metadata = {
  title: 'Restoran POS, Ödeme ve Muhasebe Entegrasyonları',
  description: 'PayMyDine’ı POS, muhasebe, teslimat ve ödeme sistemleriyle bağlayın; merkezi raporlama, ortak menüler, stok ve maliyet bağlamını destekleyin.'
};

const capabilities = [
  ['POS verisi', 'Personelin aynı bilgiyi tekrar girmesine gerek kalmadan desteklenen sipariş, satış, menü veya masa verilerini PayMyDine operasyon görünümüne taşıyın.'],
  ['Muhasebe bağlamı', 'Bağlı sistemin sunduğu imkânlar ve yetkiler çerçevesinde finans iş akışının ihtiyaç duyduğu raporlama alanlarını aktarın veya eşleyin.'],
  ['Teslimat kanalları', 'Desteklenen teslimat siparişlerini kanal bazında ayırt edilebilir tutarken genel iş yükü ve satış görünümüne dahil edin.'],
  ['Ödeme sağlayıcıları', 'Desteklenen ödeme durumu ve mutabakat bilgisini masa ve müşteri ödeme yolculuğuyla bağlantılı tutun.']
];

const integrationDetails = {
  factsEyebrow: 'Entegrasyon ve ölçek kapsamı',
  factsTitle: 'Dört entegrasyon türü, altı merkezi kontrol ve şu anda adı geçen dört sağlayıcı.',
  factsIntro: 'Bir sağlayıcının adının listelenmesi her veri alanının veya iş akışının desteklendiği anlamına gelmez. Kapsam; mevcut arayüzlere, yetkilere ve kabul edilen veri yoluna bağlıdır.',
  facts: [
    ['04', 'entegrasyon türü', 'POS, muhasebe, teslimat ve ödeme bağlantıları mevcut entegrasyon kategorilerini oluşturur.'],
    ['06', 'merkezi kontrol', 'Merkezi işletme sahibi görünümü, ortak menüler, merkezi raporlama, stok, ürün maliyeti ve satın alma çoklu şube operasyonlarını destekler.'],
    ['04', 'adı geçen sağlayıcı', 'Mevcut ürün verisinde SumUp, ready2order, Lightspeed ve Square yer alır; kesin kapsam arayüz ve projeye göre belirlenir.'],
    ['05', 'uygulama aşaması', 'Keşif, alan eşleme, erişim, test ve izleme pratik bir entegrasyon yolunu oluşturur.']
  ],
  workflowEyebrow: 'Sistem envanterinden izlenen bağlantıya',
  workflowTitle: 'Gerçek bir restoran iş akışına göre entegrasyon nasıl tanımlanır?',
  workflowIntro: 'Önce işletme işlemini veya raporlama ihtiyacını tanımlayın; ardından verinin hareket edip etmeyeceğine ve nasıl hareket edeceğine karar verin.',
  workflow: [
    ['Ana veri kaynağını belirleyin', 'Sipariş, menü, ödeme, muhasebe, stok veya şube verisinin bugün hangi sistem tarafından yönetildiğini belgeleyin.'],
    ['Alanları ve veri yönünü tanımlayın', 'Gereken veri alanlarını, verinin PayMyDine’a mı yoksa PayMyDine’dan mı hareket edeceğini ve sonucu hangi rolün kullanacağını listeleyin.'],
    ['Erişimi ve sınırları doğrulayın', 'Sağlayıcının gerçekten sunduğu arayüzü, kimlik doğrulamayı, yetkileri, kullanım limitlerini ve durum ayrıntılarını inceleyin.'],
    ['Mutabakat senaryolarıyla test edin', 'Canlıya geçmeden önce normal kayıtları, güncellemeleri, hataları ve tekrar kayıtları kabul edilen örneklerle doğrulayın.'],
    ['İzleyin ve kapsamı genişletin', 'Bağlantı kapsamını büyütmeden önce veri güncelliğini, başarısız aktarımları ve mutabakat istisnalarını takip edin.']
  ],
  rolesTitle: 'Entegrasyonun değeri; kurulum, operasyon, finans ve işletme sahipliği için farklıdır.',
  rolesIntro: 'Bir bağlantı, belirli bir rol için gerçek bir manuel adımı kaldırmalı veya anlamlı bir veri boşluğunu kapatmalıdır.',
  roleViews: [
    ['Kurulum veya BT', 'Kimlik doğrulama, alan eşleme, test senaryoları, hata yönetimi ve teknik sağlayıcı iletişiminden sorumludur.'],
    ['Restoran operasyonu', 'Aynı bilgiyi yeniden girmeden bağlantılı sipariş, menü, masa veya teslimat bağlamını kullanır.'],
    ['Finans', 'Net bir ana veri kaynağı kararıyla ödeme, muhasebe ve mutabakat alanlarını inceler.'],
    ['İşletme sahibi ve çoklu şube yönetimi', 'Yerel bağlamı korurken şubeleri, ortak standartları, stoku ve raporlamayı karşılaştırır.']
  ],
  metricsEyebrow: 'Entegrasyon sağlığı',
  metricsTitle: 'Bağlantının eksiksiz, güncel ve manuel mutabakat ihtiyacını azaltacak şekilde çalışıp çalışmadığını ölçün.',
  metricsIntro: 'Her arayüz aynı güncelleme hızını veya hata ayrıntısını sunmadığı için hedefler sağlayıcı ve iş akışı bazında belirlenmelidir.',
  metrics: [
    ['Senkronizasyon başarı oranı', 'Kabul edilen veri nesneleri ve dönem için başarılı kayıtları yapılan aktarım denemeleriyle karşılaştırın.'],
    ['Veri güncelliği', 'Kaynak olayla verinin hedef iş akışında kullanılabilir hale gelmesi arasındaki gecikmeyi ölçün.'],
    ['Mutabakat istisnaları', 'Operasyon veya finans incelemesi gerektiren eksik, tekrar veya uyuşmayan kayıtları sayın.'],
    ['Manuel tekrar giriş süresi', 'Entegrasyon öncesi ve sonrası personelin veri kopyalama veya mutabakat için harcadığı süreyi karşılaştırın.']
  ],
  implementationTitle: 'Bağlantıyı geliştirmeden veya etkinleştirmeden önce veri sözleşmesini yazın.',
  implementationIntro: 'Veri sözleşmesi her alan grubu için kaynağı, hedefi, sorumluluğu, güncelleme beklentisini ve hata sürecini açıklamalıdır.',
  implementation: [
    'Sağlayıcı dokümantasyonu, kimlik bilgileri ve onaylanmış yetkiler',
    'Her veri nesnesi için ana veri kaynağı kararı',
    'Alan eşleme, veri yönü ve güncelleme gereksinimi',
    'Şube, menü, ödeme ve hesap kimliği eşlemeleri',
    'Hata sorumluluğu, uyarı ve mutabakat süreci',
    'Normal, güncelleme, tekrar kayıt ve hata test senaryoları'
  ],
  faqs: [
    ['Şu anda hangi sağlayıcıların adı geçiyor?', 'Mevcut ürün verisinde SumUp, ready2order, Lightspeed ve Square yer alıyor. Kesin özellikler yine de mevcut arayüze ve kabul edilen proje kapsamına bağlıdır.'],
    ['PayMyDine mevcut POS sisteminin yerini almak zorunda mı?', 'Hayır. Entegrasyon yaklaşımı mevcut POS sistemini ana veri kaynağı olarak tutarken seçilen PayMyDine iş akışlarını ve görünümlerini ekleyebilir.'],
    ['Her entegrasyon gerçek zamanlı mı?', 'Hayır. Veri güncelliği sağlayıcı arayüzüne, yetkilere, sorgulama veya olay seçeneklerine ve canlı ortam tasarımına bağlıdır.'],
    ['Ürün ve maliyet verisi olmadan stok yönetimi çalışır mı?', 'Gerekli ürün, stok, satın alma ve maliyet girdileri olmadan eksiksiz stok veya ürün maliyeti görünümü üretilemez.']
  ]
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="4 entegrasyon türü · 6 merkezi kontrol"
        title="Restoran verisini zaten tutan sistemleri bağlayın ve bu veriyi bir sonraki rol için kullanılabilir hale getirin."
        intro="PayMyDine desteklenen POS, muhasebe, teslimat ve ödeme sistemleriyle çalışabilir; kaynak sistemler izin verdiğinde merkezi işletme sahibi görünümleri, ortak menüler, raporlama, stok, ürün maliyeti ve satın alma bağlamı ekleyebilir."
        image="/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp"
        accent="green"
      />

      <section className="section integrationStepsSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Bağlantıdan önce veri yolunu tanımlayın</span>
            <h2>Her entegrasyon için hangi verinin hareket edeceğini, hangi sistemin ana kaynak olarak kalacağını ve sonucu kimin kullanacağını belirleyin.</h2>
            <p>Faydalı bir entegrasyon, tekrar veri girişini veya eksik bağlamı ortadan kaldırır. Yalnızca teknik olarak mümkün olduğu için veri taşımamalıdır.</p>
          </div>
          <div className="highlightGrid">
            {capabilities.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section darkIntegrationPage">
        <div className="container darkIntegrationGrid">
          <div>
            <span className="eyebrow darkEyebrow">6 çoklu şube kontrolü</span>
            <h2>Her restoran yerel operasyon yapısını korurken şubeleri merkezi olarak karşılaştırın.</h2>
            <p>İşletme sahipleri, her şubeyi aynı salon planına, servis modeline veya ekip yapısına zorlamadan şube performansını ve ortak standartları inceleyebilir.</p>
          </div>
          <div className="integrationNameGrid">
            {['Merkezi işletme sahibi görünümü', 'Ortak menüler', 'Merkezi raporlama', 'Stok', 'Ürün maliyeti', 'Satın alma'].map((item) => <span key={item}><Icon name="check" size={17}/>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src="/site-assets/custom/integrations-capabilities-fit.webp" alt=""/><div><span className="eyebrow">Entegrasyon kapsamı</span><h2>Yalnızca gerçek bir iş akışını veya raporlama ihtiyacını destekleyen veri alanlarını bağlayın.</h2><p>Kurulumdan önce her veri alanı için kaynağı, veri yönünü, güncelleme sıklığını, yetkiyi ve sorumlu rolü belgeleyin.</p></div></article>
          <article><img src="/site-assets/custom/integrations-operating-picture.webp" alt=""/><div><span className="eyebrow">Tek işletme görünümü</span><h2>Satış, stok, satın alma ve şube performansını birlikte değerlendirin.</h2><p>Bağlı sistemler gerekli veriyi sağladığında işletme sahipleri şube sonuçlarını karşılaştırabilir, ürün maliyeti değişimini anlayabilir ve bir işletme göstergesini operasyon kaynağına kadar takip edebilir.</p></div></article>
        </div>
      </section>

      <ProductDetailSections details={integrationDetails} productName="Entegrasyonlar, Çoklu Şube ve Stok" />
      <CTA title="Tüm olası bağlantıları konuşmadan önce gerçek bir entegrasyonu birlikte inceleyin." body="Sistemi, veri alanlarını, veri yönünü, güncelleme ihtiyacını ve sonucu kullanacak rolü paylaşın. Pratik entegrasyon kapsamını bu iş akışına göre tanımlayalım." />
    </>
  );
}
