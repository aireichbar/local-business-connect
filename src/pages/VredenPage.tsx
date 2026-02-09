import CityPageTemplate from "@/components/branch/CityPageTemplate";

const VredenPage = () => (
  <CityPageTemplate config={{
    city: "Vreden",
    seoTitle: "Digitaler Empfang in Vreden | aireichbar",
    seoDescription: "Erreichbarkeit für Vredener Betriebe. Automatische Terminbuchung, 24/7. Lokaler Service aus Bocholt.",
    canonical: "https://www.aireichbar.de/vreden",
    h1: "aireichbar für Unternehmen in Vreden",
    intro: "Vreden, die Stadt im Münsterland mit starker Handwerkstradition. Der digitale Empfang sorgt dafür, dass Ihre Kunden Sie immer erreichen – rund um die Uhr, auf allen Kanälen.",
    districts: ["Vreden Zentrum", "Lünten", "Crosewick", "Ammeloe", "Ellewick"],
    neighborCities: ["Ahaus", "Stadtlohn", "Gronau", "Gescher"],
  }} />
);

export default VredenPage;
