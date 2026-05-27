import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORPORATE_SERVICES } from '../data';
import { Users, Presentation, Sparkles, Trophy, CheckCircle, MessageCircle, Briefcase } from 'lucide-react';

interface CorporateProps {
  onSelectService: (serviceName: string) => void;
}

export default function Corporate({ onSelectService }: CorporateProps) {
  const [activeTab, setActiveTab] = useState(CORPORATE_SERVICES[0].id);

  const activeService = CORPORATE_SERVICES.find(s => s.id === activeTab) || CORPORATE_SERVICES[0];

  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="h-6 w-6 text-emerald-400" />,
    Presentation: <Presentation className="h-6 w-6 text-amber-400" />,
    Sparkles: <Sparkles className="h-6 w-6 text-teal-400" />,
    Trophy: <Trophy className="h-6 w-6 text-indigo-400" />,
  };

  const handleInquire = () => {
    onSelectService(`Corporate Event: ${activeService.title}`);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi Global Gateways, we are interested in planning a ${activeService.title} for our team. Could you please share options and availability?`;
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer,noopener');
  };

  return (
    <section className="relative py-24 bg-[#0F172A] font-sans border-t border-white/10" id="corporate">
      {/* Visual background ambient gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,rgba(16,185,129,0.03),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase flex items-center gap-2 justify-center md:justify-start">
              <Briefcase className="h-4 w-4" />
              <span>Executive Voyages</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Elite Corporate Event Management
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base font-body">
              Unrivaled travel logistics, private retreats, and dynamic experiential team outings curated with flawless, military-grade execution.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() => handleWhatsApp()}
              id="corp-direct-quote-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/20 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <MessageCircle className="h-4.5 w-4.5 text-emerald-400 fill-emerald-400/15" />
              <span>Inquire Corporate Rates</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Layout Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Navigation Sidebar selectors (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {CORPORATE_SERVICES.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  id={`tab-corp-${service.id}`}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isActive
                      ? 'bg-slate-900/80 border-white/20 text-white shadow-xl translate-x-1.5'
                      : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:bg-white/5'
                  }`}
                >
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${
                    isActive ? 'bg-slate-950 border-emerald-500/20' : 'bg-slate-900/80 border-slate-800/70'
                  }`}>
                    {iconMap[service.iconName]}
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-sm sm:text-base leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Content Window (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="h-full rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-md border border-white/5 shadow-2xl flex flex-col justify-between"
              >
                {/* Showcase image */}
                <div className="h-56 sm:h-72 w-full relative">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                  
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#0F172A]/80 border border-white/10 text-emerald-400">
                      Standard Package Active
                    </span>
                  </div>
                </div>

                {/* Content description area */}
                <div className="p-6 sm:p-8 space-y-6 flex-grow">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-white">
                      {activeService.title}
                    </h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed font-body">
                      {activeService.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">What makes this package elite:</h4>
                    <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                          <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions banner */}
                <div className="p-5 sm:px-8 bg-[#0F172A]/90 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Full ground logistics & AV setup inclusive
                  </span>
                  
                  <div className="flex gap-2.5 w-full sm:w-auto">
                    <button
                      onClick={handleWhatsApp}
                      id={`corp-ask-wa-${activeService.id}`}
                      className="cursor-pointer grow sm:grow-0 justify-center inline-flex items-center gap-2 p-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs font-bold uppercase tracking-wider"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-400 fill-emerald-400/10" />
                      <span>WhatsApp GG</span>
                    </button>

                    <button
                      onClick={handleInquire}
                      id={`corp-ask-form-${activeService.id}`}
                      className="cursor-pointer grow sm:grow-0 justify-center inline-flex items-center gap-2 p-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/5 hover:scale-[1.01]"
                    >
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
