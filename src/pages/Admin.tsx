
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  BarChart,
  Layout,
  Home,
  Plus,
  Image,
  Users,
  MessageSquare,
  Settings,
  Eye,
  MousePointer,
  ArrowUpRight
} from "lucide-react";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  status: "available" | "sold" | "rented";
  image: string;
}

const visitData = [
  { name: "Accueil", visits: 1200 },
  { name: "Galerie", visits: 800 },
  { name: "Contact", visits: 600 },
  { name: "Services", visits: 400 },
  { name: "À propos", visits: 300 },
];

const Admin = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const { toast } = useToast();
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const updatePropertyStatus = (id: number, status: "available" | "sold" | "rented") => {
    setProperties(properties.map(prop => 
      prop.id === id ? { ...prop, status } : prop
    ));
    toast({
      title: "Statut mis à jour",
      description: "Le statut de la propriété a été mis à jour avec succès.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r p-6">
        <div className="text-xl font-bold text-primary mb-8">FABIO IMMO Admin</div>
        <nav className="space-y-2">
          <Button
            variant={selectedSection === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedSection("dashboard")}
          >
            <Layout className="mr-2 h-4 w-4" />
            Tableau de bord
          </Button>
          <Button
            variant={selectedSection === "properties" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedSection("properties")}
          >
            <Home className="mr-2 h-4 w-4" />
            Propriétés
          </Button>
          <Button
            variant={selectedSection === "gallery" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedSection("gallery")}
          >
            <Image className="mr-2 h-4 w-4" />
            Galerie
          </Button>
          <Button
            variant={selectedSection === "users" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedSection("users")}
          >
            <Users className="mr-2 h-4 w-4" />
            Utilisateurs
          </Button>
          <Button
            variant={selectedSection === "messages" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedSection("messages")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button
            variant={selectedSection === "settings" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedSection("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Paramètres
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {selectedSection === "dashboard" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Tableau de bord</h1>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Visites Totales</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,300</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% depuis le mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clics</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,205</div>
                  <p className="text-xs text-muted-foreground">
                    +10.5% depuis le mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Propriétés</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    4 ajoutées ce mois
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion</CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">
                    +2.1% depuis le mois dernier
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visits Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Visites par page</CardTitle>
                <CardDescription>
                  Statistiques des visites sur les 30 derniers jours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <Chart data={visitData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visits" fill="#4f46e5" />
                    </Chart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedSection === "properties" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Gestion des propriétés</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter une propriété
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ajouter une nouvelle propriété</DialogTitle>
                    <DialogDescription>
                      Remplissez les informations de la nouvelle propriété
                    </DialogDescription>
                  </DialogHeader>
                  {/* Formulaire d'ajout de propriété */}
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Titre</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Villa moderne avec piscine"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Localisation</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Lomé, Togo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Prix</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="1,500,000 FCFA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>À Vendre</option>
                        <option>À Louer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Images</label>
                      <input type="file" multiple className="w-full" />
                    </div>
                    <Button type="submit" className="w-full">Ajouter</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardContent className="flex justify-between items-center p-6">
                    <div className="flex gap-4">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-sm text-gray-600">{property.location}</p>
                        <p className="text-sm text-primary">{property.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <select
                        value={property.status}
                        onChange={(e) => updatePropertyStatus(property.id, e.target.value as "available" | "sold" | "rented")}
                        className="border rounded px-2 py-1"
                      >
                        <option value="available">Disponible</option>
                        <option value="sold">Vendu</option>
                        <option value="rented">Loué</option>
                      </select>
                      
                      <Button variant="outline">
                        Modifier
                      </Button>
                      
                      <Button variant="destructive">
                        Supprimer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Autres sections à implémenter */}
        {selectedSection === "gallery" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Gestion de la galerie</h1>
            {/* Contenu de la gestion de la galerie */}
          </div>
        )}

        {selectedSection === "users" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Gestion des utilisateurs</h1>
            {/* Contenu de la gestion des utilisateurs */}
          </div>
        )}

        {selectedSection === "messages" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Messages</h1>
            {/* Contenu des messages */}
          </div>
        )}

        {selectedSection === "settings" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Paramètres</h1>
            {/* Contenu des paramètres */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
