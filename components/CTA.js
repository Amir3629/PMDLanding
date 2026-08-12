import { Icon } from './Icons';

export default function CTA({
  title = 'Ready to map PayMyDine to your restaurant?',
  body = 'Bring your current tools, roles, handoffs and operating metrics. We will show which product areas replace duplicate work and which systems should remain connected.',
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
            <span className="eyebrow lightEyebrow">Map the real operation</span>
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
