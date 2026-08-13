import { offerCards } from '@/data/site';
import { Icon } from './Icons';

export default function OfferGrid({ compact = false }) {
  return (
    <section
      className={`section offerSection ${compact ? 'compactSection' : ''}`}
      id="what-we-offer"
    >

      <div className="container">

        {!compact && (

          <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              9 connected product areas
            </span>

            <h2>
              Nine connected areas create one operating picture —
              and give PayMyDine AI the context to explain what changed.
            </h2>

            <p>
              Each area solves a real restaurant workflow on its own.
              Connected together, reservations, tables, orders, kitchen,
              payments, guests, teams, analytics and integrations create
              the context AI can use to compare periods, flag unusual
              movement, support forecasts and point management toward
              what deserves attention next.
            </p>

          </div>

        )}

        <div className="offerGrid offerGridVisual">

          {offerCards.map((card) => (

            <a
              className="offerCard offerCardWithImage"
              href={card.href}
              key={card.title}
            >

              <div className="offerCardMedia">

                <img
                  src={compact ? card.compactImage : card.image}
                  alt=""
                  loading="lazy"
                />

              </div>

              <div className="offerCardBody">

                <span className="iconBubble">
                  <Icon name={card.icon}/>
                </span>

                <h3>{card.title}</h3>

                <p>{card.body}</p>

                <span className="cardLink">
                  See the workflow
                  {' '}
                  <Icon name="arrow" size={15}/>
                </span>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}
