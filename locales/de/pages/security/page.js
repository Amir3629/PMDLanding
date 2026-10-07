import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/security');
const topics = [["Rollenzugang", "Dokumentieren Sie, welche der 6 Arbeitsbereiche jede Art von Restaurant- und Gastdaten anzeigen, erstellen, ändern, genehmigen oder exportieren können."], ["Datenfluss", "Karte Quelle, Ziel, Zweck, Aufbewahrung und verantwortliche Partei für Tabelle, Bestellung, Gast, Zahlungs- und Berichtsdaten."], ["Integrationsgrenze", "Notieren Sie die API-Berechtigungen, die verfügbaren Felder, die Authentifizierungsmethode und die Fehlerbehandlung für jedes externe POS-, Zahlungs- oder Liefersystem."], ["Einsatzkontrollen", "Überprüfen Sie Hosting, Backups, Protokollierung, Überwachung, Vorfallbehandlung und Verantwortlichkeiten des Anbieters für die tatsächlich bereitgestellte Umgebung."]];
export default function SecurityPage() {
  return <>
      <PageHero eyebrow={"4 Sicherheitsüberprüfungsbereiche"} title={"Überprüfen Sie Zugriff, Datenfluss, Integrationen und Bereitstellung anhand der realen Konfiguration."} intro={"Sicherheitsansprüche sollten die Umgebung beschreiben, die tatsächlich eingesetzt wird. Die PayMyDine-Diskussionen beginnen daher eher mit Rollen, verbundenen Systemen, Datenverantwortlichkeiten und Betriebskontrollen als mit generischen Versprechen."} image="/site-assets/extra/office-dashboard.webp" accent="green" />
      <section className="section highlightSection">
        <div className="container highlightGrid">
          {topics.map(([title, body], index) => <article className="highlightCard" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section capabilitySection">
        <div className="container capabilityPanel">
          <div><span className="eyebrow">Fragen zur Dokumentation</span><h2>Wer kann handeln, welche Daten bewegen sich, wo sie gespeichert sind und wer reagiert, wenn etwas ausfällt?</h2><p>Die Antwort kann PayMyDine, das Restaurant, die Hosting-Umgebung und externe POS oder Zahlungsanbieter betreffen. Verantwortlichkeiten sollten vor dem Go-Live explizit sein.</p></div>
          <div className="capabilityList"><span>Rollenberechtigungen</span><span>Datenbestand</span><span>Integrationsnachweise</span><span>Aufbewahrung und Backups</span><span>Protokollierung und Überwachung</span><span>Verantwortlichkeit für Vorfälle</span></div>
        </div>
      </section>
      <CTA title={"Überprüfen Sie den tatsächlichen Bereitstellungs- und Datenpfad."} body={"Bringen Sie die Rollen, Anbieter, Datentypen und Integrationsdiagramme, damit das Sicherheitsgespräch klare Kontrollen und Verantwortlichkeiten zuweisen kann."} />
    </>;
}
