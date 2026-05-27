import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormData } from '../types';
import { DESTINATIONS } from '../data';
import { Calendar, Users, MapPin, Phone, User, Send, Star, ShieldCheck, CheckCircle, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  preselectedTerm?: string;
  onClearPreselection?: () => void;
}

export default function ContactForm({ preselectedTerm, onClearPreselection }: ContactFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelersCount: 2,
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ ticketId: string; show: boolean; countdown: number; whatsappUrl: string } | null>(null);

  // Sync preselected destinations or corporate service clicks
  useEffect(() => {
    if (preselectedTerm) {
      setFormData(prev => ({
        ...prev,
        destination: preselectedTerm
      }));
    }
  }, [preselectedTerm]);

  // Live Auto-Redirect countdown effect
  useEffect(() => {
    if (successData?.show && successData.countdown > 0) {
      const timer = setTimeout(() => {
        setSuccessData(prev => prev ? { ...prev, countdown: prev.countdown - 1 } : null);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (successData?.show && successData.countdown === 0) {
      // Trigger WhatsApp redirection link
      window.open(successData.whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  }, [successData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'travelersCount' ? Number(value) : value
    }));
  };

  const handleLaunchWhatsAppManual = () => {
    if (successData?.whatsappUrl) {
      window.open(successData.whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.phone || !formData.destination || !formData.travelDate) {
      return;
    }

    setIsSubmitting(true);

    // Formulate a beautiful cinematic message template
    const messageTemplate = `🌟 GLOBAL GATEWAYS VOYAGE INQUIRY 🌟
-----------------------------------
👤 Traveler: ${formData.name}
📞 Contact: ${formData.phone}
✈️ Route / Event: ${formData.destination}
📅 Travel Date: ${formData.travelDate}
👥 Voyagers: ${formData.travelersCount}
💰 Budget Match: ${formData.budget || 'Not specified / Tailored Quote Required'}
✍️ Special Requests: ${formData.message || 'None / Concierge Call Preferred'}
-----------------------------------
Please prepare layout slides and custom pricing guidelines. Thank you!`;

    const targetPhone = "917973886918";
    const finalWhatsAppUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(messageTemplate)}`;

    setTimeout(() => {
      const generatedTicket = 'GG-' + Math.floor(100000 + Math.random() * 900000);
      setIsSubmitting(false);
      
      setSuccessData({
        ticketId: generatedTicket,
        show: true,
        countdown: 4,
        whatsappUrl: finalWhatsAppUrl
      });
      
      // Reset form variables
      setFormData({
        name: '',
        phone: '',
        destination: '',
        travelDate: '',
        travelersCount: 2,
        message: '',
        budget: ''
      });

      if (onClearPreselection) {
        onClearPreselection();
      }
    }, 1200);
  };

  return (
    <section className="relative py-24 bg-[#0F172A] font-sans border-t border-white/10" id="contact">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-96 rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Infopack Left side layout (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block">
                Begin Your Escape
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
                Design Your Legacy Odyssey
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-body text-balance">
                Submit your initial guidelines. A Senior Luxury Itinerary Designer will compile an interactive digital proposal, matching hotels, routes, and transportation for you within 30 minutes.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full GDPR & Privacy Encrypted</h4>
                  <p className="text-xs text-slate-500 font-body">Your travel records are handled under absolute physical security protocols.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 text-emerald-400">
                  <Star className="h-5 w-5 fill-emerald-400/20" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Free Initial Structural Quote</h4>
                  <p className="text-xs text-slate-500 font-body">Get high-fidelity interactive digital slide designs without any early down-payment obligations.</p>
                </div>
              </div>
            </div>

            {/* Bottom trust seal */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 text-xs text-slate-400 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Currently responding to new requests under 14 minutes.</span>
            </div>
          </div>

          {/* Lead Capture Form Right side layout (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!successData?.show ? (
                  <motion.form
                    key="inquiry-form"
                    onSubmit={handleFormSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Full Name</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <User className="h-4.5 w-4.5" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g., Sarah Jenkins"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3 px-4 pl-10.5 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone input */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Mobile Number</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <Phone className="h-4.5 w-4.5" />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g., +1 (555) 0199"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3 px-4 pl-10.5 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Destination Selector / custom prompt */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Select Route / Event</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <MapPin className="h-4.5 w-4.5" />
                          </span>
                          <select
                            name="destination"
                            required
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3.5 px-4 pl-10.5 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all cursor-pointer appearance-none"
                          >
                            <option value="" disabled>Select itinerary pathway...</option>
                            <optgroup label="✨ Tropical & Luxury Escapes">
                              <option value="Bali Escape">Bali Escape</option>
                              <option value="Dubai Premium Skyline">Dubai Premium Skyline</option>
                              <option value="Phuket & Phi Phi Yachting">Phuket & Phi Phi Yachting</option>
                            </optgroup>
                            <optgroup label="🏔️ Mountain Scenic Stays">
                              <option value="Royal Kashmir Valley">Royal Kashmir Valley</option>
                              <option value="Himalayan Luxury Chalets">Himalayan Luxury Chalets</option>
                              <option value="Southern Goa Premium">Southern Goa Premium</option>
                            </optgroup>
                            <optgroup label="💼 Corporate Milestones & retreats">
                              <option value="Corporate Retreat">Corporate Retreat Retreat</option>
                              <option value="Destination Conference">Destination Conference</option>
                              <option value="Collaborative Team Outing">Corporate Team Outing</option>
                              <option value="Elite Reward Trip">Elite Milestone Trip</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>

                      {/* Travel Date */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Proposed Travel / Event Date</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <Calendar className="h-4.5 w-4.5" />
                          </span>
                          <input
                            type="date"
                            name="travelDate"
                            required
                            value={formData.travelDate}
                            onChange={handleChange}
                            className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3.5 px-4 pl-10.5 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Travelers Count presets */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Number of Voyagers</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <Users className="h-4.5 w-4.5" />
                          </span>
                          <input
                            type="number"
                            name="travelersCount"
                            required
                            min={1}
                            max={1000}
                            value={formData.travelersCount}
                            onChange={handleChange}
                            className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3 px-4 pl-10.5 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Budget Selector */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Budget Matches (Optional)</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-400 font-bold text-sm">
                            $
                          </span>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3.5 px-4 pl-10.5 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all cursor-pointer appearance-none"
                          >
                            <option value="">No specifications (Flexible pricing)</option>
                            <option value="Under $5,000 USD">Under $5,000 USD</option>
                            <option value="$5,000 - $12,000 USD">$5,000 - $12,000 USD</option>
                            <option value="$12,000 - $25,000 USD">$12,000 - $25,000 USD</option>
                            <option value="$25,000+ USD VIP Extravaganza">$25,000+ USD VIP Extravaganza</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Specialize Notes (Optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Mention VIP flight requirements, culinary needs, hotel style star ratings or specific team-building goals..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-950/80 text-slate-200 border border-white/10 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#10B981]/50 focus:ring-1 focus:ring-[#10B981]/20 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                          <span>Generating Secure Line...</span>
                        </>
                      ) : (
                        <>
                          <span>Inquire via WhatsApp Secure Link</span>
                          <Send className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8 space-y-6 font-sans"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 mx-auto animate-bounce">
                      <CheckCircle className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white">Proposal Queue Match</h3>
                      <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Your customized digital invitation is generated. You are being redirected to our WhatsApp desk.
                      </p>
                    </div>

                    {/* Dynamic Countdown Alert Block */}
                    <div className="bg-[#0C111D] border border-white/5 p-4 rounded-2xl max-w-sm mx-auto space-y-2.5">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-500">
                        <span>REDIRECT CHRONOMETER</span>
                        <span className="text-emerald-400 animate-pulse">
                          {successData.countdown > 0 ? `${successData.countdown}s remaining` : 'Launching now...'}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-400 to-[#10B981] h-full"
                          initial={{ width: '100%' }}
                          animate={{ width: `${(successData.countdown / 4) * 100}%` }}
                          transition={{ duration: 1, ease: 'linear' }}
                        />
                      </div>
                    </div>

                    {/* Premium ticket card block */}
                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-left max-w-sm mx-auto space-y-3">
                      <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                        <span>Lead Tracking Ticket</span>
                        <span className="text-emerald-400 font-bold">STATUS: WHATSAPP DISPATCH</span>
                      </div>
                      <div className="font-mono text-lg font-bold text-white text-center tracking-wider py-1 border-y border-white/5">
                        {successData.ticketId}
                      </div>

                      {/* Primary trigger button if redirection was blocked */}
                      <button
                        onClick={handleLaunchWhatsAppManual}
                        id="manual-whatsapp-dispatch-btn"
                        className="w-full mt-2.5 py-3.5 px-4 bg-[#10B981] text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-97 cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageCircle className="h-4.5 w-4.5 fill-slate-900 text-slate-900" />
                        <span>Launch WhatsApp Chat Now</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setSuccessData(null)}
                      id="reset-form-success-btn"
                      className="inline-flex text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-white transition-colors cursor-pointer"
                    >
                      ← Back to form editor
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
