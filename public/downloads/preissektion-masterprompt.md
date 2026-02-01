# Preissektion – Masterprompt

> **Zweck:** Dieses Dokument beschreibt die vollständige UX/UI-Spezifikation der Preissektion als Ein-Paket-Lösung, um das Look-and-Feel in anderen Projekten zu replizieren.

---

## 1. Überblick & Designphilosophie

Die Preissektion fokussiert sich auf **ein einzelnes Premium-Paket** mit High-Contrast-Styling (dunkle Karte, weiße Schrift). Die Kommunikation ist ergebnisorientiert ("Ich gewinne Zeit") statt feature-fokussiert.

**Kernprinzipien:**
- Ruhige Autorität – professionell, ohne technisches Fachchinesisch
- Outcome-fokussiert statt Technik-fokussiert
- Keine Rabatte, Prozentangaben oder "Ab"-Preise
- Direkte Du-Form in CTAs
- Ein Paket = Klare Entscheidung ohne Überforderung

---

## 2. Layout-Struktur

### Single-Card Layout (zentriert)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    Kein Anruf & keine Nachricht                 │
│                      geht mehr verloren.                        │
│                                                                 │
│          Ihr digitaler Empfang übernimmt – per Telefon,         │
│                   Chat, WhatsApp und E-Mail                     │
│                                                                 │
│                    ┌─────────────────┐                          │
│                    │   🏆 Badge      │                          │
│                    │                 │                          │
│                    │  Digitaler      │                          │
│                    │  Empfang        │                          │
│                    │                 │                          │
│                    │  249 € / Monat  │                          │
│                    │  1.990 € Setup  │                          │
│                    │                 │                          │
│                    │  [Ich gewinne   │                          │
│                    │     Zeit →]     │                          │
│                    └─────────────────┘                          │
│                                                                 │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│   │ DSGVO   │  │Persönl. │  │24 Monate│  │ Support │           │
│   │konform  │  │Einricht.│  │Laufzeit │  │inklusive│           │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CSS-Umsetzung:**

```tsx
<section id="pakete" className="py-20 md:py-28 bg-background relative overflow-hidden">
  <div className="container mx-auto px-5 md:px-8 relative max-w-2xl">
    {/* Section header */}
    <motion.div className="text-center mb-14 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 tracking-tight">
        Kein Anruf & keine Nachricht geht mehr verloren.
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-lg">
        Ihr digitaler Empfang übernimmt – per Telefon, Chat, WhatsApp und E-Mail
      </p>
    </motion.div>

    {/* Single centered card */}
    <motion.div>
      <PricingCard pkg={pkg} index={0} />
    </motion.div>

    {/* Trust Indicators */}
    <TrustIndicators />

    {/* Pricing note */}
    <p className="text-center text-muted-foreground text-xs mt-10">
      Alle Preise zzgl. MwSt.
    </p>
  </div>
</section>
```

---

## 3. Paketdaten

### Digitaler Empfang (Premium)

| Eigenschaft | Wert |
|-------------|------|
| **Name** | Digitaler Empfang |
| **Tagline** | Ihr digitaler Empfang – immer erreichbar, nichts geht verloren. |
| **Setup** | 1.990 € einmalig |
| **Monatlich** | 249 € |
| **CTA** | Ich gewinne Zeit |
| **Highlighted** | Ja |
| **Badge** | 🏆 Die Lösung für professionelle Betriebe |
| **Trust Anchor** | 30 Tage Zufriedenheitsgarantie |

**Benefits:**
- Anrufe werden automatisch angenommen & bearbeitet
- WhatsApp-Anfragen werden sofort beantwortet
- Termine werden vorgeschlagen & bestätigt
- E-Mails und Formulare laufen automatisch ein
- Ihr Team wird spürbar entlastet
- Sie behalten jederzeit die volle Kontrolle

---

## 4. TypeScript Interface

