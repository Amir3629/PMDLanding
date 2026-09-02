import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export const metadata = {
  title: 'Restoran Yazılımı Fiyatlandırması',
  description: 'PayMyDine fiyatlandırmasını şube, ürün alanı, rol, entegrasyon ve kurulum kapsamınıza göre değerlendirin.'
};

const factors = [
  ['Restoran ve şube kapsamı', 'Yapılandırmanın desteklemesi gereken şube sayısı, salon karmaşıklığı, servis modeli, sipariş kanalları ve çalışma ortamları.'],
  ['Seçilen ürün alanları', '9 ürün alanından hangilerinin şimdi dahil olduğu, hangilerinin daha sonra planlandığı ve hangi mevcut sistemlerin ana veri kaynağı olarak kalacağı.'],
  ['Rol ve erişim kapsamı', '6 rol bazlı çalışma alanından hangilerinin gerektiği, yetkilerin nasıl farklılaştığı ve kaç ekip veya şubenin bu görünümlere ihtiyaç duyduğu.'],
  ['Entegrasyon ve kurulum çalışması', 'Desteklenen POS, ödeme, muhasebe veya teslimat bağlantıları ile yapılandırma, veri taşıma, doğrulama ve ekip hazırlığı.']
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Fiyatı belirleyen 4 ana unsur"
        title="Gerçekten kullanacağınız yapılandırma, kurulum ve entegrasyon kapsamını fiyatlandırın."
        intro="Pratik bir teklif; şubeler, seçilen ürün alanları, rol bazlı çalışma alanları ve entegrasyon ihtiyacıyla başlar. PayMyDine dışında kalacak sistemleri ve nihai kapsamı etkileyen varsayımları da açıkça belirtmelidir."
        image="/site-assets/extra/qr-couple.webp"
        accent="green"
      />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Fiyattan önce kapsamı tanımlayın</span>
            <h2>Dört temel girdi, ticari teklifin anlaşılır ve karşılaştırılabilir olmasını sağlar.</h2>
            <p>Teklif; nelerin dahil olduğunu, hangi sistemlerin bağlanacağını, hangi rollerin yapılandırılacağını, hangi kurulum çalışmalarının gerektiğini ve kapsamı nelerin değiştirebileceğini göstermelidir.</p>
          </div>
          <div className="pricingFactorGrid">
            {factors.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <CTA
        title="Net restoran kapsamınızla fiyat teklifi isteyin."
        body="Şubelerinizi, ürün alanlarını, rolleri, mevcut sistemleri ve kurulum ihtiyaçlarını paylaşın. Ticari teklifi bu dört temel girdiye göre şekillendirelim."
        primaryLabel="Fiyat Teklifi İsteyin"
        primaryHref="/tr/contact"
        secondaryLabel="6 Kurulum Aşamasını Görün"
        secondaryHref="/tr/implementation"
      />
    </>
  );
}
