import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Building2, 
  Briefcase,
  ShieldCheck, 
  Download, 
  Calendar, 
  User, 
  ArrowRight, 
  Camera,
  Stethoscope,
  Brain,
  HeartHandshake,
  Sparkles,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Approach: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      
      {/* 1. Header / Présentation Diane Wolf (Conservée comme validée par l'utilisatrice) */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Colonne gauche : Titre et texte de présentation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="inline-block text-primary uppercase tracking-[0.2em] font-bold text-xs mb-4">
              Approche & Parcours
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-on-surface mb-4 leading-tight -tracking-[0.02em]">
              Diane Wolf
            </h1>
            <p className="text-xl md:text-2xl text-primary font-serif italic mb-6">
              Psychologue clinicienne • gérontologie, neuropsychologie
            </p>
            
            <p className="text-on-surface-variant font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-light">
              Formée à une approche intégrative et bienveillante, j'accompagne les adultes, les personnes âgées ainsi que leurs proches aidants face aux transitions de vie, vulnérabilités et questionnements singuliers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://rdv.psy-wolf.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-container text-surface-container-lowest px-8 py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10 text-center"
              >
                <Calendar size={18} />
                Prendre rendez-vous
              </a>
              <Link 
                to="/contact" 
                className="border border-primary/30 text-on-surface hover:text-primary hover:border-primary px-8 py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 text-center"
              >
                Me contacter
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Colonne droite : Cadre Photo de profil */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl bg-surface-container-low ring-1 ring-primary/5 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-28 h-28 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center mb-5 text-primary">
                <User size={52} className="text-primary/70" />
              </div>
              <h3 className="font-serif text-2xl text-on-surface font-semibold mb-1">
                Diane Wolf
              </h3>
              <p className="text-xs uppercase tracking-widest text-primary font-bold mb-5">
                Psychologue clinicienne
              </p>
              <div className="text-xs text-neutral-600 font-sans leading-relaxed bg-surface-container-lowest/90 backdrop-blur-sm px-4 py-2.5 rounded-xl flex items-center gap-2 border border-primary/10 shadow-sm">
                <Camera size={15} className="shrink-0 text-primary" />
                Espace réservé pour votre photo de profil
              </div>
            </div>

            {/* Macaron citation */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-secondary text-surface-container-lowest p-6 rounded-2xl max-w-[260px] -rotate-2 shadow-xl hidden sm:block"
            >
              <Sparkles className="text-2xl mb-2 text-surface-container-lowest" />
              <p className="text-xs font-medium leading-relaxed italic opacity-95">
                "Une écoute attentive et bienveillante, au cabinet, à domicile ou en visio."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. Section Ma Formation & Mon Parcours Professionnel en 2 Colonnes */}
      {/* Fond subtilement contrasté bg-surface-container-low identique à la section "Mon Accompagnement" de l'accueil */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* ======================================================== */}
            {/* COLONNE GAUCHE : MA FORMATION (Cadre style Consultation)  */}
            {/* ======================================================== */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-background p-8 md:p-12 rounded-[2rem] shadow-[0_8px_40px_rgba(74,100,83,0.06)] ring-1 ring-secondary/15 flex flex-col relative overflow-hidden h-full"
            >
              {/* Filigrane discret en arrière-plan */}
              <div className="absolute top-10 right-10 text-secondary/10 pointer-events-none">
                <GraduationCap size={90} className="opacity-20" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-on-surface">
                Ma formation
              </h2>

              <div className="h-1 w-10 rounded-full bg-secondary mb-8" />

              {/* Sous-section 1 : Diplôme d'état */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-secondary shrink-0" size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Diplôme
                  </span>
                </div>

                <div className="border-l-2 border-secondary/30 pl-4 py-0.5">
                  <h3 className="font-serif font-bold text-lg text-on-surface mb-1">
                    Master 2 Psychologie gérontologique clinique
                  </h3>
                  <p className="text-sm font-medium text-secondary">
                    Université Toulouse – Jean Jaurès · 2022
                  </p>
                </div>
              </div>

              {/* Sous-section 2 : Stages cliniques */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-6">
                  <Stethoscope className="text-secondary shrink-0" size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Stages cliniques
                  </span>
                </div>

                <div className="space-y-6">
                  {/* CHU de Toulouse */}
                  <div className="border-l-2 border-secondary/30 pl-4 py-0.5">
                    <h4 className="font-serif font-bold text-lg text-on-surface mb-1">
                      CHU de Toulouse
                    </h4>
                    <p className="text-sm font-medium text-secondary mb-1">
                      Neurologie · Centre Expert Parkinson · Psychiatrie du sujet âgé
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Évaluation, éducation thérapeutique et soutien psychologique.
                    </p>
                  </div>

                  {/* EHPAD Françoise de Veyrinas – Toulouse */}
                  <div className="border-l-2 border-secondary/30 pl-4 py-0.5">
                    <h4 className="font-serif font-bold text-lg text-on-surface mb-1">
                      EHPAD Françoise de Veyrinas – Toulouse
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Accompagnement psychologique de personnes âgées et de leurs proches.
                    </p>
                  </div>

                  {/* Clinique des Minimes – Toulouse */}
                  <div className="border-l-2 border-secondary/30 pl-4 py-0.5">
                    <h4 className="font-serif font-bold text-lg text-on-surface mb-1">
                      Clinique des Minimes – Toulouse
                    </h4>
                    <p className="text-sm font-medium text-secondary mb-1">
                      Neuropsychologie · SSR gériatrique
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Évaluation et accompagnement des difficultés cognitives.
                    </p>
                  </div>

                  {/* Centre hospitalier de Muret */}
                  <div className="border-l-2 border-secondary/30 pl-4 py-0.5">
                    <h4 className="font-serif font-bold text-lg text-on-surface mb-1">
                      Centre hospitalier de Muret
                    </h4>
                    <p className="text-sm font-medium text-secondary mb-1">
                      Consultation mémoire
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Évaluation et accompagnement des difficultés cognitives.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* ======================================================== */}
            {/* COLONNE DROITE : MON PARCOURS PROFESSIONNEL               */}
            {/* ======================================================== */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-background p-8 md:p-12 rounded-[2rem] shadow-[0_8px_40px_rgba(137,76,42,0.06)] ring-1 ring-primary/5 flex flex-col relative overflow-hidden h-full"
            >
              {/* Filigrane discret en arrière-plan */}
              <div className="absolute top-10 right-10 text-primary/10 pointer-events-none">
                <Briefcase size={90} className="opacity-20" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-on-surface">
                Mon parcours professionnel
              </h2>

              <div className="h-1 w-10 rounded-full bg-primary mb-8" />

              {/* Liste des expériences professionnelles */}
              <div className="space-y-6 flex-grow">
                
                {/* 1. Psychologue clinicienne */}
                <div className="border-l-2 border-primary/20 pl-4 py-0.5">
                  <h3 className="font-serif font-bold text-lg text-on-surface mb-1">
                    Psychologue en Cabinet
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    Cabinet de psychologie · Depuis septembre 2026
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Accompagnement psychologique individuel d’adultes, en cabinet, à domicile et en téléconsultation.
                  </p>
                </div>

                {/* 2. Psychologue en EHPAD */}
                <div className="border-l-2 border-primary/20 pl-4 py-0.5">
                  <h3 className="font-serif font-bold text-lg text-on-surface mb-1">
                    Psychologue en EHPAD
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    DomusVi – Toulouse · Depuis juin 2026
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Accompagnement psychologique des résidents et de leurs proches, soutien des équipes et accompagnement des problématiques liées au vieillissement.
                  </p>
                </div>

                {/* 3. Vacataire d’accompagnement des étudiants */}
                <div className="border-l-2 border-primary/20 pl-4 py-0.5">
                  <h3 className="font-serif font-bold text-lg text-on-surface mb-1">
                    Vacataire d’accompagnement des étudiants
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    INSA Toulouse · Depuis 2024
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-2">
                    Accompagnements individuels : entretien, clarification de la demande et des objectifs, suivi.
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <span className="font-semibold text-primary">Thèmes :</span> orientation, connaissance de soi, gestion du stress et confiance en soi.
                  </p>
                </div>

                {/* 4. Vacataire d’enseignement · Projet professionnel individualisé */}
                <div className="border-l-2 border-primary/20 pl-4 py-0.5">
                  <h3 className="font-serif font-bold text-lg text-on-surface mb-1">
                    Vacataire d’enseignement · Projet professionnel individualisé
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    INSA Toulouse · Depuis 2013
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Accompagnement des élèves-ingénieurs dans la construction de leur projet professionnel et le développement de leurs compétences.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. Cadre Déontologique */}
      <section className="bg-background pb-24 pt-12 md:pt-16">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Bloc Déontologique (Teinte verte douce secondaire) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary text-surface-container-lowest p-10 md:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="opacity-90" size={32} />
                <h3 className="text-2xl md:text-3xl font-serif">Cadre Déontologique</h3>
              </div>
              <p className="text-sm md:text-base opacity-90 leading-relaxed font-sans">
                En tant que psychologue, ma pratique est encadrée par le Code de Déontologie des Psychologues, garantissant le respect absolu des droits de la personne, le secret professionnel et une probité rigoureuse.
              </p>
            </div>
            <a 
              href="https://ffpp.net//wp-content/uploads/2021/10/Code_deontologie_psychologue_9-09-2021_VF.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl font-bold text-sm hover:bg-neutral-100 transition-all shadow-md shrink-0"
            >
              Consulter le Code (PDF)
              <Download size={16} />
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Approach;
