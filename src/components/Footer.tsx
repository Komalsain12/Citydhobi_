import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Usha Drycleaners
            </h3>
            <p className="text-white/80 mb-4">
              Your trusted partner for premium dry cleaning, laundry, and garment care services in Gurgaon.
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
                <span className="text-white/80">Sector XX, Gurgaon, Haryana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919999999999" className="text-white/80 hover:text-white transition-smooth">
                  +91 9999999999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@ushadrycleaners.com" className="text-white/80 hover:text-white transition-smooth">
                  info@ushadrycleaners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Usha Drycleaners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
