import HardwareShowcase from "@/components/HardwareShowcase";
import { metadataForRoute } from '@/lib/seo';
export const metadata = metadataForRoute('en', "/de/hardware", {
  title: "Restaurant POS Hardware und Zahlungsgeräte",
  description: "Entdecken Sie PayMyDine Restaurant-Hardware: Tisch QR und Pay-Displays, Dual-Screen-Kassierer POS-Systeme, mobile POS-Terminals, Drucker, Geldschubladen, KDS und Kioske."
});
const copy = {
  contactHref: "/de/contact",
  hero: {
    eyebrow: 'PayMyDine Hardware',
    title: "Restaurant Hardware, bereit für den Service.",
    intro: "Erstellen Sie ein komplettes PayMyDine-Setup mit tischseitigem QR und Zahlungsgeräten, Kassierer POS, mobilen Terminals, Druckern, Küchenbildschirmen und Selbstbedienungskiosken. Wählen Sie die Kombination, die zu Ihrer Operation passt.",
    primaryCta: "Planen Sie mein Hardware-Setup",
    secondaryCta: "Entdecken Sie die Geräte",
    meta: ["Kaufen", "Leasing", "Miete", "Ein vernetztes Ökosystem"]
  },
  productsEyebrow: "Hardware-Bereich",
  productsTitle: "Vom Tisch bis zur Küche hat jedes Gerät einen klaren Job.",
  productsIntro: "Wählen Sie nur die Hardware, die Ihr Restaurant heute benötigt, und erweitern Sie das Setup, wenn Ihr Servicemodell wächst.",
  productCta: "Fragen Sie nach diesem Gerät",
  products: [{
    type: 'payment',
    shortLabel: 'PAY',
    category: "Vorderzähler",
    name: 'Dual Cashier POS',
    body: "Eine kompakte Dual-Screen-Kassiererin POS für Restaurants, die eine weitere gegenständliche Bestellung und Kasse benötigen.",
    bullets: ["Dual-Screen-Kasseneinrichtung", "Bestellungen und Checkout am Schalter", "Verbunden mit dem PayMyDine Setup"]
  }, {
    type: 'table',
    shortLabel: 'QR + PAY',
    category: "Tischseite",
    name: 'Table QR & Pay Display',
    body: "Ein kompaktes Gerät für jeden Tisch, das den Gästen einen klaren QR-Einstiegspunkt bietet und die tischseitige Zahlung unterstützt.",
    bullets: ["QR Menü und Bestelleingang", "Tabellenseitiger Zahlungsstrom", "Immer sichtbar am Tisch"]
  }, {
    type: 'cashier',
    shortLabel: 'POS',
    category: "Vorderzähler",
    name: 'Cashier POS Desktop',
    body: "Der Hauptarbeitsplatz für Kassierer mit einem mitarbeiterseitigen POS und einem zweiten kundenseitigen Display für eine reibungslosere Kasse.",
    bullets: ["Zwei-Bildschirm-Einrichtung", "Bestellungen und Checkout in einer Station", "Gebaut für den täglichen Restaurantservice"]
  }, {
    type: 'mobile',
    shortLabel: 'MOBILE',
    category: "Bodendienste",
    name: 'Mobile POS Terminal',
    body: "Ein tragbares Tablet-Stil POS für die Annahme von Bestellungen, die Überprüfung von Tischen und den Abschluss von Zahlungen direkt auf dem Restaurantboden.",
    bullets: ["Portabler Service Workflow", "Zugriff auf Bestellung und Tabelle", "Zahlungsbereitschaft"]
  }, {
    type: 'kds',
    shortLabel: 'KDS',
    category: "Küche",
    name: 'Kitchen Screen',
    body: "Ein Küchenbildschirm, der verstreute Papiertickets mit einer fokussierten Ansicht der eingehenden Bestellungen und des Vorbereitungsstatus ersetzt.",
    bullets: ["Warteschlange für die Bestellung von Live-Küchen", "Sichtbarkeit des Vorbereitungsstatus", "Klare Übergabe an den Dienst"]
  }, {
    type: 'kiosk',
    shortLabel: 'KIOSK',
    category: "Selbstbedienung",
    name: 'Kiosk',
    body: "Ein kundenorientierter Bestellbildschirm für Restaurants, die einen schnelleren Self-Service-Bestellpfad anbieten möchten.",
    bullets: ["Kundenselbstbestellung", "Reduzierter Warteschlangendruck", "Verbundenes Menü und Auftragsfluss"]
  }, {
    type: 'printer',
    shortLabel: 'PRINT',
    category: "Eingänge",
    name: 'Printer',
    body: "Zuverlässiges Drucken für Kundenbelege und operative Bestellscheine, bei denen Papier noch Teil des Workflows ist.",
    bullets: ["Schneller Empfangsdruck", "Kompaktes Counter Footprint", "Funktioniert neben dem POS-Setup"]
  }, {
    type: 'drawer',
    shortLabel: 'CASH',
    category: "Bargeldverarbeitung",
    name: 'Cash Drawer',
    body: "Eine sichere Bargeldschublade für Restaurants, die neben Karten- und digitalen Zahlungen noch Bargeld akzeptieren.",
    bullets: ["Sicheres Bargeldlager", "Konterfähiges Format", "Passt zum Cashier Workflow"]
  }],
  ecosystem: {
    eyebrow: "Ein angeschlossenes Setup",
    title: "Hardware, die als ein Restaurantsystem funktioniert.",
    body: "Halten Sie den Gästetisch, die Kassiererin, die Bezahlung, die Küche und die Selbstbedienung mit der gleichen PayMyDine-Betriebsumgebung verbunden.",
    steps: ["Tisch & Gast", "POS & Zahlung", "Küche und Druck", "Kiosk & Wachstum"]
  },
  options: {
    eyebrow: "Flexible kommerzielle Optionen",
    title: "Kaufen, leasen oder mieten Sie das Setup, das zu Ihrem Restaurant passt.",
    body: "Wählen Sie das kommerzielle Modell, das Ihrem Budget, Rollout-Plan und Betriebshorizont entspricht.",
    items: [{
      title: "Kaufen",
      body: "Besitzen Sie die Hardware direkt und bauen Sie ein langfristiges Setup rund um Ihr Restaurant auf."
    }, {
      title: "Leasing",
      body: "Streuen Sie die Hardwarekosten über einen längeren Zeitraum, während Sie eine vorhersehbare monatliche Struktur beibehalten."
    }, {
      title: "Miete",
      body: "Verwenden Sie ein flexibles Mietmodell für kürzerfristige, saisonale oder sich ändernde Hardwareanforderungen."
    }],
    note: "Hardwareverfügbarkeit, Konfiguration und kommerzielle Bedingungen können je nach Markt, Restauranteinrichtung und ausgewähltem Zahlungsanbieter variieren."
  },
  finalCta: {
    eyebrow: "Erstellen Sie Ihr Setup",
    title: "Erzählen Sie uns, wie Ihr Restaurant Gäste bedient. Wir werden die Hardware um sie herum abbilden.",
    body: "Teilen Sie Ihre Anzahl von Tabellen, Servicemodell, Kassierer-Setup, Küchenfluss und Zahlungsanforderungen. Wir können von dort aus ein praktisches Hardwarepaket definieren.",
    button: "Sprechen Sie mit Sales"
  }
};
export default function HardwarePage() {
  return <HardwareShowcase copy={copy} />;
}
