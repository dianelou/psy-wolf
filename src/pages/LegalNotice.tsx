import { motion } from 'motion/react';

const LegalNotice = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-serif text-on-surface mb-8">Mentions Légales</h1>
          <p className="text-on-surface-variant leading-relaxed">
            Conformément aux dispositions de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
        </motion.div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">1. Édition du site</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant space-y-4 leading-relaxed font-sans">
              <p>
                <strong>Propriétaire :</strong> Diane Wolf<br />
                <strong>Profession :</strong> Psychologue<br />
                <strong>Numéro ADELI :</strong> 319340733<br />
                <strong>Adresse :</strong> 19 Rue de Fenouillet, 31200 Toulouse<br />
                <strong>Email :</strong> diane@psy-wolf.fr<br />
                <strong>Téléphone :</strong> 05 61 00 00 00
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">2. Hébergement</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Le site est hébergé par Google Cloud Platform.<br />
                <strong>Siège social :</strong> 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">3. Propriété intellectuelle</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">4. Protection des données personnelles</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et d'effacement de vos données personnelles. Vous pouvez exercer ce droit en envoyant un email à : <strong>diane@psy-wolf.fr</strong>. Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes de renseignement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-on-surface mb-4">5. Cookies</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-on-surface-variant leading-relaxed font-sans">
              <p>
                Ce site n'utilise que des cookies techniques nécessaires à son bon fonctionnement. Aucune donnée à des fins publicitaires n'est collectée.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LegalNotice;
