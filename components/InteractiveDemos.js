import { imageGroups } from '@/data/site';

const imageSets = {

  home: [
    imageGroups.pos[0],
    imageGroups.payment[1]
  ],

  platform: [
    '/site-assets/social/8.webp',
    imageGroups.payment[3]
  ],

  demo: [
    imageGroups.comments[15],
    imageGroups.table[10]
  ]

};

export default function InteractiveDemos({ variant = 'home' }) {

  const [ownerImage, guestImage] =
    imageSets[variant] || imageSets.home;

  return (

    <section
      className="section demoSection"
      id="demo"
    >

      <div className="container">

        <div className="sectionHeading centerHeading demoSectionHeading">

          <span className="eyebrow">
            Operations for people. Context for AI.
          </span>

          <h2>
            Teams get focused screens.
            Management gets the wider picture.
            AI helps connect the signals between them.
          </h2>

          <p>
            PayMyDine keeps daily interfaces practical for the people doing
            the work while collecting the shared restaurant context needed
            for reporting and AI-assisted review. The result is not another
            isolated chatbot — it is assistance built around the operation
            already happening in the restaurant.
          </p>

        </div>


        <div className="demoShowcaseGrid">

          <article className="demoShowcaseCard demoShowcaseWide">

            <div className="demoShowcaseMedia demoShowcaseMediaProduct">

              <img
                src={ownerImage}
                alt="PayMyDine owner and restaurant operations workflow"
                loading="lazy"
              />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Owner, management & AI
              </span>

              <h3>
                See the business picture, then ask AI to explain movement
                across revenue, guests, tables, orders and profitability.
              </h3>

              <p>
                Move from a high-level metric to the source view behind it,
                compare periods, surface unusual changes and decide which
                floor, channel, category or item needs investigation.
              </p>

            </div>

          </article>


          <article className="demoShowcaseCard">

            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">

              <img
                src={guestImage}
                alt="PayMyDine guest experience"
                loading="lazy"
              />

            </div>

            <div className="demoShowcaseCopy">

              <span>
                Guest journey
              </span>

              <h3>
                Four clear actions:
                scan, browse, order and pay.
              </h3>

              <p>
                The table QR journey keeps guest, table, order and payment
                context connected through checkout. Those interactions also
                become structured operating data for reporting and
                AI-assisted review.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>

  );
}
