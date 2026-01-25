import { Check, Phone, MessageCircle, Mail, FileText, Database, Shield } from "lucide-react";

const DigitalReceptionInfo = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Was beinhaltet der Digitale Empfang?
            </h4>
            <p className="text-muted-foreground text-sm">
              Eine vollständige Kommunikationslösung für Ihren Betrieb – automatisiert und rund um die Uhr verfügbar.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-background rounded-lg p-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground">Telefonie</span>
          </div>
          <div className="flex items-center gap-3 bg-background rounded-lg p-3">
            <MessageCircle className="w-5 h-5 text-success" />
            <span className="text-sm text-foreground">WhatsApp</span>
          </div>
          <div className="flex items-center gap-3 bg-background rounded-lg p-3">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-sm text-foreground">E-Mail</span>
          </div>
          <div className="flex items-center gap-3 bg-background rounded-lg p-3">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground">Kontaktformular</span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Auch für bestehende Websites:</strong> Der Digitale Empfang kann problemlos in Ihre bereits vorhandene Website integriert werden.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Database className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Ihre Daten gehören Ihnen:</strong> Sämtliche erfassten Kundendaten verbleiben ausschließlich bei Ihnen – volle Kontrolle, volle Transparenz.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">DSGVO-konform:</strong> Alle Pakete mit monatlicher Gebühr erfüllen die Anforderungen der Datenschutz-Grundverordnung.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalReceptionInfo;
