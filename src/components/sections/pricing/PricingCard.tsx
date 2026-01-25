import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Phone, ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { Package } from "./types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: Package;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  clock: Clock,
  zap: Zap,
};

const PricingCard = ({ pkg }: PricingCardProps) => {
  const TrustIcon = iconMap[pkg.trustAnchor.icon] || Shield;

  return (
    <div
      className={cn(
        "relative rounded-2xl p-5 md:p-6 flex flex-col h-full transition-all duration-300",
        pkg.isHighlighted
          ? "bg-foreground text-background border-2 border-primary shadow-xl md:scale-105 z-10 animate-pulse-glow"
          : "bg-card border border-border/50 hover:shadow-lg"
      )}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold",
              pkg.isHighlighted
                ? "bg-primary text-primary-foreground"
                : "bg-primary text-primary-foreground"
            )}
          >
            {pkg.badge}
          </div>
        </div>
      )}

      {/* Header - Name + Tagline */}
      <div className="min-h-[90px] pt-2">
        <h3
          className={cn(
            "text-xl font-bold mb-1",
            pkg.isHighlighted ? "text-background" : "text-foreground"
          )}
        >
          {pkg.name}
        </h3>
        <p
          className={cn(
            "text-sm",
            pkg.isHighlighted ? "text-background/70" : "text-muted-foreground"
          )}
        >
          {pkg.tagline}
        </p>
      </div>

      {/* Problem Statement */}
      <div className="min-h-[70px]">
        <p
          className={cn(
            "text-sm italic",
            pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
          )}
        >
          „{pkg.problemStatement}"
        </p>
      </div>

      {/* Benefits List */}
      <ul className="min-h-[140px] space-y-2">
        {pkg.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <Check
              className={cn(
                "w-4 h-4 mt-0.5 flex-shrink-0",
                pkg.isHighlighted ? "text-primary" : "text-success"
              )}
            />
            <span
              className={cn(
                "text-sm",
                pkg.isHighlighted ? "text-background/90" : "text-foreground"
              )}
            >
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      {/* Core Statement (Premium only) */}
      <div className="min-h-[60px]">
        {pkg.coreStatement && (
          <p
            className={cn(
              "text-sm font-medium border-l-2 pl-3",
              pkg.isHighlighted
                ? "border-primary text-primary"
                : "border-primary text-foreground"
            )}
          >
            {pkg.coreStatement}
          </p>
        )}
      </div>

      {/* Feeling Quote */}
      <div className="min-h-[40px]">
        <p
          className={cn(
            "text-xs",
            pkg.isHighlighted ? "text-background/50" : "text-muted-foreground/70"
          )}
        >
          {pkg.feelingQuote}
        </p>
      </div>

      {/* Trust Anchor Box */}
      <div
        className={cn(
          "min-h-[100px] rounded-xl p-4 my-4",
          pkg.isHighlighted ? "bg-background/10" : "bg-muted/50"
        )}
      >
        <div className="flex items-start gap-3">
          <TrustIcon
            className={cn(
              "w-5 h-5 flex-shrink-0",
              pkg.isHighlighted ? "text-primary" : "text-primary"
            )}
          />
          <div>
            <p
              className={cn(
                "text-sm font-semibold",
                pkg.isHighlighted ? "text-background" : "text-foreground"
              )}
            >
              {pkg.trustAnchor.title}
            </p>
            <p
              className={cn(
                "text-xs mt-1",
                pkg.isHighlighted ? "text-background/70" : "text-muted-foreground"
              )}
            >
              {pkg.trustAnchor.description}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Block */}
      <div className="min-h-[85px]">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "text-3xl font-bold",
              pkg.isHighlighted ? "text-background" : "text-foreground"
            )}
          >
            {pkg.pricing.monthly}€
          </span>
          <span
            className={cn(
              "text-sm",
              pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
            )}
          >
            /Monat
          </span>
        </div>
        <p
          className={cn(
            "text-sm mt-1",
            pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
          )}
        >
          + {pkg.pricing.setup}€ einmalig
        </p>
        {pkg.pricing.anchor && (
          <p
            className={cn(
              "text-xs mt-2 font-medium",
              pkg.isHighlighted ? "text-primary" : "text-primary"
            )}
          >
            {pkg.pricing.anchor}
          </p>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-auto pt-4">
        <Link to="/#kontakt" className="block">
          <Button
            variant={pkg.isHighlighted ? "default" : "secondary"}
            size="lg"
            className={cn(
              "w-full rounded-full group",
              pkg.isHighlighted
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-foreground hover:bg-foreground/90 text-background"
            )}
          >
            {pkg.isHighlighted ? (
              <>
                <Phone className="w-4 h-4" />
                {pkg.cta}
              </>
            ) : (
              <>
                {pkg.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
