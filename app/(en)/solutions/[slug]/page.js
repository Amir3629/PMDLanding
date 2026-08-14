import { notFound } from 'next/navigation';
import SolutionPage from '@/components/SolutionPage';
import { solutionPages } from '@/data/site';
import { metadataForRoute } from '@/lib/seo';

export function generateStaticParams() {
  return Object.keys(solutionPages).map(
    (slug) => ({ slug })
  );
}

export async function generateMetadata({
  params
}) {
  const { slug } = await params;
  const page = solutionPages[slug];

  if (!page) {
    return {};
  }

  return metadataForRoute(
    'en',
    `/solutions/${slug}`,
    {
      title: page.eyebrow,
      description: page.intro
    }
  );
}

export default async function SolutionRoute({
  params
}) {
  const { slug } = await params;
  const page = solutionPages[slug];

  if (!page) {
    notFound();
  }

  return <SolutionPage page={page} />;
}
