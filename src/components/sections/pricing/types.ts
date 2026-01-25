export interface Package {
  name: string;
  tagline: string;
  problemStatement: string;
  benefits: string[];
  coreStatement?: string;
  feelingQuote: string;
  trustAnchor: {
    icon: string;
    title: string;
    description: string;
  };
  pricing: {
    monthly: string;
    setup: string;
    anchor?: string;
  };
  cta: string;
  isHighlighted: boolean;
  badge?: string;
}
