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
      Keep Google from visually shifting the entire page
      with its injected top bar.
    */

    const observer =
      new MutationObserver(() => {

        document.body.style.top =
          '0px';

        document.documentElement.style.marginTop =
          '0px';

      });


    observer.observe(
      document.documentElement,
      {
        attributes: true,
        childList: true,
        subtree: true
      }
    );


    return () => {
      observer.disconnect();
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
