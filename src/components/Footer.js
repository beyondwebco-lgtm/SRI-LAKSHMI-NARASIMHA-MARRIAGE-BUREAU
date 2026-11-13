'use client';

import React from 'react';
import { Phone, MapPin, Heart, ShieldCheck, ChevronRight } from 'lucide-react';
import { KalashIcon, DiyaIcon } from './TraditionalDecorations';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-gradient-to-b from-maroon-900 via-maroon-950 to-black text-cream-100 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Decorative Traditional Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      {/* Top Auspicious Border Bar */}
      <div className="bg-maroon-950/80 border-b border-gold-500/30 py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 text-gold-300 font-serif text-xs sm:text-sm">
          <span>॥ సర్వే జనాః సుఖినో భవన్తు ॥</span>
          <span className="text-gold-500">✦</span>
          <span>May All Families Be Blessed With Peace & Prosperity</span>
          <span className="text-gold-500">✦</span>
          <span>॥ శుభం భవతు ॥</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-gold-500/30">
          {/* Col 1: Bureau Identity & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-gold-400/20 border border-gold-400 flex-shrink-0">
                <KalashIcon className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-traditional font-bold text-lg sm:text-xl text-gold-300 tracking-tight leading-tight">
                  SRI LAKSHMI NARASIMHA
                </h3>
                <p className="text-xs tracking-widest uppercase font-serif text-gold-400 font-semibold">
                  Marriage Bureau
                </p>
              </div>
            </div>

            <blockquote className="font-serif-body italic text-gold-200 text-sm sm:text-base border-l-2 border-gold-500 pl-3">
              “Bringing Hearts Together, Creating Relationships for a Lifetime.”
            </blockquote>

            <p className="text-cream-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Dedicated to serving families with sincere, ethical, and trustworthy matrimonial matchmaking under the leadership of State Secretary <strong>Pabboju Swathi</strong>. Specializing in Chary's and all communities.
            </p>

            <div className="pt-1 flex items-center space-x-2 text-xs text-gold-300">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Affiliated: Sivashakthi Marriage Bureau Welfare Association (Regd. No: 596/2026)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-traditional font-bold text-base text-gold-300 border-b border-gold-500/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-cream-200 font-medium">
              <li>
                <a href="#home" className="hover:text-gold-300 flex items-center space-x-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-300 flex items-center space-x-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 flex items-center space-x-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold-300 flex items-center space-x-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-gold-300 flex items-center space-x-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Matrimonial Enquiry</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 flex items-center space-x-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-traditional font-bold text-base text-gold-300 border-b border-gold-500/30 pb-2 inline-block">
              Office & Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-cream-200">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gold-300">Address:</strong>
                  <p className="text-cream-300 leading-relaxed mt-0.5">
                    H.No. 2-3-603/50/C/23,<br />
                    Patel Nagar, Annapurna Colony, Amberpet,<br />
                    Hyderabad, Telangana.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <strong className="text-gold-300">Contact Number: </strong>
                  <a href="tel:9100328050" className="hover:text-gold-300 font-bold transition-colors">
                    9100328050
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919100328050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-maroon-950 font-bold text-xs tracking-wider transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/80 gap-3 text-center sm:text-left">
          <p>
            Copyright © {currentYear} <strong>Sri Lakshmi Narasimha Marriage Bureau</strong>. All Rights Reserved.
          </p>

          <p className="flex items-center space-x-1.5 text-gold-300 font-serif">
            <span>Leadership: Pabboju Swathi (State Secretary)</span>
            <span>•</span>
            <span>Reg No: 596/2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

