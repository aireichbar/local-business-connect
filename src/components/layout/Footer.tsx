import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              ai<span className="text-accent">reichbar</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Digitale Lösungen für lokale Unternehmen im Kreis Borken. 
              Einfach, verständlich und persönlich.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#pakete" className="text-background/70 hover:text-background transition-colors">
                  Pakete & Preise
                </a>
              </li>
              <li>
                <a href="#digitaler-empfang" className="text-background/70 hover:text-background transition-colors">
                  Digitaler Empfang
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/70 hover:text-background transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@aireichbar.de" className="hover:text-background transition-colors">
                  info@aireichbar.de
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>Kreis Borken, NRW</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} aireichbar. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Impressum
            </a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
