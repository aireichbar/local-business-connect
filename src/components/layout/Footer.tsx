import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-extrabold mb-6">
              ai<span className="text-accent">reichbar</span>
            </div>
            <p className="text-background/70 leading-relaxed text-lg">
              Digitale Lösungen für lokale Unternehmen im Kreis Borken. 
              Einfach, verständlich und persönlich.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <a href="#pakete" className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-2 group">
                  Pakete & Preise
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#digitaler-empfang" className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-2 group">
                  Digitaler Empfang
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-2 group">
                  Kontakt
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-background/70">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@aireichbar.de" className="hover:text-background transition-colors">
                  info@aireichbar.de
                </a>
              </li>
              <li className="flex items-center gap-4 text-background/70">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Kreis Borken, NRW</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/50 text-sm">
            © {currentYear} aireichbar. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-sm">
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