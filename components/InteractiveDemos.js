import { imageGroups } from '@/data/site';

const imageSets = {
  home: [imageGroups.pos[0], imageGroups.payment[1]],
  platform: ['/site-assets/social/8.webp', imageGroups.payment[3]],
  demo: [imageGroups.comments[15], imageGroups.table[10]]
};

export default function InteractiveDemos({ variant = 'home' }) {
  const [ownerImage, guestImage] = imageSets[variant] || imageSets.home;

  return (
    <section className="section demoSection" id="demo">
      <div className="container">
        <div className="sectionHeading centerHeading demoSectionHeading">
          <span className="eyebrow">Two sides of the same restaurant</span>
          <h2>Give each person the view that fits the moment.</h2>
          <p>Ownership can follow performance and priorities while guests get a simple ordering journey—without turning both experiences into the same interface.</p>
        </div>

        <div className="demoShowcaseGrid">
          <article className="demoShowcaseCard demoShowcaseWide">
            <div className="demoShowcaseMedia demoShowcaseMediaProduct">
              <img src={ownerImage} alt="PayMyDine owner and restaurant operations workflow" loading="lazy" />
            </div>
            <div className="demoShowcaseCopy">
              <span>Owner & management</span>
              <h3>A decision view of the restaurant day.</h3>
              <p>Follow live performance, floor activity and the operating signals that deserve attention without working inside every team screen.</p>
            </div>
          </article>

          <article className="demoShowcaseCard">
            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
              <img src={guestImage} alt="PayMyDine guest experience" loading="lazy" />
            </div>
            <div className="demoShowcaseCopy">
              <span>Guest journey</span>
              <h3>A direct path from the table to the next action.</h3>
              <p>Let guests browse, order, request service and move toward checkout while the restaurant team keeps the operating context behind the experience.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
