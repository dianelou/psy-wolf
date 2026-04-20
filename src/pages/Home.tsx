import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Footprints, 
  Hourglass, 
  Brain, 
  Calendar, 
  MapPin, 
  Train, 
  Bus,
  Clock, 
  Play,
  Heart,
  Lock,
  Wallet,
  ReceiptText,
  CalendarX,
  Check
} from 'lucide-react';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center px-8 max-w-7xl mx-auto py-20 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7"
      >
        <span className="inline-block text-primary uppercase tracking-[0.2em] font-bold text-xs mb-6">
          Cabinet de Psychologie à Toulouse
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-7xl leading-tight mb-8 font-serif text-on-surface -tracking-[0.02em]">
          Psychothérapie & <span className="italic font-normal text-primary inline-block">Soutien psychologique</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Un espace où parler librement, dans un cadre serein et sans jugement.
          Je vous accompagne avec une approche intégrative adaptée vos besoins.</p>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a 
            href="https://tidycal.com/dianewolf/1rdv30"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-surface-container-lowest px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-container transition-all shadow-md w-full sm:w-auto text-center"
          >
            Réserver un premier échange gratuit
          </a>
          <Link to="/approche" className="flex items-center gap-3 text-secondary font-bold hover:text-primary transition-colors px-4 group">
            <Play className="fill-secondary group-hover:fill-primary transition-colors" size={24} />
            Mon approche et parcours
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl bg-surface-container-low">
          <img 
            src="https://www.villa-sante.fr/wp-content/uploads/2022/01/villa-sante-cabinet-6-2-560x400.jpg?q=80&w=1200&auto=format&fit=crop" 
            alt="Espace de consultation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/minimalist-chair/1200/900";
            }}
          />
        </div>

        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute -bottom-8 -left-8 bg-secondary text-surface-container-lowest p-8 rounded-xl max-w-[280px] -rotate-3 shadow-xl"
        >
          <Footprints className="text-4xl mb-4" />
          <p className="text-sm font-medium leading-relaxed italic">
            "Le premier pas est souvent le plus difficile, mais il peut déjà apporter un peu d'apaisement."
          </p>
        </motion.div>
      </motion.div>
    </div>
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
  </section>
);

