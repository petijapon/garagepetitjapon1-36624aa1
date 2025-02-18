
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Building2, Calculator, FileCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Administrative = () => {
  const sections = [
    {
      title: "Acquisition d'un bien immobilier par un étranger",
      icon: <Building2 className="h-6 w-6" />,
      content: "Les étrangers peuvent acquérir des biens immobiliers au Togo sous certaines conditions. Il est recommandé de consulter un notaire pour connaître les démarches spécifiques."
    },
    {
      title: "Taxes et impôts liés à l'immobilier",
      icon: <Calculator className="h-6 w-6" />,
      content: "Plusieurs taxes et impôts sont liés à l'immobilier au Togo, notamment la taxe foncière et les droits d'enregistrement. Il est important de se renseigner sur les taux en vigueur."
    },
    {
      title: "Contrat de bail : ce qu'il faut savoir",
      icon: <FileText className="h-6 w-6" />,
      content: "Le contrat de bail est un document essentiel pour la location d'un bien immobilier. Il doit préciser les droits et obligations du locataire et du propriétaire."
    },
    {
      title: "Les diagnostics immobiliers obligatoires",
      icon: <FileCheck className="h-6 w-6" />,
      content: "Certains diagnostics immobiliers sont obligatoires lors de la vente ou de la location d'un bien, notamment le diagnostic de performance énergétique (DPE)."
    },
    {
      title: "Assurances immobilières : lesquelles choisir ?",
      icon: <Shield className="h-6 w-6" />,
      content: "Plusieurs types d'assurances immobilières existent, notamment l'assurance habitation et l'assurance responsabilité civile. Il est important de choisir les assurances adaptées à votre situation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container-custom py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Formalités administratives</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Découvrez toutes les démarches et informations nécessaires pour vos projets immobiliers au Togo
        </p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 items-start">
                <div className="text-primary mt-1">{section.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Administrative;
