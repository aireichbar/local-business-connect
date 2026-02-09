import CityPageTemplate from "@/components/branch/CityPageTemplate";

const IsselburgPage = () => (
  <CityPageTemplate config={{
    city: "Isselburg",
    seoTitle: "Digitaler Empfang in Isselburg | aireichbar",
    seoDescription: "Erreichbarkeit für Isselburger Betriebe. Von Anholt bis Werth – digitaler Empfang für die Region.",
    canonical: "https://www.aireichbar.de/isselburg",
    h1: "Digitaler Empfang für Isselburg und Umgebung",
    intro: "Isselburg mit seinen Ortsteilen Anholt und Werth liegt an der niederländischen Grenze. Der digitale Empfang sorgt dafür, dass Ihre Kunden Sie immer erreichen – egal wo Sie gerade arbeiten.",
    districts: ["Isselburg Zentrum", "Anholt", "Werth", "Heelden", "Vehlingen"],
    neighborCities: ["Bocholt", "Rhede", "Borken"],
  }} />
);

export default IsselburgPage;
