import { Check, CheckCheck } from "lucide-react";

const WhatsAppChat = () => {
  const messages = [
    {
      type: "received",
      text: "Hallo, ich hätte eine Frage zu Ihren Öffnungszeiten. Haben Sie auch samstags geöffnet?",
      time: "14:23"
    },
    {
      type: "sent",
      text: "Guten Tag! Ja, wir haben samstags von 9:00 bis 14:00 Uhr für Sie geöffnet. Kann ich Ihnen sonst noch weiterhelfen?",
      time: "14:23",
      read: true
    },
    {
      type: "received",
      text: "Super, danke! Kann ich auch ohne Termin vorbeikommen?",
      time: "14:24"
    },
    {
      type: "sent",
      text: "Selbstverständlich! Für Beratungsgespräche empfehlen wir jedoch eine kurze Terminvereinbarung. Soll ich einen Termin für Sie reservieren?",
      time: "14:24",
      read: true
    },
    {
      type: "received",
      text: "Ja gerne, Samstag um 10 Uhr wäre perfekt.",
      time: "14:25"
    },
    {
      type: "sent",
      text: "Ich habe Samstag, 10:00 Uhr für Sie vorgemerkt. Sie erhalten gleich eine Bestätigung. Bis dann! 👋",
      time: "14:25",
      read: true
    }
  ];

  return (
    <div className="w-[280px] h-[500px] bg-[#0b141a] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#1f2c34]">
      {/* WhatsApp Header */}
      <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent text-xs font-bold">AI</span>
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Digitaler Empfang</p>
          <p className="text-[#8696a0] text-xs">online</p>
        </div>
      </div>

      {/* Chat Background */}
      <div 
        className="h-[calc(100%-52px)] overflow-y-auto px-3 py-2 space-y-2"
        style={{
          backgroundColor: "#0b141a",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-2.5 py-1.5 ${
                msg.type === "sent"
                  ? "bg-[#005c4b] text-white"
                  : "bg-[#1f2c34] text-white"
              }`}
            >
              <p className="text-[11px] leading-relaxed">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[9px] text-[#8696a0]">{msg.time}</span>
                {msg.type === "sent" && (
                  msg.read ? (
                    <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                  ) : (
                    <Check className="w-3 h-3 text-[#8696a0]" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppChat;
