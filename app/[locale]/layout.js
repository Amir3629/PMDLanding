import '../globals.css';

import { notFound } from 'next/navigation';
import SmoothMotion from '@/components/SmoothMotion';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import HeaderTr from '@/locales/tr/components/Header';
import FooterTr from '@/locales/tr/components/Footer';
import CookieNoticeTr from '@/locales/tr/components/CookieNotice';

import HeaderAr from '@/locales/ar/components/Header';
import FooterAr from '@/locales/ar/components/Footer';
import CookieNoticeAr from '@/locales/ar/components/CookieNotice';

const CONFIG = {
  tr: {
    lang: 'tr',
    dir: 'ltr',
    title: 'PayMyDine — Restoran Operasyon Platformu',
    description: 'PayMyDine; restoran operasyonlarını, rol bazlı ekip çalışma alanlarını, misafir siparişini, mutfak akışını, ödemeleri, canlı içgörüleri, entegrasyonları ve AI desteğini tek bir uyarlanabilir platformda bir araya getirir.',
    Header: HeaderTr,
    Footer: FooterTr,
    CookieNotice: CookieNoticeTr
  },
  ar: {
    lang: 'ar-OM',
    dir: 'rtl',
    title: 'PayMyDine — منصة تشغيل المطاعم',
    description: 'يجمع PayMyDine عمليات المطعم ومساحات عمل الفرق حسب الأدوار وطلبات الضيوف وتدفق المطبخ والمدفوعات والرؤى المباشرة والتكاملات ومساعدة AI في منصة واحدة قابلة للتكيّف.',
    Header: HeaderAr,
    Footer: FooterAr,
    CookieNotice: CookieNoticeAr
  }
};

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'ar' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const config = CONFIG[locale];
  if (!config) return {};

  return {
    title: {
      default: config.title,
      template: '%s | PayMyDine'
    },
    description: config.description,
    icons: { icon: '/site-assets/logo.svg' }
  };
}

const firstVisitScript = `
(function () {
  try {
    var key = 'pmd_home_splash_seen_v13';
    var seen = window.sessionStorage.getItem(key);
    if (!seen) {
      window.sessionStorage.setItem(key, '1');
      if (/^\\/(tr|ar)\\/?$/.test(window.location.pathname)) {
        document.documentElement.classList.add('pmd-first-visit-splash');
        window.setTimeout(function () {
          document.documentElement.classList.remove('pmd-first-visit-splash');
        }, 700);
      }
    }
  } catch (_) {}
})();`;

export default async function LocalizedRootLayout({ children, params }) {
  const { locale } = await params;
  const config = CONFIG[locale];
  if (!config) notFound();

  const Header = config.Header;
  const Footer = config.Footer;
  const CookieNotice = config.CookieNotice;

  return (
    <html lang={config.lang} dir={config.dir} className="pmd-motion-prep">
      <head>
        <script dangerouslySetInnerHTML={{ __html: firstVisitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={locale === 'ar' ? 'pmdArabic' : undefined}>
        <div className="pmdTranslationShield notranslate" translate="no" aria-hidden="true">
          <div className="pmdTranslationShieldInner">
            <img src="/site-assets/logo.svg" alt="" />
            <strong>PayMyDine</strong>
            <span className="pmdTranslationLoader" />
          </div>
        </div>

        <SmoothMotion />
        <Header />
        <LanguageSwitcher locale={locale} />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
