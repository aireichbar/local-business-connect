import { Package } from "./types";

export const packages: Package[] = [
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
      "inkl. 600 WhatsApp Konversationen/Monat",
    ],
    trustAnchor: "30 Tage risikofrei testen",
    pricing: {
      monthly: "169",
      setup: "1.199",
      setupNote: "einmalig",
    },
    cta: "Ich gewinne Zeit",
    isHighlighted: true,
    badge: "🏆 Standardlösung für professionelle Betriebe",
  },
];
