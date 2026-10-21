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

      <CTA title={"Erfahren Sie, wie PayMyDine KI Ihr Restaurant in allen 9 vernetzten Produktbereichen unterstützen kann."} body={"Sprechen wir über Ihre Teamrollen, Tischpläne, Gästeabläufe und bestehenden Systeme. Gemeinsam finden wir ein passendes Setup und zeigen, welche Betriebsdaten KI auswerten, vergleichen, auf Auffälligkeiten prüfen und für Prognosen nutzen kann."} secondaryLabel={"PayMyDine KI entdecken"} secondaryHref="/de/ai" />

    </>;
}
export default function HomePage() {
  return <HomepageMainExperience>
      <HomePageContent />
    </HomepageMainExperience>;
}