```typescript
interface Package {
  name: string;
  tagline: string;
  premiumSubtitle?: string;
  problemStatement: string;
  benefits: string[];
  coreStatement?: string;
  feelingQuote?: string;
  trustAnchor: string;
  pricing: {
    monthly: string;
    setup: string;
    setupNote: string;
    anchor?: string;
  };
  cta: string;
  isHighlighted: boolean;
  badge?: string | null;
}
```

---

## 5. Paketdaten (TypeScript)

```typescript
// packagesData.ts
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
      setup: "1.990",
      setupNote: "einmalig",
    },
    cta: "Ich gewinne Zeit",
    isHighlighted: true,
    badge: "🏆 Die Lösung für professionelle Betriebe",
  },
];
```

---

## 6. Pricing Card – Komponenten-Spezifikation

### Basis-Struktur

```tsx
<div className={cn(
  "relative rounded-2xl flex flex-col h-full transition-all duration-300",
  pkg.isHighlighted
    ? "bg-foreground text-background shadow-2xl z-10 ring-1 ring-primary/10"
    : "bg-card border border-border/60 hover:border-border hover:shadow-md"
)}>
```

### Badge (nur bei Premium)

```tsx
{pkg.badge && (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
    <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg">
      {pkg.badge}
    </div>
  </div>
)}
```

### Padding-Logik

| Zustand | Padding |
|---------|---------|
| Standard | `p-6 md:p-8` |
| Highlighted | `p-7 md:p-9` |
| Mit Badge | `pt-8` zusätzlich |
| Highlighted + Badge | `pt-9` zusätzlich |

### Typografie

| Element | Highlighted (Premium) |
|---------|-------------|
| **Name** | `text-xl md:text-[1.35rem] text-background` |
| **Tagline** | `text-sm text-background/70` |
| **Preis** | `text-[2rem] font-bold text-background` |
| **Setup** | `text-sm text-background/60` |
| **Trust Anchor** | `text-sm font-medium text-background` (mit Check-Icon) |

### Benefits-Liste

```tsx
<ul className="space-y-3 mb-8 flex-grow">
  {pkg.benefits.map((benefit) => (
    <li key={benefit} className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
        <Check className="w-3 h-3 text-white" />
      </div>
      <span className="text-sm text-background/90">
        {benefit}
      </span>
    </li>
  ))}
</ul>
```

### Trust Anchor (30 Tage Zufriedenheitsgarantie)

**WICHTIG:** Bei der highlighted (dunklen) Karte muss der Text in Weiß erscheinen:

```tsx
{pkg.trustAnchor && (
  <p className={cn(
    "text-sm font-medium mt-3 flex items-center gap-1.5",
    pkg.isHighlighted ? "text-background" : "text-primary"
  )}>
    <Check className="w-4 h-4" />
    {pkg.trustAnchor}
  </p>
)}
```

### CTA-Button

```tsx
<Link to="/#kontakt" className="block mt-auto">
  <Button
    size="lg"
    className="w-full rounded-xl font-medium group h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
  >
    {pkg.cta}
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
  </Button>
</Link>
```

---

## 7. Trust Indicators

Vier Indikatoren unter der Preissektion:

```tsx
import { Shield, Users, Calendar, Headphones } from "lucide-react";

const indicators = [
  { icon: Shield, text: "DSGVO-konform & EU-Hosting" },
  { icon: Users, text: "Persönliche Einrichtung – kein Baukasten" },
  { icon: Calendar, text: "Feste Vertragslaufzeit von 24 Monaten" },
  { icon: Headphones, text: "Support & laufende Betreuung inklusive" },
];
```

**Layout:**

```tsx
<motion.div className="mt-16 pt-10 border-t border-border/50">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {indicators.map((indicator) => (
      <div className="flex items-center gap-3 text-muted-foreground">
        <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
          <indicator.icon className="w-5 h-5 text-foreground/60" />
        </div>
        <span className="text-sm">{indicator.text}</span>
      </div>
    ))}
  </div>
</motion.div>
```

---

## 8. Animationen

