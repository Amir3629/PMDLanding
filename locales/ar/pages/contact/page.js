import PageHero from "@/locales/ar/components/PageHero";
import ContactForm from "@/locales/ar/components/ContactForm";
export const metadata = {
  title: "احجز عرضًا توضيحيًا"
};
export default function ContactPage() {
  return <><PageHero eyebrow={"احجز عرضًا توضيحيًا عمليًا"} title={"أحضر سير عمل واحدًا، والأدوار المشاركة، والمؤشر الذي تريد تحسينه."} intro={"أخبرنا بما يحدث اليوم، حيث يتم إعادة إدخال المعلومات أو فقدان الوضع، أي أنظمة موجودة بالفعل وكيف تقيس النتيجة. وسنقوم بتشكيل المسرحية حول هذا السياق التشغيلي الحقيقي."} image="/site-assets/extra/paris-cafe.webp" accent="green" actions={false} /><section className="section contactSection"><div className="container contactGrid"><div className="contactIntro"><span className="eyebrow">اختر مجالات المنتج التي تريد مراجعتها</span><h2>استخدم المجالات التسعة كقائمة مراجعة، لا كشرط لشراء كل شيء.</h2><ul><li>PayMyDine AI: أسئلة وإحاطات وتنبيهات وتوقعات</li><li>عمليات المطاعم: لوحات المتابعة والطلبات والطاولات والمخططات الصالة</li><li>الحجوزات: التقويم، والوافدين، والضيوف دون حجز مسبق، وإحالة الجداول</li><li>الأمر والمطبخ: دخول النادل، KDS، الحالة ومراقبة القائمة</li><li>المدفوعات: رمز QR للطاولة وإتمام حساب الضيف و3 طرق لتقسيم الفاتورة</li><li>التحليل: 9 مقاييس للإيرادات والطلب والربحية</li><li>إدارة الفرق: 6 أماكن عمل وتصاريح</li><li>إدارة علاقات الضيوف (CRM) في الضيوف: الموجزات، والولاء، والعروض، والحملات، والملاحظات</li><li>النظام المحاسبي، والمحاسبة، والتسليم، والمدفوعات، والمخزون</li></ul></div><ContactForm /></div></section></>;
}
