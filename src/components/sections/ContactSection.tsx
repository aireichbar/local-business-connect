import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-4 sm:px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <span className="trust-badge mb-4">
              Kontakt
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sie haben Fragen oder möchten wissen, welches Paket zu Ihrem Betrieb passt? 
              Schreiben Sie uns – wir melden uns schnell und unkompliziert.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <a href="mailto:info@aireichbar.de" className="text-foreground font-medium hover:text-primary transition-colors">
                    info@aireichbar.de
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Region</p>
                  <p className="text-foreground font-medium">Kreis Borken, NRW</p>
                </div>
              </div>
            </div>

            {/* Trust elements */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Antwort innerhalb von 24 Stunden</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Unverbindliche Erstberatung</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Persönlicher Ansprechpartner</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground text-sm font-medium">Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Ihr Name" 
                    required 
                    className="h-12 bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground text-sm font-medium">Unternehmen</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Ihr Unternehmen" 
                    className="h-12 bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm font-medium">E-Mail *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="ihre@email.de" 
                  required 
                  className="h-12 bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground text-sm font-medium">Nachricht *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  required 
                  className="min-h-[120px] bg-background resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    Nachricht senden
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
