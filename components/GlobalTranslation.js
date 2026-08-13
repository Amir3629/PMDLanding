'use client';

import {
  useEffect
} from 'react';


const STORAGE_KEY =
  'pmd_language_v1';


const SCRIPT_ID =
  'pmd-google-translate-script-v12';


const MOUNT_ID =
  'pmd-google-translate';


const SENTINEL_ID =
  'pmd-translation-sentinel';


const SENTINEL_SOURCE =
  'Translation ready';



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



function translatedMarkerExists() {

  return Boolean(

    document.querySelector(

      'html.translated-ltr,' +
      'html.translated-rtl,' +
      'body.translated-ltr,' +
      'body.translated-rtl'

    )

  );

}



function sentinelHasTranslated() {

  const sentinel =
    document.getElementById(
      SENTINEL_ID
    );


  if (
    !sentinel
  ) {

    return false;

  }


  const value =
    (
      sentinel.textContent ||
      ''
    ).trim();


  return (
    value.length > 0 &&
    value !== SENTINEL_SOURCE
  );

}



export default function GlobalTranslation() {

  useEffect(() => {

    const html =
      document.documentElement;


    const language =
      getSelectedLanguage();


    normaliseGoogleLayout();



    /*
      ========================================================
      ENGLISH
      ========================================================

      English is server-rendered source content.

      It never waits for Google Translate.
    */

    if (
      language === 'en'
    ) {

      html.dataset
        .pmdTranslationReady =
          'true';


      html.classList.remove(
        'pmd-language-switching'
      );


      return;

    }



    /*
      ========================================================
      TURKISH / ARABIC
      ========================================================
    */

    html.dataset
      .pmdTranslationReady =
        'pending';


    let cancelled =
      false;


    let alreadyReady =
      false;


    let initialiseTimer =
      null;


    let comboTimer =
      null;


    let pollingTimer =
      null;


    let readyTimer =
      null;


    let fallbackTimer =
      null;


    let sentinelObserver =
      null;


    let markerObserver =
      null;



    const translationDetected =
      () => {

        return (
          translatedMarkerExists() ||
          sentinelHasTranslated()
        );

      };



    const markReady =
      () => {

        if (
          cancelled ||
          alreadyReady
        ) {

          return;

        }


        if (
          !translationDetected()
        ) {

          return;

        }


        alreadyReady =
          true;


        /*
          Google can update many text nodes very quickly.

          Give those DOM mutations a very small settling window
          before exposing the page.
        */

        readyTimer =
          window.setTimeout(

            () => {

              window.requestAnimationFrame(
                () => {

                  window.requestAnimationFrame(
                    () => {

                      if (
                        cancelled
                      ) {

                        return;

                      }


                      html.dataset
                        .pmdTranslationReady =
                          'true';


                      html.classList.remove(
                        'pmd-language-switching'
                      );

                    }
                  );

                }
              );

            },

            90

          );

      };



    /*
      --------------------------------------------------------
      TRANSLATION SENTINEL
      --------------------------------------------------------

      This tiny off-screen phrase is translated by Google too.

      We don't reveal the actual website merely because the
      Google dropdown says AR/TR.

      We wait until Google has actually modified translated DOM.
    */

    const sentinel =
      document.getElementById(
        SENTINEL_ID
      );


    if (
      sentinel
    ) {

      sentinelObserver =
        new MutationObserver(
          () => {

            markReady();

          }
        );


      sentinelObserver.observe(
        sentinel,
        {
          characterData:
            true,

          childList:
            true,

          subtree:
            true
        }
      );

    }



    /*
      Google Translate commonly marks the translated document
      with translated-ltr / translated-rtl.

      Observe CLASS ONLY.

      This observer never triggers translation itself, so there
      is no V10-style mutation loop.
    */

    markerObserver =
      new MutationObserver(
        () => {

          markReady();

        }
      );


    markerObserver.observe(
      document.documentElement,
      {
        attributes:
          true,

        attributeFilter:
          ['class']
      }
    );


    if (
      document.body
    ) {

      markerObserver.observe(
        document.body,
        {
          attributes:
            true,

          attributeFilter:
            ['class']
        }
      );

    }



    /*
      ========================================================
      SAFETY FALLBACK
      ========================================================

      A broken Google connection must NEVER leave PayMyDine
      permanently blank.

      Normal translation should finish much earlier.

      If it completely fails, show the underlying page after
      five seconds instead of freezing the site forever.
    */

    fallbackTimer =
      window.setTimeout(

        () => {

          if (
            cancelled ||
            alreadyReady
          ) {

            return;

          }


          html.dataset
            .pmdTranslationReady =
              'fallback';


          html.classList.remove(
            'pmd-language-switching'
          );

        },

        5000

      );



    /*
      ========================================================
      WAIT FOR ACTUAL TRANSLATED DOM
      ========================================================
    */

    const pollForTranslation =
      (
        attempt = 0
      ) => {

        if (
          cancelled ||
          alreadyReady
        ) {

          return;

        }


        if (
          translationDetected()
        ) {

          markReady();

          return;

        }


        if (
          attempt < 80
        ) {

          pollingTimer =
            window.setTimeout(
              () =>
                pollForTranslation(
                  attempt + 1
                ),
              60
            );

        }

      };



    const applyCombo =
      (
        attempt = 0
      ) => {

        if (
          cancelled ||
          alreadyReady
        ) {

          return;

        }


        normaliseGoogleLayout();


        if (
          translationDetected()
        ) {

          markReady();

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
          Dispatch only if Google has not already selected the
          required language from the googtrans cookie.
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
                bubbles:
                  true
              }
            )
          );

        }


        /*
          IMPORTANT:

          DO NOT reveal here.

          A selected Google combo does NOT mean page text has
          finished translating.

          V11 revealed too early here, which caused the English
          blink.
        */

        pollForTranslation(0);

      };



    const initialise =
      (
        attempt = 0
      ) => {

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


        if (
          !window
            .__PMD_GT_INITIALIZED__
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


            window
              .__PMD_GT_INITIALIZED__ =
                true;


          } catch (error) {

            console.warn(
              'PayMyDine translation init retry:',
              error
            );


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


        comboTimer =
          window.setTimeout(
            () =>
              applyCombo(0),
            220
          );

      };



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


        if (
          window.google &&
          window.google.translate &&
          typeof window.google.translate
            .TranslateElement ===
              'function'
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
              Never freeze website because Google failed.
            */

            html.dataset
              .pmdTranslationReady =
                'fallback';


            html.classList.remove(
              'pmd-language-switching'
            );

          };


        document.body.appendChild(
          script
        );

      };



    /*
      React hydration has already occurred because this is a
      client useEffect.

      Wait for load too, then start Google.
    */

    const start =
      () => {

        window.setTimeout(
          loadGoogleTranslate,
          30
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
          once:
            true
        }
      );

    }



    /*
      ========================================================
      TRANSLATED INTERNAL NAVIGATION
      ========================================================

      TR/AR already use full page navigation.

      V12 conceals the current translated page BEFORE leaving,
      so the browser cannot expose English during the next
      document load.
    */

    const concealForNavigation =
      () => {

        html.classList.add(
          'pmd-language-switching'
        );


        html.dataset
          .pmdTranslationReady =
            'pending';

      };



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
          !(
            target instanceof
              Element
          )
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
          Normal same-page anchors remain normal.
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


        concealForNavigation();


        /*
          Allow browser one paint frame to conceal the current
          document, then perform real page navigation.
        */

        window.requestAnimationFrame(
          () => {

            window.requestAnimationFrame(
              () => {

                window.location.assign(
                  url.href
                );

              }
            );

          }
        );

      };


    document.addEventListener(
      'click',
      hardNavigate,
      true
    );



    /*
      If translation somehow completed before all watchers were
      installed, detect it now.
    */

    markReady();



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


      sentinelObserver?.disconnect();

      markerObserver?.disconnect();


      [
        initialiseTimer,
        comboTimer,
        pollingTimer,
        readyTimer,
        fallbackTimer
      ].forEach(
        (timer) => {

          if (
            timer
          ) {

            window.clearTimeout(
              timer
            );

          }

        }
      );

    };

  }, []);



  return (

    <>

      <div
        id={MOUNT_ID}
        className="pmdGoogleTranslateMount notranslate"
        translate="no"
        aria-hidden="true"
        data-no-motion
      />


      {/*
        IMPORTANT:

        Do NOT add:
        - display:none
        - translate="no"
        - notranslate

        Google needs to translate this phrase so V12 knows the
        translated DOM has genuinely started updating.
      */}

      <span
        id={SENTINEL_ID}
        className="pmdTranslationSentinel"
        aria-hidden="true"
        data-no-motion
      >
        Translation ready
      </span>

    </>

  );

}
