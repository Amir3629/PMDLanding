import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Fiyatlandırma"
};
const factors = [["Restoran ve konum kapsamı", "Yer sayısı, zemin karmaşıklığı, hizmet modeli, sipariş kanalları ve yapılandırmanın desteklenmesi gereken ortamlar."], ["Seçilmiş ürün alanları", "9 ürün alanının hangileri şimdi dahil edilmiştir, bu daha sonra planlanmaktadır ve hangi mevcut sistemler yetkili kalır."], ["Rol ve erişim kapsamı", "6 rol çalışma alanlarının hangileri gereklidir, izinler farklıdır ve kaç takımın veya yerin her görüşe ihtiyacı vardır."], ["Entegrasyon ve uygulama çalışması", "Desteklenen POS, ödeme, muhasebe veya teslimat bağlantıları artı yapılandırma, göç, doğrulama ve takım hazırlığı."]];
export default function PricingPage() {
  return <>
      <PageHero eyebrow={"4 fiyatlandırma girişi"} title={"Kurulum, uygulama ve entegrasyon kapsamı aslında kullanacağınız."} intro={"Pratik bir öneri, seçilmiş ürün alanları, rol çalışma alanları ve entegrasyon çalışmaları ile başlar. Ayrıca PayMyDine dışında kalır ve hangi varsayımlar nihai kapsamı etkiler."} image="/site-assets/extra/qr-couple.webp" accent="green" />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Fiyattan önce kapsamı tanımlamak</span>
            <h2>Dört giriş, ticari teklifi anlaşılabilir ve karşılaştırılabilir hale getirir.</h2>
            <p>Öneri, hangi sistemlere bağlanır, hangi roller yapılandırılır, hangi uygulama çalışması gereklidir ve kapsamı değiştirebilir.</p>
          </div>
          <div className="pricingFactorGrid">
            {factors.map(([title, body], index) => <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>
      <CTA title={"Açık bir restoran kapsamı ile fiyat isteyin."} body={"Bize yer, ürün alanları, roller, mevcut sistemler ve uygulama ihtiyaçlarını söyleyin. Bu dört girişi ticari teklifi şekillendirmek için kullanacağız."} primaryLabel={"Fiyat isteyin"} primaryHref="/tr/contact" secondaryLabel={"6 uygulama aşamasına bakın"} secondaryHref="/tr/implementation" />
    </>;
}
