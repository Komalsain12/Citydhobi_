import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Shield, Sparkles, Truck, Award } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Express Service",
    description: "Same-day and next-day delivery available. We value your time as much as you do.",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description: "Complimentary doorstep service on orders above ₹500. No hidden charges.",
  },
  {
    icon: Shield,
    title: "100% Safe & Hygienic",
    description: "Eco-friendly cleaning agents and sanitized processing. Your health is our priority.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Advanced machines and expert care for every garment. Hospital-grade cleanliness.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "15+ years of expertise in fabric care. Trained professionals handle your clothes.",
  },
  {
    icon: Check,
    title: "Quality Guarantee",
    description: "Not satisfied? We'll re-clean for free. 100% satisfaction or money back.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why CityDhobi Stands Out
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium services and customer-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-large transition-smooth border-2 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-hero rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">What Makes Us Different?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Sectors Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
