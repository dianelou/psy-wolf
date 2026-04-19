import { Menu, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl transition-all duration-300 border-b border-surface-container-highest/20">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-serif italic text-primary">Diane Wolf</Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a 
            href="#home" 
            className={`font-sans tracking-tight ${isHome ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-secondary font-medium hover:text-primary transition-colors duration-300'}`}
          >
            Accueil
          </a>
          <a href="#services" className="font-sans tracking-tight text-secondary font-medium hover:text-primary transition-colors duration-300">Consultation</a>
          <Link 
            to="/approche" 
            className={`font-sans tracking-tight ${location.pathname === '/approche' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-secondary font-medium hover:text-primary transition-colors duration-300'}`}
          >
            Approche
          </Link>
          <Link 
            to="/contact" 
            className={`font-sans tracking-tight ${isContact ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-secondary font-medium hover:text-primary transition-colors duration-300'}`}
          >
            Contact
          </Link>
          <button className="bg-primary text-surface-container-lowest px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-container transition-all duration-300 shadow-sm font-sans text-sm">
            Prendre RDV
          </button>
        </div>
        <button className="md:hidden text-primary" aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
