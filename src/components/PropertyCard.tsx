
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    type: string;
    image: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-property group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm font-medium">
          {property.type}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">{property.price}</span>
          <button className="btn-primary text-sm">Contacter</button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
