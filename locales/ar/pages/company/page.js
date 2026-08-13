import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "الشركة"
};
export default function CompanyPage() {
  return <>
      <PageHero eyebrow={"كيف صُممت PayMyDine"} title={"منصة للمطاعم منظّمة حول 9 مجالات للمنتج و6 مساحات عمل حسب الدور وسياق تشغيلي مشترك."} intro={"تفصل PayMyDine المسؤوليات من دون فصل أجزاء المطعم عن بعضها. ويمكن أن تبقى إجراءات الضيوف وقوائم عمل الفرق وحالة المطبخ والمدفوعات ومؤشرات الإدارة مترابطة، بينما يرى كل شخص الضوابط المرتبطة بعمله."} image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">أربع قواعد للمنتج</span><h2>يجب أن توضّح كل ميزة من يتخذ الإجراء، وما السياق المطلوب، وأي حالة تثبت الاكتمال، وأي مؤشر يتغير.</h2><p>يحافظ ذلك على ارتباط المنتج بالعمل الفعلي داخل المطعم بدل بناء مجموعة من لوحات المعلومات المنفصلة والادعاءات التسويقية.</p></div><div className="companyValueCards"><article><h3>ملكية المسؤولية حسب الدور</h3><p>ويتلقى المالكون والمديرون وموظفو الخدمات والمطبخ والحجوزات والتمويل ضوابط وتصاريح مركزة.</p></article><article><h3>سياق مشترك</h3><p>الطاولات والضيوف والنظام والتوقيت والدفع يمكن أن تسافر عبر المقسم بدلا من الدخول مرة أخرى.</p></article><article><h3>مسارات عمل قابلة للقياس</h3><p>وتحدد كل مجموعة خط الأساس والمقاييس المستهدفة مثل وقت الانتظار، والوقت التحضيري، ودوران الموظفين، ومتوسط معدل التحقق أو التكرار.</p></article><article><h3>ذكاء اصطناعي مع وضوح المصدر</h3><p>ويمكن أن تلخص الذكاء الاصطناعي البيانات المتاحة وتقارنها، غير أن عرض المصدر والقرار الإنساني لا يزالان واضحين.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt="" /><img src="/site-assets/extra/cafe-professional.webp" alt="" /><img src="/site-assets/extra/chef-gourmet.webp" alt="" /><img src="/site-assets/extra/rooftop-dinner.webp" alt="" /></div></section>
      <CTA title={"تقييم نظام \" PayMyDine \" مقابل تدفق حقيقي للعمل في المطعم، وليس قائمة عامة."} body={"جلب الأدوار، والنظم الحالية، والعمل المتكرر، والمقاييس وراء مشكلة تشغيل واحدة. وسنرسم خرائط لمناطق المنتجات والحدود ذات الصلة."} />
    </>;
}
