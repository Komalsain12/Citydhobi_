import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const phoneNumber = "9999999999"; // User can change this
  const whatsappNumber = "919999999999"; // User can change this (with country code)

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Premium Care?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Book your pickup now or get in touch with us for any queries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6 h-auto"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">Book on WhatsApp</div>
                  <div className="text-sm opacity-80">Instant Response</div>
                </div>
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large text-lg px-8 py-6 h-auto"
              asChild
            >
              <a
                href={`tel:+91${phoneNumber}`}
                className="flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">Call Us Now</div>
                  <div className="text-sm opacity-80">+91 {phoneNumber}</div>
                </div>
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="font-semibold mb-1">Visit Us</div>
                  <div className="text-white/80">Sector XX, Gurgaon, Haryana</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="font-semibold mb-1">Email Us</div>
                  <div className="text-white/80">info@ushadrycleaners.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
