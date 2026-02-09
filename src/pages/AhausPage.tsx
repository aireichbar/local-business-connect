import CityPageTemplate from "@/components/branch/CityPageTemplate";

const AhausPage = () => (
  <CityPageTemplate config={{
    city: "Ahaus",
    seoTitle: "Digitaler Empfang in Ahaus | aireichbar",
    seoDescription: "Nie wieder Anrufe verpassen. Digitaler Empfang für Handwerk und Dienstleister in Ahaus. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/ahaus",
    h1: "Digitale Erreichbarkeit für Unternehmen in Ahaus",
    intro: "Ahaus liegt im Herzen des Münsterlandes und ist bekannt für seine aktive Gewerbeszene. Die Stadt mit ihren über 40.000 Einwohnern bietet ideale Bedingungen für Handwerk und Dienstleister – mit dem digitalen Empfang sind Sie immer erreichbar.",
    districts: ["Ahaus Zentrum", "Wüllen", "Ottenstein", "Alstätte", "Wessum", "Graes"],
    neighborCities: ["Borken", "Stadtlohn", "Gronau", "Vreden"],
  }} />
);

export default AhausPage;
