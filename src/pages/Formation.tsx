import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { BookOpen, Users, Clock, GraduationCap, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formations = [
  {
    id: 1,
    title: "Mécanique Générale",
    description: "Formation complète sur la mécanique des motos de grosse cylindrée",
    duration: "3 mois",
    mode: "Présentiel/En ligne",
    price: "350,000 FCFA",
    image: "/lovable-uploads/709d8b32-29e5-4a49-9ce5-f2e69888bba4.png"
  },
  {
    id: 2,
    title: "Électronique Moto",
    description: "Spécialisation en systèmes électroniques des motos modernes",
    duration: "2 mois",
    mode: "Présentiel/En ligne",
    price: "250,000 FCFA",
    image: "/lovable-uploads/0c518f2a-2752-4852-8e61-e77d7677eb27.png"
  },
  {
    id: 3,
    title: "Diagnostic et Réparation",
    description: "Techniques avancées de diagnostic et réparation",
    duration: "2 mois",
    mode: "Présentiel",
    price: "300,000 FCFA",
    image: "/lovable-uploads/c30ac168-a7d3-4c47-af9d-eb2d7fdeae8d.png"
  }
];

interface FormationProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  mode: string;
  price: string;
  image: string;
}

const FormationCard = ({ formation }: { formation: FormationProps }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer les données d'inscription
    toast({
      title: "Inscription envoyée !",
      description: "Nous vous contacterons bientôt pour confirmer votre inscription.",
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={formation.image} 
          alt={formation.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{formation.title}</CardTitle>
        <CardDescription>{formation.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Durée: {formation.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Mode: {formation.mode}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Prix: {formation.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">S'inscrire</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Inscription à la formation {formation.title}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <Input
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <Input
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full">Envoyer l'inscription</Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Formation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Centre de Formation</h1>
          <p className="text-gray-600">
            Développez vos compétences en mécanique moto avec nos formations
            spécialisées, disponibles en présentiel à Lomé ou en ligne.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Formation Complète</h3>
            <p className="text-gray-600">
              Programmes détaillés couvrant tous les aspects de la mécanique moto
            </p>
          </Card>
          <Card className="text-center p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Expertise Professionnelle</h3>
            <p className="text-gray-600">
              Formateurs expérimentés spécialisés en motos de grosse cylindrée
            </p>
          </Card>
          <Card className="text-center p-6">
            <CalendarDays className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Flexibilité</h3>
            <p className="text-gray-600">
              Formations disponibles en présentiel ou en ligne selon vos besoins
            </p>
          </Card>
        </div>

        {/* Liste des formations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Formation;
