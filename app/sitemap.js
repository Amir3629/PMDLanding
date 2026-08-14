import {
  solutionPages,
  resources
} from '@/data/site';

import {
  SEO_LOCALES,
  STATIC_INDEXABLE_PATHS,
  absoluteUrl,
  languageAlternates,
  localisedPath,
  normalisePath
} from '@/lib/seo';

const ALL_PATHS =
  Array.from(
    new Set([
      ...STATIC_INDEXABLE_PATHS,

      ...Object.keys(
        solutionPages
      ).map(
        (slug) =>
          `/solutions/${slug}`
      ),

      ...resources.map(
        (item) =>
          `/resources/${item.slug}`
      )
    ])
  )
    .map(normalisePath)
    .sort();

function priority(path) {
  if (path === '/') {
    return 1;
  }

  if (
    path === '/platform' ||
    path === '/solutions' ||
    path === '/ai'
  ) {
    return 0.9;
  }

  if (
    path.startsWith('/solutions/')
  ) {
    return 0.82;
  }

  if (
    path === '/contact' ||
    path === '/integrations' ||
    path === '/pricing'
  ) {
    return 0.78;
  }

  if (
    path.startsWith('/resources/')
  ) {
    return 0.66;
  }

  return 0.72;
}

function changeFrequency(path) {
  if (path === '/') {
    return 'weekly';
  }

  if (
    path.startsWith('/resources/')
  ) {
    return 'monthly';
  }

  return 'monthly';
}

export default function sitemap() {
  const lastModified =
    new Date();

  return ALL_PATHS.flatMap(
    (path) =>
      SEO_LOCALES.map(
        (locale) => ({
          url:
            absoluteUrl(
              localisedPath(
                locale,
                path
              )
            ),

          lastModified,

          changeFrequency:
            changeFrequency(path),

          priority:
            priority(path),

          alternates: {
            languages:
              languageAlternates(path)
          }
        })
      )
  );
}
