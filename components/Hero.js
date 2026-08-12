import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix">
      <div className="heroAura heroAuraOne" />
      <div className="heroAura heroAuraTwo" />
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">9 product areas - 6 role workspaces</span>
          <h1>Run the restaurant. <span>See what needs attention next.</span></h1>
          <p className="heroText">
            PayMyDine connects reservations, tables, ordering, kitchen, payments, guest CRM, analytics, team permissions, integrations and AI. Each role sees the work it owns while management keeps one live restaurant picture.
          </p>
          <div className="heroButtons">
            <a className="button" href="/contact">Book a Demo <Icon name="arrow" size={18}/></a>
            <a className="button buttonGhost" href="/how-it-works"><Icon name="play" size={18}/> How It Works</a>
          </div>
          <div className="heroProof">
            {['9 product areas', '6 role workspaces', '3 bill-split methods', '5-step operating flow'].map((item) => (
              <span key={item}><Icon name="check" size={15}/>{item}</span>
            ))}
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroImageFrame heroImageFrameClean heroRightPanel pmdHeroArtworkWrapFix">
            <img src="/site-assets/hero-platform.webp" alt="PayMyDine platform and guest experience" className="heroImage pmdHeroArtworkFix" />
          </div>
        </div>
      </div>
      <div className="pmdHeroSecondaryLayerV2" aria-hidden="true">
        <img
          src="/site-assets/custom/home-hero-secondary-18.webp"
          alt=""
          className="pmdHeroSecondaryImageV2"
        />
      </div>
    </section>
  );
}
