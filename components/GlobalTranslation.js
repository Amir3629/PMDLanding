'use client';

import { useEffect } from 'react';


const STORAGE_KEY =
  'pmd_language_v1';


export default function GlobalTranslation() {

  useEffect(() => {

    /*
      Google translation callback.

      This widget is deliberately hidden.
      PayMyDine provides its own UI.
    */

    window.googleTranslateElementInit =
      function googleTranslateElementInit() {

        if (
          !window.google ||
          !window.google.translate
        ) {
          return;
        }

        const mount =
          document.getElementById(
            'pmd-google-translate'
          );

        if (!mount) return;


        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',

            includedLanguages:
              'en,tr,ar',

            autoDisplay: false,

            multilanguagePage: true
          },

          'pmd-google-translate'
        );


        let selected = 'en';

        try {
          selected =
            window.localStorage.getItem(
              STORAGE_KEY
            ) || 'en';
        } catch (_) {}


        if (
          selected === 'tr' ||
          selected === 'ar'
        ) {

          window.setTimeout(() => {

            const combo =
              document.querySelector(
                '.goog-te-combo'
              );

            if (
              combo &&
              combo.value !== selected
            ) {
              combo.value =
                selected;

              combo.dispatchEvent(
                new Event('change')
              );
            }

          }, 250);

        }

      };


    const existing =
      document.querySelector(
        'script[data-pmd-translate]'
      );

    if (!existing) {

      const script =
        document.createElement(
          'script'
        );

      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

      script.async = true;

      script.defer = true;

      script.dataset.pmdTranslate =
        'true';

      document.body.appendChild(
        script
      );

    }


    /*
      ----------------------------------------------------------
      TRANSLATION READY DETECTION
      ----------------------------------------------------------

      English is already server-rendered.

      For Turkish we wait for Google's translated-ltr state.
      For Arabic we wait for Google's translated-rtl state.

      Only THEN is the transition shield removed.

      This prevents the original English page appearing for a
      fraction of a second before translated text replaces it.
    */

    const releaseTranslationShield = () => {

      const html =
        document.documentElement;

      const body =
        document.body;

      const language =
        html.dataset.pmdLanguage ||
        'en';

      if (language === 'en') {

        html.classList.remove(
          'pmd-translation-pending'
        );

        return;
      }


      const translatedClass =
        language === 'ar'
          ? 'translated-rtl'
          : 'translated-ltr';


      const ready =
        html.classList.contains(
          translatedClass
        ) ||
        body.classList.contains(
          translatedClass
        );


      if (ready) {

        window.requestAnimationFrame(() => {

          window.requestAnimationFrame(() => {

            html.classList.remove(
              'pmd-translation-pending'
            );

          });

        });

      }

    };


    /*
      Keep Google from visually shifting the entire page
      with its injected top bar.

      Also watch for Google's translated-ltr / translated-rtl
      class.
    */

    const observer =
      new MutationObserver(() => {

        document.body.style.top =
          '0px';

        document.documentElement.style.marginTop =
          '0px';

        releaseTranslationShield();

      });


    observer.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: [
          'class',
          'lang',
          'dir'
        ],
        childList: true,
        subtree: true
      }
    );


    /*
      Check once immediately too.
    */

    releaseTranslationShield();


    /*
      Safety valve:
      if the external translation service cannot respond,
      never trap the visitor behind the shield forever.

      Normal translation should complete far earlier than this.
    */

    const safetyTimer =
      window.setTimeout(() => {

        document.documentElement.classList.remove(
          'pmd-translation-pending'
        );

      }, 4500);


    return () => {

      observer.disconnect();

      window.clearTimeout(
        safetyTimer
      );

    };

  }, []);


  return (
    <div
      id="pmd-google-translate"
      className="pmdGoogleTranslateMount"
      aria-hidden="true"
    />
  );
}
