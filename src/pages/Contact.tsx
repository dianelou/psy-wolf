import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Train,
  Bus,
  Navigation,
  CheckCircle2,
  Send,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = formData.name.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.email.includes('@') &&
                     formData.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Formspree ID for diane@psy-wolf.fr
      const response = await fetch("https://formspree.io/f/myklpvap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("Erreur de serveur");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-20">
          <span className="inline-block text-primary uppercase tracking-[0.2em] font-bold text-xs mb-4">
            Contact & Accès
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-on-surface mb-8 leading-tight max-w-4xl">
            Prendre soin de vous commence par un <span className="italic font-normal text-primary">premier pas.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Que ce soit pour une question ou un rendez-vous, je vous réponds avec attention.
          </p>
        </div>

        {/* Main Grid: Form and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Left Column: Form and Availability */}
          <div className="lg:col-span-7 space-y-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="text-primary" size={44} />
                    </div>
                    <h3 className="text-3xl font-serif text-on-surface mb-4">Message envoyé !</h3>
                    <p className="text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-8">
                      Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }}>
                    <h2 className="text-3xl font-serif mb-10 text-on-surface">Écrivez-moi</h2>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Nom complet</label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Votre nom" 
                            className="w-full bg-[#F3F2EE] border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Email</label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="votre@email.com" 
                            className="w-full bg-[#F3F2EE] border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 ml-1">Message</label>
                        <textarea 
                          rows={6}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Comment puis-je vous aider ?" 
                          className="w-full bg-[#F3F2EE] border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-sans resize-none"
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm italic">{error}</p>
                      )}

                      <button 
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className={`w-full md:w-auto bg-[#894C2A] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl shadow-primary/10
                          ${!isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:bg-[#723E22]'}`}
                      >
                        {isSubmitting ? (
                          <>
                            Envoi en cours...
                            <Loader2 className="animate-spin" size={18} />
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Availability / Reservation Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#6EE7B7] rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-neutral-500">
                  DISPONIBILITÉS ACTUELLES
                </span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                Nouveaux patients acceptés. Séances au cabinet ou en téléconsultation sécurisée. <span className="text-primary italic font-medium">Premier échange gratuit.</span>
              </p>
              <a 
                href="https://tidycal.com/dianewolf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#894C2A] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#723E22] transition-all shadow-lg hover:shadow-xl shadow-primary/10"
              >
                Prendre RDV en ligne
              </a>
            </motion.div>
          </div>

          {/* Contact Details & Office */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Coordinates Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#EBE9E2]/60 p-10 rounded-[2.5rem] space-y-8"
            >
              <h3 className="text-xl font-serif mb-2">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/60 mb-1">Téléphone</p>
                    <p className="font-sans font-medium">05 61 00 00 00</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/60 mb-1">Email</p>
                    <a href="mailto:diane@psy-wolf.fr" className="font-sans font-medium hover:text-primary transition-colors">
                      diane@psy-wolf.fr
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-neutral-100 overflow-hidden"
            >
              <h3 className="text-xl font-serif mb-8">Le Cabinet</h3>
              
              <div className="space-y-8">
                {/* Physical Address */}
                <div className="flex gap-4 items-start">
                  <MapPin size={22} className="text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1">Adresse</p>
                    <p className="font-sans text-neutral-600 leading-relaxed">
                      19 Rue de Fenouillet<br />
                      31200 Toulouse
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4 items-start">
                  <Clock size={22} className="text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1">Horaires</p>
                    <p className="font-sans text-neutral-600 leading-relaxed">
                      Lun - Ven : 09:00 — 19:00<br />
                      Samedi : 09:00 — 12:00
                    </p>
                  </div>
                </div>

                {/* Access / Transportation */}
                <div className="pt-8 border-t border-neutral-100 space-y-6">
                  <div className="flex gap-4 items-start">
                    <Train size={22} className="text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1">Accès Métro</p>
                      <p className="font-sans text-neutral-600 text-sm">
                        Métro Ligne B - Arrêt Barrière de Paris
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Bus size={22} className="text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1">Accès Bus</p>
                      <p className="font-sans text-neutral-600 text-sm">
                        Bus 41, 110 - Arrêt Brieux
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-sm">
                  <img 
                    src="https://www.villa-sante.fr/wp-content/uploads/2022/01/villa-sante-cabinet-6-2-560x400.jpg" 
                    alt="Intérieur du cabinet"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=19+Rue+de+Fenouillet+31200+Toulouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral-100 transition-all shadow-lg w-fit ml-auto"
                    >
                      <Navigation size={12} />
                      Itinéraire
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;
