import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  BarChart,
  ShoppingBag,
  Image as ImageIcon,
  MessageSquare,
  GraduationCap,
  ThumbsUp,
  X
} from "lucide-react";
import {
  Card,
  CardContent,
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

interface FormationInscription {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  formation: string;
  date: string;
  status: "pending" | "approved" | "rejected";
}

interface Avis {
  id: number;
  nom: string;
  commentaire: string;
  note: number;
  status: "pending" | "approved" | "rejected";
}

export const AdminTabs = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [inscriptions] = useState<FormationInscription[]>([
    {
      id: 1,
      nom: "Jean Dupont",
      email: "jean@example.com",
      telephone: "90123456",
      formation: "Mécanique Générale",
      date: "2024-02-23",
      status: "pending"
    }
  ]);
  const [avis] = useState<Avis[]>([
    {
      id: 1,
      nom: "Pierre Martin",
      commentaire: "Excellent service, très professionnel !",
      note: 5,
      status: "pending"
    }
  ]);

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    toast({
      title: "Produit ajouté",
      description: "Le produit a été ajouté avec succès."
    });
  };

  const handleAddImage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    toast({
      title: "Image ajoutée",
      description: "L'image a été ajoutée à la galerie avec succès."
    });
  };

  const handleInscriptionAction = (id: number, action: "approve" | "reject") => {
    toast({
      title: action === "approve" ? "Inscription approuvée" : "Inscription rejetée",
      description: `L'inscription a été ${action === "approve" ? "approuvée" : "rejetée"} avec succès.`
    });
  };

  const handleAvisAction = (id: number, action: "approve" | "reject") => {
    toast({
      title: action === "approve" ? "Avis approuvé" : "Avis rejeté",
      description: `L'avis a été ${action === "approve" ? "approuvé" : "rejeté"} avec succès.`
    });
  };

  return (
    <div className="space-y-8">
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Inscriptions en attente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{inscriptions.filter(i => i.status === "pending").length}</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Avis en attente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{avis.filter(a => a.status === "pending").length}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "products" && (
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Ajouter un produit</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau produit</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block mb-2">Nom du produit</label>
                  <Input name="title" required />
                </div>
                <div>
                  <label className="block mb-2">Description</label>
                  <Textarea name="description" required />
                </div>
                <div>
                  <label className="block mb-2">Prix</label>
                  <Input name="price" type="number" required />
                </div>
                <div>
                  <label className="block mb-2">Images</label>
                  <Input name="images" type="file" multiple accept="image/*" required />
                </div>
                <Button type="submit">Ajouter</Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Liste des produits existants */}
          <div className="mt-6">
            {/* ... Products list will go here ... */}
          </div>
        </div>
      )}

      {activeTab === "gallery" && (
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Ajouter des images</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter à la galerie</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddImage} className="space-y-4">
                <div>
                  <label className="block mb-2">Images</label>
                  <Input name="images" type="file" multiple accept="image/*" required />
                </div>
                <Button type="submit">Ajouter</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {activeTab === "inscriptions" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Inscriptions aux formations</h2>
          <div className="space-y-4">
            {inscriptions.map(inscription => (
              <Card key={inscription.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{inscription.nom}</h3>
                      <p className="text-sm text-gray-500">{inscription.email}</p>
                      <p className="text-sm text-gray-500">{inscription.telephone}</p>
                      <p>Formation : {inscription.formation}</p>
                      <p className="text-sm text-gray-500">Date : {inscription.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="default" 
                        onClick={() => handleInscriptionAction(inscription.id, "approve")}
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Approuver
                      </Button>
                      <Button 
                        variant="destructive"
                        onClick={() => handleInscriptionAction(inscription.id, "reject")}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Rejeter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "avis" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Avis en attente</h2>
          <div className="space-y-4">
            {avis.map(avis => (
              <Card key={avis.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{avis.nom}</h3>
                      <p>{avis.commentaire}</p>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: avis.note }).map((_, i) => (
                          <ThumbsUp key={i} className="w-4 h-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="default"
                        onClick={() => handleAvisAction(avis.id, "approve")}
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Approuver
                      </Button>
                      <Button 
                        variant="destructive"
                        onClick={() => handleAvisAction(avis.id, "reject")}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Rejeter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Menu latéral */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r p-6">
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="/lovable-uploads/e10b4a98-2601-49a5-a202-dc319707a0c2.png" 
            alt="Logo" 
            className="h-8"
          />
          <span className="font-bold">Administration</span>
        </div>
        
        <nav className="space-y-2">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <BarChart className="mr-2 h-4 w-4" />
            Vue d'ensemble
          </Button>
          <Button
            variant={activeTab === "products" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("products")}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Produits
          </Button>
          <Button
            variant={activeTab === "gallery" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("gallery")}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Galerie
          </Button>
          <Button
            variant={activeTab === "inscriptions" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("inscriptions")}
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            Inscriptions
          </Button>
          <Button
            variant={activeTab === "avis" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("avis")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Avis
          </Button>
        </nav>
      </div>
    </div>
  );
};
