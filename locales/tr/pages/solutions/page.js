import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';
import { Icon } from '@/locales/tr/components/Icons';
import { productAreas } from '@/locales/tr/data/site';

export const metadata = {
  title: 'Restoran Yazılımı Çözümleri',
  description: 'Operasyon, rezervasyon, sipariş, mutfak, ödeme, analiz, ekip yönetimi, müşteri ilişkileri ve entegrasyonlar için PayMyDine çözümlerini keşfedin.'
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="9 PayMyDine ürün alanı" title="İyileştirmek istediğiniz iş akışını seçin ve restoranın geri kalanıyla bağlantılı tutun." intro="Aşağıdaki her ürün alanı desteklediği işlemleri, koruduğu restoran bağlamını ve ekibin kullanabileceği metrik veya durum bilgisini açıklar. Bir alanla başlayabilir veya dokuzunu birlikte kullanabilirsiniz." image="/site-assets/extra/restaurant-team-planning.webp" accent="green" />
      <section className="section offerSection compactSection"><div className="container"><div className="sectionHeading centerHeading"><span className="eyebrow">Operasyon görevine göre ürün haritası</span><h2>İyileştirmek istediğiniz görev, iş listesi veya yönetim sorusuna karşılık gelen alanı seçin.</h2><p>Rezervasyon, servis, mutfak, ödeme, ekip ve raporlama farklı sorumluluklardır; ancak faydalı bağlamları tek operasyon katmanında birlikte ilerleyebilir.</p></div><div className="offerGrid offerGridVisual">{productAreas.map((item) => <a className="offerCard offerCardWithImage" href={item.href} key={item.title}><div className="offerCardMedia"><img src={item.image} alt="" loading="lazy" /></div><div className="offerCardBody"><span className="iconBubble"><Icon name={item.icon}/></span><h3>{item.title}</h3><p>{item.body}</p><span className="cardLink">İşlemleri ve metrikleri görün <Icon name="arrow" size={15}/></span></div></a>)}</div></div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Ortak bağlamla bağlantılı</span><h2>Farklı iş akışları aynı masa, sipariş, müşteri ve ödeme bağlamını kullanabilir.</h2><p>Bu yaklaşım tekrar veri girişini ve durum kontrolünü azaltırken her role odaklı ekran ve yetki seti sunmaya devam eder.</p></div><div className="capabilityList"><span><Icon name="check" size={16}/>9 ürün alanı</span><span><Icon name="check" size={16}/>6 rol bazlı çalışma alanı</span><span><Icon name="check" size={16}/>5 adımlı operasyon akışı</span><span><Icon name="check" size={16}/>3 hesap bölme yöntemi</span><span><Icon name="check" size={16}/>9 yönetim metriği</span><span><Icon name="check" size={16}/>4 entegrasyon türü</span></div></div></section>
      <CTA title="9 ürün alanını mevcut restoran sistemlerinize eşleyin." body="PayMyDine’ın hangi işleri üstlenmesi gerektiğini, nelerin mevcut POS veya ödeme sisteminizde kalacağını ve bağlantılı bağlamın tekrar işi nerede azaltacağını birlikte belirleyelim." />
    </>
  );
}
