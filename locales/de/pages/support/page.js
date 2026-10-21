import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/support');
export default function SupportPage() {
  return <>
      <PageHero eyebrow={"4 Support-Phasen"} title={"Hilfe für Ihr PayMyDine-Setup."} intro={"Unterstützung bei Einrichtung, Zugriffsrechten, Integrationen und täglicher Nutzung."} image="/site-assets/extra/team-cafe-meeting.webp" accent="green" />
      <section className="section companyValues">
        <div className="container companyValuesGrid">
          <div><span className="eyebrow">Unterstützung über den gesamten Lebenszyklus hinweg</span><h2>Support von der Einrichtung bis zum Service.</h2><p>Nennen Sie die Aufgabe und das Problem. Wir klären den nächsten Schritt.</p></div>
          <div className="companyValueCards">
            <article><h3>Onboarding</h3><p>Bestätigen Sie die ausgewählten Produktbereiche, Rolleninhaber, Baseline-Workflows und Implementierungskontakte.</p></article>
            <article><h3>Konfiguration</h3><p>Überprüfen Sie Berechtigungen, Bodenkarten, Menüs, Statusregeln, Integrationen und die erwarteten Übergaben zwischen Rollen.</p></article>
            <article><h3>Annahme des Teams</h3><p>Trainieren Sie jede Rolle in einer eigenen Warteschlange, Kontrollen, Abschlussstatus und Eskalationspfad anstelle einer generischen Produkttour.</p></article>
            <article><h3>Laufende Überprüfung</h3><p>Verwenden Sie den Supportverlauf und die Betriebsmetriken, um zu entscheiden, ob das Problem geschult, konfiguriert, integriert oder geändert werden muss.</p></article>
          </div>
        </div>
      </section>
      <CTA title={"Wobei benötigen Sie Unterstützung?"} body={"Beschreiben Sie die Aufgabe, das erwartete Ergebnis und das verbundene System."} />
    </>;
}
