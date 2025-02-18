
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-3xl font-bold text-center mb-16">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coordonnées */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">1342 Avenue Pya, Djidjolé</p>
                  <p className="text-gray-600">Lomé - TOGO</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p>(00228) 93 47 01 08</p>
                  <p>(00228) 70 19 50 50</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <p>contact@fabioimmobilier.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white">
                Contactez-nous sur WhatsApp
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Prendre rendez-vous
              </Button>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
