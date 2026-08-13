import { NextResponse } from 'next/server';

const SUPPORTED = new Set(['tr', 'ar']);
const COOKIE = 'pmd_locale';
const YEAR = 60 * 60 * 24 * 365;

function firstSegment(pathname) {
  return pathname.split('/').filter(Boolean)[0] || '';
}

function setLocale(response, locale) {
  response.cookies.set(COOKIE, locale, {
    path: '/',
    maxAge: YEAR,
    sameSite: 'lax'
  });
  return response;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const segment = firstSegment(pathname);

  if (segment === 'en') {
    const url = request.nextUrl.clone();
    const clean = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    url.pathname = clean;
    return setLocale(NextResponse.redirect(url), 'en');
  }

  if (SUPPORTED.has(segment)) {
    return setLocale(NextResponse.next(), segment);
  }

  const saved = request.cookies.get(COOKIE)?.value;
  if (SUPPORTED.has(saved)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${saved}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  return setLocale(NextResponse.next(), 'en');
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|site-assets|assets|Images|.*\\..*).*)'
  ]
};
