import { notFound } from 'next/navigation';
import { resources } from '@/locales/tr/data/site';
import PageHero from '@/locales/tr/components/PageHero';
import CTA from '@/locales/tr/components/CTA';

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = resources.find((entry) => entry.slug === slug);
  return item ? { title: item.title, description: item.intro } : {};
}

export default async function ResourceArticle({ params }) {
  const { slug } = await params;
  const item = resources.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero eyebrow={item.category} title={item.title} intro={item.intro} image={item.articleImage || item.image} compact actions={false} />
      <article className="resourceArticle">
        <div className="articleBody">
          {item.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
          <div className="articleCallout">
            <strong>İş akışını ölçülebilir hale getirin</strong>
            <p>Bu rehberdeki iş akışı için mevcut adımları, sorumlu rolü, tamamlanma durumunu, kaynak sistemleri ve bir başlangıç metriğini kaydedin. Ardından bu sonucu iyileştirebilecek veya daha anlaşılır hale getirebilecek en küçük PayMyDine kapsamını yapılandırın.</p>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
