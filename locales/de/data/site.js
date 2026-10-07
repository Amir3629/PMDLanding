export const productAreas = [{
  number: 1,
  icon: 'chart',
  title: 'PayMyDine AI',
  href: "/de/ai",
  body: "Verwenden Sie 6 KI-gestützte Aktionen: Stellen Sie Fragen, erhalten Sie ein tägliches Briefing, markieren Sie ungewöhnliche Bewegungen, vergleichen Sie Perioden, unterstützen Sie Prognosen und identifizieren Sie die nächste zu untersuchende Metrik.",
  navNote: "6 Maßnahmen für Fragen, Tagesübersichten, Warnungen, Vergleiche, Prognosen und Untersuchungen.",
  image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
  compactImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
}, {
  number: 2,
  icon: 'operations',
  title: "Restaurantbetrieb",
  href: "/de/solutions/operations",
  body: "Monitor 6 Live-Ansichten: Dashboard, offene Bestellungen, Tischstatus, Bodenkarten, Vor-Ort-Verzehr oder Mitnahme und aktuelle Restaurantaktivitäten.",
  navNote: "6 Live-Ansichten für Bestellungen, Tabellen, Bodenkarten, Kanäle und aktiven Service.",
  image: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp'
}, {
  number: 3,
  icon: 'calendar',
  title: "Reservierungen & Tischverwaltung",
  href: "/de/solutions/reservations",
  body: "Planen Sie 7 Reservierungs- und Sitzaufgaben: Kalender, Zeitleiste, Verfügbarkeit, Spontangäste, Tischzuweisung, Gästefluss und mehrere Etagen.",
  navNote: "7 Planungswerkzeuge für Ankunft, Kapazität, Sitzgelegenheiten, Spontangäste und mehrere Stockwerke.",
  image: '/site-assets/table/1.webp',
  compactImage: '/site-assets/table/2.webp'
}, {
  number: 4,
  icon: 'kitchen',
  title: "Bestellung, Küche & Menü",
  href: "/de/solutions/kitchen",
  body: "Verschieben Sie Bestellungen durch 7 Steuerelemente: Kellnereingabe, KDS, Vorbereitungsstatus, Bereitschaftsstatus, Menüverwaltung, Modifikatoren und ausverkaufte Artikel.",
  navNote: "7 Bestell-, Küchen- und Menükontrollen vom Eingang bis zur fertigen Übergabe.",
  image: '/site-assets/extra/chef-warm-kitchen.webp',
  compactImage: '/site-assets/kitchen/2.webp'
}, {
  number: 5,
  icon: 'card',
  title: "Zahlungen & Gästebestellung",
  href: "/de/solutions/payments",
  body: "Cover 8 Gästebestellungs- und Zahlungsmomente, einschließlich Tabelle QR, mobiles Menü, Bezahlen am Tisch und 3 Split-Methoden: gleichermaßen nach Artikel oder nach Aktien.",
  navNote: "8 Bestell- und Zahlungsmomente, einschließlich 3 Bill-Split-Methoden.",
  image: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp'
}, {
  number: 6,
  icon: 'chart',
  title: "Analysen, Prognosen und Rentabilität",
  href: "/de/solutions/insights",
  body: "Track 9 Entscheidungsmetriken: Umsatz, Gäste, durchschnittlicher Scheck, Tabellenumsatz, Umsatz nach Zeit, Bestseller, Zahlungsmix, Prognose und Rentabilität.",
  navNote: "9 Kennzahlen für Umsatz, Nachfrage, Tabellenleistung, Prognosen und Rentabilität.",
  image: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp'
}, {
  number: 7,
  icon: 'team',
  title: "Teammanagement",
  href: "/de/solutions/team",
  body: "Koordinieren Sie 5 Personenkontrollen: Rollenarbeitsbereiche, Berechtigungen, Schichten, Leistungskontext und Mitarbeiteraktivität.",
  navNote: "5 Personenkontrollen über Arbeitsbereiche, Berechtigungen, Schichten und Mitarbeiteraktivitäten hinweg.",
  image: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp'
}, {
  number: 8,
  icon: 'phone',
  title: "Gast CRM, Marketing & Wachstum",
  href: "/de/solutions/guest-ordering",
  body: "Verwenden Sie 6 Wachstumstools: Profile, Loyalität, Angebote, Kampagnen, Feedback und Bindung, wobei der Besuchskontext für relevante Folgemaßnahmen verfügbar ist.",
  navNote: "6 CRM und Wachstumswerkzeuge für Gastkontext, Engagement und Bindung.",
  image: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp'
}, {
  number: 9,
  icon: 'link',
  title: "Integrationen, mehrere Standorte & Bestand",
  href: "/de/integrations",
  body: "Verbinden Sie 4 Systemtypen - POS, Buchhaltung, Lieferung und Zahlungen - und fügen Sie dann zentrale Berichte, gemeinsame Menüs, Inventar, Lebensmittelkosten und Einkaufskontext hinzu.",
  navNote: "4 Integrationstypen plus zentrales Reporting, Menüs, Inventar, Lebensmittelkosten und Einkauf.",
  image: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp',
  compactImage: '/site-assets/custom/page-heroes/integrations-hero-chatgpt-20260814.webp'
}];
const productLink = index => {
  const item = productAreas[index];
  return [item.title, item.href, item.navNote, item.number];
};
export const primaryNav = [{
  label: "Produkt",
  href: "/de/platform",
  columns: [{
    title: "Plattform & Betrieb",
    links: [productLink(0), productLink(1), productLink(2)]
  }, {
    title: "Service & Leistung",
    links: [productLink(3), productLink(4), productLink(5)]
  }, {
    title: "Teams, Gäste & Wachstum",
    links: [productLink(6), productLink(7), productLink(8)]
  }]
}, {
  label: "Integrationen",
  href: "/de/integrations"
}, {
  label: "Preise",
  href: "/de/pricing"
}, {
  label: "Unternehmen",
  href: "/de/company"
}];
export const offerCards = productAreas;
export const homeStatusCards = [{
  image: '/site-assets/extra/chef-order-23.webp',
  eyebrow: "Gästezahlung",
  title: "Behalten Sie den Tabellen- und Zahlungsstatus durch den Bezahlvorgang verbunden.",
  body: "Die Gäste sehen den Betrag, die verfügbare Methode und die Bestätigung, während das Personal den Rechnungsstatus am Tisch hält."
}, {
  image: '/site-assets/comments/14.webp',
  eyebrow: "Split-Rechnungen",
  title: "Ein Gesetzentwurf unterstützt drei Split-Methoden.",
  body: "Lassen Sie die Gäste gleichmäßig aufteilen, bestellte Artikel zuweisen oder die Gesamtsumme durch Aktien teilen, ohne eine separate Kasse zu beginnen."
}, {
  image: '/site-assets/comments/5.webp',
  eyebrow: "Teamstatus",
  title: "Der Auftragsstatus wechselt in die Rolle, die für die nächste Übergabe verantwortlich ist.",
  body: "Servicemitarbeiter sehen Servicestatus, Küche sieht Vorbereitungsstatus und Management sieht Ausnahmen aus dem gleichen Ticketkontext."
}, {
  image: '/site-assets/home-status-20261005/tap-to-pay-table-1.webp',
  eyebrow: "Tabelle QR Bestellung & Zahlung",
  title: "Scannen Sie den Tabellencode QR, durchsuchen, bestellen und bezahlen Sie, ohne den Tabellenkontext zu verlieren.",
  body: "Die Gäste scannen den Tabellencode QR, um das mobile Menü zu öffnen, die Bestellung aufzugeben und die Zahlung abzuschließen, während PayMyDine den Tisch, die Bestellung, die Rechnung und den Zahlungsstatus für das Personal verbunden hält."
}];
export const workflowSteps = [["Gast- oder Personalaktion", "Ein Gast scannt, Empfangsplätze, ein Kellner öffnet eine Bestellung oder ein Manager wechselt einen Tisch."], ["Restaurant-Kontext", "Tisch, Gast, Bestellung, Timing, Notizen und Berechtigungen reisen mit der Aktion."], ["Rollenspezifische Maßnahme", "Die verantwortliche Rolle erhält eine fokussierte Warteschlange mit dem Kontext und den Kontrollen, die für den nächsten Schritt erforderlich sind."], ["Service & Bezahlvorgang", "Vorbereitung, Bereitschaftsstatus, Übergabe und Bezahlvorgang werden aus dem gleichen Restaurantkontext fortgesetzt."], ["Insight & Assistance", "Umsatz-, Gäste-, Tabellen-, Umsatz- und Rentabilitätsdaten stehen für Reporting- und KI--gestützte Fragen zur Verfügung."]];
export const imageGroups = {
  comments: Array.from({
    length: 17
  }, (_, i) => `/site-assets/comments/${i + 1}.webp`),
  kitchen: Array.from({
    length: 5
  }, (_, i) => `/site-assets/kitchen/${i + 1}.webp`),
  owner: Array.from({
    length: 3
  }, (_, i) => `/site-assets/owner/${i + 1}.webp`),
  payment: ['/site-assets/payment/1.webp', '/site-assets/payment/payment-experience.webp', '/site-assets/payment/3.webp', '/site-assets/payment/4.webp'],
  pos: ['/site-assets/pos/restaurant-platform.webp', '/site-assets/pos/pos-workflow.webp'],
  social: Array.from({
    length: 15
  }, (_, i) => `/site-assets/social/${i + 1}.webp`),
  staff: Array.from({
    length: 8
  }, (_, i) => `/site-assets/staff/${i + 1}.webp`),
  table: Array.from({
    length: 11
  }, (_, i) => `/site-assets/table/${i + 1}.webp`)
};
export const solutionPages = {
  operations: {
    eyebrow: "Restaurantbetrieb",
    title: "Siehe Tabellen, Bestellungen und Ausnahmen, bevor sie zu Serviceproblemen werden.",
    intro: "Verwenden Sie 6 Live-Ansichten - Dashboard, offene Bestellungen, Tischstatus, Bodenkarten, Vor-Ort-Verzehr oder Mitnahme und aktuelle Aktivitäten - um zu verstehen, was aktiv ist, was wartet und wo die Schicht Aufmerksamkeit benötigt.",
    storyEyebrow: "Restaurantbetrieb",
    capabilityEyebrow: "6 Live-Betriebsansichten",
    capabilityTitle: "Überprüfen Sie den Restaurantzustand, ohne ihn von separaten Bildschirmen neu zu erstellen.",
    capabilityBody: "Manager können offene Aufträge, belegte Tabellen, Auftragskanäle, Bodenposition und Live-Ausnahmen aus dem gleichen Betriebskontext überprüfen.",
    ctaTitle: "Sehen Sie sich die 6 Restaurant Operations Ansichten in Ihrem eigenen Service-Flow an.",
    ctaBody: "Bringen Sie Ihren Grundriss, Bestellkanäle und Managementfragen mit. Wir zeigen, wie Dashboard, Tabellen, Bestellungen und Live-Aktivitäten zusammenpassen.",
    heroImage: '/site-assets/custom/page-heroes/solutions-operations-hero-chatgpt-20260814.webp',
    accent: 'green',
    highlights: [['Dashboard', "Beginnen Sie mit aktiven Tabellen, offenen Bestellungen, Verkäufen und Ausnahmen anstelle einer generischen Zusammenfassung."], ["Bestellungen", "Filtern Sie offene, verspätete oder abgeschlossene Bestellungen und halten Sie jedes Ticket an seinem Tisch und Kanal."], ["Tabellen", "Siehe besetzte, verfügbare und Zahlungsstufentabellen mit Servicestatus im Blick."], ["Bodenkarten", "Verwenden Sie das physische Bodenlayout, um Tabellen, Buchungen und Servicedruck zu lokalisieren."]],
    story: [{
      title: "Eine Schiebeansicht ersetzt die wiederholte Statusüberprüfung.",
      body: "Ein Manager kann vom Bodenzustand zum Bestelldetail wechseln, ohne jedes Team um ein separates Update zu bitten.",
      image: '/site-assets/custom/solution-story/operations-shift-view-20260809.webp'
    }, {
      title: "Halten Sie Dine-in und Takeaway unterscheidbar, aber verbunden.",
      body: "Jeder Kanal behält seinen eigenen Tabellen- oder Bestellkontext und trägt gleichzeitig zum gleichen Live-Workload und Berichtsbild bei.",
      image: '/site-assets/extra/restaurant-team-planning.webp'
    }],
    bullets: ['Dashboard', "Bestellungen", "Tabellen", "Bodenkarten", "Dine-in/take-away", "Lebendaktivität"]
  },
  reservations: {
    eyebrow: "Reservierungen & Tischverwaltung",
    title: "Match-Buchungen und Spontangäste zu realer Bodenkapazität.",
    intro: "Verwenden Sie 7 Reservierungstools - Kalender, Zeitleiste, Verfügbarkeit, Spontangäste, Tischzuweisung, Gästefluss und mehrere Etagen -, um die Nachfrage im Live-Bereich zu planen.",
    storyEyebrow: "Reservierungen & Tischmanagement",
    capabilityEyebrow: "7 Reservierungs- und Sitzgelegenheiten",
    capabilityTitle: "Planen Sie im Voraus mit Kalender- und Zeitleistenansichten und arbeiten Sie dann live mit Verfügbarkeit und Tabellenzuweisung.",
    capabilityBody: "Der Empfang kann Parteigröße, Ankunftszeit, verfügbare Tische, erwartete Wendungen, Spontangäste und Bodenposition verwenden, um die nächste Sitzentscheidung zu treffen.",
    ctaTitle: "Möchten Sie Reservations & Table Management in Aktion sehen?",
    ctaBody: "Buchen sie eine demo und wir gehen durch kalender, ankünfte, tischzuweisungen, walk-ins und mehrstöckige setups.",
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [["Kalender", "Sehen Sie Buchungen und bevorstehende Nachfrage in einer klaren Planungsansicht."], ["Zeitleiste", "Verstehen Sie die Form der Dienstzeit und was als nächstes kommt."], ["Verfügbarkeit", "Halten Sie verfügbare Tische und Sitzplatzkapazität in der Nähe des Reservierungsworkflows."], ['Spontangäste', "Behandeln Sie ungeplante Ankünfte, ohne das breitere Bodenbild zu verlieren."]],
    story: [{
      title: "Sehen Sie sich die Form der Ankunft an, bevor der Service beginnt.",
      body: "Kalender- und Zeitleistenansichten zeigen Ankunftslast, Partygrößen und Timing, so dass das Team die Kapazität vorbereiten kann, bevor die Tür beschäftigt wird.",
      image: '/site-assets/extra/shared-table-feast.webp'
    }, {
      title: "Verwandeln Sie eine Buchungsliste in einen Live-Sitzplan.",
      body: "Verfügbarkeit, Spontangäste, erwartete Kurven und mehrstöckige Tischzuordnung bleiben dem Reservierungskontext beigefügt.",
      image: '/site-assets/custom/reservations-floor-story.webp'
    }],
    bullets: ["Kalender", "Zeitleiste", "Verfügbarkeit", 'Spontangäste', "Tabellenzuordnung", "Gästestrom", "Mehrfachböden"]
  },
  'guest-ordering': {
    eyebrow: "Gast CRM, Marketing & Wachstum",
    title: "Erstellen Sie eine nutzbare Gästeaufzeichnung aus Besuchen, Bestellungen und Feedback.",
    intro: "Verwenden Sie 6 Wachstumstools - Profile, Loyalität, Angebote, Kampagnen, Feedback und Bindung -, um das Engagement zu verstehen und relevante Folgemaßnahmen zu planen, wenn Zustimmung und Datenregeln dies zulassen.",
    storyEyebrow: "Gastbeziehungen",
    capabilityEyebrow: "6 CRM und Wachstumswerkzeuge",
    capabilityTitle: "Wechseln Sie von einem anonymen Besuch zu einem relevanten Follow-up.",
    capabilityBody: "Profile können Besuchsverlauf, Bestellpräferenzen, Loyalitätsaktivitäten, Kampagnenreaktionen und Feedback verbinden, so dass die nächste Nachricht einen klaren Grund hat.",
    ctaTitle: "Möchten Sie Gast CRM, Marketing & Wachstum erkunden?",
    ctaBody: "Wir können Profile, Loyalität, Angebote, Kampagnen, Feedback und die Gästesignale durchgehen, die die Aufbewahrung unterstützen können.",
    heroImage: '/site-assets/custom/page-heroes/solutions-guest-ordering-hero-chatgpt-20260814.webp',
    accent: 'green',
    highlights: [["Profile", "Halten Sie nützliche Gästeinformationen zusammen, damit die Beziehung kontextbezogener werden kann."], ["Loyalität", "Unterstützen Sie wiederholte Besuche mit einer klareren Sicht auf das Gastengagement."], ["Angebote", "Nutzen Sie relevante Angebote, um stärkere Gästebeziehungen zu unterstützen."], ["Kampagnen", "Verbinden Sie den Gastkontext mit Kampagnen, die rund um das Restaurantpublikum erstellt wurden."]],
    story: [{
      title: "Erstellen Sie das Gästeprofil aus echten Restaurantinteraktionen.",
      body: "Verbinden Sie Besuche, Bestellungen, Präferenzen und Loyalitätsaktivitäten, um die Beziehung über eine Tabelle oder Transaktion hinaus zu verstehen.",
      image: '/site-assets/custom/solution-story/guest-profile-interactions-20260809.webp'
    }, {
      title: "Verwenden Sie Feedback, um die nächste Kundenbindungsmaßnahme zu entscheiden.",
      body: "Kombinieren Sie Feedback, bieten Sie Antworten und Besuchshäufigkeit an, um zu wählen, ob die nächste Aktion Wiedergutmachung nach Serviceproblemen, Loyalität oder eine relevante Kampagne ist.",
      image: '/site-assets/extra/cafe-conversations.webp'
    }],
    bullets: ["Profile", "Loyalität", "Angebote", "Kampagnen", 'Feedback', 'Kundenbindung']
  },
  payments: {
    eyebrow: "Zahlungen & Gästebestellung",
    title: "Nehmen Sie eine Tabelle aus dem QR-Scan zur bestätigten Zahlung, ohne die Reise neu zu starten.",
    intro: "Cover 8 Gast- und Zahlungsmomente: Karte oder digitale Zahlung, Bezahlen am Tisch, aufgeteilt zu gleichen Teilen, geteilt nach Artikel, geteilt nach Aktien, Tisch QR, mobiles Menü und Gäste-Bezahlvorgang.",
    storyEyebrow: "Gästebestellung & Zahlung",
    capabilityEyebrow: "8 Bestell- und Zahlungsmomente",
    capabilityTitle: "Behalten Sie Tabelle, Bestellung, Rechnung und Zahlungsstatus vom Scan bis zur Bestätigung bei.",
    capabilityBody: "Die Gäste können scannen, durchsuchen, bestellen, Service anfordern und bezahlen, während das Restaurant den Tisch und den Bestellkontext sichtbar hält.",
    ctaTitle: "Möchten Sie Payments & Guest Ordering erkunden?",
    ctaBody: "Buchen Sie eine Demo und wir konzentrieren uns auf Tisch QR, mobile Menüs, Gästekasse, Bezahlen am Tisch und Split-Bill-Flows.",
    heroImage: '/site-assets/custom/page-heroes/solutions-payments-hero-chatgpt-20260814.webp',
    accent: 'purple',
    highlights: [["Karte / digitale Zahlungen", "Zeigen Sie die Karte oder die digitalen Methoden an, die für den konfigurierten Anbieter verfügbar sind, und halten Sie die ausgewählte Methode an den Rechnungsstatus gebunden."], ["Zahlung am Tisch", "Öffnen Sie die korrekte Rechnung aus dem Tabellenkontext und halten Sie den Zahlungsstatus für das Serviceteam sichtbar."], ["Geteilt", "Teilen Sie die Gesamtsumme gleichmäßig auf die ausgewählte Anzahl von Zahlern."], ["Aufschlüsselung nach Posten", "Weisen Sie bestellte Artikel einzelnen Zahlern zu, während Sie den Restbetrag sichtbar halten."]],
    story: [{
      title: "Vier Gastaktionen bleiben auf einem mobilen Pfad.",
      body: "Scannen, durchsuchen, bestellen und bezahlen bleiben am Tisch und füttern die verantwortliche Restaurantrolle bei jedem Schritt.",
      image: '/site-assets/extra/payment-thank-you.webp'
    }, {
      title: "Ein Gesetzentwurf unterstützt drei Split-Methoden.",
      body: "Die Gäste können als eine Partei bezahlen oder sich zu gleichen Teilen nach bestelltem Artikel oder nach Anteilen aufteilen, während der unbezahlte Restbetrag sichtbar bleibt.",
      image: '/site-assets/custom/cafe-payment-confirmation-replacement.webp'
    }],
    bullets: ["Karte / digitale Zahlungen", "Zahlung am Tisch", "Geteilt", "Aufschlüsselung nach Posten", "Gespalten nach Aktien", "Tabelle QR", "Mobiles Menü", "Gäste Bezahlvorgang"]
  },
  kitchen: {
    eyebrow: "Bestellung, Küche & Menü",
    title: "Verschieben Sie jede Bestellung vom Eintrag in den Bereitschaftsstatus mit angehängtem Menükontext.",
    intro: "Verwenden Sie 7 Steuerelemente - Kellnereingabe, KDS, Vorbereitungsstatus, Bereitschaftsstatus, Menüverwaltung, Modifikatoren und ausverkaufte Artikel - von der Auftragserfassung bis zur Serviceübergabe.",
    storyEyebrow: "Bestellung, Küche & Menü",
    capabilityEyebrow: "7 Bestellung, Küche und Menüsteuerung",
    capabilityTitle: "Geben Sie Servicepersonal und Küche den gleichen Ticketstatus, ohne ihnen den gleichen Bildschirm zu geben.",
    capabilityBody: "Das Ticket trägt Tisch, Artikel, Modifikator und Timing-Kontext in die Küche, während Menü und ausverkaufte Änderungen verhindern, dass nicht verfügbare Artikel durch den Fluss fortgesetzt werden.",
    ctaTitle: "Möchten Sie Bestellung, Küche & Menü in Aktion sehen?",
    ctaBody: "Wir können die Bestellung von Kellnern, die Vorbereitung von KDS, das Menümanagement, die Anpassung und die Übergabe des Bereitschaftsstatus rund um Ihren Betrieb anzeigen.",
    heroImage: '/site-assets/extra/chef-warm-kitchen.webp',
    accent: 'orange',
    highlights: [["Bestellung von Kellnern", "Erstellen Sie die Bestellung aus dem Kellner- oder Gästefluss und fügen Sie die richtige Tabelle, Artikel, Modifikatoren und Notizen hinzu."], ['KDS', "Platzieren Sie eingehende Tickets in einer fokussierten KDS-Warteschlange mit Artikeldetails, Timing und Prioritätskontext."], ["Vorbereitungsstatus", "Zeigen Sie erhaltene und vorbereitende Zustände, damit Küche und Management sehen können, was wartet und was aktiv ist."], ["Bereitschaftszustand", "Veröffentlichen Sie den Bereitschaftsstatus für das Servicepersonal, damit das abgeschlossene Ticket einen klaren nächsten Besitzer hat."]],
    story: [{
      title: "Die Küche erhält den kompletten Vorbereitungskontext, keine kopierte Bestellzusammenfassung.",
      body: "Elementdetail, Modifikatoren, Ticketalter und aktueller Zustand bleiben während des Service in der Vorbereitungswarteschlange sichtbar.",
      image: '/site-assets/custom/solution-story/kitchen-preparation-context-20260809.webp'
    }, {
      title: "Menüverfügbarkeit verhindert das nächste vermeidbare Ticketproblem.",
      body: "Menü, Modifikator und ausverkaufte Änderungen aktualisieren den Bestellkontext, so dass nicht verfügbare oder falsch konfigurierte Artikel nicht in Vorbereitung bleiben.",
      image: '/site-assets/extra/team-planning.webp'
    }],
    bullets: ["Bestellung von Kellnern", 'KDS', "Vorbereitungsstatus", "Bereitschaftszustand", "Menüverwaltung", "Menüanpassung", "Ausverkaufte Informationen"]
  },
  team: {
    eyebrow: "Teammanagement",
    title: "Geben Sie jeder Rolle die Kontrollen, die sie benötigt, und verwalten Sie das Teambild.",
    intro: "Koordinieren Sie 5-Personen-Steuerelemente - Rollenarbeitsbereiche, Berechtigungen, Schichten, Leistungskontext und Mitarbeiteraktivität -, ohne jeden Mitarbeiter in den gleichen Admin-Bildschirm zu versetzen.",
    storyEyebrow: "Teammanagement",
    capabilityEyebrow: "5 Mannschaftskontrollen",
    capabilityTitle: "Begrenzen Sie den Zugriff und das Interface-Rauschen, während Sie die Übergabe zwischen den Rollen beibehalten.",
    capabilityBody: "Besitzer, Manager, Servicemitarbeiter, Küche, Reservierungen und Finanzen können verschiedene Kontrollen sehen, während sie den gleichen Tisch, die gleiche Bestellung und den gleichen Geschäftskontext verwenden.",
    ctaTitle: "Möchten Sie das Teammanagement erkunden?",
    ctaBody: "Buchen Sie eine Demo und wir werden Rollenarbeitsbereiche, Berechtigungen, Schichten, Leistung und Mitarbeiteraktivität um Ihre Teamstruktur herum abbilden.",
    heroImage: '/site-assets/custom/page-heroes/solutions-team-hero-chatgpt-20260809.webp',
    accent: 'green',
    highlights: [["Rollenarbeitsbereiche", "Weisen Sie der für die Arbeit verantwortlichen Rolle eine fokussierte Warteschlange und eine Reihe von Aktionen zu."], ["Rollen und Berechtigungen", "Definieren Sie Ansicht, Erstellen, Ändern, Genehmigen und Exportieren von Berechtigungen nach Rollen."], ["Schichtmanagement", "Halten Sie Schichtzuweisung und aktiven Teamkontext in der Nähe der zu koordinierenden Arbeit."], ["Performance Insight", "Überprüfen Sie abgeschlossene Aktionen, Timing- und Serviceergebnisse mit der verantwortlichen Rolle und dem sichtbaren Shift-Kontext."]],
    story: [{
      title: "Sechs Arbeitsbereiche organisieren den Zugang zu echten Restaurantaufgaben.",
      body: "Eigentümer, Manager, Servicemitarbeiter, Küche, Reservierungen und Finanzen können fokussierte Ansichten verwenden, während der Übergabekontext in Verbindung bleibt.",
      image: '/site-assets/extra/taqueria-handoff.webp'
    }, {
      title: "Management sieht Teamaktivitäten, ohne Managementkontrollen jeder Rolle auszusetzen.",
      body: "Manager können Aufgaben, aktive Arbeit und Abschlussstatus überprüfen, während jede Rolle weiterhin nur die für ihre Verantwortung erforderlichen Kontrollen sieht.",
      image: '/site-assets/extra/latte-handoff.webp'
    }],
    bullets: ["Rollenarbeitsbereiche", "Rollen und Berechtigungen", "Schichtmanagement", "Performance Insight", "Personaltätigkeit"]
  },
  insights: {
    eyebrow: "Analysen, Prognosen und Rentabilität",
    title: "Track 9 Metriken, die Umsatz, Nachfrage und Marge erklären.",
    intro: "Vergleichen Sie Umsatz, Gäste, Durchschnittsscheck, Tabellenumsatz, Verkäufe nach Zeit, Bestseller, Zahlungsmix, Prognose und Rentabilität nach Artikel oder Standort.",
    storyEyebrow: "Analytics & Profitabilität",
    capabilityEyebrow: "9 Managementmetriken",
    capabilityTitle: "Vergleichen Sie die Zahl, den Zeitraum und den Betriebskontext dahinter.",
    capabilityBody: "Eine Metrik sollte ihren Zeitraum, ihren Standort, ihre Kanäle und ihren Quellkontext angeben, damit das Management eine Änderung der Restaurantaktivität dahinter verfolgen kann.",
    ctaTitle: "Möchten Sie Analytics, Forecasting & Profitabilität erkunden?",
    ctaBody: "Wir können die Signale hinter Umsatz, Gäste, Tischleistung, Prognose, Bestseller und Rentabilität nach Artikel oder Standort zeigen.",
    heroImage: '/site-assets/custom/page-heroes/solutions-insights-hero-chatgpt-20260814.webp',
    accent: 'blue',
    highlights: [["Einnahmen", "Vergleichen Sie den Umsatz nach Zeitraum, Dienstfenster, Kanal oder Ort, an dem die konfigurierten Daten ihn unterstützen."], ["Gäste", "Verfolgen Sie die Anzahl der Gäste oder Deckungen, um die Nachfrage zu erklären und die Ausgaben pro Gast zu berechnen."], ["Durchschnittskontrolle", "Berechnen Sie den durchschnittlichen Scheck aus Einnahmen und Gästezahl und vergleichen Sie dann das Ergebnis nach Zeitraum oder Ort."], ["Tabellenumsatz", "Überprüfen Sie, wie viele Parteientabellen dienen und wie lange Tabellen in jeder Servicephase verbleiben."]],
    story: [{
      title: "Neun Metriken erzeugen eine Entscheidungsansicht.",
      body: "Lesen Sie Umsatz und Nachfrage neben Bestellkanälen, Gastaktivität, Tischleistung, Bestsellern und Zahlungsmix.",
      image: '/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp'
    }, {
      title: "Vergleichen Sie Prognosen mit der tatsächlichen Nachfrage und Marge.",
      body: "Verwenden Sie historische Verkaufs- und Nachfragemuster, um eine Prognose zu unterstützen, und vergleichen Sie sie dann mit den tatsächlichen Ergebnissen und der Rentabilität nach Artikel oder Standort.",
      image: '/site-assets/extra/analytics-tablet-phone.webp'
    }],
    bullets: ["Einnahmen", "Gäste", "Durchschnittskontrolle", "Tabellenumsatz", "Verkäufe nach Zeit", "Bestseller", "Zahlungsmix", "Prognosen", "Rentabilität nach Position oder Standort"]
  }
};

