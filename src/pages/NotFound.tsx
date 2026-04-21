import { motion } from 'motion/react';
import { Ghost, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8F7F3] px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Ghost className="text-primary" size={40} />
        </div>
        <h1 className="text-4xl font-serif text-on-surface mb-6">Page non trouvée</h1>
        <div className="text-on-surface-variant font-sans leading-relaxed mb-10 space-y-4">
          <p>
            Cette page semble s’être glissée dans l’inconscient.
          </p>
          <p>
            Il arrive que certains contenus échappent à la conscience… mais vous pouvez revenir à l’accueil.
          </p>
        </div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
