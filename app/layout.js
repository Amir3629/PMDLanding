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
    'PayMyDine brings restaurant operations, role-based team workspaces, guest ordering, kitchen flow, payments, live insights, integrations and AI assistance into one adaptable platform.'

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
          PMD LANGUAGE BOOT V10
          ======================================================

          Runs BEFORE normal React hydration.

          IMPORTANT:
          - never hides the website for translation
          - synchronises Google cookie immediately
          - clears stale Arabic/Turkish cookie when EN selected
          - prepares RTL before first layout
          - homepage splash is independent from translation
        */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {

  try {

    var STORAGE_KEY =
      'pmd_language_v1';

    var SPLASH_KEY =
      'pmd_home_splash_seen_v10';

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


    /*
      Absolutely remove V9 translation blocker.
    */

    html.classList.remove(
      'pmd-translation-pending'
    );



    function isPMDDomain() {

      var host =
        window.location.hostname;

      return (
        host === ROOT_DOMAIN ||
        host.endsWith(
          '.' + ROOT_DOMAIN
        )
      );

    }



    function domains() {

      if (!isPMDDomain()) {

        return [];

      }


      return [
        ROOT_DOMAIN,
        '.' + ROOT_DOMAIN,
        'www.' + ROOT_DOMAIN,
        '.www.' + ROOT_DOMAIN
      ];

    }



    function expireGoogleCookie() {

      var expires =
        'Thu, 01 Jan 1970 00:00:00 GMT';


      var base =
        'googtrans=;' +
        'path=/;' +
        'expires=' + expires + ';' +
        'Max-Age=0;' +
        'SameSite=Lax';


      document.cookie =
        base;


      domains().forEach(
        function (domain) {

          document.cookie =
            base +
            ';domain=' +
            domain;

        }
      );

    }



    function setGoogleCookie(
      language
    ) {

      var expires =
        new Date(
          Date.now() +
          365 * 24 * 60 * 60 * 1000
        ).toUTCString();


      var value =
        '/en/' + language;


      var base =
        'googtrans=' + value + ';' +
        'path=/;' +
        'expires=' + expires + ';' +
        'SameSite=Lax';


      document.cookie =
        base;


      domains().forEach(
        function (domain) {

          document.cookie =
            base +
            ';domain=' +
            domain;

        }
      );

    }



    /*
      Browser state and Google cookie are now always aligned
      BEFORE Google Translate loads.
    */

    if (
      selected === 'en'
    ) {

      expireGoogleCookie();

    } else {

      setGoogleCookie(
        selected
      );

    }



    window.__PMD_LANGUAGE__ =
      selected;



    /*
      ========================================================
      FIRST HOMEPAGE VISIT SPLASH
      ========================================================

      This is NOT a translation loading screen.

      It only appears once per browser session when / is first
      opened.

      Navigating pages or changing languages does not show it.
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

          selected === 'en'
            ? 650
            : 950

        );

      }

    } catch (_) {}



    /*
      ========================================================
      GOOGLE TRANSLATE CALLBACK
      ========================================================

      Defined in HEAD instead of waiting for React useEffect.

      That starts translation substantially earlier.
    */

    window.googleTranslateElementInit =
      function () {


        function initialise() {

          if (
            !window.google ||
            !window.google.translate
          ) {

            window.setTimeout(
              initialise,
              25
            );

            return;

          }


          var mount =
            document.getElementById(
              'pmd-google-translate'
            );


          if (!mount) {

            window.setTimeout(
              initialise,
              25
            );

            return;

          }


          if (
            !mount.dataset
              .pmdGoogleReady
          ) {

            new window.google.translate
              .TranslateElement(

                {
                  pageLanguage:
                    'en',

                  includedLanguages:
                    'en,tr,ar',

                  autoDisplay:
                    false,

                  multilanguagePage:
                    true
                },

                'pmd-google-translate'

              );


            mount.dataset
              .pmdGoogleReady =
                'true';

          }



          if (
            selected === 'tr' ||
            selected === 'ar'
          ) {

            var attempts =
              0;


            function apply() {

              var combo =
                document.querySelector(
                  '.goog-te-combo'
                );


              if (combo) {

                combo.value =
                  selected;


                combo.dispatchEvent(
                  new Event(
                    'change',
                    {
                      bubbles: true
                    }
                  )
                );


                return;

              }


              attempts +=
                1;


              if (
                attempts < 50
              ) {

                window.setTimeout(
                  apply,
                  40
                );

              }

            }


            apply();

          }

        }


        initialise();

      };


  } catch (_) {

    document.documentElement
      .classList.remove(
        'pmd-translation-pending'
      );

  }

})();
            `
          }}
        />


        {/*
          Connection starts before React hydration.
        */}

        <link
          rel="preconnect"
          href="https://translate.google.com"
        />

        <link
          rel="dns-prefetch"
          href="https://translate.google.com"
        />


        <script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          defer
          data-pmd-translate="true"
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

        {/*
          First-visit homepage splash ONLY.

          V10 never uses this for translation/page navigation.
        */}

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
