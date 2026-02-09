interface TestimonialSectionProps {
  quote: string;
  author: string;
}

const TestimonialSection = ({ quote, author }: TestimonialSectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-5 md:px-8 max-w-3xl">
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl italic text-foreground mb-6">"{quote}"</p>
          <footer className="text-muted-foreground">
            <cite className="not-italic font-medium">– {author}</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialSection;
