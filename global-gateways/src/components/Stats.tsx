import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Heart, Users } from 'lucide-react';

export default function Stats() {
  const statsList = [
    {
      id: 'stat-1',
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      number: '12,400+',
      label: 'Elite Travelers Served',
      desc: 'Discerning couples, VIP private clients & corporate delegations.'
    },
    {
      id: 'stat-2',
      icon: <Compass className="h-6 w-6 text-brand-orange" />,
      number: '150+',
      label: 'Exotic Global Partners',
      desc: 'Exclusive access to yacht marinas, high-end retreats & airlines.'
    },
    {
      id: 'stat-3',
      icon: <Heart className="h-6 w-6 text-rose-400" />,
      number: '99.2%',
      label: 'Satisfaction Index',
      desc: 'Voted best bespoke travel designers for pristine reliability.'
    },
    {
      id: 'stat-4',
      icon: <Award className="h-6 w-6 text-indigo-400" />,
      number: '230+',
      label: 'Corporate Milestones',
      desc: 'Leadership retreats & congresses executed without a single flaw.'
    }
  ];

  return (
    <section className="relative py-16 bg-[#0F172A] font-sans" id="stats">
      {/* Background visual spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-64 bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stats Glass Panel */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/10">
            {statsList.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.025 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-4 lg:px-6 first:pt-0 md:first:pt-4 first:pl-0 last:pr-0 cursor-pointer group"
              >
                {/* Metric Icon */}
                <div className="h-12 w-12 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-slate-800/70 shadow-inner mb-4 hover:scale-105 duration-300">
                  {stat.icon}
                </div>

                {/* Big Number */}
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                  {stat.label}
                </p>

                {/* Short Desc */}
                <p className="mt-2 text-xs text-slate-400 font-body leading-relaxed max-w-[210px]">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
