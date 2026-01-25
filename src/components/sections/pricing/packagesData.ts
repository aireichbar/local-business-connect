import { Package } from "./types";

export const packages: Package[] = [
  {
    name: "Einstieg",
    tagline: "Online-Basis & Auffindbarkeit",
    problemStatement: "Wir brauchen endlich eine professionelle Online-Präsenz.",
    benefits: [
      "Moderne, mobiloptimierte Onepage-Website",
      "Klare Darstellung von Leistungen & Kontakt",
      "Einheitlicher, professioneller Außenauftritt",
      "DSGVO-konforme Grundstruktur",
    ],
    feelingQuote: "Endlich online – und seriös gefunden werden.",
    trustAnchor: {
      icon: "shield",
      title: "Sicher & Datenschutzkonform",
      description: "Alle Seiten entsprechen der DSGVO mit Impressum und Datenschutzerklärung.",
    },
    pricing: {
      monthly: "49",
      setup: "299",
    },
    cta: "Jetzt starten",
    isHighlighted: false,
    badge: null,
  },
  {
    name: "Struktur",
    tagline: "Digitale Anfragen & Kontaktkanäle",
    problemStatement: "Wir verlieren Kunden, weil wir nicht erreichbar sind.",
    benefits: [
      "Multi-Page Website mit voller SEO",
      "Kontaktformular mit E-Mail-Weiterleitung",
      "Mobil optimiert für alle Geräte",
      "inkl. 6 Text/Bildänderungen pro Jahr",
    ],
    coreStatement: "Der perfekte Start für strukturierte Kundenanfragen.",
    feelingQuote: "Professionell aufgestellt – Anfragen kommen organisiert rein.",
    trustAnchor: {
      icon: "zap",
      title: "Schnell & Flexibel",
      description: "Änderungen werden innerhalb von 48h umgesetzt. Ihr Auftritt bleibt aktuell.",
    },
    pricing: {
      monthly: "99",
      setup: "499",
      anchor: "Günstiger als eine Teilzeit-Aushilfe",
    },
    cta: "Jetzt beraten lassen",
    isHighlighted: false,
    badge: null,
  },
  {
    name: "Digitaler Empfang",
    tagline: "Immer erreichbar – ohne Mehraufwand",
    problemStatement: "Wir verpassen ständig Anrufe und verlieren so Aufträge.",
    benefits: [
      "Automatisierte Annahme aller Kanäle",
      "Telefon, WhatsApp, E-Mail, Chat",
      "Integration in Ihren Kalender",
      "Daten bleiben vollständig bei Ihnen",
    ],
    feelingQuote: "24/7 erreichbar – ohne selbst am Telefon zu sitzen.",
    trustAnchor: {
      icon: "clock",
      title: "Rund um die Uhr verfügbar",
      description: "Ihre Kunden erreichen Sie jederzeit – auch außerhalb der Geschäftszeiten.",
    },
    pricing: {
      monthly: "149",
      setup: "899",
      anchor: "Ersetzt teure Telefonservice-Anbieter",
    },
    cta: "Empfang aktivieren",
    isHighlighted: true,
    badge: "Empfohlen",
  },
];
