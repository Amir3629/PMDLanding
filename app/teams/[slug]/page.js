import { notFound } from 'next/navigation';
import TeamPage from '@/components/TeamPage';
import { teamPages } from '@/data/teams';

export function generateStaticParams() {
  return Object.keys(teamPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = teamPages[slug];
  return page ? { title: `${page.label} Workspace`, description: page.intro } : {};
}

export default async function TeamRolePage({ params }) {
  const { slug } = await params;
  const page = teamPages[slug];
  if (!page) notFound();
  return <TeamPage page={page} />;
}
