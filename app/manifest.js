export default function manifest() {
  return {
    name:
      'PayMyDine — Restaurant Operations Platform',

    short_name:
      'PayMyDine',

    description:
      'AI-powered restaurant operations, reservations, ordering, kitchen, payments, guest CRM, analytics and integrations.',

    start_url:
      '/',

    display:
      'standalone',

    background_color:
      '#ffffff',

    theme_color:
      '#063e31',

    lang:
      'en',

    dir:
      'ltr',

    icons: [
      {
        src:
          '/icon.svg',
        sizes:
          'any',
        type:
          'image/svg+xml',
        purpose:
          'any maskable'
      }
    ]
  };
}
