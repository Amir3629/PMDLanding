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
                <span className="eyebrow">تدفق العمل في سياق الدور</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <a className="textArrow" href="/ar/teams">مقارنة بجميع أماكن العمل الستة <Icon name="arrow" size={15} /></a>
              </div>
            </article>)}
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">إشارات وضوابط لهذا الدور</span>
            <h2>أظهر المعلومات اللازمة للعمل دون أن يكشف عن ضوابط غير متصلة</h2>
            <p>ويغير الوصول القائم على الأدوار ما يمكن للشخص أن يراه ويفعله. ويظل الجدول الأساسي، والنظام، والمطبخ، والتحفظ، والدفع جزءا من تدفق مطعم واحد.</p>
          </div>
          <div className="capabilityList">
            {page.bullets.map(item => <span key={item}><Icon name="check" size={16} />{item}</span>)}
          </div>
        </div>
      </section>

      <CTA title={`See the ${page.label} workspace with your real roles and workflow.`} body={"إجلبْ مسؤولياتَكَ الحاليةَ، يَنْقلُ وأسئلةَ الإبلاغ. وسوف نرسمها على الضوابط والسياق الذي ينبغي أن يشمله هذا المجال."} />
    </>;
}
