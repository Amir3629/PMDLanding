'use client';

import {
  useEffect
} from 'react';


const STORAGE_KEY =
  'pmd_language_v1';



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



export default function GlobalTranslation() {

  useEffect(() => {

    /*
      V10 NEVER blocks the document.

      This fixes the V9 state where the whole website could
      remain behind the PayMyDine translation shield.
    */

    document.documentElement
      .classList.remove(
        'pmd-translation-pending'
      );



    let lastApplied =
      null;


    const applySelectedLanguage =
      () => {

        const selected =
          getSelectedLanguage();


        /*
          English is the original server-rendered language.
        */
        if (
          selected === 'en'
        ) {

          return true;

        }


        const combo =
          document.querySelector(
            '.goog-te-combo'
          );


        if (!combo) {

          return false;

        }


        /*
          Only trigger once per selected language.
        */
        if (
          lastApplied !== selected
        ) {

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


          lastApplied =
            selected;

        }


        return true;

      };



    /*
      The Google script is now loaded from <head>, before
      React's normal useEffect timing.

      If it is already available, make sure its callback ran.
    */

    if (
      window.google &&
      window.google.translate &&
      typeof window.googleTranslateElementInit ===
        'function'
    ) {

      window.googleTranslateElementInit();

    }



    /*
      Quick fallback polling for slow networks.
    */

    let attempts =
      0;


    const timer =
      window.setInterval(
        () => {

          applySelectedLanguage();


          attempts +=
            1;


          if (
            attempts >= 40
          ) {

            window.clearInterval(
              timer
            );

          }

        },
        75
      );



    /*
      Google sometimes injects a body top offset/banner.
      Keep the PayMyDine layout in its normal position.
    */

    const normaliseGoogleLayout =
      () => {

        if (
          document.body &&
          document.body.style.top !==
            '0px'
        ) {

          document.body.style.top =
            '0px';

        }


        if (
          document.documentElement
            .style.marginTop !==
            '0px'
        ) {

          document.documentElement
            .style.marginTop =
              '0px';

        }

      };


    normaliseGoogleLayout();



    const observer =
      new MutationObserver(
        () => {

          normaliseGoogleLayout();

          applySelectedLanguage();

        }
      );


    observer.observe(
      document.documentElement,
      {
        childList: true,
        subtree: true
      }
    );



    return () => {

      window.clearInterval(
        timer
      );

      observer.disconnect();

    };

  }, []);



  return (

    <div
      id="pmd-google-translate"
      className="pmdGoogleTranslateMount notranslate"
      translate="no"
      aria-hidden="true"
    />

  );

}
