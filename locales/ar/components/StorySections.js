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
              امنح كل دور العمل الذي يخصه، وامنح الذكاء الاصطناعي السياق المشترك الذي يساعده على تفسير ما يحدث في أنحاء المطعم.
            </h2>

          </div>

          <p>
            يستخدم المالكون والمديرون وفريق الخدمة والمطبخ والحجوزات والمالية عروضًا مركزة، بينما يبقى سياق الطاولة والطلب والضيف والتوقيت والدفع مترابطًا. ويمكن للإدارة بعد ذلك استخدام PayMyDine AI للانتقال من الإشارة إلى بيانات المصدر التي تقف خلفها.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                للمالكين + الذكاء الاصطناعي
              </span>

              <h3>
                راجع مؤشرات الأعمال، ثم اسأل الذكاء الاصطناعي عمّا تغيّر وأين ينبغي التحقيق.
              </h3>

              <p>
                ابدأ بالإيرادات والضيوف والطاولات والحجوزات وحالة المطبخ والأصناف الأكثر مبيعًا. ثم قارن الفترات، وأبرز التحركات غير المعتادة، وافتح عرض المصدر الذي يقف خلف الإجابة.
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
                للفِرق
              </span>

              <h3>
                وجّه الإجراء التالي إلى الدور المسؤول عنه.
              </h3>

              <p>
                يرى فريق الخدمة الطاولات وطلبات الضيوف، ويرى المطبخ التذاكر والتوقيت، ويرى فريق الحجوزات الوصول والتوافر. وتمنح الحالة المشتركة الإدارة والذكاء الاصطناعي صورة أوضح عن أماكن انتظار العمل.
              </p>

              <a href="/ar/teams">
                قارن مساحات العمل الست
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.staff[4]} alt={"فريق مطعم يستخدم PayMyDine"} loading="lazy" />

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
              اسأل بيانات المطعم، لا لوحة معلومات منفصلة أخرى.
            </h2>

            <p>
              يعمل PayMyDine AI انطلاقًا من الصورة التشغيلية المتاحة بالفعل في المنصة. اسأل عن الإيرادات والضيوف ومتوسط الفاتورة ودوران الطاولات وتوقيت المبيعات والأصناف الأكثر مبيعًا ومزيج طرق الدفع والتوقعات أو الربحية، ثم ارجع بالإجابة إلى بيانات المصدر.
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img src="/site-assets/custom/ai-impact-growth.png" alt={"وزاد عدد المطاعم التي تدعمها الذكاء الاصطناعي- من حيث كفاءة المطاعم، والإيرادات، ودوران الطاولة، وترضية الضيوف، في حين انخفضت التكاليف وفترات الانتظار والعمل اليدوي بمرور الوقت."} loading="lazy" decoding="async" />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  اسأل، قارن، وتحقق
                </span>

                <h2>
                  اسأل عمّا تغيّر، وقارن الفترة، وحدد عرض المصدر الذي يستحق فتحه بعد ذلك.
                </h2>

                <p>
                  انتقل من المؤشر الرئيسي إلى سياق المطعم الذي يقف خلفه بدلًا من فحص تقارير منفصلة يدويًا لكل تفسير محتمل.
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
                  حوّل بيانات التشغيل الحية إلى مسار أقصر من الإشارة إلى قرار الإدارة.
                </h2>

                <p>
                  استخدم الموجزات اليومية المدعومة بالذكاء الاصطناعي، وتنبيهات الحالات غير المعتادة، ومقارنات الفترات، ودعم التوقعات، مع إبقاء مؤشر المصدر وفترة المقارنة والقرار البشري واضحين.
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
              حدّد الأدوار والوحدات ومخططات الصالة ورحلات الضيوف مرة واحدة، ثم استخدم البيانات المشتركة للعمل اليومي والمراجعة المدعومة بالذكاء الاصطناعي.
            </h2>

            <p>
              ابدأ بالمطعم الذي تديره بالفعل. اختر مجالات المنتج التي تقلل تكرار العمل، وحدد من يمكنه رؤية كل أداة تحكم، وحافظ على السياق الذي تحتاج إليه الإدارة للتقارير والمقارنات والأسئلة المدعومة بالذكاء الاصطناعي.
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
              اربط الأنظمة التي تحتوي بالفعل على بيانات المطعم حتى تعمل العمليات والتقارير والذكاء الاصطناعي انطلاقًا من صورة أوسع.
            </h2>

            <p>
              يمكن لتكاملات POS والمحاسبة والتوصيل والدفع المدعومة أن تضيف بيانات مصدر مفيدة إلى التقارير المركزية ومقارنة الفروع والمخزون ومسارات الربحية. وكلما كانت صورة البيانات المسموح بها أكثر اكتمالًا، أصبحت المقارنات والتحقيقات المدعومة بالذكاء الاصطناعي أكثر فائدة.
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
