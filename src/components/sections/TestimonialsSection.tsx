import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Thomas M.",
      business: "Schreinerei Meister",
      location: "Bocholt",
      text: "Endlich können meine Kunden mich erreichen, auch wenn ich auf der Baustelle bin. Der digitale Empfang nimmt Anfragen auf – ich kann mich aufs Handwerk konzentrieren.",
      avatar: "TM"
    },
    {
      name: "Sandra K.",
      business: "Physiotherapie Praxis",
      location: "Borken",
      text: "Früher habe ich ständig Anrufe verpasst, während ich Patienten behandelt habe. Jetzt beantwortet der Empfang Terminanfragen automatisch.",
      avatar: "SK"
    },
    {
      name: "Michael H.",
      business: "Heizung & Sanitär",
      location: "Rhede",
      text: "Die Website sieht professionell aus und ich musste mich um nichts kümmern. Bei Fragen ist immer jemand erreichbar.",
      avatar: "MH"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="trust-badge mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Lokale Unternehmer aus dem Kreis Borken, die aireichbar bereits nutzen.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.business}
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
