import { useState } from "react";
import { Mail, MapPin, ArrowRight, Send, Cookie, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import logoSrc from "@/assets/logo-header.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const links = {
    leistungen: [
      { label: "Einstieg", href: "#pakete" },
      { label: "Wachstum", href: "#pakete" },
      { label: "Digitaler Empfang", href: "#digitaler-empfang" },
    ],
    unternehmen: [
      { label: "Über uns", href: "#so-funktioniert-es" },
      { label: "Kontakt", href: "#kontakt" },
      { label: "FAQ", href: "#faq" },
    ],
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail("");
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Vielen Dank für Ihre Newsletter-Anmeldung.",
    });
  };

  const handleCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      
      <div className="container mx-auto px-5 md:px-8 py-16 md:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logoSrc} 
              alt="Aireichbar – Ihr Partner für digitale Lösungen in Bocholt und Kreis Borken" 
              loading="lazy"
              className="w-[clamp(120px,12vw,150px)] h-auto brightness-0 invert mb-4 sm:mb-6"
            />
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Digitale Lösungen für lokale Unternehmen im Kreis Borken. 
              Persönlich, verständlich und zuverlässig.
            </p>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Kreis Borken, NRW</span>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {links.leistungen.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {links.unternehmen.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Newsletter
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Tipps zur digitalen Erreichbarkeit direkt in Ihr Postfach.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Ihre E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
                required
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="bg-white/10 hover:bg-white/20 text-white flex-shrink-0"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </form>
            <a 
              href="mailto:info@aireichbar.de" 
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm mt-6"
            >
              <Mail className="w-4 h-4" />
              info@aireichbar.de
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Aireichbar. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link to="/impressum" className="text-white/50 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-white/50 hover:text-white transition-colors">
              Datenschutz
            </Link>
            <button
              onClick={handleCookieSettings}
              className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Cookie className="w-3.5 h-3.5" />
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