Alle Komponenten nutzen Framer Motion:

```tsx
// Section Header
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}

// Card
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}

// Trust Indicators
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.3 }}
viewport={{ once: true }}
```

---

## 9. Fußnote

```tsx
<p className="text-center text-muted-foreground text-xs mt-10">
  Alle Preise zzgl. MwSt.
</p>
```

---

## 10. Erforderliche Dependencies

```json
{
  "framer-motion": "^12.x",
  "lucide-react": "^0.x",
  "react-router-dom": "^6.x",
  "class-variance-authority": "^0.7.x",
  "tailwind-merge": "^2.x"
}
```

---

## 11. Dateistruktur

```
src/components/sections/
├── PackagesSection.tsx          # Hauptkomponente
└── pricing/
    ├── types.ts                 # TypeScript Interfaces
    ├── packagesData.ts          # Paketdaten
    ├── PricingCard.tsx          # Einzelne Karte
    └── TrustIndicators.tsx      # Vertrauensindikatoren
```

---

## 12. Vollständige PricingCard Komponente

```tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Package } from "./types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: Package;
  index: number;
}

const PricingCard = ({ pkg, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl flex flex-col h-full transition-all duration-300",
        pkg.isHighlighted
          ? "bg-foreground text-background shadow-2xl z-10 ring-1 ring-primary/10"
          : "bg-card border border-border/60 hover:border-border hover:shadow-md"
      )}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg">
            {pkg.badge}
          </div>
        </div>
      )}

      <div
        className={cn(
          "flex flex-col h-full",
          pkg.isHighlighted ? "p-7 md:p-9" : "p-6 md:p-8",
          pkg.badge && "pt-8",
          pkg.isHighlighted && pkg.badge && "pt-9"
        )}
      >
        {/* Header */}
        <div className="mb-6">
          <h3
            className={cn(
              "font-semibold mb-2",
              pkg.isHighlighted ? "text-background text-xl md:text-[1.35rem]" : "text-foreground text-xl"
            )}
          >
            {pkg.name}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed",
              pkg.isHighlighted ? "text-background/70" : "text-muted-foreground"
            )}
          >
            {pkg.tagline}
          </p>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 mb-8 flex-grow">
          {pkg.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                  pkg.isHighlighted ? "bg-white/20" : "bg-primary/10"
                )}
              >
                <Check
                  className={cn(
                    "w-3 h-3",
                    pkg.isHighlighted ? "text-white" : "text-primary"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-sm",
                  pkg.isHighlighted ? "text-background/90" : "text-foreground/80"
                )}
              >
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1 mb-1">
            <span
              className={cn(
                "font-bold tracking-tight",
                pkg.isHighlighted ? "text-background text-[2rem]" : "text-foreground text-3xl"
              )}
            >
              {pkg.pricing.monthly} €
            </span>
            <span
              className={cn(
                "text-sm",
                pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
              )}
            >
              / Monat
            </span>
          </div>
          <p
            className={cn(
              "text-sm",
              pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
            )}
          >
            {pkg.pricing.setup} € {pkg.pricing.setupNote}
          </p>

          {/* Trust Anchor */}
          {pkg.trustAnchor && (
            <p
              className={cn(
                "text-sm font-medium mt-3 flex items-center gap-1.5",
                pkg.isHighlighted ? "text-background" : "text-primary"
              )}
            >
              <Check className="w-4 h-4" />
              {pkg.trustAnchor}
            </p>
          )}
        </div>

        {/* CTA */}
        <Link to="/#kontakt" className="block mt-auto">
          <Button
            size="lg"
            className={cn(
              "w-full rounded-xl font-medium group h-12",
              pkg.isHighlighted
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-foreground/5 hover:bg-foreground/10 text-foreground border border-border"
            )}
          >
            {pkg.cta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
```

---

**Erstellt für:** Aireichbar  
**Version:** 2.0 (Single-Package Edition)  
**Letzte Aktualisierung:** Februar 2026
