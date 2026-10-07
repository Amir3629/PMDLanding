export const teamPages = {
  owner: {
    label: "Eigentümer",
    eyebrow: "Für Eigentümer - 6 Geschäftssignale",
    title: "Überprüfen Sie das Restaurant, ohne jeden Teamarbeitsbereich zu öffnen.",
    intro: "Verwenden Sie eine Besitzeransicht, um Einnahmen, Gästevolumen, Tischaktivität, Reservierungen, Küchenstatus und meistverkaufte Artikel zu überprüfen und dann zu fragen, was sich geändert hat und welche Metrik untersucht werden muss.",
    heroImage: '/site-assets/owner/1.webp',
    accent: 'green',
    highlights: [["Einnahmen und Nachfrage", "Vergleichen Sie Umsatz, Gästezahl und durchschnittliche Überprüfung nach Zeitraum, Servicefenster oder Ort, an dem die Daten verfügbar sind."], ["Boden und Service", "Überprüfen Sie besetzte Tabellen, Umsatz, offene Aufträge und aktiven Service, ohne jedes Team um ein separates Update zu bitten."], ["Küche und Menü", "Siehe Vorbereitungsstatus, Bestseller, ausverkaufte Muster und Artikelleistung im breiteren Geschäftsbild."], ["KI-assistierte Fragen", "Fragen Sie, was sich geändert hat, welche Kategorie oder welcher Standort sich bewegt hat und welche Quellansicht als nächstes überprüft werden soll."]],
    story: [{
      title: "Ersetzen Sie Screen-Hopping durch eine Sechs-Signal-Eigentümeransicht.",
      body: "Der Eigner-Arbeitsbereich bringt Geschäfts- und Betriebskontext zusammen, so dass eine hochrangige Zahl auf die Tabellen, Kanäle, Elemente oder Perioden dahinter zurückgeführt werden kann.",
      image: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp'
    }, {
      title: "Verwandeln Sie ein Ergebnis in eine Folgefrage.",
      body: "Die KI-Unterstützung kann verfügbare Zeiträume oder Standorte vergleichen und ungewöhnliche Bewegungen zusammenfassen, während der Eigentümer die Quelldaten überprüft und die Aktion auswählt.",
      image: '/site-assets/home-ai-story-20261005/pay-my-dine-cafe-dashboard.webp'
    }],
    bullets: ["Einnahmen und Verkäufe", "Gästevolumen", "Tabellenaktivität", "Vorbehalte", "Küchenstatus", "Bestverkaufte Artikel"]
  },
  manager: {
    label: "Betriebsleiter",
    eyebrow: "Für Manager - 5 Live Warteschlangen",
    title: "Koordinieren Sie den Wechsel von Tischen, Bestellungen, Küche, Reservierungen und Teamaktivitäten.",
    intro: "Verwenden Sie eine Live-Management-Ansicht, um die fünf Warteschlangen zu sehen, die den Service formen, Ausnahmen zu identifizieren und die nächste Aktion an die verantwortliche Rolle weiterzuleiten.",
    heroImage: '/site-assets/extra/restaurant-team-planning.webp',
    accent: 'blue',
    highlights: [["Bodenzustand", "Siehe besetzte, verfügbare, Warte- und Zahlungsstufentabellen auf der Live-Floore-Karte."], ["Offene Aufträge", "Identifizieren Sie verzögerte, geänderte oder unvollständige Bestellungen und wechseln Sie von der Ausnahme zu der Tabelle und dem dahinter liegenden Kanal."], ["Fortschritte in der Küche", "Bewertung erhalten, Vorbereitung und bereiten Tickets ohne Arbeit in der Küche Bildschirm."], ["Ankunft und Teamaktivität", "Bewahren Sie anstehende Buchungen, Walk-Ins, zugewiesene Rollen und aktive Handoffs im gleichen Schichtbild auf."]],
    story: [{
      title: "Verwalten Sie Ausnahmen, anstatt Statusaktualisierungen zu sammeln.",
      body: "Ein Manager kann sich auf das konzentrieren, was wartet, verzögert oder blockiert wird, während jede Rolle in ihrer eigenen Warteschlange weiterarbeitet.",
      image: '/site-assets/staff/6.webp'
    }, {
      title: "Verwenden Sie den gleichen Betriebskontext für die Nachschichtüberprüfung.",
      body: "Tischbewegung, Bestellzeitpunkt, Küchenstatus und Teamaktivität können später Umsatz, Umsatz und Serviceergebnisse erklären.",
      image: '/site-assets/extra/team-tech-meeting.webp'
    }],
    bullets: ["Tabellenstatus", "Offene Aufträge", "Fortschritte in der Küche", "Reservierungen und Walk-Ins", "Teamaktivität", "Umschaltausnahmen"]
  },
  'service-staff': {
    label: "Servicepersonal",
    eyebrow: "Für Servicemitarbeiter - 6 Servicesignale",
    title: "Bewahren Sie zugewiesene Tabellen, Bestellhinweise, Gästeanfragen und den Checkout-Status in einer Serviceansicht auf.",
    intro: "Service-Mitarbeiterteams können sich auf sechs Servicesignale ohne unabhängige Eigentümer- oder Administratorkontrollen konzentrieren, während jede Aktion an der richtigen Tabelle und dem richtigen Ticket angebracht bleibt.",
    heroImage: '/site-assets/staff/1.webp',
    accent: 'orange',
    highlights: [["Zugeordnete Tabellen", "Sehen Sie sich die Tabellen und die Servicephase des aktuellen Teammitglieds oder Abschnitts an."], ["Bestellungen und Notizen", "Bestellen Sie bestellte Artikel, Modifikatoren, Allergien und Servicehinweise, die dem Tabellenkontext beigefügt sind."], ["Gästewünsche", "Empfangen Sie Kellneranrufe und digitale Serviceanfragen in derselben Warteschlange, die für Tischarbeiten verwendet wird."], ["Checkout Bewusstsein", "Sehen Sie, wenn eine Tabelle die Rechnung anzeigt, sie aufteilt oder die Zahlung abschließt, damit die nächste Serviceaktion klar ist."]],
    story: [{
      title: "Der Workspace folgt der realen Servicesequenz.",
      body: "Sitzen, bestellen, anfordern, bedienen und abrechnen sind als Tabellenaktionen sichtbar, nicht als nicht zusammenhängende Nachrichten über verschiedene Tools hinweg.",
      image: '/site-assets/staff/4.webp'
    }, {
      title: "Digitale Gastaktionen bleiben verantwortliche Restaurantarbeit.",
      body: "Eine Bestellung oder Serviceanforderung von QR erreicht das zuständige Servicepersonal oder die Küchenwarteschlange mit dem beigefügten Tabellen- und Bestellkontext.",
      image: '/site-assets/comments/5.webp'
    }],
    bullets: ["Zugeordnete Tabellen", "Aufträge und Modifikatoren", "Gästewünsche", "Kellnerrufe", "Auftragsstatus", "Check-out-Status"]
  },
  kitchen: {
    label: "Küche und KDS",
    eyebrow: "Für die Küche - 4 Ticket Staaten",
    title: "Bewegen Sie jedes Ticket von erhalten zu Vorbereitung, bereit und übergeben.",
    intro: "Der Küchenarbeitsbereich hält Einzelteildetails, Modifikatoren, Timing und vier sichtbare Ticketzustände in einer Vorbereitungswarteschlange, ohne unzusammenhängende Tabellen- oder Geschäftskontrollen.",
    heroImage: '/site-assets/kitchen/1.webp',
    accent: 'orange',
    highlights: [["Fokussierte Warteschlange", "Sortieren Sie eingehende Arbeiten nach Zeit, Station, Kurs oder Priorität mit dem Kontext, der in der konfigurierten KDS verfügbar ist."], ["Element und Modifikator Details", "Halten Sie Vorbereitungsnotizen, Mengen, Modifikatoren und ausverkaufte Informationen auf dem Ticket sichtbar."], ["Zeitplan und Fortschritte", "Sehen Sie, wie lange die Arbeit gewartet hat und welche Tickets erhalten, vorbereitet oder fertig sind."], ["Ready Handoff", "Veröffentlichen Sie den Bereitschaftsstatus für das Servicepersonal und das Management, damit die Serviceübergabe ein klares Abschlusssignal hat."]],
    story: [{
      title: "Ein nützliches KDS macht Priorität und Fertigstellung offensichtlich.",
      body: "Die Küche sollte lesen können, was sie zubereiten soll, wie sie sich unterscheidet, wie lange sie gewartet hat und welcher Status auf einen Blick als nächstes kommt.",
      image: '/site-assets/kitchen/2.webp'
    }, {
      title: "Ready Status gehört auch zur nächsten Rolle.",
      body: "Wenn die Vorbereitung abgeschlossen ist, erhalten Servicemitarbeiter und Manager den Status, der für den Abschluss der Tischreise erforderlich ist.",
      image: '/site-assets/extra/team-planning.webp'
    }],
    bullets: ["Erhaltene Tickets", "Tickets vorbereiten", "Fertige Tickets", "Element und Modifikator Details", "Fahrkartenplanung", "Übergabe des Servicepersonals"]
  },
  reservations: {
    label: "Vorbehalte",
    eyebrow: "Für Reservierungen - 6 Planungssignale",
    title: "Match ankünfte und walk-ins, um tischkapazität zu leben.",
    intro: "Verwenden Sie bevorstehende Ankünfte, Partygröße, Tischverfügbarkeit, Turn-Timing, Walk-Ins und mehrstöckigen Kontext, um die nächste Sitzentscheidung mit der realen Etage im Blick zu treffen.",
    heroImage: '/site-assets/extra/host-stand.webp',
    accent: 'blue',
    highlights: [["Kommende Ankünfte", "Sehen Sie Ankunftszeit, Partygröße und Buchungsstatus, bevor der Gast die Tür erreicht."], ["Kalender und Zeitleiste", "Verwenden Sie Planungsansichten für den kommenden Tag und eine Live-Sequenz für den Servicezeitraum."], ["Verfügbarkeit und Turn Timing", "Kombinieren Sie kostenlose, belegte und reservierungsbereite Tische mit dem erwarteten Umsatz."], ["Walk-Ins und Bodenzuweisung", "Fügen Sie ungeplante Ankünfte hinzu, ohne die Buchungslast oder das Bild mit mehrstöckiger Kapazität zu verlieren."]],
    story: [{
      title: "Verwandeln Sie die Buchungsliste in einen Live-Sitzplan.",
      body: "Eine Reservierung wird umsetzbar, wenn Ankunftszeitpunkt und Partygröße neben den Tabellen gelesen werden, die sie unterstützen können.",
      image: '/site-assets/extra/shared-table-feast.webp'
    }, {
      title: "Planen Sie voraus und arbeiten Sie dann in Echtzeit.",
      body: "Kalender- und Zeitleistenansichten unterstützen die Vorbereitung, während Live-Verfügbarkeit, Walk-Ins und Tabellenzuweisungen Entscheidungen an der Tür unterstützen.",
      image: '/site-assets/custom/reservations-floor-story.webp'
    }],
    bullets: ["Kommende Ankünfte", "Größe der Partei", "Kalender und Zeitleiste", "Verfügbarkeit von Tabellen", 'Walk-ins', "Sitzmöbel für mehrstöckige Fahrzeuge"]
  },
  finance: {
    label: "Finanzen & Reporting",
    eyebrow: "Für Finanzen - 6 Reporting Views",
    title: "Trace Einnahmen und Zahlungsergebnisse zurück auf die Restaurant-Aktivität hinter ihnen.",
    intro: "Verwenden Sie Umsatz, Kategorieverkäufe, Zahlungsaktivität, durchschnittliche Überprüfung, Bestseller und Periodenvergleiche, um eine sauberere Berichterstattung mit dem noch verfügbaren Betriebskontext zu erstellen.",
    heroImage: '/site-assets/custom/page-heroes/ai-hero-chatgpt-20260813.webp',
    accent: 'green',
    highlights: [["Einnahmen nach Periode oder Ort", "Vergleichen Sie den Berichtszeitraum oder den Standort mit den verfügbaren Verkaufsdaten und halten Sie den Quellumfang explizit."], ["Zahlungstätigkeit", "Überprüfen Sie die Zahlungsmethode, den Status und den Abwicklungskontext neben der Tabelle oder der Auftragsreise, die sie erstellt hat."], ["Kategorie und Artikelleistung", "Sehen Sie, welche Menükategorien oder Elemente Einnahmen beitragen und wo Margin-Fragen einer eingehenderen Überprüfung bedürfen."], ["KI-assistierter Vergleich", "Fassen Sie Perioden- oder Standortänderungen zusammen und identifizieren Sie den Quellenbericht, den die Finanzierung als nächstes überprüfen sollte."]],
    story: [{
      title: "Eine Geschäftsnummer ist leichter zu vertrauen, wenn ihr Umfang klar ist.",
      body: "Die Berichterstattung sollte den Standort, den Zeitraum, die Kanäle, den Zahlungsmix und die im Ergebnis enthaltene operative Tätigkeit angeben.",
      image: '/site-assets/extra/tablet-dashboard.webp'
    }, {
      title: "Verwenden Sie KI, um die nächste Finanzfrage zu formulieren, nicht um die Antwort zu genehmigen.",
      body: "Die Unterstützung von KI kann verfügbare Daten vergleichen und zusammenfassen, während die Finanzierung die Quelle, die buchhalterische Behandlung und die endgültige Interpretation überprüft.",
      image: '/site-assets/extra/analytics-tablet-phone.webp'
    }],
    bullets: ["Einnahmen", "Verkaufskategorien", "Zahlungstätigkeit", "Durchschnittskontrolle", "Bestseller", "Zeitraum- und Standortvergleich"]
  }
};
