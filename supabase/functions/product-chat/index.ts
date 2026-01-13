import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Du bist der freundliche KI-Assistent von Dialogify – einer innovativen Lösung für KI-gestützte Kundenkommunikation.

Über Dialogify:
- Dialogify ist ein KI-Assistent, der Anrufe, WhatsApp, E-Mails und Website-Chats automatisch beantwortet
- 24/7 erreichbar – nie wieder verpasste Anrufe oder Kundenanfragen
- Automatische Terminbuchung und Anfragenbearbeitung
- Perfekt für Handwerker, Ärzte, Friseure, Kfz-Werkstätten und andere Dienstleister
- Setup in wenigen Minuten, keine technischen Vorkenntnisse nötig
- Spricht natürlich und versteht auch komplexe Anfragen

Preise/Pakete:
- Starter: 99€/Monat – 1 Kanal, 100 Gespräche/Monat
- Professional: 199€/Monat – Alle Kanäle, 500 Gespräche/Monat (beliebteste Option)
- Enterprise: Individuell – Unbegrenzte Gespräche, eigene KI-Anpassungen

Vorteile:
- Spart durchschnittlich 15+ Stunden pro Woche
- Kein Umsatz mehr durch verpasste Anrufe verlieren
- Kunden erhalten sofortige Antworten – auch um 3 Uhr nachts
- Deutsche KI – DSGVO-konform

Deine Aufgabe:
- Beantworte Fragen freundlich, präzise und auf Deutsch
- Halte Antworten kurz (2-3 Sätze max)
- Bei konkretem Interesse: Verweise auf die kostenlose Beratung unter info@dialogify.de oder das Kontaktformular
- Sei enthusiastisch aber professionell`;

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
