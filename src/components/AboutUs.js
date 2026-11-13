'use client';

import React from 'react';
import { UserCheck, Building2, FileCheck2, CheckCircle2, HeartHandshake } from 'lucide-react';
import { MandalaDivider, DiyaIcon, GoldCorner } from './TraditionalDecorations';

export default function AboutUs() {
  const infoCards = [
    {
      title: "State Secretary",
      value: "Pabboju Swathi",
      subtitle: "Experienced Leadership & Dedicated Matrimonial Guidance",
      icon: UserCheck,
      badge: "Bureau Leadership",
      color: "border-maroon-700/40 bg-gradient-to-b from-cream-50 to-cream-100",
      iconBg: "bg-maroon-700 text-gold-300",
    },
    {
      title: "Association",
      value: "Sivashakthi Marriage Bureau Welfare Association",
      subtitle: "Recognized Matrimonial Welfare Body for Ethical Alliances",
      icon: Building2,
      badge: "Affiliation",
      color: "border-gold-500/50 bg-gradient-to-b from-cream-50 to-cream-100",
      iconBg: "bg-gold-600 text-maroon-900",
    },
    {
      title: "Registration Number",
      value: "596/2026",
      subtitle: "Officially Registered & Recognized Welfare Bureau",
      icon: FileCheck2,
      badge: "Govt. Registered",
      color: "border-darkgreen-700/40 bg-gradient-to-b from-cream-50 to-cream-100",
      iconBg: "bg-darkgreen-700 text-gold-300",
    },
    {
      title: "Specialization",
      value: "Chary's & All Caste Marriages",
      subtitle: "Extensive Network for Diverse Communities & Professions",
      icon: HeartHandshake,
      badge: "Core Service",
      color: "border-maroon-700/40 bg-gradient-to-b from-cream-50 to-cream-100",
      iconBg: "bg-maroon-800 text-gold-300",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-cream-50 relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-maroon-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-maroon-700 font-serif font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-2">
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
            <span>Dedicated To Sacred Alliances</span>
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon-900 font-traditional mb-3 sm:mb-4 leading-tight">
            About Sri Lakshmi Narasimha Marriage Bureau
          </h2>
          
          <div className="flex items-center justify-center space-x-2">
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
            <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-gold-400 to-maroon-700" />
            <span className="text-maroon-700 font-bold text-xs sm:text-sm">✦</span>
            <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-gold-400 to-maroon-700" />
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 transform -scale-x-100 text-gold-500" />
          </div>
        </div>

        {/* Story & Description Box */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-gold-400/50 shadow-gold-sm mb-8 sm:mb-14 max-w-5xl mx-auto">
          <GoldCorner position="top-left" />
          <GoldCorner position="top-right" />
          <GoldCorner position="bottom-left" />
          <GoldCorner position="bottom-right" />

          <div className="space-y-4 sm:space-y-5 text-darkbrown-800 text-sm sm:text-base md:text-lg leading-relaxed text-left">
            <p className="first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:font-traditional first-letter:text-maroon-800 first-letter:mr-1">
              <strong>Sri Lakshmi Narasimha Marriage Bureau</strong> is dedicated to helping individuals and families find suitable life partners. Under the leadership of <strong>Pabboju Swathi</strong>, we focus on building meaningful matrimonial connections based on trust, compatibility and family values.
            </p>
            <p>
              We specialize in <strong>Chary's and all-caste marriages</strong>, offering matrimonial assistance for people from different professional backgrounds. With profound respect for Indian traditions, family customs, and horoscope preferences, our bureau serves as a comforting bridge where families meet with dignity and mutual respect.
            </p>

            {/* Core Values Ribbon */}
            <div className="pt-3 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 border-t border-gold-300/40">
              <div className="flex items-center space-x-2 text-maroon-900 font-semibold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-darkgreen-600 flex-shrink-0" />
                <span>Confidential & Dignified</span>
              </div>
              <div className="flex items-center space-x-2 text-maroon-900 font-semibold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-darkgreen-600 flex-shrink-0" />
                <span>Family Values & Respect</span>
              </div>
              <div className="flex items-center space-x-2 text-maroon-900 font-semibold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-darkgreen-600 flex-shrink-0" />
                <span>Verified Matchmaking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Display Information in Attractive Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-5 sm:p-6 border-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-md flex flex-col justify-between h-full ${card.color}`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 ${card.iconBg}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-100 text-maroon-800 border border-gold-300">
                      {card.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-darkbrown-600 font-serif">
                      {card.title}
                    </h3>
                    <div className="text-base sm:text-lg lg:text-xl font-extrabold text-maroon-900 font-traditional leading-snug">
                      {card.value}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-darkbrown-700 leading-relaxed pt-2.5 mt-auto border-t border-cream-200/80">
                  {card.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Subtle Traditional Divider */}
        <MandalaDivider className="mt-10 sm:mt-14" />
      </div>
    </section>
  );
}
