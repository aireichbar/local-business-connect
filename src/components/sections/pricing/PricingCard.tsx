import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Package } from "./types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: Package;
  index: number;
}

const PricingCard = ({ pkg, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl flex flex-col h-full transition-all duration-300",
        pkg.isHighlighted
          ? "bg-foreground text-background shadow-2xl md:scale-[1.03] z-10 ring-2 ring-primary/20"
          : "bg-card border border-border/60 hover:border-border hover:shadow-md"
      )}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg">
            {pkg.badge}
          </div>
        </div>
      )}

      <div className={cn("p-6 md:p-8 flex flex-col h-full", pkg.badge && "pt-8")}>
        {/* Header */}
        <div className="mb-6">
          <h3
            className={cn(
              "text-xl font-semibold mb-2",
              pkg.isHighlighted ? "text-background" : "text-foreground"
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
                  pkg.isHighlighted
                    ? "bg-primary/20"
                    : "bg-primary/10"
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
                "text-3xl font-bold tracking-tight",
                pkg.isHighlighted ? "text-background" : "text-foreground"
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
    </motion.div>
  );
};

export default PricingCard;
