import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/company');
export default function CompanyPage() {
  return <>
      <PageHero eyebrow={"Wie PayMyDine gestaltet ist"} title={"Für den Restaurantalltag entwickelt."} intro={"Jedes Team erhält seine Werkzeuge. Restaurantdaten bleiben verbunden."} image="/site-assets/extra/team-tech-meeting.webp" accent="green" />
      <section className="section companyValues"><div className="container companyValuesGrid"><div><span className="eyebrow">Vier Produktregeln</span><h2>Klare Aufgaben. Gemeinsame Daten. Messbare Ergebnisse.</h2><p>Ein durchgängiger Ablauf ist wichtiger als ein weiteres Dashboard.</p></div><div className="companyValueCards"><article><h3>Rollenbesitz</h3><p>Eigentümer, Manager, Servicemitarbeiter, Küche, Reservierungen und Finanzen erhalten gezielte Kontrollen und Genehmigungen.</p></article><article><h3>Gemeinsamer Kontext</h3><p>Tisch, Gast, Bestellung, Timing und Zahlungskontext können über die Übergabe reisen, anstatt erneut eingegeben zu werden.</p></article><article><h3>Gemessene Workflows</h3><p>Jedes Setup identifiziert Baseline- und Zielmetriken wie Wartezeit, Vorbereitungszeit, Umsatz, durchschnittliche Prüf- oder Wiederholungsrate.</p></article><article><h3>KI mit Source-Sichtbarkeit</h3><p>KI kann verfügbare Daten zusammenfassen und vergleichen, aber die Quellansicht und die menschliche Entscheidung bleiben sichtbar.</p></article></div></div></section>
      <section className="section companyGallery"><div className="container companyGalleryGrid"><img src="/site-assets/extra/cafe-exchange.webp" alt="" /><img src="/site-assets/extra/cafe-professional.webp" alt="" /><img src="/site-assets/extra/chef-gourmet.webp" alt="" /><img src="/site-assets/extra/rooftop-dinner.webp" alt="" /></div></section>
      <CTA title={"PayMyDine im Einsatz erleben."} body={"Zeigen Sie uns Ihre Abläufe. Wir finden die passenden Module."} />
    </>;
}
