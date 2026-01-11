import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
}

/**
 * Modern smartphone mockup (generic, not brand-specific)
 * Rounded corners, notch, slim bezels
 */
const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className="relative w-[300px] sm:w-[320px]">
      {/* Outer frame */}
      <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[3rem] p-[6px] shadow-2xl">
        {/* Inner bezel */}
        <div className="bg-black rounded-[2.6rem] overflow-hidden relative">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333]" />
              <div className="w-3 h-3 rounded-full bg-[#1a1a1a] ring-1 ring-[#333]" />
            </div>
          </div>

          {/* Screen content */}
          <div className="h-[580px] sm:h-[620px] overflow-hidden">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Side buttons (volume + power) */}
      <div className="absolute left-0 top-28 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute left-0 top-40 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute left-0 top-56 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute right-0 top-36 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
    </div>
  );
};

export default PhoneMockup;
