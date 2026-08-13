import { Icon } from './Icons';
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  accent = 'green',
  compact = false,
  actions = true
}) {
  return <section className={`pageHero pageHero-${accent} ${compact ? 'pageHeroCompact' : ''}`}>
      <div className="container pageHeroGrid">
        <div className="pageHeroCopy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          {actions && <div className="heroButtons"><a className="button" href="/tr/contact">Demo Rezervasyonu Yap <Icon name="arrow" size={17} /></a><a className="button buttonGhost" href="/tr/how-it-works">Nasıl Çalışır</a></div>}
        </div>
        {image && <div className="pageHeroImage"><img src={image} alt="" /><div className="pageHeroGlass"><span>PayMyDine</span><b>{eyebrow}</b></div></div>}
      </div>
    </section>;
}
