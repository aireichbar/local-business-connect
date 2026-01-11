import { Volume2, Play, Square, Headphones } from "lucide-react";
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
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    
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
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="blob-decoration top-0 right-0 w-80 h-80 bg-primary/5" />
      
      <div className="container mx-auto container-narrow relative">
        <div className="card-elevated p-10 md:p-16 text-center border border-border/50 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative">
            {/* Icon */}
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-8">
              <Headphones className="w-12 h-12 text-primary" />
            </div>

            {/* Content */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Hören Sie selbst
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              So klingt es, wenn Ihr digitaler Empfang mit einem Kunden spricht – 
              natürlich, freundlich und professionell.
            </p>

            {/* Audio player */}
            <div className="flex flex-col items-center gap-8">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={togglePlay}
                className="gap-3 min-w-[200px]"
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

              {/* Waveform visualization */}
              <div className="flex items-center gap-1 h-8">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isSpeaking ? "bg-primary" : "bg-primary/30"
                    }`}
                    style={{
                      height: isSpeaking ? `${Math.sin(i * 0.5) * 12 + 16}px` : "6px",
                      animationDelay: `${i * 0.05}s`,
                      transform: isSpeaking ? `scaleY(${0.5 + Math.random() * 0.5})` : "scaleY(1)"
                    }}
                  />
                ))}
              </div>

              {/* Transcript */}
              <blockquote className="text-muted-foreground italic max-w-md text-base border-l-4 border-primary/20 pl-6 text-left">
                „Willkommen bei aireichbar. Ich bin der digitale Empfang und kümmere mich 
                um Ihr Anliegen – ganz in Ruhe."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioDemoSection;