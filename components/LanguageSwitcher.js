'use client';

import {
  useEffect,
  useRef,
  useState
} from 'react';

import {
  usePathname
} from 'next/navigation';


const LANGUAGES = {
  en: { short: 'EN', flag: '🇬🇧' },
  tr: { short: 'TR', flag: '🇹🇷' },
  ar: { short: 'AR', flag: '🇴🇲' }
};


const UI = {
  en: {
    aria: 'Select language',
    names: { en: 'English', tr: 'Turkish', ar: 'Arabic' },
    sub: { en: 'English', tr: 'Türkiye', ar: 'Oman Arabic' }
  },
  tr: {
    aria: 'Dil seç',
    names: { en: 'İngilizce', tr: 'Türkçe', ar: 'Arapça' },
    sub: { en: 'İngiltere', tr: 'Türkiye', ar: 'Umman' }
  },
  ar: {
    aria: 'اختر اللغة',
    names: { en: 'الإنجليزية', tr: 'التركية', ar: 'العربية' },
    sub: { en: 'المملكة المتحدة', tr: 'تركيا', ar: 'عُمان' }
  }
};


const COOKIE = 'pmd_locale';
const SOURCE_COOKIE = 'pmd_locale_source';
const YEAR = 60 * 60 * 24 * 365;


function normaliseLocale(value) {
  return value === 'tr' || value === 'ar' ? value : 'en';
}


function stripLocale(pathname) {
  const clean = pathname.replace(/^\/(tr|ar)(?=\/|$)/, '');
  return clean || '/';
}


function localisePath(pathname, locale) {
  const base = stripLocale(pathname);

  if (locale === 'en') return base;
  return `/${locale}${base === '/' ? '' : base}`;
}


function saveLocale(locale) {
  const secure =
    window.location.protocol === 'https:'
      ? '; Secure'
      : '';

  document.cookie =
    `${COOKIE}=${locale}; Path=/; Max-Age=${YEAR}; SameSite=Lax${secure}`;

  document.cookie =
    `${SOURCE_COOKIE}=manual; Path=/; Max-Age=${YEAR}; SameSite=Lax${secure}`;
}


export default function LanguageSwitcher({ locale = 'en' }) {
  const pathname = usePathname() || '/';
  const language = normaliseLocale(locale);
  const current = LANGUAGES[language];
  const ui = UI[language];

  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const escape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', close);
    window.addEventListener('keydown', escape);

    return () => {
      document.removeEventListener('pointerdown', close);
      window.removeEventListener('keydown', escape);
    };
  }, [language]);

  const changeLanguage = (nextValue) => {
    const next = normaliseLocale(nextValue);
    setOpen(false);

    if (next === language) return;

    saveLocale(next);

    const nextPath = localisePath(pathname, next);
    const suffix = `${window.location.search || ''}${window.location.hash || ''}`;

    window.location.assign(`${nextPath}${suffix}`);
  };

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
        aria-label={ui.aria}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="pmdLanguageFlag" aria-hidden="true">
          {current.flag}
        </span>
        <span className="pmdLanguageCode">{current.short}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
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
        className={`pmdLanguageMenu ${open ? 'isOpen' : ''}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={language === 'en' ? 'active' : ''}
          onClick={() => changeLanguage('en')}
        >
          <span>🇬🇧</span>
          <span><b>{ui.names.en}</b><small>{ui.sub.en}</small></span>
        </button>

        <button
          type="button"
          className={language === 'tr' ? 'active' : ''}
          onClick={() => changeLanguage('tr')}
        >
          <span>🇹🇷</span>
          <span><b>{ui.names.tr}</b><small>{ui.sub.tr}</small></span>
        </button>

        <button
          type="button"
          className={language === 'ar' ? 'active' : ''}
          onClick={() => changeLanguage('ar')}
        >
          <span>🇴🇲</span>
          <span><b>{ui.names.ar}</b><small>{ui.sub.ar}</small></span>
        </button>
      </div>
    </div>
  );
}
