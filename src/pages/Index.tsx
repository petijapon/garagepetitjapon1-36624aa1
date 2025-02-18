import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const reviews = [
  {
    id: 1,
    name: "Kossi Adebayor",
    location: "Lomé, Togo",
    rating: 5,
    comment: "Excellent service ! L'équipe de FABIO IMMOBILIER a su comprendre mes besoins et m'a trouvé la maison parfaite.",
    date: "Mars 2024"
  },
  {
    id: 2,
    name: "Aïcha Ouedraogo",
    location: "Ouagadougou, Burkina Faso",
    rating: 5,
    comment: "Un professionnalisme remarquable. Je recommande vivement leurs services pour tout projet immobilier.",
    date: "Février 2024"
  },
  {
    id: 3,
    name: "Koffi Gnassingbé",
    location: "Kara, Togo",
    rating: 4,
    comment: "Très satisfait de l'accompagnement pour l'achat de mon appartement. Une équipe à l'écoute.",
    date: "Février 2024"
  },
  {
    id: 4,
    name: "Rachid Zinsou",
    location: "Cotonou, Bénin",
    rating: 5,
    comment: "Service impeccable et suivi personnalisé. FABIO IMMOBILIER a dépassé mes attentes.",
    date: "Janvier 2024"
  }
];

const Index = () => {
  const [searchType, setSearchType] = useState("Acheter");
  const [propertyType, setPropertyType] = useState("Tous les biens");
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const { toast } = useToast();

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Merci pour votre avis !",
      description: "Votre commentaire a été envoyé avec succès.",
    });
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <ImageCarousel />
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
            FABIO IMMOBILIER vous accompagne dans votre projet immobilier
          </motion.p>

          {/* Search Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option>Acheter</option>
                <option>Vendre</option>
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
                <option>Terrain</option>
              </select>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                <Search className="mr-2 h-4 w-4" />
                Rechercher
              </Button>

              <ProjectForm />
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

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Avis de nos clients</h2>
          <p className="text-gray-600 text-center mb-12">Découvrez ce que nos clients disent de nous</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add Review Dialog */}
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="font-semibold">
                  Laisser un avis
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Laissez votre avis</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleReviewSubmit} className="space-y-6 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Votre nom</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Note</label>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 cursor-pointer ${
                            i < newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                          onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Votre commentaire</label>
                    <textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Envoyer mon avis
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
