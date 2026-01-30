import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Package } from "./types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: Package;
  index: number;
  isStaircase?: boolean;
}

const PricingCard = ({ pkg, index, isStaircase = false }: PricingCardProps) => {
  const CardWrapper = isStaircase ? "div" : motion.div;
  const wrapperProps = isStaircase
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: index * 0.1 },
        viewport: { once: true },
      };

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        "relative rounded-2xl flex flex-col h-full transition-all duration-300",
        pkg.isHighlighted
          ? "bg-foreground text-background shadow-2xl z-10 ring-1 ring-primary/10"
          : "bg-card border border-border/60 hover:border-border hover:shadow-md",
        // Staircase: highlighted card gets extra emphasis
        isStaircase && pkg.isHighlighted && "shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]"
      )}
    >
      {/* Badge - refined for highlighted package */}
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg">
            {pkg.badge}
          </div>
        </div>
      )}

      <div
        className={cn(
          "flex flex-col h-full",
          // Highlighted card gets slightly more padding for visual weight
          pkg.isHighlighted ? "p-7 md:p-9" : "p-6 md:p-8",
          pkg.badge && "pt-8",
          pkg.isHighlighted && pkg.badge && "pt-9"
        )}
      >
        {/* Header */}
        <div className="mb-6">
          <h3
            className={cn(
              "font-semibold mb-2",
              pkg.isHighlighted ? "text-background text-xl md:text-[1.35rem]" : "text-foreground text-xl"
            )}
          >
            {pkg.name}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed",
              pkg.isHighlighted ? "text-background/70" : "text-muted-foreground"
            )}
          >
            {pkg.tagline}
          </p>
        </div>

        {/* Benefits */}
        <ul className="space-y-3 mb-8 flex-grow">
          {pkg.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                  pkg.isHighlighted ? "bg-primary/20" : "bg-primary/10"
                )}
              >
                <Check
                  className={cn(
                    "w-3 h-3",
                    pkg.isHighlighted ? "text-primary" : "text-primary"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-sm",
                  pkg.isHighlighted ? "text-background/90" : "text-foreground/80"
                )}
              >
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1 mb-1">
            <span
              className={cn(
                "font-bold tracking-tight",
                pkg.isHighlighted ? "text-background text-[2rem]" : "text-foreground text-3xl"
              )}
            >
              {pkg.pricing.monthly} €
            </span>
            <span
              className={cn(
                "text-sm",
                pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
              )}
            >
              / Monat
            </span>
          </div>
          <p
            className={cn(
              "text-sm",
              pkg.isHighlighted ? "text-background/60" : "text-muted-foreground"
            )}
          >
            {pkg.pricing.setup} € {pkg.pricing.setupNote}
          </p>

          {/* Trust Anchor for highlighted */}
          {pkg.trustAnchor && (
            <p
              className={cn(
                "text-sm font-medium mt-3 flex items-center gap-1.5",
                pkg.isHighlighted ? "text-primary" : "text-primary"
              )}
            >
              <Check className="w-4 h-4" />
              {pkg.trustAnchor}
            </p>
          )}
        </div>

        {/* CTA */}
        <Link to="/#kontakt" className="block mt-auto">
          <Button
            size="lg"
            className={cn(
              "w-full rounded-xl font-medium group h-12",
              pkg.isHighlighted
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-foreground/5 hover:bg-foreground/10 text-foreground border border-border"
            )}
          >
            {pkg.cta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </CardWrapper>
  );
};

export default PricingCard;
