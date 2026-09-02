import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'Restoran Yazılımı Kurulumu ve Devreye Alma',
  description: 'PayMyDine kurulumunu roller, şubeler, salon, menü, ödemeler, entegrasyonlar, yetkiler ve gerçek servis senaryoları etrafında planlayın.'
};

const steps = [
  ['01', 'Mevcut operasyonu belgeleyin', 'Rolleri, salon yapısını, sipariş kanallarını, müşteri temas noktalarını, mevcut sistemleri, tekrar veri girişini ve yönetimin bugün kullandığı metrikleri listeleyin.'],
  ['02', 'İlk ürün kapsamını seçin', 'Yerinde kalması gereken sistemleri gereksiz yere değiştirmeden net bir iş akışı problemini çözen en küçük 9 ürün alanı kombinasyonunu seçin.'],
  ['03', '6 rol bazlı çalışma alanını yapılandırın', 'Gerektiği şekilde işletme sahibi, yönetici, servis personeli, mutfak, rezervasyon ve finans için yetkileri, iş listelerini, işlemleri ve görünür durumları tanımlayın.'],
  ['04', 'Entegrasyon veri sözleşmelerini tanımlayın', 'Her POS, ödeme, teslimat veya muhasebe bağlantısı için kaynağı, alanları, veri yönünü, güncelleme sıklığını ve sorumlu rolü belgeleyin.'],
  ['05', 'Gerçek servis senaryolarını doğrulayın', 'Canlıya geçmeden önce rezervasyonları, rezervasyonsuz müşterileri, masa siparişlerini, ürün seçeneklerini, mutfak iş devirlerini, tükenen ürünleri, hesap bölmeyi, iadeleri ve raporlamayı test edin.'],
  ['06', 'Canlıya geçin ve ölçün', 'Bekleme süresi, hazırlık süresi, masa devir hızı, ortalama hesap tutarı, ödeme süresi veya tekrar ziyaret oranı gibi kabul edilen başlangıç metriklerini takip edin ve yapılandırmayı buna göre geliştirin.']
];

export default function ImplementationPage() {
  return (
    <>
      <PageHero eyebrow="6 aşamalı kurulum" title="PayMyDine’ı belgelenmiş bir restoran iş akışına göre yapılandırın ve gerçek servis senaryolarıyla doğrulayın." intro="Kurulum; roller, iş devirleri, mevcut sistemler ve başlangıç metrikleriyle başlar. Ürün alanları ve entegrasyonlar ancak operasyon problemi ve sorumlu ekip netleştikten sonra seçilir." image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section howFlowSection"><div className="container"><div className="splitHeading howFlowHeading"><div><span className="eyebrow">Başlangıç seviyesinden ölçümlü canlıya geçişe</span><h2>Altı aşama; her birinin net çıktısı ve sorumlusu vardır.</h2></div><p>Süre kapsamın büyüklüğüne göre değişebilir; ancak bu sıra iş akışları, yetkiler, entegrasyonlar ve başarı metrikleri anlaşılmadan yapılandırmaya başlanmasını önler.</p></div><div className="howFlowGrid">{steps.map(([number, title, body]) => <article className="howFlowCard" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <CTA title="Kurulum görüşmesine bir iş akışı ve bir başlangıç metriği getirin." body="Pratik bir ilk sürüm için gereken sorumlu rolleri, ürün alanlarını, veri alanlarını, test senaryolarını ve ölçüm planını birlikte çıkaralım." />
    </>
  );
}
