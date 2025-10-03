import { Truck, Clock, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description: "We pick up and deliver your laundry at your doorstep, completely free of charge.",
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Need it urgently? Our express service ensures quick turnaround without compromising quality.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We take utmost care of your garments with premium products and experienced professionals.",
  },
  {
    icon: Sparkles,
    title: "Premium Care",
    description: "Special treatment for delicate fabrics, designer wear, and luxury items.",
  },
];

const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Usha Drycleaners?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-smooth shadow-medium">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
