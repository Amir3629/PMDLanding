import { notFound } from 'next/navigation';
import { resources } from "@/locales/ar/data/site";
import PageHero from "@/locales/ar/components/PageHero";
import CTA from "@/locales/ar/components/CTA";
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
  return item ? {
    title: item.title,
    description: item.intro
  } : {};
}
export default async function ResourceArticle({
  params
}) {
  const {
    slug
  } = await params;
  const item = resources.find(entry => entry.slug === slug);
  if (!item) notFound();
  return <><PageHero eyebrow={item.category} title={item.title} intro={item.intro} image={item.articleImage || item.image} compact actions={false} /><article className="resourceArticle"><div className="articleBody">{item.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}<div className="articleCallout"><strong>جعل تدفق العمل قابلا للقياس</strong><p>وبالنسبة لتدفق العمل في هذا الدليل، يسجل الخطوات الحالية، والدور المسؤول، وحالة الإنجاز، ونظم المصادر، ومقياس خط الأساس. ثم نحدد أصغر نطاق PayMyDine الذي يمكن أن يحسن أو يوضح تلك النتيجة.</p></div></div></article><CTA /></>;
}
