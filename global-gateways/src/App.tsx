import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Destinations from './components/Destinations';
import Corporate from './components/Corporate';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // Pre-selected travel pathway term passed down to the lead capture form after user interaction
  const [preselectedPath, setPreselectedPath] = useState<string>('');

  const handleSelectPathway = (pathwayName: string) => {
    setPreselectedPath(pathwayName);
  };

  const handleClearPreselection = () => {
    setPreselectedPath('');
  };

  return (
    <div className="bg-[#0c111d] min-h-screen text-brand-white relative overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Premium Ambient Background Noise Glows */}
      <div className="absolute top-0 left-0 right-0 h-[50rem] bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[120rem] right-[5vw] w-96 h-96 rounded-full bg-emerald-500/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[80rem] left-[5vw] w-96 h-96 rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" />

      {/* 1. Glass-transparent sticky Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* 2. Fullscreen cinematic Hero Section */}
        <Hero />

        {/* 3. Trusted by Travelers Statistics Block */}
        <Stats />

        {/* 4. Trending Destinations cards segment with dynamic itinerary viewer details */}
        <Destinations onSelectDestination={handleSelectPathway} />

        {/* 5. Luxury Corporate Event Retreats page segment */}
        <Corporate onSelectService={handleSelectPathway} />

        {/* 6. Why choose Global Gateways reasons cards segment */}
        <WhyChooseUs />

        {/* 7. Testimonials user chronicles slider */}
        <Testimonials />

        {/* 8. Instagram Reel Feed/Card visual Grid */}
        <InstagramGallery />

        {/* 9. Collapsible FAQ accordion items */}
        <FAQ />

        {/* 10. Minimal clean lead form with selection synchronization */}
        <ContactForm 
          preselectedTerm={preselectedPath}
          onClearPreselection={handleClearPreselection} 
        />
      </main>

      {/* 11. Modern conversion-optimized Footer */}
      <Footer />

      {/* 12. Fixed Floating WhatsApp Instant Chat widget */}
      <WhatsAppButton />
    </div>
  );
}
