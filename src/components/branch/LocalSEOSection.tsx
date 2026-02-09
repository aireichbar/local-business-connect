import { Link } from "react-router-dom";

interface LocalSEOSectionProps {
  title: string;
  subtitle: string;
  terms: string[];
  useCityLinks?: boolean;
}

const LocalSEOSection = ({ title, subtitle, terms, useCityLinks }: LocalSEOSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 md:px-8 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-8">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {terms.map((term) =>
            useCityLinks ? (
              <Link
                key={term}
                to={`/${term.toLowerCase()}`}
                className="px-4 py-2 bg-muted rounded-full hover:bg-muted/80 transition-colors border"
              >
                {term}
              </Link>
            ) : (
              <span key={term} className="px-4 py-2 bg-muted rounded-full">
                {term}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSection;
