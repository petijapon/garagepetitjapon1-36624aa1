
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  status: "available" | "sold" | "rented";
  image: string;
}

const Admin = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const { toast } = useToast();

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
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-6">Administration des propriétés</h1>
      
      <div className="space-y-6">
        <Button onClick={() => {/* Logique d'ajout */}}>
          Ajouter une nouvelle propriété
        </Button>

        <div className="grid gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
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
                
                <Button variant="outline" onClick={() => {/* Logique de modification */}}>
                  Modifier
                </Button>
                
                <Button variant="destructive" onClick={() => {/* Logique de suppression */}}>
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
