import PageHero from "@/locales/ar/components/PageHero";
import ContactForm from "@/locales/ar/components/ContactForm";
export const metadata = {
  title: "احجز عرضًا توضيحيًا"
};
export default function ContactPage() {
  return <><PageHero eyebrow={"كتاب تجريبي"} title={"جلب تدفق عمل واحد، والأدوار المعنية والمقاييس التي تريد تحسينها."} intro={"أخبرنا بما يحدث اليوم، حيث يتم إعادة إدخال المعلومات أو فقدان الوضع، أي أنظمة موجودة بالفعل وكيف تقيس النتيجة. وسنقوم بتشكيل المسرحية حول هذا السياق التشغيلي الحقيقي."} image="/site-assets/extra/paris-cafe.webp" accent="green" actions={false} /><section className="section contactSection"><div className="container contactGrid"><div className="contactIntro"><span className="eyebrow">اختيار وظائف المنتج للاستعراض</span><h2>استخدام 9 مجالات كقائمة مرجعية، وليس شرطا لشراء كل شيء.</h2><ul><li>PayMyDine AI: أسئلة وإحاطات وتنبيهات وتوقعات</li><li>عمليات المطاعم: لوحات المتابعة والأوامر والجداول والخرائط الأرضية</li><li>التحفظات: التقويم، والوافدين، والمسيرات، وإحالة الجداول</li><li>الأمر والمطبخ: دخول النادل، KDS، الحالة ومراقبة القائمة</li><li>المدفوعات: الجدول QR، ومغادرة الضيوف، و 3 طرق لبيع الفواتير</li><li>التحليل: 9 مقاييس للإيرادات والطلب والربحية</li><li>إدارة الأفرقة: 6 أماكن عمل وتصاريح</li><li>إدارة المخاطر المؤسسية في الضيوف: الموجزات، والولاء، والعروض، والحملات، والتغذية المرتدة</li><li>النظام المحاسبي، والمحاسبة، والتسليم، والمدفوعات، والمخزون</li></ul></div><ContactForm /></div></section></>;
}
