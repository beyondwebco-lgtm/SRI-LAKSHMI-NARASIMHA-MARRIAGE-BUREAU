'use client';

import React, { useState } from 'react';
import { Send, MessageCircle, Heart, User, Calendar, MapPin, GraduationCap, Briefcase, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { MandalaDivider, DiyaIcon, GoldCorner } from './TraditionalDecorations';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Male',
    community: '',
    education: '',
    profession: '',
    location: '',
    contactNumber: '',
    preferredPartner: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct polite, structured WhatsApp message
    const waText = 
`*SRI LAKSHMI NARASIMHA MARRIAGE BUREAU*
*Matrimonial Registration / Enquiry*
_Under Sivashakthi Marriage Bureau Welfare Association (Regd: 596/2026)_

Namaste Pabboju Swathi garu,

Please find my matrimonial enquiry details below:

👤 *Candidate Name:* ${formData.fullName || 'Not specified'}
🎂 *Age:* ${formData.age || 'Not specified'}
⚧ *Gender:* ${formData.gender || 'Not specified'}
🛕 *Religion / Community:* ${formData.community || 'Not specified'}
🎓 *Education:* ${formData.education || 'Not specified'}
💼 *Profession / Occupation:* ${formData.profession || 'Not specified'}
📍 *Current Location / City:* ${formData.location || 'Not specified'}
📞 *Contact Number:* ${formData.contactNumber || 'Not specified'}

💍 *Preferred Partner Expectations:*
${formData.preferredPartner ? formData.preferredPartner : 'Open to discussions as per family values'}

📝 *Additional Message:*
${formData.message ? formData.message : 'Kindly share suitable profiles and guide us regarding the registration process.'}

_Sent via Sri Lakshmi Narasimha Marriage Bureau Website_`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/919100328050?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-cream-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-maroon-700 font-serif font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <span className="w-6 h-[2px] bg-gold-500" />
            <span>Sacred Match Registration</span>
            <span className="w-6 h-[2px] bg-gold-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon-900 font-traditional mb-4">
            Marriage Registration & Enquiry
          </h2>

          <p className="text-darkbrown-800 text-base sm:text-lg max-w-2xl mx-auto">
            Fill in the details below to register your matrimonial profile. Your enquiry will be sent directly to <strong>Pabboju Swathi</strong> via WhatsApp for immediate, confidential assistance.
          </p>

          <div className="flex items-center justify-center space-x-2 mt-4">
            <DiyaIcon className="w-5 h-5 text-gold-500" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-gold-400 to-maroon-700" />
            <span className="text-maroon-700 font-bold text-sm">✦</span>
            <div className="h-[2px] w-20 bg-gradient-to-l from-gold-400 to-maroon-700" />
            <DiyaIcon className="w-5 h-5 transform -scale-x-100 text-gold-500" />
          </div>
        </div>

        {/* Form Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 border-2 border-gold-400/60 shadow-xl">
          <GoldCorner position="top-left" />
          <GoldCorner position="top-right" />
          <GoldCorner position="bottom-left" />
          <GoldCorner position="bottom-right" />

          {/* WhatsApp Direct Notice Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-darkgreen-50 via-cream-50 to-darkgreen-50 border border-darkgreen-300 flex items-center space-x-3 text-darkgreen-900">
            <div className="w-10 h-10 rounded-full bg-darkgreen-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm">
              <strong className="text-darkgreen-950 font-bold">Direct WhatsApp Registration:</strong>
              <span className="ml-1 text-darkbrown-800">
                Clicking "Submit Enquiry" prepares and opens WhatsApp with your information ready to send directly to <strong>9100328050</strong>.
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                  Full Name of Bride / Groom <span className="text-maroon-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-maroon-700">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter bride / groom's name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 placeholder-darkbrown-400 transition"
                  />
                </div>
              </div>

              {/* Age & Gender Row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Age */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                    Age <span className="text-maroon-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-maroon-700">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      name="age"
                      required
                      min="18"
                      max="75"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g. 26"
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                    Gender <span className="text-maroon-600">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition font-medium"
                  >
                    <option value="Male">Male (Groom)</option>
                    <option value="Female">Female (Bride)</option>
                  </select>
                </div>
              </div>

              {/* Religion / Community */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                  Religion / Community / Caste <span className="text-maroon-600">*</span>
                </label>
                <input
                  type="text"
                  name="community"
                  required
                  value={formData.community}
                  onChange={handleChange}
                  placeholder="e.g. Chary / Brahmin / Reddy / Vysya / All Castes"
                  className="w-full px-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                  Contact Number (WhatsApp) <span className="text-maroon-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-maroon-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                  Education / Qualification <span className="text-maroon-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-maroon-700">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="e.g. B.Tech / MBA / MBBS / MS"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
                  />
                </div>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                  Profession / Occupation <span className="text-maroon-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-maroon-700">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer / Doctor / Business / Govt."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                Current Location / City / Native Place <span className="text-maroon-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-maroon-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Amberpet, Hyderabad / Warangal / Bangalore / USA"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
                />
              </div>
            </div>

            {/* Preferred Partner Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                Preferred Partner Details & Expectations
              </label>
              <textarea
                name="preferredPartner"
                rows={3}
                value={formData.preferredPartner}
                onChange={handleChange}
                placeholder="Mention expected qualification, profession, age difference, height, location, caste preference, horoscope/gothram requirements..."
                className="w-full px-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
              />
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown-800 font-serif mb-1.5">
                Additional Message / Notes
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special remarks or convenient time to talk..."
                className="w-full px-4 py-3 rounded-xl border border-gold-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-maroon-600 text-sm text-darkbrown-900 transition"
              />
            </div>

            {/* Submit Enquiry Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-4 rounded-full bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-900 text-white font-bold text-base shadow-maroon-md hover:shadow-maroon-lg border-2 border-gold-400 hover:from-maroon-900 hover:to-maroon-950 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-gold-300" />
                <span>Submit Enquiry via WhatsApp</span>
                <Send className="w-4 h-4 text-gold-300" />
              </button>
              
              <p className="mt-3 text-xs text-darkbrown-600">
                🔒 Your details are handled with complete confidentiality and respect.
              </p>
            </div>
          </form>

          {/* Quick Biodata Share Note */}
          <div className="mt-8 pt-6 border-t border-gold-300/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-darkbrown-700">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-maroon-700" />
              <span>Already have a biodata / horoscope document?</span>
            </div>
            <a
              href="https://wa.me/919100328050?text=Namaste%20Pabboju%20Swathi%20garu,%20I%20would%20like%20to%20share%20our%20matrimonial%20biodata%20and%20photos%20for%20matchmaking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-maroon-800 font-bold hover:text-maroon-950 underline decoration-gold-500 underline-offset-4"
            >
              <span>Click to send Biodata directly on WhatsApp (9100328050)</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <MandalaDivider className="mt-14" />
      </div>
    </section>
  );
}

