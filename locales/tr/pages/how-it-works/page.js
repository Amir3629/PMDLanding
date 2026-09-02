import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'PayMyDine Nasıl Çalışır',
  description: 'Müşteri işlemlerinin, rol bazlı iş akışlarının, mutfak durumunun, ödemelerin, raporlamanın ve Yapay Zekâ desteğinin nasıl bağlantılı kaldığını görün.'
};

const journeyCards = [
  { eyebrow: '4 müşteri işlemi', title: 'Masa bağlamını kaybetmeden tarayın, inceleyin, sipariş verin ve ödeyin.', body: 'Masa QR kodu mobil menüyü açabilir, masayı siparişle bağlantılı tutabilir, servis taleplerini destekleyebilir ve ödeme sürecine kesintisiz devam edebilir.', image: '/site-assets/comments/16.webp', alt: 'Masada PayMyDine QR deneyimini kullanan müşteriler' },
  { eyebrow: 'Restoranın kontrolündeki servis', title: 'Dijital kolaylık ekibin iş akışını besler; ekibin yerini almaz.', body: 'Servis personeli ve mutfak bir sonraki işlemi rol odaklı görünümlerde alırken restoran menüleri, müsaitliği, servisi ve ödeme seçeneklerini kontrol eder.', image: '/site-assets/table/11.webp', alt: 'PayMyDine ile desteklenen restoran ortamı' }
];

const flowSteps = [
  ['01', 'İşlem başlar', 'Müşteri QR kodunu tarar, karşılama ekibi rezervasyonu masaya yerleştirir, servis personeli sipariş açar veya yönetici bir masayı değiştirir.'],
  ['02', 'Bağlam işleme eklenir', 'Masa, müşteri, sipariş, zamanlama, notlar ve yetkiler işlemle birlikte kalır.'],
  ['03', 'İş sorumlu role ulaşır', 'Servis personeli servis işlerini, mutfak hazırlık işlerini, yöneticiler ise istisnaları görür.'],
  ['04', 'Servis ve ödeme tamamlanır', 'Hazır durumu, iş devri ve ödeme; üç hesap bölme yöntemi dahil aynı bağlamdan devam eder.'],
  ['05', 'Operasyon yönetim verisine dönüşür', 'Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması ve kârlılık raporlamayı ve Yapay Zekâ destekli soruları besler.']
];

const operationsCards = [
  { eyebrow: '6 rol bazlı çalışma alanı', title: 'Her rol sorumlu olduğu iş listesini, kontrolleri ve durum bilgisini görür.', body: 'İşletme sahipleri, yöneticiler, servis personeli, mutfak, rezervasyon ve finans odaklı görünümler kullanırken temel restoran bağlamı ortak kalır.', image: '/site-assets/owner/1.webp', alt: 'PayMyDine restoran operasyon görünümü' },
  { eyebrow: '4 mutfak fişi durumu', title: 'Alındı, hazırlanıyor, hazır ve teslim edildi durumları servis zinciri boyunca görünür kalır.', body: 'Mutfak hazırlığa odaklanırken servis personeli ve yöneticiler bir sonraki iş devri için gereken durumu görebilir.', image: '/site-assets/kitchen/2.webp', alt: 'PayMyDine kullanan mutfak ekibi' }
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="5 adımlı operasyon akışı" title="İlk masa işleminden son yönetim sorusuna kadar bağlamı koruyun." intro="PayMyDine; müşteri işlemlerini, rol bazlı çalışma alanlarını, mutfak durumunu, ödemeyi, raporlamayı ve Yapay Zekâ desteğini birbirine bağlar; herkesin aynı ekranı kullanmasını veya aynı bilgiyi tekrar girmesini gerektirmez." image="/site-assets/extra/izakaya-phone.webp" accent="orange" />
      <section className="section howJourneySection"><div className="container"><div className="sectionHeading centerHeading howJourneyHeading"><span className="eyebrow">Müşteri işlemleri restoran operasyonunun parçası olarak kalır</span><h2>Mobil bir işlem ekip için doğru masa, servis veya ödeme görevini oluşturmalıdır.</h2><p>Müşteri kısa ve anlaşılır bir akış görür. Restoran ise masayı hazırlamak, servis etmek ve hesabı kapatmak için gereken yapılandırılmış bağlamı alır.</p></div><div className="demoShowcaseGrid howJourneyGrid">{journeyCards.map((card, index) => <article className={`demoShowcaseCard ${index === 0 ? 'demoShowcaseWide' : ''}`} key={card.title}><div className="demoShowcaseMedia demoShowcaseMediaPhoto"><img src={card.image} alt={card.alt} loading="lazy" /></div><div className="demoShowcaseCopy"><span>{card.eyebrow}</span><h3>{card.title}</h3><p>{card.body}</p></div></article>)}</div></div></section>
      <section className="section howFlowSection"><div className="container"><div className="splitHeading howFlowHeading"><div><span className="eyebrow">Beş net iş devri</span><h2>Her adımda işlemi, bağlamı, sorumlu rolü ve görünür durumu tanımlayın.</h2></div><p>Bu yaklaşım iş akışını test edilebilir hale getirir: ekipler bilginin nerede kaybolduğunu, durumun nerede tekrarlandığını ve bir entegrasyonun veya çalışma alanının nerede devreye girmesi gerektiğini görebilir.</p></div><div className="howFlowGrid">{flowSteps.map(([number, title, body]) => <article className="howFlowCard" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="section howOperationsSection"><div className="container"><div className="sectionHeading howOperationsHeading"><span className="eyebrow">Müşteri yolculuğunun arkasında</span><h2>Rol bazlı çalışma alanları ve görünür fiş durumları dijital işlemleri sorumluluğu belli restoran işlerine dönüştürür.</h2><p>Ekip bir sonraki işlemin kime ait olduğunu, tamamlanmayı hangi durumun gösterdiğini ve sonucu hangi metriğin yansıtması gerektiğini görebilir.</p></div><div className="howOperationsGrid">{operationsCards.map((card) => <article className="howOperationsCard" key={card.title}><div className="howOperationsMedia"><img src={card.image} alt={card.alt} loading="lazy" /></div><div className="howOperationsCopy"><span>{card.eyebrow}</span><h3>{card.title}</h3><p>{card.body}</p></div></article>)}</div></div></section>
      <CTA title="Gerçek bir restoran yolculuğunu 5 adımın tamamında eşleyin." body="Bir rezervasyon, masa siparişi, mutfak iş devri veya ödeme akışı getirin. Her adımda işlemi, bağlamı, rolü, durumu ve metriği birlikte tanımlayalım." primaryLabel="Demo Talep Edin" primaryHref="/tr/contact" secondaryLabel="9 Ürün Alanını Keşfedin" secondaryHref="/tr/platform" />
    </>
  );
}
