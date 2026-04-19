import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-secondary text-surface-container-lowest border-t border-white/5">
    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
      {/* Branding */}
      <div className="flex flex-col text-center md:text-left">
        <span className="text-xl font-serif font-bold">Diane Wolf</span>
        <p className="opacity-70 text-sm">
          Psychologue clinicienne à Toulouse & en ligne
        </p>
      </div>
      
      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
        <Link to="/mentions-legales" className="opacity-80 hover:opacity-100 transition-all">Mentions Légales</Link>
        <a href="#" className="opacity-80 hover:opacity-100 transition-all">Politique de Confidentialité</a>
        <Link to="/contact" className="opacity-80 hover:opacity-100 transition-all">Contact</Link>
      </div>
      
      {/* Copyright */}
      <div className="text-sm opacity-60 text-center md:text-right">
        <p>© 2026 Diane Wolf - Psychologue. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
