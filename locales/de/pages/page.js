import Hero from "@/locales/de/components/Hero";
import HomeHardwareRunway from "@/components/HomeHardwareRunway";
import OfferGrid from "@/locales/de/components/OfferGrid";
import Workflow from "@/locales/de/components/Workflow";
import InteractiveDemos from "@/locales/de/components/InteractiveDemos";
import { StatusGallery, LifestyleMarquee } from "@/locales/de/components/StatusGallery";
import { RoleAndAISections, FlexibilityAndIntegrationSections } from "@/locales/de/components/StorySections";
import CTA from "@/locales/de/components/CTA";
import SiteStructuredData from "@/components/SiteStructuredData";
import { metadataForRoute } from '@/lib/seo';
import HomepageMainExperience from "@/components/homepage-main/HomepageMainExperience";
import '../../../app/(en)/homepage-main-modern.css';
export const metadata = metadataForRoute('de', '/');
export function HomePageContent() {
  return <>

      <SiteStructuredData locale="de" />

      <Hero />

      <HomeHardwareRunway locale="de" />

      <OfferGrid />

      <RoleAndAISections />

      <Workflow />

      <StatusGallery />

      <InteractiveDemos />

      <FlexibilityAndIntegrationSections />

      <LifestyleMarquee />

      <CTA title={"PayMyDine für Ihr Restaurant entdecken."} body={"Zeigen Sie uns Ihr Team und Ihre Systeme. Wir finden die passenden Module."} secondaryLabel={"PayMyDine KI entdecken"} secondaryHref="/de/ai" />

    </>;
}
export default function HomePage() {
  return <HomepageMainExperience>
      <HomePageContent />
    </HomepageMainExperience>;
}
