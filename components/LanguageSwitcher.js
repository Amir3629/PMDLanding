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



function clearGoogleCookie() {

  const basic =
    'googtrans=;' +
    'path=/;' +
    'Max-Age=0;' +
    'SameSite=Lax';


  document.cookie =
    basic;


  if (
    isPayMyDineDomain()
  ) {

    document.cookie =
      `${basic};domain=.${ROOT_DOMAIN}`;

  }

}



function setGoogleCookie(
  language
) {

  const expires =
    new Date(
      Date.now() +
      365 * 24 * 60 * 60 * 1000
    ).toUTCString();


  const basic =
    `googtrans=/en/${language};` +
    'path=/;' +
    `expires=${expires};` +
    'SameSite=Lax';


  document.cookie =
    basic;


  if (
    isPayMyDineDomain()
  ) {

    document.cookie =
      `${basic};domain=.${ROOT_DOMAIN}`;

  }

}



function applyDirection(
  language
) {

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


    if (
      !LANGUAGES[saved]
    ) {

      saved =
        'en';

    }


    setLanguage(
      saved
    );


    applyDirection(
      saved
    );


    const close =
      (event) => {

        if (
          rootRef.current &&
          !rootRef.current.contains(
            event.target
          )
        ) {

          setOpen(false);

        }

      };


    const escape =
      (event) => {

        if (
          event.key ===
            'Escape'
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



  const changeLanguage =
    (next) => {

      if (
        !LANGUAGES[next] ||
        next === language
      ) {

        setOpen(false);

        return;

      }


      setOpen(false);


      const html =
        document.documentElement;


      /*
        Conceal CURRENT page before changing language.

        Do not change current DOM text/direction live.

        The next document starts with the correct language state
        before its first paint.
      */

      html.classList.add(
        'pmd-language-switching'
      );


      html.dataset
        .pmdTranslationReady =
          'pending';


      try {

        window.localStorage.setItem(
          STORAGE_KEY,
          next
        );

      } catch (_) {}


      if (
        next === 'en'
      ) {

        clearGoogleCookie();

      } else {

        setGoogleCookie(
          next
        );

      }


      /*
        Give concealment one rendering frame.

        Then reload into CLEAN server DOM.
      */

      window.requestAnimationFrame(
        () => {

          window.requestAnimationFrame(
            () => {

              window.location.reload();

            }
          );

        }
      );

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
          <span>🇬🇧</span>

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
          <span>🇹🇷</span>

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
          <span>🇴🇲</span>

          <span>
            <b>العربية</b>
            <small>عُمان</small>
          </span>
        </button>

      </div>

    </div>

  );

}
