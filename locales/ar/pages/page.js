import Hero from "@/locales/ar/components/Hero";
import HomeHardwareRunway from '@/components/HomeHardwareRunway';
import OfferGrid from "@/locales/ar/components/OfferGrid";
import Workflow from "@/locales/ar/components/Workflow";
import InteractiveDemos from "@/locales/ar/components/InteractiveDemos";
import { StatusGallery, LifestyleMarquee } from "@/locales/ar/components/StatusGallery";
import { RoleAndAISections, FlexibilityAndIntegrationSections } from "@/locales/ar/components/StorySections";
import CTA from "@/locales/ar/components/CTA";
import SiteStructuredData from '@/components/SiteStructuredData';
export default function HomePage() {
  return <>

      <SiteStructuredData locale="ar" />

      <Hero />

      <HomeHardwareRunway locale="ar" />

      <OfferGrid />

      <RoleAndAISections />

      <Workflow />

      <StatusGallery />

      <InteractiveDemos />

      <FlexibilityAndIntegrationSections />

      <LifestyleMarquee />

      <CTA title={"اكتشف PayMyDine في مطعمك."} body={"عرّفنا على فريقك وأنظمتك الحالية. سنعرض الوحدات المناسبة لمطعمك."} secondaryLabel={"استكشف PayMyDine AI"} secondaryHref="/ar/ai" />

    </>;
}
