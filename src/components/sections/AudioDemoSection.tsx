import { Play, Pause, Loader2 } from "lucide-react";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
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

  // Split text into segments with timing - approximate based on speech rate
  const textSegments = useMemo(() => [
    { text: "Herzlich willkommen bei Hairstyling Bocholt.", start: 0, end: 2.5 },
    { text: "Sie sprechen mit dem digitalen Empfang.", start: 2.5, end: 5 },
    { text: "Gerne vereinbare ich direkt einen Termin für Sie", start: 5, end: 8 },
    { text: "oder beantworte Ihre Fragen zu unseren Leistungen.", start: 8, end: 11 },
    { text: "Wie kann ich Ihnen heute helfen?", start: 11, end: 14 },
  ], []);

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
      // Create AbortController for timeout handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
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

  // Get current active segment based on currentTime
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
            So klingt es, wenn Christina Ihre Kundinnen begrüßt – natürlich, freundlich, professionell.
          </p>
        </div>

        {/* Audio Player Card */}
        <div className="bg-[#1a1f25] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
          {/* Waveform Visualization - responsive bar count */}
          <div className="flex items-center justify-center gap-[1px] sm:gap-[2px] h-14 sm:h-16 md:h-20 mb-4 sm:mb-6 md:mb-8 overflow-hidden">
            {waveformHeights.slice(0, 40).map((height, i) => {
              const progress = duration > 0 ? currentTime / duration : 0;
              const barProgress = i / 40;
              const isActive = barProgress <= progress;
              
              return (
                <div
                  key={i}
                  className={`w-[2px] sm:w-[3px] rounded-full flex-shrink-0 ${
                    isActive ? "bg-accent" : "bg-gray-600"
                  }`}
                  style={{
                    height: `${Math.max(height * 0.7, 8)}px`,
                    transition: "height 0.08s ease-out, background-color 0.15s ease",
                  }}
                />
              );
            })}
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Play Button */}
            <button
              onClick={generateAndPlayAudio}
              disabled={isLoading}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-colors shadow-lg flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isLoading ? "Laden..." : isPlaying ? "Pause" : "Abspielen"}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent-foreground animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent-foreground" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent-foreground ml-0.5 sm:ml-1" />
              )}
            </button>

            {/* Track Info & Progress */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-2">
                <span className="text-white text-sm sm:text-base font-medium truncate">
                  Hairstyling Bocholt
                </span>
                <span className="text-gray-400 text-[10px] sm:text-xs flex-shrink-0 hidden xs:block">
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
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Transcript Box with Synchronized Highlighting */}
          <div className="bg-[#252b33] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
            <div className="flex gap-2 sm:gap-3">
              {/* Avatar */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-semibold text-xs sm:text-sm md:text-base">A</span>
              </div>
              
              {/* Text Content with Highlighting */}
              <div className="flex-1 min-w-0">
                <p className="text-accent font-medium text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
                  Christina – Ihre digitale Kollegin
                </p>
                <p className="text-xs sm:text-sm md:text-base italic leading-relaxed">
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
    </section>
  );
};

export default AudioDemoSection;
