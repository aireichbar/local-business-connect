import { Mail, MapPin, ArrowRight, Cookie, Facebook, Instagram, MessageCircle, Phone, Shield, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/logo-header.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    branchen: [
      { label: "Handwerk", href: "/handwerk" },
      { label: "Friseursalons", href: "/friseur" },
      { label: "Physiotherapie", href: "/physiotherapie" },
      { label: "SHK-Betriebe", href: "/shk" },
      { label: "Elektrobetriebe", href: "/elektro" },
    ],
    regionen: [
      { label: "Bocholt", href: "/bocholt" },
      { label: "Borken", href: "/borken" },
      { label: "Ahaus", href: "/ahaus" },
      { label: "Rhede", href: "/rhede" },
      { label: "Alle Städte", href: "/#regionen" },
    ],
    unternehmen: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/#kontakt" },
    ],
    rechtliches: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  };

  const trustBadges = [
    { icon: Shield, text: "DSGVO-konform" },
    { icon: Clock, text: "24/7 Erreichbar" },
    { icon: CheckCircle2, text: "Made in Germany" },
  ];

  const handleCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  const renderLinkList = (links: { label: string; href: string }[]) => (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
            {link.label}
            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />

      <div className="container mx-auto px-5 md:px-8 py-12 md:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/">
              <img src={logoSrc} alt="aireichbar" loading="lazy" className="w-[clamp(120px,12vw,150px)] h-auto brightness-0 invert mb-4 hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-white/70 leading-relaxed text-sm mb-4">Digitale Erreichbarkeit für lokale Unternehmen im Kreis Borken.</p>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" /><span>Bocholt, Kreis Borken</span>
            </div>
          </div>

          {/* Branchen */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">Branchen</h3>
            {renderLinkList(footerLinks.branchen)}
          </div>

          {/* Regionen */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">Regionen</h3>
            {renderLinkList(footerLinks.regionen)}
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">Unternehmen</h3>
            {renderLinkList(footerLinks.unternehmen)}
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">Rechtliches</h3>
            {renderLinkList(footerLinks.rechtliches)}
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/90">Kontakt</h3>
            <div className="space-y-3 mb-5">
              <a href="https://wa.me/491755318701" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-success transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />0175 531 87 01
              </a>
              <a href="tel:+491755318701" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />0175 531 87 01
              </a>
              <a href="mailto:info@aireichbar.de" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />info@aireichbar.de
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/491755318701" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-success/20 hover:bg-success/30 flex items-center justify-center transition-all hover:scale-110" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 text-success" />
              </a>
              <a href="https://www.facebook.com/share/16uLQs6yCu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/aireichbar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors">
                <badge.icon className="w-4 h-4" /><span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {currentYear} aireichbar. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link to="/impressum" className="text-white/50 hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-white/50 hover:text-white transition-colors">Datenschutz</Link>
            <button onClick={handleCookieSettings} className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5">
              <Cookie className="w-3.5 h-3.5" />Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
