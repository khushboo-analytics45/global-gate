import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, MessageCircle, HelpCircle, Search, X, Link, Check, Eye, Flame } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedIdState, setCopiedIdState] = useState<string | null>(null);

  const [viewCounts, setViewCounts] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('global_gateways_faq_views');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    // Initialize baseline mock views so the page looks professional and active immediately on first load
    return {
      'faq-1': 142,
      'faq-2': 189,
      'faq-3': 203,
      'faq-4': 95,
      'faq-5': 78,
    };
  });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;
      if (next === id) {
        setViewCounts((prevCounts) => {
          const updated = {
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
          };
          try {
            localStorage.setItem('global_gateways_faq_views', JSON.stringify(updated));
          } catch (e) {
            console.error(e);
          }
          return updated;
        });
      }
      return next;
    });
  };

  const handleWhatsAppHelp = () => {
    const message = "Hi Global Gateways, I have a quick question about booking a luxury tour or corporate retreats.";
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Auto-expand the first result when user types a search query
  React.useEffect(() => {
    if (searchQuery.trim() && filteredFaqs.length > 0) {
      setOpenId(filteredFaqs[0].id);
    }
  }, [searchQuery, filteredFaqs]);

  const handleCopyLink = (id: string) => {
    const shareUrl = `${window.location.href.split('#')[0]}#faq-${id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy link: ', err);
    });
  };

  const maxViews = useMemo(() => {
    const values = Object.values(viewCounts) as number[];
    return values.length > 0 ? Math.max(...values) : 0;
  }, [viewCounts]);

  // Support direct routing/scroll-to link fragments on load
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#faq-')) {
        const id = hash.replace('#faq-', '');
        const exists = FAQ_ITEMS.some((item) => item.id === id);
        if (exists) {
          setOpenId(id);
          setViewCounts((prevCounts) => {
            const updated = {
              ...prevCounts,
              [id]: (prevCounts[id] || 0) + 1
            };
            try {
              localStorage.setItem('global_gateways_faq_views', JSON.stringify(updated));
            } catch (e) {
              console.error(e);
            }
            return updated;
          });
          setTimeout(() => {
            const element = document.getElementById(`faq-${id}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className="relative py-24 bg-slate-950 font-sans border-t border-slate-900" id="faq">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="h-4 w-4" />
            <span>Got Questions?</span>
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Frequently Answered Logistics
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-body">
            Have queries about planning private departures, luxury security, group size minimums, or quote revisions? We have you covered.
          </p>
        </div>

        {/* Real-time Dynamic Search Box */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search logistics by keyword e.g., corporate, refund, custom..."
              className="w-full bg-slate-900/60 hover:bg-slate-900 border border-slate-800 focus:border-emerald-500/50 rounded-2xl pl-12 pr-28 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 shadow-xl"
            />
            
            {/* Inline Badges & Controllers */}
            <div className="absolute inset-y-0 right-3 flex items-center gap-2">
              {searchQuery && (
                <button
                  type="button"
                  id="faq-clear-search"
                  onClick={() => setSearchQuery('')}
                  className="p-1 px-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors text-[10px] uppercase font-bold flex items-center gap-1"
                >
                  <span>Clear</span>
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              <span className="text-[10px] font-black uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1.5 rounded-full shadow-inner">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'Match' : 'Matches'}
              </span>
            </div>
          </div>
        </div>

        {/* Collapsible Accordion Core */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <motion.div
                    key={item.id}
                    id={`faq-${item.id}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-2xl border transition-colors overflow-hidden ${
                      isOpen
                        ? 'bg-slate-900 border-emerald-500/30'
                        : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      id={`faq-btn-${item.id}`}
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                    >
                      <div className="flex-1 flex flex-col gap-2.5">
                        <span className="font-display font-extrabold text-white text-sm sm:text-base leading-snug group-hover:text-emerald-400 transition-colors">
                          {item.question}
                        </span>
                        
                        <div className="flex items-center flex-wrap gap-2">
                          {viewCounts[item.id] === maxViews && maxViews > 0 && (
                            <span className="inline-flex items-center gap-1.5 text-[9px] text-amber-400 font-extrabold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full select-none animate-pulse">
                              <Flame className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                              <span>Most Popular</span>
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-950 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
                            <Eye className="h-3 w-3 text-emerald-400" />
                            <span>{(viewCounts[item.id] || 0).toLocaleString()} views</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-emerald-400 text-slate-950 rotate-180' : 'bg-slate-900 text-slate-400 group-hover:text-white'
                      }`}>
                        <ChevronDown className="h-4.5 w-4.5" />
                      </div>
                    </button>

                    {/* Accordion content wrapper */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <div className="p-5 sm:px-6 pt-0 border-t border-slate-900/60 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="flex-1">
                              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
                                {item.answer}
                              </p>
                            </div>
                            <button
                              id={`faq-copy-${item.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyLink(item.id);
                              }}
                              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-[10px] uppercase font-bold tracking-wider text-slate-400 hover:text-white border border-white/5 transition-all cursor-pointer select-none whitespace-nowrap active:scale-95"
                            >
                              {copiedId === item.id ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                                  <span className="text-emerald-400">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Link className="h-3.5 w-3.5" />
                                  <span>Copy Link</span>
                                </>
                              )}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-4 rounded-3xl border border-dashed border-slate-800 bg-slate-900/20"
              >
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-4 border border-slate-800">
                  <Search className="h-5 w-5 text-slate-500 animate-pulse" />
                </div>
                <h3 className="text-white font-display font-extrabold text-lg">No Logistics Found</h3>
                <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
                  We couldn't find any questions matching "{searchQuery}". Try searching for another luxury vacation topic, or check out our popular tags.
                </p>
                <button
                  type="button"
                  id="faq-reset-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Reset Search Filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Need assistance notice */}
        <div className="mt-12 text-center p-8 rounded-2xl glass-panel border border-slate-800 max-w-2xl mx-auto space-y-4">
          <p className="text-slate-300 text-sm font-semibold">
            Can't find the answers or want to discuss direct business specs?
          </p>
          <button
            onClick={handleWhatsAppHelp}
            id="faq-whatsapp-assitance"
            className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-slate-950 text-slate-950" />
            <span>Direct Concierge Help</span>
          </button>
        </div>

      </div>
    </section>
  );
}
