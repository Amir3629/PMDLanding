import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { resources } from '@/data/site';
import { Icon } from '@/components/Icons';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('en', '/resources');

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Practical implementation guides"
        title="Use checklists, role questions and measurable workflow definitions before configuring the platform."
        intro="The guides cover the 6-stage implementation path, 6 role workspaces, AI questions, the 4-action guest journey, 7 reservation capabilities and POS integration planning."
        image="/site-assets/extra/friends-coffee.webp"
        compact
      />
      <section className="section resourcesSection"><div className="container resourceGrid">{resources.map((item) => <a className="resourceCard" href={`/resources/${item.slug}`} key={item.slug}><div className="resourceImage"><img src={item.image} alt="" loading="lazy"/></div><div className="resourceCopy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.intro}</p><b>Read practical guide <Icon name="arrow" size={15}/></b></div></a>)}</div></section>
      <CTA title="Apply a guide to one workflow in your restaurant." body="Bring the current steps, responsible roles, systems and baseline metric. We will map the guide to a practical PayMyDine scope." />
    </>
  );
}
