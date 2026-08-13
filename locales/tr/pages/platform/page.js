import PageHero from "@/locales/tr/components/PageHero";
import OfferGrid from "@/locales/tr/components/OfferGrid";
import Workflow from "@/locales/tr/components/Workflow";
import InteractiveDemos from "@/locales/tr/components/InteractiveDemos";
import CTA from "@/locales/tr/components/CTA";
import { imageGroups } from "@/locales/tr/data/site";
export const metadata = {
  title: "Ürün"
};
export default function PlatformPage() {
  return <>
      <PageHero eyebrow={"9 ürün alanları - 6 rol iş alanı"} title={"Restoran gününün arkasındaki eylemler, statü ve ölçümler için bir işletim katmanı."} intro={"Rezervasyonlar, masalar, sipariş, mutfak, ödemeler, misafir CRM, analitik, takım kontrolleri, entegrasyonlar ve AI bağlantılı ürün alanları olarak. Her rol, yönetim paylaşılan işletim resmini tutarken odaklanmış bir çalışma alanı alır."} image="/site-assets/custom/platform-hero.webp" />
      <OfferGrid compact />
      <Workflow variant={"platform platform platformu platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform"} />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt="" /><div><span className="eyebrow">Rol-aware iş akışı</span><h2>Masa, sipariş ve misafir bağlamı bir sonraki eylemden sorumlu rolüne taşıyın.</h2><p>Servis personeli hizmet çalışması alır, mutfak hazırlık çalışması alır, rezervasyonlar varış alır ve yöneticiler sistemler arasındaki bilgileri kopyalamadan istisna alırlar.</p></div></article>
          <article><img src={imageGroups.social[3]} alt="" /><div><span className="eyebrow">9 karar metrikleri</span><h2>Sayıyı takip edin, karşılaştırma dönemi ve bunun arkasında işletim bağlamı.</h2><p>Rapor geliri, konuklar, ortalama kontrol, masa cirosu, satış zamanlaması, en iyi satıcılar, ödeme karışımı, tahmin ve kârlılığı, sonra AI'i neden bir sinyalin değiştiğini sormak için yardım edin.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant={"platform platform platformu platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform platform"} />
      <CTA title={"İlk önce en çok tekrarlanan işi kaldıran ürün alanlarını seçin."} body={"Mevcut araçlarınıza tüm 9 alanı haritalayabiliriz, takım sorumlulukları ve raporlama ihtiyaçları, sonra pratik bir ilk kapsamı tanımlayın."} />
    </>;
}
