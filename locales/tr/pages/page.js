import Hero from '@/locales/tr/components/Hero';
import OfferGrid from '@/locales/tr/components/OfferGrid';
import Workflow from '@/locales/tr/components/Workflow';
import InteractiveDemos from '@/locales/tr/components/InteractiveDemos';
import { StatusGallery, LifestyleMarquee } from '@/locales/tr/components/StatusGallery';
import { RoleAndAISections, FlexibilityAndIntegrationSections } from '@/locales/tr/components/StorySections';
import CTA from '@/locales/tr/components/CTA';
import SiteStructuredData from '@/components/SiteStructuredData';

export const metadata = {
  title: 'Yapay Zekâ Destekli Restoran Yönetim Yazılımı',
  description: 'PayMyDine; rezervasyon, sipariş, mutfak, ödeme, müşteri CRM’i, analiz ve Yapay Zekâ destekli kararları tek bir restoran yönetim platformunda birleştirir.'
};

export default function HomePage() {
  return (
    <>
      <SiteStructuredData locale="tr" />
      <Hero />
      <OfferGrid />
      <RoleAndAISections />
      <Workflow />
      <StatusGallery />
      <InteractiveDemos />
      <FlexibilityAndIntegrationSections />
      <LifestyleMarquee />
      <CTA
        title="PayMyDine Yapay Zekâ’nın işletmenizdeki 9 bağlantılı ürün alanıyla nasıl çalıştığını görün."
        body="Ekip rollerinizi, salon yapınızı, müşteri yolculuğunuzu, mevcut sistemlerinizi ve yönetimin her gün sorduğu soruları paylaşın. En küçük pratik kurulumu birlikte belirleyelim; Yapay Zekâ’nın mevcut verinizden hangi sinyalleri özetleyebileceğini, karşılaştırabileceğini, işaretleyebileceğini veya tahminleri desteklemek için kullanabileceğini gösterelim."
        secondaryLabel="Yapay Zekâyı Keşfedin"
        secondaryHref="/tr/ai"
      />
    </>
  );
}
