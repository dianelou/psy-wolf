import { motion } from 'motion/react';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-serif text-on-surface mb-8">Politique de Confidentialité</h1>
          <p className="text-on-surface-variant leading-relaxed">
            La protection de vos données personnelles est une priorité. Cette charte de confidentialité vous informe sur la manière dont vos données sont collectées, traitées et protégées lors de votre visite sur ce site.
          </p>
        </motion.div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">1. Responsable du traitement</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Le responsable du traitement des données personnelles est Diane Wolf, Psychologue (EI), dont le siège social est situé au 2 rue colette, 31200 Toulouse.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">2. Données collectées et Sous-traitants</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans space-y-4">
              <p>
                Nous collectons uniquement les données nécessaires à la prise de contact et à la gestion de vos rendez-vous. Pour ce faire, nous utilisons des services tiers de confiance (sous-traitants) :
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>Formulaire de contact :</strong> Nom, email et message. Le transfert des messages est assuré techniquement par <strong>Formspree</strong>, puis les échanges sont hébergés par <strong>Infomaniak</strong> (Suisse).
                </li>
                <li>
                  <strong>Réservation en ligne (TidyCal) :</strong> Les informations de réservation sont traitées par TidyCal et synchronisées avec <strong>Google Calendar</strong> pour la gestion de l'agenda.
                </li>
                <li>
                  <strong>Paiements :</strong> Si vous choisissez le paiement en ligne lors de la réservation, celui-ci est traité de manière sécurisée par <strong>PayPal</strong>. Aucune donnée bancaire n'est stockée sur ce site.
                </li>
                <li>
                  <strong>Données techniques :</strong> Des informations comme votre adresse IP peuvent être journalisées par l'hébergeur (GitHub Pages) pour la sécurité du site.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">3. Finalité du traitement</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Répondre à vos demandes envoyées via le formulaire de contact.</li>
                <li>Gérer et confirmer vos prises de rendez-vous.</li>
                <li>Assurer le suivi administratif et thérapeutique lié à nos séances.</li>
              </ul>
              <p className="mt-4">
                En aucun cas, vos données ne sont vendues ou transmises à des tiers à des fins commerciales.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">4. Durée de conservation</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans space-y-4">
              <p>
                Les données transmises via le formulaire de contact sont conservées pendant la durée nécessaire au traitement de votre demande.
              </p>
              <p>
                Dans le cadre d'un suivi psychologique, les données sont conservées conformément aux <a href="https://ffpp.net//wp-content/uploads/2021/10/Code_deontologie_psychologue_9-09-2021_VF.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">règles déontologiques</a> et légales applicables à la profession de psychologue.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">5. Vos droits (RGPD)</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Droit d'accès</strong> : obtenir la copie des données vous concernant.</li>
                <li><strong>Droit de rectification</strong> : demander la correction de vos données si elles sont inexactes.</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données.</li>
              </ul>
              <p className="mt-6">
                Pour exercer ces droits, vous pouvez me contacter par email à : <strong><a href="mailto:diane@psy-wolf.fr" className="hover:text-primary transition-colors">diane@psy-wolf.fr</a></strong>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">6. Cookies</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Ce site n'utilise aucun cookie propre à des fins de traçage ou de publicité. 
              </p>
              <p className="mt-4">
                Toutefois, des services tiers (Google Maps pour la carte de localisation, TidyCal pour la prise de rendez-vous) peuvent déposer des cookies nécessaires à leur fonctionnement lors de votre interaction avec eux. Nous vous invitons à consulter leurs politiques de confidentialité respectives pour plus de détails sur leur usage des cookies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">7. Sécurité</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans text-sm italic">
              <p>
                Des mesures de sécurité techniques et organisationnelles sont mises en œuvre pour protéger vos données contre toute perte, altération ou accès non autorisé. La transmission des données est sécurisée via le protocole HTTPS.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
