import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/support');
export default function SupportPage() {
  return <>
      <PageHero eyebrow={"4 Stützstufen"} title={"Der Support sollte die konfigurierten Rollen, Workflows, Integrationen und Erfolgsmetriken hinter der Frage kennen."} intro={"Eine nützliche Antwort hängt davon ab, wie PayMyDine im Restaurant konfiguriert ist. Der Support folgt daher dem Setup vom Onboarding über die Konfiguration, Teamadoption und laufende Betriebsüberprüfung."} image="/site-assets/extra/team-cafe-meeting.webp" accent="green" />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div><span className="eyebrow">Unterstützung über den gesamten Lebenszyklus hinweg</span><h2>Vier Phasen, wobei die Konfiguration und die verantwortungsvolle Rolle in jedem Gespräch sichtbar sind.</h2><p>Dieser Kontext macht es einfacher, eine Trainingsfrage, ein Workflowproblem, eine Integrationsgrenze und ein Produktproblem zu unterscheiden.</p></div>
          <div className="companyValueCards">
            <article><h3>Onboarding</h3><p>Bestätigen Sie die ausgewählten Produktbereiche, Rolleninhaber, Baseline-Workflows und Implementierungskontakte.</p></article>
            <article><h3>Konfiguration</h3><p>Überprüfen Sie Berechtigungen, Bodenkarten, Menüs, Statusregeln, Integrationen und die erwarteten Übergaben zwischen Rollen.</p></article>
            <article><h3>Annahme des Teams</h3><p>Trainieren Sie jede Rolle in einer eigenen Warteschlange, Kontrollen, Abschlussstatus und Eskalationspfad anstelle einer generischen Produkttour.</p></article>
            <article><h3>Laufende Überprüfung</h3><p>Verwenden Sie den Supportverlauf und die Betriebsmetriken, um zu entscheiden, ob das Problem geschult, konfiguriert, integriert oder geändert werden muss.</p></article>
          </div>
        </div>
      </section>
      <CTA title={"Bringen Sie die Konfiguration und den Workflow hinter die Supportfrage."} body={"Sagen Sie uns die Rolle, die Aktion, den erwarteten Status, das verbundene System und das Ergebnis. Das gibt dem support-gespräch einen praktischen ausgangspunkt."} />
    </>;
}
