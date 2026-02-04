import { Mail, MapPin, ArrowRight, Cookie, Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/logo-header.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    leistungen: [
      { label: "Digitaler Empfang", href: "/#pakete" },
      { label: "Demo anhören", href: "/#digitaler-empfang" },
      { label: "ROI-Rechner", href: "/#roi-rechner" },
    ],
    unternehmen: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/#kontakt" },
      { label: "FAQ", href: "/#faq" },
    ],
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
            <Link to="/">
              <img 
                src={logoSrc} 
                alt="Aireichbar – Ihr Partner für digitale Lösungen in Bocholt und Kreis Borken" 
                loading="lazy"
                className="w-[clamp(120px,12vw,150px)] h-auto brightness-0 invert mb-4 sm:mb-6 hover:opacity-80 transition-opacity"
              />
            </Link>
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
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
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
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & Social */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Kontakt
            </h3>
            <div className="space-y-3 mb-6">
              <a 
                href="https://wa.me/491755318701?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20digitalen%20L%C3%B6sungen."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-success transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                0175 531 87 01
              </a>
              <a 
                href="tel:+491755318701"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0175 531 87 01
              </a>
              <a 
                href="mailto:info@aireichbar.de" 
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@aireichbar.de
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/491755318701?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20digitalen%20L%C3%B6sungen."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-success/20 hover:bg-success/30 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-success" />
              </a>
              <a 
                href="https://www.facebook.com/share/16uLQs6yCu/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/aireichbar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
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