import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageCircle } from "lucide-react";
import shirtIcon from "@/assets/pricing-icons/shirt.png";
import jeansIcon from "@/assets/pricing-icons/jeans.png";
import tshirtIcon from "@/assets/pricing-icons/tshirt.png";
import blazerIcon from "@/assets/pricing-icons/blazer.png";
import sweaterIcon from "@/assets/pricing-icons/sweater.png";
import trousersIcon from "@/assets/pricing-icons/trousers.png";
import shortsIcon from "@/assets/pricing-icons/shorts.png";
import suitIcon from "@/assets/pricing-icons/suit.png";
import sareeIcon from "@/assets/pricing-icons/saree.png";
import kurtaIcon from "@/assets/pricing-icons/kurta.png";
import lehengaIcon from "@/assets/pricing-icons/lehenga.png";
import ladiesSuitIcon from "@/assets/pricing-icons/ladies-suit.png";
import salwarIcon from "@/assets/pricing-icons/salwar.png";
import petticoatIcon from "@/assets/pricing-icons/petticoat.png";
import coatIcon from "@/assets/pricing-icons/coat.png";
import shoesIcon from "@/assets/pricing-icons/shoes.png";
import dhotiIcon from "@/assets/pricing-icons/dhoti.png";
import kurtaPajamaIcon from "@/assets/pricing-icons/kurta-pajama.png";
import cushionCoverIcon from "@/assets/pricing-icons/cushion-cover.png";
import cushionIcon from "@/assets/pricing-icons/cushion.png";
import curtainIcon from "@/assets/pricing-icons/curtain.png";
import blanketIcon from "@/assets/pricing-icons/blanket.png";
import quiltIcon from "@/assets/pricing-icons/quilt.png";
import steamIronIcon from "@/assets/pricing-icons/steam-iron.png";
import frockIcon from "@/assets/pricing-icons/frock.png";

const iconMap: { [key: string]: string } = {
  "Shirts": shirtIcon,
  "Jeans": jeansIcon,
  "T-shirts": tshirtIcon,
  "Jackets": blazerIcon,
  "Sweaters": sweaterIcon,
  "Trousers": trousersIcon,
  "Shorts": shortsIcon,
  "Blazer": blazerIcon,
  "2 Piece Mens Suit": suitIcon,
  "3 Piece Mens Suit": suitIcon,
  "Kurta Pajama": kurtaPajamaIcon,
  "Shoes": shoesIcon,
  "Dhoti": dhotiIcon,
  "Saree": sareeIcon,
  "2 Piece Ladies Suit": ladiesSuitIcon,
  "3 Piece Ladies Suit": ladiesSuitIcon,
  "Kurta": kurtaIcon,
  "Lehnga 3 Piece": lehengaIcon,
  "Petticoat": petticoatIcon,
  "Frocky Suit": frockIcon,
  "Long Coat": coatIcon,
  "Ladies Trousers": trousersIcon,
  "Ladies Shorts": shortsIcon,
  "Blazers": blazerIcon,
  "Salwar": salwarIcon,
  "Kids Shirts": shirtIcon,
  "Kids Jeans": jeansIcon,
  "Kids T-shirts": tshirtIcon,
  "Kids Jackets": blazerIcon,
  "Kids Sweaters": sweaterIcon,
  "Kids Trousers": trousersIcon,
  "Kids Shorts": shortsIcon,
  "Kids Blazers": blazerIcon,
  "Cushion Cover": cushionCoverIcon,
  "Cushion": cushionIcon,
  "Heavy Curtain": curtainIcon,
  "Double Blanket": blanketIcon,
  "Single Blanket": blanketIcon,
  "Quilt": quiltIcon,
  "Steam Shirts": steamIronIcon,
  "Steam Jeans": steamIronIcon,
  "Steam T-shirts": steamIronIcon,
  "Steam Jackets": steamIronIcon,
  "Steam Sweaters": steamIronIcon,
  "Steam Trousers": steamIronIcon,
  "Steam Blazers": steamIronIcon,
  "Steam Mens Suit": steamIronIcon,
  "Steam Ladies Suit": steamIronIcon,
  "Steam Saree": steamIronIcon,
};

