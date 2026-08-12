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
          <span className="eyebrow">Two interfaces, one restaurant context</span>
          <h2>Management needs operating metrics. Guests need a short path to the next table action.</h2>
          <p>PayMyDine does not force both audiences into the same screen. The owner view can show business and service signals while the guest view stays focused on browse, order, request and pay.</p>
        </div>

        <div className="demoShowcaseGrid">
          <article className="demoShowcaseCard demoShowcaseWide">
            <div className="demoShowcaseMedia demoShowcaseMediaProduct">
              <img src={ownerImage} alt="PayMyDine owner and restaurant operations workflow" loading="lazy" />
            </div>
            <div className="demoShowcaseCopy">
              <span>Owner and management</span>
              <h3>Review revenue, guests, tables, orders, kitchen status and exceptions from one decision view.</h3>
              <p>Move from a high-level metric to the floor, order channel or item detail behind it without opening every role workspace.</p>
            </div>
          </article>

          <article className="demoShowcaseCard">
            <div className="demoShowcaseMedia demoShowcaseMediaPhoto">
              <img src={guestImage} alt="PayMyDine guest experience" loading="lazy" />
            </div>
            <div className="demoShowcaseCopy">
              <span>Guest journey</span>
              <h3>Four clear actions: scan, browse, order and settle the table.</h3>
              <p>The mobile journey can keep table context attached through service requests and checkout, including equal, item-based and share-based bill splitting.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
