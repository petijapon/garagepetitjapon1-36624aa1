
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Search, Home, Key, Banknote, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Vente de biens",
      description: "Achat et vente de propriétés résidentielles et commerciales.",
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Location",
      description: "Location de maisons, appartements et espaces commerciaux.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Gestion locative",
      description: "Gestion complète de vos biens immobiliers.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Recherche personnalisée",
      description: "Trouvez le bien qui correspond exactement à vos critères.",
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Estimation",
      description: "Estimation précise de la valeur de votre bien.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conseil juridique",
      description: "Accompagnement dans toutes vos démarches administratives.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-6">Nos Prestations</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Découvrez nos services immobiliers sur mesure pour répondre à tous vos besoins
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Vous avez un projet immobilier ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et bénéficier de nos conseils d'experts
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
