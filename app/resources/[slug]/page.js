import { notFound } from 'next/navigation';
import { resources } from '@/data/site';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export function generateStaticParams() { return resources.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const item = resources.find((entry) => entry.slug === slug); return item ? { title: item.title, description: item.intro } : {}; }

export default async function ResourceArticle({ params }) {
  const { slug } = await params;
  const item = resources.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <><PageHero eyebrow={item.category} title={item.title} intro={item.intro} image={item.articleImage || item.image} compact actions={false}/><article className="resourceArticle"><div className="articleBody">{item.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}<div className="articleCallout"><strong>The PayMyDine approach</strong><p>Start with the restaurant responsibility or outcome, then shape the module, workspace, integration or AI assistance around that real operating context.</p></div></div></article><CTA /></>;
}
