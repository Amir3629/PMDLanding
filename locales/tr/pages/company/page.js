import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'PayMyDine Hakkında',
  description: 'PayMyDine’ın restoran operasyonlarını, ekip rollerini, müşteri deneyimini, ödemeleri, analizleri ve Yapay Zekâ destekli kararları nasıl bir araya getirdiğini keşfedin.'
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="PayMyDine nasıl tasarlandı?"
        title="9 ürün alanını, 6 rol bazlı çalışma alanını ve ortak operasyon bağlamını bir araya getiren restoran platformu."
        intro="PayMyDine sorumlulukları ayırırken restoran operasyonunu birbirinden koparmaz. Müşteri işlemleri, ekip görevleri, mutfak durumu, ödemeler ve yönetim metrikleri bağlantılı kalırken herkes kendi işiyle ilgili kontrolleri görür."
        image="/site-assets/extra/team-tech-meeting.webp"
        accent="green"
      />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div>
            <span className="eyebrow">Dört ürün prensibi</span>
            <h2>Her özellik; kimin işlem yaptığını, hangi bilginin gerekli olduğunu, tamamlanmayı hangi durumun gösterdiğini ve hangi metriğin etkilendiğini açıklamalıdır.</h2>
            <p>Bu yaklaşım, ürünü birbirinden kopuk paneller ve pazarlama iddiaları yerine gerçek restoran operasyonuna odaklar.</p>
          </div>
          <div className="companyValueCards">
            <article><h3>Rol sorumluluğu</h3><p>İşletme sahipleri, yöneticiler, servis personeli, mutfak, rezervasyon ve finans ekipleri kendi görevlerine uygun kontroller ve yetkiler kullanır.</p></article>
            <article><h3>Ortak bağlam</h3><p>Masa, müşteri, sipariş, zamanlama ve ödeme bilgileri tekrar girilmek yerine iş devri boyunca korunabilir.</p></article>
            <article><h3>Ölçülebilir iş akışları</h3><p>Her kurulum; bekleme süresi, hazırlık süresi, masa devir hızı, ortalama hesap tutarı veya tekrar ziyaret oranı gibi başlangıç ve hedef metriklerini tanımlar.</p></article>
            <article><h3>Kaynak verisi görünür Yapay Zekâ</h3><p>Yapay Zekâ mevcut verileri özetleyip karşılaştırabilir; ancak kaynak görünümü ve nihai insan kararı görünür kalır.</p></article>
          </div>
        </div>
      </section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt=""/><img src="/site-assets/extra/cafe-professional.webp" alt=""/><img src="/site-assets/extra/chef-gourmet.webp" alt=""/><img src="/site-assets/extra/rooftop-dinner.webp" alt=""/></div></section>
      <CTA title="PayMyDine’ı genel bir özellik listesiyle değil, gerçek bir restoran iş akışıyla değerlendirin." body="Bir operasyon probleminin arkasındaki rolleri, mevcut sistemleri, tekrarlanan işleri ve metrikleri paylaşın. İlgili ürün alanlarını ve sınırları birlikte belirleyelim." />
    </>
  );
}
