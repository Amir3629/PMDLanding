import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieNotice from '@/components/CookieNotice';
import SmoothMotion from "@/components/SmoothMotion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GlobalTranslation from "@/components/GlobalTranslation";
export const metadata = {
  title: {
    default: 'PayMyDine — Restaurant Operations Platform',
    template: '%s | PayMyDine'
  },
  description: 'PayMyDine brings restaurant operations, role-based team workspaces, guest ordering, kitchen flow, payments, live insights, integrations and AI assistance into one adaptable platform.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="pmd-motion-prep" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved =
                    window.localStorage.getItem(
                      'pmd_language_v1'
                    );

                  var cookieMatch =
                    document.cookie.match(
                      /(?:^|;\\s*)googtrans=\\/en\\/(en|tr|ar)(?:;|$)/
                    );

                  var language =
                    (
                      saved === 'en' ||
                      saved === 'tr' ||
                      saved === 'ar'
                    )
                      ? saved
                      : (
                          cookieMatch
                            ? cookieMatch[1]
                            : 'en'
                        );

                  var html =
                    document.documentElement;

                  html.dataset.pmdLanguage =
                    language;

                  html.lang =
                    language === 'ar'
                      ? 'ar-OM'
                      : language;

                  html.dir =
                    language === 'ar'
                      ? 'rtl'
                      : 'ltr';

                  if (language !== 'en') {
                    html.classList.add(
                      'pmd-translation-pending'
                    );
                  }

                } catch (_) {}
              })();
            `
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>

        <div
          className="pmdTranslationShield notranslate"
          translate="no"
          aria-hidden="true"
        >
          <div className="pmdTranslationShieldInner">
            <img
              src="/site-assets/logo.svg"
              alt=""
            />
            <strong>PayMyDine</strong>
            <span className="pmdTranslationLoader" />
          </div>
        </div>

<SmoothMotion />
        <GlobalTranslation />
        <Header />
        <LanguageSwitcher />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
