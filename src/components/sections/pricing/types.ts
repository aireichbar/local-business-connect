export interface Package {
  name: string;
  tagline: string;
  premiumSubtitle?: string;
  problemStatement: string;
  benefits: string[];
  coreStatement?: string;
  feelingQuote?: string;
  trustAnchor: string;
  pricing: {
    monthly: string;
    setup: string;
    setupNote: string;
    anchor?: string;
  };
  cta: string;
  isHighlighted: boolean;
  badge?: string | null;
}
