'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, HeartHandshake, Sparkles } from 'lucide-react';
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
            ? 'bg-cream-100/95 backdrop-blur-md shadow-md border-b-2 border-gold-500/50 py-2.5'
            : 'bg-cream-100 border-b border-gold-400/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Bureau Name */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-gold-100 via-gold-200 to-gold-400 border border-gold-500/60 shadow-sm group-hover:scale-105 transition-transform">
                <KalashIcon className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>
              <div className="flex flex-col">
                <span className="font-traditional font-bold text-base sm:text-lg md:text-xl tracking-tight text-maroon-700 leading-tight">
                  SRI LAKSHMI NARASIMHA
                </span>
                <span className="font-serif text-[11px] sm:text-xs tracking-wider text-darkbrown-700 font-semibold uppercase flex items-center gap-1">
                  Marriage Bureau
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-600" />
                  <span className="text-darkgreen-700 font-normal text-[10px]">Hyderabad</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-darkbrown-800 hover:text-maroon-600 transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-maroon-600 to-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Action: Call Now Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="tel:9100328050"
                className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-800 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-maroon-sm hover:shadow-maroon-md hover:from-maroon-800 hover:to-maroon-900 border border-gold-400/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-5 h-5 rounded-full bg-gold-400/30 flex items-center justify-center animate-pulse">
                  <Phone className="w-3.5 h-3.5 text-gold-300" />
                </div>
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <a
                href="tel:9100328050"
                className="sm:hidden p-2 rounded-full bg-maroon-700 text-gold-300 border border-gold-400"
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
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-50 border-t border-gold-400/40 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-semibold text-darkbrown-800 hover:bg-gold-100/60 hover:text-maroon-700 transition-colors border-b border-cream-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="tel:9100328050"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-maroon-700 text-white font-semibold text-sm border border-gold-400 shadow-md"
              >
                <Phone className="w-4 h-4 text-gold-300" />
                <span>Call Now: 9100328050</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

