import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, Phone, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import washFoldIcon from "@/assets/wash-fold-icon.png";
import drycleanIcon from "@/assets/dryclean-icon.png";
import ironIcon from "@/assets/iron-icon.png";
import shoeBagIcon from "@/assets/shoe-bag-icon.png";

const serviceDetails = {
  "wash-fold": {
    title: "Wash & Fold",
    icon: washFoldIcon,
    description: "Professional laundry service with careful washing, drying, and neat folding. Your clothes treated with premium detergents.",
    longDescription: "Our Wash & Fold service is perfect for busy individuals who want their everyday clothes professionally cleaned. We use high-quality, eco-friendly detergents and follow strict hygiene protocols to ensure your clothes are fresh, clean, and neatly folded.",
    features: [
      "Premium eco-friendly detergents",
      "Separate washing for colors and whites",
      "Temperature-controlled drying",
      "Professional folding and packaging",
      "Sanitized and fragrant clothes",
      "Same-day service available",
    ],
    process: [
      "Free pickup from your doorstep",
      "Sorting by color and fabric type",
      "Washing with premium detergents",
      "Proper drying and folding",
      "Quality check and packaging",
      "Delivery to your address",
    ],
    pricing: "Starting from ₹60/kg",
  },
  "dry-cleaning": {
    title: "Dry Cleaning",
    icon: drycleanIcon,
    description: "Expert dry cleaning for delicate fabrics, suits, dresses, and formal wear. Stain removal and fabric care guaranteed.",
    longDescription: "Our expert dry cleaning service uses advanced techniques and premium solvents to clean your delicate garments without water. Perfect for suits, dresses, sarees, and other formal wear that require special care.",
    features: [
      "Advanced dry cleaning technology",
      "Specialized stain removal",
      "Fabric-specific treatment",
      "No color fading or shrinkage",
      "Pressing and finishing included",
      "Protection for delicate embellishments",
    ],
    process: [
      "Inspection and tagging of garments",
      "Pre-treatment of stains",
      "Gentle dry cleaning process",
      "Professional pressing",
      "Quality inspection",
      "Protective packaging",
    ],
    pricing: "Shirts from ₹40, Suits from ₹250",
  },
  "steam-ironing": {
    title: "Steam Ironing",
    icon: ironIcon,
    description: "Crisp, wrinkle-free clothes with professional steam ironing. Perfect finish for all your garments.",
    longDescription: "Get perfectly pressed clothes with our professional steam ironing service. We use industrial-grade steam irons to give your garments a crisp, wrinkle-free finish that lasts longer than home ironing.",
    features: [
      "Industrial steam iron equipment",
      "Wrinkle-free guarantee",
      "Fabric-appropriate temperature",
      "Sharp creases on formal wear",
      "Delicate handling of embellishments",
      "Quick turnaround time",
    ],
    process: [
      "Garment inspection and sorting",
      "Steam ironing with proper technique",
      "Careful handling of buttons and zippers",
      "Final quality check",
      "Hanger or fold packaging",
      "Timely delivery",
    ],
    pricing: "Starting from ₹20/piece",
  },
  "shoe-bag-cleaning": {
    title: "Shoe & Bag Cleaning",
    icon: shoeBagIcon,
    description: "Specialized cleaning for shoes, bags, and leather goods. Restore your accessories to their original glory.",
    longDescription: "Restore your shoes and bags to their original condition with our specialized cleaning service. We handle leather, suede, canvas, and all materials with expert care and appropriate cleaning techniques.",
    features: [
      "Material-specific cleaning methods",
      "Leather conditioning and polish",
      "Suede and nubuck specialist care",
      "Color restoration available",
      "Odor removal treatment",
      "Shape maintenance and care",
    ],
    process: [
      "Material identification",
      "Deep cleaning with appropriate products",
      "Stain and scuff treatment",
      "Conditioning (for leather items)",
      "Polishing and finishing",
      "Protective packaging",
    ],
    pricing: "Shoes from ₹150, Bags from ₹250",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const phoneNumber = "7678667708";
  const whatsappNumber = "917678667708";

  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-6 text-white hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi, I want to book ${service.title} service`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book on WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <a href={`tel:+91${phoneNumber}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  About This Service
                </h2>
                <p className="text-lg text-muted-foreground">
                  {service.longDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Our Process
                    </h3>
                    <ul className="space-y-3">
                      {service.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-hero text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Pricing</h3>
                <p className="text-3xl font-bold text-accent mb-6">
                  {service.pricing}
                </p>
                <p className="text-white/80 mb-6">
                  Free pickup and delivery on orders above ₹500
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi, I want to book ${service.title} service`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Now on WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <a href={`tel:+91${phoneNumber}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call {phoneNumber}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
