import PageHero from "@/locales/de/components/PageHero";
import CTA from "@/locales/de/components/CTA";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('de', '/restaurant-types');
const setups = [["Full-Service Restaurants", "Verbinden Sie Buchungen, Tischzuweisung, Kellnerbestellung, Küchenstatus, Pay-at-Table und Eigentumsberichte rund um eine sitzende Gästereise.", '/site-assets/custom/restaurant-type-full-service.webp'], ["Casual-Dining-Restaurant", "Halten Sie den Tabellenstatus, die schnelle Bestellung, den Workload zum Mitnehmen, die Menüverfügbarkeit und die Zahlung sichtbar, wenn die Servicezyklen kürzer sind.", '/site-assets/custom/restaurant-type-modern-dining.webp'], ["Restaurant mit hohem Gästeaufkommen", "Verwenden Sie Rollenwarteschlangen, Küchenticketzustände, ausverkaufte Kontrollen und Gästebestellungen, um die nächste Aktion sichtbar zu halten, wenn sich die Nachfrage aufbaut.", '/site-assets/extra/qr-breakfast.webp'], ["Größere oder mehrstöckige Veranstaltungsorte", "Konfigurieren Sie mehrere Bodenkarten, spezialisierte Arbeitsbereiche, zentrales Reporting und ausgewählte Integrationen für komplexere Teams und Räume.", '/site-assets/extra/team-cafe-meeting.webp']];
export default function RestaurantTypesPage() {
  return <>
      <PageHero eyebrow={"4 Restaurantaufbaumuster"} title={"PayMyDine für Ihren Restauranttyp."} intro={"Wählen Sie Funktionen passend zu Ihrem Service, Team und Gastraum."} image="/site-assets/custom/shared-restaurant-hero-16.webp" />
      <section className="section setupGridSection"><div className="container setupGrid">{setups.map(([title, body, image]) => <article className="setupCard" key={title}><img src={image} alt="" /><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
      <section className="section capabilitySection"><div className="container capabilityPanel"><div><span className="eyebrow">Konfigurationsentscheidungen</span><h2>Beginnen Sie mit Ihren Abläufen.</h2><p>Teams, Tische, Bestellungen und bestehende Systeme im Blick.</p></div><div className="capabilityList"><span>Rollenbesitz</span><span>Boden- und Tischmodell</span><span>Dine-in- und Takeaway-Kanäle</span><span>Buchungspfad für Gäste</span><span>Kassen- und Zahlungsgrenzen</span><span>Basisbetriebsmetriken</span></div></div></section>
      <CTA title={"Das passende Restaurant-Setup finden."} body={"Wir stimmen Module und Geräte auf Ihren Serviceablauf ab."} />
    </>;
}
