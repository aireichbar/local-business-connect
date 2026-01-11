import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Thomas M.",
      business: "Schreinerei Meister",
      location: "Bocholt",
      text: "Endlich können meine Kunden mich erreichen, auch wenn ich auf der Baustelle bin. Der digitale Empfang nimmt Anfragen auf – ich kann mich aufs Handwerk konzentrieren.",
      rating: 5,
      avatar: "TM"
    },
    {
      name: "Sandra K.",
      business: "Physiotherapie Praxis",
      location: "Borken",
      text: "Früher habe ich ständig Anrufe verpasst, während ich Patienten behandelt habe. Jetzt beantwortet der Empfang Terminanfragen automatisch – das spart mir täglich Zeit.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Michael H.",
      business: "Heizung & Sanitär",
      location: "Rhede",
      text: "Die Website sieht professionell aus und ich musste mich um nichts kümmern. Bei Fragen ist immer jemand erreichbar – genau das, was ich gesucht habe.",
      rating: 5,
      avatar: "MH"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="blob-decoration top-0 left-1/4 w-80 h-80 bg-success/5" />
      <div className="blob-decoration bottom-0 right-1/4 w-96 h-96 bg-primary/5" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6">
            <Star className="w-4 h-4 text-cta fill-cta" />
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lokale Unternehmer aus dem Kreis Borken, die aireichbar bereits nutzen.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="group card-elevated p-8 lg:p-10 border border-border/50 card-hover relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cta fill-cta" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-8 text-[15px]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
