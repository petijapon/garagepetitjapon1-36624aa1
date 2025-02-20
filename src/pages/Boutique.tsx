
import { useState, useEffect } from "react";
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

interface Annonce {
  id: number;
  title: string;
  description: string;
  price: string;
  images: string[];
}

const Boutique = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>(() => {
    const saved = localStorage.getItem('annonces');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedAnnonces = localStorage.getItem('annonces');
      if (updatedAnnonces) {
        setAnnonces(JSON.parse(updatedAnnonces));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-6">Notre Boutique</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Découvrez nos produits et annonces disponibles
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {annonces.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden relative group">
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`${item.title} - Image ${imageIndex + 1}`}
                      className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                        imageIndex === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={`https://wa.me/22890010544?text=Je suis intéressé par ${item.title} à ${item.price}`}
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

        {/* Section garanties */}
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

export default Boutique;
