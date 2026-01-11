import { Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      
      <div className="container mx-auto px-5 md:px-8 py-16 md:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="aireichbar" 
              className="h-10 w-auto brightness-0 invert mb-6"
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

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Kontakt
            </h3>
            <a 
              href="mailto:info@aireichbar.de" 
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm mb-4"
            >
              <Mail className="w-4 h-4" />
              info@aireichbar.de
            </a>
            <a 
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-medium mt-4"
            >
              Nachricht senden
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} aireichbar. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
