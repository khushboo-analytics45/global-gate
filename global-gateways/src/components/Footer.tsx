import React from 'react';
import { Compass, Instagram, Facebook, Twitter, Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppChat = () => {
    const msg = "Hello Global Gateways! I would like to get connected with your design team.";
    window.open(`https://wa.me/917973886918?text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer,noopener');
  };

  return (
    <footer className="relative bg-[#0F172A]/90 font-sans border-t border-white/10 pt-20 pb-24 md:pb-8" id="footer">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-14">
          
          {/* Logo / Brand Intro column (lg:col-span-5) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2.5 group cursor-pointer" id="footer-logo">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#10B981] to-[#0F172A] rounded-lg border border-white/20 flex items-center justify-center p-0.5 shadow-lg">
                <Compass className="h-4.5 w-4.5 text-emerald-400" />
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-tighter text-white">
                  GLOBAL GATEWAYS
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-body">
              The premier sovereign agency for bespoke adventure departures, luxury group yachts, and corporate milestone events worldwide. Delivering flawless, high-status memories.
            </p>

            {/* Social Connects Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram className="h-4.5 w-4.5" />, link: 'https://instagram.com/globalgateways_official', id: 'ig-social' },
                { icon: <Facebook className="h-4.5 w-4.5" />, link: 'https://facebook.com', id: 'fb-social' },
                { icon: <Twitter className="h-4.5 w-4.5" />, link: 'https://twitter.com', id: 'tw-social' },
                { icon: <Linkedin className="h-4.5 w-4.5" />, link: 'https://linkedin.com', id: 'ln-social' },
              ].map((soc) => (
                <a
                  key={soc.id}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={soc.id}
                  className="h-9.5 w-9.5 border border-slate-900 bg-slate-900/60 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-500/25 flex items-center justify-center transition-all duration-150 hover:scale-105"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links columns (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold text-slate-250 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home Base</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Destinations</a></li>
              <li><a href="#corporate" className="hover:text-emerald-400 transition-colors">Corporate Retreats</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Core destinations list (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold text-slate-250 uppercase tracking-widest">Global Escapes</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-400">
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Bali Villas</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Dubai Skylines</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Kashmir Houseboats</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Phuket Yachting</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Manali Domes</a></li>
            </ul>
          </div>

          {/* Agency coordinates column (lg:col-span-3) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-bold text-slate-250 uppercase tracking-widest">Concierge HQ</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="font-body">Level 42, Sovereign Tower, Manhattan Financial District, NY 10005, USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <span className="font-body">+1 (555) 0142-9900</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors">
                <Mail className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <a href="mailto:concierge@globalgateways.luxury" className="font-body select-all">concierge@globalgateways.luxury</a>
              </li>
            </ul>

            {/* Instant whatsapp trigger widget */}
            <div className="pt-3">
              <button
                onClick={handleWhatsAppChat}
                id="footer-wa-action"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                <MessageCircle className="h-4.5 w-4.5 text-emerald-400 fill-emerald-400/10" />
                <span>Urgent WhatsApp Line</span>
              </button>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
          <div>© {currentYear} GLOBAL GATEWAYS TRAVELS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            SYSTEMS ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
