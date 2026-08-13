import PageHero from "@/locales/ar/components/PageHero";
import OfferGrid from "@/locales/ar/components/OfferGrid";
import Workflow from "@/locales/ar/components/Workflow";
import InteractiveDemos from "@/locales/ar/components/InteractiveDemos";
import CTA from "@/locales/ar/components/CTA";
import { imageGroups } from "@/locales/ar/data/site";
export const metadata = {
  title: "المنتج"
};
export default function PlatformPage() {
  return <>
      <PageHero eyebrow={"9 مجالات منتجات - 6 أماكن عمل"} title={"طبقة تشغيلية واحدة للأفعال والوضع والمقاييس خلف يوم المطعم"} intro={"استخدام التحفظات، والجداول، والطلب، والمطبخ، والمدفوعات، والضيوف في إدارة المخاطر المؤسسية، والمحللين، والضوابط الجماعية، والإدماج، والإدماج في مجالات المنتجات ذات الصلة. ويحصل كل دور على مكان عمل مركز بينما تحتفظ الإدارة بالصورة التشغيلية المشتركة."} image="/site-assets/custom/platform-hero.webp" />
      <OfferGrid compact />
      <Workflow variant={"منصة"} />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt="" /><div><span className="eyebrow">تدفق العمل المدرك للدور</span><h2>نقل الطاولة والنظام والضيوف إلى الدور المسؤول عن الإجراء التالي.</h2><p>ويحصل موظفو الخدمات على الخدمات، ويتلقى المطبخ أعمال التحضير، ويحصلون على تحفظات، ويحصل المديرون على استثناءات دون الحصول على معلومات عن النظم.</p></div></article>
          <article><img src={imageGroups.social[3]} alt="" /><div><span className="eyebrow">9 مقاييس قرار</span><h2>تتبع الرقم وفترة المقارنة والسياق التشغيلي خلفه.</h2><p>إعادة النظر في الإيرادات، والضيوف، والفحص المتوسط، ومعدل دوران المائدة، وتوقيت المبيعات، وأفضل البائعين، ومزيج المدفوعات، والتنبؤات، والربحية، ثم استخدام المساعدة المقدمة من منظمة العفو الدولية لمعرفة سبب تغيير الإشارة.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant={"منصة"} />
      <CTA title={"اختيار مجالات المنتجات التي تزيل أكثر الأعمال تكرارا أولا."} body={"ويمكننا أن نحدد جميع المجالات التسعة لأدواتكم الحالية، ومسؤوليات الفريق، واحتياجات الإبلاغ، ثم نحدد النطاق الأول العملي."} />
    </>;
}
