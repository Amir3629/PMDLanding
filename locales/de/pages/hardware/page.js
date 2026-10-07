import HardwareShowcase from '@/components/HardwareShowcase';
import { metadataForRoute } from '@/lib/seo';

export const metadata = metadataForRoute('de', '/hardware', {
  title: 'Restaurant-POS-Hardware und Zahlungsgeräte',
  description: 'Entdecken Sie PayMyDine Hardware für Restaurants: Tisch-QR- und Bezahldisplays, Kassen-POS-Systeme, mobile POS-Terminals, Küchenbildschirme, Selbstbedienungskioske, Belegdrucker und Kassenschubladen.'
});

const copy = {
  contactHref: '/de/contact',
  hero: {
    eyebrow: 'PayMyDine Hardware',
    title: 'Restaurant-Hardware, bereit für den Service.',
    intro: 'Stellen Sie Ihr PayMyDine-Setup mit Tisch-QR- und Bezahldisplays, Kassen-POS, mobilen Terminals, Küchenbildschirmen, Selbstbedienungskiosken, Belegdruckern und Kassenschubladen passend zu Ihrem Betrieb zusammen.',
    primaryCta: 'Hardware-Setup planen',
    secondaryCta: 'Geräte entdecken',
    meta: ['Kaufen', 'Leasen', 'Mieten', 'Ein vernetztes System']
  },
  productsEyebrow: 'Hardware-Auswahl',
  productsTitle: 'Vom Tisch bis zur Küche hat jedes Gerät eine klare Aufgabe.',
  productsIntro: 'Wählen Sie nur die Hardware, die Ihr Restaurant heute benötigt, und erweitern Sie das Setup, wenn Ihr Servicemodell wächst.',
  productCta: 'Dieses Gerät anfragen',
  products: [
    {
      type: 'payment',
      shortLabel: 'PAY',
      category: 'Hauptkasse',
      name: 'Dual-Kassen-POS',
      body: 'Ein kompaktes Kassen-POS für Restaurants, die einen zusätzlichen Bestell- und Zahlungsplatz am Tresen benötigen.',
      bullets: ['Kassen-Setup mit zwei Displays', 'Bestellung und Zahlung am Tresen', 'Mit dem PayMyDine-System verbunden']
    },
    {
      type: 'table',
      shortLabel: 'QR + PAY',
      category: 'Am Tisch',
      name: 'Tisch-QR- & Bezahldisplay',
      body: 'Ein kompaktes Gerät für jeden Tisch, das den QR-Einstieg sichtbar macht und Zahlungen direkt am Tisch unterstützt.',
      bullets: ['QR-Menü und Bestelleinstieg', 'Zahlungsablauf am Tisch', 'Gut sichtbar direkt am Tisch']
    },
    {
      type: 'cashier',
      shortLabel: 'POS',
      category: 'Hauptkasse',
      name: 'Kassen-POS-Arbeitsplatz',
      body: 'Der zentrale Kassenarbeitsplatz mit Mitarbeiter-POS und zweitem Kundendisplay für einen klaren Bestell- und Bezahlvorgang.',
      bullets: ['Arbeitsplatz mit zwei Displays', 'Bestellung und Zahlung an einer Station', 'Für den täglichen Restaurantbetrieb ausgelegt']
    },
    {
      type: 'mobile',
      shortLabel: 'MOBIL',
      category: 'Servicebereich',
      name: 'Mobiles POS-Terminal',
      body: 'Ein tragbares POS-Terminal zum Aufnehmen von Bestellungen, Prüfen von Tischen und Abschließen von Zahlungen direkt im Servicebereich.',
      bullets: ['Mobiler Serviceablauf', 'Zugriff auf Bestellungen und Tische', 'Zahlungen direkt im Service']
    },
    {
      type: 'kds',
      shortLabel: 'KDS',
      category: 'Küche',
      name: 'Küchenbildschirm',
      body: 'Ein Küchenbildschirm, der eingehende Bestellungen und den Vorbereitungsstatus übersichtlich darstellt und Papierbons reduziert.',
      bullets: ['Live-Bestellwarteschlange für die Küche', 'Sichtbarer Vorbereitungsstatus', 'Klare Übergabe an den Service']
    },
    {
      type: 'kiosk',
      shortLabel: 'KIOSK',
      category: 'Selbstbedienung',
      name: 'Selbstbedienungskiosk',
      body: 'Ein kundenorientierter Bestellbildschirm für Restaurants, die einen schnelleren Selbstbedienungsweg anbieten möchten.',
      bullets: ['Selbstständige Bestellung durch Gäste', 'Weniger Druck auf Warteschlangen', 'Mit Menü und Bestellablauf verbunden']
    },
    {
      type: 'printer',
      shortLabel: 'DRUCK',
      category: 'Belege',
      name: 'Belegdrucker',
      body: 'Zuverlässiger Druck für Kundenbelege und operative Bestellbons überall dort, wo Papier weiterhin Teil des Ablaufs ist.',
      bullets: ['Schneller Belegdruck', 'Kompaktes Format am Tresen', 'Passend zum POS-Setup']
    },
    {
      type: 'drawer',
      shortLabel: 'BAR',
      category: 'Bargeld',
      name: 'Kassenschublade',
      body: 'Eine sichere Kassenschublade für Restaurants, die neben Karten- und digitalen Zahlungen weiterhin Bargeld annehmen.',
      bullets: ['Sichere Bargeldaufbewahrung', 'Für den Kassenbereich ausgelegt', 'Passend zum Kassenablauf']
    }
  ],
  ecosystem: {
    eyebrow: 'Ein vernetztes Setup',
    title: 'Hardware, die als ein Restaurantsystem zusammenarbeitet.',
    body: 'Halten Sie Tisch, Kasse, Zahlung, Küche und Selbstbedienung in derselben PayMyDine-Betriebsumgebung verbunden.',
    steps: ['Tisch & Gast', 'POS & Zahlung', 'Küche & Druck', 'Kiosk & Wachstum']
  },
  options: {
    eyebrow: 'Flexible Geschäftsmodelle',
    title: 'Kaufen, leasen oder mieten Sie das Setup, das zu Ihrem Restaurant passt.',
    body: 'Wählen Sie das Modell, das zu Budget, Rollout-Plan und gewünschter Nutzungsdauer passt.',
    items: [
      { title: 'Kaufen', body: 'Besitzen Sie die Hardware direkt und bauen Sie ein langfristiges Setup für Ihr Restaurant auf.' },
      { title: 'Leasen', body: 'Verteilen Sie die Hardwarekosten über einen längeren Zeitraum mit einer planbaren monatlichen Struktur.' },
      { title: 'Mieten', body: 'Nutzen Sie ein flexibles Mietmodell für kurzfristige, saisonale oder wechselnde Hardwareanforderungen.' }
    ],
    note: 'Verfügbarkeit, Konfiguration und Konditionen können je nach Markt, Restaurant-Setup und ausgewähltem Zahlungsanbieter variieren.'
  },
  finalCta: {
    eyebrow: 'Setup zusammenstellen',
    title: 'Beschreiben Sie, wie Ihr Restaurant Gäste bedient. Wir planen die passende Hardware dazu.',
    body: 'Teilen Sie uns Tischanzahl, Servicemodell, Kassen-Setup, Küchenablauf und Zahlungsanforderungen mit. Daraus können wir ein praktisches Hardwarepaket ableiten.',
    button: 'Mit dem Vertrieb sprechen'
  }
};

export default function HardwarePage() {
  return <HardwareShowcase copy={copy} />;
}
