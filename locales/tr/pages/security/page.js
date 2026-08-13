import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
export const metadata = {
  title: "Güvenlik ve Data",
  description: "Rol erişim, veri akışları, entegrasyon sınırları ve PayMyDine için dağıtım kontrolleri."
};
const topics = [["Rol girişi", "6 çalışma alanının hangi belge, oluşturabilir, değişiklik, onaylayabilir veya her restoran ve misafir verilerini ihraç edebilir."], ["Veri akışı", "Kaynak, hedef, amaç, oturma ve masa için sorumlu parti, sipariş, misafir, ödeme ve raporlama verileri."], ["Entegrasyon sınırı", "API izinleri, mevcut alanlar, kimlik doğrulama yöntemi ve her dış POS, ödeme veya teslimat sistemi için başarısızlık."], ["Deployment control", "Site barındırma, yedeklemeler, oturum açma, izleme, olay işleme ve sağlayıcı gerçek dağıtılmış çevre için sorumluluklar."]];
export default function SecurityPage() {
  return <>
      <PageHero eyebrow={"4 güvenlik inceleme alanları"} title={"İnceleme erişimi, veri akışı, gerçek yapılandırmaya karşı entegrasyonlar ve dağıtım."} intro={"Güvenlik iddiaları aslında dağıtılan ortamı tarif etmelidir. PayMyDine bu nedenle rolleri, bağlantılı sistemler, veri sorumlulukları ve operasyonel kontroller ile genel vaatlerden ziyade başlar."} image="/site-assets/extra/office-dashboard.webp" accent="green" />
      <section className="section highlightSection">
        <div className="container highlightGrid">
          {topics.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div><span className="eyebrow">Belgeler</span><h2>Kim hareket edebilir, hangi veriler depolanır ve bir şey başarısız olduğunda kim yanıt verir?</h2><p>Cevap PayMyDine, restoran, barındırma ortamı ve dış POS veya ödeme sağlayıcıları içerebilir. Sorumluluklar gitmeden önce açık olmalıdır.</p></div>
          <div className="capabilityList"><span>Rol izinleri</span><span>Data envanter</span><span>Bütünleme Bilgileri</span><span>Retention ve yedeklemeler</span><span>Logging ve izleme</span><span>Olay sorumluluğu</span></div>
        </div>
      </section>
      <CTA title={"Gerçek dağıtım ve veri yolunu gözden geçirin."} body={"rolleri, sağlayıcılar, veri türleri ve entegrasyon diyagramı getir, böylece güvenlik konuşması açık kontroller ve sorumluluklar verebilir."} />
    </>;
}
