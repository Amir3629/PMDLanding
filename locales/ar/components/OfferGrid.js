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
              تُنشئ تسعة مجالات مترابطة صورة تشغيلية واحدة، وتمنح PayMyDine AI السياق اللازم لشرح ما الذي تغيّر.
            </h2>

            <p>
              يعالج كل مجال سير عمل حقيقيًا داخل المطعم بشكل مستقل. وعند ربط الحجوزات والطاولات والطلبات والمطبخ والمدفوعات والضيوف والفرق والتحليلات والتكاملات معًا، يتكوّن السياق الذي يمكن للذكاء الاصطناعي استخدامه لمقارنة الفترات، ورصد التحركات غير المعتادة، ودعم التوقعات، وتوجيه الإدارة إلى ما يستحق الانتباه بعد ذلك.
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
                  عرض سير العمل
                  {' '}
                  <Icon name="arrow" size={15} />
                </span>

              </div>

            </a>)}

        </div>

      </div>

    </section>;
}
