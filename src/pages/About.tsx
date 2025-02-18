
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Users, Star, Clock, BadgeCheck, Home } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Qui sommes-nous ?</h1>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <p className="text-lg leading-relaxed text-gray-700">
              Fabio IMMO est une agence immobilière de premier plan au Togo, avec plus de 30 ans d'expérience. 
              Nous sommes reconnus parmi les meilleures agences du pays pour notre professionnalisme et notre 
              engagement envers la satisfaction de nos clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8">Nos Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Home className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Vente</h3>
                  <p className="text-gray-600">Nous facilitons l'achat et la vente de propriétés avec transparence et sécurité.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Nous offrons des solutions de location adaptées à vos besoins résidentiels et commerciaux.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <BadgeCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Gestion</h3>
                  <p className="text-gray-600">Nous assurons l'entretien et la gestion de vos biens pour un rendement optimal.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Conseil</h3>
                  <p className="text-gray-600">Nos experts vous fournissent des conseils personnalisés pour maximiser vos investissements.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8">Pourquoi Nous Choisir ?</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expérience</h3>
                  <p className="text-gray-600">Plus de trois décennies d'expérience sur le marché immobilier togolais.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Star className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Professionnalisme</h3>
                  <p className="text-gray-600">Une équipe qualifiée et passionnée par l'immobilier.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Réputation</h3>
                  <p className="text-gray-600">Classés parmi les meilleures agences immobilières du Togo.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
