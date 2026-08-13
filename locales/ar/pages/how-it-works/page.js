import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "كيف يعمل",
  description: "نظرة خمسية عن كيفية تحمل شركة &quot; بي ميدين &quot; لسياق المطعم من الضيوف أو الموظفين للعمل في الخدمة، والدفع، والإبلاغ، و &quot; آي &quot; ."
};
const journeyCards = [{
  eyebrow: "4 أعمال ضيافة",
  title: "الشاشة والبرووز والنظام والدفع دون فقدان سياق الجدول",
  body: "يمكن أن يفتح جدول QR قائمة الطعام المحمولة، ويبقي الجدول ملحقا بالطلب، ويقدم الدعم لطلبات الخدمة، ويستمر في الدخول.",
  image: '/site-assets/comments/16.webp',
  alt: "الضيوف الذين يستخدمون تجربة PayMyDine QR على الطاولة"
}, {
  eyebrow: "الخدمة الخاضعة لسيطرة المطاعم",
  title: "الملاءمة الرقمية تغذي تدفق عمل الفريق بدلاً من استبداله",
  body: "ويتلقى موظفو الخدمات والمطبخ الإجراء التالي في الآراء التي تركز على الدور، في حين يتحكم المطعم في خيارات التسرب والتوافر والخدمات والدفع.",
  image: '/site-assets/table/11.webp',
  alt: "بيئة مطاعم تدعمها PayMyDine"
}];
const flowSteps = [['01', "بدء العمل", "فحص الضيوف، مقاعد الاستقبال، النادل يفتح أمراً أو المدير يغير طاولة"], ['02', "السياق مرفق", "طاولة، ضيف، ترتيب، توقيت، ملاحظات وأذن"], ['03', "ويتلقى هذا الدور المسؤول", "وينظر موظفو الخدمات إلى العمل في مجال الخدمات، وينظر المطبخ إلى الأعمال التحضيرية، ويرى المديرون استثناءات."], ['04', "الخدمة والمدفوعات كاملة", "وتستمر حالة التأهب والانطلاق والمغادرة من نفس السياق، بما في ذلك ثلاثة أساليب متفرقة."], ['05', "يصبح النشاط بيانات إدارية", "الإيرادات، والضيوف، ومتوسط التدقيق، ودوران الطاولة، وتوقيت المبيعات، والإبلاغ عن التغذية المربحة، والأسئلة المدعومة من منظمة العفو الدولية."]];
const operationsCards = [{
  eyebrow: "6 أماكن عمل",
  title: "وينظر كل دور إلى ما هو مسؤول عنه من أسئلة وضوابط ومركز.",
  body: "ويستخدم المالكون، والمديرون، وموظفو الخدمات، والمطبخ، والتحفظات، والشؤون المالية، وجهات النظر المركزة في حين لا يزال السياق الأساسي للمطاعم مشتركا.",
  image: '/site-assets/owner/1.webp',
  alt: "مطاعم PayMyDine"
}, {
  eyebrow: "4 تذاكر مطبخ",
  title: "تم استلامه وإعداده وجاهزته وإرساله ليبقى مرئياً عبر سلسلة الخدمات",
  body: "ويمكن للمطبخ أن يركز على الإعداد في حين يرى موظفو الخدمة والمديرون الوضع اللازم للتسليم التالي.",
  image: '/site-assets/kitchen/2.webp',
  alt: "فريق مطبخ يعمل مع PayMyDine"
}];
export default function HowItWorksPage() {
  return <>
      <PageHero eyebrow={"تدفق العمليات على خط ٥ خطوات"} title={"(ج) السياق الافتراضي من الجدول الأول إلى مسألة الإدارة النهائية."} intro={"ويربط PayMyDine بين إجراءات تثبيط الضيوف، وأماكن العمل القائمة على الدور، وحالة المطبخ، والدفع، والإبلاغ، والزدجاج 14QXZ دون أن يطلب من كل شخص استخدام نفس الواجهة أو العودة إلى السياق نفسه."} image="/site-assets/extra/izakaya-phone.webp" accent="orange" />

      <section className="section howJourneySection">
        <div className="container">
          <div className="sectionHeading centerHeading howJourneyHeading">
            <span className="eyebrow">أعمال الضيوف تبقى عمل المطعم</span>
            <h2>ينبغي لأي إجراء متنقل أن ينشئ الجدول الصحيح أو الخدمة أو مهمة الدفع للفريق.</h2>
            <p>الضيف يرى تدفقاً قصيراً ويتلقى المطعم السياق المنظم اللازم لإعداد الجدول وتقديمه وتسويته.</p>
          </div>

          <div className="demoShowcaseGrid howJourneyGrid">
            {journeyCards.map((card, index) => <article className={`demoShowcaseCard ${index === 0 ? 'demoShowcaseWide' : ''}`} key={card.title}>
                <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="demoShowcaseCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div>
              <span className="eyebrow">خمس عمليات تسليم صريحة</span>
              <h2>وفي كل خطوة، تحدد الإجراءات والسياق والدور المسؤول والوضع الواضح.</h2>
            </div>
            <p>هذا يجعل سير العمل قابلاً للاختبار: يمكن للفرق معرفة أين تضيع المعلومات، وأين تتكرر الحالة، وأين يجب أن يتولى التكامل أو مساحة العمل المهمة.</p>
          </div>

          <div className="howFlowGrid">
            {flowSteps.map(([number, title, body]) => <article className="howFlowCard" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>)}
          </div>
        </div>
      </section>

      <section className="section howOperationsSection">
        <div className="container">
          <div className="sectionHeading howOperationsHeading">
            <span className="eyebrow">خلف رحلة الضيوف</span>
            <h2>وتحوّل أماكن عمل الأدوار وتذكرات مرئية الإجراءات الرقمية إلى عمل مطاعم خاضع للمساءلة.</h2>
            <p>يمكن للفريق أن يحدد من يملك الإجراء التالي، الذي يثبت اكتماله، والذي ينبغي أن يعكس النتيجة.</p>
          </div>

          <div className="howOperationsGrid">
            {operationsCards.map(card => <article className="howOperationsCard" key={card.title}>
                <div className="howOperationsMedia">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="howOperationsCopy">
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>

      <CTA title={"خريطة رحلة مطعم حقيقية خلال 5 خطوات"} body={"أحضر حجزاً، طلب طاولة، تسليم مطبخ أو تدفق مدفوعات وسنحدد الإجراءات والسياق والدور والوضع والمقاييس في كل خطوة."} primaryLabel={"احجز عرضًا توضيحيًا"} primaryHref="/ar/contact" secondaryLabel={"استكشاف مناطق المنتجات التسعة"} secondaryHref="/ar/platform" />
    </>;
}
