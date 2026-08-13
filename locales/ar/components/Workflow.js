import { imageGroups } from "@/locales/ar/data/site";
import { Icon } from './Icons';
const steps = [{
  title: "يبدأ الإجراء",
  body: "يمسح الضيف رمز QR للطاولة، أو يخصص الاستقبال مقعدًا لحجز، أو يفتح فريق الخدمة طلبًا، أو يغيّر المدير طاولة.",
  icon: 'operations'
}, {
  title: "يُرفق السياق",
  body: "تنتقل معلومات الطاولة والضيف والطلب والتوقيت والملاحظات والصلاحيات مع الإجراء بدل إدخالها من جديد.",
  icon: 'table'
}, {
  title: "يتلقاه الدور المسؤول",
  body: "يرى فريق الخدمة مهام الخدمة، ويرى المطبخ أعمال التحضير، بينما يرى المديرون الاستثناءات والحالة الحية.",
  icon: 'kitchen'
}, {
  title: "تكتمل الخدمة وإتمام الحساب",
  body: "يستمر التحضير وحالة الجاهزية والتسليم والدفع ضمن سياق المطعم نفسه، بما في ذلك ثلاث طرق لتقسيم الفاتورة.",
  icon: 'card'
}, {
  title: "يتحول النشاط إلى رؤى ومساعدة بالذكاء الاصطناعي",
  body: "تصبح بيانات الإيرادات والضيوف ومتوسط الفاتورة ودوران الطاولات وتوقيت المبيعات ومزيج طرق الدفع والتوقعات والربحية متاحة للتقارير والمقارنات ومراجعة الحالات غير المعتادة والأسئلة المدعومة بالذكاء الاصطناعي.",
  icon: 'chart'
}];
export default function Workflow({
  variant = 'home'
}) {
  const workflowImage = variant === 'platform' ? imageGroups.comments[11] : imageGroups.pos[1];
  return <section className="section workflowSection">

      <div className="container workflowShowcase">

        <div className="workflowShowcaseCopy">

          <span className="eyebrow">
            سير عمل من 5 خطوات + مراجعة بالذكاء الاصطناعي
          </span>

          <h2>
            كل إجراء في المطعم ينشئ سياقًا. وتحافظ PayMyDine على ترابطه حتى يتمكن الدور التالي — والذكاء الاصطناعي — من فهم ما حدث.
          </h2>

          <p>
            يتبع السياق نفسه الرحلة من إجراء الضيف أو الموظف، مرورًا بالتحضير والخدمة والدفع، وصولًا إلى التقارير. ويمكن لـ PayMyDine AI بعد ذلك المساعدة في تلخيص الفترة، ومقارنة النتائج، وإبراز التحركات غير المعتادة، وتحديد المؤشر أو عرض المصدر الذي ينبغي للإدارة مراجعته بعد ذلك.
          </p>

        </div>

        <div className="workflowShowcaseVisual">

          <img src={workflowImage} alt={"سير عمل المطعم في PayMyDine"} loading="lazy" />

        </div>

      </div>


      <div className="container">

        <div className="workflowJourneyPanel" aria-label={"رحلة تشغيل المطعم في PayMyDine"}>

          {steps.map((step, index) => <article className="workflowJourneyItem" key={step.title}>

              <div className="workflowJourneyTop">

                <span className="workflowJourneyNumber">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="workflowJourneyIcon">
                  <Icon name={step.icon} size={22} />
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.body}</p>

            </article>)}

        </div>

      </div>

    </section>;
}
