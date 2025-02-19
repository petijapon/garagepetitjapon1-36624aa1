
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/lovable-uploads/1e42ff7b-309f-417a-bf72-8396bd7d69af.png",
    "/lovable-uploads/c30ac168-a7d3-4c47-af9d-eb2d7fdeae8d.png",
    "/lovable-uploads/36c40bfa-69e4-4381-9fd6-a5e18133c73b.png",
    "/lovable-uploads/3861c29b-0424-4f72-ab1c-fae1026de077.png",
    "/lovable-uploads/d5580867-bbaa-44a3-9a1e-6f3cec33e172.png",
    "/lovable-uploads/8b7d83bf-cece-40c6-9448-aa75cfd2277c.png",
    "/lovable-uploads/a8e26859-8da8-486e-a157-9817e56e49d2.png",
    "/lovable-uploads/fc701bb2-11fe-4a19-8b9b-adc6c379070b.png",
    "/lovable-uploads/b29e0374-bc59-4e9e-abf1-6a59aed922c4.png",
    "/lovable-uploads/8ed43a06-a59f-4936-bafc-e957747b0ab9.png",
    "/lovable-uploads/06e77160-d9a5-4391-a5cd-2fe8d4274add.png",
    "/lovable-uploads/bf404686-61f4-44fa-bea9-e9fd69214d5d.png",
    "/lovable-uploads/e30605bb-1963-4e6b-be8e-482b4d1078cb.png",
    "/lovable-uploads/893d47e5-0a4a-4871-9b45-2b0ae5524202.png",
    "/lovable-uploads/92c9235f-57ee-4142-9e5f-e7ab25a86dfc.png"
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Notre Galerie</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Image ${index + 1} du Garage Petit Japon`}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal pour l'image en plein écran */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
