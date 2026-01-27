import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Mail, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Fehler beim Senden der Nachricht.");
      }

      // Success
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : "Nachricht konnte nicht gesendet werden.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <a 
                href="https://wa.me/4917553187011?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20digitalen%20L%C3%B6sungen."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium group-hover:text-success transition-colors">
                    0175 531 87 01
                  </p>
                </div>
              </a>

              <a 
                href="tel:+4917553187011"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    0175 531 87 01
                  </p>
                </div>
              </a>

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
                    className={`h-12 bg-background ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
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
                  className={`h-12 bg-background ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground text-sm font-medium">Nachricht *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  required 
                  className={`min-h-[120px] bg-background resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
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
