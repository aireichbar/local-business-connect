# Preissektion – Masterprompt

> **Zweck:** Dieses Dokument beschreibt die vollständige UX/UI-Spezifikation der Preissektion, um das Look-and-Feel in anderen Projekten zu replizieren.

---

## 1. Überblick & Designphilosophie

Die Preissektion folgt dem Prinzip der **visuellen Hierarchie durch Positionierung**. Ein "Staircase"-Layout auf Desktop führt den Blick natürlich zum Premium-Paket. Die Kommunikation ist ergebnisorientiert ("Ich gewinne Zeit") statt feature-fokussiert.

**Kernprinzipien:**
- Ruhige Autorität – professionell, ohne technisches Fachchinesisch
- Outcome-fokussiert statt Technik-fokussiert
- Keine Rabatte, Prozentangaben oder "Ab"-Preise
- Direkte Du-Form in CTAs

---

## 2. Layout-Struktur

### Desktop: Staircase-Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌─────────┐                                                   │
│   │         │                                                   │
│   │ Paket 1 │   ┌─────────┐                                     │
│   │  pt-16  │   │         │   ┌─────────────┐                   │
│   │         │   │ Paket 2 │   │   🏆 Badge  │                   │
│   │         │   │  pt-8   │   │   Paket 3   │                   │
│   │         │   │         │   │    pt-0     │                   │
│   │  [CTA]  │   │  [CTA]  │   │    [CTA]    │                   │
│   └─────────┘   └─────────┘   └─────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CSS-Umsetzung:**
```tsx
// Staircase offset via padding-top
const paddingTop = ["pt-16", "pt-8", "pt-0"];

<div className="grid grid-cols-3 gap-4 lg:gap-6">
  {packages.map((pkg, index) => (
    <motion.div className={`${paddingTop[index]} flex`}>
      <PricingCard pkg={pkg} index={index} isStaircase />
    </motion.div>
  ))}
</div>
```

### Mobile: Umgekehrte Reihenfolge

Auf Mobilgeräten wird Paket 3 (Premium) zuerst angezeigt, gefolgt von Paket 2 und 1.

```tsx
const mobileOrderedPackages = [packages[2], packages[1], packages[0]];

<div className="md:hidden space-y-6">
  {mobileOrderedPackages.map((pkg, index) => (
    <div key={pkg.name}>
      {index === 0 && (
        <p className="text-center text-sm text-muted-foreground mb-3 font-medium">
          Empfohlene Lösung für die meisten Betriebe
        </p>
      )}
      <PricingCard pkg={pkg} index={index} />
    </div>
  ))}
</div>
```

---

## 3. Paketdaten (Fixe Struktur)

### Paket 1: Digitale Basis

| Eigenschaft | Wert |
|-------------|------|
| **Name** | Digitale Basis |
| **Tagline** | Einmal richtig online präsent. Danach nie wieder anfassen. |
| **Setup** | 499 € einmalig |
| **Monatlich** | 49 € |
| **CTA** | Ich erreiche Präsenz |
| **Highlighted** | Nein |
| **Badge** | — |

**Benefits (projektspezifisch anpassbar):**
- Professioneller Onepager
- Mobil optimiert
- Klare Kontaktmöglichkeiten
- DSGVO-konform
- Wartungsfrei für Sie

---

### Paket 2: Erreichbarkeit & Terminsicherung

| Eigenschaft | Wert |
|-------------|------|
| **Name** | Erreichbarkeit & Terminsicherung |
| **Tagline** | Weniger Chaos. Mehr Ordnung. Keine verlorenen Anfragen mehr. |
| **Setup** | 899 € einmalig |
| **Monatlich** | 109 € |
| **CTA** | Ich schaffe Überblick |
| **Highlighted** | Nein |
| **Badge** | — |

**Benefits (projektspezifisch anpassbar):**
- Alle Anfragen an einem Ort
- Strukturierte Terminabwicklung
- Reduzierte No-Shows
- Spürbare Entlastung im Tagesgeschäft
- inkl. 300 WhatsApp Konversationen/Monat

---

### Paket 3: Digitaler Empfang (Premium)

| Eigenschaft | Wert |
|-------------|------|
| **Name** | Digitaler Empfang |
| **Tagline** | Ihr digitaler Empfang – immer erreichbar, nie störend. |
| **Setup** | 1.199 € einmalig |
| **Monatlich** | 169 € |
| **CTA** | Ich gewinne Zeit |
| **Highlighted** | Ja |
| **Badge** | 🏆 Standardlösung für professionelle Betriebe |
| **Trust Anchor** | 30 Tage risikofrei testen |

**Benefits (projektspezifisch anpassbar):**
- Anfragen werden automatisch verstanden
- Termine werden vorgeschlagen & bestätigt
- Kunden erhalten sofort Antworten
- Ihr Team wird deutlich entlastet
- Sie behalten jederzeit die Kontrolle
- inkl. 600 WhatsApp Konversationen/Monat

---

## 4. Pricing Card – Komponenten-Spezifikation

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

| Element | Standard | Highlighted |
|---------|----------|-------------|
| **Name** | `text-xl text-foreground` | `text-xl md:text-[1.35rem] text-background` |
| **Tagline** | `text-sm text-muted-foreground` | `text-sm text-background/70` |
| **Preis** | `text-3xl font-bold text-foreground` | `text-[2rem] font-bold text-background` |
| **Setup** | `text-sm text-muted-foreground` | `text-sm text-background/60` |

### Benefits-Liste

```tsx
<ul className="space-y-3 mb-8 flex-grow">
  {pkg.benefits.map((benefit) => (
    <li key={benefit} className="flex items-start gap-3">
      <div className={cn(
        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
        pkg.isHighlighted ? "bg-white/20" : "bg-primary/10"
      )}>
        <Check className={cn(
          "w-3 h-3",
          pkg.isHighlighted ? "text-white" : "text-primary"
        )} />
      </div>
      <span className={cn(
        "text-sm",
        pkg.isHighlighted ? "text-background/90" : "text-foreground/80"
      )}>
        {benefit}
      </span>
    </li>
  ))}
</ul>
```

### CTA-Button

```tsx
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
```

---

## 5. Trust Indicators

Vier Indikatoren unter der Preissektion:

```tsx
const indicators = [
  { icon: Shield, text: "DSGVO-konform & EU-Hosting" },
  { icon: Users, text: "Persönliche Einrichtung – kein Baukasten" },
  { icon: Calendar, text: "Feste Vertragslaufzeit von 24 Monaten" },
  { icon: Headphones, text: "Support & laufende Betreuung inklusive" },
];
```

**Layout:**
```tsx
<div className="mt-16 pt-10 border-t border-border/50">
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
</div>
```

---

## 6. Section Header

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="text-center mb-14 md:mb-16"
>
  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 tracking-tight">
    Drei Wege zu mehr Ruhe im Arbeitsalltag
  </h2>
  <p className="text-muted-foreground max-w-xl mx-auto text-lg">
    Vom digitalen Aushängeschild bis zur vollautomatischen Empfangskraft.
  </p>
</motion.div>
```

---

## 7. Animationen

Alle Karten nutzen Framer Motion mit gestaffeltem Delay:

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
viewport={{ once: true }}
```

---

## 8. TypeScript Interface

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

**Erstellt für:** Aireichbar  
**Version:** 1.0  
**Letzte Aktualisierung:** Januar 2026
