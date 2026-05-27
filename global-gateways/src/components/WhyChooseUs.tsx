import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass, HeartHandshake, Zap, Trophy, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const brandAttributes = [
    {
      id: 'attr-1',
      icon: <ShieldCheck className="h-7 w-7 text-emerald-400" />,
      title: 'A-Grade Securitized VIP Privacy',
      description: 'We coordinates non-disclosure agreements, private airport terminal transfers, fast track immigration protocols, and secure personnel when requested.'
    },
    {
      id: 'attr-2',
      icon: <Compass className="h-7 w-7 text-blue-400" />,
      title: 'Vetted 5-Star Handpicked Stays',
      description: 'Every villa, chalet, boutique estate, or resort yacht we suggest undergoes rigorous 150-point physical luxury diagnostic audits prior to approval.'
    },
    {
      id: 'attr-3',
      icon: <HeartHandshake className="h-7 w-7 text-amber-400" />,
      title: '24/7 Dedicated Concierge Desk',
      description: 'A genuine senior travel designer stands by your side digitally and physically during transit, solving sudden updates in real time within minutes.'
    },
    {
      id: 'attr-4',
      icon: <Zap className="h-7 w-7 text-rose-400" />,
      title: 'Bespoke Curated Itineraries',
      description: 'Zero standardized templates. We build itineraries entirely from scratch based on dynamic customer profiling lists & personalized custom reviews.'
    },
    {
      id: 'attr-5',
      icon: <Trophy className="h-7 w-7 text-indigo-400" />,
      title: 'Legendary Corporate Execution',
      description: 'Experienced in handling dynamic schedules, large flights, state-of-the-art AV hardware, catering menus, and team-building workshops smoothly.'
    },
    {
      id: 'attr-6',
      icon: <Smile className="h-7 w-7 text-teal-400" />,
      title: 'Seamless Digital Booking Engine',
      description: 'Modern streamlined proposal tracking, quick interactive invoice settlements, and prompt status updates via our floating design channels.'
    }
  ];

  return (
    <section className="relative py-24 bg-[#0F172A] font-sans border-t border-white/10" id="why-us">
      {/* Visual glowing layout elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            Superior Standards
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Discerning Voyagers Choose Us
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-body">
            An uncompromising obsession with pristine details, high comfort, and flawless luxury execution makes us the absolute primary choice.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {brandAttributes.map((attr, idx) => (
            <motion.div
              key={attr.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-emerald-500/25 transition-all duration-300 flex flex-col items-start gap-5 hover:bg-slate-900/60 relative group cursor-pointer"
            >
              {/* Outer hover accent line */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-emerald-500/10 pointer-events-none transition-all duration-300" />
              
              {/* Icon */}
              <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800/80 shadow-md group-hover:scale-105 transition-transform duration-300">
                {attr.icon}
              </div>

              {/* Text components */}
              <div className="space-y-2.5">
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                  {attr.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-body">
                  {attr.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
