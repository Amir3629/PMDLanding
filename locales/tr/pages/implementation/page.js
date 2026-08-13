import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Uygulama",
  description: "Altı aşamalı bir PayMyDine, yapılandırma, doğrulama, go-can ve ölçüm için işletim keşiften uygulama yolu."
};
const steps = [['01', "Doküman mevcut operasyon", "Liste rolleri, zemin yapısı, sipariş kanalları, misafir dokunuş noktaları, mevcut sistemler, tekrarlanan veri girişi ve metrik yönetim bugün kullanır."], ['02', "İlk ürün kapsamını seçin", "Yerde kalması gereken sistemleri değiştirmeden net bir iş problemini kaldıran 9 ürün alanının en küçük setini seçin."], ['03', "6 rol iş alanları yapılandırın", "Sahipler, yöneticiler, hizmet personeli, mutfak, rezervasyonlar ve finans için izinler, kuyruklar, eylemler ve görünür statüyü tanımlar."], ['04', "Define entegrasyonu sözleşmeleri", "Her POS için, ödeme, teslimat veya muhasebe bağlantısı, kaynağı belge, alanları, yönü, zamanlaması ve sorumlu rolü belgeleyin."], ['05', "Gerçek hizmet senaryoları", "Test rezervasyonları, yürüyüş-ins, masa siparişleri, modifiers, mutfak handoffs, satılan öğeler, bölünmüş faturalar, geri ödemeler ve seyahat etmeden önce raporlama."], ['06', "Go canlı ve ölçüm", "Track, zaman, hazırlık zamanı, masa cirosu, ortalama kontrol, ödeme zamanı veya tekrar denetim oranı gibi temel ölçümleri kabul etti, sonra yapılandırmayı ayarlar."]];
export default function ImplementationPage() {
  return <>
      <PageHero eyebrow={"6 aşamalı uygulama"} title={"PayMyDine'i belgelenmiş bir restoran akışı etrafında yapılandırın, sonra gerçek hizmet senaryoları ile doğrulayın."} intro={"Uygulama roller, eloffs, mevcut sistemler ve temel ölçümlerle başlar. Ürün alanları ve entegrasyonlar sadece işletim probleminden sonra ve sorumlu ekip açık."} image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div><span className="eyebrow">Basline'dan itibaren go-live</span><h2>Altı aşama, her biri açık bir teslim edilebilir ve sahibi.</h2></div>
            <p>Kesin zaman süresi kapsamı ile değişir, ancak sıra, iş akışları, izinler, entegrasyonlar ve başarı ölçümleri anlaşılmaz.</p>
          </div>
          <div className="howFlowGrid">
            {steps.map(([number, title, body]) => <article className="howFlowCard" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <CTA title={"Uygulama tartışmaya bir akış ve bir temel metrik getirin."} body={"Sorumlu roller, ürün alanları, veri alanları, pratik bir ilk sürüm için gerekli test senaryoları ve ölçüm planı haritalayacağız."} />
    </>;
}
