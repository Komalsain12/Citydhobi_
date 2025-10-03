import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sectors = [
  "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
  "Sohna Road", "Golf Course Road", "MG Road", "Sector 14", "Sector 29",
  "Cyber City", "Udyog Vihar", "Sector 54", "Sector 56", "South City",
  "Nirvana Country", "Palam Vihar", "DLF City", "New Gurgaon", "Sector 43"
];

const ServiceAreas = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Serving All Major Areas in Gurgaon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide our premium dry cleaning services across Gurgaon's major sectors and localities
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {sector}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
