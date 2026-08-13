import { imageGroups } from "@/locales/ar/data/site";
const imageSets = {
  home: [imageGroups.pos[0], imageGroups.payment[1]],
  platform: ['/site-assets/social/8.webp', imageGroups.payment[3]],
  demo: [imageGroups.comments[15], imageGroups.table[10]]
};
export default function InteractiveDemos({
  variant = 'home'
}) {
  const [ownerImage, guestImage] = imageSets[variant] || imageSets.home;
  return <section className="section demoSection" id="demo">

      <div className="container">

        <div className="sectionHeading centerHeading demoSectionHeading">

          <span className="eyebrow">
            عمليات للأشخاص. سياق للذكاء الاصطناعي.
          </span>

          <h2>
            الأفرقة تحصل على شاشات مركزة.
الإدارة تحصل على الصورة الأوسع.
AI يساعد على ربط الإشارات بينهما.
          </h2>

          <p>
            تحتفظ شركة &quot; بي ديين &quot; بوصلات تفاعلية يومية للأشخاص الذين يقومون بها العمل أثناء جمع سياق المطعم المشترك من أجل الإبلاغ والاستعراض المدعوم من منظمة العفو الدولية. النتيجة ليست أخرى ثرثرة معزولة - إنها مساعدة مبنية حول العملية يحدث بالفعل في المطعم.
          </p>

        </div>


        <div className="demoShowcaseGrid">

          <article className="demoShowcaseCard demoShowcaseWide">

            <div className="demoShowcaseMedia demoShowcaseMediaProduct">

              <img src={ownerImage} alt={"شركة PayMyDine"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                مالك، إدارة AI
              </span>

              <h3>
                انظر صورة العمل، ثم أطلب من AI لشرح الحركة
عبر الإيرادات والضيوف والطاولات والأوامر والربحية
              </h3>

              <p>
                انتقل من متر رفيع المستوى إلى وجهة نظر المصدر خلفه،
مقارنة الفترات، والتغييرات غير العادية السطحية، واتخاذ قرار
يحتاج الطابق أو القناة أو الفئة أو البند إلى تحقيق.
              </p>

            </div>

          </article>


          <article className="demoShowcaseCard">

            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">

              <img src={guestImage} alt={"تجربة ضيوف (بي دي)"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                رحلة ضيافة
              </span>

              <h3>
                أربعة إجراءات واضحة:
مسح، برووز، طلب ودفع.
              </h3>

              <p>
                تُبقي الرحلة على الضيوف والطاولة والنظام والدفع سياق متصل بالمغادرة تلك التفاعلات أيضا تصبح بيانات تشغيلية منظمة للإبلاغ مراجعة مدعومة
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