const pricingData = {
  male: [
    { item: "Shirts", price: 120, service: "Dry Cleaning" },
    { item: "Jeans", price: 120, service: "Dry Cleaning" },
    { item: "T-shirts", price: 100, service: "Dry Cleaning" },
    { item: "Jackets", price: 180, service: "Dry Cleaning" },
    { item: "Sweaters", price: 180, service: "Dry Cleaning" },
    { item: "Trousers", price: 120, service: "Dry Cleaning" },
    { item: "Shorts", price: 90, service: "Dry Cleaning" },
    { item: "Blazer", price: 200, service: "Dry Cleaning" },
    { item: "2 Piece Mens Suit", price: 250, service: "Dry Cleaning" },
    { item: "3 Piece Mens Suit", price: 300, service: "Dry Cleaning" },
    { item: "Kurta Pajama", price: 180, service: "Dry Cleaning" },
    { item: "Shoes", price: 400, service: "Dry Cleaning" },
    { item: "Dhoti", price: 120, service: "Dry Cleaning" },
  ],
  female: [
    { item: "Saree", price: "250-300", service: "Dry Cleaning" },
    { item: "2 Piece Ladies Suit", price: 200, service: "Dry Cleaning" },
    { item: "3 Piece Ladies Suit", price: 250, service: "Dry Cleaning" },
    { item: "Kurta", price: 150, service: "Dry Cleaning" },
    { item: "Lehnga 3 Piece", price: "400-450", service: "Dry Cleaning" },
    { item: "Petticoat", price: 120, service: "Dry Cleaning" },
    { item: "Frocky Suit", price: "250-300", service: "Dry Cleaning" },
    { item: "Long Coat", price: 250, service: "Dry Cleaning" },
    { item: "Ladies Trousers", price: 110, service: "Dry Cleaning" },
    { item: "Ladies Shorts", price: 90, service: "Dry Cleaning" },
    { item: "Blazers", price: 200, service: "Dry Cleaning" },
    { item: "Salwar", price: 120, service: "Dry Cleaning" },
  ],
  kids: [
    { item: "Kids Shirts", price: 100, service: "Dry Cleaning" },
    { item: "Kids Jeans", price: 100, service: "Dry Cleaning" },
    { item: "Kids T-shirts", price: 80, service: "Dry Cleaning" },
    { item: "Kids Jackets", price: 150, service: "Dry Cleaning" },
    { item: "Kids Sweaters", price: 150, service: "Dry Cleaning" },
    { item: "Kids Trousers", price: 100, service: "Dry Cleaning" },
    { item: "Kids Shorts", price: 80, service: "Dry Cleaning" },
    { item: "Kids Blazers", price: 180, service: "Dry Cleaning" },
  ],
  homeDecor: [
    { item: "Cushion Cover", price: "60/piece", service: "Dry Cleaning" },
    { item: "Cushion", price: "120/piece", service: "Dry Cleaning" },
    { item: "Heavy Curtain", price: "110-150/panel", service: "Dry Cleaning" },
    { item: "Double Blanket", price: 300, service: "Dry Cleaning" },
    { item: "Single Blanket", price: 250, service: "Dry Cleaning" },
    { item: "Quilt", price: 300, service: "Dry Cleaning" },
  ],
  steamPressing: [
    { item: "Steam Shirts", price: 50, service: "Steam Pressing" },
    { item: "Steam Jeans", price: 50, service: "Steam Pressing" },
    { item: "Steam T-shirts", price: 30, service: "Steam Pressing" },
    { item: "Steam Jackets", price: 80, service: "Steam Pressing" },
    { item: "Steam Sweaters", price: 60, service: "Steam Pressing" },
    { item: "Steam Trousers", price: 40, service: "Steam Pressing" },
    { item: "Steam Blazers", price: 120, service: "Steam Pressing" },
    { item: "Steam Mens Suit", price: 150, service: "Steam Pressing (2 Piece)" },
    { item: "Steam Ladies Suit", price: 150, service: "Steam Pressing" },
    { item: "Steam Saree", price: 100, service: "Steam Pressing" },
  ],
};

const Pricing = () => {
  const phoneNumber = "7678667708";
  const whatsappNumber = "917678667708";

  const PricingCard = ({ items }: { items: { item: string; price: number | string; service: string }[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((service, index) => (
        <Card key={index} className="group hover:shadow-large transition-smooth border-2 hover:border-primary/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                <img 
                  src={iconMap[service.item]} 
                  alt={service.item}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <CardTitle className="text-xl flex-1">
                <span className="text-foreground block">{service.item}</span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground font-normal">{service.service}</span>
                  <span className="text-primary font-bold whitespace-nowrap">₹{service.price}</span>
                </div>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I want to book ${service.item} - ${service.service}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              asChild
            >
              <a
                href={`tel:+91${phoneNumber}`}
                className="flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all your garment care needs. Book instantly via WhatsApp or call us directly.
          </p>
        </div>

        <Tabs defaultValue="male" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-10">
            <TabsTrigger value="male" className="text-sm sm:text-base">Men's</TabsTrigger>
            <TabsTrigger value="female" className="text-sm sm:text-base">Women's</TabsTrigger>
            <TabsTrigger value="kids" className="text-sm sm:text-base">Kids'</TabsTrigger>
            <TabsTrigger value="homeDecor" className="text-sm sm:text-base">Home</TabsTrigger>
            <TabsTrigger value="steamPressing" className="text-sm sm:text-base">Steam</TabsTrigger>
          </TabsList>

          <TabsContent value="male" className="animate-fade-in">
            <PricingCard items={pricingData.male} />
          </TabsContent>

          <TabsContent value="female" className="animate-fade-in">
            <PricingCard items={pricingData.female} />
          </TabsContent>

          <TabsContent value="kids" className="animate-fade-in">
            <PricingCard items={pricingData.kids} />
          </TabsContent>

          <TabsContent value="homeDecor" className="animate-fade-in">
            <PricingCard items={pricingData.homeDecor} />
          </TabsContent>

          <TabsContent value="steamPressing" className="animate-fade-in">
            <PricingCard items={pricingData.steamPressing} />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            * Prices may vary for heavily soiled or delicate items. Free pickup and delivery on orders above ₹500.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
