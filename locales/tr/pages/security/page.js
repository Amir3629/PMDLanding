import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'Restoran Verisi Güvenliği ve Erişim Kontrolü',
  description: 'PayMyDine yapılandırmanız için rol erişimi, veri akışı, entegrasyon sınırları ve canlı ortam kontrollerini değerlendirin.'
};

const topics = [
  ['Rol erişimi', '6 çalışma alanından hangilerinin her restoran ve müşteri verisi türünü görüntüleyebileceğini, oluşturabileceğini, değiştirebileceğini, onaylayabileceğini veya dışa aktarabileceğini belgeleyin.'],
  ['Veri akışı', 'Masa, sipariş, müşteri, ödeme ve raporlama verilerinin kaynağını, hedefini, amacını, saklama süresini ve sorumlu tarafını eşleyin.'],
  ['Entegrasyon sınırı', 'Her harici POS, ödeme veya teslimat sistemi için API yetkilerini, kullanılabilir alanları, kimlik doğrulama yöntemini ve hata yönetimini kaydedin.'],
  ['Canlı ortam kontrolleri', 'Gerçek kurulum için barındırma, yedekleme, kayıt tutma, izleme, olay yönetimi ve sağlayıcı sorumluluklarını gözden geçirin.']
];

export default function SecurityPage() {
  return (
    <>
      <PageHero eyebrow="4 güvenlik inceleme alanı" title="Erişimi, veri akışını, entegrasyonları ve canlı ortamı gerçek yapılandırmanıza göre değerlendirin." intro="Güvenlik açıklamaları gerçekten kullanılan ortamı tanımlamalıdır. Bu nedenle PayMyDine görüşmeleri genel vaatler yerine roller, bağlı sistemler, veri sorumlulukları ve operasyon kontrolleriyle başlar." image="/site-assets/extra/office-dashboard.webp" accent="green" />
      <section className="section highlightSection"><div className="container highlightGrid">{topics.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Belgelenmesi gereken sorular</span><h2>Kim işlem yapabilir, hangi veri hareket eder, nerede saklanır ve bir sorun olduğunda kim müdahale eder?</h2><p>Yanıt; PayMyDine’ı, restoranı, barındırma ortamını ve harici POS veya ödeme sağlayıcılarını kapsayabilir. Canlıya geçmeden önce sorumluluklar açıkça belirlenmelidir.</p></div><div className="capabilityList"><span>Rol yetkileri</span><span>Veri envanteri</span><span>Entegrasyon kimlik bilgileri</span><span>Saklama ve yedekleme</span><span>Kayıt ve izleme</span><span>Olay yönetimi sorumluluğu</span></div></div></section>
      <CTA title="Gerçek canlı ortamı ve veri yolunu birlikte inceleyin." body="Rolleri, sağlayıcıları, veri türlerini ve entegrasyon şemasını paylaşın; güvenlik görüşmesinde kontrol ve sorumlulukları net şekilde atayalım." />
    </>
  );
}
