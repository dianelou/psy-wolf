/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import Approach from './pages/Approach';
import BookingConfirmation from './pages/BookingConfirmation';

// Scroll to top on route change, but handle hashes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small timeout to allow the DOM to render the new page
      const scrollToHash = () => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Try immediately
      scrollToHash();
      
      // Also try after a short delay for page transitions
      const timer = setTimeout(scrollToHash, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-primary/20 bg-background text-on-surface">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/approche" element={<Approach />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
