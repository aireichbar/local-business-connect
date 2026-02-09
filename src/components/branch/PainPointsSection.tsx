import { LucideIcon } from "lucide-react";

interface PainPoint {
  icon: LucideIcon;
  situation: string;
  consequence: string;
}

interface PainPointsSectionProps {
  title: string;
  painPoints: PainPoint[];
}

const PainPointsSection = ({ title, painPoints }: PainPointsSectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-5 md:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border shadow-sm">
              <point.icon className="h-8 w-8 text-destructive mb-4" />
              <p className="font-semibold text-foreground mb-2">{point.situation}</p>
              <p className="text-sm text-muted-foreground">{point.consequence}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
