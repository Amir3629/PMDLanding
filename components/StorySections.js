import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from '@/data/site';

export function RoleAndAISections() {

  return (

    <>

      <section className="section darkStorySection">

        <div className="container darkIntro">

          <div>

            <span className="eyebrow darkEyebrow">
              6 role workspaces + shared AI context
            </span>

            <h2>
              The right tools for every role.
            </h2>

          </div>

          <p>
            Six teams, one shared view of tables, orders and payments. AI helps managers investigate changes.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FOR OWNERS + AI
              </span>

              <h3>
                See what changed. Ask AI why.
              </h3>

              <p>
                Compare revenue, guests and orders with the source data behind each result.
              </p>

              <a href="/ai">
                Explore PayMyDine AI
                {' '}
                <Icon name="arrow" size={15}/>
              </a>

            </div>

            <img
              src={imageGroups.owner[2]}
              alt="Restaurant owner using PayMyDine"
              loading="lazy"
            />

          </article>





          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                FOR TEAMS
              </span>

              <h3>
                Keep every handoff moving.
              </h3>

              <p>
                Service, kitchen and reservations see their own tasks. Managers see what is still waiting.
              </p>

              <a href="/solutions/team">
                Compare all 6 workspaces
                {' '}
                <Icon name="arrow" size={15}/>
              </a>

            </div>

            <img
              src={imageGroups.staff[4]}
              alt="Restaurant team using PayMyDine"
              loading="lazy"
            />

          </article>


          <article className="darkStoryCard">

            <div className="darkCardCopy">

              <span>
                GUEST GROWTH
              </span>

              <h3>
                Know your returning guests.
              </h3>

              <p>
                Link visits and feedback to guest profiles, loyalty and relevant offers.
              </p>

              <a href="/solutions/guest-ordering">
                See the guest growth workflow
                {' '}
                <Icon name="arrow" size={15}/>
              </a>

            </div>

            <img
              src={imageGroups.comments[8]}
              alt="Guest QR ordering experience"
              loading="lazy"
            />

          </article>

        </div>

      </section>


      <section className="section twoUpStorySection">

        <div className="container">

          <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              PayMyDine AI across the platform
            </span>

            <h2>
              Ask your restaurant data.
            </h2>

            <p>
              Explore revenue, guests, sales and profitability. Check the source behind every answer.
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img
              src="/site-assets/custom/ai-impact-growth.webp"
              alt="Illustration showing AI-supported restaurant efficiency, revenue, table turnover and guest satisfaction increasing while costs, wait times and manual work decrease over time."
              loading="lazy"
              decoding="async"
            />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img
                src="/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp"
                alt=""
                loading="lazy"
              />

              <div>

                <span className="eyebrow">
                  Ask, compare, investigate
                </span>

                <h2>
                  See changes. Find their source.
                </h2>

                <p>
                  Explore the transactions behind a metric without switching between reports.
                </p>

              </div>

            </article>


            <article>

              <img
                src="/site-assets/home-ai-story-20261005/untitled-design-19.webp"
                alt=""
                loading="lazy"
              />

              <div>

                <span className="eyebrow">
                  Briefings, alerts & forecast support
                </span>

                <h2>
                  Turn live data into clear next steps.
                </h2>

                <p>
                  Review daily briefs, unusual changes and forecasts. Your team remains in control.
                </p>

              </div>

            </article>

          </div>


          <div className="sectionHeading centerHeading">

            <a
              className="button buttonGhost"
              href="/ai"
            >
              Explore PayMyDine AI
            </a>

          </div>

        </div>

      </section>

    </>

  );
}


export function FlexibilityAndIntegrationSections() {

  return (

    <>

      <section className="section flexibilitySection">

        <div className="container flexibilityGrid">

          <div className="flexibilityCopy">

            <span className="eyebrow">
              Configure the operation, strengthen the AI context
            </span>

            <h2>
              Set up the restaurant your way.
            </h2>

            <p>
              Choose modules, define permissions and keep reports connected to daily work.
            </p>

            <div className="featureList">

              <span>
                <Icon name="team" size={20}/>
                <b>6 role-based workspaces</b>
              </span>

              <span>
                <Icon name="chart" size={20}/>
                <b>AI-assisted questions and briefings</b>
              </span>

              <span>
                <Icon name="phone" size={20}/>
                <b>Guest menu and QR flows</b>
              </span>

              <span>
                <Icon name="link" size={20}/>
                <b>Supported POS connections</b>
              </span>

            </div>

            <a
              className="button buttonGhost"
              href="/restaurant-types"
            >
              Compare restaurant setups
            </a>

          </div>


          <div className="flexImageStack">

            <figure className="stackMain">

              <img
                src={imageGroups.table[8]}
                alt="Restaurant table experience"
                loading="lazy"
              />

            </figure>

            <figure className="stackSmall stackSmallA">

              <img
                src={imageGroups.social[11]}
                alt="Restaurant guest experience"
                loading="lazy"
              />

            </figure>

            <figure className="stackSmall stackSmallB">

              <img
                src={imageGroups.staff[1]}
                alt="Restaurant team workspace"
                loading="lazy"
              />

            </figure>

          </div>

        </div>

      </section>


      <section className="section integrationSection">

        <div className="container integrationGrid">

          <div className="integrationCopy">

            <span className="eyebrow">
              Connected systems, better AI context
            </span>

            <h2>
              Connect your existing systems.
            </h2>

            <p>
              Bring supported POS, accounting, delivery and payment data into shared reporting. Available features depend on each connection.
            </p>

            <div className="integrationNote">

              <Icon name="link" size={18}/>

              Integration and AI scope depend on the APIs,
              permissions and data fields available from each external system.

            </div>

            <a
              className="textArrow"
              href="/integrations"
            >
              Review integration scope
              {' '}
              <Icon name="arrow" size={15}/>
            </a>

          </div>


          <div className="integrationVisual">

            <div className="integrationBrand">

              <img
                src="/site-assets/logo.svg"
                alt=""
              />

              <b>
                PayMyDine
              </b>

            </div>

            <div className="integrationPills">

              {integrationFeaturePills.map((name) => (

                <span key={name}>
                  {name}
                </span>

              ))}

            </div>

            <img
              className="integrationPhoto"
              src='/site-assets/hardware-device-20261004/kiosk.webp'
              alt="POS integration concept"
              loading="lazy"
            />

          </div>

        </div>

      </section>

    </>

  );
}


export default function StorySections() {

  return (
    <>
      <RoleAndAISections />
      <FlexibilityAndIntegrationSections />
    </>
  );

}
