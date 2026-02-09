import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSrc from "@/assets/logo-header.svg";

const branchenLinks = [
  { title: "Handwerk", href: "/handwerk", description: "Für Elektriker, Maler, Dachdecker und mehr" },
  { title: "Friseursalons", href: "/friseur", description: "Nie wieder Kunden verlieren während Sie schneiden" },
  { title: "Physiotherapie", href: "/physiotherapie", description: "Behandeln statt telefonieren" },
  { title: "SHK-Betriebe", href: "/shk", description: "Notfälle sofort, Routine automatisch" },
  { title: "Elektrobetriebe", href: "/elektro", description: "Erreichbar auch während der Installation" },
];

const regionenLinks = [
  { title: "Bocholt", href: "/bocholt" },
  { title: "Borken", href: "/borken" },
  { title: "Ahaus", href: "/ahaus" },
  { title: "Rhede", href: "/rhede" },
  { title: "Weitere Städte", href: "/#regionen" },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [branchenOpen, setBranchenOpen] = useState(false);
  const [regionenOpen, setRegionenOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isSolidHeader = isScrolled || isMobileMenuOpen || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolidHeader ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-5 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          <Link to="/" className="flex items-center" aria-label="Zur Startseite">
            <img src={logoSrc} alt="aireichbar" className={`w-[clamp(120px,12vw,150px)] h-auto transition-all duration-300 ${isSolidHeader ? "" : "brightness-0 invert"}`} />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Branchen Dropdown */}
            <div className="relative group">
              <button className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${isSolidHeader ? "text-foreground" : "text-primary-foreground"}`}>
                Branchen <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border rounded-xl shadow-lg p-4 w-[320px] space-y-1">
                  {branchenLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="text-sm font-medium">{link.title}</div>
                      <p className="text-xs text-muted-foreground">{link.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Regionen Dropdown */}
            <div className="relative group">
              <button className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${isSolidHeader ? "text-foreground" : "text-primary-foreground"}`}>
                Regionen <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border rounded-xl shadow-lg p-3 w-[200px] space-y-1">
                  {regionenLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/#pakete" className={`text-sm font-medium transition-colors hover:text-accent ${isSolidHeader ? "text-foreground" : "text-primary-foreground"}`}>Preise</Link>
            <Link to="/faq" className={`text-sm font-medium transition-colors hover:text-accent ${isSolidHeader ? "text-foreground" : "text-primary-foreground"}`}>FAQ</Link>

            <Link to="/#kontakt">
              <Button variant="cta" size="default" className={`${!isSolidHeader ? "shadow-lg" : ""}`}>Kostenlos beraten lassen</Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü">
            {isMobileMenuOpen
              ? <X className={`w-6 h-6 ${isSolidHeader ? "text-foreground" : "text-primary-foreground"}`} />
              : <Menu className={`w-6 h-6 ${isSolidHeader ? "text-foreground" : "text-primary-foreground"}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 gap-1">
              {/* Branchen */}
              <button onClick={() => setBranchenOpen(!branchenOpen)} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-secondary text-foreground font-medium">
                Branchen <ChevronDown className={`h-4 w-4 transition-transform ${branchenOpen ? "rotate-180" : ""}`} />
              </button>
              {branchenOpen && (
                <div className="pl-4 space-y-1">
                  {branchenLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block py-2 px-4 text-sm hover:text-primary" onClick={closeMobile}>{link.title}</Link>
                  ))}
                </div>
              )}

              {/* Regionen */}
              <button onClick={() => setRegionenOpen(!regionenOpen)} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-secondary text-foreground font-medium">
                Regionen <ChevronDown className={`h-4 w-4 transition-transform ${regionenOpen ? "rotate-180" : ""}`} />
              </button>
              {regionenOpen && (
                <div className="pl-4 flex flex-wrap gap-2 py-2">
                  {regionenLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80" onClick={closeMobile}>{link.title}</Link>
                  ))}
                </div>
              )}

              <Link to="/#pakete" className="py-3 px-4 rounded-lg hover:bg-secondary text-foreground font-medium" onClick={closeMobile}>Preise</Link>
              <Link to="/faq" className="py-3 px-4 rounded-lg hover:bg-secondary text-foreground font-medium" onClick={closeMobile}>FAQ</Link>

              <Link to="/#kontakt" onClick={closeMobile} className="mt-2">
                <Button variant="cta" size="lg" className="w-full">Kostenlos beraten lassen</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
