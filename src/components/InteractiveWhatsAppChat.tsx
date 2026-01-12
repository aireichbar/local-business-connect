import { Check, CheckCheck, Send, RotateCcw } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "sent" | "received";
  text: string;
  time: string;
  read?: boolean;
}

const QUICK_REPLIES = [
  "Haben Sie heute noch Termine frei?",
  "Was kostet ein Haarschnitt?",
  "Wie sind Ihre Öffnungszeiten?",
  "Kann ich einen Termin absagen?",
];

const AI_RESPONSES: Record<string, string> = {
  "termin": "Ja, gerne! Heute sind noch Termine um 14:00 und 15:30 Uhr frei. Was passt Ihnen besser? 😊",
  "preis": "Unsere Preise: Herrenschnitt 25€, Damenschnitt ab 35€, Kinderschnitt 15€. Darf ich Ihnen einen Termin vorschlagen?",
  "öffnungszeit": "Wir haben Mo-Fr von 9-18 Uhr und Sa von 9-14 Uhr geöffnet. Möchten Sie einen Termin vereinbaren?",
  "absage": "Kein Problem! Bitte teilen Sie mir Ihren Terminzeitpunkt mit, dann storniere ich ihn für Sie.",
  "default": "Vielen Dank für Ihre Nachricht! Ich leite Sie gerne an einen Mitarbeiter weiter. Wie kann ich Ihnen helfen? 🙂"
};

const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes("termin") || lowerMessage.includes("frei")) {
    return AI_RESPONSES["termin"];
  }
  if (lowerMessage.includes("preis") || lowerMessage.includes("kost")) {
    return AI_RESPONSES["preis"];
  }
  if (lowerMessage.includes("öffnung") || lowerMessage.includes("geöffnet") || lowerMessage.includes("uhr")) {
    return AI_RESPONSES["öffnungszeit"];
  }
  if (lowerMessage.includes("absag") || lowerMessage.includes("storn")) {
    return AI_RESPONSES["absage"];
  }
  
  return AI_RESPONSES["default"];
};

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
};

const InteractiveWhatsAppChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "sent",
      text: "Hallo! 👋 Willkommen bei Friseur Bocholt. Wie kann ich Ihnen helfen?",
      time: getCurrentTime(),
      read: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "received",
      text: text.trim(),
      time: getCurrentTime()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        type: "sent",
        text: getAIResponse(text),
        time: getCurrentTime(),
        read: true
      };
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        type: "sent",
        text: "Hallo! 👋 Willkommen bei Friseur Bocholt. Wie kann ich Ihnen helfen?",
        time: getCurrentTime(),
        read: true
      }
    ]);
    setInputValue("");
    setIsTyping(false);
  };

  return (
    <div className="h-full flex flex-col bg-[#e5ddd5]">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] px-4 py-3 pt-12 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
          <span className="text-white text-sm font-bold">FB</span>
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Friseur Bocholt</p>
          <p className="text-white/80 text-xs">
            {isTyping ? "tippt..." : "online"}
          </p>
        </div>
        <button 
          onClick={handleReset}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          title="Chat zurücksetzen"
        >
          <RotateCcw className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Chat Background */}
      <div 
        className="flex-1 px-3 py-4 space-y-3 overflow-y-auto"
        style={{
          backgroundColor: "#e5ddd5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='whatsapp-bg' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 5c1.5 0 2.5 1 2.5 2.5S31.5 10 30 10s-2.5-1-2.5-2.5S28.5 5 30 5zm-15 10c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zm30 0c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zM15 30c1.5 0 2.5 1 2.5 2.5S16.5 35 15 35s-2.5-1-2.5-2.5S13.5 30 15 30zm30 0c1.5 0 2.5 1 2.5 2.5S46.5 35 45 35s-2.5-1-2.5-2.5S43.5 30 45 30zm-30 15c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zm30 0c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5.9-1.5 2-1.5zm-15 5c1.5 0 2.5 1 2.5 2.5S31.5 55 30 55s-2.5-1-2.5-2.5S28.5 50 30 50z' fill='%23c9c4bc' fill-opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23whatsapp-bg)'/%3E%3C/svg%3E")`
        }}
      >
        {/* Messages */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
            style={{
              animation: 'message-appear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            }}
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
        {isTyping && (
          <div 
            className="flex justify-end"
            style={{
              animation: 'message-appear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            }}
          >
            <div className="bg-[#dcf8c6] rounded-lg px-4 py-2 rounded-br-sm shadow-sm">
              <div className="flex gap-1.5">
                <span 
                  className="w-2 h-2 bg-[#667781] rounded-full"
                  style={{ animation: 'typing-dot 1.4s ease-in-out infinite' }}
                />
                <span 
                  className="w-2 h-2 bg-[#667781] rounded-full"
                  style={{ animation: 'typing-dot 1.4s ease-in-out 0.2s infinite' }}
                />
                <span 
                  className="w-2 h-2 bg-[#667781] rounded-full"
                  style={{ animation: 'typing-dot 1.4s ease-in-out 0.4s infinite' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Quick Replies - only show when not too many messages */}
        {messages.length <= 2 && !isTyping && (
          <div className="pt-2">
            <p className="text-[10px] text-[#667781] mb-2 text-center">Schnellantworten</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {QUICK_REPLIES.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  className="bg-white/90 hover:bg-white text-[#075e54] text-[11px] px-2.5 py-1.5 rounded-full border border-[#075e54]/20 hover:border-[#075e54]/40 transition-all shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      
      {/* Input bar */}
      <form onSubmit={handleSubmit} className="px-3 pb-8 pt-2 bg-[#f0f0f0]">
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nachricht eingeben..."
            className="flex-1 text-xs text-[#303030] placeholder:text-[#667781] bg-transparent outline-none"
            disabled={isTyping}
          />
          <button 
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="w-8 h-8 bg-[#00a884] hover:bg-[#00997a] disabled:bg-[#00a884]/50 rounded-full flex items-center justify-center transition-colors"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InteractiveWhatsAppChat;
