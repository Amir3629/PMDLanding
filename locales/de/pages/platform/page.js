import PageHero from "@/locales/de/components/PageHero";
import OfferGrid from "@/locales/de/components/OfferGrid";
import Workflow from "@/locales/de/components/Workflow";
import InteractiveDemos from "@/locales/de/components/InteractiveDemos";
import CTA from "@/locales/de/components/CTA";
import { imageGroups } from "@/locales/de/data/site";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/platform');
export default function PlatformPage() {
  return <>
      <PageHero eyebrow={"9 Produktbereiche - 6 Rollenarbeitsbereiche"} title={"Ihr Restaurantbetrieb auf einer Plattform."} intro={"Reservierungen, Bestellungen, Zahlungen, Teams und Berichte verbinden. Jede Rolle erhält ihre passende Ansicht."} image="/site-assets/custom/platform-hero.webp" />
      <OfferGrid compact />
      <Workflow variant={"Plattform"} />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt="" /><div><span className="eyebrow">Rollenbewusster Workflow</span><h2>Aufgaben an das richtige Team weitergeben.</h2><p>Service, Küche und Empfang sehen ihre Aufgaben. Das Management erkennt Auffälligkeiten.</p></div></article>
          <article><img src={imageGroups.social[3]} alt="" /><div><span className="eyebrow">9 Entscheidungskennzahlen</span><h2>Veränderungen anhand der Zahlen verstehen.</h2><p>Überprüfen Sie die Einnahmen, die Gäste, den Durchschnittsbon, den Tischwechsel, den Verkaufszeitpunkt, die Bestseller, den Zahlungsmix, die Prognose und die Rentabilität und verwenden Sie dann die Hilfe von KI, um zu fragen, warum sich ein Signal geändert hat.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant={"Plattform"} />
      <CTA title={"Beginnen Sie mit den passenden Modulen."} body={"Wir zeigen, welche Module zu Ihren Systemen und Teams passen."} />
    </>;
}
