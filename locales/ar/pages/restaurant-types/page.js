import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
export const metadata = {
  title: "المطاعم"
};
const setups = [["مطاعم الخدمة الكاملة", "دفترات متطابقة، تعيين طاولة، طلب نادلة، وضعية المطبخ، دفعة على الطاولة وملكية", '/site-assets/custom/restaurant-type-full-service.webp'], ["مطعم غير رسمي", "إبقاء حالة الطاولات، والطلب السريع، وعبء العمل المتحرك، وتوافر القائمة، والدفع مرئيا عندما تكون دورات الخدمات أقصر.", '/site-assets/custom/restaurant-type-modern-dining.webp'], ["مطعم عالي الحجم", "استخدموا كوادر الدور، وتذكرات المطبخ، وضوابط المبيعات، وطلبات الضيوف لإبقاء العمل التالي مرئياً كبناء للطلب.", '/site-assets/extra/qr-breakfast.webp'], ["أماكن أكبر أو متعددة الأماكن", "وضع خرائط أرضية متعددة، وأماكن عمل متخصصة، وتقديم تقارير مركزية، وتكاملات مختارة لأفرقة وأماكن أكثر تعقيدا.", '/site-assets/extra/team-cafe-meeting.webp']];
export default function RestaurantTypesPage() {
  return <>
      <PageHero eyebrow={"4 مطاعم"} title={"نعترف بالأدوار والطابق ورحلة الضيوف والمقاييس حول نموذج الخدمة الذي تديره"} intro={"وتظل مجالات المنتجات على حالها، ولكن الأولوية، والإذن، وتغير سير العمل حسب نوع المطعم. ابدأ بمسار الخدمة الحقيقي واختار فقط الضوابط التي تدعمه"} image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt="" /><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">قرارات التجمع</span><h2>لكل مجموعة، حدد ستة أشياء قبل اختيار الوحدات</h2><p>أدوار الوثائق، الهيكل الأرضي، قنوات الطلب، نقاط اتصال الضيوف، النظم الحالية ومقاييس خط الأساس المستخدمة للحكم على النتيجة.</p></div><div className="capabilityList"><span>ملكية الأدوار</span><span>نموذج الطوابق</span><span>قنوات العشاء والأخذ</span><span>ضيف يأمر الطريق</span><span>POS وحدود الدفع</span><span>مقاييس تشغيل خط الأساس</span></div></div></section>
      <CTA title={"خريطة واحدة نموذج الخدمة الحقيقية لـ (باي ميدين)."} body={"وسنحدد الأدوار المسؤولة، ومجالات المنتجات، والتشكيلات الأرضية، والإدماجات، والمقاييس اللازمة لذلك الإنشاء."} />
    </>;
}
