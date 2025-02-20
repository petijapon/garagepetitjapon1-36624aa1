
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Trash2, Edit, FileText, ShoppingBag, Image as ImageIcon, BarChart, Users, Settings as SettingsIcon } from "lucide-react";
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

interface Annonce {
  id: number;
  title: string;
  description: string;
  price: string;
  images: string[];
}

const Settings = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>(() => {
    const saved = localStorage.getItem('annonces');
    return saved ? JSON.parse(saved) : [];
  });
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: "Total Produits", value: annonces.length, icon: ShoppingBag, color: "bg-blue-500" },
    { title: "Vues", value: "1,234", icon: Users, color: "bg-green-500" },
    { title: "Posts", value: "45", icon: FileText, color: "bg-purple-500" },
    { title: "Images", value: "89", icon: ImageIcon, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Tableau de Bord</h1>
          <Button onClick={() => setActiveTab('products')}>
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un Produit
          </Button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Graphique et Liste */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Graphique */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader>
              <CardTitle>Aperçu des Ventes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
                <BarChart className="w-12 h-12 text-gray-300" />
              </div>
            </CardContent>
          </Card>

          {/* Liste récente */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Activités Récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {annonces.slice(0, 5).map((annonce) => (
                  <div key={annonce.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={annonce.images[0]}
                        alt={annonce.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{annonce.title}</h4>
                      <p className="text-sm text-gray-500">{annonce.price}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

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
              variant={activeTab === 'overview' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('overview')}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Vue d'ensemble
            </Button>
            <Button
              variant={activeTab === 'products' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('products')}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Produits
            </Button>
            <Button
              variant={activeTab === 'gallery' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('gallery')}
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Galerie
            </Button>
            <Button
              variant={activeTab === 'settings' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('settings')}
            >
              <SettingsIcon className="mr-2 h-4 w-4" />
              Paramètres
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Settings;
