import { Check, CheckCheck } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  
  // Kürzere, freundlichere Nachrichten – kein Scrollen nötig
  const messages = [
    {
      type: "received",
      text: "Hallo! 👋 Haben Sie heute noch Termine frei?",
      time: "10:32"
    },
    {
      type: "sent",
      text: "Guten Tag! Ja, gerne – um 14:00 und 15:30 Uhr ist noch was frei. Was passt Ihnen besser? 😊",
      time: "10:32",
      read: true
    },
    {
      type: "received",
      text: "15:30 wäre super!",
      time: "10:33"
    },
    {
      type: "sent",
      text: "Perfekt, ich trage Sie für 15:30 Uhr ein. Bis später! 🙌",
      time: "10:33",
      read: true
    }
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      // Reset animation after all messages are shown
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <div className="h-full flex flex-col bg-[#e5ddd5]">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] px-4 py-3 pt-12 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
          <span className="text-white text-sm font-bold">FB</span>
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Friseur Bocholt</p>
          <p className="text-white/80 text-xs">online</p>
        </div>
      </div>

      {/* Chat Background - Light WhatsApp style */}
      <div 
        className="flex-1 px-3 py-4 space-y-3"
        style={{
          backgroundColor: "#e5ddd5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='whatsapp-bg' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 5c1.5 0 2.5 1 2.5 2.5S31.5 10 30 10s-2.5-1-2.5-2.5S28.5 5 30 5zm-15 10c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zm30 0c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zM15 30c1.5 0 2.5 1 2.5 2.5S16.5 35 15 35s-2.5-1-2.5-2.5S13.5 30 15 30zm30 0c1.5 0 2.5 1 2.5 2.5S46.5 35 45 35s-2.5-1-2.5-2.5S43.5 30 45 30zm-30 15c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zm30 0c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zm-15 5c1.5 0 2.5 1 2.5 2.5S31.5 55 30 55s-2.5-1-2.5-2.5S28.5 50 30 50z' fill='%23c9c4bc' fill-opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23whatsapp-bg)'/%3E%3C/svg%3E")`
        }}
      >
        {messages.slice(0, visibleMessages).map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"} animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 shadow-sm ${
                msg.type === "sent"
                  ? "bg-[#dcf8c6] text-[#303030] rounded-br-sm"
                  : "bg-white text-[#303030] rounded-bl-sm"
              }`}
            >
              <p className="text-[13px] leading-relaxed">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-[#667781]">{msg.time}</span>
                {msg.type === "sent" && (
                  msg.read ? (
                    <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                  ) : (
                    <Check className="w-3.5 h-3.5 text-[#667781]" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {visibleMessages < messages.length && visibleMessages > 0 && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white rounded-lg px-4 py-2 rounded-bl-sm shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#667781] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#667781] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-[#667781] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input bar - Light style */}
      <div className="px-3 pb-8 pt-2 bg-[#f0f0f0]">
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-[#667781] text-xs flex-1">Nachricht</span>
          <div className="w-8 h-8 bg-[#00a884] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;

