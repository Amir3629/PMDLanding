import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieNotice from '@/components/CookieNotice';
import SmoothMotion from '@/components/SmoothMotion';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import GlobalTranslation from '@/components/GlobalTranslation';


export const metadata = {

  title: {
    default:
      'PayMyDine — Restaurant Operations Platform',

    template:
      '%s | PayMyDine'
  },

  description:
    'PayMyDine brings restaurant operations, role-based team workspaces, guest ordering, kitchen flow, payments, live insights, integrations and AI assistance into one adaptable platform.',

  icons: {
    icon:
      '/site-assets/logo.svg'
  }

};



export default function RootLayout({
  children
}) {

  return (

    <html
      lang="en"
      className="pmd-motion-prep"
      suppressHydrationWarning
    >

      <head>

        {/*
          ======================================================
          PMD LANGUAGE PRE-PAINT BOOT V11
          ======================================================

          This script is intentionally SMALL.

          It does NOT load Google Translate.
          It does NOT modify rendered text.
          It does NOT call TranslateElement.

          It only:
          - reads saved language
          - prepares lang / dir
          - synchronises googtrans cookie
          - handles first homepage splash

          Therefore third-party translation cannot mutate React
          server HTML before hydration.
        */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {

  try {

    var STORAGE_KEY =
      'pmd_language_v1';

    var SPLASH_KEY =
      'pmd_home_splash_seen_v11';

    var ROOT_DOMAIN =
      'paymydine.com';


    var selected =
      window.localStorage.getItem(
        STORAGE_KEY
      );


    if (
      selected !== 'en' &&
      selected !== 'tr' &&
      selected !== 'ar'
    ) {

      selected =
        'en';

    }


    var html =
      document.documentElement;


    html.dataset.pmdLanguage =
      selected;


    html.lang =
      selected === 'ar'
        ? 'ar-OM'
        : selected;


    html.dir =
      selected === 'ar'
        ? 'rtl'
        : 'ltr';


    window.__PMD_LANGUAGE__ =
      selected;



    function isPMDDomain() {

      var host =
        window.location.hostname;

      return (
        host === ROOT_DOMAIN ||
        host.slice(
          -(ROOT_DOMAIN.length + 1)
        ) ===
          '.' + ROOT_DOMAIN
      );

    }



    function clearGoogleCookie() {

      var base =
        'googtrans=;' +
        'path=/;' +
        'Max-Age=0;' +
        'SameSite=Lax';


      document.cookie =
        base;


      if (
        isPMDDomain()
      ) {

        document.cookie =
          base +
          ';domain=.' +
          ROOT_DOMAIN;

      }

    }



    function setGoogleCookie(
      language
    ) {

      var expires =
        new Date(
          Date.now() +
          365 * 24 * 60 * 60 * 1000
        ).toUTCString();


      var base =
        'googtrans=/en/' +
        language +
        ';path=/;' +
        'expires=' +
        expires +
        ';SameSite=Lax';


      document.cookie =
        base;


      if (
        isPMDDomain()
      ) {

        document.cookie =
          base +
          ';domain=.' +
          ROOT_DOMAIN;

      }

    }



    if (
      selected === 'en'
    ) {

      clearGoogleCookie();

    } else {

      setGoogleCookie(
        selected
      );

    }



    /*
      FIRST HOMEPAGE VISIT SPLASH ONLY.

      NOT used for:
      - translation
      - page navigation
      - changing language
    */

    try {

      if (
        window.location.pathname === '/' &&
        !window.sessionStorage.getItem(
          SPLASH_KEY
        )
      ) {

        window.sessionStorage.setItem(
          SPLASH_KEY,
          '1'
        );


        html.classList.add(
          'pmd-first-visit-splash'
        );


        window.setTimeout(
          function () {

            html.classList.remove(
              'pmd-first-visit-splash'
            );

          },

          700

        );

      }

    } catch (_) {}


  } catch (_) {}

})();
            `
          }}
        />


        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

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

            <strong>
              PayMyDine
            </strong>

            <span
              className="pmdTranslationLoader"
            />

          </div>

        </div>


        <SmoothMotion />

        {/*
          IMPORTANT:

          Google Translate is now owned by this CLIENT component.

          It loads only AFTER React hydration.
        */}
        <GlobalTranslation />

        <Header />

        <LanguageSwitcher />

        <main>
          {children}
        </main>

        <Footer />

        <CookieNotice />

      </body>

    </html>

  );

}
