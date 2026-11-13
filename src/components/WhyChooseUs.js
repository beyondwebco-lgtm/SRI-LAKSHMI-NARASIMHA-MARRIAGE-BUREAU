'use client';

import React from 'react';
import { UserCheck, ShieldCheck, Layers, Heart, Users2, Headphones } from 'lucide-react';
import { MandalaDivider, DiyaIcon, GoldCorner } from './TraditionalDecorations';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Personal Attention",
      description: "Direct guidance and personal interaction with bureau leadership. We invest genuine time to understand family backgrounds, traditions, and individual preferences.",
      icon: UserCheck,
      highlight: "Individual Care",
    },
    {
      title: "Trusted Matrimonial Assistance",
      description: "Operated under Sivashakthi Marriage Bureau Welfare Association (Regd. No: 596/2026), ensuring complete authenticity, ethical practices, and profile credibility.",
      icon: ShieldCheck,
      highlight: "Regd. No: 596/2026",
    },
    {
      title: "Professional Match Categories",
      description: "Well-structured database covering Software Professionals, Doctors, Businessmen, NRI all-stars, and diverse government/private sectors.",
      icon: Layers,
      highlight: "Verified Professions",
    },
    {
      title: "Family-Oriented Approach",
      description: "Marriage in our culture is the sacred union of two families. We honor family values, elders' guidance, horoscope preferences, and cultural customs.",
      icon: Heart,
      highlight: "Traditional Values",
    },
    {
      title: "All Caste Matrimonial Services",
      description: "Extensive matchmaking expertise in Chary community and welcoming all Hindu castes and sub-communities with mutual respect and equality.",
      icon: Users2,
      highlight: "Chary & All Castes",
    },
    {
      title: "Dedicated Support",
      description: "Continuous assistance from initial profile sharing and horoscope matching to family introductory meetings with warm responsiveness.",
      icon: Headphones,
      highlight: "End-to-End Assistance",
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-24 bg-cream-50 relative overflow-hidden">
      {/* Decorative Traditional Motifs */}
      <div className="absolute top-1/2 left-0 w-60 sm:w-72 h-60 sm:h-72 bg-gold-200/20 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-maroon-100/20 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-maroon-700 font-serif font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-2">
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
            <span>Pillars of Trust & Sincerity</span>
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon-900 font-traditional mb-3 sm:mb-4 leading-tight">
            Why Choose Us?
          </h2>

          <p className="text-darkbrown-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Families across Telangana, Andhra Pradesh, and abroad place their trust in Sri Lakshmi Narasimha Marriage Bureau for sincere, respectful, and dignified matrimonial matchmaking.
          </p>

          <div className="flex items-center justify-center space-x-2 mt-3 sm:mt-4">
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
            <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-r from-gold-400 to-maroon-700" />
            <span className="text-maroon-700 font-bold text-xs sm:text-sm">✦</span>
            <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-l from-gold-400 to-maroon-700" />
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 transform -scale-x-100 text-gold-500" />
          </div>
        </div>

        {/* 6 Responsive Clean Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-5 sm:p-7 border-2 border-gold-400/50 shadow-xs hover:shadow-gold-md hover:border-gold-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <GoldCorner position="top-right" />

                <div>
                  {/* Icon & Highlight Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-900 text-gold-300 shadow-md border border-gold-400/60 flex-shrink-0">
                      <Icon className="w-full h-full stroke-[2]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-darkgreen-800 bg-darkgreen-50 border border-darkgreen-200/80 px-2.5 py-1 rounded-full truncate">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-maroon-900 font-traditional mb-2">
                    {item.title}
                  </h3>

                  <p className="text-darkbrown-700 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-5 pt-3.5 border-t border-cream-200 flex items-center justify-between text-[11px] sm:text-xs text-maroon-700 font-semibold font-serif">
                  <span>Sri Lakshmi Narasimha Bureau</span>
                  <span className="text-gold-500">✦ ✦ ✦</span>
                </div>
              </div>
            );
          })}
        </div>

        <MandalaDivider className="mt-10 sm:mt-14" />
      </div>
    </section>
  );
}
