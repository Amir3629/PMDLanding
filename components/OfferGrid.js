import { offerCards } from '@/data/site';
import { Icon } from './Icons';

export default function OfferGrid({ compact = false }) {
  return (
    <section className={`section offerSection ${compact ? 'compactSection' : ''}`} id="what-we-offer">
      <div className="container">
        {!compact && (
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">9 connected product areas</span>
            <h2>Start with the workflow you need to improve. Keep its data connected to the rest of the restaurant.</h2>
            <p>Each area explains what the team can do, which context stays attached and which operating metric becomes easier to track. Adopt one area or combine all nine.</p>
          </div>
        )}
        <div className="offerGrid offerGridVisual">
          {offerCards.map((card) => (
            <a className="offerCard offerCardWithImage" href={card.href} key={card.title}>
              <div className="offerCardMedia"><img src={compact ? card.compactImage : card.image} alt="" loading="lazy" /></div>
              <div className="offerCardBody">
                <span className="iconBubble"><Icon name={card.icon}/></span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="cardLink">See the workflow <Icon name="arrow" size={15}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
