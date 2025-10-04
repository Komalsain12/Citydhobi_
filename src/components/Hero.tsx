import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const phoneNumber = "7678667708";
  const whatsappNumber = "917678667708";

  return (
    <section className="relative min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium dry cleaning and laundry services in Gurgaon - CityDhobi" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6 animate-fade-in">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2">
              <p className="text-white text-sm font-medium">✨ Premium Laundry & Dry Cleaning Service</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight drop-shadow-lg">
            Expert Care for Your Garments in Gurgaon
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/95 mb-4 animate-fade-in font-medium drop-shadow-md">
            Professional dry cleaning, steam press & laundry services. Free pickup and delivery.
          </p>

          {/* Address Section */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-5 mb-8 animate-fade-in">
            <p className="text-white text-base sm:text-lg font-semibold mb-2">📍 Visit Us:</p>
            <p className="text-white/95 text-sm sm:text-base leading-relaxed">
              Usha Drycleaning and Laundry Service<br />
              Vishnu Garden, Sector 105, Gurgaon, Haryana - 122001<br />
              Near Golden Valley School
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-7 transition-smooth font-semibold"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Book on WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-white/15 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl text-lg px-8 py-7 transition-smooth font-semibold"
              asChild
            >
              <a 
                href={`tel:+91${phoneNumber}`}
                className="flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Call: 7678667708
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
