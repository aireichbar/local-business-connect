import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung – aireichbar";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Datenschutzerklärung von aireichbar – Informationen zur Datenverarbeitung gemäß DSGVO.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.aireichbar.de/datenschutz");
    }
    
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Datenschutz – aireichbar");
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://www.aireichbar.de/datenschutz");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-5 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            {/* 1. Einleitung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Einleitung und Übersicht</h2>
              <p className="mb-4">Der Schutz Ihrer persönlichen Daten hat für uns höchste Priorität. Diese Datenschutzerklärung erläutert die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten im Rahmen unseres Digitalen Empfangs und unserer Website.</p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Verantwortliche Stelle</h3>
              <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im Abschnitt „Verantwortlicher".</p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Widerruf von Einwilligungen</h3>
              <p className="mb-4">Bestimmte Datenverarbeitungen können nur mit Ihrer ausdrücklichen Einwilligung erfolgen. Diese Einwilligung kann jederzeit formlos per E-Mail an info@aireichbar.de widerrufen werden.</p>
            </section>

            {/* 2. Verantwortlicher */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Verantwortlicher</h2>
              <address className="not-italic bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Firma:</strong> aireichbar Einzelunternehmen<br />
                <strong>Inhaber:</strong> Christian Schubert<br />
                <strong>Adresse:</strong> Arnold-Janssen-Straße 2A, 46397 Bocholt, Deutschland<br />
                <strong>Telefon:</strong> +49 175 5318701<br />
                <strong>E-Mail:</strong> info@aireichbar.de<br />
                <strong>Website:</strong> www.aireichbar.de
              </address>
            </section>

            {/* 3. Auftragsverarbeiter */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Auftragsverarbeiter</h2>
              <p className="mb-4">Wir arbeiten mit folgenden Auftragsverarbeitern zusammen, die in unserem Auftrag personenbezogene Daten verarbeiten:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Hosting und Infrastruktur</h3>
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <strong>1&amp;1 IONOS SE</strong><br />
                Elgendorfer Str. 57, 56410 Montabaur, Deutschland<br />
                <em>Zweck:</em> Hosting der Website, Datenbank, Automatisierungsserver<br />
                <em>Serverstandort:</em> Deutschland<br />
                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung</a>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Telefon-KI (Voice)</h3>
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <strong>Placetel – Gamma Communications GmbH</strong><br />
                <em>Zweck:</em> KI-gestützte Telefonannahme, Sprachverarbeitung, automatische Terminvereinbarung<br />
                <em>Verarbeitete Daten:</em> Telefonnummer, Sprachaufnahmen, Transkriptionen<br />
                <em>Serverstandort:</em> EU-Rechenzentren<br />
                <em>Rechtsgrundlage:</em> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
                <a href="https://www.placetel.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung</a>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.3 WhatsApp Business API</h3>
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <strong>Meta Platforms Ireland Limited</strong><br />
                4 Grand Canal Square, Dublin 2, Irland<br />
                <em>Zweck:</em> Kommunikation über WhatsApp Business API für Kundenanfragen und Terminbuchungen<br />
                <em>Verarbeitete Daten:</em> Telefonnummer, Nachrichteninhalte, Zeitstempel<br />
                <em>Hinweis:</em> Es erfolgt eine Datenübermittlung in die USA. Meta ist unter dem EU-US Data Privacy Framework zertifiziert.<br />
                <em>Rechtsgrundlage:</em> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung</a>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.4 KI-Textverarbeitung</h3>
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <strong>mittwald GmbH &amp; Co. KG</strong><br />
                Königsberger Str. 4-6, 32339 Espelkamp, Deutschland<br />
                <em>Zweck:</em> KI-gestützte Verarbeitung von Freitexteingaben zur Dienstleistungserkennung (Fallback-System)<br />
                <em>Serverstandort:</em> Deutschland<br />
                <em>Rechtsgrundlage:</em> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                <a href="https://www.mittwald.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung</a>
              </div>
            </section>

            {/* 4. Begriffsbestimmungen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Begriffsbestimmungen</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Personenbezogene Daten:</strong> Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</li>
                <li><strong>Verarbeitung:</strong> Jede Handlung im Zusammenhang mit personenbezogenen Daten.</li>
                <li><strong>Verantwortlicher:</strong> Die natürliche oder juristische Person, die über die Zwecke der Verarbeitung entscheidet.</li>
                <li><strong>Auftragsverarbeiter:</strong> Natürliche oder juristische Person, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</li>
              </ul>
            </section>

            {/* 5. Rechtsgrundlagen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Rechtsgrundlagen der Datenverarbeitung</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung des Nutzers</li>
                <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen</li>
                <li><strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Erfüllung rechtlicher Verpflichtungen</li>
                <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Wahrung berechtigter Interessen</li>
              </ul>
            </section>

            {/* 6. Datenerfassung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Datenerfassung auf der Website</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Server-Log-Files</h3>
              <p className="mb-4">Bei jedem Zugriff auf unsere Website werden automatisch Informationen erfasst und in Server-Log-Files gespeichert: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem.</p>
              <p className="mb-4"><strong>Speicherdauer:</strong> 7 Tage</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 Cookies</h3>
              <p className="mb-4">Unsere Website verwendet technisch notwendige Cookies für die Funktionalität der Anwendung. Diese Cookies werden für die Sitzungsverwaltung benötigt und nach Schließen des Browsers gelöscht.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.3 Kontaktformular</h3>
              <p className="mb-4">Bei Nutzung des Kontaktformulars werden Ihre Angaben (Name, E-Mail, Nachricht) zur Bearbeitung der Anfrage gespeichert. Die Daten werden nach vollständiger Bearbeitung und Ablauf etwaiger Aufbewahrungsfristen gelöscht.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.4 SSL/TLS-Verschlüsselung</h3>
              <p className="mb-4">Diese Website nutzt aus Sicherheitsgründen SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.</p>
            </section>

            {/* 7. Digitaler Empfang */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Digitaler Empfang – Unser Kernprodukt</h2>
              <p className="mb-4">Unser Digitaler Empfang ermöglicht die automatisierte Bearbeitung von Kundenanfragen über mehrere Kommunikationskanäle.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.1 Kommunikationskanäle</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Telefon-KI:</strong> Automatische Anrufannahme und Terminvereinbarung über Placetel AI</li>
                <li><strong>WhatsApp:</strong> Kommunikation über WhatsApp Business API (+49 175 536 6559)</li>
                <li><strong>E-Mail:</strong> Verarbeitung eingehender E-Mails</li>
                <li><strong>Website-Chatbot:</strong> Interaktiver Chat auf der Website</li>
                <li><strong>Kontaktformular:</strong> Webbasierte Anfragen</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.2 Verarbeitete Daten</h3>
              <p className="mb-4">Folgende Daten werden im Rahmen des Digitalen Empfangs verarbeitet:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Kontaktdaten: Name, Telefonnummer, E-Mail-Adresse</li>
                <li>Kommunikationsinhalte: Nachrichten, Sprachaufnahmen (bei Telefon)</li>
                <li>Terminwünsche: Gewünschte Dienstleistung, Terminpräferenzen</li>
                <li>Technische Daten: Zeitstempel, Kanal der Anfrage</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.3 Automatisierte Entscheidungsfindung (Art. 22 DSGVO)</h3>
              <p className="mb-4">Unser System trifft automatisierte Entscheidungen zur Bearbeitung von Anfragen:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Intent-Klassifizierung:</strong> Automatische Erkennung ob Termin, Rückruf oder Information gewünscht wird</li>
                <li><strong>Terminvorschläge:</strong> Automatische Ermittlung freier Termine basierend auf Kalenderverfügbarkeit</li>
                <li><strong>Dienstleistungserkennung:</strong> Automatische Zuordnung zur passenden Dienstleistung</li>
              </ul>
              <p className="mb-4">Diese automatisierten Entscheidungen dienen ausschließlich der effizienten Terminvereinbarung und haben keine rechtliche Wirkung. Sie können jederzeit eine manuelle Prüfung verlangen, indem Sie uns kontaktieren.</p>
            </section>

            {/* 8. Terminbuchung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Terminbuchung und Kalenderdaten</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.1 Erhobene Daten</h3>
              <p className="mb-4">Bei der Terminbuchung werden folgende Daten verarbeitet:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Name und Kontaktdaten</li>
                <li>Gewünschte Dienstleistung</li>
                <li>Terminzeitpunkt und -ort (beim Dienstleister oder vor Ort beim Kunden)</li>
                <li>Ergänzende Anmerkungen</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.2 Google Calendar Integration</h3>
              <p className="mb-4">Gebuchte Termine werden in den Google Calendar des jeweiligen Dienstleisters übertragen.</p>
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <strong>Google Ireland Limited</strong><br />
                Gordon House, Barrow Street, Dublin 4, Irland<br />
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung</a>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.3 Speicherdauer</h3>
              <p className="mb-4">Terminbuchungsdaten werden <strong>90 Tage nach dem Termin</strong> automatisch gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
            </section>

            {/* 9. B2B */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Datenverarbeitung für Geschäftskunden (B2B)</h2>
              <p className="mb-4">aireichbar agiert als <strong>Auftragsverarbeiter</strong> im Sinne von Art. 28 DSGVO für unsere Geschäftskunden (Mandanten). Das bedeutet:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Wir verarbeiten Endkundendaten im Auftrag des jeweiligen Dienstleisters (z.B. Handwerksbetrieb, Friseursalon)</li>
                <li>Die Endkundendaten werden an den beauftragenden Mandanten übermittelt</li>
                <li>Es besteht ein Auftragsverarbeitungsvertrag (AVV) zwischen aireichbar und dem Mandanten</li>
                <li>Der Mandant ist datenschutzrechtlich Verantwortlicher für die Verarbeitung seiner Kundendaten</li>
              </ul>
            </section>

            {/* 10. Dashboard */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Mandanten-Dashboard</h2>
              <p className="mb-4">Für unsere Geschäftskunden stellen wir ein Dashboard unter www.aireichbar.de/kompass bereit.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.1 Verarbeitete Daten</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Login-Daten: Benutzername, gehashtes Passwort</li>
                <li>Einstellungen: Öffnungszeiten, Dienstleistungen, Kanaleinstellungen</li>
                <li>Statistiken: Anonymisierte Nutzungsdaten, Buchungsübersichten</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.2 Speicherort und Sicherheit</h3>
              <p className="mb-4">Alle Dashboard-Daten werden verschlüsselt auf Servern in Deutschland (IONOS) gespeichert.</p>
            </section>

            {/* 11. Speicherfristen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Speicherfristen</h2>
              <p className="mb-4">Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Buchungsanfragen:</strong> 90 Tage nach Termin</li>
                <li><strong>Konversationen (WhatsApp/Chat):</strong> 30 Tage</li>
                <li><strong>Server-Log-Files:</strong> 7 Tage</li>
                <li><strong>Vertragsdaten (B2B):</strong> 10 Jahre (steuerliche Aufbewahrungspflicht)</li>
                <li><strong>Dashboard-Daten:</strong> Während der Vertragslaufzeit, danach 30 Tage</li>
              </ul>
            </section>

            {/* 12. Analyse-Tools */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Analyse-Tools</h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">IONOS WebAnalytics</h3>
              <p className="mb-4">Wir verwenden IONOS WebAnalytics zur Analyse der Website-Nutzung. Laut IONOS erfolgt die Datenerhebung vollständig anonymisiert, sodass keine Rückschlüsse auf einzelne Personen möglich sind. Es werden keine Cookies gespeichert.</p>
              <p className="mb-4"><a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Weitere Informationen</a></p>
            </section>

            {/* 13. Externe Dienste */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Externe Dienste</h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Google Fonts</h3>
              <p className="mb-4">Diese Website nutzt Google Fonts zur einheitlichen Darstellung von Schriftarten. Die Fonts werden von Servern von Google Ireland Limited geladen. Dabei kann Ihre IP-Adresse an Google übermittelt werden.</p>
              <p className="mb-4"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung von Google</a></p>
            </section>

            {/* 14. Drittstaaten */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Datenweitergabe an Drittstaaten</h2>
              <p className="mb-4">Bei der Nutzung von WhatsApp und Google-Diensten können Daten in die USA übermittelt werden. Diese Unternehmen sind unter dem <strong>EU-US Data Privacy Framework</strong> zertifiziert, das ein angemessenes Datenschutzniveau gewährleistet.</p>
            </section>

            {/* 15. Ihre Rechte */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Ihre Rechte</h2>
              <p className="mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Auskunft über die verarbeiteten Daten</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Korrektur unrichtiger Daten</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Löschung Ihrer Daten</li>
                <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt Ihrer Daten in maschinenlesbarem Format</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung</li>
                <li><strong>Widerruf von Einwilligungen:</strong> Jederzeit mit Wirkung für die Zukunft</li>
              </ul>
              <p className="mb-4">Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter <a href="mailto:info@aireichbar.de" className="text-primary hover:underline">info@aireichbar.de</a>.</p>
            </section>

            {/* 16. Beschwerderecht */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Beschwerderecht</h2>
              <p className="mb-4">Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:</p>
              <address className="not-italic bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong><br />
                Kavalleriestraße 2-4<br />
                40213 Düsseldorf<br />
                <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ldi.nrw.de</a>
              </address>
            </section>

            {/* 17. Werbe-E-Mails */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Widerspruch gegen Werbe-E-Mails</h2>
              <p className="mb-4">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Wir behalten uns ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen vor.</p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">Stand: Februar 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
