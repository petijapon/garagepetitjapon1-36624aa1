
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number.replace(/\+|\s/g, '')}`, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=47M2+8WF,Boulevard+Du+Mono,Lomé,Togo', '_blank');
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* GARAGE PETIT JAPON */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-4">GARAGE PETIT JAPON</h3>
            <p className="text-gray-600 mb-4">"Le spécialiste des grosses cylindrées"</p>
            <div className="space-y-2 text-gray-600">
              <button 
                onClick={handleMapClick}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>47M2+8WF, Boulevard Du Mono, Lomé - Togo</span>
              </button>
              <div className="space-y-1">
                {["+228 90 01 05 44", "+228 79 70 10 00", "+228 99 41 02 06"].map((phone) => (
                  <button
                    key={phone}
                    onClick={() => handleWhatsAppClick(phone)}
                    className="flex items-center gap-2 hover:text-primary transition-colors w-full"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{phone}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary">Services</Link></li>
              <li><Link to="/accessoires" className="text-gray-600 hover:text-primary">Accessoires</Link></li>
              <li><Link to="/galerie" className="text-gray-600 hover:text-primary">Galerie</Link></li>
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
              <Button>
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
          <p>© 2025 GARAGE PETIT JAPON. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
