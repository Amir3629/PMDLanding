import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { resources } from '@/data/site';
import { Icon } from '@/components/Icons';

export const metadata = { title: 'Guides & Help' };

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides & help"
        title="Practical guidance for setting up and operating PayMyDine."
        intro="Use these focused guides for implementation, role-based workspaces, AI, guest ordering, reservations and POS integration planning."
        image="/site-assets/extra/friends-coffee.webp"
        compact
      />
      <section className="section resourcesSection"><div className="container resourceGrid">{resources.map((item) => <a className="resourceCard" href={`/resources/${item.slug}`} key={item.slug}><div className="resourceImage"><img src={item.image} alt="" loading="lazy"/></div><div className="resourceCopy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.intro}</p><b>Read guide <Icon name="arrow" size={15}/></b></div></a>)}</div></section>
      <CTA title="Need help mapping these ideas to your restaurant?" body="Book a conversation and we’ll focus on the roles, modules, AI or integration questions behind your setup." />
    </>
  );
}
