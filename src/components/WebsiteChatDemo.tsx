import { Send, X, Minus } from "lucide-react";
import { useState, useEffect } from "react";

const WebsiteChatDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  
  const messages = [
    {
      type: "bot",
      text: "Hallo! 👋 Willkommen bei Malermeister Weber. Wie kann ich Ihnen helfen?",
      time: "14:22"
    },
    {
      type: "user",
      text: "Ich brauche ein Angebot für Fassadenarbeiten.",
      time: "14:23"
    },
    {
      type: "bot",
      text: "Gerne! Um ein passendes Angebot zu erstellen, habe ich ein paar Fragen: Wie groß ist die Fassadenfläche ungefähr?",
      time: "14:23"
    },
    {
      type: "user",
      text: "Ca. 120 m² – Einfamilienhaus",
      time: "14:24"
    },
    {
      type: "bot",
      text: "Super! Ich leite Ihre Anfrage an unser Team weiter. Sie erhalten innerhalb von 24h ein Angebot per E-Mail. 📧",
      time: "14:24"
    }
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Browser-like Header */}
      <div className="bg-gray-100 px-3 py-2 pt-10 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-500 truncate">
            www.malermeister-weber.de
          </div>
        </div>
      </div>

      {/* Website Preview Background */}
      <div className="flex-1 relative bg-gradient-to-br from-orange-50 to-amber-50 p-3">
        {/* Fake website content */}
        <div className="mb-2">
          <div className="h-3 bg-orange-200/50 rounded w-2/3 mb-1" />
          <div className="h-2 bg-gray-200/50 rounded w-full mb-1" />
          <div className="h-2 bg-gray-200/50 rounded w-4/5" />
        </div>

        {/* Chat Widget */}
        <div className="absolute bottom-3 right-3 left-3 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">MW</span>
              </div>
              <div>
                <p className="text-white text-[11px] font-medium">Malermeister Weber</p>
                <p className="text-white/80 text-[9px]">Online • Antwortet sofort</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Minus className="w-3.5 h-3.5 text-white/70" />
              <X className="w-3.5 h-3.5 text-white/70" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[180px] overflow-hidden px-2 py-2 space-y-2 bg-gray-50">
            {messages.slice(0, visibleMessages).map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                style={{
                  animation: 'message-appear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                }}
              >
                <div className={`max-w-[85%] rounded-xl px-2.5 py-1.5 ${
                  msg.type === "user"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-br-sm"
                    : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm"
                }`}>
                  <p className="text-[11px] leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {visibleMessages < messages.length && visibleMessages > 0 && (
              <div 
                className="flex justify-start"
                style={{
                  animation: 'message-appear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                }}
              >
                <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100 rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" style={{ animation: 'typing-dot 1.4s ease-in-out infinite' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" style={{ animation: 'typing-dot 1.4s ease-in-out 0.2s infinite' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" style={{ animation: 'typing-dot 1.4s ease-in-out 0.4s infinite' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-2 py-2 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5">
                <span className="text-gray-400 text-[10px]">Ihre Nachricht...</span>
              </div>
              <div className="w-7 h-7 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                <Send className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteChatDemo;