// === PMD PRODUCT PAGE DEPTH V2 START ===

const solutionDetailExpansions = {
  operations: {
    factsEyebrow: "Restaurantbetrieb in Zahlen",
    factsTitle: "Eine Live-Betriebsansicht basiert auf sechs Kernfähigkeiten und vier Rollenperspektiven.",
    factsIntro: "Die Zahlen beschreiben den konfigurierten Produktumfang. Leistungsverbesserungen müssen an der Basislinie des Restaurants gemessen werden.",
    facts: [['06', "Kernkompetenzen", "Dashboard, Bestellungen, Tische, Bodenkarten, Vor-Ort-Verzehr oder Mitnahme und Live-Aktivitäten bleiben in einem Operationsbereich."], ['04', "Rollenperspektiven", "Besitzer, Manager, Servicemitarbeiter und Küchenteams verwenden den gleichen Restaurantkontext auf verschiedenen Detailebenen."], ['02', "Dienstkanäle", "Dine-in und Takeaway können zusammen verfolgt werden, ohne separate Versionen des Restauranttages beizubehalten."], ['01', "gemeinsames Bedienbild", "Eine Statusänderung sollte die gleiche Restaurantgeschichte aktualisieren, anstatt in einem getrennten Bildschirm zu enden."]],
    workflowEyebrow: "Eine Verschiebung in fünf Schritten",
    workflowTitle: "Wie sich eine Live-Service-Periode durch die Operationsschicht bewegt.",
    workflowIntro: "Der Ablauf soll den aktuellen Zustand, die verantwortliche Rolle und die nächste Aktion leichter identifizieren.",
    workflow: [["Laden Sie den Shift-Kontext", "Offene Reservierungen, aktive Tische, offene Bestellungen, Takeaway-Arbeiten und die Ansicht vor dem Servicedruck."], ["Ausnahmen angeben", "Finden Sie wartende Gäste, verspätete Bestellungen, unbezahlte Tische oder Bereiche des Bodens, die die Aufmerksamkeit des Managements benötigen."], ["Verlegen Sie die Arbeit in die verantwortliche Rolle", "Servicemitarbeiter sehen Serviceaktionen, Küche sieht Vorbereitungsarbeiten und Manager behalten die breitere Ausnahmeansicht."], ["Schließen Sie den Service Loop", "Aktualisieren Sie den Bestell-, Tabellen-, Vorbereitungs- und Zahlungsstatus, damit das nächste Teammitglied nicht von einem alten Status aus arbeitet."], ["Überprüfen Sie die abgeschlossene Schicht", "Vergleichen Sie Einnahmen, Gäste, Tischbewegung und betriebliche Ausnahmen nach dem Servicezeitraum."]],
    rolesTitle: "Jede Rolle erhält einen anderen Detaillierungsgrad als am selben Restauranttag.",
    rolesIntro: "Das Ziel ist nicht, dass jede Person das Management-Dashboard nutzt. Es ist, jede Rolle konzentriert zu halten und gleichzeitig den gemeinsamen Kontext zu bewahren.",
    roleViews: [["Eigentümer", "Rezensiert Einnahmen, Gästevolumen, Tabellenumsatz und die Ausnahmen, die das Geschäftsergebnis beeinflusst haben."], ["Betriebsleiter", "Überwacht den Boden, offene Aufträge, Verzögerungen, Takeaway-Aktivitäten und die Aktionen, die während der Schicht koordiniert werden müssen."], ["Servicepersonal", "Funktioniert mit zugewiesenen Tabellen, Bestellungen, Gästeanfragen, Servicestatus und Bezahlvorgang-Kontext."], ["Küche", "Erhält Vorbereitungsarbeiten mit Bestelldetails, Notizen, Timing und Bereitschaftsstatus."]],
    metricsTitle: "Messen Sie, ob der Betriebsfluss einfacher wird.",
    metricsIntro: "Erfassen Sie zuerst eine Baseline und vergleichen Sie dann die gleiche Definition und den gleichen Servicezeitraum nach der Implementierung.",
    metrics: [["Zeit für die Ankunft am Sitz", "Messen Sie, wie lange Gäste zwischen der Ankunft oder dem Check-in und dem Sitzen warten, wo diese Ereignisse erfasst werden."], ["Order-to-Preparation-Zeit", "Messen Sie das Intervall zwischen Auftragsbestätigung und der Küche, die die Arbeit empfängt oder beginnt."], ["Tabellenumsatz", "Verfolgen Sie die Zeit vom Sitzen bis zur Freigabe des Tisches mit einer einheitlichen Definition für jedes Servicemodell."], ["Rechnungs-/Zahlungszeitpunkt", "Messen Sie, wie lange die letzte Bezahlvorgang-Phase von der Rechnungsanfrage bis zum abgeschlossenen Zahlungsstatus dauert."]],
    implementationTitle: "Vereinbaren Sie auf dem Boden, Status und Besitz, bevor Sie live gehen.",
    implementationIntro: "Die Bedienansicht ist nur so übersichtlich wie die Tabellenkarte, Statusdefinitionen, Rollenberechtigungen und verbundene Daten dahinter.",
    implementation: ["Bodenkarten, Tabellenkennungen und Kapazitätsstruktur", "Dine-in- und Takeaway-Kanaldefinitionen", "Bestellung, Tisch, Küche und Vokabular zum Zahlungsstatus", "Rollenberechtigungen und Ausnahmebesitz", "POS oder Zahlungsdaten für die Betriebsansicht verfügbar", "Bezugszeiträume und metrische Definitionen für die Überprüfung"],
    faqs: [["Ersetzt PayMyDine das POS?", "Nicht standardmäßig. Das Produkt kann Betriebs-, Gast-, Team- und Einblicksebenen um unterstützte POS-Verbindungen oder ausgewählte eigenständige Module hinzufügen."], ["Kann es mehr als eine Etage unterstützen?", "Ja. Die aktuelle Produktkarte umfasst Bodenkarten und mehrstöckige Restaurant-Setups."], ["Können Dine-In und Takeaway getrennt bleiben?", "Sie können einen bestimmten Kanalkontext beibehalten und gleichzeitig zu einer Managementansicht beitragen."], ["Ist jeder Status in Echtzeit?", "Frische hängt vom Ursprungsmodul, dem verbundenen System, den Berechtigungen und der Aktualisierungsmethode ab, die in der Bereitstellung verfügbar sind."]]
  },
  reservations: {
    factsEyebrow: "Reservierungs- und Sitzbereich",
    factsTitle: "Sieben Planungsmöglichkeiten verbinden Buchungen, Ankünfte und die Live-Etage.",
    factsIntro: "Verfügbarkeit und Sitzlogik müssen um die tatsächlichen Servicezeiten, die Bodenstruktur und die Betriebsregeln herum konfiguriert werden.",
    facts: [['07', "Reservierungsmöglichkeiten", "Kalender, Zeitleiste, Verfügbarkeit, Spontangäste, Tischzuordnung, Gästefluss und mehrere Stockwerke bilden den aktuellen Produktumfang."], ['03', "Planungsansichten", "Kalender, Zeitleiste und Live-Etage-Kontext unterstützen verschiedene Entscheidungen vor und während des Dienstes."], ['02', "Ankunftsarten", "Bestätigte Buchungen und Spontangäste können bearbeitet werden, ohne das breitere Kapazitätsbild zu verlieren."], ['LIVE', "Bodenkontext", "Besetzte, verfügbare und reservierungsbereite Tischzustände bleiben in der Nähe der Sitzentscheidung."]],
    workflowEyebrow: "Von der Verfügbarkeit zum Sitzen",
    workflowTitle: "Wie eine Buchung zu einer Tischentscheidung anstelle einer separaten Liste wird.",
    workflowIntro: "Die Planungsansicht sollte nützlich bleiben, wenn das Restaurant von der Vorbereitung in die Live-Ankunft wechselt.",
    workflow: [["Konfigurieren der Servicestruktur", "Definieren Sie Servicezeiten, Bodenkarten, Tischkapazität und die vom Restaurant verwendeten Verfügbarkeitsregeln."], ["Buchungen und Spontangäste erfassen", "Halten Sie Parteigröße, Ankunftszeit und Quellkontext an jede erwartete oder ungeplante Ankunft angehängt."], ["Vorbereitung der Ankunftsansicht", "Verwenden Sie den Kalender oder die Zeitleiste, um das nächste Nachfragefenster zu verstehen, bevor die Gäste den Empfang erreichen."], ["Sitz mit sichtbarem Boden", "Zuweisen oder Neuzuweisen von Tabellen mit dem aktuellen Verfügbarkeits- und Servicezustand anstelle der Buchungsliste allein."], ["Überprüfung des Sitzergebnisses", "Messen Sie Ankunft, No-Shows, Wartezeit, Tabellennutzung und Umsatz mit konsistenten Ereignisdefinitionen."]],
    rolesTitle: "Die Rezeption plant die Tür, während das Management Kapazität und Service im Blick behält.",
    rolesIntro: "Reservierungsarbeiten sind spezialisiert, aber die Sitzentscheidung wirkt sich immer noch auf Servicemitarbeiter, Küche und Eigentümerberichte aus.",
    roleViews: [["Reservierungen und Empfang", "Sehen Sie bevorstehende Ankünfte, Partygröße, Buchungsdetails, Verfügbarkeit und die nächste Sitzentscheidung."], ["Betriebsleiter", "Überwacht Kapazitätsdruck, Spontangäste, verspätete Ankunft und wie sich die Sitzmöglichkeiten auf den aktiven Boden auswirken."], ["Servicepersonal", "Erhält den tisch und den gastkontext, der benötigt wird, um den service nach dem sitzen zu beginnen."], ["Eigentümer", "Bewertungen Nachfragemuster, No-Shows, Auslastung und Tabellenumsatz über Perioden oder Standorte."]],
    metricsTitle: "Verwenden Sie Reservierungsereignisse, um die Planung zu verbessern, ohne einen Prozentsatz zu erfinden.",
    metricsIntro: "Das System sollte die Ereignisse erfassen, die erforderlich sind, um jede Metrik zu berechnen, bevor die Website oder das Team eine Verbesserung behauptet.",
    metrics: [["Buchungsrate bis Ankunft", "Vergleichen Sie bestätigte Buchungen mit den tatsächlichen Ankünften mit den gleichen Stornierungs- und No-Show-Regeln."], ["No-Show-Rate", "Verfolgen Sie erwartete Parteien, die nicht ankommen, segmentiert nach Zeitraum, Quelle oder Standort, sofern verfügbar."], ["Zeit für die Ankunft am Sitz", "Messen Sie die Wartezeit zwischen der Ankunft des Gastes und den zugewiesenen Sitzplätzen während vergleichbarer Servicezeiten."], ["Tabellenauslastung und Umsatz", "Überprüfen Sie, wie die verfügbare Kapazität genutzt wird und wie lange Tische unter den eigenen Definitionen des Restaurants besetzt bleiben."]],
    implementationTitle: "Reservierungsgenauigkeit beginnt mit der Konfigurationsgenauigkeit.",
    implementationIntro: "Dokumentieren Sie das Verfügbarkeitsmodell und die Ereignisse, die einen Tabellen- oder Buchungsstatus ändern.",
    implementation: ["Servicezeiträume und Buchungsverfügbarkeitsregeln", "Bodenkarten, Tabellenkapazitäten und Tabellenstatusdefinitionen", "Begehbare Handhabungs- und Empfangsverantwortung", "Anreise-, Sitzplatz-, Stornierungs- und No-Show-Events", "Buchungsquellen oder Integrationen, die dem Setup zur Verfügung stehen", "Messregeln für Wartezeit, Nutzung und Umsatz"],
    faqs: [["Kann die Seite mehrere Stockwerke unterstützen?", "Ja. Mehrstöckiger Kontext ist Teil des aktuellen Reservierungs- und Tischverwaltungsumfangs."], ["Wie werden Spontangäste gehandhabt?", "Spontangäste können dem Live-Ankunfts- und Bodenbild hinzugefügt werden, so dass die nächste Sitzentscheidung die aktuelle Kapazität verwendet."], ["Entscheidet PayMyDine, wann man überbucht?", "Verfügbarkeitsregeln gehören zur konfigurierten Restaurantpolitik. Die Plattform sollte keine Überbuchungsstrategie ohne eine vereinbarte Regel annehmen."], ["Können Buchungsdaten die Berichterstattung beeinflussen?", "Ja, wenn Buchungs-, Ankunfts- und Sitzereignisse konsistent erfasst werden und der Berichtsschicht zur Verfügung stehen."]]
  },
  kitchen: {
    factsEyebrow: "Bestell- und Küchenumfang",
    factsTitle: "Sieben Steuerelemente verbinden Auftragserfassung, Vorbereitungsstatus und Menüverfügbarkeit.",
    factsIntro: "Ziel ist es, den fehlenden Kontext zwischen Servicemitarbeitern, der Küche und dem Menü zu reduzieren, das Gäste oder Mitarbeiter sehen.",
    facts: [['07', "Ablauf-Kontrollen", "Kellnerbestellung, KDS, Vorbereitungsstatus, Bereitschaftsstatus, Menüverwaltung, Anpassung und ausverkaufte Informationen sind enthalten."], ['02', "Kritische Übergaben", "Der Auftrag wechselt vom Service zur Vorbereitung, dann bewegt sich der Bereitschaftsstatus zurück zum Serviceteam."], ['03', "Ordnungskontexte", "Tabellen-, Element- oder Modifikatordetails und Vorbereitungsstatus bleiben dem gleichen Werk beigefügt."], ['01', "geteilter Menüzustand", "Menüänderungen und ausverkaufte Informationen sollten die Personen und Kanäle erreichen, die von ihnen abhängen."]],
    workflowEyebrow: "Vom Auftrag bis zur fertigen Übergabe",
    workflowTitle: "Wie die Küche vollständige Arbeit erhält und einen klaren Status zurückgibt.",
    workflowIntro: "Das nützliche Ergebnis ist kein weiterer Ticketbildschirm. Es ist eine lesbare Vorbereitungswarteschlange mit einer zuverlässigen Übergabe.",
    workflow: [["Erfassen des Auftrags", "Notieren Sie die Tabelle oder den Kanal, bestellte Elemente, Modifikatoren und Notizen im Service-Ablauf."], ["Präsentation der Vorbereitungsarbeiten", "Zeigen Sie der Küche das Bestelldetail und den Prioritätskontext, der benötigt wird, um die Arbeit ohne nicht zusammenhängende Admin-Informationen aufzunehmen."], ["Status der Aktualisierungsvorbereitung", "Bewegen Sie die Arbeit durch empfangene und laufende Zustände, damit Manager und Serviceteams verstehen können, was passiert."], ["Zeichen bereit für den Dienst", "Geben Sie einen klaren Bereitschaftsstatus an die Rolle zurück, die für den Abhol- oder Tischservice verantwortlich ist."], ["Menüverfügbarkeit beibehalten", "Aktualisieren Sie Artikel, Anpassungen und ausverkaufte Informationen, damit neue Bestellungen widerspiegeln, was das Restaurant servieren kann."]],
    rolesTitle: "Die gleiche Reihenfolge wird unterschiedlich für Service, Vorbereitung und Management dargestellt.",
    rolesIntro: "Jede Rolle sollte die Details sehen, die für ihre Aktion erforderlich sind, ohne den Tisch zu verlieren und die Identität hinter der Arbeit zu bestellen.",
    roleViews: [["Servicepersonal", "Erfasst Elemente, Modifikatoren und Notizen, folgt dann Vorbereitung und Bereitschaftsstatus für die richtige Tabelle."], ["Küche und KDS", "Funktioniert aus einer fokussierten Warteschlange mit Einzelteildetails, Notizen, verstrichener Zeit und Vorbereitungsstatus."], ["Betriebsleiter", "Sehen Sie Workload, verspätete Tickets, bereitstehende Handoffs und Menüverfügbarkeitsausnahmen während des Service."], ["Menüverwalter", "Behält Menüpunkte, Anpassung und ausverkauften Zustand für die konfigurierten Bestellkanäle bei."]],
    metricsTitle: "Messen Sie die Handoffs, nicht nur die endgültige Ticketzeit.",
    metricsIntro: "Ein Restaurant sollte zustimmen, wann jeder Timer startet und aufhört, bevor er die Leistung vergleicht.",
    metrics: [["Sichtbarkeit von Bestellung zu Küche", "Messen Sie das Intervall zwischen Auftragsbestätigung und der Vorbereitungsansicht, die die Arbeit erhält."], ["Zubereitungsdauer", "Verfolgen Sie die Zeit von der vereinbarten Vorbereitungsveranstaltung bis zum Bereitschaftsstatus nach Artikel, Kategorie oder Leistungszeitraum, sofern verfügbar."], ["Ready-to-serve warten", "Messen Sie, wie lange abgeschlossene Arbeiten warten, bevor die Service-Übergabe bestätigt wird."], ["Ausverkaufte Aktualisierungsverzögerung", "Messen Sie die Zeit zwischen einer Verfügbarkeitsentscheidung und dem aktualisierten Menüzustand, der den betreffenden Kanal erreicht."]],
    implementationTitle: "Definieren Sie das Menü und das Statusmodell, bevor Sie die Küchenleistung messen.",
    implementationIntro: "Die Erstellungsberichterstattung ist nur vergleichbar, wenn Artikelstruktur, Statusereignisse und Channel Ownership konsistent sind.",
    implementation: ["Menüelemente, Kategorien, Modifikatoren und Vorbereitungshinweise", "KDS Ansichten und die Rollen, die für jede Warteschlange verantwortlich sind", "Erhaltene, laufende und bereit Statusdefinitionen", "Bestätigungs- und Übergaberegeln für Servicemitarbeiter", "Ausverkauftes Eigentum und Channel-Update-Anforderungen", "POS oder Anordnung von Integrations-Source-of-Truth-Entscheidungen"],
    faqs: [["Ist das KDS dasselbe wie das Manager-Dashboard?", "Nein. Die Küchenansicht konzentriert sich auf die Vorbereitungsarbeit, während das Management das breitere Service- und Ausnahmebild behält."], ["Können ausverkaufte Informationen die Bestellung aktualisieren?", "Ja, wobei die Menüsteuerung und die entsprechenden Bestellkanäle Teil des konfigurierten Setups sind."], ["Sind Modifikatoren und Notizen enthalten?", "Der Produktumfang umfasst Menüanpassungen und Bestellhinweise, die mit Vorbereitungsarbeiten reisen müssen."], ["Können verschiedene Bestellkanäle den gleichen Küchenfluss verwenden?", "Sie können zu einem Vorbereitungsbild beitragen, während sie ihren Kanal- und Tisch- oder Takeaway-Kontext beibehalten."]]
  },
  payments: {
    factsEyebrow: "Gästebestellung und Zahlungsumfang",
    factsTitle: "Acht Gast- und Bezahlvorgang-Momente beinhalten drei praktische Möglichkeiten, eine Rechnung zu teilen.",
    factsIntro: "Die genauen Zahlungsmethoden und Abwicklungsdaten hängen vom Anbieter und der im Einsatz verfügbaren Integration ab.",
    facts: [['08', "Reisemomente", "Karten- oder digitales Bezahlen, Bezahlen am Tisch, drei Split-Methoden, Tisch QR, mobiles Menü und Gäste-Bezahlvorgang bilden den aktuellen Umfang."], ['03', "Bill-Split-Methoden", "Gäste können zu gleichen Teilen teilen, bestellte Artikel zuweisen oder die Gesamtsumme durch Anteile teilen."], ['04', "Rollenperspektiven", "Gäste, Servicemitarbeiter, Management und Finanzen benötigen jeweils eine andere Sicht auf den gleichen Bezahlvorgang."], ['01', "verbundene Fahrt", "Menüzugriff, Bestellung, Servicekontext und Zahlung sollten nicht als separate Erlebnisse neu gestartet werden."]],
    workflowEyebrow: "Von Tabelle QR zum abgewickelten Status",
    workflowTitle: "Wie eine Gastaktion zu einem abgeschlossenen und sichtbaren Zahlungsereignis wird.",
    workflowIntro: "Der Tisch sollte den nächsten Schritt verstehen, während das Restaurant den Ordnungs- und Abwicklungskontext beibehält.",
    workflow: [["Öffnen Sie die Table Journey", "Ein Gast scannt die Tabelle QR oder gibt das konfigurierte mobile Menü und das Bestellerlebnis ein."], ["Erstellen oder Überprüfen der Bestellung", "Elemente, Notizen und der Tabellenkontext bleiben verbunden, wenn sich der Gast oder das Team auf den Bezahlvorgang vorbereitet."], ["Start Bezahlvorgang", "Der Gast überprüft die Rechnung und wählt den im Restaurant-Setup verfügbaren Zahlungsweg aus."], ["Wählen Sie eine Payer- oder Split-Methode", "Ein Zahler kann die Tabelle abrechnen, oder die Gruppe kann sich zu gleichen Teilen nach bestelltem Artikel oder nach Aktien aufteilen."], ["Status für das Restaurant bestätigen", "Abgeschlossener, teilweiser oder ungelöster Zahlungskontext kehrt an das Team zurück und meldet den Ablauf, sofern unterstützt."]],
    rolesTitle: "Die Gäste brauchen Klarheit; Das Restaurant braucht einen Siedlungskontext und eine saubere Übergabe.",
    rolesIntro: "Eine einfache Gästeoberfläche sollte weiterhin die vom Team benötigten Betriebs- und Berichtsinformationen bereitstellen.",
    roleViews: [["Gast", "Durchsuchen, bestellen, Service anfordern und bezahlen Sie die konfigurierte Tischreise, ohne die internen Systeme des Restaurants zu erlernen."], ["Servicepersonal", "Sehen Sie den Rechnungsstatus, den Zahlungsfortschritt und ob die Tabelle noch Service- oder Abwicklungsaufmerksamkeit erfordert."], ["Betriebsleiter", "Überwacht unvollständige Zahlungen, Ausnahmen und die Auswirkungen des Bezahlvorgang-Timings auf die Verfügbarkeit des Tisches."], ["Finanzierung und Berichterstattung", "Überprüfen Sie die Zahlungsaktivität, den Methodenmix und den Abstimmungskontext, die vom Anbieter oder der POS-Verbindung verfügbar sind."]],
    metricsTitle: "Messen Sie den Abschluss des Bezahlvorgangs und die Zeit, die erforderlich ist, um den Tisch freizugeben.",
    metricsIntro: "Metriken müssen Anbieter- und Restaurantereignisse verwenden, die tatsächlich im Einsatz erfasst werden.",
    metrics: [["Bill-Request-to-Payment-Zeit", "Messen Sie das Intervall zwischen dem Gast oder dem Team, der mit dem Bezahlvorgang beginnt, und dem bestätigten Abschluss."], ["Digitaler Bezahlvorgang-Abschluss", "Verfolgen Sie abgeschlossene Bezahlvorgang-Reisen mit begonnenen Reisen, bei denen die erforderlichen Ereignisse verfügbar sind."], ["Mischung nach Split-Methoden", "Verstehen Sie, wie oft Gäste in vergleichbaren Zeiträumen eine gleiche, artikelbasierte oder anteilsbasierte Aufteilung verwenden."], ["Zahlungs- und Ausnahmemix", "Überprüfen Sie Zahlungsmethoden, unvollständige Versuche und ungelöste Siedlungsstaaten, die von angeschlossenen Systemen verfügbar sind."]],
    implementationTitle: "Die Zahlungskonfiguration erfordert Anbieter-, Tabellen- und Abstimmungsentscheidungen.",
    implementationIntro: "Die Gästereise und der Back-Office-Status benötigen vor dem Start die gleichen Definitionen.",
    implementation: ["Unterstützter Zahlungsanbieter und verfügbare Statusfelder", "Tabelle und QR-Mapping für jede Gästereise", "Equal-, Item- und Share Split-Regeln", "Teilweise, abgeschlossene und fehlgeschlagene Abwicklung des Zahlungsstatus", "POS oder Finanzabgleich Verantwortlichkeiten", "Rollenberechtigungen zum Anzeigen und Lösen von Zahlungsausnahmen"],
    faqs: [["Welche Split Methoden werden unterstützt?", "Der aktuelle Produktumfang umfasst gleiche Aufteilungen, Zuordnung nach bestellten Artikeln und Division nach Aktien."], ["Muss jedes Restaurant eine Gästebestellung verwenden?", "Nein. Gästebestellung, Bezahlen am Tisch und Zahlungsmodule können entsprechend dem Restaurant-Setup ausgewählt werden."], ["Enthüllt jeder Zahlungsanbieter die gleichen Daten?", "Nein. Zahlungsmethoden, Statusdetails, Abrechnungsfelder und Aktualisierungsverhalten hängen vom Anbieter und der Integration ab."], ["Kann das Team sehen, wann ein Tisch bezahlt hat?", "Ja, wenn der Zahlungsstatus für den konfigurierten Arbeitsablauf verfügbar ist und die Berechtigungen es der Rolle ermöglichen, sie anzuzeigen."]]
  },
  insights: {
    factsEyebrow: "Analyse und Rentabilität",
    factsTitle: "Neun Management-Metriken verbinden Nachfrage, Service, Vertrieb und Rentabilität.",
    factsIntro: "Eine Metrik ist nur dann zuverlässig, wenn ihre Quelle, Definition, Zeitdauer und Standortzuordnung dokumentiert sind.",
    facts: [['09', "Managementmetriken", "Umsatz, Gäste, durchschnittlicher Scheck, Tabellenumsatz, Verkaufszeitpunkt, Bestseller, Zahlungsmix, Prognose und Rentabilität sind enthalten."], ['02', "Rentabilität", "Die Rentabilität kann nach Artikel oder Ort geprüft werden, an dem die erforderlichen Kosten- und Verkaufsdaten verfügbar sind."], ['04', "Entscheidungsrollen", "Eigentümer, Manager, Finanzen und operative Leads lesen die gleichen Metriken für verschiedene Entscheidungen."], ['03', "Vergleichsmaßstäbe", "Perioden-, Standort- und Auftragskanalvergleiche können die Bewegung hinter einer Überschrift erklären."]],
    workflowEyebrow: "Von Ereignisdaten zu einer Entscheidung",
    workflowTitle: "Wie Restaurantaktivität zu einer Metrik wird, die untersucht werden kann.",
    workflowIntro: "Die Berichtsschicht sollte den Pfad von einer Zusammenfassung zu den Quellereignissen und Definitionen beibehalten.",
    workflow: [["Sammeln Sie die Quellereignisse", "Bestellungen, Tabellen, Gäste, Reservierungen und Zahlungen tragen die für die Berichtsumgebung verfügbaren Daten bei."], ["Angewandte vereinbarte Definitionen", "Definieren Sie Zeiträume, Standorte, Kanäle, Einnahmenbehandlung, Deckungen und Kosteneinträge, bevor Sie die Ergebnisse vergleichen."], ["Überprüfen Sie das Bedien-Dashboard", "Sehen Sie sich aktuelle Ergebnisse und Änderungen in den Managementmetriken an, die für die konfigurierten Module relevant sind."], ["Untersuchen Sie die Bewegung", "Filtern Sie nach Zeitraum, Ort, Kanal, Kategorie oder Element, um den Betriebskontext hinter der Änderung zu finden."], ["Handeln und wieder vergleichen", "Weisen Sie die nächste operative Frage oder Aktion zu und vergleichen Sie dann die gleiche metrische Definition in einem späteren Zeitraum."]],
    rolesTitle: "Die gleiche Zahl unterstützt verschiedene Fragen für Eigentum, Management und Finanzen.",
    rolesIntro: "Rollenbasiertes Reporting hält die Quelle konsistent und ändert gleichzeitig die vom Leser erwartete Tiefe und Aktion.",
    roleViews: [["Eigentümer", "Vergleicht Umsatz, Gästenachfrage, Standortleistung und Rentabilität, um zu entscheiden, wo Aufmerksamkeit oder Investitionen erforderlich sind."], ["Betriebsleiter", "Verbindet Tabellen-, Service- und Verkaufsmetriken mit den operativen Ereignissen, die den Wandel geprägt haben."], ["Finanzen", "Rezensiert die Behandlung von Einnahmen, den Zahlungsmix, die Kategorien, die Kosteneinträge und die Berichtsfelder, die außerhalb von Operationen verwendet werden."], ["Operative Leitung", "Verwendet Timing-, Bestseller- und Kanaldaten, um Service-, Menü- oder Personalentscheidungen anzupassen."]],
    metricsTitle: "Die neun Metriken bilden vier praktische Managementgruppen.",
    metricsIntro: "Verfügbarkeit und Genauigkeit hängen von den Modulen, Integrationen und Kostendaten in der Restaurantumgebung ab.",
    metrics: [["Nachfrage und Einnahmen", "Umsatz, Gästezahl und Durchschnittskontrolle zeigen den Umfang und den Wert der Nachfrage während des ausgewählten Zeitraums."], ["Boden und Service", "Tabelle Umsatz und Umsatz nach Zeit verbinden das kommerzielle Ergebnis, wie das Restaurant betrieben."], ["Produkt und Zahlung", "Bestseller und Zahlungsmix zeigen, was Gäste gekauft haben und wie sich der Tisch beruhigt hat."], ["Prognose und Gewinn", "Prognosen plus Rentabilität nach Artikel oder Standort unterstützen die Vorausplanung, wenn vollständige Inputs verfügbar sind."]],
    implementationTitle: "Ein Berichtsprojekt beginnt mit Definitionen und Datenbesitz.",
    implementationIntro: "Dashboards sollten keine Meinungsverschiedenheiten über Einnahmen, Gäste, Kosten oder Vergleichszeiträume verbergen.",
    implementation: ["Bestell-, Reservierungs-, Tabellen- und Zahlungsdatenquellen", "Standort-, Kanal-, Kategorie- und Artikelzuordnungen", "Umsatz-, Gast-, Durchschnitts- und Umsatzdefinitionen", "Für die Rentabilität erforderliche Lebensmittelkosten oder sonstige Kostenfaktoren", "Berichtsperiode und Vergleichsregeln", "Rollenberechtigungen und Datenqualitätsprüfung"],
    faqs: [["Kann PayMyDine die Rentabilität ohne Kostendaten berechnen?", "Ohne die erforderlichen Verkaufs-, Posten- und Kostenfaktoren können keine zuverlässigen Rentabilitätszahlen ermittelt werden."], ["Ist eine Prognose ein garantiertes Ergebnis?", "Nein. Prognosen sind entscheidungsunterstützende Schätzungen, die mit den tatsächlichen Ergebnissen verglichen und vom Team überprüft werden sollten."], ["Können Standorte verglichen werden?", "Ja, wenn Standortzuordnungen und metrische Definitionen für die ausgewählten Standorte konsistent sind."], ["Kann KI eine Metrik erklären?", "KI kann Zusammenfassungen und Untersuchungen rund um verfügbare Daten unterstützen, während die Quellansichten und die menschliche Entscheidung sichtbar bleiben."]]
  },
  team: {
    factsEyebrow: "Rollenbasierter Teamumfang",
    factsTitle: "Sechs Arbeitsbereiche und fünf Teamsteuerungen halten den Zugriff auf die Verantwortung ausgerichtet.",
    factsIntro: "Rollenbasiertes Design verändert, was jede Person sieht; es schafft keine sechs getrennten Restaurantsysteme.",
    facts: [['06', "Rolle Workspaces", "Besitzer, Manager, Servicemitarbeiter, Küche, Reservierungen und Finanzen haben unterschiedliche Produktgeschichten in PayMyDine."], ['05', "Teamkontrollen", "Rollenarbeitsbereiche, Berechtigungen, Schichtmanagement, Performance Insight und Mitarbeiteraktivität bilden den aktuellen Umfang."], ['02', "Sichtbarkeit", "Fokussierte Rollenansichten unterstützen die tägliche Arbeit, während das Management einen breiteren operativen Kontext behält."], ['01', "geteilter Betrieb", "Tisch, Bestellung, Reservierung, Küche und Zahlungskontext bleiben Teil des gleichen Restaurants."]],
    workflowEyebrow: "Vom Rollendesign bis zum täglichen Gebrauch",
    workflowTitle: "Wie Berechtigungen und fokussierte Arbeitsbereiche zu einem Betriebsmodell werden.",
    workflowIntro: "Das nützliche Ergebnis ist eine klare Verantwortung, nicht nur mehr Benutzerkonten.",
    workflow: [["Karte der tatsächlichen Verantwortlichkeiten", "Listen Sie die Entscheidungen und Aktionen jeder Restaurantrolle auf, bevor Sie Bildschirme oder Berechtigungen zuweisen."], ["Zugriff bewusst einstellen", "Geben Sie jeder Rolle die Module, Standorte und Informationen, die für ihre Arbeit benötigt werden, ohne unnötige geschäftliche Sichtbarkeit."], ["Konfigurieren fokussierter Ansichten", "Ordnen Sie den Tabellen-, Auftrags-, Vorbereitungs-, Reservierungs- oder Berichtskontext rund um die nächste Aktion der Rolle an."], ["Verwenden Sie den Workspace während des Service", "Bewahren Sie Aktionen und Statusänderungen bei der Person oder Rolle auf, die für die Übergabe verantwortlich ist."], ["Überprüfung und Anpassung des Zugangs", "Aktualisierungsberechtigungen, Einführung und Arbeitsbereich, wenn sich die Teamstruktur oder die Verantwortlichkeiten im Restaurant ändern."]],
    rolesTitle: "Sechs Arbeitsbereiche beantworten sechs verschiedene Restaurantfragen.",
    rolesIntro: "Die folgenden Beispiele zeigen, warum ein einziges universelles Dashboard sowohl für operative als auch für geschäftliche Rollen Lärm erzeugen würde.",
    roleViews: [["Eigentümer und Finanzen", "Benötigen Sie Einnahmen, Leistung, Zahlung und Berichtskontext, ohne jedes Tisch- oder Küchenticket zu bedienen."], ["Betriebsleiter", "Benötigt die Live-Etage, offene Arbeit, Ausnahmen und Teamaktivitäten, um die Schicht zu koordinieren."], ["Servicepersonal und Reservierungen", "Benötigen Sie Gäste, Tische, Buchungen, Bestellungen und Serviceaktionen ohne unzusammenhängende Finanzverwaltung."], ["Küche", "Benötigt Vorbereitungsdetails, Timing und fertige Übergabe ohne den Rest der Managementoberfläche."]],
    metricsTitle: "Bewerten Sie, ob Rollendesign Mehrdeutigkeit und Übergabeverzögerung reduziert.",
    metricsIntro: "Diese Metriken erfordern vereinbarte Ereignisse oder Team-Review-Methoden; Sie sind keine automatischen Leistungsansprüche.",
    metrics: [["Zugriffsgenauigkeit", "Überprüfen Sie, ob Personen die benötigten Informationen erreichen können, ohne Genehmigungen außerhalb ihrer Verantwortung zu erhalten."], ["Übergabezeit", "Messen Sie die Zeit zwischen einer Rolle, die einen Status abschließt, und der nächsten verantwortlichen Rolle, die die Arbeit anerkennt."], ["Annahme von Arbeitsbereichen", "Verfolgen Sie die aktive Nutzung der konfigurierten Rollenansichten, wenn Nutzungsereignisse verfügbar und angemessen sind."], ["Ausnahmebeschlüsse", "Messen Sie, wie lange zugewiesene betriebliche Ausnahmen während vergleichbarer Dienstzeiten ungelöst bleiben."]],
    implementationTitle: "Behandeln Sie Berechtigungen als Betriebsdesign, nicht als einmalige technische Aufgabe.",
    implementationIntro: "Das Team sollte wissen, wem Zugangsentscheidungen gehören und wie Änderungen nach dem Go-Live überprüft werden.",
    implementation: ["Rolle und Verantwortungsmatrix", "Modul-, Standort- und Datenberechtigungen", "Workspace-Inhalte für jede Rolle", "Personal-Einführung und rollenspezifisches Training", "Access-Review und Offboarding-Prozess", "Eigentum an Berechtigungen und Ablauf-Änderungen"],
    faqs: [["Sieht jede Rolle unterschiedliche Daten?", "Rollen können verschiedene ebenen und aktionen sehen, während sie aus dem gleichen zugrunde liegenden restaurantkontext arbeiten."], ["Kann eine Person mehr als eine Rolle spielen?", "Dieser kann entsprechend der Verantwortung konfiguriert werden, sofern das Berechtigungsmodell absichtlich überprüft wird."], ["Entfernen Rollenarbeitsbereiche die Sichtbarkeit des Managements?", "Nein. Fokussierte Teamansichten können mit breiteren Manager-, Eigentümer- und Finanzansichten koexistieren."], ["Können sich Berechtigungen nach dem Start ändern?", "Ja. Der Zugriffs- und Arbeitsbereich sollte überprüft werden, wenn sich Personen, Standorte und Verantwortlichkeiten ändern."]]
  },
  'guest-ordering': {
    factsEyebrow: "Gast CRM und Wachstumsumfang",
    factsTitle: "Sechs Wachstumsmöglichkeiten verbinden Gästeidentität, Engagement und Wiederholungsbesuche.",
    factsIntro: "Die Wachstumsergebnisse hängen von der Zustimmung, der Profilqualität, der Ausführung des Restaurants und den verfügbaren Messdaten ab.",
    facts: [['06', "Wachstumsfähigkeit", "Profile, Loyalität, Angebote, Kampagnen, Feedback und Bindung bilden den aktuellen Gästewachstumsumfang."], ['04', "Rollenperspektiven", "Gäste, servicemitarbeiter, management und marketing oder eigentum nutzen verschiedene teile der beziehung."], ['05', "Lebenszyklusschritte", "Identifizieren, verstehen, segmentieren, engagieren und messen Sie eine praktische Gästewachstumsschleife."], ['01', "Gastbeziehung", "Der besuchs-, bestellungs- und feedback-kontext kann zu einem profil beitragen, bei dem identität und zustimmung dies zulassen."]],
    workflowEyebrow: "Vom Besuchskontext zu einer Wiederholungsbesuchsmaßnahme",
    workflowTitle: "Wie Restaurant-Interaktionen zu nützlichen Gästebeziehungsdaten werden.",
    workflowIntro: "Der Ablauf sollte die Relevanz verbessern, ohne jede Gastinteraktion in einen wahllosen Marketingrekord zu verwandeln.",
    workflow: [["Identifizieren Sie den Gast oder Besuch", "Erfassen Sie den verfügbaren Identitäts-, Besuchs- oder Tabellenkontext unter Verwendung der konfigurierten Guest Journey- und Einwilligungsregeln."], ["Anfügen nützlicher Interaktionsdaten", "Verbinden Sie Bestellungen, Angebote, Loyalitätsaktivitäten oder Feedback mit der Beziehung, in der die Daten verfügbar und angemessen sind."], ["Praktische Segmente erstellen", "Gruppieren Sie Gäste nach relevanten Verhaltens- oder Beziehungskriterien, anstatt allen die gleiche Botschaft zu senden."], ["Führen Sie ein Angebot oder eine Kampagne aus", "Verwenden Sie die konfigurierten Loyalitäts-, Angebots- oder Kampagnentools um eine definierte Zielgruppe und ein definiertes Ziel herum."], ["Messen Sie das Rücksignal", "Überprüfen Sie Rücknahme, Feedback, wiederholte Besuche oder andere vereinbarte Ergebnisse gegen das ursprüngliche Publikum und den ursprünglichen Zeitraum."]],
    rolesTitle: "Das Gästewachstum hängt vom Restauranterlebnis sowie vom Kampagnenbildschirm ab.",
    rolesIntro: "Profile und Angebote sind nützlich, wenn der Kontext der Servicemitarbeiter, die Managemententscheidungen und die Zustimmung der Gäste übereinstimmen.",
    roleViews: [["Gast", "Erhält eine relevante Loyalität, ein Angebot, Feedback oder eine Bestellerfahrung über den konfigurierten Touchpoint."], ["Servicepersonal", "Verwendet den geeigneten Gastkontext, um den Service zu unterstützen, ohne unnötiges Profil oder Kampagnenverwaltung offenzulegen."], ["Betriebsleiter", "Rezensiert Feedback-Themen, Service-Probleme und Kampagneneffekte neben dem Restaurantbetrieb."], ["Eigentümer oder Marketing", "Definiert Segmente, Angebote, Kampagnen und Aufbewahrungsmaßnahmen basierend auf verfügbaren Gäste- und Besuchsdaten."]],
    metricsTitle: "Messen Sie, ob die Beziehung identifizierbar, relevant und wiederholbar wird.",
    metricsIntro: "Fordern Sie keinen Retentions- oder Revenue-Lift an, bis das Publikum, die Baseline, der Zeitraum und die Attributionsmethode dokumentiert sind.",
    metrics: [["Identifizierter Gästepreis", "Messen Sie den Anteil der berechtigten Besuche, die mit einer verwendbaren Gastidentität im konfigurierten Zustimmungsmodell verbunden sind."], ["Wiederhol-Besuchsrate", "Vergleichen Sie Gäste, die innerhalb eines vereinbarten Zeitfensters zurückkehren, mit einer einheitlichen Identitäts- und Besuchsdefinition."], ["Angebotsrücknahme", "Verfolgen Sie Rücknahmen gegen das berechtigte Publikum und den Kampagnenzeitraum anstelle des gesamten Restaurantverkehrs."], ["Rückmeldung", "Messen Sie abgeschlossene Feedback-Anfragen und überprüfen Sie die Themen mit den Besuchen oder dem Publikum, das eingeladen wurde, zu antworten."]],
    implementationTitle: "Gastwachstum erfordert klare Zustimmung, Identität und Attributionsregeln.",
    implementationIntro: "Das Beziehungsmodell sollte für den Gast verständlich und vom Restaurant überprüfbar sein.",
    implementation: ["Gasteinwilligung und Datenverantwortungsmodell", "Profilfelder und Identitätsabgleichsregeln", "Datenquellen für Besuch, Bestellung, Loyalität und Feedback", "Zielgruppen- und Segmentdefinitionen", "Regeln für die Förderfähigkeit von Angeboten oder Kampagnen und Rücknahme", "Wiederhol-Besuch und Kampagnen-Attributions-Messmethode"],
    faqs: [["Ist dies die gleiche wie Tabelle QR Zahlung?", "Nein. Das Zahlungsprodukt deckt die Transaktionsreise ab; dieser Produktbereich konzentriert sich auf Profile, Loyalität, Kampagnen, Feedback und Bindung."], ["Muss jeder Gast ein Profil erstellen?", "Nein. Die Erstellung und Identifizierung des Profils hängt von der konfigurierten Reise, der Gästeauswahl und den geltenden Zustimmungsregeln ab."], ["Kann Order History die Segmentierung unterstützen?", "Ja, wenn Identität, Bestelldaten, Berechtigungen und die ausgewählten Gästewachstumsmodule diesen Kontext zur Verfügung stellen."], ["Garantiert eine Kampagne Wiederholungsbesuche?", "Nein. Die Kampagnen- und Retentionsleistung muss an einer definierten Zielgruppe, Baseline und Vergleichsperiode gemessen werden."]]
  }
};
for (const [slug, details] of Object.entries(solutionDetailExpansions)) {
  if (!solutionPages[slug]) {
    throw new Error(`Missing solution page for detailed product copy: ${slug}`);
  }
  solutionPages[slug].details = details;
}

