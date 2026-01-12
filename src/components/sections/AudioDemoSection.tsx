import { Play, Pause, Loader2 } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

const AudioDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(15);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { toast } = useToast();

  const demoText = `Herzlich willkommen bei Hairstyling Bocholt. Sie sprechen mit dem digitalen Empfang. Gerne vereinbare ich direkt einen Termin für Sie oder beantworte Ihre Fragen zu unseren Leistungen. Wie kann ich Ihnen heute helfen?`;

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

  // Cleanup audio on unmount
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
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/openai-tts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            text: demoText,
            voice: 'nova',
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate audio');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      // Clean up previous audio
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
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : "Audio-Generierung fehlgeschlagen.",
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

  return (
    <section id="audio-demo" className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Audio-Demo
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Hören Sie Ihre neue Kollegin in Aktion
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
              const progress = duration > 0 ? currentTime / duration : 0;
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
              onClick={generateAndPlayAudio}
              disabled={isLoading}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-colors shadow-lg flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isLoading ? "Laden..." : isPlaying ? "Pause" : "Abspielen"}
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
              ) : (
                <Play className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground ml-1" />
              )}
            </button>

            {/* Track Info & Progress */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium truncate pr-2">
                  Hairstyling Bocholt - Digitaler Empfang
                </span>
                <span className="text-gray-400 text-sm flex-shrink-0">
                  OpenAI TTS
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-1 bg-gray-600 rounded-full overflow-hidden mb-1">
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
