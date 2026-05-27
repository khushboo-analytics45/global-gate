import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Corporate', href: '#corporate' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const message = "Hi Global Gateways, I am visiting from your website and want to ask a question!";
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
        isScrolled
          ? 'py-3.5 bg-slate-900/50 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'py-5 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group cursor-pointer" id="navbar-logo">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#10B981] to-[#0F172A] rounded-lg border border-white/20 flex items-center justify-center p-0.5 shadow-lg group-hover:shadow-emerald-500/20 transition-all">
            <Compass className="h-4.5 w-4.5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tighter text-white flex items-center gap-1">
              GLOBAL GATEWAYS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleWhatsAppClick}
            id="nav-whatsapp-btn"
            className="px-5 py-2 bg-[#10B981] text-slate-900 rounded-full text-xs font-bold hover:brightness-110 transition-all uppercase tracking-wider cursor-pointer"
          >
            <span>BOOK ON WHATSAPP</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-[100%] left-0 right-0 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3 flex flex-col justify-center items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-base font-semibold text-slate-200 hover:text-emerald-400 border-b border-slate-900 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 w-full max-w-xs">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  id="mobile-nav-whatsapp-btn"
                  className="w-full justify-center flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold py-3.5 rounded-xl text-sm tracking-wide cursor-pointer shadow-lg outline-none"
                >
                  <MessageCircle className="h-5 w-5 fill-slate-950" />
                  <span>Start Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
