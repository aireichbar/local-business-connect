import { Shield, MapPin, Lock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "DSGVO-konform",
    },
    {
      icon: MapPin,
      text: "Made in Germany",
    },
    {
      icon: Lock,
      text: "SSL-verschlüsselt",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {badges.map((badge) => (
        <div
          key={badge.text}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
        >
          <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
