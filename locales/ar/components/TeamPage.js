import PageHero from './PageHero';
import CTA from './CTA';
import { Icon } from './Icons';
export default function TeamPage({
  page
}) {
  return <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.heroImage} accent={page.accent} />

      <section className="section highlightSection">
        <div className="container highlightGrid">
          {page.highlights.map(([title, body], index) => <article className="highlightCard" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>)}
        </div>
      </section>

      <section className="section storyFeatureSection">
        <div className="container">
          {page.story.map((item, index) => <article className={`storyFeature ${index % 2 ? 'reverse' : ''}`} key={item.title}>
              <div className="storyFeatureImage"><img src={item.image} alt="" loading="lazy" /></div>
              <div className="storyFeatureCopy">
                <span className="eyebrow">سير العمل حسب الدور</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <a className="textArrow" href="/ar/teams">قارن مساحات العمل الست <Icon name="arrow" size={15} /></a>
              </div>
            </article>)}
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">مؤشرات وضوابط هذا الدور</span>
            <h2>اعرض المعلومات اللازمة للعمل دون إظهار ضوابط إدارية غير مرتبطة.</h2>
            <p>يحدد الوصول حسب الدور ما يمكن للشخص رؤيته وتنفيذه. ويظل سياق الطاولة والطلب والمطبخ والحجز والدفع جزءًا من سير عمل واحد داخل المطعم.</p>
          </div>
          <div className="capabilityList">
            {page.bullets.map(item => <span key={item}><Icon name="check" size={16} />{item}</span>)}
          </div>
        </div>
      </section>

      <CTA title={`شاهد مساحة عمل ${page.label} بأدوارك وسير العمل الفعلي.`} body={"أحضر مسؤولياتك الحالية ونقاط التسليم وأسئلة التقارير. وسنربطها بالضوابط والسياق الذي ينبغي أن تتضمنه مساحة العمل هذه."} />
    </>;
}
