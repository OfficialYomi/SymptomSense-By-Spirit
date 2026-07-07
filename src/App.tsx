/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, ContactSubmission } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Trust from './pages/Trust';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Synchronize routing state with browser location hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/why' || hash === '#about') {
        setActivePage('about');
      } else if (hash === '#/services' || hash === '#services' || hash === '#today') {
        setActivePage('services');
      } else if (hash === '#/trust' || hash === '#trust') {
        setActivePage('trust');
      } else if (hash === '#/contact' || hash === '#contact' || hash === '#waitlist') {
        setActivePage('contact');
      } else {
        setActivePage('home');
      }
    };

    // Parse hash on initial load
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    // Update hash to support bookmarking and back button
    if (page === 'home') {
      window.location.hash = '';
    } else if (page === 'about') {
      window.location.hash = '#/why';
    } else if (page === 'services') {
      window.location.hash = '#/services';
    } else if (page === 'trust') {
      window.location.hash = '#/trust';
    } else if (page === 'contact') {
      window.location.hash = '#/contact';
    }
  };

  // Waitlist submission handler
  const handleAddWaitlist = (email: string): boolean => {
    const raw = localStorage.getItem('symptomsense_waitlist');
    let list: string[] = [];
    if (raw) {
      try {
        list = JSON.parse(raw);
      } catch (e) {
        list = [];
      }
    }

    if (list.includes(email.toLowerCase())) {
      return false; // Email already registered
    }

    list.push(email.toLowerCase());
    localStorage.setItem('symptomsense_waitlist', JSON.stringify(list));
    return true;
  };

  // Contact form submission handler
  const handleAddSubmission = (data: Omit<ContactSubmission, 'id' | 'timestamp'>) => {
    const raw = localStorage.getItem('symptomsense_contact_submissions');
    let list: ContactSubmission[] = [];
    if (raw) {
      try {
        list = JSON.parse(raw);
      } catch (e) {
        list = [];
      }
    }

    const newSub: ContactSubmission = {
      ...data,
      id: 'sub-' + Date.now(),
      timestamp: new Date().toLocaleString('en-GB')
    };

    list.unshift(newSub); // Put newest first
    localStorage.setItem('symptomsense_contact_submissions', JSON.stringify(list));
  };

  // Render active page with Framer Motion transitions
  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'trust':
        return <Trust />;
      case 'contact':
        return <Contact onAddSubmission={handleAddSubmission} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} onAddWaitlist={handleAddWaitlist} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-mist selection:bg-cyan-brand/30 selection:text-ink">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      {/* Page Routing Component with subtle fade-up transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
