import React, { useState } from 'react';
import { Menu, Calendar, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/#home", label: "Accueil", isActive: isHome },
    { to: "/#services", label: "Consultation" },
    { to: "/approche", label: "Approche", isActive: location.pathname === '/approche' },
    { to: "/contact", label: "Contact", isActive: isContact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl transition-all duration-300 border-b border-surface-container-highest/20">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link to="/#home" onClick={closeMenu} className="text-2xl font-serif italic text-primary">Diane Wolf</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className={`font-sans tracking-tight ${link.isActive ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-secondary font-medium hover:text-primary transition-colors duration-300'}`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://rdv.psy-wolf.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-surface-container-lowest px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-container transition-all duration-300 shadow-sm font-sans text-sm text-center"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary z-50" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-surface-container-highest/20 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={closeMenu}
                  className={`text-xl font-sans tracking-tight ${link.isActive ? 'text-primary font-bold' : 'text-secondary font-medium'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://rdv.psy-wolf.fr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full bg-primary text-surface-container-lowest py-4 rounded-xl font-semibold text-center font-sans shadow-md"
              >
                Prendre RDV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
