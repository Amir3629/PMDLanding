import { notFound } from 'next/navigation';
import { solutionPages, resources } from '@/data/site';
import { teamPages } from '@/data/teams';

import * as TR_PAGE_0 from '@/locales/tr/pages/ai/page';
import * as TR_PAGE_1 from '@/locales/tr/pages/company/page';
import * as TR_PAGE_2 from '@/locales/tr/pages/contact/page';
import * as TR_PAGE_3 from '@/locales/tr/pages/demo/page';
import * as TR_PAGE_4 from '@/locales/tr/pages/how-it-works/page';
import * as TR_PAGE_5 from '@/locales/tr/pages/implementation/page';
import * as TR_PAGE_6 from '@/locales/tr/pages/integrations/page';
import * as TR_PAGE_7 from '@/locales/tr/pages/page';
import * as TR_PAGE_8 from '@/locales/tr/pages/platform/page';
import * as TR_PAGE_9 from '@/locales/tr/pages/pricing/page';
import * as TR_PAGE_10 from '@/locales/tr/pages/resources/[slug]/page';
import * as TR_PAGE_11 from '@/locales/tr/pages/resources/page';
import * as TR_PAGE_12 from '@/locales/tr/pages/restaurant-types/page';
import * as TR_PAGE_13 from '@/locales/tr/pages/security/page';
import * as TR_PAGE_14 from '@/locales/tr/pages/solutions/[slug]/page';
import * as TR_PAGE_15 from '@/locales/tr/pages/solutions/page';
import * as TR_PAGE_16 from '@/locales/tr/pages/support/page';
import * as TR_PAGE_17 from '@/locales/tr/pages/teams/[slug]/page';
import * as TR_PAGE_18 from '@/locales/tr/pages/teams/page';
import * as AR_PAGE_0 from '@/locales/ar/pages/ai/page';
import * as AR_PAGE_1 from '@/locales/ar/pages/company/page';
import * as AR_PAGE_2 from '@/locales/ar/pages/contact/page';
import * as AR_PAGE_3 from '@/locales/ar/pages/demo/page';
import * as AR_PAGE_4 from '@/locales/ar/pages/how-it-works/page';
import * as AR_PAGE_5 from '@/locales/ar/pages/implementation/page';
import * as AR_PAGE_6 from '@/locales/ar/pages/integrations/page';
import * as AR_PAGE_7 from '@/locales/ar/pages/page';
import * as AR_PAGE_8 from '@/locales/ar/pages/platform/page';
import * as AR_PAGE_9 from '@/locales/ar/pages/pricing/page';
import * as AR_PAGE_10 from '@/locales/ar/pages/resources/[slug]/page';
import * as AR_PAGE_11 from '@/locales/ar/pages/resources/page';
import * as AR_PAGE_12 from '@/locales/ar/pages/restaurant-types/page';
import * as AR_PAGE_13 from '@/locales/ar/pages/security/page';
import * as AR_PAGE_14 from '@/locales/ar/pages/solutions/[slug]/page';
import * as AR_PAGE_15 from '@/locales/ar/pages/solutions/page';
import * as AR_PAGE_16 from '@/locales/ar/pages/support/page';
import * as AR_PAGE_17 from '@/locales/ar/pages/teams/[slug]/page';
import * as AR_PAGE_18 from '@/locales/ar/pages/teams/page';

const LOCALES = ['tr', 'ar'];

const STATIC = {
  tr: {
    "ai": TR_PAGE_0,
    "company": TR_PAGE_1,
    "contact": TR_PAGE_2,
    "demo": TR_PAGE_3,
    "how-it-works": TR_PAGE_4,
    "implementation": TR_PAGE_5,
    "integrations": TR_PAGE_6,
    "": TR_PAGE_7,
    "platform": TR_PAGE_8,
    "pricing": TR_PAGE_9,
    "resources": TR_PAGE_11,
    "restaurant-types": TR_PAGE_12,
    "security": TR_PAGE_13,
    "solutions": TR_PAGE_15,
    "support": TR_PAGE_16,
    "teams": TR_PAGE_18,
  },
  ar: {
    "ai": AR_PAGE_0,
    "company": AR_PAGE_1,
    "contact": AR_PAGE_2,
    "demo": AR_PAGE_3,
    "how-it-works": AR_PAGE_4,
    "implementation": AR_PAGE_5,
    "integrations": AR_PAGE_6,
    "": AR_PAGE_7,
    "platform": AR_PAGE_8,
    "pricing": AR_PAGE_9,
    "resources": AR_PAGE_11,
    "restaurant-types": AR_PAGE_12,
    "security": AR_PAGE_13,
    "solutions": AR_PAGE_15,
    "support": AR_PAGE_16,
    "teams": AR_PAGE_18,
  },
};

const DYNAMIC = {
  tr: {
    "resources": TR_PAGE_10,
    "solutions": TR_PAGE_14,
    "teams": TR_PAGE_17,
  },
  ar: {
    "resources": AR_PAGE_10,
    "solutions": AR_PAGE_14,
    "teams": AR_PAGE_17,
  },
};


function normaliseSegments(slug) {
  return Array.isArray(slug) ? slug : [];
}

function validDynamic(prefix, slug) {
  if (prefix === 'solutions') return Object.prototype.hasOwnProperty.call(solutionPages, slug);
  if (prefix === 'teams') return Object.prototype.hasOwnProperty.call(teamPages, slug) || slug === 'front-of-house';
  if (prefix === 'resources') return resources.some((item) => item.slug === slug);
  return false;
}

function findModule(locale, segments) {
  if (!LOCALES.includes(locale)) return null;

  const key = segments.join('/');
  if (Object.prototype.hasOwnProperty.call(STATIC[locale], key)) {
    return { module: STATIC[locale][key], params: null };
  }

  if (segments.length === 2) {
    const [prefix, dynamicSlug] = segments;
    const module = DYNAMIC[locale][prefix];
    if (module && validDynamic(prefix, dynamicSlug)) {
      return { module, params: { slug: dynamicSlug } };
    }
  }

  return null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const result = [];

  for (const locale of LOCALES) {
    for (const key of Object.keys(STATIC[locale])) {
      result.push({ locale, slug: key ? key.split('/') : [] });
    }

    for (const slug of Object.keys(solutionPages)) {
      result.push({ locale, slug: ['solutions', slug] });
    }

    for (const slug of Object.keys(teamPages)) {
      result.push({ locale, slug: ['teams', slug] });
    }

    result.push({ locale, slug: ['teams', 'front-of-house'] });

    for (const item of resources) {
      result.push({ locale, slug: ['resources', item.slug] });
    }
  }

  return result;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const found = findModule(locale, normaliseSegments(slug));
  if (!found) return {};

  if (typeof found.module.generateMetadata === 'function') {
    return found.module.generateMetadata({ params: Promise.resolve(found.params || {}) });
  }

  return found.module.metadata || {};
}

export default async function LocalizedRoute({ params }) {
  const { locale, slug } = await params;
  const found = findModule(locale, normaliseSegments(slug));
  if (!found) notFound();

  const Page = found.module.default;
  return <Page params={Promise.resolve(found.params || {})} />;
}
