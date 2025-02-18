
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* FABIO IMMOBILIER */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-4">FABIO IMMOBILIER</h3>
            <p className="text-gray-600 mb-4">"Une seule adresse pour trouver la vôtre"</p>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>1342 Avenue Pya, Djidjolé, Lomé - TOGO</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(00228) 93 47 01 08</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@fabioimmobilier.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Accueil</Link></li>
              <li><Link to="/annonces" className="text-gray-600 hover:text-primary">Annonces</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">
                S'inscrire
              </Button>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-gray-600">
          <p>© 2025 FABIO IMMOBILIER. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
