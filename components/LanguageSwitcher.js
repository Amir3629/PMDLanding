'use client';

import { useEffect, useRef, useState } from 'react';

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

const STORAGE_KEY = 'pmd_language_v1';


function getGoogleTranslateSelect() {
  return document.querySelector('.goog-te-combo');
}


function setGoogleCookie(language) {
  const value =
    language === 'en'
      ? '/en/en'
      : `/en/${language}`;

  const expires =
    new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
      .toUTCString();

  document.cookie =
    `googtrans=${value};path=/;expires=${expires};SameSite=Lax`;

  const host =
    window.location.hostname;

  if (
    host &&
    host !== 'localhost' &&
    !/^\d+\.\d+\.\d+\.\d+$/.test(host)
  ) {
    document.cookie =
      `googtrans=${value};domain=.${host};path=/;expires=${expires};SameSite=Lax`;
  }
}


function clearGoogleCookie() {
  document.cookie =
    'googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';

  const host =
    window.location.hostname;

  if (
    host &&
    host !== 'localhost' &&
    !/^\d+\.\d+\.\d+\.\d+$/.test(host)
  ) {
    document.cookie =
      `googtrans=;domain=.${host};path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
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

  document.documentElement.dataset.pmdLanguage =
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
    let saved = 'en';

    try {
      saved =
        window.localStorage.getItem(
          STORAGE_KEY
        ) || 'en';
    } catch (_) {}

    if (!LANGUAGES[saved]) {
      saved = 'en';
    }

    setLanguage(saved);
    applyDirection(saved);


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
      if (event.key === 'Escape') {
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


  const changeLanguage = (next) => {
    if (!LANGUAGES[next]) return;

    setLanguage(next);
    setOpen(false);

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        next
      );
    } catch (_) {}

    applyDirection(next);

    if (next === 'en') {
      clearGoogleCookie();

      const combo =
        getGoogleTranslateSelect();

      if (combo) {
        combo.value = 'en';
        combo.dispatchEvent(
          new Event('change')
        );

        window.setTimeout(() => {
          window.location.reload();
        }, 80);

        return;
      }

      window.location.reload();
      return;
    }

    setGoogleCookie(next);

    const tryApply = (
      attempt = 0
    ) => {
      const combo =
        getGoogleTranslateSelect();

      if (combo) {
        combo.value = next;

        combo.dispatchEvent(
          new Event('change')
        );

        return;
      }

      if (attempt < 30) {
        window.setTimeout(
          () => tryApply(attempt + 1),
          100
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
      className="pmdLanguageSwitcher"
      ref={rootRef}
      data-no-motion
    >
      <button
        className="pmdLanguageButton"
        type="button"
        aria-label="Select language"
        aria-expanded={open}
        onClick={() =>
          setOpen((value) => !value)
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
            open ? 'isOpen' : ''
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
            changeLanguage('en')
          }
        >
          <span>🇬🇧</span>

          <span>
            <b>English</b>
            <small>
              English
            </small>
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
            changeLanguage('tr')
          }
        >
          <span>🇹🇷</span>

          <span>
            <b>Türkçe</b>
            <small>
              Turkish
            </small>
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
            changeLanguage('ar')
          }
        >
          <span>🇴🇲</span>

          <span>
            <b>العربية</b>
            <small>
              عُمان
            </small>
          </span>
        </button>

      </div>
    </div>
  );
}
