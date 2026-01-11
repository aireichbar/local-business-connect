import { MessageCircle, Settings, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Erstgespräch",
      description: "Wir lernen Sie und Ihren Betrieb kennen. Welche Anforderungen haben Sie?"
    },
    {
      number: "02",
      icon: Settings,
      title: "Umsetzung",
      description: "Wir erstellen Ihre Website und richten den digitalen Empfang ein."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Live",
      description: "Ihr digitales System ist online. Wir bleiben Ihr Ansprechpartner."
    }
  ];

  return (
    <section id="so-funktioniert-es" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-4">
            So funktioniert's
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            In 3 Schritten zur digitalen Erreichbarkeit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kein komplizierter Prozess. Keine Technik-Kenntnisse nötig.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              {/* Step number */}
              <div className="w-24 h-24 rounded-2xl bg-card border-2 border-border flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-3xl font-bold text-gradient-primary">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
