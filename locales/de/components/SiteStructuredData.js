import { SITE_URL, absoluteUrl, localisedPath } from '@/lib/seo';
const COPY = {
  en: {
    language: 'en',
    description: "KI-powered Restaurant-Betriebsplattform, die Reservierungen, Bestellung, Küche, Zahlungen, Gäste CRM, Analysen und Integrationen verbindet."
  },
  tr: {
    language: 'tr',
    description: "Rezervasyon, sipariş, mutfak, ödeme, Müşteri İlişkileri Yönetimi, analiz ve entegrasyonları birleştiren Yapay Zeka destekli restauran operasyon platformu."
  },
  ar: {
    language: 'ar-OM',
    description: "منصة مدعومة بال farmingكا� الاصطناعي تربط الحجوزات والمطبخ والمدفوعات وإدارة علاقات الضيوف والت والتكاملات."
  }
};
export default function SiteStructuredData({
  locale = 'en'
}) {
  const safe = Object.prototype.hasOwnProperty.call(COPY, locale) ? locale : 'en';
  const copy = COPY[safe];
  const homeUrl = absoluteUrl(localisedPath(safe, "/de"));
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': "Organisation",
      '@id': `${SITE_URL}/#organization`,
      name: 'PayMyDine',
      alternateName: 'Pay My Dine',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.svg`
      },
      description: copy.description
    }, {
      '@type': "Website",
      '@id': `${homeUrl}#website`,
      url: homeUrl,
      name: 'PayMyDine',
      alternateName: 'Pay My Dine',
      description: copy.description,
      inLanguage: copy.language,
      publisher: {
        '@id': `${SITE_URL}/#organization`
      }
    }]
  };
  const json = JSON.stringify(graph).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: json
  }} />;
}
