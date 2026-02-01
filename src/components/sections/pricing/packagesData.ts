import { Package } from "./types";

export const packages: Package[] = [
  {
    name: "Digitaler Empfang",
    tagline: "Ihr digitaler Empfang – immer erreichbar, nichts geht verloren.",
    problemStatement: "",
    benefits: [
      "Anrufe werden automatisch angenommen & bearbeitet",
      "WhatsApp-Anfragen werden sofort beantwortet",
      "Termine werden vorgeschlagen & bestätigt",
      "E-Mails und Formulare laufen automatisch ein",
      "Ihr Team wird spürbar entlastet",
      "Sie behalten jederzeit die volle Kontrolle",
    ],
    trustAnchor: "30 Tage Zufriedenheitsgarantie",
    pricing: {
      monthly: "249",
      setup: "1.790",
      setupNote: "einmalig",
    },
    cta: "Ich gewinne Zeit",
    isHighlighted: true,
    badge: "🏆 Die Lösung für professionelle Betriebe",
  },
];
