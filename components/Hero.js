import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix">
      <div className="heroAura heroAuraOne" />
      <div className="heroAura heroAuraTwo" />

      <div className="container heroGrid">

        <div className="heroCopy">

          <span className="eyebrow">
            9 connected product areas
          </span>

          <h1 className="pmdGrowthHeroTitle">
            AI-Powered
            <br />
            Restaurant Growth.
            <br />
            <span>
              Lower Costs.
              <br />
              Faster Service.
              <br />
              Higher Revenue.
            </span>
          </h1>

          <p className="heroText">
            PayMyDine helps restaurants automate reservations, ordering,
            kitchen, payments and team workflows, optimize every table and
            guest journey, and connect CRM and analytics in one live operating
            picture. AI-powered insights surface what needs attention, helping
            reduce manual work and wait times, speed service, improve table
            turnover and guest experience, and support revenue growth.
          </p>

          <div className="heroButtons">

            <a className="button" href="/contact">
              Book a Demo <Icon name="arrow" size={18}/>
            </a>

            <a className="button buttonGhost" href="/ai">
              <Icon name="play" size={18}/>
              Explore PayMyDine AI
            </a>

          </div>

          <div className="heroProof">

            {[
              '9 connected product areas',
              '6 AI-assisted actions',
              '6 role workspaces',
              'Source-linked AI review'
            ].map((item) => (

              <span key={item}>
                <Icon name="check" size={15}/>
                {item}
              </span>

            ))}

          </div>

        </div>


        <div className="heroVisual">

          <div className="heroImageFrame heroImageFrameClean heroRightPanel pmdHeroArtworkWrapFix">

            <img
              src="/site-assets/hero-platform.webp"
              alt="PayMyDine platform and guest experience"
              className="heroImage pmdHeroArtworkFix"
            />

          </div>

        </div>

      </div>


      <div
        className="pmdHeroSecondaryLayerV2"
        aria-hidden="true"
      >

        <img
          src="/site-assets/custom/home-hero-secondary-18.webp"
          alt=""
          className="pmdHeroSecondaryImageV2"
        />

      </div>

    </section>
  );
}
