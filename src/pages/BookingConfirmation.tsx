import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, Mail, ArrowLeft, ExternalLink } from 'lucide-react';

const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();
  
  // Helper to check if a value looks like a TidyCal placeholder (e.g., {name}, [email])
  const isPlaceholder = (val: string | null) => {
    if (!val) return true;
    return val.startsWith('{') && val.endsWith('}') || val.startsWith('[') && val.endsWith(']');
  };

  const nameParam = searchParams.get('name');
  const dateStr = searchParams.get('date');
  const time = searchParams.get('time');
  const typeParam = searchParams.get('type');
  const meetingUrl = searchParams.get('meeting_url');

  const name = isPlaceholder(nameParam) ? '' : nameParam;
  const type = isPlaceholder(typeParam) ? 'Consultation' : typeParam;
  const displayDate = isPlaceholder(dateStr) ? null : dateStr;
  const displayTime = isPlaceholder(time) ? null : time;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "À confirmer";
    
    try {
      // TidyCal sends "Tuesday, April 21, 2026"
      // Date constructor usually handles this, but we capitalize it for French style
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      const formatted = new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);

      // Capitalize first letter
      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8F7F3]">
      <div className="max-w-3xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100 text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-primary" size={40} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-on-surface mb-4">
            {name ? `Merci ${name}` : "Confirmation de rendez-vous"}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">
            Votre RDV {type} est confirmé.
          </h2>
          
          <p className="text-lg text-on-surface-variant font-sans leading-relaxed mb-12 max-w-xl mx-auto">
            Un email de confirmation vient de vous être envoyé.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-[#F8F7F3] p-6 rounded-2xl border border-neutral-100">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Calendar size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Date</span>
              </div>
              <p className="text-xl font-serif text-on-surface">
                {formatDate(displayDate)}
              </p>
            </div>
            
            <div className="bg-[#F8F7F3] p-6 rounded-2xl border border-neutral-100">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Clock size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Heure</span>
              </div>
              <p className="text-xl font-serif text-on-surface">
                {displayTime || "À confirmer"}
              </p>
            </div>
          </div>

          {meetingUrl && (
            <div className="mb-12">
              <a 
                href={meetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-md group"
              >
                Lien de la visioconférence
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <p className="text-xs text-on-surface-variant mt-4 opacity-70">
                Le lien est également disponible dans votre email de confirmation.
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-on-surface-variant text-sm mb-12 italic">
            <Mail size={16} />
            Pensez à vérifier vos courriers indésirables (spams).
          </div>

          <div className="pt-12 border-t border-neutral-100">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
