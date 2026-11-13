'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, MapPin, ShieldCheck } from 'lucide-react';
import { KalashIcon, ToranBanner } from './TraditionalDecorations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Registration', href: '#register' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Auspicious Top Toran Bar */}
      <ToranBanner />

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/98 backdrop-blur-md shadow-md border-b-2 border-gold-500/50 py-2 sm:py-2.5'
            : 'bg-cream-100 border-b border-gold-400/40 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Bureau Name */}
            <a href="#home" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
              <div className="relative p-1 sm:p-1.5 rounded-full bg-gradient-to-br from-gold-100 via-gold-200 to-gold-400 border border-gold-500/60 shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
                <KalashIcon className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-traditional font-bold text-xs xs:text-sm sm:text-lg md:text-xl tracking-tight text-maroon-700 leading-tight truncate">
                  SRI LAKSHMI NARASIMHA
                </span>
                <span className="font-serif text-[10px] xs:text-[11px] sm:text-xs tracking-wider text-darkbrown-700 font-semibold uppercase flex items-center gap-1">
                  <span>Marriage Bureau</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0" />
                  <span className="text-darkgreen-700 font-normal text-[9px] xs:text-[10px] truncate">Amberpet</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Large Desktop & Tablet Landscape) */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-darkbrown-800 hover:text-maroon-600 transition-colors py-1 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-maroon-600 to-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Action: Call Now Button */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:9100328050"
                className="inline-flex items-center space-x-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-800 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-maroon-sm hover:shadow-maroon-md hover:from-maroon-800 hover:to-maroon-900 border border-gold-400/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-5 h-5 rounded-full bg-gold-400/30 flex items-center justify-center animate-pulse">
                  <Phone className="w-3.5 h-3.5 text-gold-300" />
                </div>
                <span>Call: 9100328050</span>
              </a>
            </div>

            {/* Mobile / Tablet Menu & Call Buttons */}
            <div className="flex items-center lg:hidden space-x-1.5 sm:space-x-2">
              <a
                href="tel:9100328050"
                className="md:hidden p-2 rounded-full bg-maroon-700 text-gold-300 border border-gold-400 shadow-sm"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-maroon-800 hover:bg-gold-100/50 focus:outline-none transition-colors border border-gold-400/40"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Menu Drawer with Backdrop */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[88px] sm:top-[98px] z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start">
            <div
              className="bg-cream-50 border-b-2 border-gold-500 max-h-[82vh] overflow-y-auto px-4 pt-4 pb-8 space-y-2 shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Trust Badge Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-gold-300/60 text-xs text-maroon-900">
                <span className="font-serif font-bold text-maroon-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-darkgreen-700" />
                  Regd. No: 596/2026
                </span>
                <span className="text-[11px] bg-gold-200/60 px-2 py-0.5 rounded-full font-medium">
                  Chary & All Castes
                </span>
              </div>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-darkbrown-800 hover:bg-gold-100/70 hover:text-maroon-700 transition-colors border border-cream-200 bg-white shadow-xs"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-600" />
                </a>
              ))}

              {/* Drawer Quick Action Buttons */}
              <div className="pt-3 space-y-2.5">
                <a
                  href="tel:9100328050"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-maroon-800 to-maroon-700 text-white font-bold text-sm border border-gold-400 shadow-md"
                >
                  <Phone className="w-4 h-4 text-gold-300" />
                  <span>Call Now: +91 91003 28050</span>
                </a>

                <a
                  href="https://wa.me/919100328050?text=Namaste%20Sri%20Lakshmi%20Narasimha%20Marriage%20Bureau.%20I%20would%20like%20to%20enquire%20about%20matrimonial%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-darkgreen-700 text-white font-semibold text-xs border border-gold-400/60 shadow-sm"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </div>

              {/* Address Note */}
              <div className="pt-3 text-center text-[11px] text-darkbrown-600 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                <span>Patel Nagar, Annapurna Colony, Amberpet, Hyderabad</span>
              </div>
            </div>

            {/* Clickable Backdrop to close */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
}
