/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Activity } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Why We Exist' },
    { id: 'services', label: 'What We Build' },
    { id: 'trust', label: 'Trust & Governance' },
    { id: 'contact', label: 'Contact Us' },
  ] as const;

  const handleNavClick = (pageId: Page) => {
    onNavigate(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full" id="navbar">
      {/* Top Notice Bar */}
      <div className="bg-slate-950 text-slate-300 text-center py-2.5 px-4 text-xs font-sans tracking-wide border-b border-white/5 flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand animate-ping" />
          <strong className="text-white font-semibold">SymptomSense is in development.</strong>
        </span>
        <span className="text-slate-400">Health Memory today · earlier detection is the future we are working to earn.</span>
        <button 
          onClick={() => handleNavClick('trust')}
          className="text-cyan-brand underline hover:text-cyan-brand-2 transition-colors cursor-pointer text-[11px] md:text-xs"
        >
          Development status
        </button>
      </div>

      {/* Main Nav Container */}
      <nav className="bg-mist/85 backdrop-blur-xl border-b border-ink/10 transition-colors">
        <div className="max-w-[1180px] mx-auto px-6 h-18 flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink hover:opacity-95 transition-opacity cursor-pointer select-none"
          >
            <Activity className="w-6 h-6 text-blue-brand" />
            <span className="serif text-2xl">
              Symptom<span className="text-blue-brand">Sense</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 cursor-pointer transition-colors hover:text-ink ${
                  activePage === item.id ? 'text-ink' : ''
                }`}
              >
                {item.label}
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-brand"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-ink text-white font-bold text-xs tracking-wider uppercase hover:bg-ink-2 transition-all hover:-translate-y-0.5 shadow-md shadow-midnight/10 cursor-pointer"
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-t border-ink/5 bg-white overflow-hidden shadow-lg shadow-midnight/5"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3.5 border-b border-ink/5 text-base font-semibold text-slate-600 hover:text-ink transition-colors cursor-pointer last:border-0 ${
                      activePage === item.id ? 'text-ink font-bold' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 h-11 rounded-full bg-blue-brand text-white font-bold text-sm tracking-wider hover:bg-blue-brand/95 transition-all shadow-md cursor-pointer"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
