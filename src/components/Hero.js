'use client';

import React from 'react';
import { Heart, Phone, ShieldCheck, Award, Users, ChevronRight, Sparkles } from 'lucide-react';
import { MandalaDivider, DiyaIcon, GoldCorner } from './TraditionalDecorations';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-gold-400/30">
      {/* Decorative Traditional Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient Gold Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-maroon-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sacred Invocation / Header Ribbon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-maroon-50 via-gold-100 to-maroon-50 border border-gold-400/60 px-4 py-1.5 rounded-full shadow-sm">
            <DiyaIcon className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-maroon-800 font-serif">
              Auspicious Matrimonial Services • Regd. No. 596/2026
            </span>
            <DiyaIcon className="w-5 h-5 transform -scale-x-100" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headings, Tagline, Description, Action Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div>
              <p className="text-maroon-700 font-serif font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 flex items-center justify-center lg:justify-start gap-2">
                <span className="inline-block w-8 h-[2px] bg-gold-500" />
                Trusted Family Matrimony Bureau
                <span className="inline-block w-8 h-[2px] bg-gold-500 lg:hidden" />
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon-900 tracking-tight font-traditional leading-[1.18]">
                SRI LAKSHMI NARASIMHA <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-700 via-gold-600 to-maroon-800">
                  MARRIAGE BUREAU
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="py-1">
              <blockquote className="font-serif-body italic text-lg sm:text-xl md:text-2xl text-maroon-800 font-semibold border-l-0 lg:border-l-4 border-gold-500 lg:pl-4">
                “Bringing Hearts Together, Creating Relationships for a Lifetime.”
              </blockquote>
            </div>

            {/* Supporting Text */}
            <p className="text-darkbrown-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your Trusted Partner in Finding the Perfect Life Partner. We help individuals and families find meaningful matrimonial matches with care, trust and understanding.
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="bg-cream-50 p-2.5 rounded-lg border border-gold-400/40 shadow-xs flex items-center space-x-2">
                <div className="p-1.5 rounded-md bg-gold-100 text-gold-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-darkbrown-600 font-medium leading-none">Government</div>
                  <div className="text-xs font-bold text-maroon-800">Regd: 596/2026</div>
                </div>
              </div>

              <div className="bg-cream-50 p-2.5 rounded-lg border border-gold-400/40 shadow-xs flex items-center space-x-2">
                <div className="p-1.5 rounded-md bg-gold-100 text-gold-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-darkbrown-600 font-medium leading-none">Specialization</div>
                  <div className="text-xs font-bold text-maroon-800">Chary & All Castes</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-cream-50 p-2.5 rounded-lg border border-gold-400/40 shadow-xs flex items-center space-x-2">
                <div className="p-1.5 rounded-md bg-gold-100 text-gold-700">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-darkbrown-600 font-medium leading-none">Leadership</div>
                  <div className="text-xs font-bold text-maroon-800">Pabboju Swathi</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 text-white font-bold text-base shadow-maroon-md hover:shadow-maroon-lg border-2 border-gold-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-5 h-5 text-gold-300 fill-gold-400" />
                <span>Find Your Life Partner</span>
                <ChevronRight className="w-4 h-4 text-gold-300" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white text-maroon-800 font-bold text-base border-2 border-gold-500 shadow-sm hover:bg-gold-50 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-maroon-700" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Association Subtext */}
            <div className="pt-2 text-xs text-darkbrown-600 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-darkgreen-600 inline-block" />
              <span>Affiliated with <strong>Sivashakthi Marriage Bureau Welfare Association</strong></span>
            </div>
          </div>

          {/* Right Column: Traditional Bride & Groom Imagery with Royal Gold Border */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Decorative Gold Frame Background */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold-400 via-gold-200 to-maroon-600 rounded-3xl opacity-50 blur-sm transform rotate-1" />
              
              {/* Outer Card with Royal Frame */}
              <div className="relative bg-cream-50 rounded-2xl p-3 sm:p-4 border-2 border-gold-500 shadow-2xl">
                <GoldCorner position="top-left" />
                <GoldCorner position="top-right" />
                <GoldCorner position="bottom-left" />
                <GoldCorner position="bottom-right" />

                {/* Main Wedding Image */}
                <div className="relative h-72 sm:h-88 lg:h-96 rounded-xl overflow-hidden border border-gold-400/60 bg-gradient-to-b from-maroon-900 to-maroon-950">
                  <img
                    src="/images/hero-wedding.jpg"
                    alt="Traditional Indian Wedding Mangalsutra Ceremony - Sri Lakshmi Narasimha Marriage Bureau"
                    className="w-full h-full object-cover object-[center_30%] transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/15 to-transparent pointer-events-none" />

                  {/* Sacred Overlay Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-center text-white pointer-events-none">
                    <p className="font-serif text-xs sm:text-sm text-gold-300 tracking-wider uppercase font-semibold drop-shadow-md">
                      ॥ మాంగల్యం తంతునానేన మమ జీవన హేతునా ॥
                    </p>
                    <p className="text-[11px] sm:text-xs text-cream-200 font-sans mt-0.5 drop-shadow-sm">
                      Sacred Bond of Two Souls & Two Families
                    </p>
                  </div>
                </div>

                {/* Floating Auspicious Badge */}
                <div className="mt-3 bg-gradient-to-r from-cream-100 via-white to-cream-100 rounded-xl p-3 border border-gold-400/60 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-full bg-maroon-700 text-gold-300 flex items-center justify-center font-bold text-lg border border-gold-400">
                      卐
                    </div>
                    <div>
                      <div className="text-xs font-bold text-maroon-900">Sri Lakshmi Narasimha Swamy Blessings</div>
                      <div className="text-[11px] text-darkbrown-700">Verified Profiles & Trusted Alliances</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-darkgreen-700 bg-darkgreen-50 px-2 py-0.5 rounded-full border border-darkgreen-200 inline-block">
                      100% Genuine
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Divider */}
        <MandalaDivider className="mt-14" />
      </div>
    </section>
  );
}

