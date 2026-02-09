import CityPageTemplate from "@/components/branch/CityPageTemplate";

const RhedePage = () => (
  <CityPageTemplate config={{
    city: "Rhede",
    seoTitle: "Digitaler Empfang in Rhede | aireichbar",
    seoDescription: "Automatische Erreichbarkeit für Betriebe in Rhede. Telefon, WhatsApp, E-Mail – rund um die Uhr. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/rhede",
    h1: "Digitaler Empfang für Rhede",
    intro: "Rhede verbindet ländliche Lebensqualität mit wirtschaftlicher Stärke. Der digitale Empfang sorgt dafür, dass Ihre Kunden Sie immer erreichen – egal ob auf der Baustelle, in der Praxis oder im Salon.",
    districts: ["Rhede Zentrum", "Krommert", "Vardingholt", "Büngern", "Krechting"],
    neighborCities: ["Bocholt", "Borken", "Isselburg"],
  }} />
);

export default RhedePage;
