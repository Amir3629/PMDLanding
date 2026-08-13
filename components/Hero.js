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

          <h1>
            Run the restaurant.
            {' '}
            <span>
              Let AI show you what needs attention next.
            </span>
          </h1>

          <p className="heroText">
            PayMyDine connects reservations, tables, ordering, kitchen,
            payments, guest CRM, analytics, team permissions and integrations
            in one operating picture. PayMyDine AI helps explain what changed,
            compare periods, surface unusual movement, support forecasts and
            guide each role toward the next decision while the source data
            stays visible.
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
