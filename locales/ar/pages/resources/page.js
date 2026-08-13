import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
import { resources } from "@/locales/ar/data/site";
import { Icon } from "@/locales/ar/components/Icons";
export const metadata = {
  title: "دليل المساعدة"
};
export default function ResourcesPage() {
  return <>
      <PageHero eyebrow={"أدلة تنفيذ عملية"} title={"استخدم قوائم المراجعة وأسئلة الأدوار وتعريفات سير العمل القابلة للقياس قبل إعداد المنصة."} intro={"تغطي الأدلة مسار التنفيذ من 6 مراحل، و6 مساحات عمل حسب الدور، وأسئلة الذكاء الاصطناعي، ورحلة الضيف ذات الإجراءات الأربعة، و7 قدرات للحجوزات، والتخطيط لتكامل POS."} image="/site-assets/extra/friends-coffee.webp" compact />
      <section className="section resourcesSection"><div className="container resourceGrid">{resources.map(item => <a className="resourceCard" href={`/ar/resources/${item.slug}`} key={item.slug}><div className="resourceImage"><img src={item.image} alt="" loading="lazy" /></div><div className="resourceCopy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.intro}</p><b>اقرأ الدليل العملي <Icon name="arrow" size={15} /></b></div></a>)}</div></section>
      <CTA title={"تطبيق دليل لتدفق العمل في مطعمك"} body={"جلب الخطوات الحالية والأدوار المسؤولة والنظم ومقاييس خط الأساس. وسوف نرسم الدليل لنطاق PayMyDine."} />
    </>;
}
