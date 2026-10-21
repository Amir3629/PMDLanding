import { Icon } from './Icons';

export default function CTA({
  title = 'See PayMyDine in your restaurant.',
  body = 'Show us your current setup. We will suggest the modules and connections you need.',
  primaryLabel = 'Book a Demo',
  primaryHref = '/contact',
  secondaryLabel = 'How It Works',
  secondaryHref = '/how-it-works'
}) {
  return (
    <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">Built around your restaurant</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="ctaActions">
            <a className="button buttonLime" href={primaryHref}>{primaryLabel} <Icon name="arrow" size={17}/></a>
            <a className="button buttonOutlineLight" href={secondaryHref}>{secondaryLabel}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
