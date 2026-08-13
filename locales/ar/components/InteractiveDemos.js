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
            عمليات واضحة للفرق. وسياق أفضل للذكاء الاصطناعي.
          </span>

          <h2>
            تحصل الفرق على شاشات مركزة، وتحصل الإدارة على الصورة الأوسع، ويساعد الذكاء الاصطناعي على ربط الإشارات بينها.
          </h2>

          <p>
            تحافظ PayMyDine على بساطة الواجهات اليومية لمن ينفذون العمل، وفي الوقت نفسه تجمع سياق المطعم المشترك اللازم للتقارير والمراجعة المدعومة بالذكاء الاصطناعي. والنتيجة ليست روبوت محادثة منفصلًا آخر، بل مساعدة مبنية حول العمليات الجارية بالفعل داخل المطعم.
          </p>

        </div>


        <div className="demoShowcaseGrid">

          <article className="demoShowcaseCard demoShowcaseWide">

            <div className="demoShowcaseMedia demoShowcaseMediaProduct">

              <img src={ownerImage} alt={"سير عمل المالك وعمليات المطعم في PayMyDine"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                المالك والإدارة والذكاء الاصطناعي
              </span>

              <h3>
                اطّلع على صورة الأعمال، ثم اطلب من الذكاء الاصطناعي تفسير التغيرات في الإيرادات والضيوف والطاولات والطلبات والربحية.
              </h3>

              <p>
                انتقل من المؤشر العام إلى عرض المصدر الذي يقف خلفه، وقارن الفترات، وأبرز التغيرات غير المعتادة، وحدد أي طابق أو قناة أو فئة أو صنف يحتاج إلى التحقيق.
              </p>

            </div>

          </article>


          <article className="demoShowcaseCard">

            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">

              <img src={guestImage} alt={"تجربة الضيف مع PayMyDine"} loading="lazy" />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                رحلة الضيف
              </span>

              <h3>
                أربع خطوات واضحة: امسح، وتصفح، واطلب، وادفع.
              </h3>

              <p>
                تحافظ رحلة QR للطاولة على ترابط سياق الضيف والطاولة والطلب والدفع حتى إتمام الحساب. كما تتحول هذه التفاعلات إلى بيانات تشغيلية منظمة للتقارير والمراجعة المدعومة بالذكاء الاصطناعي.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
