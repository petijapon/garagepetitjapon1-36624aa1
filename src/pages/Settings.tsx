
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Trash2, Edit, ImagePlus, Image as ImageIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Annonce {
  id: number;
  title: string;
  description: string;
  price: string;
  images: string[];
}

interface GalleryImage {
  id: number;
  url: string;
}

interface HomeContent {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Settings = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>(() => {
    const saved = localStorage.getItem('annonces');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem('galleryImages');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [homeContent, setHomeContent] = useState<HomeContent[]>(() => {
    const saved = localStorage.getItem('homeContent');
    return saved ? JSON.parse(saved) : [];
  });

  const [newAnnonce, setNewAnnonce] = useState<Partial<Annonce>>({ images: [] });
  const [newHomeContent, setNewHomeContent] = useState<Partial<HomeContent>>({});
  const { toast } = useToast();

  // Gestion des annonces
  const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewAnnonce(prev => ({
            ...prev,
            images: [...(prev.images || []), reader.result as string]
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleAddAnnonce = () => {
    if (!newAnnonce.title || !newAnnonce.description || !newAnnonce.price || !newAnnonce.images?.length) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires et ajouter au moins une image",
        variant: "destructive",
      });
      return;
    }

    const annonceToAdd = {
      id: Date.now(),
      title: newAnnonce.title,
      description: newAnnonce.description,
      price: newAnnonce.price,
      images: newAnnonce.images,
    };

    const updatedAnnonces = [...annonces, annonceToAdd];
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    setNewAnnonce({ images: [] });
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

  // Gestion de la galerie
  const handleAddGalleryImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImage = {
            id: Date.now(),
            url: reader.result as string
          };
          const updatedImages = [...galleryImages, newImage];
          setGalleryImages(updatedImages);
          localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDeleteGalleryImage = (id: number) => {
    const updatedImages = galleryImages.filter(img => img.id !== id);
    setGalleryImages(updatedImages);
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
  };

  // Gestion du contenu de la page d'accueil
  const handleAddHomeContent = () => {
    if (!newHomeContent.title || !newHomeContent.description || !newHomeContent.image) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    const contentToAdd = {
      id: Date.now(),
      title: newHomeContent.title,
      description: newHomeContent.description,
      image: newHomeContent.image,
    };

    const updatedContent = [...homeContent, contentToAdd];
    setHomeContent(updatedContent);
    localStorage.setItem('homeContent', JSON.stringify(updatedContent));
    setNewHomeContent({});
    toast({
      title: "Succès",
      description: "Le contenu a été ajouté avec succès",
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold mb-6">Paramètres</h1>
        <p className="text-gray-600 mb-12">Gérez votre contenu</p>

        <Tabs defaultValue="boutique" className="space-y-6">
          <TabsList>
            <TabsTrigger value="boutique">Boutique</TabsTrigger>
            <TabsTrigger value="galerie">Galerie</TabsTrigger>
            <TabsTrigger value="accueil">Page d'accueil</TabsTrigger>
          </TabsList>

          <TabsContent value="boutique">
            <div className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Ajouter une annonce
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
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
                      <label className="text-sm font-medium mb-2 block">Images</label>
                      <div 
                        className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer"
                        onClick={() => document.getElementById('annonce-images')?.click()}
                      >
                        <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Cliquez pour ajouter des images</p>
                        <input 
                          id="annonce-images"
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          onChange={handleAddImages}
                        />
                      </div>
                      {newAnnonce.images && newAnnonce.images.length > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          {newAnnonce.images.map((image, index) => (
                            <img 
                              key={index}
                              src={image} 
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <Button onClick={handleAddAnnonce} className="w-full">Ajouter</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="grid gap-6">
                {annonces.map((annonce) => (
                  <Card key={annonce.id}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                          {annonce.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${annonce.title} - Image ${index + 1}`}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{annonce.title}</h3>
                          <p className="text-gray-600">{annonce.description}</p>
                          <p className="text-primary font-semibold mt-2">{annonce.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
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
          </TabsContent>

          <TabsContent value="galerie">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Ajouter des images à la galerie</h2>
                <div 
                  className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer"
                  onClick={() => document.getElementById('gallery-images')?.click()}
                >
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-4 text-gray-600">Cliquez pour ajouter des images à la galerie</p>
                  <input
                    id="gallery-images"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleAddGalleryImage}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.url}
                      alt="Gallery image"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleDeleteGalleryImage(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accueil">
            <div className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Ajouter du contenu
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Nouveau contenu</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Titre</label>
                      <Input
                        value={newHomeContent.title || ""}
                        onChange={(e) => setNewHomeContent({ ...newHomeContent, title: e.target.value })}
                        placeholder="Titre"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Description</label>
                      <Textarea
                        value={newHomeContent.description || ""}
                        onChange={(e) => setNewHomeContent({ ...newHomeContent, description: e.target.value })}
                        placeholder="Description"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Image</label>
                      <div 
                        className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer"
                        onClick={() => document.getElementById('home-image')?.click()}
                      >
                        <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Cliquez pour ajouter une image</p>
                        <input 
                          id="home-image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setNewHomeContent({ ...newHomeContent, image: reader.result as string });
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                      {newHomeContent.image && (
                        <div className="mt-4">
                          <img 
                            src={newHomeContent.image} 
                            alt="Preview" 
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                    <Button onClick={handleAddHomeContent} className="w-full">Ajouter</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="grid gap-6">
                {homeContent.map((content) => (
                  <Card key={content.id}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex gap-4 items-center">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{content.title}</h3>
                          <p className="text-gray-600">{content.description}</p>
                        </div>
                      </div>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => {
                          const updatedContent = homeContent.filter(c => c.id !== content.id);
                          setHomeContent(updatedContent);
                          localStorage.setItem('homeContent', JSON.stringify(updatedContent));
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
