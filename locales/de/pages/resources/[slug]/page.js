import { notFound } from 'next/navigation';
import { resources } from "@/locales/de/data/site";
import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export function generateStaticParams() {
  return resources.map(item => ({
    slug: item.slug
  }));
}
export async function generateMetadata({
  params
}) {
  const {
    slug
  } = await params;
  const item = resources.find(entry => entry.slug === slug);
  if (!item) {
    return {};
  }
  return metadataForRoute('de', `/resources/${slug}`, {
    title: item.title,
    description: item.intro
  });
}
export default async function ResourceArticle({
  params
}) {
  const {
    slug
  } = await params;
  const item = resources.find(entry => entry.slug === slug);
  if (!item) {
    notFound();
  }
  return <>
      <PageHero eyebrow={item.category} title={item.title} intro={item.intro} image={item.articleImage || item.image} compact actions={false} />

      <article className="resourceArticle">
        <div className="articleBody">
          {item.sections.map(([title, body]) => <section key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </section>)}

          <div className="articleCallout">
            <strong>
              Machen Sie den Workflow messbar
            </strong>

            <p>
              Für den Workflow in diesem Handbuch,
die aktuellen Schritte aufzeichnen,
verantwortliche Rolle, Abschluss
Status, Quellsysteme und eines
Basismetrik. Dann konfigurieren
der kleinste PayMyDine-Bereich
das verbessern oder verdeutlichen kann, dass
Ergebnis.
            </p>
          </div>
        </div>
      </article>

      <CTA />
    </>;
}
