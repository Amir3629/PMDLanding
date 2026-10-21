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
            لكل فريق مهامه. وللإدارة الصورة الكاملة.
          </h2>

          <p>
            ينجز الفريق عمله، وتراجع الإدارة التغييرات بمساعدة الذكاء الاصطناعي.
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
                اسأل الذكاء الاصطناعي. وراجع الأرقام.
              </h3>

              <p>
                قارن الفترات وتحقق من التغييرات حسب الفرع أو القناة أو الصنف.
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
                امسح. تصفح. اطلب. ادفع.
              </h3>

              <p>
                يربط رمز QR واحد الطاولة والطلب والدفع.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>;
}
