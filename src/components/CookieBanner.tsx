import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Icon & Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mit „Akzeptieren" stimmen Sie der Nutzung aller Cookies zu. 
                  Weitere Informationen finden Sie in unserer{" "}
                  <a
                    href="/datenschutz"
                    className="text-primary hover:underline font-medium"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleConsent("rejected")}
                className="min-w-[100px]"
              >
                Ablehnen
              </Button>
              <Button
                variant="cta"
                size="sm"
                onClick={() => handleConsent("accepted")}
                className="min-w-[100px]"
              >
                Akzeptieren
              </Button>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={() => handleConsent("rejected")}
              className="absolute top-3 right-3 md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
