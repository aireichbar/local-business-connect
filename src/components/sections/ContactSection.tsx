import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
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
    <section id="kontakt" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
      {/* Decorative elements */}
      <div className="blob-decoration top-0 left-0 w-96 h-96 bg-primary/5" />
      <div className="blob-decoration bottom-0 right-0 w-80 h-80 bg-accent/5" />
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Info */}
          <div>
            <span className="trust-badge mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Sie haben Fragen oder möchten wissen, welches Paket zu Ihrem Betrieb passt? 
              Schreiben Sie uns – wir melden uns schnell und unkompliziert.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">E-Mail</p>
                  <a href="mailto:info@aireichbar.de" className="text-foreground font-semibold text-lg hover:text-primary transition-colors">
                    info@aireichbar.de
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Region</p>
                  <p className="text-foreground font-semibold text-lg">Kreis Borken, NRW</p>
                </div>
              </div>
            </div>

            {/* Trust elements */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Antwort innerhalb von 24 Stunden</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Unverbindliche Erstberatung</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Persönlicher Ansprechpartner</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-elevated p-8 lg:p-10 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Ihr Name" 
                    required 
                    className="h-14 rounded-xl bg-background border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">Unternehmen</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Ihr Unternehmen" 
                    className="h-14 rounded-xl bg-background border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">E-Mail *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="ihre@email.de" 
                  required 
                  className="h-14 rounded-xl bg-background border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">Ihre Nachricht *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  required 
                  className="min-h-[140px] rounded-xl bg-background border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="xl" 
                className="w-full gap-3"
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

              <p className="text-sm text-muted-foreground text-center">
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