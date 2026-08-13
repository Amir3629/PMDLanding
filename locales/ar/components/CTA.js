import { Icon } from './Icons';
export default function CTA({
  title = "هل أنت مستعد لخريطة (زكس كيز) لمطعمك؟",
  body = "أحضروا أدواتكم الحالية، أدواركم، عمليات التسليم ومقاييس التشغيل وسنبين مجالات المنتجات التي تحل محل العمل المكرر وما هي النظم التي ينبغي أن تظل مترابطة.",
  primaryLabel = "احجز عرضًا توضيحيًا",
  primaryHref = "/ar/contact",
  secondaryLabel = "كيف يعمل",
  secondaryHref = "/ar/how-it-works"
}) {
  return <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">خريطة العملية الحقيقية</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="ctaActions">
            <a className="button buttonLime" href={primaryHref}>{primaryLabel} <Icon name="arrow" size={17} /></a>
            <a className="button buttonOutlineLight" href={secondaryHref}>{secondaryLabel}</a>
          </div>
        </div>
      </div>
    </section>;
}
