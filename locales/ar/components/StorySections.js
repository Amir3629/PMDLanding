import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from "@/locales/ar/data/site";
export function RoleAndAISections() {
  return <>

      <section className="section darkStorySection">

        <div className="container darkIntro">

          <div>

            <span className="eyebrow darkEyebrow">
              6 مساحات عمل حسب الدور + سياق مشترك للذكاء الاصطناعي
            </span>

            <h2>
              الأدوات المناسبة لكل فريق.
            </h2>

          </div>

          <p>
            ستة فرق تتشارك بيانات الطاولات والطلبات والمدفوعات. ويساعد الذكاء الاصطناعي على مراجعة التغييرات.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                للمالكين + الذكاء الاصطناعي
              </span>

              <h3>
                اعرف ما تغيّر. واسأل الذكاء الاصطناعي.
              </h3>

              <p>
                قارن الإيرادات والضيوف والطلبات مع بياناتها الأصلية.
              </p>

              <a href="/ar/ai">
                استكشف PayMyDine AI
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.owner[2]} alt={"مالك مطعم يستخدم PayMyDine"} loading="lazy" />

          </article>





          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                نمو الضيوف
              </span>

              <h3>
                حوّل الزيارات والطلبات والملاحظات إلى صورة أكثر فائدة عن الضيف.
              </h3>

              <p>
                يمكن أن تبقى ملفات الضيوف والولاء والعروض والحملات والملاحظات وإشارات الاحتفاظ مرتبطة بسجل الزيارات الذي أنشأها، مما يمنح الإدارة سياقًا أفضل للقرارات المستقبلية.
              </p>

              <a href="/ar/solutions/guest-ordering">
                استعرض سير عمل نمو الضيوف
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.comments[8]} alt={"تجربة الطلب عبر QR للضيف"} loading="lazy" />

          </article>

        </div>

      </section>


      <section className="section twoUpStorySection">

        <div className="container">

          <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              PayMyDine AI عبر المنصة
            </span>

            <h2>
              اسأل بيانات مطعمك.
            </h2>

            <p>
              راجع الإيرادات والضيوف والمبيعات والربحية، وارجع إلى مصدر كل إجابة.
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img src="/site-assets/custom/ai-impact-growth.webp" alt={"وزاد عدد المطاعم التي تدعمها الذكاء الاصطناعي- من حيث كفاءة المطاعم، والإيرادات، ودوران الطاولة، وترضية الضيوف، في حين انخفضت التكاليف وفترات الانتظار والعمل اليدوي بمرور الوقت."} loading="lazy" decoding="async" />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img src="/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  اسأل، قارن، وتحقق
                </span>

                <h2>
                  اكتشف التغييرات وتحقق من مصادرها.
                </h2>

                <p>
                  انتقل من المؤشر مباشرة إلى بيانات المطعم المرتبطة به.
                </p>

              </div>

            </article>


            <article>

              <img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  الموجزات والتنبيهات ودعم التوقعات
                </span>

                <h2>
                  من البيانات المباشرة إلى الخطوة التالية.
                </h2>

                <p>
                  راجع الملخصات اليومية والتنبيهات والتوقعات. القرار يبقى لفريقك.
                </p>

              </div>

            </article>

          </div>


          <div className="sectionHeading centerHeading">

            <a className="button buttonGhost" href="/ar/ai">
              استكشف PayMyDine AI
            </a>

          </div>

        </div>

      </section>

    </>;
}
export function FlexibilityAndIntegrationSections() {
  return <>

      <section className="section flexibilitySection">

        <div className="container flexibilityGrid">

          <div className="flexibilityCopy">

            <span className="eyebrow">
              اضبط التشغيل وعزّز سياق الذكاء الاصطناعي
            </span>

            <h2>
              اضبط PayMyDine بما يناسب مطعمك.
            </h2>

            <p>
              اختر الوحدات وحدد الصلاحيات واربط التقارير بسير العمل اليومي.
            </p>

            <div className="featureList">

              <span>
                <Icon name="team" size={20} />
                <b>6 مساحات عمل حسب الدور</b>
              </span>

              <span>
                <Icon name="chart" size={20} />
                <b>أسئلة وموجزات بمساعدة الذكاء الاصطناعي</b>
              </span>

              <span>
                <Icon name="phone" size={20} />
                <b>قائمة الضيف ومسارات QR</b>
              </span>

              <span>
                <Icon name="link" size={20} />
                <b>تكاملات POS المدعومة</b>
              </span>

            </div>

            <a className="button buttonGhost" href="/ar/restaurant-types">
              قارن إعدادات المطاعم
            </a>

          </div>


          <div className="flexImageStack">

            <figure className="stackMain">

              <img src={imageGroups.table[8]} alt={"تجربة الطاولة في المطعم"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallA">

              <img src={imageGroups.social[11]} alt={"تجربة ضيف المطعم"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallB">

              <img src={imageGroups.staff[1]} alt={"مساحة عمل فريق المطعم"} loading="lazy" />

            </figure>

          </div>

        </div>

      </section>


      <section className="section integrationSection">

        <div className="container integrationGrid">

          <div className="integrationCopy">

            <span className="eyebrow">
              أنظمة مترابطة، وسياق أفضل للذكاء الاصطناعي
            </span>

            <h2>
              اربط أنظمتك الحالية.
            </h2>

            <p>
              استخدم بيانات أنظمة الكاشير والمحاسبة والتوصيل والدفع المدعومة في التقارير.
            </p>

            <div className="integrationNote">

              <Icon name="link" size={18} />

              يعتمد نطاق التكامل والذكاء الاصطناعي على واجهات API والصلاحيات وحقول البيانات المتاحة من كل نظام خارجي.

            </div>

            <a className="textArrow" href="/ar/integrations">
              راجع نطاق التكامل
              {' '}
              <Icon name="arrow" size={15} />
            </a>

          </div>


          <div className="integrationVisual">

            <div className="integrationBrand">

              <img src="/site-assets/logo.svg" alt="" />

              <b>
                PayMyDine
              </b>

            </div>

            <div className="integrationPills">

              {integrationFeaturePills.map(name => <span key={name}>
                  {name}
                </span>)}

            </div>

            <img className="integrationPhoto" src={imageGroups.comments[16]} alt={"تصور تكامل POS"} loading="lazy" />

          </div>

        </div>

      </section>

    </>;
}
export default function StorySections() {
  return <>
      <RoleAndAISections />
      <FlexibilityAndIntegrationSections />
    </>;
}
