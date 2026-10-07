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
      <PageHero eyebrow={"9 Produktbereiche - 6 Rollenarbeitsbereiche"} title={"Eine Bedienebene für die Aktionen, den Status und die Metriken hinter dem Restauranttag."} intro={"Verwenden Sie Reservierungen, Tabellen, Bestellung, Küche, Zahlungen, Gast CRM, Analysen, Teamsteuerungen, Integrationen und KI als verbundene Produktbereiche. Jede Rolle erhält einen fokussierten Arbeitsbereich, während das Management das gemeinsame Betriebsbild behält."} image="/site-assets/custom/platform-hero.webp" />
      <OfferGrid compact />
      <Workflow variant={"Plattform"} />
      <section className="section twoUpStorySection">
        <div className="container twoUpStoryGrid">
          <article><img src={imageGroups.comments[7]} alt="" /><div><span className="eyebrow">Rollenbewusster Workflow</span><h2>Verschieben Sie Tabelle, Reihenfolge und Gastkontext in die Rolle, die für die nächste Aktion verantwortlich ist.</h2><p>Servicemitarbeiter erhalten Servicearbeiten, Küche erhält Vorbereitungsarbeiten, Reservierungen erhalten Ankünfte und Manager erhalten Ausnahmen, ohne Informationen zwischen Systemen zu kopieren.</p></div></article>
          <article><img src={imageGroups.social[3]} alt="" /><div><span className="eyebrow">9 Entscheidungskennzahlen</span><h2>Verfolgen Sie die Anzahl, den Vergleichszeitraum und den Betriebskontext dahinter.</h2><p>Überprüfen Sie die Einnahmen, die Gäste, den durchschnittlichen Scheck, den Tabellenumsatz, den Verkaufszeitpunkt, die Bestseller, den Zahlungsmix, die Prognose und die Rentabilität und verwenden Sie dann die Hilfe von KI, um zu fragen, warum sich ein Signal geändert hat.</p></div></article>
        </div>
      </section>
      <InteractiveDemos variant={"Plattform"} />
      <CTA title={"Wählen Sie zuerst die Produktbereiche aus, die die meisten doppelten Arbeiten entfernen."} body={"Wir können alle 9 Bereiche Ihren aktuellen Tools, Teamverantwortlichkeiten und Berichtsanforderungen zuordnen und dann einen praktischen ersten Umfang definieren."} />
    </>;
}
