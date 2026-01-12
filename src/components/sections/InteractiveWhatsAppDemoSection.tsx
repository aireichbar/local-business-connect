import { MessageCircle, Zap, Bot, ArrowRight } from "lucide-react";
import InteractiveWhatsAppChat from "@/components/InteractiveWhatsAppChat";
import PhoneMockup from "@/components/PhoneMockup";
import { Button } from "@/components/ui/button";

const InteractiveWhatsAppDemoSection = () => {
  return (
    <section id="live-demo" className="section-padding bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Phone Mockup with Interactive Chat */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-[60px] rounded-full scale-90" />
              
              {/* Phone with Interactive Chat */}
              <div className="relative">
                <PhoneMockup>
                  <InteractiveWhatsAppChat />
                </PhoneMockup>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-20 bg-background/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-border/50 animate-float hidden sm:block">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">KI-gesteuert</span>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-32 bg-background/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-border/50 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium">Sofort-Antwort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="trust-badge mb-4">
              <MessageCircle className="w-4 h-4" />
              Live Demo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Testen Sie es selbst –
              <span className="text-gradient"> jetzt live!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Schreiben Sie eine Nachricht und erleben Sie, wie schnell und natürlich 
              unser KI-Assistent antwortet. Genau so funktioniert es für Ihre Kunden.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Tippen Sie eine Frage ein</p>
                  <p className="text-sm text-muted-foreground">Oder nutzen Sie die Schnellantworten</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Erleben Sie die KI-Antwort</p>
                  <p className="text-sm text-muted-foreground">Natürlich, freundlich und sofort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">So einfach ist Ihr digitaler Empfang</p>
                  <p className="text-sm text-muted-foreground">24/7 für Ihre Kunden verfügbar</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jetzt kostenlos beraten lassen
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveWhatsAppDemoSection;
