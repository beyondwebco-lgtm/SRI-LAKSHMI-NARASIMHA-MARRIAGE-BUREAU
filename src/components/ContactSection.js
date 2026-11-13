'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, User, Clock, Navigation, ExternalLink } from 'lucide-react';
import { MandalaDivider, DiyaIcon, GoldCorner } from './TraditionalDecorations';

export default function ContactSection() {
  const addressText = "H.No. 2-3-603/50/C/23, Patel Nagar, Annapurna Colony, Amberpet, Hyderabad, Telangana";
  const mapEmbedUrl = "https://maps.google.com/maps?q=Patel+Nagar+Annapurna+Colony+Amberpet+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-cream-50 relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute -top-12 -right-12 w-64 sm:w-96 h-64 sm:h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 sm:w-96 h-64 sm:h-96 bg-maroon-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-maroon-700 font-serif font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-2">
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
            <span>Connect For Sincere Guidance</span>
            <span className="w-5 sm:w-6 h-[2px] bg-gold-500" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon-900 font-traditional mb-3 sm:mb-4 leading-tight">
            Contact Us
          </h2>

          <p className="text-darkbrown-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We welcome families to call, message, or visit our bureau in Amberpet for personalized matrimonial consultations.
          </p>

          <div className="flex items-center justify-center space-x-2 mt-3 sm:mt-4">
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
            <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-r from-gold-400 to-maroon-700" />
            <span className="text-maroon-700 font-bold text-xs sm:text-sm">✦</span>
            <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-l from-gold-400 to-maroon-700" />
            <DiyaIcon className="w-4 h-4 sm:w-5 sm:h-5 transform -scale-x-100 text-gold-500" />
          </div>
        </div>

        {/* Contact Info & Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Bureau Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-gold-400/60 shadow-lg relative">
            <GoldCorner position="top-left" />
            <GoldCorner position="top-right" />

            <div className="space-y-4 sm:space-y-6">
              {/* Bureau Name & Designation Header */}
              <div className="border-b border-cream-200 pb-4 sm:pb-5">
                <span className="text-[10px] sm:text-[11px] font-bold text-darkgreen-700 uppercase tracking-widest bg-darkgreen-50 px-2.5 py-0.5 sm:py-1 rounded-md border border-darkgreen-200 inline-block mb-1.5 sm:mb-2 font-serif">
                  Regd. No: 596/2026
                </span>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold text-maroon-900 font-traditional leading-snug">
                  SRI LAKSHMI NARASIMHA MARRIAGE BUREAU
                </h3>
                <p className="text-xs text-darkbrown-600 mt-1">
                  Sivashakthi Marriage Bureau Welfare Association
                </p>
              </div>

              {/* Contact Person */}
              <div className="flex items-start space-x-3 sm:space-x-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-100 border border-gold-400/50 text-maroon-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-serif font-bold text-darkbrown-600 uppercase tracking-wider">
                    Contact Person / State Secretary
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-maroon-900 font-traditional">
                    Pabboju Swathi
                  </div>
                  <div className="text-xs text-darkgreen-800 font-medium">
                    State Secretary, Sivashakthi Marriage Bureau Welfare Association
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start space-x-3 sm:space-x-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-100 border border-gold-400/50 text-maroon-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-serif font-bold text-darkbrown-600 uppercase tracking-wider">
                    Official Mobile Number
                  </div>
                  <a
                    href="tel:9100328050"
                    className="text-lg sm:text-xl font-extrabold text-maroon-800 hover:text-maroon-950 transition-colors block"
                  >
                    +91 91003 28050
                  </a>
                  <div className="text-xs text-darkbrown-600">
                    Available for Calls & WhatsApp inquiries
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-100 border border-gold-400/50 text-maroon-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-serif font-bold text-darkbrown-600 uppercase tracking-wider">
                    Bureau Office Address
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-darkbrown-800 font-medium leading-relaxed mt-0.5">
                    H.No. 2-3-603/50/C/23,<br />
                    Patel Nagar, Annapurna Colony,<br />
                    Amberpet, Hyderabad, Telangana.
                  </address>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start space-x-3 sm:space-x-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-100 border border-gold-400/50 text-maroon-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-serif font-bold text-darkbrown-600 uppercase tracking-wider">
                    Consultation Timings
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-darkbrown-900">
                    9:30 AM to 8:30 PM (All 7 Days)
                  </div>
                  <div className="text-[11px] text-darkbrown-600">
                    Prior appointment appreciated for personal consultation
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons (Responsive on Mobile) */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-cream-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <a
                href="tel:9100328050"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-sm shadow-md border border-gold-400 transition"
              >
                <Phone className="w-4 h-4 text-gold-300" />
                <span>Click to Call</span>
              </a>

              <a
                href="https://wa.me/919100328050?text=Namaste%20Pabboju%20Swathi%20garu,%20I%20am%20contacting%20you%20regarding%20matrimonial%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-darkgreen-700 hover:bg-darkgreen-800 text-white font-bold text-sm shadow-md border border-gold-400 transition"
              >
                <MessageCircle className="w-4 h-4 text-gold-300" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Direct Enquiry Card */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-gold-400/60 shadow-lg relative">
            <GoldCorner position="top-right" />
            <GoldCorner position="bottom-right" />

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 pb-3 border-b border-cream-200 gap-1.5 sm:gap-2">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-maroon-900 font-traditional flex items-center gap-2">
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-maroon-700" />
                    <span>Office Location Map</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-darkbrown-600">
                    Patel Nagar, Annapurna Colony, Amberpet, Hyderabad
                  </p>
                </div>
                
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(addressText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-maroon-800 hover:text-maroon-950 transition"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="w-full h-60 xs:h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold-300 shadow-inner relative bg-cream-100">
                <iframe
                  title="Sri Lakshmi Narasimha Marriage Bureau Location - Amberpet Hyderabad"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Directions & Landmark Helper */}
              <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-cream-50 border border-gold-300/60 text-xs sm:text-sm text-darkbrown-800">
                <strong className="text-maroon-900">Landmark & Location Note:</strong>
                <p className="text-darkbrown-700 text-xs mt-0.5 leading-relaxed">
                  H.No. 2-3-603/50/C/23, Annapurna Colony, Patel Nagar, Amberpet. Easily accessible from Amberpet main road and 6 No. junction.
                </p>
              </div>
            </div>

            {/* Direct Enquiry Fast Action */}
            <div className="mt-5 pt-3 sm:pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
              <span className="text-xs text-darkbrown-700 font-medium">
                Want to send your matrimonial requirements immediately?
              </span>
              <a
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-maroon-950 font-bold text-xs tracking-wide shadow-sm border border-gold-600 transition"
              >
                <span>Fill Matrimonial Form</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <MandalaDivider className="mt-10 sm:mt-14" />
      </div>
    </section>
  );
}
