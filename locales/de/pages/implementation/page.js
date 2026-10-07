import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/implementation');
const steps = [['01', "Dokumentieren Sie die aktuelle Operation", "Listenrollen, Bodenstruktur, Bestellkanäle, Gast-Touchpoints, aktuelle Systeme, wiederholte Dateneingabe und die Metriken, die das Management heute verwendet."], ['02', "Wählen Sie den ersten Produktumfang", "Wählen Sie den kleinsten Satz der 9 Produktbereiche, der ein klares Workflow-Problem beseitigt, ohne Systeme zu ersetzen, die an Ort und Stelle bleiben sollten."], ['03', "6 Rollen-Arbeitsbereiche konfigurieren", "Definieren Sie Berechtigungen, Warteschlangen, Aktionen und sichtbaren Status für Eigentümer, Manager, Servicemitarbeiter, Küche, Reservierungen und Finanzen nach Bedarf."], ['04', "Definition von Integrationsverträgen", "Dokumentieren Sie für jede POS, Zahlungs-, Liefer- oder Buchhaltungsverbindung Quelle, Felder, Richtung, Aktualisierungszeitpunkt und verantwortliche Rolle."], ['05', "Validierung realer Dienstleistungsszenarien", "Testbuchungen, Walk-Ins, Tischbestellungen, Modifikatoren, Küchenübergaben, ausverkaufte Artikel, Split-Rechnungen, Rückerstattungen und Berichte vor dem Go-Live."], ['06', "Gehen Sie live und messen", "Verfolgen Sie vereinbarte Basismetriken wie Wartezeit, Vorbereitungszeit, Tabellenumsatz, durchschnittliche Prüfung, Zahlungszeit oder Wiederholungsbesuchsrate, und passen Sie dann die Konfiguration an."]];
export default function ImplementationPage() {
  return <>
      <PageHero eyebrow={"6-stufige Umsetzung"} title={"Konfigurieren Sie PayMyDine um einen dokumentierten Restaurant-Workflow und validieren Sie ihn dann mit echten Service-Szenarien."} intro={"Die Implementierung beginnt mit Rollen, Handoffs, aktuellen Systemen und Basismetriken. Produktbereiche und Integrationen werden erst nach dem Bedienproblem ausgewählt und das verantwortliche Team ist klar."} image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section howFlowSection">
        <div className="container">
          <div className="splitHeading howFlowHeading">
            <div><span className="eyebrow">Von der Baseline bis zum gemessenen Go-Live</span><h2>Sechs Stufen, jede mit einem klaren Deliverable und Eigentümer.</h2></div>
            <p>Die genaue Zeitleiste variiert je nach Umfang, aber die Sequenz verhindert, dass die Konfiguration beginnt, bevor Workflows, Berechtigungen, Integrationen und Erfolgsmetriken verstanden werden.</p>
          </div>
          <div className="howFlowGrid">
            {steps.map(([number, title, body]) => <article className="howFlowCard" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <CTA title={"Bringen Sie einen Workflow und eine Basismetrik in die Implementierungsdiskussion."} body={"Wir werden die verantwortlichen Rollen, Produktbereiche, Datenfelder, Testszenarien und den Messplan abbilden, die für eine praktische Erstveröffentlichung erforderlich sind."} />
    </>;
}
