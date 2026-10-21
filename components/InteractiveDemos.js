import { imageGroups } from '@/data/site';

const imageSets = {

  home: [
    '/site-assets/home-demo-20261005/untitled-design-18.webp',
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
            One view for each team. One overview for managers.
          </h2>

          <p>
            Staff handle their work. Managers see the full picture and can investigate changes with AI.
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
                Ask AI what changed. Check the numbers.
              </h3>

              <p>
                Compare periods and explore changes by location, channel or item.
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
                Scan. Browse. Order. Pay.
              </h3>

              <p>
                One QR journey links the table, order and payment for guests and staff.
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>

  );
}
