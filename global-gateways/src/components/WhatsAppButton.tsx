import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tool tip after a small delay
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const message = "Hello Global Gateways! I would like to design/book a customized luxury package or corporate milestone event. Please connect me with a senior designer.";
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleWhatsAppRedirectFromSticky = () => {
    const message = "Hello Global Gateways! I would like to design/book a customized luxury package or corporate milestone event. Please connect me with a senior designer.";
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Mobile Sticky CTA Bar at the very bottom (visible only on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F172A]/95 border-t border-white/10 px-4 py-3.5 backdrop-blur-md flex items-center justify-between gap-4 z-40 select-none shadow-[0_-15px_30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-xs">
              GG
            </div>
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
          </div>
          <div className="text-left">
            <p className="text-[9px] text-[#10B981] font-bold uppercase tracking-wider">Online Concierge</p>
            <p className="text-white text-xs font-semibold leading-none mt-0.5">Senior Designer Active</p>
          </div>
        </div>
        <button
          onClick={handleWhatsAppRedirectFromSticky}
          id="mobile-sticky-wa-cta"
          className="grow max-w-[190px] h-11 bg-[#10B981] text-slate-950 hover:brightness-110 active:scale-95 font-bold px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/15"
        >
          <MessageCircle className="h-4.5 w-4.5 fill-slate-950 text-slate-950" />
          <span>Inquire WhatsApp</span>
        </button>
      </div>

      {/* Desktop Floating Widget */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 font-sans" id="whatsapp-floating-widget">
        {/* Tooltip Alert */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-3 bg-gradient-to-r from-emerald-950 to-emerald-900 border border-emerald-500/30 text-brand-white px-4 py-3 rounded-2xl shadow-xl max-w-xs text-sm"
            >
              <div className="relative">
                <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="relative block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <div>
                <p className="font-semibold text-emerald-400">Luxury Designer Online</p>
                <p className="text-xs text-slate-300">Need immediate answers? Let's chat!</p>
              </div>
              <button
                id="close-whatsapp-tooltip"
                onClick={() => setShowTooltip(false)}
                className="text-slate-400 hover:text-white ml-2 transition-colors duration-150"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Interactive Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="w-80 md:w-96 rounded-3xl overflow-hidden shadow-2xl glass-panel border border-emerald-500/20 mb-2"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-900 to-slate-900 p-5 flex items-center justify-between border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white shadow-md">
                      GG
                    </div>
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-brand-white font-medium text-sm">Global Gateways</h4>
                    <p className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online Concierge Desk
                    </p>
                  </div>
                </div>
                <button
                  id="close-whatsapp-panel"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white bg-slate-800/50 p-1.5 rounded-full hover:scale-105 transition-all"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-5 space-y-4 max-h-[250px] overflow-y-auto bg-slate-950/40 text-sm">
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 rounded-tl-none text-slate-300">
                  🚀 Welcome to Global Gateways Luxury Travel & Corporate Events!
                </div>
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 rounded-tl-none text-slate-300">
                  Are you looking to organize a tailor-made executive retreat, a milestone destination celebration, or a family VIP getaway?
                </div>
                <div className="p-2.5 bg-emerald-950/30 rounded-2xl border border-emerald-500/10 text-emerald-300 text-xs text-center flex items-center justify-center gap-1">
                  ⚡ Typical reply time is under 5 minutes
                </div>
              </div>

              {/* Form Footer */}
              <form onSubmit={handleWhatsAppRedirect} className="p-4 bg-slate-950/70 border-t border-slate-800 flex gap-2">
                <button
                  type="submit"
                  id="whatsapp-submit-direct"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15 cursor-pointer transform hover:scale-[1.01] transition-all"
                >
                  <MessageCircle className="h-5 w-5 fill-slate-950 text-slate-950" />
                  <span>Start Chat on WhatsApp</span>
                  <Send className="h-4 w-4 ml-1" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Trigger Button */}
        <motion.button
          id="whatsapp-trigger-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 shadow-2xl shadow-emerald-500/20 cursor-pointer border border-emerald-200/20 relative"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-400/20 animate-ping pointer-events-none" />
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7 fill-slate-950" />}
        </motion.button>
      </div>
    </>
  );
}
