import '../globals.css';
import { siteRootMetadata } from '@/lib/seo';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieNotice from '@/components/CookieNotice';
import SmoothMotion from '@/components/SmoothMotion';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata = siteRootMetadata('en');

export const viewport = {
  themeColor: '#063e31',
  colorScheme: 'light'
};

const firstVisitScript = `
(function () {
  try {
    var key = 'pmd_home_splash_seen_v13';
    var seen = window.sessionStorage.getItem(key);
    if (!seen) {
      window.sessionStorage.setItem(key, '1');
      if (window.location.pathname === '/') {
        document.documentElement.classList.add('pmd-first-visit-splash');
        window.setTimeout(function () {
          document.documentElement.classList.remove('pmd-first-visit-splash');
        }, 700);
      }
    }
  } catch (_) {}
})();`;

export default function EnglishRootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="pmd-motion-prep">
      <head>
        <script dangerouslySetInnerHTML={{ __html: firstVisitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="pmdTranslationShield notranslate" translate="no" aria-hidden="true">
          <div className="pmdTranslationShieldInner">
            <img src="/site-assets/logo.svg" alt="" />
            <strong>PayMyDine</strong>
            <span className="pmdTranslationLoader" />
          </div>
        </div>

        <SmoothMotion />
        <Header />
        <LanguageSwitcher locale="en" />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
