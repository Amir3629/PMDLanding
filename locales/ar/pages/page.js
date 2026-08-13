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

      <CTA title={"انظر كيف أن (زكس كيز) يلائم مطعمك في جميع مناطق المنتجات ذات الصلة"} body={"إجلبْ أدوارَكَ، هيكل الطابقِ، سفر الضيوف، النظم الحالية وإدارة الأسئلةِ تَسْألُ كل يوم. وسوف نرسم خرائط لأصغر تركيبة عملية ونبين ما يمكن أن تلخصه الإشارات AI أو تقارنها أو العلم أو استخدامها لدعم التنبؤات من البيانات التي لديك فعلا."} secondaryLabel={"(استكشف (بيادين آي"} secondaryHref="/ar/ai" />

    </>;
}
