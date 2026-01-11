import { MessageCircle, Settings, Rocket, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Erstgespräch",
      description: "Wir lernen Sie und Ihren Betrieb kennen. Welche Anforderungen haben Sie? Was brauchen Ihre Kunden?"
    },
    {
      number: "02",
      icon: Settings,
      title: "Umsetzung",
      description: "Wir erstellen Ihre Website und richten bei Bedarf den digitalen Empfang ein – Sie müssen sich um nichts kümmern."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Live",
      description: "Ihr digitales Ökosystem ist online. Wir bleiben Ihr Ansprechpartner für Fragen und Anpassungen."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
      {/* Decorative elements */}
      <div className="blob-decoration top-20 right-0 w-80 h-80 bg-accent/5" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            So funktioniert's
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            In 3 Schritten zu Ihrer <br className="hidden lg:block" />
            <span className="text-gradient-primary">digitalen Erreichbarkeit</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kein komplizierter Prozess. Kein Technik-Stress. Wir machen das für Sie.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 hidden lg:block">
            <div className="w-[60%] h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative text-center group"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-card border-2 border-border/50 shadow-md mb-6 group-hover:border-primary/30 transition-colors">
                  <span className="text-3xl font-extrabold text-gradient-primary">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-20 -right-6 w-6 h-6 text-primary/30 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
