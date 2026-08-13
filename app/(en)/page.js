import Hero from '@/components/Hero';
import OfferGrid from '@/components/OfferGrid';
import Workflow from '@/components/Workflow';
import InteractiveDemos from '@/components/InteractiveDemos';
import {
  StatusGallery,
  LifestyleMarquee
} from '@/components/StatusGallery';
import {
  RoleAndAISections,
  FlexibilityAndIntegrationSections
} from '@/components/StorySections';
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

      <CTA
        title="See how PayMyDine AI fits your restaurant across all 9 connected product areas."
        body="Bring your roles, floor structure, guest journey, current systems and the questions management asks every day. We will map the smallest practical setup and show which signals AI can summarise, compare, flag or use to support forecasts from the data you actually have."
        secondaryLabel="Explore PayMyDine AI"
        secondaryHref="/ai"
      />

    </>

  );

}
