'use client';

import {
  useEffect,
  useRef,
  useState
} from 'react';


const LANGUAGES = {

  en: {
    label: 'English',
    short: 'EN',
    flag: '🇬🇧',
    dir: 'ltr'
  },

  tr: {
    label: 'Türkçe',
    short: 'TR',
    flag: '🇹🇷',
    dir: 'ltr'
  },

  ar: {
    label: 'العربية',
    short: 'AR',
    flag: '🇴🇲',
    dir: 'rtl'
  }

};


const STORAGE_KEY =
  'pmd_language_v1';


const ROOT_DOMAIN =
  'paymydine.com';



function getGoogleTranslateSelect() {

  return document.querySelector(
    '.goog-te-combo'
  );

}



function isPayMyDineDomain() {

  const host =
    window.location.hostname;

  return (
    host === ROOT_DOMAIN ||
    host.endsWith(
      `.${ROOT_DOMAIN}`
    )
  );

}



function cookieDomains() {

  if (!isPayMyDineDomain()) {
    return [];
  }

  return [
    ROOT_DOMAIN,
    `.${ROOT_DOMAIN}`,
    `www.${ROOT_DOMAIN}`,
    `.www.${ROOT_DOMAIN}`
  ];

}



function writeGoogleCookie(
  value,
  expires
) {

  const basic =
    `googtrans=${value};` +
    `path=/;` +
    `expires=${expires};` +
    `SameSite=Lax`;

  /*
    Host-only cookie.
  */
  document.cookie =
    basic;


  /*
    Explicitly synchronise all domains that may have been
    created by previous PayMyDine / Google Translate versions.

    Most importantly:
      .paymydine.com

    Previous code only dealt with .www.paymydine.com.
  */
  cookieDomains().forEach(
    (domain) => {

      document.cookie =
        `${basic};domain=${domain}`;

    }
  );

}



function setGoogleCookie(language) {

  const value =
    `/en/${language}`;

  const expires =
    new Date(
      Date.now() +
      365 * 24 * 60 * 60 * 1000
    ).toUTCString();

  writeGoogleCookie(
    value,
    expires
  );

}



function clearGoogleCookie() {

  const expires =
    'Thu, 01 Jan 1970 00:00:00 GMT';

  const basic =
    `googtrans=;` +
    `path=/;` +
    `expires=${expires};` +
    `Max-Age=0;` +
    `SameSite=Lax`;


  /*
    Host-only cookie.
  */
  document.cookie =
    basic;


  /*
    Remove every domain variation used by both:
    - old PayMyDine translation code
    - Google Translate
  */
  cookieDomains().forEach(
    (domain) => {

      document.cookie =
        `${basic};domain=${domain}`;

    }
  );

}



function applyDirection(language) {

  const definition =
    LANGUAGES[language] ||
    LANGUAGES.en;


  document.documentElement.lang =
    language === 'ar'
      ? 'ar-OM'
      : language;


  document.documentElement.dir =
    definition.dir;


  document.documentElement
    .dataset.pmdLanguage =
      language;


  document.body?.classList.toggle(
    'pmdArabic',
    language === 'ar'
  );

}



