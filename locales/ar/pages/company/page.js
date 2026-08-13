import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "الشركة"
};
export default function CompanyPage() {
  return <>
      <PageHero eyebrow={"كيف صُمّمَ PayMyDine"} title={"منصة للمطاعم تُنظَّم حول 9 وظائف منتجة، و6 أماكن عمل، وسياق تشغيل مشترك."} intro={"PayMyDine يفصل المسؤوليات دون فصل المطعم. ويمكن أن تظل إجراءات الضيوف، وأسئلة الأفرقة، وحالة المطبخ، والمدفوعات، ومقاييس الإدارة مرتبطة فيما يرى كل شخص الضوابط ذات الصلة بالعمل."} image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">أربعة قواعد للمنتجات</span><h2>وينبغي لكل سمة أن تجيب على من يتصرف، وما هو السياق المطلوب، وما هو الوضع الذي يثبت اكتماله وما هي التغيرات المترية.</h2><p>هذا يُبقي المنتج مرتبطًا بعمل المطعم الفعلي بدلًا من بناء مجموعة من لوحات المعلومات المنفصلة والادعاءات التسويقية.</p></div><div className="companyValueCards"><article><h3>ملكية الأدوار</h3><p>ويتلقى المالكون والمديرون وموظفو الخدمات والمطبخ والتحفظات والتمويل ضوابط وتصاريح مركزة.</p></article><article><h3>السياق المشترك</h3><p>الطاولات والضيوف والنظام والتوقيت والدفع يمكن أن تسافر عبر المقسم بدلا من الدخول مرة أخرى.</p></article><article><h3>تدفقات العمل المقننة</h3><p>وتحدد كل مجموعة خط الأساس والمقاييس المستهدفة مثل وقت الانتظار، والوقت التحضيري، ودوران الموظفين، ومتوسط معدل التحقق أو التكرار.</p></article><article><h3>AI مع ظهور المصدر</h3><p>ويمكن أن تلخص شركة AI البيانات المتاحة وتقارنها، غير أن رؤية المصدر والقرار الإنساني لا يزالان واضحين.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt="" /><img src="/site-assets/extra/cafe-professional.webp" alt="" /><img src="/site-assets/extra/chef-gourmet.webp" alt="" /><img src="/site-assets/extra/rooftop-dinner.webp" alt="" /></div></section>
      <CTA title={"تقييم نظام &quot; PayMyDine &quot; مقابل تدفق حقيقي للعمل في المطعم، وليس قائمة عامة."} body={"جلب الأدوار، والنظم الحالية، والعمل المتكرر، والمقاييس وراء مشكلة تشغيل واحدة. وسنرسم خرائط لمناطق المنتجات والحدود ذات الصلة."} />
    </>;
}
