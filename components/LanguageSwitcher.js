'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const LANGUAGES = {
  en: { short: 'EN', flag: '🇬🇧' },
  de: { short: 'DE', flag: '🇩🇪' },
  tr: { short: 'TR', flag: '🇹🇷' },
  ar: { short: 'AR', flag: '🇴🇲' }
};

const UI = {
  en: {
    aria: 'Select language',
    names: { en: 'English', de: 'German', tr: 'Turkish', ar: 'Arabic' },
    sub: { en: 'English', de: 'Germany', tr: 'Türkiye', ar: 'Oman Arabic' }
  },
  de: {
    aria: 'Sprache auswählen',
    names: { en: 'Englisch', de: 'Deutsch', tr: 'Türkisch', ar: 'Arabisch' },
    sub: { en: 'Vereinigtes Königreich', de: 'Deutschland', tr: 'Türkei', ar: 'Oman' }
  },
  tr: {
    aria: 'Dil seç',
    names: { en: 'İngilizce', de: 'Almanca', tr: 'Türkçe', ar: 'Arapça' },
    sub: { en: 'İngiltere', de: 'Almanya', tr: 'Türkiye', ar: 'Umman' }
  },
  ar: {
    aria: 'اختر اللغة',
    names: { en: 'الإنجليزية', de: 'الألمانية', tr: 'التركية', ar: 'العربية' },
    sub: { en: 'المملكة المتحدة', de: 'ألمانيا', tr: 'تركيا', ar: 'عُمان' }
  }
};

const COOKIE = 'pmd_locale';
const SOURCE_COOKIE = 'pmd_locale_source';
const YEAR = 60 * 60 * 24 * 365;
const SUPPORTED = new Set(['en', 'de', 'tr', 'ar']);

function normaliseLocale(value) {
  return SUPPORTED.has(value) ? value : 'en';
}

function stripLocale(pathname) {
  const clean = pathname.replace(/^\/(de|tr|ar)(?=\/|$)/, '');
  return clean || '/';
}

function localisePath(pathname, locale) {
  const base = stripLocale(pathname);
  if (locale === 'en') return base;
  return `/${locale}${base === '/' ? '' : base}`;
}

function saveLocale(locale) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE}=${locale}; Path=/; Max-Age=${YEAR}; SameSite=Lax${secure}`;
  document.cookie = `${SOURCE_COOKIE}=manual; Path=/; Max-Age=${YEAR}; SameSite=Lax${secure}`;
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
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
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

  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has('__pmd_locale_refresh')) return;
    url.searchParams.delete('__pmd_locale_refresh');
    const clean = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState(window.history.state, '', clean);
  }, []);

  const changeLanguage = (nextValue) => {
    const next = normaliseLocale(nextValue);
    setOpen(false);
    if (next === language) return;
    saveLocale(next);
    const nextPath = localisePath(pathname, next);
    const target = new URL(nextPath, window.location.origin);
    const currentParams = new URLSearchParams(window.location.search || '');
    currentParams.delete('__pmd_locale_refresh');
    currentParams.forEach((value, key) => target.searchParams.append(key, value));
    target.searchParams.set('__pmd_locale_refresh', String(Date.now()));
    target.hash = window.location.hash || '';
    window.location.assign(`${target.pathname}${target.search}${target.hash}`);
  };

  // Arabic remains implemented and directly reachable, but is intentionally disabled in the public selector.
  const items = ['en', 'de', 'tr'];

  return (
    <div className="pmdLanguageSwitcher notranslate" ref={rootRef} data-no-motion translate="no">
      <button
        className="pmdLanguageButton"
        type="button"
        aria-label={ui.aria}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="pmdLanguageFlag" aria-hidden="true">{current.flag}</span>
        <span className="pmdLanguageCode">{current.short}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`pmdLanguageMenu ${open ? 'isOpen' : ''}`} aria-hidden={!open}>
        {items.map((code) => (
          <button
            type="button"
            className={language === code ? 'active' : ''}
            onClick={() => changeLanguage(code)}
            key={code}
          >
            <span>{LANGUAGES[code].flag}</span>
            <span><b>{ui.names[code]}</b><small>{ui.sub[code]}</small></span>
          </button>
        ))}
      </div>
    </div>
  );
}