export default function LanguageSwitcher() {

  const [open, setOpen] =
    useState(false);


  const [language, setLanguage] =
    useState('en');


  const rootRef =
    useRef(null);



  useEffect(() => {

    let saved =
      'en';


    try {

      saved =
        window.localStorage.getItem(
          STORAGE_KEY
        ) || 'en';

    } catch (_) {}


    if (!LANGUAGES[saved]) {

      saved =
        'en';

    }


    /*
      IMPORTANT:

      Kill the V9 frozen-page class immediately.

      Even if an old browser tab somehow carried this class,
      it must never keep PayMyDine hidden.
    */
    document.documentElement
      .classList.remove(
        'pmd-translation-pending'
      );


    /*
      ENGLISH RECOVERY.

      If localStorage says English, remove every old Google
      translation cookie automatically.

      User does NOT need to manually clear browser cookies.
    */
    if (saved === 'en') {

      clearGoogleCookie();

    } else {

      setGoogleCookie(
        saved
      );

    }


    setLanguage(
      saved
    );


    applyDirection(
      saved
    );



    const close = (event) => {

      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target
        )
      ) {

        setOpen(false);

      }

    };


    const escape = (event) => {

      if (
        event.key === 'Escape'
      ) {

        setOpen(false);

      }

    };


    document.addEventListener(
      'pointerdown',
      close
    );


    window.addEventListener(
      'keydown',
      escape
    );


    return () => {

      document.removeEventListener(
        'pointerdown',
        close
      );


      window.removeEventListener(
        'keydown',
        escape
      );

    };

  }, []);



  const changeLanguage = (
    next
  ) => {

    if (!LANGUAGES[next]) {

      return;

    }


    setOpen(false);


    if (
      next === language
    ) {

      return;

    }


    /*
      V10 deliberately DOES NOT add a loading screen here.
    */

    document.documentElement
      .classList.remove(
        'pmd-translation-pending'
      );


    try {

      window.localStorage.setItem(
        STORAGE_KEY,
        next
      );

    } catch (_) {}


    setLanguage(
      next
    );


    applyDirection(
      next
    );



    /*
      ========================================================
      ENGLISH
      ========================================================

      Remove ALL Google translation cookies.

      Then ask Google to restore the original source DOM.

      Finally reload once with a clean English cookie state.
    */

    if (
      next === 'en'
    ) {

      clearGoogleCookie();


      const combo =
        getGoogleTranslateSelect();


      if (combo) {

        combo.value =
          'en';


        combo.dispatchEvent(
          new Event(
            'change',
            {
              bubbles: true
            }
          )
        );


        window.setTimeout(
          () => {

            window.location.reload();

          },
          120
        );


        return;

      }


      window.location.reload();

      return;

    }



    /*
      ========================================================
      TURKISH / ARABIC
      ========================================================

      Synchronise cookie BEFORE asking Google to translate.
    */

    setGoogleCookie(
      next
    );


    const tryApply = (
      attempt = 0
    ) => {

      const combo =
        getGoogleTranslateSelect();


      if (combo) {

        combo.value =
          next;


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


      /*
        Google Translate normally exists far earlier because
        V10 loads it from <head>.

        This is just a fallback.
      */
      if (
        attempt < 50
      ) {

        window.setTimeout(
          () =>
            tryApply(
              attempt + 1
            ),
          60
        );

      } else {

        window.location.reload();

      }

    };


    tryApply();

  };



  const current =
    LANGUAGES[language] ||
    LANGUAGES.en;



  return (

    <div
      className="pmdLanguageSwitcher notranslate"
      ref={rootRef}
      data-no-motion
      translate="no"
    >

      <button
        className="pmdLanguageButton"
        type="button"
        aria-label="Select language"
        aria-expanded={open}
        onClick={() =>
          setOpen(
            (value) => !value
          )
        }
      >

        <span
          className="pmdLanguageFlag"
          aria-hidden="true"
        >
          {current.flag}
        </span>


        <span className="pmdLanguageCode">
          {current.short}
        </span>


        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M5.5 7.5 10 12l4.5-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </button>



      <div
        className={
          `pmdLanguageMenu ${
            open
              ? 'isOpen'
              : ''
          }`
        }
        aria-hidden={!open}
      >

        <button
          type="button"
          className={
            language === 'en'
              ? 'active'
              : ''
          }
          onClick={() =>
            changeLanguage(
              'en'
            )
          }
        >

          <span>
            🇬🇧
          </span>

          <span>
            <b>English</b>
            <small>English</small>
          </span>

        </button>



        <button
          type="button"
          className={
            language === 'tr'
              ? 'active'
              : ''
          }
          onClick={() =>
            changeLanguage(
              'tr'
            )
          }
        >

          <span>
            🇹🇷
          </span>

          <span>
            <b>Türkçe</b>
            <small>Turkish</small>
          </span>

        </button>



        <button
          type="button"
          className={
            language === 'ar'
              ? 'active'
              : ''
          }
          onClick={() =>
            changeLanguage(
              'ar'
            )
          }
        >

          <span>
            🇴🇲
          </span>

          <span>
            <b>العربية</b>
            <small>عُمان</small>
          </span>

        </button>

      </div>

    </div>

  );

}
