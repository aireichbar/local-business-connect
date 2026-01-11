import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Datenschutz = () => {
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Einleitung</h2>
              <p className="mb-4">
                Der Schutz Ihrer persönlichen Daten hat höchste Priorität. Diese Datenschutzerklärung erläutert die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten (im Folgenden „Daten" genannt) in Zusammenhang mit dem Onlineangebot. Dies umfasst die zugehörige Website, Funktionen und Inhalte sowie die externen Onlinepräsenzen, wie beispielsweise die Social-Media-Profile (im Folgenden zusammengefasst als „Onlineangebot"). Ihre personenbezogenen Daten werden vertraulich behandelt und es wird strikt den gesetzlichen Datenschutzvorschriften sowie den Bestimmungen dieser Datenschutzerklärung entsprochen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Diese Datenschutzerklärung gibt Ihnen einen umfassenden Überblick darüber, was mit Ihren personenbezogenen Daten geschieht, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Informationen, die dazu genutzt werden können, Sie persönlich zu identifizieren. Detaillierte Informationen zum Datenschutz entnehmen Sie bitte dieser vollständigen Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Verantwortliche Stelle</h3>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten des Verantwortlichen finden Sie im Abschnitt „Verantwortlicher" in dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Erhebung Ihrer Daten</h3>
              <p className="mb-4">
                Personenbezogene Daten werden zum einen dadurch erhoben, dass Sie diese aktiv mitteilen, z.B. durch das Ausfüllen eines Kontaktformulars. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch die IT-Systeme des Verantwortlichen erfasst. Hierbei handelt es sich vor allem um technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Verwendung Ihrer Daten</h3>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um die fehlerfreie Bereitstellung der Website sicherzustellen. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, um das Angebot zu optimieren und auf Ihre Bedürfnisse anzupassen.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Datenübermittlung an externe Stellen</h3>
              <p className="mb-4">
                Im Rahmen der Geschäftstätigkeit des Verantwortlichen kann es erforderlich sein, personenbezogene Daten an externe Stellen zu übermitteln. Diese Übermittlung erfolgt ausschließlich unter bestimmten Bedingungen: wenn die Weitergabe zur Erfüllung eines Vertrags notwendig ist, wenn eine gesetzliche Verpflichtung besteht, beispielsweise an Steuerbehörden, wenn ein berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO vorliegt, oder wenn eine andere rechtliche Grundlage die Datenübermittlung erlaubt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Widerruf von Einwilligungen zur Datenverarbeitung</h3>
              <p className="mb-4">
                Bestimmte Datenverarbeitungen können nur mit Ihrer ausdrücklichen Einwilligung erfolgen. Diese Einwilligung kann jederzeit widerrufen werden. Die Rechtmäßigkeit der bis zum Zeitpunkt des Widerrufs erfolgten Datenverarbeitung bleibt durch den Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Widerspruchsrecht bei spezifischen Datenverarbeitungen und Werbemaßnahmen (Art. 21 DSGVO)</h3>
              <p className="mb-4">
                Erfolgt die Verarbeitung Ihrer personenbezogenen Daten auf der Basis von Art. 6 Abs. 1 lit. e oder f DSGVO, haben Sie das Recht, jederzeit gegen diese Verarbeitung Widerspruch einzulegen, sofern Sie Gründe haben, die sich aus Ihrer besonderen Situation ergeben. Dies betrifft auch das Profiling, das auf diesen Bestimmungen basiert.
              </p>
              <p className="mb-4">
                Werden Ihre personenbezogenen Daten für Zwecke der Direktwerbung genutzt, steht Ihnen das Recht zu, jederzeit Widerspruch gegen diese Verarbeitung einzulegen (Widerspruch gemäß Art. 21 Abs. 2 DSGVO).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rechte gemäß Datenschutz-Grundverordnung</h3>
              <p className="mb-4">
                Sie haben das Recht, bei Verstößen gegen die DSGVO eine Beschwerde bei einer zuständigen Aufsichtsbehörde einzureichen. Personenbezogene Daten, die auf Basis einer Einwilligung oder zur Erfüllung eines Vertrags automatisiert verarbeitet werden, können in einem strukturierten, gängigen und maschinenlesbaren Format angefordert werden.
              </p>
              <p className="mb-4">
                Jede betroffene Person hat das Recht, unentgeltlich Auskunft über ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger sowie den Zweck der Datenverarbeitung zu erhalten. Darüber hinaus besteht ein Recht auf Berichtigung oder Löschung dieser Daten, sofern gesetzliche Bestimmungen dies zulassen.
              </p>
            </section>

            {/* 2. Verantwortlicher */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Verantwortlicher</h2>
              <p className="mb-4">
                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <address className="not-italic bg-muted/50 p-4 rounded-lg mb-4">
                <strong>Firma:</strong> Aireichbar Einzelunternehmen<br />
                <strong>Vertreten durch:</strong> Christian Schubert<br />
                <strong>Adresse:</strong> Arnold-Janssen-Straße 2A, 46397 Bocholt<br />
                <strong>Website:</strong> www.aireichbar.de<br />
                <strong>E-Mail:</strong> info@aireichbar.de<br />
                <strong>Telefon:</strong> +49 1567 975199
              </address>
            </section>

            {/* 3. Auftragsverarbeiter */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Auftragsverarbeiter</h2>
              <p className="mb-4">
                Die Zusammenarbeit erfolgt mit verschiedenen Auftragsverarbeitern, die im Auftrag Daten verarbeiten. Diese Dienstleister sind vertraglich verpflichtet, die Daten vertraulich zu behandeln und ausschließlich im Rahmen der jeweiligen Dienstleistung zu nutzen. Zudem gibt es Fälle, in denen die Verantwortung für die Datenverarbeitung gemeinsam mit anderen Stellen getragen wird. In solchen Fällen werden die Verantwortlichkeiten transparent geregelt und dokumentiert, um die Einhaltung der Datenschutzanforderungen sicherzustellen.
              </p>
            </section>

            {/* 4. Begriffsbestimmungen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Begriffsbestimmungen</h2>
              <p className="mb-4">
                Um die Transparenz dieser Datenschutzerklärung zu gewährleisten und sie für jedermann verständlich zu machen, werden in dieser Erklärung vorrangig Begriffe verwendet, die auch in der Datenschutz-Grundverordnung (DSGVO) definiert sind. Die vollständigen gesetzlichen Definitionen finden sich in Art. 4 DSGVO.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Personenbezogene Daten:</strong> Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</li>
                <li><strong>Verarbeitung:</strong> Jede Handlung im Zusammenhang mit personenbezogenen Daten (Erheben, Erfassen, Organisieren, Speichern, etc.).</li>
                <li><strong>Verantwortlicher:</strong> Die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung entscheidet.</li>
                <li><strong>Auftragsverarbeiter:</strong> Eine Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</li>
                <li><strong>Einwilligung:</strong> Jede freiwillig, für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung.</li>
              </ul>
            </section>

            {/* 5. Hosting */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Hosting</h2>
              <p className="mb-4">
                Diese Website wird auf den Servern eines externen Dienstleisters gehostet, um Ihnen eine zuverlässige und sichere Nutzung dieses Onlineangebots zu gewährleisten.
              </p>
              <p className="mb-4">
                Die Datenverarbeitung durch den Hosting-Anbieter erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO, da der Verantwortliche ein berechtigtes Interesse daran hat, eine stabile und sichere Website bereitzustellen.
              </p>
              <p className="mb-4">
                <strong>Der Hosting-Anbieter ist:</strong><br />
                1&amp;1 Ionos<br />
                Elgendorfer Str. 57, 56410 Montabaur, Deutschland
              </p>
              <p className="mb-4">
                Details zur Datenverarbeitung und zum Datenschutz können Sie der Datenschutzerklärung des Hosting-Anbieters entnehmen: <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>
              </p>
            </section>

            {/* 6. Rechtliche Grundlagen der Datenverarbeitung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Rechtliche Grundlagen der Datenverarbeitung</h2>
              <p className="mb-4">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO) sowie weiterer relevanter gesetzlicher Bestimmungen. Je nach Zweck der Datenverarbeitung kommen unterschiedliche Rechtsgrundlagen zur Anwendung:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung des Nutzers</li>
                <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen</li>
                <li><strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Erfüllung rechtlicher Verpflichtungen</li>
                <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Wahrung berechtigter Interessen</li>
              </ul>
            </section>

            {/* 7. Datenweitergabe an Drittstaaten */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Datenweitergabe an unsichere Drittstaaten</h2>
              <p className="mb-4">
                Falls auf dieser Website Tools von Unternehmen eingesetzt werden, die ihren Sitz in datenschutzrechtlich unsicheren Drittstaaten haben, oder US-Tools verwendet werden, deren Anbieter nicht nach dem EU-US Data Privacy Framework (DPF) zertifiziert sind, können Ihre personenbezogenen Daten in diese Staaten übertragen und dort verarbeitet werden.
              </p>
              <p className="mb-4">
                Es wird darauf hingewiesen, dass in datenschutzrechtlich unsicheren Drittstaaten kein Datenschutzniveau gewährleistet werden kann, das dem der EU entspricht.
              </p>
            </section>

            {/* 8. Speicherdauer */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Speicherdauer</h2>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben personenbezogene Daten beim Verantwortlichen, bis der Zweck für die Datenverarbeitung entfällt. Wenn ein berechtigtes Löschersuchen geltend gemacht wird oder eine Einwilligung zur Datenverarbeitung widerrufen wird, werden die betreffenden Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe für die Speicherung der personenbezogenen Daten vorliegen.
              </p>
            </section>

            {/* 9. Sicherheitsmaßnahmen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Sicherheitsmaßnahmen und Datenminimierung</h2>
              <p className="mb-4">
                Es werden umfassende technische und organisatorische Maßnahmen ergriffen, um Ihre personenbezogenen Daten wirksam vor zufälliger oder unrechtmäßiger Zerstörung, Verlust, Veränderung oder unbefugter Offenlegung bzw. unbefugtem Zugriff zu schützen. Dabei wird darauf geachtet, dass ausschließlich die für den jeweiligen Zweck unbedingt erforderlichen Daten erhoben und verarbeitet werden.
              </p>
            </section>

            {/* 10. SSL/TLS-Verschlüsselung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. SSL/TLS-Verschlüsselung</h2>
              <p className="mb-4">
                Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, werden dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL oder TLS) über HTTPS verwendet. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            {/* 11. Log-Files */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Speicherung von Nutzerinformationen in Log-Files</h2>
              <p className="mb-4">
                Bei jedem Zugriff auf die Website werden automatisch Informationen allgemeiner Natur erfasst, die Ihr Browser an den Server übermittelt. Diese Informationen umfassen:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von welcher der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und User Agent String</li>
                <li>Betriebssystem</li>
                <li>Name Ihres Access-Providers</li>
                <li>HTTP-Statuscode</li>
              </ul>
              <p className="mb-4">
                Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* 12. Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Cookies</h2>
              <p className="mb-4">
                Diese Website verwendet Cookies. Dabei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie die Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
              </p>
              <p className="mb-4">
                Der Einsatz von Cookies dient dazu, die Nutzung des Angebots für Sie angenehmer zu gestalten. Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden.
              </p>
            </section>

            {/* 13. Cookie Consent Banner */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Cookie Consent Banner</h2>
              <p className="mb-4">
                Diese Website verwendet ein Cookie Consent Banner, um Ihre Einwilligungen zur Nutzung von Cookies zu verwalten. Das Cookie Consent Banner setzt ein technisch notwendiges Cookie, um Ihre Cookie-Einstellungen zu speichern. Dieses Cookie verarbeitet keine personenbezogenen Daten.
              </p>
              <p className="mb-4">
                Die Datenverarbeitung durch das Cookie Consent Banner erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO. Ihre Einstellungen können Sie jederzeit in den Cookie-Einstellungen dieser Website ändern.
              </p>
            </section>

            {/* 14. Kontaktformular */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Nutzung des Kontaktformulars</h2>
              <p className="mb-4">
                Bei Fragen jeglicher Art besteht die Möglichkeit, über ein auf dieser Website bereitgestelltes Formular Kontakt mit dem Verantwortlichen aufzunehmen. Um zu wissen, von wem die Anfrage stammt und um diese beantworten zu können, ist die Angabe folgender Daten erforderlich: Name, Unternehmen, E-Mail, Telefon.
              </p>
              <p className="mb-4">
                Die Datenverarbeitung zum Zwecke der Kontaktaufnahme erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage der freiwillig erteilten Einwilligung. Die erhobenen personenbezogenen Daten werden nach Erledigung der gestellten Anfrage regelmäßig gelöscht.
              </p>
            </section>

            {/* 15. Anfragen per E-Mail oder Telefon */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Anfragen per E-Mail oder Telefon</h2>
              <p className="mb-4">
                Es besteht die Möglichkeit, Anfragen per E-Mail oder telefonisch an den Verantwortlichen zu richten. Die dabei übermittelten personenbezogenen Daten werden ausschließlich zum Zwecke der Bearbeitung der Anfrage und etwaiger Anschlussfragen verarbeitet und gespeichert.
              </p>
              <p className="mb-4">
                Die Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            {/* 16. Anfragen per WhatsApp */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Anfragen per WhatsApp</h2>
              <p className="mb-4">
                Es besteht die Möglichkeit, Anfragen per WhatsApp an den Verantwortlichen zu richten. Bitte beachten Sie, dass WhatsApp die übermittelten Daten auf Servern in den USA speichert. Daher sollten keine sensiblen Informationen über diesen Kanal übermittelt werden.
              </p>
              <p className="mb-4">
                Zusätzliche Informationen zur Verarbeitung Ihrer personenbezogenen Daten durch WhatsApp finden Sie in deren Datenschutzerklärung unter: <a href="https://www.whatsapp.com/legal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.whatsapp.com/legal/</a>
              </p>
            </section>

            {/* 17. Werbung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Untersagung der Zusendung von Werbe-E-Mails</h2>
              <p className="mb-4">
                Die Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit untersagt. Der Betreiber dieser Website behält sich ausdrücklich rechtliche Schritte vor, falls es zu Verstößen kommt.
              </p>
            </section>

            {/* 18. Analyse-Tools */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Verwendung von Analyse- und Tracking-Tools</h2>
              <p className="mb-4">
                Es kommen Analyse- und Tracking-Tools zum Einsatz, um eine bedarfsgerechte Gestaltung und kontinuierliche Optimierung dieser Website zu gewährleisten.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">IONOS WebAnalytics</h3>
              <p className="mb-4">
                Es wird IONOS WebAnalytics verwendet, ein Webanalysedienst der 1&amp;1 IONOS SE. Laut IONOS erfolgt die Datenerhebung vollständig anonymisiert, sodass keine Rückschlüsse auf einzelne Personen möglich sind. Cookies werden von IONOS WebAnalytics nicht gespeichert.
              </p>
              <p className="mb-4">
                Weitere Informationen: <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>
              </p>
            </section>

            {/* 19. Kunden- und Vertragsdaten */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">19. Verarbeitung von Kunden- und Vertragsdaten</h2>
              <p className="mb-4">
                Personenbezogene Kunden- und Vertragsdaten werden zur Begründung, inhaltlichen Ausgestaltung und Änderung der Vertragsbeziehungen erhoben, verarbeitet und genutzt. Dazu können Name, Adresse, E-Mail-Adresse und Telefonnummer gehören.
              </p>
              <p className="mb-4">
                Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen.
              </p>
            </section>

            {/* 20. Verträge über Dienstleistungen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">20. Abschluss von Verträgen über Dienstleistungen oder digitale Inhalte</h2>
              <p className="mb-4">
                Beim Abschluss von Verträgen über Dienstleistungen oder digitale Inhalte erhebt und verarbeitet der Verantwortliche Ihre personenbezogenen Daten, um die vertraglichen Verpflichtungen zu erfüllen. Diese Daten umfassen insbesondere Ihre Kontaktinformationen wie Name, Adresse, E-Mail-Adresse sowie relevante Informationen zur Nutzung der Dienstleistungen.
              </p>
              <p className="mb-4">
                Die erhobenen Daten werden ausschließlich für die Durchführung und Erfüllung der Verträge genutzt und nach Abschluss des Vertragsverhältnisses sowie Ablauf etwaiger gesetzlicher Aufbewahrungsfristen gelöscht.
              </p>
            </section>

            {/* 21. Digitaler Empfang */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">21. Digitaler Empfang</h2>
              <p className="mb-4">
                Diese Website verwendet einen Digitalen Empfang, um Ihnen erweiterte Funktionalitäten und personalisierte Erlebnisse zu bieten. Dieses System nutzt moderne Technologie, um komplexe Aufgaben zu automatisieren, Analysen durchzuführen und mit Benutzern zu interagieren.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ChatGPT</h3>
              <p className="mb-4">
                Es wird ChatGPT genutzt, um automatisierte Interaktionen auf der Website zu ermöglichen. ChatGPT ist ein Dienst der OpenAI, 3180 18th Street, San Francisco, CA 94110, USA.
              </p>
              <p className="mb-4">
                Weitere Informationen zur Datenverarbeitung durch ChatGPT finden Sie in der Datenschutzerklärung von OpenAI: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://openai.com/privacy</a>
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

export default Datenschutz;
