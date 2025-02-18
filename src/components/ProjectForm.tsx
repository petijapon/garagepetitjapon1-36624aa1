
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProjectForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé avec succès!",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", description: "" });
    setFiles([]);
  };

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="btn-primary">
        Décrivez votre projet
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Votre projet immobilier</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Téléphone</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded-md"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description du projet</label>
              <textarea
                required
                className="w-full p-2 border rounded-md h-32"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={isRecording ? stopRecording : startRecording}
                className="flex items-center gap-2"
              >
                <Mic className="h-4 w-4" />
                {isRecording ? "Arrêter" : "Message vocal"}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("files")?.click()}
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Photos
              </Button>
              <input
                id="files"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
            </div>

            {files.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {files.map((file, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {file.name}
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Annuler
              </Button>
              <Button type="submit">Envoyer</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectForm;
