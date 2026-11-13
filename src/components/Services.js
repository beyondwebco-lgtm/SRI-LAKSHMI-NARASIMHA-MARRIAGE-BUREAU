'use client';

import React from 'react';
import { Laptop, Stethoscope, Globe2, Briefcase, GraduationCap, Users2, ArrowRight, MessageCircle } from 'lucide-react';
import { MandalaDivider, DiyaIcon, GoldCorner } from './TraditionalDecorations';

export default function Services() {
  const services = [
    {
      id: "software",
      title: "Software Professionals",
      categoryName: "Software Professional",
      description: "Matrimonial matches for IT and software professionals, engineers, architects and tech consultants working in top MNCs in India and globally.",
      icon: Laptop,
      badge: "IT & Tech Alliances",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "doctors",
      title: "Doctors & Medical",
      categoryName: "Doctor / Medical",
      description: "Suitable matrimonial matches for doctors, surgeons, dentists, medical specialists, and healthcare professionals from esteemed institutions.",
      icon: Stethoscope,
      badge: "Healthcare Professionals",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nri",
      title: "NRI Matches",
      categoryName: "NRI Professional",
      description: "Matrimonial connections for Non-Resident Indians settled across USA, UK, Canada, Australia, Gulf countries, and Europe looking for traditional roots.",
      icon: Globe2,
      badge: "Global Indian Diaspora",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "businessmen",
      title: "Businessmen & Entrepreneurs",
      categoryName: "Business / Entrepreneur",
      description: "Matches for business owners, industrialists, entrepreneurs, and well-established family business backgrounds seeking respected alliances.",
      icon: Briefcase,
      badge: "Business Families",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "professionals",
      title: "Professional Matches",
      categoryName: "Government / Corporate Professional",
      description: "Matrimonial assistance for individuals from diverse professional backgrounds including Govt. officers, Bank officials, CA, Lawyers, and Professors.",
      icon: GraduationCap,
      badge: "All Professions",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "all-caste",
      title: "All Caste Marriages",
      categoryName: "Chary / All Caste",
      description: "Dedicated matrimonial assistance for Chary community and all communities, sub-castes, and backgrounds with family harmony.",
      icon: Users2,
      badge: "Chary's & All Communities",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const handleEnquire = (category) => {
    const text = encodeURIComponent(
      `Namaste Sri Lakshmi Narasimha Marriage Bureau (Pabboju Swathi garu). I am interested in matrimonial assistance for "${category}". Please share suitable profile details.`
    );
    window.open(`https://wa.me/919100328050?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-maroon-700 font-serif font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-2">
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
            <span>Dedicated Matrimonial Portfolios</span>
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon-900 font-traditional mb-3 sm:mb-4 leading-tight">
            Our Matrimonial Services
          </h2>

          <p className="text-darkbrown-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We provide specialized matchmaking services tailored to your family's preferences, educational background, professional criteria, and cultural traditions.
          </p>

          <div className="flex items-center justify-center space-x-2 mt-3 sm:mt-4">
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
            <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-r from-gold-400 to-maroon-700" />
            <span className="text-maroon-700 font-bold text-xs sm:text-sm">✦</span>
            <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-l from-gold-400 to-maroon-700" />
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 transform -scale-x-100 text-gold-500" />
          </div>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border-2 border-gold-400/50 overflow-hidden shadow-xs hover:shadow-gold-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <GoldCorner position="top-left" />
                <GoldCorner position="top-right" />

                {/* Card Top: Visual Header with Badge */}
                <div>
                  <div className="relative h-36 xs:h-40 sm:h-44 w-full overflow-hidden bg-maroon-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 max-w-[80%]">
                      <span className="bg-maroon-900/90 text-gold-300 border border-gold-400/60 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-xs flex items-center gap-1.5 shadow-sm truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 inline-block flex-shrink-0" />
                        <span className="truncate">{service.badge}</span>
                      </span>
                    </div>

                    {/* Service Icon floating */}
                    <div className="absolute -bottom-4 sm:-bottom-5 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-maroon-950 flex items-center justify-center shadow-lg border-2 border-white group-hover:rotate-6 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 pt-6 sm:pt-7 space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-maroon-900 font-traditional group-hover:text-maroon-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-darkbrown-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Direct Contact Action */}
                <div className="p-4 sm:p-6 pt-0 mt-auto">
                  <div className="pt-3 sm:pt-4 border-t border-cream-300/80 flex items-center justify-between gap-2">
                    <a
                      href="#register"
                      className="text-xs font-bold text-maroon-800 hover:text-maroon-950 flex items-center gap-1 transition-colors"
                    >
                      <span>Register Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleEnquire(service.categoryName)}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-darkgreen-700 hover:bg-darkgreen-800 text-white text-xs font-semibold shadow-xs border border-gold-400/50 transition-colors flex-shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-gold-300" />
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Banner (Mobile & Tablet Friendly) */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-gold-500 shadow-xl text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold-300 font-traditional leading-tight">
              Looking for a Matrimonial Match for Your Son or Daughter?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-cream-200 max-w-2xl mx-auto">
              Speak directly with <strong>Pabboju Swathi</strong> (State Secretary, Sivashakthi Marriage Bureau Welfare Association). We handle every inquiry with total discretion and sincere care.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="tel:9100328050"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-maroon-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors"
              >
                Call: 9100328050
              </a>
              <a
                href="#register"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-gold-400/60 transition-colors"
              >
                Submit Profile Online
              </a>
            </div>
          </div>
        </div>

        <MandalaDivider className="mt-10 sm:mt-14" />
      </div>
    </section>
  );
}
