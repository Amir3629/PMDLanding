import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
import { Icon } from "@/locales/ar/components/Icons";
import { teamPages } from "@/locales/ar/data/teams";
export const metadata = {
  title: "مساحات عمل الفريق",
  description: ":: ستة أماكن عمل قائمة على أساس دور PayMyDine للمالكين والمديرين وموظفي الخدمات والمطبخ والتحفظات والتمويل."
};
const order = ['owner', 'manager', 'service-staff', 'kitchen', 'reservations', 'finance'];
export default function TeamsPage() {
  return <>
      <PageHero eyebrow={"6 أماكن عمل"} title={"وأظهر كل دور ما هو مسؤول عنه من أسئلة وضوابط ومقاييس."} intro={"المالكون يحتاجون إشارات عمل يحتاج المديرون إلى إستثناءات حية موظفو الخدمات بحاجة إلى طاولات وضيوف. المطبخ يحتاج إلى تذاكر وتوقيت وتحتاج التحفظات إلى الوصول والقدرة. ويحتاج التمويل إلى إبلاغ نظيف."} image="/site-assets/extra/role-dashboard.webp" accent="green" />

      <section className="section offerSection compactSection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <span className="eyebrow">الوصول المركز، سياق المطعم المشترك</span>
            <h2>وينبغي ألا تتطلب ست مسؤوليات مختلفة ستة نظم منفصلة.</h2>
            <p>ويحد كل مكان من فضاء العمل من الضوضاء والوصول مع الحفاظ على الجدول، والنظام، والمطبخ، والتحفظ، وسياق الدفع اللازمين للتسليم التالي.</p>
          </div>
          <div className="offerGrid offerGridVisual">
            {order.map(slug => {
            const page = teamPages[slug];
            return <a className="offerCard offerCardWithImage" href={`/ar/teams/${slug}`} key={slug}>
                  <div className="offerCardMedia"><img src={page.heroImage} alt="" loading="lazy" /></div>
                  <div className="offerCardBody">
                    <span className="iconBubble"><Icon name={slug === 'kitchen' ? 'kitchen' : slug === 'reservations' ? 'calendar' : slug === 'finance' ? 'chart' : 'team'} /></span>
                    <h3>{page.label}</h3>
                    <p>{page.intro}</p>
                    <span className="cardLink">انظر الإشارات والضوابط <Icon name="arrow" size={15} /></span>
                  </div>
                </a>;
          })}
          </div>
        </div>
      </section>

      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div>
            <span className="eyebrow">قصة تشغيل واحدة تحت</span>
            <h2>تغيرات الدخول حسب الدور حالة المطعم لا</h2>
            <p>ويظل الجدول نفسه الذي ينتقل من الحجز إلى النظام والإعداد والخدمة والدفع، على الرغم من أن كل دور يرى جزءا مختلفا من تلك الرحلة.</p>
          </div>
          <div className="capabilityList">
            <span><Icon name="check" size={16} />قرارات الملكية</span>
            <span><Icon name="check" size={16} />استثناءات المديرين</span>
            <span><Icon name="check" size={16} />خدمات الموظفين</span>
            <span><Icon name="check" size={16} />تذاكر المطبخ والتوقيت</span>
            <span><Icon name="check" size={16} />القدرة على الحفظ</span>
            <span><Icon name="check" size={16} />الإبلاغ المالي</span>
          </div>
        </div>
      </section>

      <CTA title={"خبّر هيكل فريقك إلى 6 أماكن عمل من طراز PayMyDine"} body={"إجلبْ مسؤولياتَكَ الحاليةَ، الأذن ومشاكلَ التسليم. وسنبين ما ينبغي أن يراه كل دور وكيف ينتقل السياق المشترك بينهما."} />
    </>;
}
