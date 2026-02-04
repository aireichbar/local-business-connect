import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin } from "lucide-react";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum – Aireichbar";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Impressum und rechtliche Angaben zu Aireichbar – Christian Schubert, Bocholt.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.aireichbar.de/impressum");
    }
    
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Impressum – Aireichbar");
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://www.aireichbar.de/impressum");
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-5 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            {/* Angaben gemäß § 5 TMG */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <p className="font-bold text-xl text-foreground mb-2">Christian Schubert</p>
                <p className="text-foreground/80">
                  Arnold-Janssen-Straße 2A<br />
                  46397 Bocholt<br />
                  Deutschland
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">E-Mail</p>
                  <a href="mailto:info@aireichbar.de" className="text-primary hover:underline">
                    info@aireichbar.de
                  </a>
                </div>
              </div>
            </section>

            {/* Hinweis zur Tätigkeit */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Hinweis zur Tätigkeit</h2>
              <p className="text-foreground/80">
                Diese Website dient der Information über digitale Dienstleistungen und den Digitalen Empfang.<br />
                Die gewerbliche Tätigkeit befindet sich in Vorbereitung.
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <address className="not-italic text-foreground/80">
                Christian Schubert<br />
                Arnold-Janssen-Straße 2A<br />
                46397 Bocholt
              </address>
            </section>

            {/* Haftung für Inhalte */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
              <p className="text-foreground/80">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.<br /><br />
                Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Links</h2>
              <p className="text-foreground/80">
                Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht.<br /><br />
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </section>

            {/* Hinweis zum Digitalen Empfang */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Hinweis zum Digitalen Empfang</h2>
              <p className="text-foreground/80">
                Die angebotenen Inhalte und Systeme dienen der Unterstützung betrieblicher Prozesse.<br /><br />
                Sie ersetzen keine rechtliche, steuerliche oder sonstige fachliche Beratung.<br /><br />
                Eine Haftung für Entscheidungen auf Basis automatisierter Ausgaben ist – soweit gesetzlich zulässig – ausgeschlossen.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">
              Stand: Januar 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
