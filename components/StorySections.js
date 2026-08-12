import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from '@/data/site';

export function RoleAndAISections() {
  return (
    <>
      <section className="section darkStorySection">
        <div className="container darkIntro">
          <div>
            <span className="eyebrow darkEyebrow">6 role workspaces</span>
            <h2>Give each role the actions it owns without creating six versions of the restaurant.</h2>
          </div>
          <p>Owners, managers, front of house, kitchen, reservations and finance can use focused views while table, order, guest and payment context stays connected.</p>
        </div>
        <div className="container darkStoryGrid">
          <article className="darkStoryCard wideDarkCard">
            <div className="darkCardCopy"><span>FOR OWNERS</span><h3>Review six business signals without opening six team screens.</h3><p>See revenue, guests, tables, reservations, kitchen status and top-selling items, then ask what changed and where to look next.</p><a href="/teams/owner">See the owner workspace <Icon name="arrow" size={15}/></a></div>
            <img src={imageGroups.owner[2]} alt="Restaurant owner using PayMyDine" loading="lazy" />
          </article>
          <article className="darkStoryCard">
            <div className="darkCardCopy"><span>FOR TEAMS</span><h3>Route the next action to the role responsible for it.</h3><p>Front of house sees tables and guest requests. Kitchen sees tickets and timing. Reservations sees arrivals and availability.</p><a href="/teams">Compare all 6 workspaces <Icon name="arrow" size={15}/></a></div>
            <img src={imageGroups.staff[4]} alt="Restaurant team using PayMyDine" loading="lazy" />
          </article>
          <article className="darkStoryCard">
            <div className="darkCardCopy"><span>GUEST GROWTH</span><h3>Use six CRM tools to turn visit history into relevant follow-up.</h3><p>Profiles, loyalty, offers, campaigns, feedback and retention signals can stay attached to a clearer guest record.</p><a href="/solutions/guest-ordering">See the guest growth workflow <Icon name="arrow" size={15}/></a></div>
            <img src={imageGroups.comments[8]} alt="Guest QR ordering experience" loading="lazy" />
          </article>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">PayMyDine AI</span>
            <h2>Ask practical questions about nine operating and profitability metrics.</h2>
            <p>Use AI assistance to summarise a period, compare locations or categories, flag unusual movement and frame the next question around the source data already visible in PayMyDine.</p>
          </div>
          <div className="twoUpStoryGrid">
            <article>
              <img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" />
              <div><span className="eyebrow">Ask the restaurant</span><h2>Move from a metric to the operating context behind it.</h2><p>Ask what changed in revenue, guest count, average check, table turnover, sales timing, best sellers, payment mix, forecast or profitability.</p></div>
            </article>
            <article>
              <img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" />
              <div><span className="eyebrow">Decision support</span><h2>Keep the source, comparison period and owner decision visible.</h2><p>AI can shorten the path to an explanation, but the team still verifies the underlying data and decides what action belongs in the restaurant.</p></div>
            </article>
          </div>
          <div className="sectionHeading centerHeading"><a className="button buttonGhost" href="/ai">See AI questions and outputs</a></div>
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
            <span className="eyebrow">Configure the operating model</span>
            <h2>Map roles, modules, floor maps and guest journeys to the restaurant you already run.</h2>
            <p>Start with the current team structure and service model. Choose the product areas that remove duplicate work, define who can see each control and extend the setup as the operation changes.</p>
            <div className="featureList">
              <span><Icon name="team" size={20}/><b>6 role-based workspaces</b></span>
              <span><Icon name="map" size={20}/><b>Multiple floor maps</b></span>
              <span><Icon name="phone" size={20}/><b>Guest menu and QR flows</b></span>
              <span><Icon name="link" size={20}/><b>Supported POS connections</b></span>
            </div>
            <a className="button buttonGhost" href="/restaurant-types">Compare restaurant setups</a>
          </div>
          <div className="flexImageStack">
            <figure className="stackMain"><img src={imageGroups.table[8]} alt="Restaurant table experience" loading="lazy" /></figure>
            <figure className="stackSmall stackSmallA"><img src={imageGroups.social[11]} alt="Restaurant guest experience" loading="lazy" /></figure>
            <figure className="stackSmall stackSmallB"><img src={imageGroups.staff[1]} alt="Restaurant team workspace" loading="lazy" /></figure>
          </div>
        </div>
      </section>

      <section className="section integrationSection">
        <div className="container integrationGrid">
          <div className="integrationCopy">
            <span className="eyebrow">4 connection types plus multi-location controls</span>
            <h2>Connect supported POS, accounting, delivery and payment systems to the operating data people actually use.</h2>
            <p>Then add central reporting, shared menus, location comparison, inventory, food-cost and purchasing context where the connected systems make that data available.</p>
            <div className="integrationNote"><Icon name="link" size={18}/> Integration scope depends on the APIs, permissions and data fields provided by each external system.</div>
            <a className="textArrow" href="/integrations">Review integration scope <Icon name="arrow" size={15}/></a>
          </div>
          <div className="integrationVisual">
            <div className="integrationBrand"><img src="/site-assets/logo.svg" alt=""/><b>PayMyDine</b></div>
            <div className="integrationPills">{integrationFeaturePills.map((name) => <span key={name}>{name}</span>)}</div>
            <img className="integrationPhoto" src={imageGroups.comments[16]} alt="POS integration concept" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}

export default function StorySections() {
  return <><RoleAndAISections /><FlexibilityAndIntegrationSections /></>;
}
