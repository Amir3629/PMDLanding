import { offerCards } from '@/data/site';
import { Icon } from './Icons';

export default function OfferGrid({ compact = false }) {
  return (
    <section className={`section offerSection ${compact ? 'compactSection' : ''}`} id="what-we-offer">
      <div className="container">
        {!compact && (
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">The PayMyDine operating layer</span>
            <h2>Give guests, teams and ownership the right experience around the same restaurant day.</h2>
            <p>Use the capabilities that fit your operation now, then extend the setup as roles, workflows and priorities change.</p>
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
                <span className="cardLink">Explore <Icon name="arrow" size={15}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
