
import { useState } from "react";
import { Search, MapPin, Home, Building2, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    id: 1,
    title: "Villa Moderne avec Piscine",
    location: "Lomé, Togo",
    price: "250,000,000 FCFA",
    type: "À Vendre",
    image: "/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"
  },
  {
    id: 2,
    title: "Appartement de Standing",
    location: "Adidogomé, Togo",
    price: "150,000 FCFA/mois",
    type: "À Louer",
    image: "/lovable-uploads/7f07a3d6-584d-4c57-b720-38a651a69c67.png"
  },
  // ... Ajoutez plus de propriétés
];

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          {/* Barre de recherche */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type de bien</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Tous les types</option>
                  <option value="house">Maison</option>
                  <option value="apartment">Appartement</option>
                  <option value="land">Terrain</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Localisation</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Quartier, ville..."
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Recherche</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Mot-clé..."
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-primary hover:bg-primary/90 h-12">
                  <Search className="mr-2 h-4 w-4" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>

          {/* Liste des propriétés */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
