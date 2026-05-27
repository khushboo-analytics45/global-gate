import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Plane, Sparkles, Star, Shield, Clock, Compass, CheckCircle } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = "Hi Global Gateways! I am interested in designing a customized luxury package or setting up an elite corporate event retreat.";
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const destinationBadges = [
    'Amalfi Coast',
    'Maldives',
    'St. Moritz',
    'Kyoto',
    'Bora Bora'
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen xl:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#0F172A] font-sans border-b border-white/10 pt-28 pb-12 lg:py-0"
    >
      {/* Background Cinematic Graphic with Soft Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F172A] opacity-90 z-0" />
        {/* Soft neon-styled visual glows with luxury movement animations */}
        <div className="absolute top-[5%] left-[-15%] w-[60%] h-[60%] rounded-full bg-emerald-500/8 blur-[140px] pointer-events-none animate-luxury-glow-fast" />
        <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-500/8 blur-[140px] pointer-events-none animate-luxury-glow-slow" />
        <div className="absolute top-[35%] left-[25%] w-[50%] h-[50%] rounded-full bg-teal-500/6 blur-[160px] pointer-events-none animate-luxury-glow-fast" />
      </div>

      {/* Grid Pattern Elegance */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Container: Split responsive grid for maximum desktop impact */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* LEFT SIDE: Copywriting, Conversion Badges, and Action CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-center lg:text-left">
            
            {/* Elegant Sparkle Accent Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-[#10B981] uppercase mb-5"
            >
              <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
              <span>THE SOVEREIGN STANDARD OF LUXURY TRAVEL</span>
            </motion.div>

            {/* Immersive Main Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tighter leading-[0.9] text-white"
            >
              Luxury Travel <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 via-[#10B981] to-teal-300 bg-clip-text">
                Redefined.
              </span>
            </motion.h1>

            {/* Luxurious Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-slate-300 text-sm sm:text-base xl:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance"
            >
              Experience breathtaking destinations and flawlessly executed corporate retreats. We craft customized, high-trust luxury itineraries engineered meticulously for the discerning global traveler.
            </motion.p>

            {/* Destination Badges Carousel (Requested Component) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-1.5"
            >
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider self-center mr-1">Trending:</span>
              {destinationBadges.map((badge, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 rounded-md text-[10px] font-semibold text-slate-300 tracking-wide transition-colors"
                >
                  📍 {badge}
                </span>
              ))}
            </motion.div>

            {/* Principal Actions CTAs Section with Stronger Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                id="hero-plan-trip-cta-redesign"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-[#10B981] text-slate-950 hover:brightness-110 active:scale-95 focus:outline-none rounded-xl font-bold px-8 py-4 text-sm shadow-lg shadow-emerald-500/20 transform transition-all cursor-pointer hover:shadow-emerald-500/35"
              >
                <span>Plan My Trip</span>
                <Plane className="h-4.5 w-4.5 rotate-45 text-slate-950 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                id="hero-whatsapp-cta-redesign"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-xl font-bold px-8 py-4 text-sm transition-all text-white cursor-pointer active:scale-95"
              >
                <MessageCircle className="h-5 w-5 text-[#10B981] fill-emerald-400/10" />
                <span>Corporate Enquiry</span>
              </button>
            </motion.div>

            {/* High-Trust Benefit Indicators row (Direct Request Additions: "8K+", "24x7 Support", "Customized Packages") */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-2 sm:gap-4 text-left"
            >
              {/* Trust Badge 1 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-lg sm:text-xl font-black text-white font-display">8K+</span>
                  <div className="flex text-amber-500">
                    <Star className="h-3 w-3 fill-amber-500 border-none" />
                  </div>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5 leading-tight">
                  Happy Travelers
                </span>
              </div>

              {/* Trust Badge 2 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-lg sm:text-xl font-black text-white font-display">24x7</span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5 leading-tight">
                  Travel Support
                </span>
              </div>

              {/* Trust Badge 3 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-lg sm:text-xl font-black text-white font-display">100%</span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5 leading-tight">
                  Customized Packages
                </span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Layered travel collage effect & Animated floating glassmorphic info cards */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] mt-8 lg:mt-0 select-none pb-8 sm:pb-0">
            
            {/* Collage Container Frame with deep dimension */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] mx-auto rounded-3xl">
              
              {/* Back Layer Image (Amalfi scenery representation) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                whileHover={{ y: -10, rotate: -1, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute inset-0 w-full h-[95%] rounded-3xl overflow-hidden border border-white/10 shadow-xl z-10 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
                  alt="Cinematic Amalfi Coast Cliffside Landscape"
                  className="w-full h-full object-cover brightness-65 transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </motion.div>

              {/* Overlapping Staggered Layer 2 Image (Tropical hammock/relax) */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 3 }}
                animate={{ opacity: 1, x: 40, y: 40, rotate: 4 }}
                whileHover={{ y: 25, x: 45, rotate: 6, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute right-0 bottom-4 w-[60%] h-[55%] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl z-20 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=500&q=80"
                  alt="Luxury Tropical Vacation Maldivian Hammock"
                  className="w-full h-full object-cover brightness-75 hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Staggered Layer 3 Portrait/Aviation (VIP Detail frame) */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: 10 }}
                animate={{ opacity: 1, x: -50, y: -20, rotate: -8 }}
                whileHover={{ y: -30, x: -55, rotate: -12, scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute left-0 top-[20%] w-[45%] h-[40%] rounded-xl overflow-hidden border border-white/20 shadow-2xl z-20 hidden sm:block cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=400&q=80"
                  alt="Luxury Aviation Private Charter Suite"
                  className="w-full h-full object-cover brightness-70 hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* FLOATING GLASSMORPHISM CARD 1: Live Flight Pulse (Bali) */}
              <motion.div
                className="absolute -top-4 right-[-10px] sm:right-[-40px] z-30 p-2.5 sm:p-3.5 bg-[#0F172A]/85 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl min-w-[160px] sm:min-w-[190px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-xs text-slate-900 shadow-md">
                  ✈️
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white">Flight to Bali</div>
                  <div className="text-[8px] sm:text-[9px] text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                    Confirmed 2m ago
                  </div>
                </div>
              </motion.div>

              {/* FLOATING GLASSMORPHISM CARD 2: VIP Yacht Charter */}
              <motion.div
                className="absolute bottom-[20%] left-[-20px] sm:left-[-70px] z-30 p-2.5 sm:p-3 bg-[#0F172A]/85 backdrop-blur-md border border-emerald-500/20 rounded-2xl flex items-center gap-3 shadow-2xl min-w-[160px] sm:min-w-[190px]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-xs text-white shadow-md">
                  🛥️
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white">Private Yacht</div>
                  <div className="text-[8px] sm:text-[9px] text-[#10B981] font-semibold mt-0.5">
                    Crew Assigned • Ready
                  </div>
                </div>
              </motion.div>

              {/* FLOATING GLASSMORPHISM CARD 3: Luxury Suite Maldives */}
              <motion.div
                className="absolute bottom-[-10px] right-[20%] z-30 p-2.5 sm:p-3 bg-slate-950/90 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-2.5 shadow-xl"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-300">
                  👑 Exclusive Villa Booked in Maldives
                </span>
              </motion.div>

            </div>

          </div>

        </div>
      </div>

      {/* Modern Subtle Scrolling Visual Flow Indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center pointer-events-none select-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-slate-500 font-bold">
            Scroll to Explore
          </span>
          <div className="w-0.5 h-6 rounded-full bg-gradient-to-b from-[#10B981] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
