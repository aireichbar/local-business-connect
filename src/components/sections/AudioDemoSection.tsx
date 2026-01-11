import { Volume2, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const AudioDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
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
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  Pause
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
                    isPlaying ? "animate-pulse" : ""
                  }`}
                  style={{
                    height: `${Math.random() * 24 + 8}px`,
                    animationDelay: `${i * 0.05}s`
                  }}
                />
              ))}
            </div>

            {/* Transcript */}
            <blockquote className="text-muted-foreground italic max-w-md">
              „Willkommen bei aireichbar. Ich bin der digitale Empfang und kümmere mich 
              um Ihr Anliegen – ganz in Ruhe."
            </blockquote>
          </div>

          {/* Hidden audio element - placeholder URL */}
          <audio 
            ref={audioRef} 
            onEnded={handleEnded}
            src="/audio/demo.mp3"
          />
        </div>
      </div>
    </section>
  );
};

export default AudioDemoSection;
