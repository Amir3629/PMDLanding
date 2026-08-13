import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "الأسعار"
};
const factors = [["نطاق المطاعم والموقع", "عدد المواقع، والتعقيدات الأرضية، ونموذج الخدمة، وقنوات النظام والبيئات التي يجب أن تدعمها الإعدادة."], ["مجالات مختارة من المنتجات", "وأُدرجت الآن أي من مجالات المنتجات التسعة، التي يُخطط لها فيما بعد وما زالت النظم الحالية ذات حجية."], ["نطاق الدور والوصول", "أي من الحيزات الستة المطلوبة للعمل، وكم تختلف التصاريح وعدد الفرق أو المواقع التي تحتاج إلى كل وجهة نظر."], ["أعمال التكامل والتنفيذ", "النظام المؤيد للخدمة العامة، والمدفوعات، والمحاسبة، والتوصيل، بالإضافة إلى الإعداد، والهجرة، والتحقق، وإعداد الفرق."]];
export default function PricingPage() {
  return <>
      <PageHero eyebrow={"4 مدخلات للتسعير"} title={"قم بتسعير نطاق الإعداد والتنفيذ والتكامل الذي ستستخدمه فعلاً"} intro={"يبدأ اقتراح عملي بمواقع، ومجالات مختارة من المنتجات، وأماكن عمل، وأعمال التكامل. وينبغي لها أيضاً أن تذكر ما تبقى خارج نظام \" PayMyDine \" وما هي الافتراضات التي تؤثر على النطاق النهائي."} image="/site-assets/extra/qr-couple.webp" accent="green" />
      <section className="section pricingSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">تحديد النطاق قبل السعر</span>
            <h2>وهناك أربعة مدخلات تجعل المقترح التجاري مفهوما وقابلا للمقارنة.</h2>
            <p>ينبغي أن يبيّن المقترح ما هو مُدرج، وما هي النظم التي تربط، والأدوار المُحدّدة، وما هو مطلوب من عمل في مجال التنفيذ، وما قد يغير نطاقه.</p>
          </div>
          <div className="pricingFactorGrid">
            {factors.map(([title, body], index) => <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>
      <CTA title={"طلب تسعير مع نطاق مطعم واضح"} body={"أخبرنا بالمواقع ومجالات المنتجات والأدوار والنظم الحالية واحتياجات التنفيذ. وسنستخدم هذه المدخلات الأربعة لتشكيل المقترح التجاري."} primaryLabel={"تسعير الطلب"} primaryHref="/ar/contact" secondaryLabel={"انظر مراحل التنفيذ الست"} secondaryHref="/ar/implementation" />
    </>;
}
