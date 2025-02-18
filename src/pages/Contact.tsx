import { MapPin, Phone, Mail, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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
      </div>
    </div>
  );
};

export default Contact;
