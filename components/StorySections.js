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
              Give each role the work it owns —
              and give AI the shared context to help explain
              what is happening across the restaurant.
            </h2>

          </div>

          <p>
            Owners, managers, service staff, kitchen, reservations and finance
            use focused views while table, order, guest, timing and payment
            context stays connected. Management can then use PayMyDine AI to
            move from a signal to the source data behind it.
          </p>

        </div>


        <div className="container darkStoryGrid">

          <article className="darkStoryCard wideDarkCard">

            <div className="darkCardCopy">

              <span>
                FOR OWNERS + AI
              </span>

              <h3>
                Review the business signals,
                then ask AI what changed and where to investigate.
              </h3>

              <p>
                Start with revenue, guests, tables, reservations,
                kitchen status and top-selling items.
                Then compare periods, surface unusual movement and open
                the source view behind the answer.
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
                Route the next action to the role responsible for it.
              </h3>

              <p>
                Service staff sees tables and guest requests.
                Kitchen sees tickets and timing.
                Reservations sees arrivals and availability.
                Shared status gives management and AI a clearer picture
                of where work is waiting.
              </p>

              <a href="/teams">
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
                Turn visits, orders and feedback into a more useful guest picture.
              </h3>

              <p>
                Profiles, loyalty, offers, campaigns, feedback and retention
                signals can remain connected to the visit history that created
                them, giving management better context for future decisions.
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
              Ask the restaurant,
              not another isolated dashboard.
            </h2>

            <p>
              PayMyDine AI works from the operating picture already available
              in the platform. Ask about revenue, guests, average check,
              table turnover, sales timing, best sellers, payment mix,
              forecasts or profitability, then trace the answer back to
              the source data.
            </p>

          </div>


          {/* === PMD AI IMPACT GRAPH V6 START === */}

          <figure className="pmdAiImpactVisual">

            <img
              src="/site-assets/custom/ai-impact-growth.png"
              alt="Illustration showing AI-supported restaurant efficiency, revenue, table turnover and guest satisfaction increasing while costs, wait times and manual work decrease over time."
              loading="lazy"
              decoding="async"
            />

          </figure>

          {/* === PMD AI IMPACT GRAPH V6 END === */}


          <div className="twoUpStoryGrid">

            <article>

              <img
                src="/site-assets/extra/manager-analytics.webp"
                alt=""
                loading="lazy"
              />

              <div>

                <span className="eyebrow">
                  Ask, compare, investigate
                </span>

                <h2>
                  Ask what changed, compare the period
                  and find the source view worth opening next.
                </h2>

                <p>
                  Move from a headline metric into the restaurant context
                  behind it instead of manually checking separate reports
                  for every possible explanation.
                </p>

              </div>

            </article>


            <article>

              <img
                src="/site-assets/extra/tablet-dashboard.webp"
                alt=""
                loading="lazy"
              />

              <div>

                <span className="eyebrow">
                  Briefings, alerts & forecast support
                </span>

                <h2>
                  Turn live operating data into a shorter path
                  from signal to management decision.
                </h2>

                <p>
                  Use AI-assisted daily briefings, anomaly flags,
                  period comparisons and forecast support while keeping
                  the source metric, comparison window and human decision
                  visible.
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
              Map roles, modules, floor maps and guest journeys once,
              then use the shared data for both daily work
              and AI-assisted review.
            </h2>

            <p>
              Start with the restaurant you already run.
              Choose which product areas remove duplicate work,
              define who can see each control and preserve the context
              that management needs for reporting, comparisons and
              AI-assisted questions.
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
              Connect the systems that already hold restaurant data
              so operations, reporting and AI can work from a wider picture.
            </h2>

            <p>
              Supported POS, accounting, delivery and payment connections
              can contribute useful source data to central reporting,
              location comparison, inventory and profitability workflows.
              The more complete the permitted source picture is,
              the more useful AI-assisted comparisons and investigations can be.
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
              src={imageGroups.comments[16]}
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