// === PMD PRODUCT PAGE DEPTH V2 END ===

export const resources = [{
  slug: 'getting-started',
  title: "Erste Schritte mit PayMyDine",
  category: "Einführung",
  intro: "Ein 6-stufiger Leitfaden von Operating Discovery und Produktumfang über Rollenkonfiguration, Integrationsprüfung, Validierung und gemessenes Go-Live.",
  image: '/site-assets/extra/team-planning.webp',
  articleImage: '/site-assets/extra/kitchen-orders.webp',
  sections: [["Beginnen Sie mit dem Restaurant, keine Feature-Liste", "Bilden Sie das aktuelle Betriebsmodell, die Teamrollen, die Guest Journey und die Technologieumgebung ab, bevor Sie entscheiden, welche PayMyDine-Module zum ersten Setup gehören."], ["Konfigurieren um Verantwortlichkeiten", "Definieren Sie die Arbeitsbereiche, Berechtigungen, Bodenstruktur und Ablaufs, die jedes Team benötigt, damit das System die Funktionsweise des Restaurants widerspiegelt."], ["Planen Sie den Start in klaren Phasen", "Überprüfen Sie Integrationen, bereiten Sie das Team vor, validieren Sie den Betriebsablauf und starten Sie mit einer Konfiguration, die bei Bedarf erweitert werden kann."]]
}, {
  slug: 'role-based-workspaces',
  title: "Gestaltung rollenbasierter Restaurant-Arbeitsbereiche",
  category: 'Teams',
  intro: "Wie 6 Rollen-Arbeitsbereiche das Lärm- und Berechtigungsrisiko reduzieren und gleichzeitig den Restaurantkontext in Verbindung halten.",
  image: '/site-assets/extra/qr-ordering-scene.webp',
  articleImage: '/site-assets/extra/outdoor-qr-toast.webp',
  sections: [["Passen Sie den Blick auf die Verantwortung", "Eigentum braucht Leistungskontext. Servicemitarbeiter benötigen Tische, Bestellungen und Gästeanfragen. Küche braucht Vorbereitungsarbeit. Rollenbasiertes Design hält jeden Arbeitsbereich fokussiert."], ["Halten Sie die breitere Operation verbunden", "Separate Arbeitsbereiche sollten keine separaten Versionen des Restaurants erstellen. Der nützliche Kontext muss sich noch zwischen den für den nächsten Schritt verantwortlichen Personen bewegen."], ["Berechtigungen bewusst verwenden", "Access sollte der Verantwortung folgen, damit jede Rolle sicher ohne unnötige Admin- oder Geschäftsinformationen arbeiten kann."]]
}, {
  slug: 'ai-in-restaurant-operations',
  title: "Wo KI den Restaurantbetrieb unterstützen kann",
  category: "KI & Einblicke",
  intro: "Wie man 9 Restaurant-Metriken fragt, zusammenfasst, vergleicht, alarmiert, prognostiziert und untersucht, ohne die Quelldaten zu verbergen.",
  image: '/site-assets/extra/friends-dinner.webp',
  articleImage: '/site-assets/extra/restaurant-entrance.webp',
  sections: [["Beginnen Sie mit einer nützlichen Frage", "KI wird wertvoller, wenn es hilft, eine echte Betriebsfrage zu beantworten, wie zum Beispiel, was sich geändert hat, was anders funktioniert oder was Aufmerksamkeit verdient."], ["Halten Sie die Quelldaten sichtbar", "Die Unterstützung von KI sollte neben den zugrunde liegenden Restaurantinformationen stehen, damit Eigentümer und Manager den Kontext hinter einer Zusammenfassung oder Beobachtung verstehen können."], ["Entscheidungen unterstützen, anstatt sie zu ersetzen", "Die nützliche Rolle von KI besteht darin, Informationen leichter zu erkunden, zusammenzufassen und zu vergleichen, während das Restaurantteam die Kontrolle über operative Entscheidungen behält."]]
}, {
  slug: 'guest-ordering-journey',
  title: "Gestaltung einer Gästebestellungsreise, die Teil des Restaurants bleibt",
  category: "Gästeerfahrung",
  intro: "Wie der 4-Aktions-Gästepfad - Scannen, Durchsuchen, Bestellen und Bezahlen - klare Arbeit für Servicemitarbeiter, Küche und Zahlungsströme schafft.",
  image: '/site-assets/extra/payment-cafe-table.webp',
  articleImage: '/site-assets/extra/payment-dinner.webp',
  sections: [["Machen Sie die erste Aktion offensichtlich", "Die Tabelle QR sollte zu einem klaren mobilen Erlebnis mit dem Restaurantkontext führen und die nächste Aktion leicht verständlich machen."], ["Halten Sie den Service dicht", "Die digitale Bestellung sollte weiterhin Notizen, Kellneranrufe und das echte Serviceteam unterstützen, anstatt die Mahlzeit in eine Selbstbedienungsschnittstelle zu verwandeln."], ["Führen Sie die Reise durch den Bezahlvorgang", "Bestellung und Zahlung werden nützlicher, wenn der Gast das Erlebnis am Ende des Essens nicht neu starten muss."]]
}, {
  slug: 'reservations-and-floor-planning',
  title: "Reservierungen und Bodenplanung zusammenbringen",
  category: "Vorbehalte",
  intro: "Wie 7 Reservierungs- und Sitzmöglichkeiten die Ankunftslast, die Partygröße und die Live-Fußbodenkapazität in eine praktische Sitzentscheidung verwandeln.",
  image: '/site-assets/extra/tablet-dashboard.webp',
  articleImage: '/site-assets/extra/payment-approved.webp',
  sections: [["Sehen Sie die Form des Tages", "Kommende Reservierungen, Partygrößen und Ankunftszeiten helfen dem Team, die Nachfrage zu verstehen, bevor die Gäste die Tür erreichen."], ["Halten Sie den Boden in der gleichen Geschichte", "Verfügbarkeit, belegte Tische und Reservierungstabellen fügen den Kontext hinzu, der erforderlich ist, um eine Buchungsliste in einen Sitzplan umzuwandeln."], ["Wählen Sie die Ansicht, die zum Moment passt", "Kalender, Zeitleiste und Listenansichten können die Planung unterstützen, während die Live-Etage bei den Entscheidungen hilft, die jetzt getroffen werden."]]
}, {
  slug: 'pos-integration-planning',
  title: "Planung einer nützlichen POS-Integration",
  category: "Integrationen",
  intro: "So definieren Sie die Datenquelle, die Felder, die Richtung, das Update-Timing und die verantwortliche Rolle, bevor Sie eine POS-Integration erstellen.",
  image: '/site-assets/extra/power-up-pos.webp',
  articleImage: '/site-assets/extra/dashboard-menu-mockup.webp',
  sections: [["Beginnen Sie mit der bestehenden Umgebung", "Verstehen Sie, was das Restaurant bereits verwendet und welche Ablaufs es verbessern möchte, bevor Sie entscheiden, was verbunden werden soll."], ["Arbeiten aus verfügbaren Fähigkeiten", "Der Integrationsumfang hängt von APIs, Berechtigungen und Datenzugriff ab, die von der aktuellen POS-Umgebung bereitgestellt werden."], ["Nützliche Verbindungen priorisieren", "Das Ziel ist nicht, alles standardmäßig zu ersetzen. Es ist das Hinzufügen der PayMyDine-Fähigkeiten, die die Betriebs- oder Gästereise stärken."]]
}];
export const integrations = ["Sumpf", 'ready2order', "Lichtgeschwindigkeit", "Quadrat"];
export const integrationFeaturePills = ["POS-Daten", "Rechnungslegungskontext", "Lieferkanäle", "Zahlungsdienstleister", "Zentrale Meldung", "Bestandsaufnahme"];
