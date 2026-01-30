import { Package } from "./types";

export const packages: Package[] = [
  {
    name: "Digitale Basis",
    tagline: "Einmal richtig online präsent. Danach nie wieder anfassen.",
    problemStatement: "",
    benefits: [
      "Professioneller Onepager",
      "Mobil optimiert",
      "Klare Kontaktmöglichkeiten",
      "DSGVO-konform",
      "Wartungsfrei für Sie",
    ],
    trustAnchor: "",
    pricing: {
      monthly: "49",
      setup: "499",
      setupNote: "einmalig",
    },
    cta: "Digitale Basis starten",
    isHighlighted: false,
    badge: null,
  },
  {
    name: "Erreichbarkeit & Terminsicherung",
    tagline: "Weniger Chaos. Mehr Ordnung. Keine verlorenen Anfragen mehr.",
    problemStatement: "",
    benefits: [
      "Alle Anfragen an einem Ort",
      "Strukturierte Terminabwicklung",
      "Reduzierte No-Shows",
      "Spürbare Entlastung im Tagesgeschäft",
      "Klare Übersicht für den Betrieb",
    ],
    trustAnchor: "",
    pricing: {
      monthly: "109",
      setup: "899",
      setupNote: "einmalig",
    },
    cta: "Erreichbarkeit verbessern",
    isHighlighted: false,
    badge: null,
  },
  {
    name: "Digitaler Empfang",
    tagline: "Ihr digitaler Empfang – immer erreichbar, nie störend.",
    problemStatement: "",
    benefits: [
      "Anfragen werden automatisch verstanden",
      "Termine werden vorgeschlagen & bestätigt",
      "Kunden erhalten sofort Antworten",
      "Ihr Team wird deutlich entlastet",
      "Sie behalten jederzeit die Kontrolle",
    ],
    trustAnchor: "30 Tage risikofrei testen",
    pricing: {
      monthly: "169",
      setup: "1.199",
      setupNote: "einmalig",
    },
    cta: "Digitalen Empfang einrichten",
    isHighlighted: true,
    badge: "⭐ Beliebteste Lösung für lokale Betriebe",
  },
];
