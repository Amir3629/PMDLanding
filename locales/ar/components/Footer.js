import Logo from './Logo';
import { productAreas } from "@/locales/ar/data/site";
export default function Footer() {
  return <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>منصة تشغيل واحدة للمطاعم تجمع العمليات والحجوزات والطلبات والمطبخ وإدارة قائمة الطعام والمدفوعات ونمو الضيوف والتحليلات وإدارة الفريق والتكاملات.</p>
        </div>
        <div>
          <h4>المنتج</h4>
          {productAreas.map(item => <a href={item.href} key={item.title}>{item.title}</a>)}
        </div>

        <div>
          <h4>استكشف</h4>
          <a href="/ar/platform">نظرة عامة على المنتج</a>
          <a href="/ar/integrations">التكاملات</a>
          <a href="/ar/restaurant-types">إعدادات المطاعم</a>
          <a href="/ar/how-it-works">كيف يعمل</a>
          <a href="/ar/implementation">التنفيذ</a>
          <a href="/ar/support">الدعم</a>
          <a href="/ar/security">الأمان والبيانات</a>
          <a href="/ar/resources">الأدلة والمساعدة</a>
          <a href="/ar/pricing">الأسعار</a>
          <a href="/ar/company">الشركة</a>
          <a href="/ar/contact">احجز عرضًا توضيحيًا</a>
        </div>
      </div>
      <div className="container footerBottom"><span>© 2026 PayMyDine.</span><span>تشغيل المطعم، دورًا بعد دور.</span></div>
    </footer>;
}
