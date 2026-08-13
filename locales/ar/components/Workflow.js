import { imageGroups } from "@/locales/ar/data/site";
import { Icon } from './Icons';
const steps = [{
  title: "بدء العمل",
  body: "يقوم الضيف بمسح طاولة من طراز QR، ومقاعد الاستقبال، والحجز، وموظفي الخدمة يفتحون أمر أو يغير مدير طاولة.",
  icon: 'operations'
}, {
  title: "السياق مرفق",
  body: "الطاولات والضيوف والنظام والتوقيت والملاحظات والتصاريح تسافر مع العمل بدلا من الدخول مرة أخرى.",
  icon: 'table'
}, {
  title: "ويتلقى هذا الدور المسؤول",
  body: "وينظر موظفو الخدمات إلى العمل في مجال الخدمات، وينظر المطبخ إلى الأعمال التحضيرية، ويرى المديرون الاستثناءات والوضع الحي.",
  icon: 'kitchen'
}, {
  title: "الخدمات والفحص الكامل",
  body: "ويستمر الإعداد والوضع الجاهز والتسليم والدفع من نفس سياق المطاعم، بما في ذلك ثلاثة أساليب لتقاسم الفواتير.",
  icon: 'card'
}, {
  title: "تصبح الأنشطة ذات نظرة ثاقبة ومساعدة من طراز AI",
  body: "الإيرادات، والضيوف، ومتوسط الشيك، ودوران الطاولة، وتوقيت المبيعات، ومزيج المدفوعات، والتنبؤات، والربحية، تصبح متاحة للإبلاغ، والمقارنات، والاستعراض الشاذ، والمسائل التي تحظى بمساعدة آي.",
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
            5- خطى تدفق التشغيل + استعراض AI
          </span>

          <h2>
            كل عمل في المطعم يخلق سياقاً
PayMyDine يبقيه متصلا بذلك الدور التالي
ويمكن للزئبق ١٤٤ كيلو متر مربع أن يفهم ما حدث.
          </h2>

          <p>
            يتبع السياق نفسه الرحلة التي يقوم بها الضيوف أو الموظفون من خلال إعداد التقارير وخدمتها ودفعها. يمكن لـ (بي ديين آي) أن تساعد في تلخيص الفترة ومقارنة النتائج حركة سطحية غير عادية وتحديد وجهة نظر القياس أو المصدر الإدارة يجب أن تفحص بعد ذلك
          </p>

        </div>

        <div className="workflowShowcaseVisual">

          <img src={workflowImage} alt={"مطاعم \"بي ديين\" تعمل"} loading="lazy" />

        </div>

      </div>


      <div className="container">

        <div className="workflowJourneyPanel" aria-label={"رحلة مطعم PayMyDine"}>

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
