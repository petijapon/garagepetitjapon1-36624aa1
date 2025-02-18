import { MapPin, Phone, Mail, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Footer from "@/components/Footer";

const Contact = () => {
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/22893470108", "_blank");
  };

  const handleAppointment = () => {
    toast({
      title: "Demande de rendez-vous",
      description: "Un agent vous contactera pour confirmer le rendez-vous.",
    });
  };

  const startRecording = () => {
    setIsRecording(true);
    // Implémenter la logique d'enregistrement
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Arrêter l'enregistrement
  };

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
              <Button 
                className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
                onClick={handleWhatsApp}
              >
                Contactez-nous sur WhatsApp
              </Button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleAppointment}
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`flex items-center gap-2 ${
                    isRecording ? "bg-red-50 text-red-600" : ""
                  }`}
                >
                  <Mic className="h-4 w-4" />
                  {isRecording ? "Arrêter l'enregistrement" : "Enregistrer un message"}
                </Button>
              </div>

              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 h-[400px] rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d1.2191853!3d6.1855594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMTIuOCJOIDHCsDEzJzA5LjEiRQ!5e0!3m2!1sfr!2stg!4v1635789012345!5m2!1sfr!2stg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
