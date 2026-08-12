import Hero from '@/components/Hero';
import OfferGrid from '@/components/OfferGrid';
import Workflow from '@/components/Workflow';
import InteractiveDemos from '@/components/InteractiveDemos';
import { StatusGallery, LifestyleMarquee } from '@/components/StatusGallery';
import { RoleAndAISections, FlexibilityAndIntegrationSections } from '@/components/StorySections';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferGrid />
      <RoleAndAISections />
      <Workflow />
      <StatusGallery />
      <InteractiveDemos />
      <FlexibilityAndIntegrationSections />
      <LifestyleMarquee />
      <CTA title="Map your restaurant to the 9 PayMyDine product areas." body="Bring the roles, floor structure, guest journey, current systems and metrics you want to improve. We will show the smallest practical setup and how it can expand." />
    </>
  );
}
