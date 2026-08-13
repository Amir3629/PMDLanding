import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
import { Icon } from "@/locales/ar/components/Icons";
import { productAreas } from "@/locales/ar/data/site";
export const metadata = {
  title: "مناطق المنتجات",
  description: "تسعة مجالات عملية لمنتجات PayMyDine تشمل العمليات والضيوف والفرق والاستخبارات والنمو والتكامل."
};
export default function SolutionsPage() {
  return <>
      <PageHero eyebrow={"9 مناطق منتجات PayMyDine"} title={"اختر سير العمل الذي تحتاجه لتحسنه ثم أبقه متصلاً ببقية المطعم"} intro={"ويبين كل مجال من مجالات المنتجات الواردة أدناه الإجراءات التي يدعمها، وسياق المطعم الذي يحتفظ به، والمقاييس أو الحالة الذي يمكن أن يستخدمه الفريق. ابدأوا بمنطقة واحدة أو تجمعوا كل تسعة"} image="/site-assets/extra/restaurant-team-planning.webp" accent="green" />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">خريطة المنتجات حسب الوظائف التشغيلية</span>
            <h2>اختر المنطقة التي تتطابق مع الوظيفة أو السؤال أو الإدارة التي تريد إصلاحها</h2>
            <p>ولا تزال الحجوزات، والخدمات، والمطبخ، والمدفوعات، والفرق، والتقارير مسؤوليات منفصلة، ولكن سياقها المفيد يمكن أن ينتقل عبر طبقة تشغيلية واحدة.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {productAreas.map(item => <a className="offerCard offerCardWithImage" href={item.href} key={item.title}>
                <div className="offerCardMedia"><img src={item.image} alt="" loading="lazy" /></div>
                <div className="offerCardBody">
                  <span className="iconBubble"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="cardLink">انظر الإجراءات والمقاييس <Icon name="arrow" size={15} /></span>
                </div>
              </a>)}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">متصل بالسياق المشترك</span>
            <h2>يمكن لتدفقات العمل المختلفة أن تستخدم نفس الطاولة، الطلب، الضيوف وقصة الدفع.</h2>
            <p>ويقلل ذلك من إعادة الدخول والتحقق من الوضع المتكرر، بينما لا يزال يعطي كل دور شاشات وتصاريح مركزة.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />9 مجالات منتجات</span>
            <span><Icon name="check" size={16} />6 مساحات عمل حسب الدور</span>
            <span><Icon name="check" size={16} />تدفق العمليات على خط ٥ خطوات</span>
            <span><Icon name="check" size={16} />3 أساليب لتقسيم الفاتورة</span>
            <span><Icon name="check" size={16} />9 مقاييس إدارية</span>
            <span><Icon name="check" size={16} />4 أنواع للتكامل</span>
          </div>
        </div>
      </section>

      <CTA title={"خبّر مناطق المنتج التسعة لنظم المطعم الموجودة"} body={"وسوف نحدد ما ينبغي أن تملكه شركة PayMyDine، وما ينبغي أن تبقى في منطقة POS الخاصة بك، أو تجهيز المدفوعات، وحيثما يزيل السياق المترابط العمل المزدوج."} />
    </>;
}
