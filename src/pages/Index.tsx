
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Villa avec Piscine",
    location: "Lomé, Togo",
    price: "1,500,000 FCFA/mois",
    type: "À Louer",
    image: "/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"
  },
  {
    id: 2,
    title: "Villa de Luxe",
    location: "Adidogomé, Togo",
    price: "Sur demande",
    type: "À Vendre",
    image: "/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"
  },
  {
    id: 3,
    title: "Maison Moderne",
    location: "Baguida, Togo",
    price: "Sur demande",
    type: "À Vendre",
    image: "/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"
  }
];

const Index = () => {
  const [searchType, setSearchType] = useState("Acheter");
  const [propertyType, setPropertyType] = useState("Tous les biens");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black/40 overflow-hidden">
        <img 
          src="/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="container-custom h-full flex flex-col items-center justify-center text-white relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl text-center mb-6"
          >
            Trouvez votre bien immobilier idéal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-center"
          >
            ASBAN IMMO vous accompagne dans votre projet immobilier
          </motion.p>

          {/* Search Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option>Acheter</option>
                <option>Louer</option>
              </select>
              
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option>Tous les biens</option>
                <option>Maison</option>
                <option>Appartement</option>
                <option>Villa</option>
                <option>Terrain</option>
              </select>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                <Search className="mr-2 h-4 w-4" />
                Rechercher
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Biens à la une</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Décrivez-nous votre projet immobilier
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous accompagner dans toutes les étapes de votre projet
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
