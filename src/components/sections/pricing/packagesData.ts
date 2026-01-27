import { Package } from "./types";

export const packages: Package[] = [
  {
    name: "Ihr digitaler Schaukasten",
    tagline: "Ihr Betrieb wirkt professionell – auch online",
    problemStatement: "Viele Kunden finden uns online nicht oder sind unsicher, ob wir professionell sind.",
    benefits: [
      "Kunden finden Sie sofort",
      "Seriöser erster Eindruck",
      "Weniger Rückfragen",
    ],
    feelingQuote: "",
    trustAnchor: "14 Tage testen – ohne Risiko.",
    pricing: {
      monthly: "49",
      setup: "299",
      setupNote: "wir richten alles für Sie ein",
    },
    cta: "Sichtbar werden",
    isHighlighted: false,
    badge: null,
  },
  {
    name: "Ihre Termin-Sicherung",
    tagline: "Ihre Termine finden statt – nicht nur im Kalender",
    problemStatement: "Termine platzen oft genau dann, wenn alles voll geplant ist.",
    benefits: [
      "Termine werden vorab aktiv bestätigt",
      "Kurzfristige Absagen werden früh erkannt",
      "Mehr Planungssicherheit für Ihr Team",
    ],
    feelingQuote: "",
    trustAnchor: "14 Tage testen – ohne Risiko. Nur behalten, wenn es wirklich entlastet.",
    pricing: {
      monthly: "89",
      setup: "499",
      setupNote: "wir richten alles für Sie ein",
    },
    cta: "Termine sichern",
    isHighlighted: false,
    badge: null,
  },
  {
    name: "Ihre digitale Empfangskraft",
    tagline: "Ihr Betrieb ist erreichbar – ohne Sie zu stören",
    problemStatement: "Das Telefon klingelt genau dann, wenn ich arbeite.",
    benefits: [
      "Kein Telefonklingeln mehr während der Arbeit",
      "Kunden werden trotzdem betreut",
      "Termine landen direkt im Kalender",
      "Mehr Ruhe im Team",
      "Mehr angenommene Termine",
    ],
    
    feelingQuote: "Endlich kümmert sich jemand darum.",
    trustAnchor: "30 Tage testen. Nur behalten, wenn es wirklich entlastet. Kein Umbau. Keine neue Nummer.",
    pricing: {
      monthly: "149",
      setup: "899",
      setupNote: "wir kümmern uns um alles",
      anchor: "Günstiger als eine Aushilfe – ohne Urlaubs- oder Kranktage.",
    },
    cta: "Jetzt entlasten",
    isHighlighted: true,
    badge: "⭐ Empfohlen",
  },
];
