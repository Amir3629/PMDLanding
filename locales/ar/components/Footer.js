import Logo from './Logo';
import { productAreas } from "@/locales/ar/data/site";
export default function Footer() {
  return <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo />
          <p>برنامج عمل واحد للمطاعم للعمليات، والتحفظات، والطلب، والمطبخ، ومراقبة القائمة، والمدفوعات، ونمو الضيوف، والمحللين، وإدارة الأفرقة، والتكامل.</p>
        </div>
        <div>
          <h4>المنتج</h4>
          {productAreas.map(item => <a href={item.href} key={item.title}>{item.title}</a>)}
        </div>
        <div>
          <h4>للفِرق</h4>
          <a href="/ar/teams/owner">المالك</a>
          <a href="/ar/teams/manager">المدير</a>
          <a href="/ar/teams/service-staff">فريق الخدمة</a>
          <a href="/ar/teams/kitchen">المطبخ ونظام عرض المطبخ (KDS)</a>
          <a href="/ar/teams/reservations">الحجوزات</a>
          <a href="/ar/teams/finance">المالية والتقارير</a>
        </div>
        <div>
          <h4>استكشف</h4>
          <a href="/ar/platform">نظرة عامة على المنتج</a>
          <a href="/ar/integrations">التكاملات</a>
          <a href="/ar/restaurant-types">إعدادات المطعم</a>
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
      <div className="container footerBottom"><span>2026 PayMyDine.</span><span>عمليات الإصلاح، الدور حسب الدور.</span></div>
    </footer>;
}
