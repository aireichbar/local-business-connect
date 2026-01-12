import { Mail, Send, Paperclip, MoreVertical, Reply, Star } from "lucide-react";
import { useState, useEffect } from "react";

const EmailDemo = () => {
  const [showReply, setShowReply] = useState(false);
  const [typingText, setTypingText] = useState("");
  
  const replyText = "Sehr geehrte Frau Schmidt,\n\nvielen Dank für Ihre Anfrage! Wir können Ihnen gerne ein individuelles Angebot erstellen.\n\nFür eine Dachsanierung benötigen wir folgende Informationen:\n• Größe der Dachfläche\n• Art der aktuellen Eindeckung\n• Gewünschtes Material\n\nSoll ich einen kostenlosen Besichtigungstermin vereinbaren?\n\nMit freundlichen Grüßen\nIhr Dachdecker-Team";

  useEffect(() => {
    const showReplyTimer = setTimeout(() => setShowReply(true), 2000);
    return () => clearTimeout(showReplyTimer);
  }, []);

  useEffect(() => {
    if (showReply && typingText.length < replyText.length) {
      const timer = setTimeout(() => {
        setTypingText(replyText.slice(0, typingText.length + 2));
      }, 30);
      return () => clearTimeout(timer);
    } else if (typingText.length >= replyText.length) {
      // Reset animation
      const resetTimer = setTimeout(() => {
        setShowReply(false);
        setTypingText("");
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [showReply, typingText, replyText]);

  return (
    <div className="h-full flex flex-col bg-[#f6f8fc]">
      {/* Email Header */}
      <div className="bg-white px-4 py-3 pt-12 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Eingang</span>
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 mb-1">Anfrage Dachsanierung</h3>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">AS</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-800">Anna Schmidt</p>
            <p className="text-[10px] text-gray-500">anna.schmidt@email.de</p>
          </div>
          <Star className="w-4 h-4 text-gray-300" />
        </div>
      </div>

      {/* Original Email */}
      <div className="flex-1 overflow-hidden">
        <div className="p-4 bg-white mx-3 mt-3 rounded-lg shadow-sm">
          <p className="text-[12px] text-gray-700 leading-relaxed">
            Guten Tag,<br /><br />
            ich interessiere mich für eine Dachsanierung unseres Einfamilienhauses. 
            Das Dach ist ca. 30 Jahre alt und müsste erneuert werden.<br /><br />
            Können Sie mir ein Angebot machen?<br /><br />
            Mit freundlichen Grüßen<br />
            Anna Schmidt
          </p>
          <p className="text-[10px] text-gray-400 mt-3">Heute, 09:15 Uhr</p>
        </div>

        {/* AI Reply */}
        {showReply && (
          <div 
            className="p-4 bg-primary/5 mx-3 mt-3 rounded-lg border border-primary/20"
            style={{
              animation: 'message-appear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Reply className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-medium text-primary">Automatische Antwort</span>
            </div>
            <p className="text-[11px] text-gray-700 leading-relaxed whitespace-pre-line">
              {typingText}
              {typingText.length < replyText.length && (
                <span className="inline-block w-0.5 h-3 bg-primary animate-pulse ml-0.5" />
              )}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="px-3 pb-8 pt-2 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
            <span className="text-gray-400 text-xs">Antworten...</span>
          </div>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDemo;
