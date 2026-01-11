import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Sie haben Fragen oder möchten wissen, welches Paket zu Ihrem Betrieb passt? 
              Schreiben Sie uns – wir melden uns schnell und unkompliziert.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <a href="mailto:info@aireichbar.de" className="text-foreground font-medium hover:text-primary transition-colors">
                    info@aireichbar.de
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Region</p>
                  <p className="text-foreground font-medium">Kreis Borken, NRW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-elevated p-8 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Ihr Name" 
                    required 
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Ihr Unternehmen" 
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="ihre@email.de" 
                  required 
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ihre Nachricht *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  required 
                  className="min-h-[120px] resize-none"
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
                    <Send className="w-5 h-5" />
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
