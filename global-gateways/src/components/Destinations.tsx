import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';
import { Calendar, Compass, Star, X, Check, ArrowRight, MessageCircle, MapPin, DollarSign, Sparkles } from 'lucide-react';

interface DestinationsProps {
  onSelectDestination: (name: string) => void;
}

export default function Destinations({ onSelectDestination }: DestinationsProps) {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Luxury', 'Scenic', 'Yachting', 'Heritage', 'Snow Peak'];

  const filteredDestinations = activeFilter === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.tags.includes(activeFilter) || d.name.toLowerCase().includes(activeFilter.toLowerCase()));

  const luxuryInclusions = [
    '5-Star VIP Boutique Hotel Accommodations',
    'Private English-speaking Luxury chauffeur & concierge guide',
    'Curated Private Yacht Charter tours',
    'Priority Fast-Track VIP lines at major points of interest',
    'Daily chef-curated organic breakfasts & fine ocean diners'
  ];

  const handleInquireNow = (destName: string) => {
    onSelectDestination(destName);
    setSelectedDestination(null);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppDirect = (destName: string) => {
    const msg = `Hello Global Gateways! I would like to book a luxury trip to ${destName}. Please share options and custom pricing guidelines.`;
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-32 bg-[#0C111D] font-sans border-b border-white/5 overflow-hidden" id="destinations">
      {/* Premium Ambient Background Spotlights */}
      <div className="absolute top-[15%] right-[-10%] w-[45%] h-[45%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[45%] h-[45%] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Premium Startup Aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold tracking-widest text-[#10B981] uppercase mb-4"
          >
            <Sparkles className="h-3 w-3" />
            <span>CURATED LUXURY VOYAGES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none"
          >
            Trending Luxury Destinations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto text-balance"
          >
            Peerless expeditions designed, vetted, and coordinated end-to-end by our global custom travel craftsmen.
          </motion.p>
        </div>

        {/* Filters Panel - Horizontally scrollable on mobile, centered on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 max-w-3xl mx-auto mb-12 overflow-x-auto no-scrollbar whitespace-nowrap px-4 justify-start md:justify-center"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase transition-all cursor-pointer border ${
                activeFilter === filter
                  ? 'bg-[#10B981] text-slate-950 border-[#10B981] shadow-lg shadow-emerald-500/20 scale-102'
                  : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid List - Up-scaled, modern travel startup layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -12, scale: 1.015, transition: { duration: 0.35, ease: 'easeOut' } }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#161F30] to-[#0F172A] border border-white/5 hover:border-[#10B981]/35 shadow-xl hover:shadow-2xl hover:shadow-[#10B981]/10 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                {/* Image & Immersive Overlay Frame */}
                <div className="relative aspect-[16/11] overflow-hidden select-none">
                  {/* Photo with beautiful slow hover scale */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Cinematic gradient overlay for premium depth & text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Dynamic Category Badges overlay */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1">
                    {dest.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#0F172A]/75 backdrop-blur-md text-[#10B981] border border-emerald-500/20 shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Trust Rating Star Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="flex items-center gap-1 bg-[#0F172A]/75 backdrop-blur-md py-1 px-2 rounded-md text-[10px] font-bold text-amber-400 border border-amber-500/10 shadow-md">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-500" />
                      <span>{dest.rating}</span>
                    </span>
                  </div>

                  {/* Travel Duration Indicator Overlaid on Image */}
                  <div className="absolute bottom-4 left-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-md border border-white/10 text-[10px] font-bold text-slate-200 shadow-md">
                      <Calendar className="h-3.5 w-3.5 text-[#10B981]" />
                      <span>{dest.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Card Details & Inquire Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow relative">
                  
                  {/* Destination Location Header with Pin */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    <MapPin className="h-3.5 w-3.5 text-[#10B981]" />
                    <span>Global Escapes Pathway</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {dest.name}
                  </h3>
                  
                  {/* Luxury Concept Short Description */}
                  <p className="mt-3.5 text-slate-400 text-xs sm:text-sm leading-relaxed font-light flex-grow">
                    {dest.description}
                  </p>

                  {/* Interactive Pricing, Details, and Call-to-action */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                    
                    {/* Explicit Price Presentation */}
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold leading-none">Starting at</span>
                      <div className="flex items-baseline gap-0.5 mt-1">
                        <span className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">{dest.price}</span>
                        <span className="text-[9px] text-slate-500 font-semibold uppercase ml-0.5">/ pax</span>
                      </div>
                    </div>

                    {/* Bold Journey Access Button */}
                    <button
                      onClick={() => setSelectedDestination(dest)}
                      id={`view-details-${dest.id}`}
                      className="cursor-pointer group/btn inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-slate-950 hover:bg-[#10B981] hover:border-[#10B981] hover:shadow-lg hover:shadow-emerald-500/10 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
                    >
                      <span>Explore Journey</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Luxury Detailed Itinerary Modal Overlay */}
      <AnimatePresence>
        {selectedDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090F1B]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-gradient-to-b from-[#162032] to-[#0F172A] border border-white/15 shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Image banner */}
              <div className="relative h-60 sm:h-72 shrink-0">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                <button
                  id="close-modal-upper"
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#0F172A]/85 text-slate-400 hover:text-white border border-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex gap-2">
                    {selectedDestination.tags.map(t => (
                      <span key={t} className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#10B981]/20 border border-[#10B981]/30 text-emerald-400 backdrop-blur-sm shadow-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-2.5 text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                    {selectedDestination.name}
                  </h3>
                </div>
              </div>

              {/* Scrollable details content */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#10B981]">Voyage Overview</h4>
                  <p className="mt-2 text-slate-300 leading-relaxed font-light">
                    {selectedDestination.description} Experience the absolute layout pinnacle of travel comfort, characterized by custom luxury transports and high-status scheduling details.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#0F172A]/60 border border-white/5 rounded-xl">
                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest">Selected Duration</span>
                    <span className="block text-sm font-bold text-white mt-0.5">{selectedDestination.duration}</span>
                  </div>
                  <div className="p-3 bg-[#0F172A]/60 border border-white/5 rounded-xl">
                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest">Base Inclusive Rate</span>
                    <span className="block text-sm font-bold text-[#10B981] mt-0.5">{selectedDestination.price} <span className="text-[10px] text-slate-400 font-normal">per voyager</span></span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#10B981]">Uncompromising VIP Inclusions</h4>
                  <ul className="mt-3 space-y-2.5">
                    {luxuryInclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 font-light text-xs sm:text-sm">
                        <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                          <Check className="h-2.5 w-2.5 text-[#10B981]" />
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal actions footer */}
              <div className="p-5 bg-[#090F1B] border-t border-white/10 grid grid-cols-2 gap-3 shrink-0">
                <button
                  onClick={() => handleWhatsAppDirect(selectedDestination.name)}
                  id="modal-wa-btn"
                  className="w-full justify-center inline-flex items-center gap-2 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/15 hover:to-white/20 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wide border border-white/10 cursor-pointer transition-all active:scale-95"
                >
                  <MessageCircle className="h-4.5 w-4.5 text-emerald-400 fill-emerald-400/10" />
                  <span>WhatsApp GG</span>
                </button>

                <button
                  onClick={() => handleInquireNow(selectedDestination.name)}
                  id="modal-form-btn"
                  className="w-full justify-center inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-[#10B981] text-slate-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wide cursor-pointer hover:brightness-110 transition-all active:scale-95"
                >
                  <span>Inquire Pathway</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
