import { Link } from "react-router-dom";
import { Zap, MapPin, Shield, Clock, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    { icon: Zap, text: "In wenigen Tagen online" },
    { icon: Clock, text: "24/7 erreichbar" },
    { icon: MapPin, text: "Lokaler Partner aus Bocholt" },
    { icon: Shield, text: "DSGVO-konform" },
    { icon: HeartHandshake, text: "Kein Technik-Stress" },
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="trust-badge mb-3">Die Lösung</span>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            <span className="text-gradient-primary">Aireichbar</span> übernimmt Ihren Empfang
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ihr digitales System begrüßt Kunden, beantwortet Fragen und sammelt Kontaktdaten – 
            automatisch und zuverlässig.
          </p>

          {/* Benefits as horizontal pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.text}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>

          <Link to="/#pakete">
            <Button variant="outline" size="lg" className="group gap-2">
              Pakete ansehen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
