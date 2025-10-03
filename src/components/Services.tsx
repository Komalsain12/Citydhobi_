import { Card, CardContent } from "@/components/ui/card";
import washFoldIcon from "@/assets/wash-fold-icon.png";
import drycleanIcon from "@/assets/dryclean-icon.png";
import ironIcon from "@/assets/iron-icon.png";
import shoeBagIcon from "@/assets/shoe-bag-icon.png";

const services = [
  {
    icon: washFoldIcon,
    title: "Wash & Fold",
    description: "Professional laundry service with careful washing, drying, and neat folding. Your clothes treated with premium detergents.",
  },
  {
    icon: drycleanIcon,
    title: "Dry Cleaning",
    description: "Expert dry cleaning for delicate fabrics, suits, dresses, and formal wear. Stain removal and fabric care guaranteed.",
  },
  {
    icon: ironIcon,
    title: "Steam Ironing",
    description: "Crisp, wrinkle-free clothes with professional steam ironing. Perfect finish for all your garments.",
  },
  {
    icon: shoeBagIcon,
    title: "Shoe & Bag Cleaning",
    description: "Specialized cleaning for shoes, bags, and leather goods. Restore your accessories to their original glory.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-smooth cursor-pointer border-2 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
