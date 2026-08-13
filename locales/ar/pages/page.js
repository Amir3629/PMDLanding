import Hero from "@/locales/ar/components/Hero";
import OfferGrid from "@/locales/ar/components/OfferGrid";
import Workflow from "@/locales/ar/components/Workflow";
import InteractiveDemos from "@/locales/ar/components/InteractiveDemos";
import { StatusGallery, LifestyleMarquee } from "@/locales/ar/components/StatusGallery";
import { RoleAndAISections, FlexibilityAndIntegrationSections } from "@/locales/ar/components/StorySections";
import CTA from "@/locales/ar/components/CTA";
export default function HomePage() {
  return <>

      <Hero />

      <OfferGrid />

      <RoleAndAISections />

      <Workflow />

      <StatusGallery />

      <InteractiveDemos />

      <FlexibilityAndIntegrationSections />

      <LifestyleMarquee />

      <CTA title={"اكتشف كيف ينسجم PayMyDine AI مع مطعمك عبر مجالات المنتجات التسعة المترابطة."} body={"أحضر أدوار فريقك، وتخطيط الصالة، ورحلة الضيف، والأنظمة الحالية، والأسئلة التي تطرحها الإدارة يوميًا. سنحدد أصغر إعداد عملي ونوضح الإشارات التي يمكن للذكاء الاصطناعي تلخيصها أو مقارنتها أو التنبيه إليها أو استخدامها لدعم التوقعات بالاعتماد على البيانات المتاحة لديك فعليًا."} secondaryLabel={"استكشف PayMyDine AI"} secondaryHref="/ar/ai" />

    </>;
}
