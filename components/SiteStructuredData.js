import {
  SITE_URL,
  absoluteUrl,
  localisedPath
} from '@/lib/seo';

const COPY = {
  en: {
    language: 'en',
    description:
      'AI-powered restaurant operations platform connecting reservations, ordering, kitchen, payments, guest CRM, analytics and integrations.'
  },
  tr: {
    language: 'tr',
    description:
      'Rezervasyon, sipariş, mutfak, ödeme, misafir CRM’i, analiz ve entegrasyonları birleştiren yapay zekâ destekli restoran operasyon platformu.'
  },
  ar: {
    language: 'ar-OM',
    description:
      'منصة مدعومة بالذكاء الاصطناعي تربط الحجوزات والطلبات والمطبخ والمدفوعات وإدارة علاقات الضيوف والتحليلات والتكاملات.'
  }
};

export default function SiteStructuredData({
  locale = 'en'
}) {
  const safe =
    Object.prototype.hasOwnProperty.call(
      COPY,
      locale
    )
      ? locale
      : 'en';

  const copy =
    COPY[safe];

  const homeUrl =
    absoluteUrl(
      localisedPath(
        safe,
        '/'
      )
    );

  const graph = {
    '@context':
      'https://schema.org',

    '@graph': [
      {
        '@type':
          'Organization',

        '@id':
          `${SITE_URL}/#organization`,

        name:
          'PayMyDine',

        alternateName:
          'Pay My Dine',

        url:
          SITE_URL,

        logo: {
          '@type':
            'ImageObject',

          url:
            `${SITE_URL}/icon.svg`
        },

        description:
          copy.description
      },

      {
        '@type':
          'WebSite',

        '@id':
          `${homeUrl}#website`,

        url:
          homeUrl,

        name:
          'PayMyDine',

        alternateName:
          'Pay My Dine',

        description:
          copy.description,

        inLanguage:
          copy.language,

        publisher: {
          '@id':
            `${SITE_URL}/#organization`
        }
      }
    ]
  };

  const json =
    JSON.stringify(graph)
      .replace(
        /</g,
        '\\u003c'
      );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: json
      }}
    />
  );
}
