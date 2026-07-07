/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Page } from '../types';
import { Activity } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: Page, sectionId?: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-ink/10 py-16 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink hover:opacity-90 transition-opacity cursor-pointer mb-4"
            >
              <Activity className="w-5.5 h-5.5 text-blue-brand" />
              <span className="serif text-2xl">
                Symptom<span className="text-blue-brand">Sense</span>
              </span>
            </button>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              We exist to help change the story of late detection. We are starting with Health Memory: a non-diagnostic record of what happens between appointments.
            </p>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4 font-mono">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  Health Memory App
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'how-it-works')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  Disease Focus Areas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  Pilot Signups
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4 font-mono">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  Why We Exist
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('trust')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  Trust & Governance
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about', 'clinical-research')} className="hover:text-blue-brand transition-colors cursor-pointer text-left">
                  Clinical Vision
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4 font-mono">Legal</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
              <li><span className="text-slate-400 select-none">Privacy Policy</span></li>
              <li><span className="text-slate-400 select-none">Terms of Service</span></li>
              <li><span className="text-slate-400 select-none">Cookie Settings</span></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="border-t border-ink/10 pt-8 text-xs text-slate-400 leading-relaxed space-y-4">
          <div>
            © 2026 SymptomSense Ltd · Registered in England & Wales (Company No. 17301093) · Reading, England · symptomsense.co.uk
          </div>
          <div>
            SymptomSense is a health memory tool in development and is not a medical device. It does not diagnose disease, predict disease, provide clinical risk scores, or replace clinical judgement. Future disease-specific early-detection functionality would require robust clinical validation, governance, and appropriate regulatory approval. No NHS partnership, affiliation, or endorsement is implied.
          </div>
        </div>
      </div>
    </footer>
  );
}
