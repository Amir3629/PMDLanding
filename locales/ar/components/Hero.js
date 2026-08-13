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
            مدعوم بالذكاء الاصطناعي
            <br />
            نمو المطاعم.
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
            تساعد PayMyDine المطاعم على أتمتة الحجوزات والطلبات وعمليات المطبخ والمدفوعات وسير عمل الفرق، وتحسين كل طاولة ورحلة ضيف، وربط إدارة علاقات الضيوف (CRM) والتحليلات ضمن صورة تشغيلية حية واحدة. وتُبرز الرؤى المدعومة بالذكاء الاصطناعي ما يحتاج إلى الانتباه، مما يساعد على تقليل العمل اليدوي وأوقات الانتظار، وتسريع الخدمة، وتحسين دوران الطاولات وتجربة الضيوف، ودعم نمو الإيرادات.
          </p>

          <div className="heroButtons">

            <a className="button" href="/ar/contact">
              احجز عرضًا توضيحيًا <Icon name="arrow" size={18} />
            </a>

            <a className="button buttonGhost" href="/ar/ai">
              <Icon name="play" size={18} />
              استكشف PayMyDine AI
            </a>

          </div>

          <div className="heroProof">

            {["9 مجالات منتجات مترابطة", "6 إجراءات بمساعدة الذكاء الاصطناعي", "6 مساحات عمل حسب الدور", "مراجعة بالذكاء الاصطناعي مرتبطة بالمصادر"].map(item => <span key={item}>
                <Icon name="check" size={15} />
                {item}
              </span>)}

          </div>

        </div>


        <div className="heroVisual">

          <div className="heroImageFrame heroImageFrameClean heroRightPanel pmdHeroArtworkWrapFix">

            <img src="/site-assets/hero-platform.webp" alt={"منصة PayMyDine وتجربة الضيف"} className="heroImage pmdHeroArtworkFix" />

          </div>

        </div>

      </div>


      <div className="pmdHeroSecondaryLayerV2" aria-hidden="true">

        <img src="/site-assets/custom/home-hero-secondary-18.webp" alt="" className="pmdHeroSecondaryImageV2" />

      </div>

    </section>;
}
