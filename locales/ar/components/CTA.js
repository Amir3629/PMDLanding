import { Icon } from './Icons';
export default function CTA({
  title = "هل أنت جاهز لملاءمة PayMyDine مع تشغيل مطعمك؟",
  body = "أحضر أدواتك الحالية وأدوارك ونقاط التسليم ومؤشرات التشغيل. سنوضح أي مجالات المنتج تقلل العمل المكرر وأي الأنظمة ينبغي أن تبقى مترابطة.",
  primaryLabel = "احجز عرضًا توضيحيًا",
  primaryHref = "/ar/contact",
  secondaryLabel = "كيف يعمل",
  secondaryHref = "/ar/how-it-works"
}) {
  return <section className="section ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div>
            <span className="eyebrow lightEyebrow">ارسم صورة التشغيل الفعلي</span>
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
