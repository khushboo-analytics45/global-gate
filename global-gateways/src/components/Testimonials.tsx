import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-24 bg-[#0F172A] font-sans border-t border-white/10" id="testimonials">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            Client Chronicles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Vouched by Elite Voyagers
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-body">
            Hear from corporate venture global event planners and private travelers who have embarked on custom Global Gateways journeys.
          </p>
        </div>

        {/* Big Premium Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTest.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-md p-8 sm:p-14 rounded-3xl border border-white/5 shadow-2xl relative flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Quote Visual Ornament icon */}
                <Quote className="absolute top-6 right-8 h-16 w-16 text-emerald-500/10 pointer-events-none" />

                {/* Avatar Portrait with fancy glowing background */}
                <div className="relative shrink-0">
                  <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-emerald-400 to-indigo-600 shadow-xl">
                    <img
                      src={activeTest.image}
                      alt={activeTest.name}
                      className="w-full h-full object-cover rounded-[14px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative rating icon underlay */}
                  <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 font-bold px-2.5 py-1 rounded-lg text-xs leading-none border-2 border-slate-900 shadow-md">
                    Verified
                  </span>
                </div>

                {/* Testimonial Core Details */}
                <div className="space-y-4 flex-grow text-center md:text-left">
                  {/* Star Ratings list */}
                  <div className="flex justify-center md:justify-start text-amber-400">
                    {[...Array(activeTest.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>

                  {/* Review Quote Text */}
                  <blockquote className="text-base sm:text-lg md:text-xl font-body font-medium text-slate-200 italic leading-relaxed text-pretty">
                    "{activeTest.review}"
                  </blockquote>

                  {/* Customer Information Credentials */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-display font-extrabold text-white text-base leading-snug">
                        {activeTest.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                        {activeTest.role}
                      </p>
                    </div>

                    <span className="self-center sm:self-auto block text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-medium">
                      {activeTest.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Controller Arrows */}
            <div className="flex justify-center md:justify-end items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                id="testimonial-prev-arrow"
                className="cursor-pointer h-11 w-11 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-all duration-150 hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-1.5 items-center px-2">
                {TESTIMONIALS.map((temp, i) => (
                  <button
                    key={temp.id}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? 'w-6 bg-emerald-400' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                id="testimonial-next-arrow"
                className="cursor-pointer h-11 w-11 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-all duration-150 hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
