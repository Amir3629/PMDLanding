import { homeStatusCards, imageGroups } from '@/data/site';

export function StatusGallery() {
  return (
    <section className="section statusSection">
      <div className="container">
        <div className="splitHeading">
          <div>
            <span className="eyebrow">Shared context, different views</span>
            <h2>The restaurant stays coordinated without putting everyone on the same screen.</h2>
          </div>
          <p>Guest, front-of-house, kitchen and payment moments can stay related while each person sees the status and actions that belong to their role.</p>
        </div>
        <div className="statusGrid">
          {homeStatusCards.map((card, index) => (
            <article className={`statusCard statusCard${index + 1}`} key={card.title}>
              <img src={card.image} alt="" loading="lazy" />
              <div className="statusCardShade" />
              <div className="statusCardCopy">
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LifestyleMarquee() {
  const images = [
    '/site-assets/extra/seaside-dinner.webp',
    '/site-assets/extra/twilight-cafe.webp',
    '/site-assets/extra/friends-split-bill.webp',
    '/site-assets/extra/friends-qr.webp',
    '/site-assets/extra/bill-paid-cafe.webp',
    '/site-assets/extra/split-bill-table.webp',
    '/site-assets/custom/split-friends-replacement.webp',
    '/site-assets/extra/qr-ordering-experience.webp',
    imageGroups.social[0],
    imageGroups.social[2],
    imageGroups.table[3],
    imageGroups.kitchen[3]
  ];
  return (
    <section className="photoMarquee" aria-label="Restaurant moments">
      <div className="marqueeTrack">
        {[...images, ...images].map((src, index) => (
          <div className="marqueePhoto" key={`${src}-${index}`}><img src={src} alt="" loading="lazy" /></div>
        ))}
      </div>
    </section>
  );
}
