import { NextResponse } from 'next/server';
import { lookup as lookupCountryByIp } from 'ip-location-api/pack';

const PREFIXED_LOCALES =
  new Set(['tr', 'ar']);

const ALL_LOCALES =
  new Set(['en', 'tr', 'ar']);

const ARABIC_COUNTRIES =
  new Set([
    'AE',
    'BH',
    'DZ',
    'DJ',
    'EG',
    'IQ',
    'JO',
    'KM',
    'KW',
    'LB',
    'LY',
    'MA',
    'MR',
    'OM',
    'PS',
    'QA',
    'SA',
    'SD',
    'SO',
    'SY',
    'TN',
    'YE'
  ]);

const LOCALE_COOKIE =
  'pmd_locale';

const SOURCE_COOKIE =
  'pmd_locale_source';

const YEAR =
  60 * 60 * 24 * 365;

const COUNTRY_HEADERS = [
  'cf-ipcountry',
  'x-vercel-ip-country',
  'cloudfront-viewer-country',
  'x-country-code',
  'x-geo-country'
];

const CRAWLER_PATTERN =
  /bot|crawler|spider|slurp|google-inspectiontool|googleother|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|pinterest|lighthouse|pagespeed|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider/i;

function firstSegment(pathname) {
  return (
    pathname
      .split('/')
      .filter(Boolean)[0] ||
    ''
  );
}

function normaliseLocale(value) {
  return ALL_LOCALES.has(value)
    ? value
    : null;
}

function stripLocale(pathname) {
  const clean =
    pathname.replace(
      /^\/(en|tr|ar)(?=\/|$)/,
      ''
    );

  return clean || '/';
}

function localisePath(pathname, locale) {
  const base =
    stripLocale(pathname);

  if (locale === 'en') {
    return base;
  }

  return (
    `/${locale}` +
    (base === '/' ? '' : base)
  );
}

function contentLanguage(locale) {
  if (locale === 'ar') {
    return 'ar-OM';
  }

  return locale;
}

function isCrawler(request) {
  const userAgent =
    request.headers.get('user-agent') ||
    '';

  return CRAWLER_PATTERN.test(userAgent);
}

function isPrefetch(request) {
  return (
    request.headers.has(
      'next-router-prefetch'
    ) ||
    request.headers.get('purpose') ===
      'prefetch'
  );
}

