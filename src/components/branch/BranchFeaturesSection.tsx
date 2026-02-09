import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface BranchFeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

const BranchFeaturesSection = ({ title, subtitle, features }: BranchFeaturesSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border shadow-sm">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchFeaturesSection;
