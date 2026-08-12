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
      <CTA title="Ready to see PayMyDine around your restaurant roles and workflows?" body="Book a demo and we’ll focus on the team structure, guest journey, AI, modules and integrations that fit your operation." />
    </>
  );
}
