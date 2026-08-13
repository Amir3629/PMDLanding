import { offerCards } from "@/locales/ar/data/site";
import { Icon } from './Icons';
export default function OfferGrid({
  compact = false
}) {
  return <section className={`section offerSection ${compact ? 'compactSection' : ''}`} id="what-we-offer">

      <div className="container">

        {!compact && <div className="sectionHeading centerHeading">

            <span className="eyebrow">
              9 مجالات منتجات مترابطة
            </span>

            <h2>
              وتخلق تسع مناطق متصلة صورة تشغيلية واحدة
(وأعطي (ز.ك.ز.ز
            </h2>

            <p>
              كلّ منطقة تحلّ تدفقاً حقيقيّاً لعمل المطعم بمفردها.
متصلين معاً، تحفظات، جداول، أوامر، مطبخ
المدفوعات والضيوف والأفرقة والمحللين والإدماج
يمكن أن تستخدم AI لمقارنة الفترات، وعلم غير عادي
التنقل، وتوقعات الدعم، وإدارة النقاط
ما يستحق الاهتمام بعد ذلك
            </p>

          </div>}

        <div className="offerGrid offerGridVisual">

          {offerCards.map(card => <a className="offerCard offerCardWithImage" href={card.href} key={card.title}>

              <div className="offerCardMedia">

                <img src={compact ? card.compactImage : card.image} alt="" loading="lazy" />

              </div>

              <div className="offerCardBody">

                <span className="iconBubble">
                  <Icon name={card.icon} />
                </span>

                <h3>{card.title}</h3>

                <p>{card.body}</p>

                <span className="cardLink">
                  انظر سير العمل
                  {' '}
                  <Icon name="arrow" size={15} />
                </span>

              </div>

            </a>)}

        </div>

      </div>

    </section>;
}
