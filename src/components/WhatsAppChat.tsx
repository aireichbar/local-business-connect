import { Check, CheckCheck } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  
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

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Reset animation after all messages are shown
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <div className="w-[320px] h-[580px] bg-[#0b141a] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-[#1f2c34] relative">
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0b141a] rounded-b-2xl z-10" />
      
      {/* WhatsApp Header */}
      <div className="bg-[#1f2c34] px-4 py-3 pt-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
          <span className="text-white text-sm font-bold">FB</span>
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Friseur Bocholt</p>
          <p className="text-[#25D366] text-xs">online</p>
        </div>
      </div>

      {/* Chat Background */}
      <div 
        className="h-[calc(100%-76px)] overflow-y-auto px-3 py-3 space-y-2"
        style={{
          backgroundColor: "#0b141a",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {messages.slice(0, visibleMessages).map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"} animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 shadow-md ${
                msg.type === "sent"
                  ? "bg-[#005c4b] text-white rounded-br-sm"
                  : "bg-[#1f2c34] text-white rounded-bl-sm"
              }`}
            >
              <p className="text-[12px] leading-relaxed">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
                {msg.type === "sent" && (
                  msg.read ? (
                    <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                  ) : (
                    <Check className="w-3.5 h-3.5 text-[#8696a0]" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {visibleMessages < messages.length && visibleMessages > 0 && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-[#1f2c34] rounded-lg px-4 py-2 rounded-bl-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input bar */}
      <div className="absolute bottom-4 left-3 right-3 bg-[#1f2c34] rounded-full px-4 py-2 flex items-center gap-2">
        <span className="text-[#8696a0] text-xs flex-1">Nachricht</span>
        <div className="w-8 h-8 bg-[#00a884] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
