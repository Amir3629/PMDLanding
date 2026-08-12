import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix">
      <div className="heroAura heroAuraOne" />
      <div className="heroAura heroAuraTwo" />
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">Restaurant operating platform</span>
          <h1>Run your restaurant. <span>Delight every guest.</span></h1>
          <p className="heroText">
            PayMyDine brings guest ordering, role-based team workspaces, kitchen flow, payments, live insights and AI assistance into one restaurant operating layer.
          </p>
          <div className="heroButtons">
            <a className="button" href="/contact">Book a Demo <Icon name="arrow" size={18}/></a>
            <a className="button buttonGhost" href="/how-it-works"><Icon name="play" size={18}/> How It Works</a>
          </div>
          <div className="heroProof">
            {['Role-based workspaces', 'AI-assisted insights', 'QR guest journey', 'POS-ready flexibility'].map((item) => (
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
