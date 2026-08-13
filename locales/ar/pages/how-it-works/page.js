import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "كيف يعمل",
  description: "عرض من خمس خطوات لكيفية انتقال سياق المطعم في PayMyDine من إجراء الضيف أو الموظف إلى الخدمة والدفع والتقارير والذكاء الاصطناعي."
};
const journeyCards = [{
  eyebrow: "4 إجراءات للضيف",
  title: "امسح رمز QR وتصفح واطلب وادفع من دون فقدان سياق الطاولة.",
  body: "يمكن لرمز QR على الطاولة فتح القائمة على الهاتف، وإبقاء الطاولة مرتبطة بالطلب، ودعم طلبات الخدمة، والاستمرار حتى إتمام الحساب.",
  image: '/site-assets/comments/16.webp',
  alt: "ضيوف يستخدمون تجربة PayMyDine عبر QR على الطاولة"
}, {
  eyebrow: "خدمة تحت تحكم المطعم",
  title: "تدعم الراحة الرقمية سير عمل الفريق بدل أن تحل محله.",
  body: "ويتلقى موظفو الخدمات والمطبخ الإجراء التالي في العروض التي تركز على الدور، في حين يتحكم المطعم في خيارات التسرب والتوافر والخدمات والدفع.",
  image: '/site-assets/table/11.webp',
  alt: "بيئة مطعم تدعمها PayMyDine"
}];
const flowSteps = [['01', "يبدأ الإجراء", "يمسح ضيف رمزًا، أو يخصص الاستقبال مقعدًا، أو يفتح النادل طلبًا، أو يغيّر المدير طاولة."], ['02', "يُرفق السياق", "يبقى سياق الطاولة والضيف والطلب والتوقيت والملاحظات والصلاحيات مرتبطًا بالإجراء."], ['03', "يتلقاه الدور المسؤول", "يرى فريق الخدمة مهام الخدمة، ويرى المطبخ أعمال التحضير، بينما يرى المديرون الاستثناءات."], ['04', "تكتمل الخدمة والدفع", "تستمر حالة الجاهزية والتسليم وإتمام الحساب ضمن السياق نفسه، بما في ذلك ثلاث طرق لتقسيم الفاتورة."], ['05', "يتحول النشاط إلى بيانات للإدارة", "تغذي بيانات الإيرادات والضيوف ومتوسط الفاتورة ودوران الطاولات وتوقيت المبيعات والربحية التقارير والأسئلة المدعومة بالذكاء الاصطناعي."]];
const operationsCards = [{
  eyebrow: "6 مساحات عمل حسب الدور",
  title: "يرى كل دور قائمة العمل والضوابط والحالة التي تقع ضمن مسؤوليته.",
  body: "ويستخدم المالكون، والمديرون، وموظفو الخدمات، والمطبخ، والحجوزات، والشؤون المالية، وجهات النظر المركزة في حين لا يزال السياق الأساسي للمطاعم مشتركا.",
  image: '/site-assets/owner/1.webp',
  alt: "عرض عمليات المطعم في PayMyDine"
}, {
  eyebrow: "4 تذاكر مطبخ",
  title: "تبقى حالات مستلمة وقيد التحضير وجاهزة ومسلّمة ظاهرة عبر سلسلة الخدمة.",
  body: "ويمكن للمطبخ أن يركز على الإعداد في حين يرى موظفو الخدمة والمديرون الوضع اللازم للتسليم التالي.",
  image: '/site-assets/kitchen/2.webp',
  alt: "فريق المطبخ يعمل باستخدام PayMyDine"
}];
export default function HowItWorksPage() {
  return <>
      <PageHero eyebrow={"تدفق العمليات على خط ٥ خطوات"} title={"حافظ على السياق من أول إجراء على الطاولة حتى آخر سؤال إداري."} intro={"تربط PayMyDine إجراءات الضيوف ومساحات العمل حسب الدور وحالة المطبخ والدفع والتقارير والذكاء الاصطناعي من دون مطالبة الجميع باستخدام الواجهة نفسها أو إعادة إدخال السياق نفسه."} image="/site-assets/extra/izakaya-phone.webp" accent="orange" />

      <section className="section howJourneySection">
        <div className="container">
          <div className="sectionHeading centerHeading howJourneyHeading">
            <span className="eyebrow">إجراءات الضيوف تبقى جزءًا من عمل المطعم</span>
            <h2>يجب أن ينشئ الإجراء على الهاتف مهمة الطاولة أو الخدمة أو الدفع المناسبة للفريق.</h2>
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
              <span className="eyebrow">خمس نقاط تسليم واضحة</span>
              <h2>في كل خطوة، حدّد الإجراء والسياق والدور المسؤول والحالة الظاهرة.</h2>
            </div>
            <p>يجعل ذلك سير العمل قابلًا للاختبار: يمكن للفرق رؤية أين تضيع المعلومات، وأين تتكرر الحالة، وأين يجب أن يتولى التكامل أو مساحة العمل المهمة.</p>
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
            <span className="eyebrow">ما وراء رحلة الضيف</span>
            <h2>تحوّل مساحات العمل حسب الدور وحالات التذاكر الظاهرة الإجراءات الرقمية إلى عمل واضح المسؤولية داخل المطعم.</h2>
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

      <CTA title={"ارسم رحلة حقيقية واحدة في مطعمك عبر الخطوات الخمس."} body={"أحضر حجزاً، طلب طاولة، تسليم مطبخ أو تدفق مدفوعات وسنحدد الإجراءات والسياق والدور والوضع والمقاييس في كل خطوة."} primaryLabel={"احجز عرضًا توضيحيًا"} primaryHref="/ar/contact" secondaryLabel={"استكشف مجالات المنتج التسعة"} secondaryHref="/ar/platform" />
    </>;
}
