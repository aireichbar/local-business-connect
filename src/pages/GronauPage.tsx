import CityPageTemplate from "@/components/branch/CityPageTemplate";

const GronauPage = () => (
  <CityPageTemplate config={{
    city: "Gronau",
    seoTitle: "KI-Empfang für Betriebe in Gronau | aireichbar",
    seoDescription: "Nie wieder Anrufe verpassen. Digitaler Empfang für Handwerk und Dienstleister in Gronau. Grenzregion NL/DE.",
    canonical: "https://www.aireichbar.de/gronau",
    h1: "Digitaler Empfang für Gronau und die Grenzregion",
    intro: "Gronau liegt direkt an der niederländischen Grenze und profitiert von einem vielfältigen Wirtschaftsumfeld. Der digitale Empfang unterstützt Ihre mehrsprachige Kundenkommunikation – auch auf Niederländisch.",
    districts: ["Gronau Zentrum", "Epe", "Ochtrup-Nähe"],
    neighborCities: ["Ahaus", "Vreden", "Stadtlohn"],
    specialNote: "Grenzregion NL/DE – mehrsprachige Kommunikation möglich.",
  }} />
);

export default GronauPage;
