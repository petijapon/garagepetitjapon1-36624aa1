
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const accessories = [
  {
    id: 1,
    name: "Casque Intégral Pro",
    description: "Casque haut de gamme avec système de ventilation avancé",
    price: "89.900 FCFA",
    image: "/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png",
    category: "Protection"
  },
  {
    id: 2,
    name: "Gants Racing",
    description: "Gants en cuir avec protection renforcée",
    price: "29.900 FCFA",
    image: "/lovable-uploads/0451645d-ad57-4fb6-85e1-6d300e2c13c4.png",
    category: "Protection"
  },
  {
    id: 3,
    name: "Kit Chaîne Premium",
    description: "Kit chaîne haute performance pour grosses cylindrées",
    price: "75.900 FCFA",
    image: "/lovable-uploads/21b4100a-3af7-41cc-94c4-16e7224a3176.png",
    category: "Pièces"
  },
  {
    id: 4,
    name: "Huile Moteur Racing",
    description: "Huile synthétique haute performance 10W-40",
    price: "15.900 FCFA",
    image: "/lovable-uploads/78548c65-1594-4bd8-909e-e868be4e4e8c.png",
    category: "Entretien"
  },
  {
    id: 5,
    name: "Plaquettes de Frein",
    description: "Plaquettes de frein haute performance",
    price: "35.900 FCFA",
    image: "/lovable-uploads/7b171103-f05a-4f2c-a782-322ce810f891.png",
    category: "Pièces"
  },
  {
    id: 6,
    name: "Blouson Moto",
    description: "Blouson en cuir avec protections homologuées",
    price: "129.900 FCFA",
    image: "/lovable-uploads/22318024-04a6-4cb5-8e1d-cd1c8ecdff13.png",
    category: "Protection"
  }
];

const categories = ["Tous", "Protection", "Pièces", "Entretien"];

const Accessories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-6">Nos Accessoires</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Découvrez notre sélection d'accessoires et de pièces de qualité pour votre moto
        </p>

        {/* Filtres par catégorie */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tous" ? "default" : "outline"}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grille d'accessoires */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-foreground">
                      {item.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={`https://wa.me/22890010544?text=Je suis intéressé par ${item.name} à ${item.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Commander
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Garantie et services */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Garantie Qualité</h3>
            <p className="text-gray-600">Tous nos produits sont garantis authentiques</p>
          </div>
          <div className="text-center">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Click & Collect</h3>
            <p className="text-gray-600">Retirez vos commandes en magasin</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Service Client</h3>
            <p className="text-gray-600">Conseils experts et support technique</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accessories;
