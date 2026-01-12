import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  company?: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, message }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, E-Mail und Nachricht sind erforderlich." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "E-Mail-Service nicht konfiguriert." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email to the business
    const businessEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Aireichbar Kontaktformular <kontakt@aireichbar.de>",
        to: ["info@aireichbar.de"],
        reply_to: email,
        subject: `Neue Kontaktanfrage von ${name}${company ? ` (${company})` : ""}`,
        html: `
          <h2>Neue Kontaktanfrage über das Formular</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Unternehmen:</strong> ${company || "-"}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr />
          <h3>Nachricht:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            Diese Nachricht wurde über das Kontaktformular auf aireichbar.de gesendet.
          </p>
        `,
      }),
    });

    if (!businessEmailResponse.ok) {
      const errorData = await businessEmailResponse.json();
      console.error("Failed to send business email:", errorData);
      throw new Error(errorData.message || "Fehler beim Senden der E-Mail.");
    }

    console.log("Business email sent successfully");

    // Confirmation email to the sender
    const confirmationEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Aireichbar <kontakt@aireichbar.de>",
        to: [email],
        subject: "Wir haben Ihre Nachricht erhalten – Aireichbar",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a2e;">Vielen Dank für Ihre Nachricht, ${name}!</h2>
            <p>Wir haben Ihre Anfrage erhalten und melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Ihre Nachricht:</h3>
              <p style="white-space: pre-wrap; color: #333;">${message}</p>
            </div>
            
            <p>Bei dringenden Fragen können Sie uns auch direkt per E-Mail unter 
              <a href="mailto:info@aireichbar.de">info@aireichbar.de</a> erreichen.
            </p>
            
            <p>Mit freundlichen Grüßen,<br />
            <strong>Ihr Aireichbar-Team</strong></p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              Aireichbar – Digitale Lösungen für lokale Unternehmen<br />
              Kreis Borken, NRW
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationEmailResponse.ok) {
      const errorData = await confirmationEmailResponse.json();
      console.error("Failed to send confirmation email:", errorData);
      // Don't throw - the main email was sent, confirmation is secondary
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "E-Mail erfolgreich gesendet" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "E-Mail konnte nicht gesendet werden." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
