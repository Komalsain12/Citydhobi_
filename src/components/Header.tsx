import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const phoneNumber = "7678667708";
  const whatsappNumber = "917678667708";

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                CityDhobi
              </h1>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="hidden sm:flex"
              asChild
            >
              <a href={`tel:+91${phoneNumber}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