function cleanIp(value) {
  if (!value) {
    return null;
  }

  let ip =
    String(value)
      .trim()
      .replace(/^["']|["']$/g, '');

  if (
    ip.startsWith('[') &&
    ip.includes(']')
  ) {
    ip =
      ip.slice(
        1,
        ip.indexOf(']')
      );
  }

  if (ip.startsWith('::ffff:')) {
    ip = ip.slice(7);
  }

  if (
    /^\d+\.\d+\.\d+\.\d+:\d+$/.test(
      ip
    )
  ) {
    ip =
      ip.replace(/:\d+$/, '');
  }

  return ip || null;
}

function isPrivateIp(ip) {
  if (!ip) {
    return true;
  }

  if (
    ip === '::1' ||
    ip === '0.0.0.0' ||
    ip.startsWith('fc') ||
    ip.startsWith('fd') ||
    ip.startsWith('fe80:')
  ) {
    return true;
  }

  const match =
    ip.match(
      /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
    );

  if (!match) {
    return false;
  }

  const a = Number(match[1]);
  const b = Number(match[2]);

  return (
    a === 10 ||
    a === 127 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168)
  );
}

function clientIp(request) {
  /*
    Nginx explicitly overwrites X-Real-IP with $remote_addr on this VPS,
    so it is the primary trusted client-IP signal.
  */
  const realIp =
    cleanIp(
      request.headers.get('x-real-ip')
    );

  if (
    realIp &&
    !isPrivateIp(realIp)
  ) {
    return realIp;
  }

  const cloudflareIp =
    cleanIp(
      request.headers.get(
        'cf-connecting-ip'
      )
    );

  if (
    cloudflareIp &&
    !isPrivateIp(cloudflareIp)
  ) {
    return cloudflareIp;
  }

  const forwarded =
    (
      request.headers.get(
        'x-forwarded-for'
      ) ||
      ''
    )
      .split(',')
      .map(cleanIp)
      .filter(Boolean);

  /*
    Use the last public address.

    Nginx appends the actual remote address to
    X-Forwarded-For. Choosing from the right prevents
    a user-supplied first entry from controlling locale.
  */
  for (
    let index =
      forwarded.length - 1;
    index >= 0;
    index -= 1
  ) {
    if (
      !isPrivateIp(
        forwarded[index]
      )
    ) {
      return forwarded[index];
    }
  }

  return null;
}

function countryFromHeader(request) {
  for (
    const header of COUNTRY_HEADERS
  ) {
    const value =
      (
        request.headers.get(header) ||
        ''
      )
        .trim()
        .toUpperCase();

    if (
      /^[A-Z]{2}$/.test(value) &&
      value !== 'XX'
    ) {
      return value;
    }
  }

  return null;
}

function countryFromIp(request) {
  const ip =
    clientIp(request);

  if (!ip) {
    return null;
  }

  try {
    const result =
      lookupCountryByIp(ip);

    const country =
      result &&
      typeof result.country ===
        'string'
        ? result.country
            .trim()
            .toUpperCase()
        : '';

    return /^[A-Z]{2}$/.test(country)
      ? country
      : null;
  } catch (_) {
    return null;
  }
}

function localeFromCountry(country) {
  if (country === 'TR') {
    return 'tr';
  }

  if (
    country &&
    ARABIC_COUNTRIES.has(country)
  ) {
    return 'ar';
  }

  return 'en';
}

function localeFromAcceptLanguage(
  header
) {
  const values =
    String(header || '')
      .split(',')
      .map((part) => {
        const [tagPart, ...params] =
          part.trim().split(';');

        const tag =
          tagPart
            .trim()
            .toLowerCase();

        let quality = 1;

        for (const param of params) {
          const match =
            param.match(
              /^\s*q=([0-9.]+)\s*$/i
            );

          if (match) {
            quality =
              Number(match[1]);
          }
        }

        return {
          tag,
          quality:
            Number.isFinite(quality)
              ? quality
              : 0
        };
      })
      .filter(
        (item) =>
          item.tag &&
          item.quality > 0
      )
      .sort(
        (a, b) =>
          b.quality - a.quality
      );

  for (const item of values) {
    const primary =
      item.tag.split('-')[0];

    if (primary === 'tr') {
      return 'tr';
    }

    if (primary === 'ar') {
      return 'ar';
    }

    if (primary === 'en') {
      return 'en';
    }
  }

  return 'en';
}

function detectLocale(request) {
  const country =
    countryFromIp(request) ||
    countryFromHeader(request);

  if (country) {
    return {
      locale:
        localeFromCountry(country),
      source: 'country',
      country
    };
  }

  return {
    locale:
      localeFromAcceptLanguage(
        request.headers.get(
          'accept-language'
        )
      ),
    source: 'language',
    country: null
  };
}

function setLocaleCookies(
  response,
  request,
  locale,
  source
) {
  const secure =
    request.nextUrl.protocol ===
    'https:';

  response.cookies.set(
    LOCALE_COOKIE,
    locale,
    {
      path: '/',
      maxAge: YEAR,
      sameSite: 'lax',
      secure
    }
  );

  response.cookies.set(
    SOURCE_COOKIE,
    source,
    {
      path: '/',
      maxAge: YEAR,
      sameSite: 'lax',
      secure
    }
  );

  response.headers.set(
    'Content-Language',
    contentLanguage(locale)
  );

  return response;
}

function publicRedirectUrl(
  request,
  pathname =
    request.nextUrl.pathname
) {
  /*
    Nginx proxies the public HTTPS site to Next.js on
    127.0.0.1:3000. Never allow that internal port or
    internal origin to leak into a browser redirect.
  */
  const url =
    request.nextUrl.clone();

  url.protocol = 'https:';
  url.hostname =
    'www.paymydine.com';
  url.port = '';
  url.pathname = pathname;

  return url;
}

function localeRedirect(
  request,
  locale,
  source,
  status = 307
) {
  const url =
    publicRedirectUrl(
      request,
      localisePath(
        request.nextUrl.pathname,
        locale
      )
    );

  const response =
    NextResponse.redirect(
      url,
      status
    );

  /*
    Never let a CDN cache one visitor's automatic
    country/language redirect for another visitor.
  */
  response.headers.set(
    'Cache-Control',
    'private, no-store, max-age=0'
  );

  response.headers.set(
    'Vary',
    'Accept-Language, CF-IPCountry, X-Vercel-IP-Country, CloudFront-Viewer-Country'
  );

  return setLocaleCookies(
    response,
    request,
    locale,
    source
  );
}

function nextForLocale(
  request,
  locale,
  source = null
) {
  const response =
    NextResponse.next();

  response.headers.set(
    'Content-Language',
    contentLanguage(locale)
  );

  if (source) {
    return setLocaleCookies(
      response,
      request,
      locale,
      source
    );
  }

  return response;
}

function canonicalHostRedirect(
  request
) {
  const host =
    (
      request.headers.get('host') ||
      ''
    )
      .split(':')[0]
      .toLowerCase();

  if (host !== 'paymydine.com') {
    return null;
  }

  const url =
    publicRedirectUrl(request);

  return NextResponse.redirect(
    url,
    308
  );
}

export function proxy(request) {
  const hostRedirect =
    canonicalHostRedirect(request);

  if (hostRedirect) {
    return hostRedirect;
  }

  if (
    request.method !== 'GET' &&
    request.method !== 'HEAD'
  ) {
    return NextResponse.next();
  }

  const { pathname } =
    request.nextUrl;

  const segment =
    firstSegment(pathname);

  const savedLocale =
    normaliseLocale(
      request.cookies.get(
        LOCALE_COOKIE
      )?.value
    );

  const savedSource =
    request.cookies.get(
      SOURCE_COOKIE
    )?.value;

  /*
    /en is an alias only.
    English canonical URLs stay unprefixed.
  */
  if (segment === 'en') {
    return localeRedirect(
      request,
      'en',
      'manual',
      308
    );
  }

  /*
    Explicit native locale URL wins.

    Preserve an existing automatic source during the
    second request of an automatic redirect. A manual
    language-switch click writes source=manual first.
  */
  if (
    PREFIXED_LOCALES.has(segment)
  ) {
    const source =
      savedLocale === segment &&
      savedSource === 'auto'
        ? 'auto'
        : 'manual';

    return nextForLocale(
      request,
      segment,
      source
    );
  }

  /*
    Search engines and social preview bots always receive
    stable unprefixed English unless they explicitly crawl
    /tr or /ar. Separate URLs + hreflang expose every locale.
  */
  if (
    isCrawler(request) ||
    isPrefetch(request)
  ) {
    return nextForLocale(
      request,
      'en'
    );
  }

  const detected =
    detectLocale(request);

  let locale =
    detected.locale;

  let source = 'auto';

  if (savedLocale) {
    /*
      Existing cookies without a source came from the old
      language switcher. Treat them as manual preferences.

      For an automatic cookie, a newly detected country may
      update the locale when the visitor travels.
    */
    if (
      savedSource !== 'auto'
    ) {
      locale = savedLocale;
      source = 'manual';
    } else if (
      detected.source !== 'country'
    ) {
      locale = savedLocale;
      source = 'auto';
    }
  }

  if (
    locale === 'tr' ||
    locale === 'ar'
  ) {
    return localeRedirect(
      request,
      locale,
      source,
      307
    );
  }

  /*
    If a previous automatic TR/AR decision changed to English,
    update the cookie once. Otherwise English stays cacheable
    and the client language switcher does not write a cookie
    until the visitor makes an explicit choice.
  */
  if (
    savedSource === 'auto' &&
    savedLocale !== 'en'
  ) {
    return nextForLocale(
      request,
      'en',
      'auto'
    );
  }

  return nextForLocale(
    request,
    'en'
  );
}

export const config = {
  matcher: [
    '/((?!api|_next/data|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|manifest.webmanifest|opengraph-image|twitter-image|site-assets|assets|Images|.*\\..*).*)'
  ]
};
