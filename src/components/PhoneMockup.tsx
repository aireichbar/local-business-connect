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
    <div className="relative w-[260px] xs:w-[280px] sm:w-[300px] md:w-[320px]">
      {/* Outer frame */}
      <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3rem] p-[5px] sm:p-[6px] shadow-2xl">
        {/* Inner bezel */}
        <div className="bg-black rounded-[2.2rem] sm:rounded-[2.6rem] overflow-hidden relative">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 z-20">
            <div className="w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full flex items-center justify-center gap-1.5 sm:gap-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333]" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#1a1a1a] ring-1 ring-[#333]" />
            </div>
          </div>

          {/* Screen content */}
          <div className="h-[500px] xs:h-[540px] sm:h-[580px] md:h-[620px] overflow-hidden">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-1 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Side buttons (volume + power) - hidden on very small screens */}
      <div className="hidden sm:block absolute left-0 top-28 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
      <div className="hidden sm:block absolute left-0 top-40 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
      <div className="hidden sm:block absolute left-0 top-56 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
      <div className="hidden sm:block absolute right-0 top-36 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
    </div>
  );
};

export default PhoneMockup;
