import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from "@/locales/ar/data/site";
export function RoleAndAISections() {
  return <>

      <section className="section darkStorySection">

        <div className="container darkIntro">

          <div>

            <span className="eyebrow darkEyebrow">
              6 دور في أماكن العمل + السياق المشترك بين AI
            </span>

            <h2>
              أعط كل دور ما تملكه
(و) إعطاء (ز.ك.ك.إكس) السياق المشترك للمساعدة في شرح
ما يحدث عبر المطعم
            </h2>

          </div>

          <p>
            المالكون والمديرون وموظفو الخدمات والمطبخ والتحفظات والتمويل
استخدام وجهات النظر المركزة في حين الجدول، والنظام، والضيوف، والتوقيت، والدفع
السياق يبقى متصلاً ويمكن للإدارة بعد ذلك أن تستخدم PayMyDine AI إلى
تنتقل من إشارة إلى بيانات المصدر خلفها
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FOR OWNERS + AI
              </span>

              <h3>
                راجع اشارات العمل
ثم اسأل AI الذي تغير وأين للتحقيق.
              </h3>

              <p>
                نبدأ بالإيرادات، الضيوف، الطاولات، التحفظات
وضعية المطبخ وأشياء البيع
ثمّ يُقارنُ الفتراتَ، حركة سطحية غير عادية وفتح
نظرة المصدر وراء الجواب.
              </p>

              <a href="/ar/ai">
                (استكشف (بيادين آي
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.owner[2]} alt={"مالك المطعم باستخدام PayMyDine"} loading="lazy" />

          </article>


          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                FOR TEAMS
              </span>

              <h3>
                در العمل التالي إلى الدور المسؤول عنه.
              </h3>

              <p>
                موظفو الخدمة يرون الطاولات وطلبات الضيوف
المطبخ يرى التذاكر والتوقيت
وتنظر التحفظات إلى الوافدين وتوافرهم.
المركز المتقاسم يعطي الإدارة ويعطي AI صورة أوضح
من حيث ينتظر العمل
              </p>

              <a href="/ar/teams">
                مقارنة بجميع أماكن العمل الستة
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.staff[4]} alt={"فريق المطاعم باستخدام PayMyDine"} loading="lazy" />

          </article>


          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                GUEST GROWTH
              </span>

              <h3>
                تحويل الزيارات، والأوامر، والتغذية المرتدة إلى صورة أكثر فائدة للضيوف.
              </h3>

              <p>
                الملامح والولاء والعروض والحملات والتغذية المرتدة والاحتفاظ بها
يمكن أن تظل الإشارات مرتبطة بتاريخ الزيارة الذي أنشأ
وهي تتيح للإدارة سياقا أفضل للقرارات في المستقبل.
              </p>

              <a href="/ar/solutions/guest-ordering">
                انظر تدفق عمل نمو الضيوف
                {' '}
                <Icon name="arrow" size={15} />
              </a>

            </div>

            <img src={imageGroups.comments[8]} alt={"الضيوف يطلبون الخبرة"} loading="lazy" />

          </article>

        </div>

      </section>


      <section className="section twoUpStorySection">

        <div className="container">

          <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              (بي ديين آي) عبر المنصة
            </span>

            <h2>
              اسأل المطعم
ليس لوح آخر منعزل
            </h2>

            <p>
              تعمل شركة PayMyDine AI من صورة التشغيل المتاحة بالفعل في المنصة إسأل عن الإيرادات، الضيوف، الشيك المتوسط، دوران المائدة، توقيت المبيعات، أفضل البائعين، مزيج الدفع التوقعات أو الربحية، ثم تتبع الجواب إلى بيانات المصدر
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img src="/site-assets/custom/ai-impact-growth.png" alt={"وزاد عدد المطاعم التي تدعمها شركة AI- من حيث كفاءة المطاعم، والإيرادات، ودوران الطاولة، وترضية الضيوف، في حين انخفضت التكاليف وفترات الانتظار والعمل اليدوي بمرور الوقت."} loading="lazy" decoding="async" />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  إسأل، إقارن، تحقق
                </span>

                <h2>
                  إسأل ما الذي تغير، إقارن الفترة
وأجد المنظر المصدري يستحق الإفتتاح بعد ذلك
                </h2>

                <p>
                  ننتقل من مصحة رأسية إلى سياق المطعم
بدلا من التحقق يدويا من التقارير المنفصلة
لكل تفسير ممكن
                </p>

              </div>

            </article>


            <article>

              <img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" />

              <div>

                <span className="eyebrow">
                  إحاطات، تنبيهات
                </span>

                <h2>
                  تحويل بيانات التشغيل الحي إلى مسار أقصر
من إشارة إلى قرار الإدارة.
                </h2>

                <p>
                  استخدام إحاطات يومية بمساعدة من منظمة العفو الدولية، والأعلام الشاذة، مقارنات الفترة والدعم المتوقع مع الحفاظ على القياس المصدري، والمقارنة بين النافذة، واتخاذ القرار الإنساني مرئية
                </p>

              </div>

            </article>

          </div>


          <div className="sectionHeading centerHeading">

            <a className="button buttonGhost" href="/ar/ai">
              (استكشف (بيادين آي
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
              مصادرة العملية، وتعزيز سياق التنفيذ المشترك
            </span>

            <h2>
              أدوار الخرائط، الوحدات، الخرائط الأرضية ورحلات الضيوف مرة واحدة، ثم استخدام البيانات المشتركة للعمل اليومي وإستعراض مساعد
            </h2>

            <p>
              ابدأ بالمطعم الذي تديره
اختيار مجالات المنتجات التي تزيل العمل المزدوج
تحديد من يستطيع رؤية كل سيطرة والحفاظ على السياق
الاحتياجات الإدارية للإبلاغ والمقارنات
أسئله
            </p>

            <div className="featureList">

              <span>
                <Icon name="team" size={20} />
                <b>6 أماكن عمل قائمة على الدور</b>
              </span>

              <span>
                <Icon name="chart" size={20} />
                <b>أسئلة وجلسات إحاطة</b>
              </span>

              <span>
                <Icon name="phone" size={20} />
                <b>قائمة الضيوف وتدفقات QR</b>
              </span>

              <span>
                <Icon name="link" size={20} />
                <b>دعم وصلات POS</b>
              </span>

            </div>

            <a className="button buttonGhost" href="/ar/restaurant-types">
              مرافق المطعم
            </a>

          </div>


          <div className="flexImageStack">

            <figure className="stackMain">

              <img src={imageGroups.table[8]} alt={"تجربة طاولة المطاعم"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallA">

              <img src={imageGroups.social[11]} alt={"خبرة الضيوف المطاعم"} loading="lazy" />

            </figure>

            <figure className="stackSmall stackSmallB">

              <img src={imageGroups.staff[1]} alt={"مكان عمل فريق المطاعم"} loading="lazy" />

            </figure>

          </div>

        </div>

      </section>


      <section className="section integrationSection">

        <div className="container integrationGrid">

          <div className="integrationCopy">

            <span className="eyebrow">
              نظم متصلة، سياق أفضل من طراز AI
            </span>

            <h2>
              ربط النظم التي لديها بالفعل بيانات المطعم
ومن ثم، فإن العمليات والإبلاغ و AI يمكن أن تعمل من صورة أوسع.
            </h2>

            <p>
              دعم عمليات حفظ السلام والمحاسبة والتسليم والمدفوعات (ب) يمكن أن تسهم ببيانات مصادر مفيدة في الإبلاغ المركزي؛ مقارنة الموقع والمخزون وتدفقات العمل المتعلقة بالربحية. كلما اكتملت صورة المصدر المسموح بها ويمكن أن تكون المقارنات والتحقيقات الأكثر فائدة التي تدعمها المنظمة.
            </p>

            <div className="integrationNote">

              <Icon name="link" size={18} />

              ويتوقف نطاق الدمج وزكس كي 14QXZ على التردد APIs،
التصاريح ومجالات البيانات المتاحة من كل نظام خارجي.

            </div>

            <a className="textArrow" href="/ar/integrations">
              نطاق التكامل
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

            <img className="integrationPhoto" src={imageGroups.comments[16]} alt={"مفهوم التكامل في نظام التشغيل الموحد"} loading="lazy" />

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
