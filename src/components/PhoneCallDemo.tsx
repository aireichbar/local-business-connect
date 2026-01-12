import { Phone, PhoneOff, Mic, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";

const PhoneCallDemo = () => {
  const [callState, setCallState] = useState<'ringing' | 'connected' | 'talking'>('ringing');
  const [callDuration, setCallDuration] = useState(0);
  const [transcriptIndex, setTranscriptIndex] = useState(0);

  const transcript = [
    { speaker: "KI", text: "Guten Tag, Elektro Müller, wie kann ich Ihnen helfen?" },
    { speaker: "Kunde", text: "Hallo, ich hätte gerne einen Termin für eine Elektroinstallation." },
    { speaker: "KI", text: "Natürlich! Geht es um Neubau oder eine bestehende Immobilie?" },
    { speaker: "Kunde", text: "Bestandsimmobilie, wir möchten die Küche neu verkabeln." },
    { speaker: "KI", text: "Verstanden. Ich trage Sie für einen Besichtigungstermin ein. Passt Ihnen Donnerstag um 10 Uhr?" },
  ];

  useEffect(() => {
    // Start call sequence
    const ringTimer = setTimeout(() => setCallState('connected'), 2000);
    const talkTimer = setTimeout(() => setCallState('talking'), 3000);
    
    return () => {
      clearTimeout(ringTimer);
      clearTimeout(talkTimer);
    };
  }, []);

  useEffect(() => {
    if (callState === 'talking') {
      const timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [callState]);

  useEffect(() => {
    if (callState === 'talking' && transcriptIndex < transcript.length) {
      const timer = setTimeout(() => {
        setTranscriptIndex(prev => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (transcriptIndex >= transcript.length) {
      // Reset animation
      const resetTimer = setTimeout(() => {
        setCallState('ringing');
        setCallDuration(0);
        setTranscriptIndex(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [callState, transcriptIndex, transcript.length]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      {/* Header */}
      <div className="pt-12 pb-4 px-4 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-3">
          <span className="text-white text-2xl font-bold">EM</span>
        </div>
        <p className="text-white text-lg font-medium">Elektro Müller</p>
        <p className="text-white/60 text-sm mt-1">
          {callState === 'ringing' && 'Verbinden...'}
          {callState === 'connected' && 'Verbunden'}
          {callState === 'talking' && formatDuration(callDuration)}
        </p>
      </div>

      {/* Call Animation */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-4">
        {callState === 'ringing' && (
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
            <div className="relative w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary animate-pulse" />
            </div>
          </div>
        )}

        {callState !== 'ringing' && (
          <div className="w-full space-y-2 max-h-[200px] overflow-hidden">
            {transcript.slice(0, transcriptIndex).map((item, index) => (
              <div
                key={index}
                className={`flex ${item.speaker === 'KI' ? 'justify-start' : 'justify-end'}`}
                style={{
                  animation: 'message-appear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                }}
              >
                <div className={`max-w-[85%] rounded-lg px-3 py-2 ${
                  item.speaker === 'KI' 
                    ? 'bg-primary/20 text-white' 
                    : 'bg-white/10 text-white/90'
                }`}>
                  <span className={`text-[10px] font-medium ${
                    item.speaker === 'KI' ? 'text-primary' : 'text-white/60'
                  }`}>
                    {item.speaker}
                  </span>
                  <p className="text-[12px] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sound Wave Animation */}
      {callState === 'talking' && (
        <div className="flex items-center justify-center gap-1 py-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full"
              style={{
                height: '20px',
                animation: `soundwave 0.8s ease-in-out ${i * 0.1}s infinite alternate`
              }}
            />
          ))}
        </div>
      )}

      {/* Bottom Controls */}
      <div className="px-6 pb-10 pt-4">
        <div className="flex justify-center gap-6">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
            <PhoneOff className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes soundwave {
          from { height: 8px; }
          to { height: 24px; }
        }
      `}</style>
    </div>
  );
};

export default PhoneCallDemo;
