import PageHero from '@/locales/tr/components/PageHero';
import OfferGrid from '@/locales/tr/components/OfferGrid';
import Workflow from '@/locales/tr/components/Workflow';
import InteractiveDemos from '@/locales/tr/components/InteractiveDemos';
import CTA from '@/locales/tr/components/CTA';
import { imageGroups } from '@/locales/tr/data/site';

export const metadata = {
  title: 'Restoran Yönetim Platformu',
  description: 'Rezervasyon, masa, sipariş, mutfak, ödeme, müşteri CRM’i, analiz, ekip yönetimi, entegrasyonlar ve Yapay Zekâ’yı bağlantılı bir operasyon platformunda yönetin.'
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="9 ürün alanı · 6 rol bazlı çalışma alanı"
        title="Restoran gününün arkasındaki işlemleri, durumları ve metrikleri tek operasyon katmanında birleştirin."
        intro="Rezervasyon, masa, sipariş, mutfak, ödeme, müşteri CRM’i, analiz, ekip kontrolleri, entegrasyonlar ve Yapay Zekâ bağlantılı ürün alanları olarak çalışır. Her rol odaklı bir çalışma alanı kullanırken yönetim ortak operasyon görünümünü korur."
        image="/site-assets/custom/platform-hero.webp"
      />
      <OfferGrid compact />
      <Workflow variant="platform" />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt=""/><div><span className="eyebrow">Rol odaklı iş akışı</span><h2>Masa, sipariş ve müşteri bağlamını bir sonraki işlemden sorumlu role aktarın.</h2><p>Servis personeli servis işini, mutfak hazırlık işini, rezervasyon ekibi gelişleri ve yöneticiler istisnaları görür; bilgi sistemler arasında tekrar kopyalanmaz.</p></div></article>
          <article><img src={imageGroups.social[3]} alt=""/><div><span className="eyebrow">9 karar metriği</span><h2>Sayının kendisiyle birlikte karşılaştırma dönemini ve operasyon bağlamını da izleyin.</h2><p>Gelir, müşteri sayısı, ortalama hesap tutarı, masa devir hızı, satış zamanlaması, en çok satan ürünler, ödeme yöntemi dağılımı, tahminleme ve kârlılığı inceleyin; ardından bir sinyalin neden değiştiğini araştırmak için Yapay Zekâ desteğini kullanın.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant="platform" />
      <CTA title="Önce en fazla tekrar işi ortadan kaldıracak ürün alanlarını seçin." body="9 alanın tamamını mevcut araçlarınıza, ekip sorumluluklarınıza ve raporlama ihtiyaçlarınıza eşleyip pratik bir ilk kapsam belirleyebiliriz." />
    </>
  );
}
