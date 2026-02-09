import CityPageTemplate from "@/components/branch/CityPageTemplate";

const StadtlohnPage = () => (
  <CityPageTemplate config={{
    city: "Stadtlohn",
    seoTitle: "Digitaler Empfang in Stadtlohn | aireichbar",
    seoDescription: "Automatische Erreichbarkeit für Betriebe in Stadtlohn. Telefon, WhatsApp, E-Mail – rund um die Uhr. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/stadtlohn",
    h1: "Digitaler Empfang für Unternehmen in Stadtlohn",
    intro: "Stadtlohn ist bekannt für seine starke Handwerkerschaft und aktive Gewerbeszene. Der digitale Empfang sorgt dafür, dass kein Auftrag mehr verloren geht – auch wenn Sie gerade arbeiten.",
    districts: ["Stadtlohn Zentrum", "Hundewick", "Büren", "Hengeler", "Wendfeld"],
    neighborCities: ["Borken", "Ahaus", "Vreden", "Gescher"],
  }} />
);

export default StadtlohnPage;
