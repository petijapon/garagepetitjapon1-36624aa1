
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Search, Home, Key, Banknote, Shield, Wrench, Settings, Battery, Scissors, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mécanique générale",
      description: "Réparation et entretien complet de vos grosses cylindrées.",
      subServices: [
        "Révision complète",
        "Réglage moteur",
        "Changement de filtres",
        "Vidange",
        "Réparation boîte de vitesses"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Diagnostic électronique",
      description: "Analyse complète des systèmes électroniques de votre moto.",
      subServices: [
        "Diagnostic électronique",
        "Reprogrammation",
        "Réparation système électrique",
        "Installation d'accessoires électroniques",
        "Mise à jour logiciel"
      ]
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Système électrique",
      description: "Maintenance et réparation des composants électriques.",
      subServices: [
        "Batterie",
        "Système de charge",
        "Éclairage",
        "Démarreur",
        "Alternateur"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Entretien préventif",
      description: "Maintenez votre moto en parfait état de marche.",
      subServices: [
        "Contrôle périodique",
        "Vidange d'huile",
        "Équilibrage des roues",
        "Réglage des freins",
        "Contrôle des niveaux"
      ]
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Carrosserie",
      description: "Réparation et personnalisation de l'aspect de votre moto.",
      subServices: [
        "Peinture",
        "Débosselage",
        "Polissage",
        "Traitement anticorrosion",
        "Customisation"
      ]
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance",
      description: "Optimisation des performances de votre machine.",
      subServices: [
        "Réglage injection",
        "Optimisation puissance",
        "Installation échappement sport",
        "Amélioration suspension",
        "Customisation moteur"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-6">Nos Services</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Découvrez nos services professionnels pour l'entretien et la réparation de vos grosses cylindrées
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
              <ul className="space-y-2 mb-6">
                {service.subServices.map((subService, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {subService}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Vous avez un projet spécifique ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins particuliers et bénéficier de nos conseils d'experts
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
