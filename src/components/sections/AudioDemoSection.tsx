import { Volume2, Play, Square, Headphones } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AudioDemoSection = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const demoText = `Willkommen bei aireichbar. Ich bin der digitale Empfang und kümmere mich um Ihr Anliegen. 
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
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto container-narrow relative">
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50 shadow-lg text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          
          <div className="relative">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Hören Sie selbst
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              So klingt Ihr digitaler Empfang – natürlich, freundlich und professionell.
            </p>

            {/* Audio player */}
            <div className="flex flex-col items-center gap-6">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={togglePlay}
                className="gap-3 min-w-[200px] shadow-cta"
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
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isSpeaking ? "bg-primary" : "bg-primary/30"
                    }`}
                    style={{
                      height: isSpeaking ? `${Math.sin(i * 0.5) * 12 + 16}px` : "4px",
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm italic max-w-sm">
                „Willkommen bei aireichbar. Ich bin der digitale Empfang 
                und kümmere mich um Ihr Anliegen..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioDemoSection;
