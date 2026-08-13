import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "بيانات الأمن",
  description: "استعراض عملي لإمكانية الوصول إلى الأدوار، وتدفقات البيانات، وحدود التكامل، وضوابط النشر في نظام \" PayMyDine \" ."
};
const topics = [["الوصول إلى الأدوار", "وثيقة من بين 6 أماكن عمل يمكن أن تنظر إلى كل نوع من بيانات المطاعم والضيوف، أو تخلقها أو تغيرها أو توافق عليها أو تصدرها."], ["تدفق البيانات", "خريطة المصدر، والمقصد، والغرض، والاحتفاظ بالطرف المسؤول عن الجدول، والنظام، والضيف، والدفع، وبيانات التقارير."], ["حدود التكامل", "تسجيل الصلاحيات الصادرة عن مكتب المدعي العام، والمجالات المتاحة، وطريقة التوثيق، ومناولة الفشل لكل نظام خارجي للدفع أو التسليم."], ["ضوابط النشر", "استعراض الاستضافة، والدعم، وقطع الأشجار، والرصد، ومناولة الحوادث، ومسؤوليات مقدمي الخدمات عن البيئة الفعلية المنتشرة."]];
export default function SecurityPage() {
  return <>
      <PageHero eyebrow={"4 مجالات استعراض أمني"} title={"استعراض إمكانية الوصول، وتدفق البيانات، والتكاملات، والنشر ضد الإعدادة الحقيقية."} intro={"وينبغي للمطالبات الأمنية أن تصف البيئة المنتشرة بالفعل. ومن ثم تبدأ مناقشات PayMyDine بأدوار ونظم مترابطة ومسؤوليات بيانات وضوابط تشغيلية بدلا من الوعود العامة."} image="/site-assets/extra/office-dashboard.webp" accent="green" />
      <section className="section highlightSection">
        <div className="container highlightGrid">
          {topics.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div><span className="eyebrow">المسائل المتعلقة بوثيقة</span><h2>من يستطيع أن يتصرف، أي بيانات تتحرك، حيث يتم تخزينها ومن يستجيب عندما يفشل شيء؟</h2><p>قد تشمل الإجابة PayMyDine والمطعم وبيئة الاستضافة ومزوّدي أنظمة POS أو الدفع الخارجيين. ويجب توضيح المسؤوليات قبل الإطلاق.</p></div>
          <div className="capabilityList"><span>تصاريح الدور</span><span>جرد البيانات</span><span>وثائق تفويض التكامل</span><span>الاستبقاء والدعم</span><span>التعبئة والرصد</span><span>مسؤولية الحوادث</span></div>
        </div>
      </section>
      <CTA title={"استعراض مسار النشر الفعلي والبيانات."} body={"جلب الأدوار، والمقدمين، وأنواع البيانات، ورسم بياني للتكامل بحيث يمكن للمحادثة الأمنية أن تحدد ضوابط ومسؤوليات واضحة."} />
    </>;
}
