'use client';

import {
  useEffect
} from 'react';


const STORAGE_KEY =
  'pmd_language_v1';


const SCRIPT_ID =
  'pmd-google-translate-script-v11';


const MOUNT_ID =
  'pmd-google-translate';



function getSelectedLanguage() {

  try {

    const selected =
      window.localStorage.getItem(
        STORAGE_KEY
      );


    if (
      selected === 'tr' ||
      selected === 'ar'
    ) {

      return selected;

    }

  } catch (_) {}


  return 'en';

}



function normaliseGoogleLayout() {

  if (
    document.body
  ) {

    document.body.style.top =
      '0px';

  }


  document.documentElement
    .style.marginTop =
      '0px';

}



function isAlreadyTranslated() {

  const html =
    document.documentElement;


  return (
    html.classList.contains(
      'translated-ltr'
    ) ||
    html.classList.contains(
      'translated-rtl'
    )
  );

}



export default function GlobalTranslation() {

  useEffect(() => {

    const language =
      getSelectedLanguage();


    /*
      ========================================================
      ENGLISH
      ========================================================

      English is the original React/server HTML.

      Absolutely no Google Translate runtime is required.
    */

    if (
      language === 'en'
    ) {

      normaliseGoogleLayout();

      document.documentElement
        .dataset.pmdTranslationReady =
          'true';

      return;

    }



    /*
      ========================================================
      TURKISH / ARABIC
      ========================================================

      CRITICAL:

      This useEffect runs AFTER React hydration.

      Only now are we allowed to load a third-party script that
      mutates page text.
    */

    let cancelled =
      false;

    let initialiseTimer =
      null;

    let comboTimer =
      null;


    window.__PMD_GT_INITIALIZED__ =
      false;



    const applyCombo =
      (attempt = 0) => {

        if (
          cancelled
        ) {

          return;

        }


        normaliseGoogleLayout();


        /*
          Google may already have translated automatically from
          the googtrans cookie.

          If yes, DO NOT dispatch another change event.
        */

        if (
          isAlreadyTranslated()
        ) {

          document.documentElement
            .dataset.pmdTranslationReady =
              'true';

          return;

        }


        const combo =
          document.querySelector(
            '.goog-te-combo'
          );


        if (
          !combo
        ) {

          if (
            attempt < 80
          ) {

            comboTimer =
              window.setTimeout(
                () =>
                  applyCombo(
                    attempt + 1
                  ),
                50
              );

          }

          return;

        }


        /*
          Dispatch at most once and ONLY when required.
        */

        if (
          combo.value !== language
        ) {

          combo.value =
            language;


          combo.dispatchEvent(
            new Event(
              'change',
              {
                bubbles: true
              }
            )
          );

        }


        document.documentElement
          .dataset.pmdTranslationReady =
            'true';

      };



    const initialise =
      (attempt = 0) => {

        if (
          cancelled
        ) {

          return;

        }


        const TranslateElement =
          window.google &&
          window.google.translate &&
          window.google.translate
            .TranslateElement;


        const mount =
          document.getElementById(
            MOUNT_ID
          );


        /*
          THIS CHECK FIXES:
          "undefined is not a constructor"

          window.google.translate existing is NOT sufficient.
          TranslateElement itself must be a function.
        */

        if (
          typeof TranslateElement !==
            'function' ||
          !mount
        ) {

          if (
            attempt < 100
          ) {

            initialiseTimer =
              window.setTimeout(
                () =>
                  initialise(
                    attempt + 1
                  ),
                50
              );

          }

          return;

        }


        /*
          Singleton.

          Never create two Google TranslateElement instances.
        */

        if (
          !window.__PMD_GT_INITIALIZED__
        ) {

          try {

            new TranslateElement(

              {
                pageLanguage:
                  'en',

                includedLanguages:
                  'tr,ar',

                autoDisplay:
                  false
              },

              MOUNT_ID

            );


            window.__PMD_GT_INITIALIZED__ =
              true;


          } catch (error) {

            console.warn(
              'PayMyDine translation init retry:',
              error
            );


            window.__PMD_GT_INITIALIZED__ =
              false;


            if (
              attempt < 100
            ) {

              initialiseTimer =
                window.setTimeout(
                  () =>
                    initialise(
                      attempt + 1
                    ),
                  80
                );

            }


            return;

          }

        }


        /*
          Give Google's widget a moment to honour googtrans
          cookie before manually touching its select.
        */

        comboTimer =
          window.setTimeout(
            () =>
              applyCombo(0),
            250
          );

      };



    /*
      Google calls this after element.js is ready.

      Callback itself is safe because initialise() checks the
      REAL constructor before using `new`.
    */

    window.googleTranslateElementInit =
      () => {

        initialise(0);

      };



    const loadGoogleTranslate =
      () => {

        if (
          cancelled
        ) {

          return;

        }


        const existing =
          document.getElementById(
            SCRIPT_ID
          );


        if (
          existing
        ) {

          initialise(0);

          return;

        }


        const script =
          document.createElement(
            'script'
          );


        script.id =
          SCRIPT_ID;


        script.src =
          'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';


        script.async =
          true;


        script.defer =
          true;


        script.onerror =
          () => {

            /*
              NEVER freeze or hide the website when Google is
              unavailable.
            */

            document.documentElement
              .dataset.pmdTranslationReady =
                'fallback';

          };


        document.body.appendChild(
          script
        );

      };



    /*
      Wait until the entire first page load has completed.

      React has already hydrated before this effect, and waiting
      for load gives the application even more separation from
      Google's DOM mutation.
    */

    const start =
      () => {

        window.setTimeout(
          loadGoogleTranslate,
          40
        );

      };


    if (
      document.readyState ===
        'complete'
    ) {

      start();

    } else {

      window.addEventListener(
        'load',
        start,
        {
          once: true
        }
      );

    }



    /*
      ========================================================
      TRANSLATED NAVIGATION SAFETY
      ========================================================

      A DOM-translating service and SPA reconciliation are a
      dangerous combination.

      While TR / AR is active, same-origin page navigation uses
      a normal full document navigation.

      React therefore receives clean server HTML on every page
      BEFORE Google translates that new page.
    */

    const hardNavigate =
      (event) => {

        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {

          return;

        }


        const target =
          event.target;


        if (
          !(target instanceof Element)
        ) {

          return;

        }


        const anchor =
          target.closest(
            'a[href]'
          );


        if (
          !anchor ||
          anchor.target === '_blank' ||
          anchor.hasAttribute(
            'download'
          )
        ) {

          return;

        }


        let url;


        try {

          url =
            new URL(
              anchor.href,
              window.location.href
            );

        } catch (_) {

          return;

        }


        if (
          url.origin !==
            window.location.origin
        ) {

          return;

        }


        /*
          Same-page anchors should continue normally.
        */

        if (
          url.pathname ===
            window.location.pathname &&
          url.search ===
            window.location.search &&
          url.hash
        ) {

          return;

        }


        event.preventDefault();

        window.location.assign(
          url.href
        );

      };


    document.addEventListener(
      'click',
      hardNavigate,
      true
    );



    return () => {

      cancelled =
        true;


      window.removeEventListener(
        'load',
        start
      );


      document.removeEventListener(
        'click',
        hardNavigate,
        true
      );


      if (
        initialiseTimer
      ) {

        window.clearTimeout(
          initialiseTimer
        );

      }


      if (
        comboTimer
      ) {

        window.clearTimeout(
          comboTimer
        );

      }

    };

  }, []);



  return (

    <div
      id={MOUNT_ID}
      className="pmdGoogleTranslateMount notranslate"
      translate="no"
      aria-hidden="true"
      data-no-motion
    />

  );

}
