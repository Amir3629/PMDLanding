import { Icon } from './Icons';
import { imageGroups, integrationFeaturePills } from '@/data/site';

export function RoleAndAISections() {
  return (
    <>
      <section className="section darkStorySection">
        <div className="container darkIntro">
          <div>
            <span className="eyebrow darkEyebrow">Built for every role</span>
            <h2>One restaurant. Different responsibilities. The right workspace for each one.</h2>
          </div>
          <p>PayMyDine separates the views people need without separating the restaurant into disconnected systems.</p>
        </div>
        <div className="container darkStoryGrid">
          <article className="darkStoryCard wideDarkCard">
            <div className="darkCardCopy"><span>FOR OWNERS</span><h3>See performance, priorities and the wider restaurant picture.</h3><p>Follow the business without living inside every operational screen.</p><a href="/teams/owner">Explore the owner workspace <Icon name="arrow" size={15}/></a></div>
            <img src={imageGroups.owner[2]} alt="Restaurant owner using PayMyDine" loading="lazy" />
          </article>
          <article className="darkStoryCard">
            <div className="darkCardCopy"><span>FOR TEAMS</span><h3>Keep the work close to the responsibility.</h3><p>Front of house, kitchen and reservation teams can each stay focused on their next action.</p><a href="/teams">Explore team workspaces <Icon name="arrow" size={15}/></a></div>
            <img src={imageGroups.staff[4]} alt="Restaurant team using PayMyDine" loading="lazy" />
          </article>
          <article className="darkStoryCard">
            <div className="darkCardCopy"><span>GUEST GROWTH</span><h3>Turn guest relationships into repeat visits and stronger growth.</h3><p>Profiles, loyalty, offers, campaigns and feedback can help the restaurant build a richer guest relationship.</p><a href="/solutions/guest-ordering">Explore guest growth <Icon name="arrow" size={15}/></a></div>
            <img src={imageGroups.comments[8]} alt="Guest QR ordering experience" loading="lazy" />
          </article>
        </div>
      </section>

      <section className="section twoUpStorySection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">PayMyDine AI</span>
            <h2>Make restaurant data easier to question, compare and understand.</h2>
            <p>AI assistance can sit alongside the operating picture to help owners and managers explore what changed, what stands out and what to ask next.</p>
          </div>
          <div className="twoUpStoryGrid">
            <article>
              <img src="/site-assets/extra/manager-analytics.webp" alt="" loading="lazy" />
              <div><span className="eyebrow">Ask the restaurant</span><h2>Move from a dashboard to a useful question.</h2><p>Use AI assistance to summarise periods, compare signals and frame follow-up questions around the restaurant information available in PayMyDine.</p></div>
            </article>
            <article>
              <img src="/site-assets/extra/tablet-dashboard.webp" alt="" loading="lazy" />
              <div><span className="eyebrow">Decision support</span><h2>Keep the source visible behind the summary.</h2><p>AI should make the picture easier to explore while owners and managers keep control of the final operational decision.</p></div>
            </article>
          </div>
          <div className="sectionHeading centerHeading"><a className="button buttonGhost" href="/ai">Explore PayMyDine AI</a></div>
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
            <span className="eyebrow">Configured around the restaurant</span>
            <h2>Choose the roles, modules and layouts that fit your operation.</h2>
            <p>PayMyDine can be shaped around the team structure, floor setup, guest journey and integration environment already in place.</p>
            <div className="featureList">
              <span><Icon name="team" size={20}/><b>Role-based team workspaces</b></span>
              <span><Icon name="map" size={20}/><b>Multiple floor maps</b></span>
              <span><Icon name="phone" size={20}/><b>Different guest menu styles</b></span>
              <span><Icon name="link" size={20}/><b>Selected POS integrations</b></span>
            </div>
            <a className="button buttonGhost" href="/restaurant-types">Explore restaurant setups</a>
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
            <span className="eyebrow">Integrations, multi-location & inventory</span>
            <h2>Connect the systems and business context behind the operation.</h2>
            <p>Bring supported POS, accounting, delivery and payment connections together with central owner visibility, reporting and inventory context.</p>
            <div className="integrationNote"><Icon name="link" size={18}/> Connection scope depends on what the current POS makes available.</div>
            <a className="textArrow" href="/integrations">Explore integrations <Icon name="arrow" size={15}/></a>
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
