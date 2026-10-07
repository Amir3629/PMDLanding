'use client';

import { usePathname } from 'next/navigation';

const COPY = {
  tr: {
    title: 'Sayfa bulunamadı.',
    body: 'Aradığınız sayfa mevcut değil veya kaldırılmış.',
    cta: 'Ana Sayfaya Dön'
  },
  ar: {
    title: 'الصفحة غير موجودة.',
    body: 'تعذّر العثور على الصفحة التي طلبتها.',
    cta: 'العودة إلى الصفحة الرئيسية'
  },
  de: {
    title: 'Seite nicht gefunden.',
    body: 'Die angeforderte Seite wurde nicht gefunden oder ist nicht mehr verfügbar.',
    cta: 'Zur Startseite'
  }
};

export default function LocaleNotFound() {
  const pathname = usePathname() || '';
  const locale = pathname === '/ar' || pathname.startsWith('/ar/')
    ? 'ar'
    : pathname === '/de' || pathname.startsWith('/de/')
      ? 'de'
      : 'tr';
  const copy = COPY[locale];

  return (
    <section className="section">
      <div className="container" style={{ paddingTop: 160, paddingBottom: 120, textAlign: locale === 'ar' ? 'right' : 'left' }}>
        <span className="eyebrow">404</span>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
        <a className="button" href={`/${locale}`}>{copy.cta}</a>
      </div>
    </section>
  );
}
