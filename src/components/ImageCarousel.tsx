
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/lovable-uploads/22318024-04a6-4cb5-8e1d-cd1c8ecdff13.png",
  "/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png",
  "/lovable-uploads/21b4100a-3af7-41cc-94c4-16e7224a3176.png",
  "/lovable-uploads/78548c65-1594-4bd8-909e-e868be4e4e8c.png",
  "/lovable-uploads/0451645d-ad57-4fb6-85e1-6d300e2c13c4.png",
  "/lovable-uploads/7b171103-f05a-4f2c-a782-322ce810f891.png"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Garage Petit Japon - Expertise moto"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default ImageCarousel;
