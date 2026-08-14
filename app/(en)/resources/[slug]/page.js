import { notFound } from 'next/navigation';
import { resources } from '@/data/site';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { metadataForRoute } from '@/lib/seo';

export function generateStaticParams() {
  return resources.map(
    (item) => ({
      slug: item.slug
    })
  );
}

export async function generateMetadata({
  params
}) {
  const { slug } = await params;

  const item =
    resources.find(
      (entry) =>
        entry.slug === slug
    );

  if (!item) {
    return {};
  }

  return metadataForRoute(
    'en',
    `/resources/${slug}`,
    {
      title: item.title,
      description: item.intro
    }
  );
}

export default async function ResourceArticle({
  params
}) {
  const { slug } = await params;

  const item =
    resources.find(
      (entry) =>
        entry.slug === slug
    );

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        intro={item.intro}
        image={
          item.articleImage ||
          item.image
        }
        compact
        actions={false}
      />

      <article className="resourceArticle">
        <div className="articleBody">
          {item.sections.map(
            ([title, body]) => (
              <section key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </section>
            )
          )}

          <div className="articleCallout">
            <strong>
              Make the workflow measurable
            </strong>

            <p>
              For the workflow in this guide,
              record the current steps,
              responsible role, completion
              status, source systems and one
              baseline metric. Then configure
              the smallest PayMyDine scope
              that can improve or clarify that
              result.
            </p>
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
