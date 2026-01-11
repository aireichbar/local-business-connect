import { Volume2, Play, Pause, Square } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AudioDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const demoText = `Willkommen bei aireichbar. Ich bin der digitale Empfang und kümmere mich um Ihr Anliegen, ganz in Ruhe. 
  Wie kann ich Ihnen heute helfen? Sie können mir Fragen zu unseren Öffnungszeiten, Leistungen oder Preisen stellen. 
  Oder ich kann einen Rückruf für Sie vereinbaren.`;

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  const getGermanFemaleVoice = () => {
    // Prioritize natural German female voices
    const preferredVoices = [
      "Google Deutsch",
      "Anna",
      "Helena",
      "Petra",
      "Microsoft Katja",
      "Vicki"
    ];

    for (const preferred of preferredVoices) {
      const voice = voices.find(
        v => v.name.includes(preferred) && v.lang.startsWith("de")
      );
      if (voice) return voice;
    }

    // Fallback to any German female voice
    const germanVoice = voices.find(v => v.lang.startsWith("de"));
    return germanVoice || voices[0];
  };

  const togglePlay = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(demoText);
    const voice = getGermanFemaleVoice();
    
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.lang = "de-DE";
    utterance.rate = 0.9; // Slightly slower for natural feel
    utterance.pitch = 1.1; // Slightly higher for friendly tone
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPlaying(true);
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPlaying(false);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <div className="card-elevated p-8 md:p-12 text-center border border-border/50">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Volume2 className="w-10 h-10 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Hören Sie selbst
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            So klingt es, wenn Ihr digitaler Empfang mit einem Kunden spricht – 
            natürlich, freundlich und professionell.
          </p>

          {/* Audio player */}
          <div className="flex flex-col items-center gap-6">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={togglePlay}
              className="gap-3"
            >
              {isSpeaking ? (
                <>
                  <Square className="w-5 h-5" />
                  Stoppen
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Demo anhören
                </>
              )}
            </Button>

            {/* Waveform visualization (decorative) */}
            <div className="flex items-center gap-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full bg-primary/30 transition-all duration-300 ${
                    isSpeaking ? "animate-pulse" : ""
                  }`}
                  style={{
                    height: isSpeaking ? `${Math.random() * 24 + 8}px` : "8px",
                    animationDelay: `${i * 0.05}s`
                  }}
                />
              ))}
            </div>

            {/* Transcript */}
            <blockquote className="text-muted-foreground italic max-w-md text-sm">
              „Willkommen bei aireichbar. Ich bin der digitale Empfang und kümmere mich 
              um Ihr Anliegen – ganz in Ruhe."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioDemoSection;
