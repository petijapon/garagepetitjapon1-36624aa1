
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Phone, Tool, Wrench, ShoppingBag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    id: 1,
    title: "Réparation & Entretien",
    description: "Service complet pour vos grosses motos",
    icon: <Wrench className="h-8 w-8" />,
    image: "/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png"
  },
  {
    id: 2,
    title: "Vente d'Accessoires",
    description: "Large gamme de pièces et accessoires",
    icon: <ShoppingBag className="h-8 w-8" />,
    image: "/lovable-uploads/0451645d-ad57-4fb6-85e1-6d300e2c13c4.png"
  },
  {
    id: 3,
    title: "Diagnostic",
    description: "Analyse complète de votre moto",
    icon: <Tool className="h-8 w-8" />,
    image: "/lovable-uploads/21b4100a-3af7-41cc-94c4-16e7224a3176.png"
  }
];

const reviews = [
  {
    id: 1,
    name: "Kodjo Mensah",
    location: "Lomé, Togo",
    rating: 5,
    comment: "Service exceptionnel ! L'équipe a parfaitement réparé ma moto et les prix sont raisonnables.",
    date: "Mars 2024"
  },
  {
    id: 2,
    name: "Ahmed Ouedraogo",
    location: "Ouagadougou, Burkina Faso",
    rating: 5,
    comment: "Professionnalisme remarquable. Je recommande vivement leurs services pour l'entretien des grosses cylindrées.",
    date: "Février 2024"
  },
  {
    id: 3,
    name: "Kofi Agbeko",
    location: "Kara, Togo",
    rating: 4,
    comment: "Excellent service après-vente et conseils pertinents pour l'entretien de ma moto.",
    date: "Février 2024"
  },
  {
    id: 4,
    name: "Rachid Zinsou",
    location: "Cotonou, Bénin",
    rating: 5,
    comment: "Le meilleur garage de la région pour les grosses motos. Personnel qualifié et prix compétitifs.",
    date: "Janvier 2024"
  }
];

const Index = () => {
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
            Expertise mécanique et accessoires premium pour grosses motos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-center"
          >
            Le spécialiste des grosses cylindrées à Lomé
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <Button size="lg" asChild>
              <Link to="/contact" className="gap-2">
                <Calendar className="h-5 w-5" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10">
              <Link to="/services" className="gap-2">
                <Tool className="h-5 w-5" />
                Nos services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/services">
                  <Button variant="outline" className="w-full">
                    En savoir plus
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
              <p className="text-gray-600 mb-8">
                Besoin d'un service ou d'un conseil ? Notre équipe est à votre disposition.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Téléphones :</p>
                    <p className="text-gray-600">90 01 05 44 / 79 70 10 00 / 99 41 02 06</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Adresse :</p>
                    <p className="text-gray-600">133, Av. de la Libération, Hanoukopé - BP 1364, Lomé - Togo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/3a142725-ac1b-43ac-b27f-eb37921a6bcb.png"
                alt="Notre atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
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
                className="bg-white p-6 rounded-xl shadow-sm"
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
