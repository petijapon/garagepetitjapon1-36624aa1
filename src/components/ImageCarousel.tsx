
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/lovable-uploads/9beac81f-c3a4-4e13-bcaa-1fbeed953c95.png",
  "/lovable-uploads/4454d84e-ba4a-499a-9d74-0ffd93f632c2.png",
  "/lovable-uploads/b17b0de7-5b52-49d0-a050-9c52a498224f.png",
  "/lovable-uploads/00371eea-0e16-4eaa-a4ba-b2573277f3a5.png",
  "/lovable-uploads/e2706fe9-e5ab-47d3-b163-0680360a5314.png",
  "/lovable-uploads/d7f25fe9-4f2a-477e-a5d0-18145b75ecf8.png"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

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
          alt="Property showcase"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default ImageCarousel;
