import PageHero from "@/locales/tr/components/PageHero";
import CTA from "@/locales/tr/components/CTA";
import { Icon } from "@/locales/tr/components/Icons";
import ProductDetailSections from "@/locales/tr/components/ProductDetailSections";
export const metadata = {
  title: "Entegrasyonlar, Çoklu Lokasyon ve Envanter",
  description: "Connect, POS, muhasebe, teslimat ve ödeme sistemleri merkezi raporlama, menüler ve envanter bağlamı ile destekledi."
};
const capabilities = [["POS verileri", "Desteklenen sipariş, satış, menü veya masa verileri PayMyDine işletim resmine personelden tekrar aynı bilgilere girmek istemeden destek verin."], ["Muhasebe bağlamı", "Finans iş akışı tarafından ihtiyaç duyulan mevcut raporlama alanları, bağlantılı sisteme ve izinlere tabi."], ["Teslimat kanalları", "Daha geniş iş yük ve satış resminde dahil olmak üzere kanal tarafından ayırt edilebilir teslimat siparişlerini tut."], ["Ödeme sağlayıcıları", "Connect, ödeme statüsüne ve masaya ve misafir kontrol yolculuğuna destek verdi."]];
const integrationDetails = {
  factsEyebrow: "Entegrasyon ve ölçek kapsamı",
  factsTitle: "Dört entegrasyon türü, altı merkezi kontrol ve şu anda sağlayıcı konuşmaları olarak adlandırılır.",
  factsIntro: "Bir isim sağlayıcı her alanı veya iş akışını garanti etmez. Kapsam mevcut arayüzlere, izinlere ve kabul edilen veri yoluna bağlıdır.",
  facts: [['04', "entegrasyon türleri", "POS, muhasebe, teslimat ve ödeme bağlantıları mevcut entegrasyon kategorilerini oluşturur."], ['06', "merkezi kontrol kontroller", "Merkez sahibi görüşü, paylaşılan menüler, merkezi raporlama, envanter, gıda maliyeti ve destek grubu operasyonları satın almak."], ['04', "Ad sağlayıcılar", "Mevcut ürün verileri SumUp, hazır2order, Işık hızlı ve Square, arayüz ve proje kapsamına tabi."], ['05', "teslimat aşamaları", "Discovery, alan haritalama, erişim, test ve izleme pratik bir entegrasyon yolu yaratır."]],
  workflowEyebrow: "Sistem envanterinden bağlantı izlemek için",
  workflowTitle: "Gerçek bir restoran akışı etrafında bir entegrasyon nasıl tanımlanır.",
  workflowIntro: "İş eylemi veya raporlama ihtiyacı ile başlayın, sonra verilerin nasıl hareket etmesi gerektiğine karar verin.",
  workflow: [["Gerçeğin kaynağını tanımlayın", "Hangi sistemin emirleri, menüleri, ödemeleri, muhasebe, stokları veya bugün yer verileri olan belge."], ["Define alanları ve yönü", "Gerekli alanların listesi, verilerin PayMyDine'den veya hangi rolün sonucu kullandığı."], ["Giriş ve sınırları onaylayın", "Sağlayıcı arayüzünü gözden geçirin, doğrulama, izinler, oran sınırları ve durum detayı aslında mevcut."], ["uzlaşma vakaları ile test edin", "Normal kayıtları, güncelleştirmeleri, başarısızlıkları ve tekrarları, gitmeden önce kabul edilen örneklere karşı tekrarlar."], ["İzleme ve genişleme", "Tazeliği takip edin, tarayıcı kapsamını genişletmeden önce başarısız transferler ve uzlaşma istisnaları."]],
  rolesTitle: "Entegrasyon değeri uygulama, operasyonlar, finans ve mülkiyet için farklıdır.",
  rolesIntro: "Bir bağlantı adı verilen bir rol için gerçek bir manuel adım veya bir veri boşluğu kapatmalıdır.",
  roleViews: [["Uygulama veya IT", "Kendi kimlik doğrulama, alan haritalama, test vakaları, hata işleme ve teknik sağlayıcı iletişimi."], ["Restoran operasyonları", "Bağlantılı siparişler, menü, masa veya teslimat bağlamı aynı bilgiyi yeniden başlatmadan kullanın."], ["Finans Finans", "Ödeme, muhasebe ve uzlaşma alanları açık bir kaynak-gerçek kararla."], ["Sahibi ve çoklu konum liderlik", "Yerlerle karşılaştırın, paylaşılan standartlar, envanter ve raporlama yerel bağlamı korurken."]],
  metricsEyebrow: "Bütünleştirici sağlık",
  metricsTitle: "Bağlantının tamam mı, taze ve manuel uzlaşmayı azaltın.",
  metricsIntro: "Hedefler sağlayıcı ve iş akışı için kabul edilmelidir, çünkü her arayüz aynı yenileme veya hata detayını destekler.",
  metrics: [["Sen başarı oranı", "Kabul edilen veri nesneleri ve dönem için transferlere karşı başarılı kayıtları izleyin."], ["Veri güncelliği", "Kaynak olayı ile hedef iş akışındaki kullanılabilir görünümü arasındaki gecikmeyi ölçül."], ["Reconciliasyon istisnaları istisnalar", "Operasyon veya finans tarafından soruşturma gerektiren eksik, tekrarlanan veya yanlış kayıtlar."], ["Manual re-entry zamanı", "Baseline personel zaman önce kopyalayarak veya tekrarlayıcı verileri tekrarladı ve entegrasyon bittikten sonra."]],
  implementationTitle: "Bağlantıyı inşa etmeden veya etkinleştirmeden önce veri sözleşmesini yazın.",
  implementationIntro: "Sözleşme, her alan grubu için kaynak, hedef, mülkiyet, yeni beklenti ve başarısızlık sürecini açıklamalıdır.",
  implementation: ["Sağlayıcı belgeleri, kimlikleri ve onaylı izinler", "Her veri nesnesi için kaynak-gerçek karar", "Alan haritalama, yön ve yenileme gereksinimi", "Konum, menu, ödeme ve hesap tanımlayıcı haritalama", "Hata sahipliği, uyarı ve uzlaşma süreci", "Normal, güncelleme, tekrarlama ve başarısızlık testi vakaları"],
  faqs: [["Hangi sağlayıcılar şu anda adlandırılır?", "Mevcut ürün veri isimleri SumUp, hazır2order, Light speed ve Square. Exact kapasitesi hala mevcut arayüze bağlıdır ve kabul edilen proje kapsamına bağlıdır."], ["PayMyDine POS'i değiştirmek zorunda mı?", "Hayır. Bütünleştirme stratejisi mevcut POS'i gerçek bir kaynak olarak tutabilir ve seçilmiş PayMyDine iş akışları ve görüşleri ekledi."], ["Her entegrasyon gerçek zaman mı?", "Hayır. Tazelik, sağlayıcı arayüzüne, izinlere, ankete veya etkinlik seçeneklerine ve dağıtım tasarımına bağlıdır."], ["envanter ürün olmadan çalışır ve verilere mal olur mu?", "Tamamlanmış envanter veya yiyecek maliyetli resim gerekli eşya, stok, satın alma ve maliyet girişleri olmadan üretilebilir."]]
};
export default function IntegrationsPage() {
  return <>
      <PageHero eyebrow={"4 entegrasyon türleri - 6 merkezi kontrol"} title={"Restoran verilerini zaten tutan sistemlere bağlanmak, sonra bu verileri bir sonraki rol için faydalı hale getirin."} intro={"PayMyDine, desteklenen POS, muhasebe, teslimat ve ödeme ortamları ile çalışabilir, sonra merkez sahibi görüşler, paylaşılan menüler, raporlama, envanter, gıda-cost ve satın alma bağlamını kaynak sistemleri izin verir."} image="/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp" accent="green" />

      <section className="section integrationStepsSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">Bağlantıdan önce veri yolunu tanımlayın</span>
            <h2>Her entegrasyon için hangi verilerin hareket ettiğine karar verin, hangi sistem yazardır ve sonucu kim kullanır.</h2>
            <p>Yararlı bir entegrasyon re-entry veya eksik bağlamı kaldırır. Veriler sadece hareket etmemelidir çünkü bir bağlantı teknik olarak mümkündür.</p>
          </div>
          <div className="highlightGrid">
            {capabilities.map(([title, body], index) => <article className="highlightCard" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section darkIntegrationPage">
        <div className="container darkIntegrationGrid">
          <div>
            <span className="eyebrow darkEyebrow">6 multi-location kontrolleri</span>
            <h2>Her restoran yerel işletim bağlamını tutarken merkezi olarak karşılaştırıldığında.</h2>
            <p>Sahibilik, her siteyi aynı zemin planına, hizmet modeline veya takım yapısına dönüştürmeksizin konum performansını ve paylaşılan standartları inceleyebilir.</p>
          </div>
          <div className="integrationNameGrid">
            {["Merkezi işletme sahibi görünümü", "Paylaşılan menüler", "Central raporlama Merkezi", "Envanter", "Gıda maliyeti", "Satın Al Satın Al Satın Al Satın Al Satın Al Satın Al Satın Al Satın Al"].map(item => <span key={item}><Icon name="check" size={17} />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article>
            <img src="/site-assets/custom/integrations-capabilities-fit.webp" alt="" />
            <div>
              <span className="eyebrow">Bütünleşme kapsamı</span>
              <h2>Sadece gerçek bir iş akışı veya raporlama ihtiyacı destekleyen alanları bağlayın.</h2>
              <p>Kaynak, yön, zamanlaması, uygulamadan önce her veri alanı için izin ve sorumlu rol.</p>
            </div>
          </article>
          <article>
            <img src="/site-assets/custom/integrations-operating-picture.webp" alt="" />
            <div>
              <span className="eyebrow">Bir iş resmi</span>
              <h2>Satışları, stokları, satın alma ve yer performansını birlikte okuyun.</h2>
              <p>Bağlantılı sistemler veri sağlar nerede, sahipleri yer sonuçlarını karşılaştırabilir, gıda maliyetli hareketi anlayabilir ve işletme kaynağına geri bir iş numarası izler.</p>
            </div>
          </article>
        </div>
      </section>

      <ProductDetailSections details={integrationDetails} productName={"Entegrasyonlar, Çoklu Lokasyon ve Envanter"} />

      <CTA title={"Her olası konektörü tartışmadan önce gerçek bir entegrasyonu gözden geçirin."} body={"Bize sistem, veri alanları, yön, yenileme gereksinimi ve sonucu ihtiyacı olan rolü anlatın. Bu iş akışı etrafında pratik entegrasyon kapsamını tanımlayacağız."} />
    </>;
}
