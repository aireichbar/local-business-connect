import { MessageCircle, Clock, Smile, Shield, Play, Pause, Loader2 } from "lucide-react";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";

const DigitalReceptionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(15);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { toast } = useToast();

  const demoText = `Herzlich willkommen bei Hairstyling Bocholt. Sie sprechen mit dem digitalen Empfang. Gerne vereinbare ich direkt einen Termin für Sie oder beantworte Ihre Fragen zu unseren Leistungen. Wie kann ich Ihnen heute helfen?`;

  const textSegments = useMemo(() => [
    { text: "Herzlich willkommen bei Hairstyling Bocholt.", start: 0, end: 2.5 },
    { text: "Sie sprechen mit dem digitalen Empfang.", start: 2.5, end: 5 },
    { text: "Gerne vereinbare ich direkt einen Termin für Sie", start: 5, end: 8 },
    { text: "oder beantworte Ihre Fragen zu unseren Leistungen.", start: 8, end: 11 },
    { text: "Wie kann ich Ihnen heute helfen?", start: 11, end: 14 },
  ], []);

  const benefits = [
    {
      icon: Clock,
      title: "Rund um die Uhr erreichbar",
      description: "Auch abends, am Wochenende oder wenn Sie im Einsatz sind."
    },
    {
      icon: MessageCircle,
      title: "Beantwortet Fragen sofort",
      description: "Öffnungszeiten, Leistungen, Preise – Ihre Kunden bekommen direkt Antworten."
    },
    {
      icon: Smile,
      title: "Freundlich & professionell",
      description: "Natürliche Kommunikation, die zu Ihrem Betrieb passt."
    },
    {
      icon: Shield,
      title: "Sammelt Kontaktdaten",
      description: "Wenn persönliche Beratung nötig ist, werden alle wichtigen Daten erfasst."
    }
  ];

  const generateStaticWaveform = useCallback(() => {
    return Array.from({ length: 50 }, (_, i) => {
      return Math.sin(i * 0.3) * 20 + 25;
    });
  }, []);

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
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const generateAndPlayAudio = async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    setCurrentTime(0);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            text: demoText,
          }),
          signal: controller.signal,
        }
      );
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate audio');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onloadedmetadata = () => {
        setDuration(audio.duration);
      };

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentTime(duration);
      };

      audio.onerror = () => {
        setIsPlaying(false);
        toast({
          title: "Fehler",
          description: "Audio konnte nicht abgespielt werden.",
          variant: "destructive",
        });
      };

      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('TTS Error:', error);
      
      let errorMessage = "Audio-Generierung fehlgeschlagen.";
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = "Zeitüberschreitung bei der Audio-Generierung. Bitte versuchen Sie es erneut.";
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: "Fehler",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getActiveSegmentIndex = useCallback(() => {
    if (!isPlaying && currentTime === 0) return -1;
    for (let i = textSegments.length - 1; i >= 0; i--) {
      if (currentTime >= textSegments[i].start) {
        return i;
      }
    }
    return -1;
  }, [currentTime, isPlaying, textSegments]);

  const activeSegmentIndex = getActiveSegmentIndex();

  return (
    <section id="digitaler-empfang" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="trust-badge mb-4">
              Omnichannel Lösung
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Ein Empfang für 
              <span className="text-primary"> alle Kanäle</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ob WhatsApp, Telefon oder E-Mail – Ihr digitaler Empfang antwortet 
              professionell auf jedem Kanal. Ihre Kunden wählen selbst, wie sie Sie erreichen möchten.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title} 
                  className="group flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Demo Player */}
          <div className="flex flex-col items-center lg:items-end w-full">
            <div className="w-full max-w-md">
              {/* Audio Demo Label */}
              <div className="text-center lg:text-right mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                  Audio-Demo
                </span>
              </div>

              {/* Audio Player Card */}
              <div className="bg-[#1a1f25] rounded-2xl p-5 sm:p-6 shadow-2xl">
                {/* Waveform Visualization */}
                <div className="flex items-center justify-center gap-[2px] h-16 mb-6 overflow-hidden">
                  {waveformHeights.map((height, i) => {
                    const progress = duration > 0 ? currentTime / duration : 0;
                    const barProgress = i / waveformHeights.length;
                    const isActive = barProgress <= progress;
                    
                    return (
                      <div
                        key={i}
                        className={`w-[3px] rounded-full flex-shrink-0 ${
                          isActive ? "bg-accent" : "bg-gray-600"
                        }`}
                        style={{
                          height: `${Math.max(height * 0.8, 8)}px`,
                          transition: "height 0.08s ease-out, background-color 0.15s ease",
                        }}
                      />
                    );
                  })}
                </div>

                {/* Player Controls */}
                <div className="flex items-center gap-4 mb-5">
                  {/* Play Button */}
                  <button
                    onClick={generateAndPlayAudio}
                    disabled={isLoading}
                    className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-colors shadow-lg flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={isLoading ? "Laden..." : isPlaying ? "Pause" : "Abspielen"}
                  >
                    {isLoading ? (
                      <Loader2 className="w-6 h-6 text-accent-foreground animate-spin" />
                    ) : isPlaying ? (
                      <Pause className="w-6 h-6 text-accent-foreground" />
                    ) : (
                      <Play className="w-6 h-6 text-accent-foreground ml-1" />
                    )}
                  </button>

                  {/* Track Info & Progress */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium truncate">
                        Hairstyling Bocholt
                      </span>
                      <span className="text-gray-400 text-xs flex-shrink-0">
                        ElevenLabs
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-1.5 bg-gray-600 rounded-full overflow-hidden mb-1.5">
                      <div 
                        className="absolute left-0 top-0 h-full bg-accent rounded-full transition-all duration-100"
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
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
                <div className="bg-[#252b33] rounded-xl p-4">
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-semibold text-sm">A</span>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-accent font-medium text-sm mb-1.5">
                        Alina – Ihre digitale Kollegin
                      </p>
                      <p className="text-xs sm:text-sm italic leading-relaxed">
                        „{textSegments.map((segment, index) => (
                          <span
                            key={index}
                            className={`transition-colors duration-300 ${
                              index === activeSegmentIndex
                                ? "text-accent font-medium"
                                : index < activeSegmentIndex
                                ? "text-gray-300"
                                : "text-gray-500"
                            }`}
                          >
                            {segment.text}
                            {index < textSegments.length - 1 && " "}
                          </span>
                        ))}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionSection;