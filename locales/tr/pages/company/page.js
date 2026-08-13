import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Şirket"
};
export default function CompanyPage() {
  return <>
      <PageHero eyebrow={"PayMyDine nasıl tasarlanmıştır"} title={"9 ürün işi etrafında organize edilen bir restoran platformu, 6 rol çalışma alanı ve iş bağlamı paylaştı."} intro={"PayMyDine, restoranı ayırt etmeden sorumluluklarını ayırmaktadır. Misafir eylemleri, takım kuyrukları, mutfak durumu, ödeme ve yönetim metrikleri işle ilgili kontrolleri görürken bağlı kalabilir."} image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">Dört ürün kuralı</span><h2>Her özellik kimin eylemleri gerektiğini, hangi bağlamın gerekli olduğunu, hangi statünin tamamlanmasını ve hangi metrik değişikliklerini kanıtlamaktadır.</h2><p>Bu, restoran çalışmalarında yer alan ürün, bir parça ve pazarlama iddialarının toplanması yerine tutar.</p></div><div className="companyValueCards"><article><h3>Rol sahipliği</h3><p>Sahipler, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans odaklanmış kontroller ve izinler alır.</p></article><article><h3>Ortak bağlam</h3><p>Masa, misafir, sipariş, zamanlama ve ödeme bağlamı tekrar girilmesi yerine handoff'ta seyahat edebilir.</p></article><article><h3>Ölçülen akışlar</h3><p>Her kurulum, bekleme zamanı, hazırlık zamanı, ciro, ortalama kontrol veya tekrarlama gibi temelleri tanımlar.</p></article><article><h3>AI kaynak görünürlük ile</h3><p>AI mevcut verileri özetleyebilir ve karşılaştırabilir, ancak kaynak görüşü ve insan kararı görünür.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt="" /><img src="/site-assets/extra/cafe-professional.webp" alt="" /><img src="/site-assets/extra/chef-gourmet.webp" alt="" /><img src="/site-assets/extra/rooftop-dinner.webp" alt="" /></div></section>
      <CTA title={"Evaluate PayMyDine gerçek bir restoran akışına karşı, genel bir özellik listesi değil."} body={"Rolleri, mevcut sistemleri, tekrarlanan bir iş ve ölçümleri bir işletim probleminin arkasında getirin. İlgili ürün alanları ve sınırları haritalayacağız."} />
    </>;
}
