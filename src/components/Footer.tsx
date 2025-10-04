import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CityDhobi
            </h3>
            <p className="text-white/80 mb-4">
              Your trusted partner for premium dry cleaning, laundry, and garment care services in Gurgaon.
            </p>
            <p className="text-white/60 text-sm">
              Owner: Deepanshu Arya
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Steam Ironing</li>
              <li>Shoe & Bag Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Vishnu Garden, Sector 105<br />
                  Gurgaon, Haryana - 122001<br />
                  <span className="text-sm">(Near Golden Valley School)</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+917678667708" className="text-white/80 hover:text-white transition-smooth">
                  +91 7678667708
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} CityDhobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
