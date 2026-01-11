import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const FinalCTASection = () => {
  const benefits = [
    "Kostenlose Erstberatung",
    "Keine versteckten Kosten",
    "Persönlicher Ansprechpartner"
  ];

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Bereit, immer erreichbar zu sein?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie aireichbar Ihrem Unternehmen helfen kann. Unverbindlich und kostenlos.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt">
              <Button variant="cta" size="xl" className="group bg-white text-primary hover:bg-white/90 text-lg">
                Jetzt Gespräch vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-white/60 text-sm">
            Antwort innerhalb von 24 Stunden • Vor-Ort-Termin möglich
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
