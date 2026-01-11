import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

const AudioDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(15); // 15 seconds demo
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const demoText = `Willkommen bei Hairstyling Bocholt. Hier ist Alina, Ihre digitale Kollegin – rund um die Uhr für Sie erreichbar. Termine buchen, verschieben oder Fragen klären? Sagen Sie mir einfach, was Sie möchten – den Rest übernehme ich für Sie.`;

  // Generate initial waveform heights
  const generateStaticWaveform = useCallback(() => {
    return Array.from({ length: 60 }, (_, i) => {
      return Math.sin(i * 0.3) * 20 + 25;
    });
  }, []);

  // Animate waveform when playing
  const animateWaveform = useCallback(() => {
    const animate = () => {
      setWaveformHeights(prev => 
        prev.map((height, i) => {
          const baseHeight = Math.sin(i * 0.3) * 20 + 25;
          const randomVariation = Math.sin(Date.now() * 0.01 + i * 0.5) * 15 + Math.random() * 10;
          return baseHeight + randomVariation;
        })
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    setWaveformHeights(generateStaticWaveform());
  }, [generateStaticWaveform]);

  useEffect(() => {
    if (isPlaying) {
      animateWaveform();
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setWaveformHeights(generateStaticWaveform());
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, animateWaveform, generateStaticWaveform]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.cancel();
      if (intervalRef.current) clearInterval(intervalRef.current);
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
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setCurrentTime(0);
    const utterance = new SpeechSynthesisUtterance(demoText);
    const voice = getGermanFemaleVoice();
    
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.lang = "de-DE";
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    
    utterance.onstart = () => {
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return duration;
          }
          return prev + 0.1;
        });
      }, 100);
    };
    
    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentTime(duration);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="audio-demo" className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Audio-Demo
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Hören Sie Ihre neue Kollegin Alina in Aktion
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            So klingt es, wenn Alina Ihre Kundinnen begrüßt – natürlich, freundlich, professionell.
          </p>
        </div>

        {/* Audio Player Card */}
        <div className="bg-[#1a1f25] rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
          {/* Waveform Visualization */}
          <div className="flex items-center justify-center gap-[2px] h-20 mb-8">
            {waveformHeights.map((height, i) => {
              const progress = currentTime / duration;
              const barProgress = i / waveformHeights.length;
              const isActive = barProgress <= progress;
              
              return (
                <div
                  key={i}
                  className={`w-[3px] rounded-full ${
                    isActive ? "bg-accent" : "bg-gray-600"
                  }`}
                  style={{
                    height: `${height}px`,
                    transition: "height 0.08s ease-out, background-color 0.15s ease",
                  }}
                />
              );
            })}
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-4 mb-6">
            {/* Play Button */}
            <button
              onClick={togglePlay}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-colors shadow-lg flex-shrink-0"
              aria-label={isPlaying ? "Pause" : "Abspielen"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
              ) : (
                <Play className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground ml-1" />
              )}
            </button>

            {/* Track Info & Progress */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium truncate pr-2">
                  Hairstyling Bocholt - Ihr Digitaler Empfang
                </span>
                <span className="text-gray-400 text-sm flex-shrink-0">
                  ({duration} Sek.)
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-1 bg-gray-600 rounded-full overflow-hidden mb-1">
                <div 
                  className="absolute left-0 top-0 h-full bg-accent rounded-full transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              
              {/* Time Display */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Transcript Box */}
          <div className="bg-[#252b33] rounded-xl p-4 md:p-5">
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-semibold text-sm md:text-base">A</span>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <p className="text-accent font-medium text-sm md:text-base mb-1">
                  Alina – Ihre digitale Kollegin
                </p>
                <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
                  „{demoText}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioDemoSection;
