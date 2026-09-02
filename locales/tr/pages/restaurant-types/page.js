import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'Farklı Restoran Türleri için PayMyDine',
  description: 'PayMyDine’ı servis modelinize, salon yapınıza, sipariş kanallarınıza, müşteri yolculuğunuza ve ekip rollerinize göre yapılandırın.'
};

const setups = [
  ['Tam servis restoranlar', 'Rezervasyon, masa atama, garson siparişi, mutfak durumu, masada ödeme ve işletme sahibi raporlamasını masaya oturan müşterinin yolculuğu etrafında birleştirin.', '/site-assets/custom/restaurant-type-full-service.webp'],
  ['Günlük ve rahat servis restoranları', 'Servis döngülerinin daha kısa olduğu işletmelerde masa durumu, hızlı sipariş, paket servis yoğunluğu, menü müsaitliği ve ödemeyi görünür tutun.', '/site-assets/custom/restaurant-type-modern-dining.webp'],
  ['Yüksek hacimli restoranlar', 'Talep arttıkça bir sonraki aksiyonu görünür tutmak için rol bazlı iş listelerini, mutfak fişi durumlarını, tükenen ürün kontrolünü ve müşteri siparişini kullanın.', '/site-assets/extra/qr-breakfast.webp'],
  ['Büyük veya çok katlı işletmeler', 'Daha karmaşık ekipler ve alanlar için birden fazla salon planı, özelleştirilmiş çalışma alanları, merkezi raporlama ve seçili entegrasyonları yapılandırın.', '/site-assets/extra/team-cafe-meeting.webp']
];

export default function RestaurantTypesPage() {
  return (
    <>
      <PageHero eyebrow="4 restoran işletme modeli" title="Rolleri, salonu, müşteri yolculuğunu ve metrikleri mevcut servis modelinize göre yapılandırın." intro="Ürün alanları aynı kalır; ancak öncelikler, yetkiler ve iş akışları restoran türüne göre değişir. Gerçek servis yolculuğuyla başlayın ve yalnızca onu destekleyen kontrolleri seçin." image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt=""/><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Yapılandırma kararları</span><h2>Modül seçmeden önce her işletme için altı konuyu netleştirin.</h2><p>Rolleri, salon yapısını, sipariş kanallarını, müşteri temas noktalarını, mevcut sistemleri ve sonucu değerlendirmek için kullanılan başlangıç metriklerini belgeleyin.</p></div><div className="capabilityList"><span>Rol sorumluluğu</span><span>Salon ve masa modeli</span><span>Salonda servis ve paket servis kanalları</span><span>Müşteri sipariş yolculuğu</span><span>POS ve ödeme sınırları</span><span>Başlangıç operasyon metrikleri</span></div></div></section>
      <CTA title="Gerçek servis modelinizi PayMyDine’a eşleyin." body="Bu yapı için gereken sorumlu rolleri, ürün alanlarını, salon yapılandırmasını, entegrasyonları ve metrikleri birlikte belirleyelim." />
    </>
  );
}
