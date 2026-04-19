import { motion } from 'motion/react';
import { ShieldCheck, GraduationCap, Briefcase, Heart, BookOpen, Quote, Download } from 'lucide-react';

import { Hammer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Approach = () => {
  const isUnderConstruction = true;

  if (isUnderConstruction) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F8F7F3] px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Hammer className="text-primary" size={40} />
          </div>
          <h1 className="text-4xl font-serif text-on-surface mb-6">Page en construction</h1>
          <p className="text-on-surface-variant font-sans leading-relaxed mb-10">
            Cette page est en cours de rédaction pour vous offrir une présentation détaillée de ma pratique. Merci de votre patience.
          </p>
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
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Hero Section - The Posture */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="inline-block text-primary uppercase tracking-[0.2em] font-bold text-xs mb-4">
                Ma Posture
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-on-surface mb-8 leading-tight">
                Une écoute <span className="italic font-normal text-primary">active</span> et une présence engagée.
              </h1>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-sans">
                <p>
                  Ma pratique s'enracine dans une approche intégrative, alliant la rigueur de la psychologie clinique à des outils concrets issus des thérapies cognitives et comportementales (TCC).
                </p>
                <p>
                  Je conçois la thérapie comme une collaboration où l'authenticité et la bienveillance créent l'espace nécessaire au changement. Mon rôle est de vous accompagner dans la compréhension de vos mécanismes internes, tout en vous aidant à mobiliser vos propres ressources.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/psychology/800/1000" 
                  alt="Postue thérapeutique" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 hidden lg:block">
                <div className="bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-neutral-100">
                  <Quote className="text-primary/20 mb-4" size={40} />
                  <p className="font-serif italic text-lg leading-relaxed text-on-surface">
                    "Accompagner, c'est marcher à côté de l'autre tout en respectant son propre rythme."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Principles Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Humanisme & CNV",
                desc: "Formée à la Communication Non Violente (CNV), je privilégie un lien thérapeutique basé sur l'empathie profonde et le respect de l'intégrité de chacun."
              },
              {
                icon: BookOpen,
                title: "Mindfulness (MBCT)",
                desc: "J'intègre la méditation de pleine conscience (cycle MBCT) comme outil de régulation émotionnelle pour apprivoiser l'anxiété et les cycles dépressifs."
              },
              {
                icon: ShieldCheck,
                title: "Éthique rigoureuse",
                desc: "Ma pratique est strictement encadrée par le code de déontologie des psychologues, garantissant secret professionnel et respect des droits de la personne."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-sans text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Full Journey Section */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-6">Mon Parcours</h2>
            <div className="w-24 h-1 bg-primary/20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Education & Internships */}
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-serif">Formation Académique</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Master 2 Psychologie Clinique</h4>
                      <p className="text-on-surface font-medium mb-1">Université Toulouse - Jean Jaurès (2015 – 2022)</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Spécialisation en Psychopathologie, Psychologie de la Santé et Gérontologie Clinique. Mon travail de recherche s'est porté sur l'efficacité des TCC dans le traitement de l'insomnie chronique en institution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-serif">Expériences Cliniques</h3>
                  <div className="space-y-6">
                    <div className="bg-white/50 p-6 rounded-2xl border border-neutral-100 italic font-sans text-on-surface-variant text-sm">
                      "Mon parcours clinique m'a permis d'intervenir au sein du CHU de Toulouse auprès de services spécialisés (Psychiatrie, Neurologie, Centre Expert Parkinson), ainsi qu'en milieu gériatrique (EHPAD, PASA)."
                    </div>
                    <ul className="space-y-4 text-sm text-on-surface-variant list-disc pl-5 font-sans">
                      <li>Évaluation psychologique et soutien à l'annonce (Unité Mobile de Psychiatrie, Parkinson).</li>
                      <li>Éducation thérapeutique et bilans neuropsychologiques.</li>
                      <li>Animation de groupes (PASA & UVP) et soutien aux aidants.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center shrink-0">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-serif">Formations Complémentaires</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3">Pratique Cycle MBCT</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                        Suivi du programme de Thérapie Cognitive Basée sur la Pleine Conscience (MBCT) pour la prévention des rechutes dépressives et la gestion du stress.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-neutral-100">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3">Formation en ligne</h4>
                      <ul className="space-y-3 text-sm text-on-surface-variant list-disc pl-5 font-sans">
                        <li>La maladie de Parkinson</li>
                        <li>Cancer chez les personnes âgées : mieux comprendre ses spécificité pour mieux prendre en soins</li>
                        <li>Traumatisme psychique chronique et deuil compliqué</li>
                        <li>Les conduites suicidaires : identifier et prévenir</li>
                        <li>La santé sexuelle pour tous</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional & Commitments */}
            <div className="space-y-12 text-on-surface-variant">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-serif">Engagement Professionnel</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">INSA Toulouse</h4>
                      <p className="text-on-surface font-medium mb-1">Coach étudiants & Vacataire d'enseignement (Depuis 2013)</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                        Accompagnement d'élèves-ingénieurs dans le cadre du Parcours Professionnel Individualisé (PPI).
                      </p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Ce projet vise à soutenir la construction du projet professionnel et le développement de compétences humaines durables dans une perspective globale et épanouissante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deontology Highlight */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#4E6157] text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <ShieldCheck className="mb-6 opacity-40" size={48} />
                  <h3 className="text-2xl font-serif mb-4">Code de Déontologie</h3>
                  <p className="text-sm opacity-80 leading-relaxed mb-8">
                    En tant que psychologue, je m'engage à respecter les principes de respect des droits de la personne, de compétence, de responsabilité et de probité.
                  </p>
                  <a 
                    href="https://ffpp.net//wp-content/uploads/2021/10/Code_deontologie_psychologue_9-09-2021_VF.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#4E6157] px-8 py-4 rounded-xl font-bold text-sm hover:bg-neutral-100 transition-all shadow-lg"
                  >
                    Consulter le code PDF
                    <Download size={18} />
                  </a>
                </div>
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Approach;
