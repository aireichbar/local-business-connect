import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Package } from "./types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: Package;
  index: number;
}

const PricingCard = ({ pkg, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
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
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
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
        {pkg.premiumSubtitle && (
          <p
            className={cn(
              "text-xs mt-1 font-medium",
              pkg.isHighlighted ? "text-primary" : "text-primary"
            )}
          >
            {pkg.premiumSubtitle}
          </p>
        )}
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
      {pkg.feelingQuote && (
        <div className="min-h-[40px]">
          <p
            className={cn(
              "text-xs",
              pkg.isHighlighted ? "text-background/50" : "text-muted-foreground/70"
            )}
          >
            „{pkg.feelingQuote}"
          </p>
        </div>
      )}

      {/* Trust Anchor Box */}
      <div
        className={cn(
          "min-h-[100px] rounded-xl p-4 my-4",
          pkg.isHighlighted ? "bg-background/10" : "bg-muted/50"
        )}
      >
        <p
          className={cn(
            "text-sm",
            pkg.isHighlighted ? "text-background/80" : "text-muted-foreground"
          )}
        >
          {pkg.trustAnchor}
        </p>
      </div>

      {/* Pricing Block */}
      <div className="min-h-[90px]">
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
          + {pkg.pricing.setup}€ einmalig ({pkg.pricing.setupNote})
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
    </motion.div>
  );
};

export default PricingCard;
