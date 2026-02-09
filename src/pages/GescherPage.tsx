import CityPageTemplate from "@/components/branch/CityPageTemplate";

const GescherPage = () => (
  <CityPageTemplate config={{
    city: "Gescher",
    seoTitle: "Digitaler Empfang in Gescher | aireichbar",
    seoDescription: "Automatische Anrufannahme für Betriebe in Gescher. WhatsApp, Telefon, E-Mail – alles aus einer Hand.",
    canonical: "https://www.aireichbar.de/gescher",
    h1: "Digitale Erreichbarkeit für Gescher",
    intro: "Gescher, die Glockenstadt im Kreis Borken, ist Heimat vieler engagierter Handwerks- und Dienstleistungsbetriebe. Der digitale Empfang hilft Ihnen, keine Anfrage mehr zu verpassen.",
    districts: ["Gescher Zentrum", "Hochmoor", "Harwick", "Estern", "Tungerloh"],
    neighborCities: ["Stadtlohn", "Borken", "Vreden"],
    specialNote: "Die Glockenstadt Gescher – bekannt für Handwerkskunst.",
  }} />
);

export default GescherPage;
