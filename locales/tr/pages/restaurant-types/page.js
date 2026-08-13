import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Restoran Kurulumları"
};
const setups = [["Full-service restoranlar", "Connect rezervasyonları, masa ataması, garson siparişi, mutfak durumu, ödeme amaçlı ve mülkiyet bir misafir yolculuğu etrafında rapor eder.", '/site-assets/custom/restaurant-type-full-service.webp'], ["Gündelik restoran", "Masa durumu, hızlı sipariş, iş yükü, menü kullanılabilirliği ve hizmet çevrimleri daha kısa olduğunda görünür.", '/site-assets/custom/restaurant-type-modern-dining.webp'], ["Yüksek hacimli restoran", "Rol kuyrukları kullanın, mutfak bileti devletler, satılan kontroller ve bir sonraki eylemi talep inşaları olarak görünür tutmak için misafir sipariş.", '/site-assets/extra/qr-breakfast.webp'], ["Büyük veya çok katlı mekanları", "Birden çok kat haritalarını yapılandırın, özelleştirilmiş iş alanları, merkezi raporlama ve daha karmaşık takımlar ve alanlar için entegrasyonlar.", '/site-assets/extra/team-cafe-meeting.webp']];
export default function RestaurantTypesPage() {
  return <>
      <PageHero eyebrow={"4 restoran kurulum modelleri"} title={"Zaten çalıştırdığınız hizmet modelinin etrafındaki roller, zemin, misafir yolculuğu ve ölçümleri yapılandırın."} intro={"Ürün alanları aynı kalır, ancak öncelikli, izinler ve restoran türü tarafından iş akışı değişikliği. Gerçek hizmet yolu ile başlayın ve sadece onu destekleyen kontrolleri seçin."} image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt="" /><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Yapılandırma kararları</span><h2>Her kurulum için, modülleri seçmeden önce altı şeyi tanımlayın.</h2><p>Doküman rolleri, zemin yapısı, sipariş kanalları, misafir dokunuş noktaları, mevcut sistemler ve sonucu yargılamak için kullanılan temel ölçümler.</p></div><div className="capabilityList"><span>Rol sahipliği</span><span>Kat ve masa modeli</span><span>Dine-in ve kaçış kanalları</span><span>Konuk sipariş yolu</span><span>POS ve ödeme sınırları</span><span>Baseline işletim ölçümleri</span></div></div></section>
      <CTA title={"PayMyDine için gerçek bir hizmet modeli."} body={"Bu kurulum için gerekli olan sorumlu rolleri, ürün alanları, zemin yapılandırması, entegrasyonları ve ölçümleri tanımlayacağız."} />
    </>;
}
