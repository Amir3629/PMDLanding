import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="hero section pmdHeroFullBleedFix pmdHomeHeroSingleBackground">
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">
            9 connected product areas
          </span>

          <h1 className="pmdGrowthHeroTitle">
            AI-Powered
            <br />
            Restaurant Growth.
            <br />
            <span>
              Lower Costs.
              <br />
              Faster Service.
              <br />
              Higher Revenue.
            </span>
          </h1>

          <p className="heroText">
            PayMyDine helps restaurants automate reservations, ordering,
            kitchen, payments and team workflows, optimize every table and
            guest journey, and connect CRM and analytics in one live operating
            picture. AI-powered insights surface what needs attention, helping
            reduce manual work and wait times, speed service, improve table
            turnover and guest experience, and support revenue growth.
          </p>

          <div className="heroButtons">
            <a className="button" href="/contact">
              Book a Demo <Icon name="arrow" size={18}/>
            </a>

            <a className="button buttonGhost" href="/ai">
              <Icon name="play" size={18}/>
              Explore PayMyDine AI
            </a>
          </div>

          <div className="heroProof">
            {[
              '9 connected product areas',
              '6 AI-assisted actions',
              '6 role workspaces',
              'Source-linked AI review'
            ].map((item) => (
              <span key={item}>
                <Icon name="check" size={15}/>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pmdMobileHeroMedia">
        <img
          src="/site-assets/home-hero-untitled-design-17.webp"
          alt="PayMyDine restaurant POS devices"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}
