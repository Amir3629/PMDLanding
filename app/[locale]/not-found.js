'use client';

import { usePathname } from 'next/navigation';

export default function LocaleNotFound() {
  const pathname = usePathname() || '';
  const arabic = pathname === '/ar' || pathname.startsWith('/ar/');

  return (
    <section className="section">
      <div className="container" style={{ paddingTop: 160, paddingBottom: 120, textAlign: arabic ? 'right' : 'left' }}>
        <span className="eyebrow">{arabic ? '404' : '404'}</span>
        <h1>{arabic ? 'الصفحة غير موجودة.' : 'Sayfa bulunamadı.'}</h1>
        <p>{arabic ? 'تعذّر العثور على الصفحة التي طلبتها.' : 'İstediğiniz sayfa bulunamadı.'}</p>
        <a className="button" href={arabic ? '/ar' : '/tr'}>{arabic ? 'العودة إلى الصفحة الرئيسية' : 'Ana sayfaya dön'}</a>
      </div>
    </section>
  );
}
