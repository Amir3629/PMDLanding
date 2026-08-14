import Hero from "@/locales/tr/components/Hero";
import OfferGrid from "@/locales/tr/components/OfferGrid";
import Workflow from "@/locales/tr/components/Workflow";
import InteractiveDemos from "@/locales/tr/components/InteractiveDemos";
import { StatusGallery, LifestyleMarquee } from "@/locales/tr/components/StatusGallery";
import { RoleAndAISections, FlexibilityAndIntegrationSections } from "@/locales/tr/components/StorySections";
import CTA from "@/locales/tr/components/CTA";
import SiteStructuredData from '@/components/SiteStructuredData';
export default function HomePage() {
  return <>

      <SiteStructuredData locale="tr" />

      <Hero />

      <OfferGrid />

      <RoleAndAISections />

      <Workflow />

      <StatusGallery />

      <InteractiveDemos />

      <FlexibilityAndIntegrationSections />

      <LifestyleMarquee />

      <CTA title={"PayMyDine AI, restoranınızı 9 bağlantılı ürün alanında nasıl uydurduğunu görün."} body={"rolleri, zemin yapısı, misafir yolculuğu, mevcut sistemler ve sorular yönetimi her gün soruyor. AI'i hangi sinyalleri gösteren en küçük pratik kurulumu haritalayacağız, karşılaştırma, bayrak veya aslında sahip olduğunuz verilerden tahminleri desteklemek için kullanacağız."} secondaryLabel={"PayMyDine AI"} secondaryHref="/tr/ai" />

    </>;
}