const ServicesSection = () => (
  <section id="services" className="bg-surface-container-low py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Mon Accompagnement</h2>
        <div className="h-1 w-12 bg-primary mx-auto mb-10" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-background p-8 md:p-12 rounded-[2rem] shadow-[0_8px_40px_rgba(137,76,42,0.06)] flex flex-col relative overflow-hidden ring-1 ring-primary/5"
        >
          <div className="absolute top-10 right-10 text-primary/10">
            <svg width="84" height="84" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
              <path d="M10 10L8 8H3C2.725 8 2.48958 7.90208 2.29375 7.70625C2.09792 7.51042 2 7.275 2 7V6.5H7.5C7.775 6.5 8.01042 6.40208 8.20625 6.20625C8.40208 6.01042 8.5 5.775 8.5 5.5V2H9C9.275 2 9.51042 2.09792 9.70625 2.29375C9.90208 2.48958 10 2.725 10 3V10V10M1 5.0875L1.5875 4.5H6.5V4.5V4.5V1V1V1H1V1V1V5.0875V5.0875M0 7.5V1C0 0.725 0.0979166 0.489583 0.29375 0.29375C0.489583 0.0979166 0.725 0 1 0H6.5C6.775 0 7.01042 0.0979166 7.20625 0.29375C7.40208 0.489583 7.5 0.725 7.5 1V4.5C7.5 4.775 7.40208 5.01042 7.20625 5.20625C7.01042 5.40208 6.775 5.5 6.5 5.5H2L0 7.5V7.5M1 4.5V1V1V1V1V1V1V4.5V4.5V4.5V4.5V4.5V4.5" fill="currentColor"/>
            </svg>
          </div>

          <div className="mb-6 flex">
            <span className="bg-[#FAEBD7] text-primary/80 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              Adulte
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-serif mb-6 text-on-surface">Consultation Psychologique</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
            Vous pouvez venir avec une difficulté précise, un symptôme qui pèse, une période de fragilité, ou simplement l’envie de comprendre ce qui se joue pour vous.
          </p>

          <ul className="space-y-4 mb-12 flex-grow">
            {[
              "Séance individuelle pour adulte en toute confidentialité",
              "Approche adaptée à vos besoins",
              "En cabinet ou en visio"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-on-surface/80">
                <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-sm md:text-base">{text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-primary/5 flex flex-wrap justify-between items-end gap-6">
            <div>
              <p className="text-xs tracking-widest mb-1 opacity-60">Durée : 1h</p>
              <span className="text-4xl font-serif text-primary">60 €</span>
            </div>
            <a 
              href="https://tidycal.com/dianewolf/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-container text-surface-container-lowest px-10 py-5 rounded-[1.25rem] font-bold flex items-center gap-3 transition-all duration-300 shadow-xl shadow-primary/10"
            >
              Réserver
              <Calendar size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-secondary p-8 md:p-10 rounded-[2rem] text-surface-container-lowest flex flex-col shadow-2xl"
        >
          <h3 className="text-3xl font-serif mb-8">Premier échange</h3>
          <div className="space-y-6 flex-grow">
            <p className="opacity-80 text-sm md:text-base leading-relaxed">
              Un temps pour faire connaissance, exprimer vos besoins et comprendre comment je peux vous accompagner.
            </p>
            <p className="opacity-80 text-sm md:text-base leading-relaxed">
              Cet échange pour vérifier si le contact vous convient et si vous vous sentez à l'aise pour engager un suivi.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-xs opacity-60 mb-2">Durée : 20 min</p>
            <span className="text-4xl font-serif block mb-8">Gratuit</span>
            <a 
              href="https://tidycal.com/dianewolf/1rdv30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-4 border border-white/20 rounded-[1.25rem] text-surface-container-lowest font-medium hover:bg-white hover:text-secondary transition-all duration-300 text-center"
            >
              En savoir plus
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-serif mb-4 text-on-surface">Les piliers de l'accompagnement</h3>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic opacity-80">
            Une approche qui associe écoute approfondie, temps nécessaire et outils psychothérapeutiques adaptés.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Hourglass,
              title: "Écoute & Temps",
              desc: "Accueillir votre histoire sans jugement, en favorisant une expression libre et une élaboration profonde.",
              color: "secondary"
            },
            {
              icon: Brain,
              title: "TCC & Outils concrets",
              desc: "Les thérapies cognitivo-comportementales offrent des outils concrets pour mieux comprendre, réguler et soulager certaines difficultés psychologiques.",
              featured: true
            },
            {
              icon: Heart,
              title: "Alliance thérapeutique",
              desc: "Nous nous accordons sur le cadre thérapeutique et tissons une relation de collaboration basée sur la confiance, le respect et l'engagement mutuel.",
              color: "primary"
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-10 rounded-2xl flex flex-col h-full transition-all group ${
                pillar.featured 
                ? 'bg-secondary text-surface-container-lowest md:-translate-y-4 shadow-xl hover:brightness-110' 
                : 'bg-background hover:bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-primary/5'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-sm transition-transform ${pillar.featured ? 'bg-white/10' : 'bg-surface-container-low group-hover:scale-110'}`}>
                <pillar.icon className={`text-3xl ${pillar.featured ? 'text-surface-container-lowest' : pillar.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <h4 className="text-xl font-serif mb-4">{pillar.title}</h4>
              <p className={`leading-relaxed mb-8 flex-grow text-sm ${pillar.featured ? 'opacity-80' : 'text-on-surface-variant'}`}>
                {pillar.desc}
              </p>
              <div className={`h-1 w-10 rounded-full ${pillar.featured ? 'bg-primary' : pillar.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PracticalInfoSection = () => (
  <section id="infos" className="py-24 bg-surface-container-high/30">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif">
          Informations <span className="text-primary italic">Pratiques</span>
        </h2>
        <div className="h-1 w-12 bg-primary mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden aspect-video shadow-xl bg-surface-container-highest flex items-center justify-center ring-1 ring-primary/5"
        >
          <iframe 
            src="https://maps.google.com/maps?q=2%20rue%20colette%2C%2031200%20Toulouse&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif mb-8 text-on-surface">Cabinet à Toulouse Minimes</h3>
          <div className="space-y-8">
            {[
              { icon: MapPin, text: "2 rue colette,\n31200 Toulouse" },
              { icon: Train, text: "Métro Ligne B - Arrêt Barrière de Paris" },
              { icon: Bus, text: "Bus 41, 110 - Arrêt Brieux" },
              { icon: Clock, text: "Lundi au Vendredi : 9h00 - 19h30\nSamedi : 10h00 - 13h00" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <item.icon className="text-primary mt-1 shrink-0" size={24} />
                <p className="text-lg text-on-surface-variant whitespace-pre-line leading-snug font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-24">
        {[
          {
            icon: Lock,
            title: "CONFIDENTIALITÉ",
            desc: "Conformément au code de déontologie des psychologues, le contenu de nos échanges est strictement confidentiel dans le respect du secret professionnel."
          },
          {
            icon: Wallet,
            title: "RÈGLEMENT",
            desc: "Les règlements s'effectuent par carte via un lien sécurisé Paypal ou virement bancaire avant chaque séance. Si besoin, les consultations en cabinet peuvent être réglées par chèque ou espèces."
          },
          {
            icon: ReceiptText,
            title: "REMBOURSEMENT",
            desc: "Je ne suis pas conventionnée avec l'Assurance Maladie. Bien que la Sécurité Sociale ne rembourse pas les séances, de nombreuses mutuelles proposent des forfaits annuels. Une facture vous sera remise sur demande."
          },
          {
            icon: CalendarX,
            title: "ANNULATION",
            desc: "Toute annulation effectuée au moins 48 heures à l’avance donnera lieu à un remboursement intégral. Passé ce délai, et en l’absence de motif justifié, 50% du montant de la séance sera retenu."
          }
        ].map((item, i) => (
          <div key={i} className="flex gap-6">
            <div className="mt-1 shrink-0">
              <item.icon size={20} className="text-secondary" />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest mb-3 uppercase text-on-surface">
                {item.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#894C2A] rounded-[2.5rem] p-10 md:p-20 text-center text-surface-container-lowest relative overflow-hidden shadow-2xl"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Prêt·e à faire le premier pas ?
          </h3>
          <p className="text-lg opacity-90 mb-10 leading-relaxed font-sans">
            Réservez votre créneau directement en ligne ou contactez-moi pour toute question spécifique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://tidycal.com/dianewolf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-surface-container-lowest text-[#894C2A] px-10 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-lg font-sans text-center"
            >
              Prendre rendez-vous
            </a>
            <Link to="/contact" className="w-full sm:w-auto border border-white/40 text-surface-container-lowest px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all font-sans text-center">
              Me contacter
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <ServicesSection />
      <PracticalInfoSection />
      
      <motion.a 
        href="https://tidycal.com/dianewolf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 md:hidden bg-primary text-surface-container-lowest w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      >
        <Calendar size={24} />
      </motion.a>
    </main>
  );
};

export default Home;
