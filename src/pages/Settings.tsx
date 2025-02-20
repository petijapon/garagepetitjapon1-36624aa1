
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Trash2, Edit, ImagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Annonce {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const Settings = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>(() => {
    const saved = localStorage.getItem('annonces');
    return saved ? JSON.parse(saved) : [];
  });
  const [newAnnonce, setNewAnnonce] = useState<Partial<Annonce>>({});
  const { toast } = useToast();

  const handleAddAnnonce = () => {
    if (!newAnnonce.title || !newAnnonce.description || !newAnnonce.price) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    const annonceToAdd = {
      id: Date.now(),
      title: newAnnonce.title,
      description: newAnnonce.description,
      price: newAnnonce.price,
      image: newAnnonce.image || "/placeholder.svg",
    };

    const updatedAnnonces = [...annonces, annonceToAdd];
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    setNewAnnonce({});
    toast({
      title: "Succès",
      description: "L'annonce a été ajoutée avec succès",
    });
  };

  const handleDeleteAnnonce = (id: number) => {
    const updatedAnnonces = annonces.filter(annonce => annonce.id !== id);
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    toast({
      title: "Succès",
      description: "L'annonce a été supprimée avec succès",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold mb-6">Paramètres</h1>
        <p className="text-gray-600 mb-12">Gérez vos annonces et votre contenu</p>

        {/* Ajouter une annonce */}
        <div className="mb-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Ajouter une annonce
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nouvelle annonce</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Titre</label>
                  <Input
                    value={newAnnonce.title || ""}
                    onChange={(e) => setNewAnnonce({ ...newAnnonce, title: e.target.value })}
                    placeholder="Titre de l'annonce"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Textarea
                    value={newAnnonce.description || ""}
                    onChange={(e) => setNewAnnonce({ ...newAnnonce, description: e.target.value })}
                    placeholder="Description de l'annonce"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Prix</label>
                  <Input
                    value={newAnnonce.price || ""}
                    onChange={(e) => setNewAnnonce({ ...newAnnonce, price: e.target.value })}
                    placeholder="Prix"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Image</label>
                  <div className="border-2 border-dashed rounded-lg p-4 text-center">
                    <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Cliquez pour ajouter une image</p>
                  </div>
                </div>
                <Button onClick={handleAddAnnonce} className="w-full">Ajouter</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Liste des annonces */}
        <div className="grid gap-6">
          {annonces.map((annonce) => (
            <Card key={annonce.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex gap-4 items-center">
                  <img
                    src={annonce.image}
                    alt={annonce.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{annonce.title}</h3>
                    <p className="text-gray-600">{annonce.description}</p>
                    <p className="text-primary font-semibold mt-2">{annonce.price}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={() => handleDeleteAnnonce(annonce.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
