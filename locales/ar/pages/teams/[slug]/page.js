import { notFound, redirect } from 'next/navigation';
import TeamPage from "@/locales/ar/components/TeamPage";
import { teamPages } from "@/locales/ar/data/teams";
export function generateStaticParams() {
  return [...Object.keys(teamPages), 'front-of-house'].map(slug => ({
    slug
  }));
}
export async function generateMetadata({
  params
}) {
  const {
    slug
  } = await params;
  const page = teamPages[slug];
  return page ? {
    title: `${page.label} Workspace`,
    description: page.intro
  } : {};
}
export default async function TeamRolePage({
  params
}) {
  const {
    slug
  } = await params;
  if (slug === 'front-of-house') redirect("/ar/teams/service-staff");
  const page = teamPages[slug];
  if (!page) notFound();
  return <TeamPage page={page} />;
}
