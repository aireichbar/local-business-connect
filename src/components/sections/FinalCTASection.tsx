import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTASection = () => {
  const benefits = [
    "Kostenlose Erstberatung",
    "Keine versteckten Kosten",
    "Persönlicher Ansprechpartner"
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      </div>
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit, immer erreichbar zu sein?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Lassen Sie uns gemeinsam herausfinden, wie aireichbar Ihrem Unternehmen helfen kann.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white/90 bg-white/10 rounded-full px-4 py-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#kontakt">
            <Button 
              variant="cta" 
              size="xl" 
              className="group bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              Jetzt Gespräch vereinbaren
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
