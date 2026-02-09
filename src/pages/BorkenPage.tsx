import CityPageTemplate from "@/components/branch/CityPageTemplate";

const BorkenPage = () => (
  <CityPageTemplate config={{
    city: "Borken",
    seoTitle: "Digitaler Empfang in Borken | aireichbar",
    seoDescription: "Automatische Erreichbarkeit für Betriebe in Borken. 24/7 erreichbar über Telefon, WhatsApp und E-Mail. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/borken",
    h1: "Digitaler Empfang für Betriebe in Borken",
    intro: "Als Kreisstadt und Sitz der Kreishandwerkerschaft ist Borken das wirtschaftliche Zentrum der Region. Über 40.000 Einwohner und eine starke Handwerkstradition prägen die Stadt – der digitale Empfang macht Ihre Betriebe noch stärker.",
    districts: ["Borken Zentrum", "Gemen", "Burlo", "Weseke", "Marbeck", "Grütlohn", "Nordvelen"],
    neighborCities: ["Bocholt", "Ahaus", "Stadtlohn", "Rhede"],
  }} />
);

export default BorkenPage;
