import { Icon } from './Icons';
const number = index => String(index + 1).padStart(2, '0');
export default function ProductDetailSections({
  details,
  productName = "مجال المنتج هذا"
}) {
  if (!details) return null;
  const facts = details.facts || [];
  const workflow = details.workflow || [];
  const roleViews = details.roleViews || [];
  const metrics = details.metrics || [];
  const implementation = details.implementation || [];
  const faqs = details.faqs || [];
  return <>
      {facts.length > 0 && <section className="section highlightSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.factsEyebrow || `${productName} — نظرة سريعة`}</span>
              <h2>{details.factsTitle || "ما الذي يتضمنه هذا المجال، ومن يستخدمه، وما الذي يبقى مترابطًا."}</h2>
              <p>{details.factsIntro || "هذه حقائق عن نطاق المنتج وليست وعودًا بنتائج أداء للعملاء."}</p>
            </div>
            <div className="highlightGrid">
              {facts.map(([value, title, body]) => <article className="highlightCard" key={`${value}-${title}`}>
                  <span>{value}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {workflow.length > 0 && <section className="section howFlowSection">
          <div className="container">
            <div className="splitHeading howFlowHeading">
              <div>
                <span className="eyebrow">{details.workflowEyebrow || `سير عمل ${productName}`}</span>
                <h2>{details.workflowTitle || "كيف ينتقل العمل من الإشارة الأولى إلى إجراء مكتمل."}</h2>
              </div>
              <p>{details.workflowIntro || "تحافظ كل خطوة على سياق المطعم بينما تنتقل المسؤولية إلى الدور التالي."}</p>
            </div>
            <div className="howFlowGrid">
              {workflow.map(([title, body], index) => <article className="howFlowCard" key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {roleViews.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.rolesEyebrow || "ما الذي يراه كل دور"}</span>
              <h2>{details.rolesTitle || "سياق المطعم نفسه معروض بما يناسب المسؤوليات المختلفة."}</h2>
              <p>{details.rolesIntro || "تقلل العروض حسب الدور ازدحام الواجهة من دون إنشاء نسخ منفصلة من المطعم."}</p>
            </div>
            <div className="companyValueCards">
              {roleViews.map(([title, body]) => <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {metrics.length > 0 && <section className="section pricingSection">
          <div className="container">
            <div className="sectionHeading centerHeading">
              <span className="eyebrow">{details.metricsEyebrow || "قياس سير العمل"}</span>
              <h2>{details.metricsTitle || "حدّد خط أساس قبل الادعاء بوجود تحسن."}</h2>
              <p>{details.metricsIntro || "تعتمد المؤشرات المتاحة بدقة على الوحدات والتكاملات وبيانات الأحداث الموجودة في البيئة المُعدّة."}</p>
            </div>
            <div className="pricingFactorGrid">
              {metrics.map(([title, body], index) => <article key={title}>
                  <span>{number(index)}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}

      {implementation.length > 0 && <section className="section capabilitySection">
          <div className="container capabilityPanel">
            <div>
              <span className="eyebrow">{details.implementationEyebrow || "متطلبات الإعداد والبيانات"}</span>
              <h2>{details.implementationTitle || "حدّد قواعد التشغيل قبل تقييم أداء سير العمل."}</h2>
              <p>{details.implementationIntro || "يجب أن يوثّق التنفيذ مصدر الحقيقة وملكية الأدوار وتعريفات الحالات وطريقة القياس."}</p>
            </div>
            <div className="capabilityList">
              {implementation.map(item => <span key={item}><Icon name="check" size={16} />{item}</span>)}
            </div>
          </div>
        </section>}

      {faqs.length > 0 && <section className="section companyValues">
          <div className="container companyValuesGrid">
            <div>
              <span className="eyebrow">{details.faqEyebrow || "أسئلة عملية"}</span>
              <h2>{details.faqTitle || "ما الذي ينبغي توضيحه قبل اختيار النطاق."}</h2>
              <p>{details.faqIntro || "قد تعتمد الإجابة الدقيقة على إعداد المطعم والوحدات المختارة والأنظمة المتصلة."}</p>
            </div>
            <div className="companyValueCards">
              {faqs.map(([title, body]) => <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>)}
            </div>
          </div>
        </section>}
    </>;
}
