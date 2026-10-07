import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { resources } from "@/locales/de/data/site";
import { Icon } from "@/locales/de/components/Icons";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/resources');
export default function ResourcesPage() {
  return <>
      <PageHero eyebrow={"Praktische Durchführungsleitfäden"} title={"Verwenden Sie Checklisten, Rollenfragen und messbare Workflowdefinitionen, bevor Sie die Plattform konfigurieren."} intro={"Die Anleitungen umfassen den 6-stufigen Implementierungspfad, 6 Rollenarbeitsbereiche, KI-Fragen, die 4-Aktions-Guest Journey, 7 Reservierungsmöglichkeiten und die Integrationsplanung von POS."} image="/site-assets/extra/friends-coffee.webp" compact />
      <section className="section resourcesSection"><div className="container resourceGrid">{resources.map(item => <a className="resourceCard" href={`/de/resources/${item.slug}`} key={item.slug}><div className="resourceImage"><img src={item.image} alt="" loading="lazy" /></div><div className="resourceCopy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.intro}</p><b>Lesen Sie den praktischen Leitfaden <Icon name="arrow" size={15} /></b></div></a>)}</div></section>
      <CTA title={"Wenden Sie einen Leitfaden für einen Workflow in Ihrem Restaurant an."} body={"Bringen Sie die aktuellen Schritte, verantwortlichen Rollen, Systeme und Basismetrik. Wir werden den Leitfaden einem praktischen PayMyDine-Bereich zuordnen."} />
    </>;
}
