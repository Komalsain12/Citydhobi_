import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageCircle } from "lucide-react";
import shirtIcon from "@/assets/shirt-icon.png";
import coatIcon from "@/assets/coat-icon.png";
import sareeIcon from "@/assets/saree-icon.png";
import lehengaIcon from "@/assets/lehenga-icon.png";
import kidsIcon from "@/assets/kids-icon.png";

const iconMap: { [key: string]: string } = {
  "Shirt": shirtIcon,
  "Pant/Trouser": shirtIcon,
  "Coat/Blazer": coatIcon,
  "Suit (2 Piece)": coatIcon,
  "Suit (3 Piece)": coatIcon,
  "Tie": shirtIcon,
  "Saree (Plain)": sareeIcon,
  "Saree (Designer)": sareeIcon,
  "Lehenga/Gown": lehengaIcon,
  "Dress": lehengaIcon,
  "Kurti": sareeIcon,
  "Salwar Suit": sareeIcon,
  "Shirt/Top": kidsIcon,
  "Pant/Skirt": kidsIcon,
  "School Uniform": kidsIcon,
  "Jacket": kidsIcon,
  "Sweater": kidsIcon,
};

const pricingData = {
  male: [
    { item: "Shirt", price: 40 },
    { item: "Pant/Trouser", price: 60 },
    { item: "Coat/Blazer", price: 150 },
    { item: "Suit (2 Piece)", price: 250 },
    { item: "Suit (3 Piece)", price: 350 },
    { item: "Tie", price: 30 },
  ],
  female: [
    { item: "Saree (Plain)", price: 80 },
    { item: "Saree (Designer)", price: 150 },
    { item: "Lehenga/Gown", price: 400 },
    { item: "Dress", price: 120 },
    { item: "Kurti", price: 60 },
    { item: "Salwar Suit", price: 150 },
  ],
  kids: [
    { item: "Shirt/Top", price: 30 },
    { item: "Pant/Skirt", price: 40 },
    { item: "Dress", price: 80 },
    { item: "School Uniform", price: 50 },
    { item: "Jacket", price: 100 },
    { item: "Sweater", price: 60 },
  ],
};

const Pricing = () => {
  const phoneNumber = "9999999999";
  const whatsappNumber = "919999999999";

  const PricingCard = ({ items }: { items: { item: string; price: number }[] }) => (
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
              <CardTitle className="text-xl flex-1 flex justify-between items-center">
                <span className="text-foreground">{service.item}</span>
                <span className="text-primary font-bold whitespace-nowrap">₹{service.price}</span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I want to book ${service.item} dry cleaning service`}
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
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
            <TabsTrigger value="male" className="text-base">Men's Wear</TabsTrigger>
            <TabsTrigger value="female" className="text-base">Women's Wear</TabsTrigger>
            <TabsTrigger value="kids" className="text-base">Kids' Wear</TabsTrigger>
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
