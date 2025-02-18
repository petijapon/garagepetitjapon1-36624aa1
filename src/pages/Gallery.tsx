
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/lovable-uploads/a3202698-f005-4e26-9355-08753a8649b6.png",
    "/lovable-uploads/a0e53ac6-ffa2-4ae2-960a-01eee77afa84.png",
    "/lovable-uploads/7f07a3d6-584d-4c57-b720-38a651a69c67.png",
    "/lovable-uploads/d6db9d47-c713-4e67-b5e1-77ed99deced5.png",
    "/lovable-uploads/dfb29c06-db65-40f7-a182-f1aba137051c.png",
    "/lovable-uploads/5f2ccb5a-7ba2-44bc-b70c-239bb5c1b49f.png",
    // ... Ajoutez toutes les autres images
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
                  alt={`Image ${index + 1}`}
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
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
