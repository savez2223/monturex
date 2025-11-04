import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      quote:
        "Monturex helped us secure our entire IT system with zero downtime.",
      author: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
    },
    {
      quote:
        "Simple to install, powerful protection. Our team loves the intuitive dashboard.",
      author: "Michael Chen",
      role: "Security Director, CloudNet",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by small businesses worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of companies protecting their digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="px-8 py-4 bg-card rounded-lg border border-border/50">
            <span className="text-2xl font-bold text-muted-foreground">
              ACME Corp
            </span>
          </div>
          <div className="px-8 py-4 bg-card rounded-lg border border-border/50">
            <span className="text-2xl font-bold text-muted-foreground">
              SecureNet
            </span>
          </div>
          <div className="px-8 py-4 bg-card rounded-lg border border-border/50">
            <span className="text-2xl font-bold text-muted-foreground">
              DataGuard
            </span>
          </div>
          <div className="px-8 py-4 bg-card rounded-lg border border-border/50">
            <span className="text-2xl font-bold text-muted-foreground">
              TechFlow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
