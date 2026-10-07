import { notFound } from 'next/navigation';
import { solutionPages, resources } from '@/data/site';
import { metadataForRoute, getSeoCopy } from '@/lib/seo';

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
import * as TR_PAGE_17 from '@/locales/tr/pages/hardware/page';
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
import * as AR_PAGE_17 from '@/locales/ar/pages/hardware/page';
import * as DE_PAGE_0 from '@/locales/de/pages/ai/page';
import * as DE_PAGE_1 from '@/locales/de/pages/company/page';
import * as DE_PAGE_2 from '@/locales/de/pages/contact/page';
import * as DE_PAGE_3 from '@/locales/de/pages/demo/page';
import * as DE_PAGE_4 from '@/locales/de/pages/how-it-works/page';
import * as DE_PAGE_5 from '@/locales/de/pages/implementation/page';
import * as DE_PAGE_6 from '@/locales/de/pages/integrations/page';
import * as DE_PAGE_7 from '@/locales/de/pages/page';
import * as DE_PAGE_8 from '@/locales/de/pages/platform/page';
import * as DE_PAGE_9 from '@/locales/de/pages/pricing/page';
import * as DE_PAGE_10 from '@/locales/de/pages/resources/[slug]/page';
import * as DE_PAGE_11 from '@/locales/de/pages/resources/page';
import * as DE_PAGE_12 from '@/locales/de/pages/restaurant-types/page';
import * as DE_PAGE_13 from '@/locales/de/pages/security/page';
import * as DE_PAGE_14 from '@/locales/de/pages/solutions/[slug]/page';
import * as DE_PAGE_15 from '@/locales/de/pages/solutions/page';
import * as DE_PAGE_16 from '@/locales/de/pages/support/page';
import * as DE_PAGE_17 from '@/locales/de/pages/hardware/page';

const LOCALES = ['tr', 'ar', 'de'];

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
    "hardware": TR_PAGE_17,
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
    "hardware": AR_PAGE_17,
  },
  de: {
    "ai": DE_PAGE_0,
    "company": DE_PAGE_1,
    "contact": DE_PAGE_2,
    "demo": DE_PAGE_3,
    "how-it-works": DE_PAGE_4,
    "implementation": DE_PAGE_5,
    "integrations": DE_PAGE_6,
    "": DE_PAGE_7,
    "platform": DE_PAGE_8,
    "pricing": DE_PAGE_9,
    "resources": DE_PAGE_11,
    "restaurant-types": DE_PAGE_12,
    "security": DE_PAGE_13,
    "solutions": DE_PAGE_15,
    "support": DE_PAGE_16,
    "hardware": DE_PAGE_17,
  },
};

const DYNAMIC = {
  tr: {
    "resources": TR_PAGE_10,
    "solutions": TR_PAGE_14,
  },
  ar: {
    "resources": AR_PAGE_10,
    "solutions": AR_PAGE_14,
  },
  de: {
    "resources": DE_PAGE_10,
    "solutions": DE_PAGE_14,
  },
};


function normaliseSegments(slug) {
  return Array.isArray(slug) ? slug : [];
}

function validDynamic(prefix, slug) {
  if (prefix === 'solutions') return Object.prototype.hasOwnProperty.call(solutionPages, slug);
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

    for (const item of resources) {
      result.push({ locale, slug: ['resources', item.slug] });
    }
  }

  return result;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  const segments =
    normaliseSegments(slug);

  const found =
    findModule(
      locale,
      segments
    );

  if (!found) {
    return {};
  }

  let raw = {};

  if (
    typeof found.module.generateMetadata ===
    'function'
  ) {
    raw =
      await found.module.generateMetadata({
        params:
          Promise.resolve(
            found.params || {}
          )
      });
  } else {
    raw =
      found.module.metadata ||
      {};
  }

  const path =
    segments.length
      ? `/${segments.join('/')}`
      : '/';

  const fallback =
    getSeoCopy(
      locale,
      path
    );

  const title =
    typeof raw.title === 'string'
      ? raw.title
      : fallback.title;

  const description =
    typeof raw.description === 'string'
      ? raw.description
      : fallback.description;

  return {
    ...raw,

    ...metadataForRoute(
      locale,
      path,
      {
        title,
        description
      }
    )
  };
}

export default async function LocalizedRoute({ params }) {
  const { locale, slug } = await params;
  const found = findModule(locale, normaliseSegments(slug));
  if (!found) notFound();

  const Page = found.module.default;
  return <Page params={Promise.resolve(found.params || {})} />;
}
