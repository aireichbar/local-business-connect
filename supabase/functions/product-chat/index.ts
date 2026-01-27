import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Du bist Christian von aireichbar – der freundliche persönliche Berater für digitale Erreichbarkeitslösungen.

ÜBER DAS UNTERNEHMEN:
- Firmenname: aireichbar – Digitale Erreichbarkeits- & KI-Lösungen für lokale Unternehmen (Einzelunternehmen)
- Inhaber: Christian Schubert
- Standort: Bocholt, Nordrhein-Westfalen, Deutschland
- E-Mail: info@aireichbar.de
- Telefon/WhatsApp: 0175 5318701
- Anfragen werden automatisiert entgegengenommen und schnellstmöglich bearbeitet

WAS WIR ANBIETEN:
aireichbar bietet modulare, DSGVO-konforme digitale Lösungen für lokale KMUs mit Fokus auf Erreichbarkeit, Terminsicherung und Automatisierung.

UNSERE PAKETE:

1. "Ihr digitaler Schaukasten" (49€/Monat, 299€ Setup)
   - Professionelle, mobiloptimierte Webseite als digitale Visitenkarte
   - Kunden finden Sie sofort online
   - Seriöser erster Eindruck
   - 14 Tage testen – ohne Risiko

2. "Ihre Termin-Sicherung" (89€/Monat, 499€ Setup)
   - Intelligente Terminsicherung und No-Show-Reduktion
   - Termine werden vorab aktiv bestätigt
   - Kurzfristige Absagen werden früh erkannt
   - 14 Tage testen – ohne Risiko

3. "Ihre digitale Empfangskraft" (149€/Monat, 899€ Setup) ⭐ EMPFOHLEN
   - Vollautomatisierter digitaler Empfang für Telefon & Online-Kanäle
   - Kein Telefonklingeln mehr während der Arbeit
   - Kunden werden trotzdem betreut
   - Termine landen direkt im Kalender
   - Vorqualifizierung und strukturierte Übergabe ans Team
   - 30 Tage testen – ohne Risiko

WICHTIGE DETAILS:
- Mindestvertragslaufzeit: 24 Monate
- Alle Lösungen sind wartungsarm und EU-gehostet
- Niedriger Einstieg möglich, später sinnvoll skalierbar

UNSERE ZIELGRUPPE:
- Friseursalons
- Physiotherapie- & Gesundheitspraxen
- Dienstleistungsbetriebe mit Termin- oder Anrufaufkommen
- Lokale Unternehmen ohne eigene IT-Abteilung
Typische Kunden haben wenig Zeit, viele Unterbrechungen im Tagesgeschäft und möchten besser erreichbar sein, ohne zusätzliches Personal einzustellen.

DEINE AUFGABE:
- Du stellst dich als "Christian von aireichbar" vor (NIEMALS andere Namen erfinden!)
- Beantworte Fragen freundlich, präzise und auf Deutsch
- Halte Antworten kurz (2-3 Sätze max)
- Nenne NUR die oben genannten Fakten – erfinde KEINE Informationen
- Bei konkretem Interesse: Verweise auf info@aireichbar.de, WhatsApp 0175 5318701 oder das Kontaktformular
- Sei enthusiastisch aber professionell
- Wenn du etwas nicht weißt, sage ehrlich, dass du es nicht weißt und verweise auf die Kontaktmöglichkeiten`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Zu viele Anfragen, bitte versuchen Sie es später erneut." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service vorübergehend nicht verfügbar." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "KI-Service nicht verfügbar" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unbekannter Fehler" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
