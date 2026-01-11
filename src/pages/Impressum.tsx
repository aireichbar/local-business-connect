import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const Impressum = () => {
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
                <p className="font-bold text-xl text-foreground mb-2">Aireichbar</p>
                <p className="text-foreground/80">Einzelunternehmen</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Adresse</p>
                    <p className="text-foreground/80">
                      Arnold-Janssen-Straße 2A<br />
                      46397 Bocholt<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Website</p>
                    <a href="https://www.aireichbar.de" className="text-primary hover:underline">
                      www.aireichbar.de
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <div className="grid sm:grid-cols-2 gap-6">
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

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefon</p>
                    <a href="tel:+491567975199" className="text-primary hover:underline">
                      +49 1567 975199
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Vertreten durch */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vertreten durch</h2>
              <p className="text-foreground/80">
                Christian Schubert (Inhaber)
              </p>
            </section>

            {/* Umsatzsteuer-ID */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Umsatzsteuer-ID</h2>
              <p className="text-foreground/80">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                <em className="text-muted-foreground">wird bei Bedarf ergänzt</em>
              </p>
            </section>

            {/* Berufsbezeichnung und berufsrechtliche Regelungen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Berufsbezeichnung</h2>
              <p className="text-foreground/80">
                Dienstleistungen im Bereich Webdesign und digitale Kommunikation
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <address className="not-italic text-foreground/80">
                Christian Schubert<br />
                Arnold-Janssen-Straße 2A<br />
                46397 Bocholt
              </address>
            </section>

            {/* Streitschlichtung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Streitschlichtung</h2>
              <p className="text-foreground/80 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-foreground/80">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
              <p className="text-foreground/80 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-foreground/80">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Links</h2>
              <p className="text-foreground/80 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-foreground/80">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
              <p className="text-foreground/80 mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="text-foreground/80">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
