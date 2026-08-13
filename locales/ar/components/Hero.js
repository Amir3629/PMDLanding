import { Icon } from './Icons';
export default function Hero() {
  return <section className="hero section pmdHeroFullBleedFix">
      <div className="heroAura heroAuraOne" />
      <div className="heroAura heroAuraTwo" />

      <div className="container heroGrid">

        <div className="heroCopy">

          <span className="eyebrow">
            9 مجالات منتجات مترابطة
          </span>

          <h1 className="pmdGrowthHeroTitle">
            مدعوم بالـ AI
            <br />
            نمو المطعم.
            <br />
            <span>
              تكاليف أقل.
              <br />
              خدمة أسرع.
              <br />
              إيرادات أعلى.
            </span>
          </h1>

          <p className="heroText">
            (بياميدين) يساعد المطاعم على التحفّظات المؤتمتة، المطابخ والمدفوعات وتدفقات عمل الفريق، تحقيق أقصى قدر ممكن من كل طاولة رحلة ضيافة، وربط إدارة المخاطر المؤسسية والمحللين في أحد العمليات الحية صورة يُظهر ما يحتاج إلى الاهتمام، يساعد الحد من العمل اليدوي و أوقات الانتظار، والخدمة السريعة، وتحسين الجدول التناوب وتجربة الضيوف ودعم نمو الإيرادات
          </p>

          <div className="heroButtons">

            <a className="button" href="/ar/contact">
              احجز عرضًا توضيحيًا <Icon name="arrow" size={18} />
            </a>

            <a className="button buttonGhost" href="/ar/ai">
              <Icon name="play" size={18} />
              (استكشف (بيادين آي
            </a>

          </div>

          <div className="heroProof">

            {["9 مجالات منتجات مترابطة", "6 إجراءات مدعومة من منظمة العفو الدولية", "6 أماكن عمل", "استعراض الاستثمار الأجنبي المباشر المرتبط بالمصدر"].map(item => <span key={item}>
                <Icon name="check" size={15} />
                {item}
              </span>)}

          </div>

        </div>


        <div className="heroVisual">

          <div className="heroImageFrame heroImageFrameClean heroRightPanel pmdHeroArtworkWrapFix">

            <img src="/site-assets/hero-platform.webp" alt={"منصة بي ميدين وتجربة ضيوف"} className="heroImage pmdHeroArtworkFix" />

          </div>

        </div>

      </div>


      <div className="pmdHeroSecondaryLayerV2" aria-hidden="true">

        <img src="/site-assets/custom/home-hero-secondary-18.webp" alt="" className="pmdHeroSecondaryImageV2" />

      </div>

    </section>;
}
