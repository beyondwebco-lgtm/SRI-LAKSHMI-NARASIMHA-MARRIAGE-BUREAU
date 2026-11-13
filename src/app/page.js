'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import RegistrationForm from '../components/RegistrationForm';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100 flex flex-col relative selection:bg-gold-300 selection:text-maroon-900">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <RegistrationForm />
      <ContactSection />

      {/* Traditional Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </main>
  );
}

