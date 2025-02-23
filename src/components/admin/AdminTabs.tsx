import { useState, useEffect } from "react";
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
  X,
  Pencil,
  Trash
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

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
}

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
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [];
  });
  const [images, setImages] = useState<string[]>(() => {
    const saved = localStorage.getItem('gallery');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('gallery', JSON.stringify(images));
  }, [images]);

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newProduct = {
      id: Date.now().toString(),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      images: ['/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png']
    };

    setProducts([...products, newProduct]);
    toast({
      title: "Produit ajouté",
      description: "Le produit a été ajouté avec succès."
    });
    (event.target as HTMLFormElement).reset();
  };

  const handleUpdateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingProduct) return;

    const formData = new FormData(event.currentTarget);
    const updatedProduct = {
      ...editingProduct,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
    };

    setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
    setEditingProduct(null);
    toast({
      title: "Produit modifié",
      description: "Le produit a été modifié avec succès."
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Produit supprimé",
      description: "Le produit a été supprimé avec succès."
    });
  };

  const handleAddImage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const imageInput = event.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
    if (imageInput.files && imageInput.files.length > 0) {
      const newImages = Array.from(imageInput.files).map(() => `/lovable-uploads/${Date.now()}.png`);
      setImages([...images, ...newImages]);
      toast({
        title: "Images ajoutées",
        description: "Les images ont été ajoutées à la galerie avec succès."
      });
    }
    event.currentTarget.reset();
  };

  const handleDeleteImage = (image: string) => {
    setImages(images.filter(i => i !== image));
    toast({
      title: "Image supprimée",
      description: "L'image a été supprimée avec succès."
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
                  <Input name="price" required />
                </div>
                <Button type="submit">Ajouter</Button>
              </form>
            </DialogContent>
          </Dialog>

          <div className="mt-6 grid gap-6">
            {products.map(product => (
              <Card key={product.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <p className="font-semibold mt-2">{product.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline"
                            onClick={() => setEditingProduct(product)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Modifier le produit</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleUpdateProduct} className="space-y-4">
                            <div>
                              <label className="block mb-2">Nom du produit</label>
                              <Input 
                                name="title" 
                                defaultValue={editingProduct?.title}
                                required 
                              />
                            </div>
                            <div>
                              <label className="block mb-2">Description</label>
                              <Textarea 
                                name="description" 
                                defaultValue={editingProduct?.description}
                                required 
                              />
                            </div>
                            <div>
                              <label className="block mb-2">Prix</label>
                              <Input 
                                name="price" 
                                defaultValue={editingProduct?.price}
                                required 
                              />
                            </div>
                            <Button type="submit">Mettre à jour</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <Button 
                        variant="destructive"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDeleteImage(image)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
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
