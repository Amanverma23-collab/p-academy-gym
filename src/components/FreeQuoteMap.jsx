import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Navigation, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  Dumbbell,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_INFO } from '../data/gymData';

export default function FreeQuoteMap({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Muscle Building & Hypertrophy',
    membership: '3 Months Standard (₹4,500)',
    timeSlot: 'Morning (6:00 AM - 11:00 AM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goals = [
    'Muscle Building & Hypertrophy',
    'Weight Loss & Fat Burn',
    'General Fitness & Strength',
    'Personal Training (1-on-1)',
    'Cardio & Endurance'
  ];

  const plans = [
    '1 Month Standard (₹1,600)',
    '1 Month Cardio (₹2,100)',
    '3 Months Standard (₹4,500)',
    '6 Months Standard (₹7,000)',
    '1 Year Transformation (₹10,000)',
    'Custom Plan / Free Consultation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#facc15', '#22c55e', '#ffffff']
      });
    } catch (_) {}

    const text = encodeURIComponent(
      `Hello P Academy Gym!\n\nI want to request a *Free Quote & Gym Pass*:\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Fitness Goal:* ${formData.goal}\n` +
      `• *Interested Plan:* ${formData.membership}\n` +
      `• *Preferred Time:* ${formData.timeSlot}` +
      (formData.message ? `\n• *Note:* ${formData.message}` : '')
    );

    setTimeout(() => {
      window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`, '_blank');
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section 
      id="quote" 
      className="relative bg-[#081303] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#1a380e] overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.07) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-10 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162e0c] border border-[#2e5b19] text-[#facc15] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
            <span>Get Free Quote &amp; 1-Day Trial Pass</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.12] mb-4 sm:mb-5"
          >
            Get Your Free Quote &amp; Visit Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans-clean"
          >
            Looking to crush your fitness goals? Submit your details below to get personalized membership pricing or locate our gym directly on the map.
          </motion.p>
        </div>

        {/* 2-Column Grid: Left = Free Quote Form, Right = Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Free Quote Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[#0d2106]/90 border border-[#234914] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Form decorative top glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#facc15] to-transparent opacity-80" />

            <div>
              {/* Form Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#1b3d0f] mb-6">
                <div>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-[#facc15]" />
                    <span>Free Membership Quote</span>
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1 font-sans-clean">
                    100% Free consultation &bull; No credit card &bull; Instant WhatsApp quotation
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142d0a] border border-[#2b5417] text-[#22c55e] text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Gym</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1b3d0f] border border-[#2e6319] text-[#22c55e] flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-2xl font-extrabold text-white mb-2">
                    Quote Request Received!
                  </h4>
                  <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Your details have been forwarded directly to our head trainer on WhatsApp. We will provide you the best membership package right away!
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-3 px-6 text-xs sm:text-sm gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline py-3 px-6 text-xs sm:text-sm text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500"
                    >
                      Submit Another Quote
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Full Name <span className="text-[#facc15]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Aman Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#081303]/80 border border-[#234914] text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        WhatsApp / Phone <span className="text-[#facc15]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9582887741"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#081303]/80 border border-[#234914] text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Fitness Goal */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <div className="relative">
                        <select
                          name="goal"
                          value={formData.goal}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#081303]/80 border border-[#234914] text-white text-xs sm:text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all appearance-none cursor-pointer"
                        >
                          {goals.map((g) => (
                            <option key={g} value={g} className="bg-[#0d2106] text-white">
                              {g}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Interested Plan */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Plan Preference
                      </label>
                      <div className="relative">
                        <select
                          name="membership"
                          value={formData.membership}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#081303]/80 border border-[#234914] text-white text-xs sm:text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all appearance-none cursor-pointer"
                        >
                          {plans.map((p) => (
                            <option key={p} value={p} className="bg-[#0d2106] text-white">
                              {p}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Preferred Gym Slot
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: 'Morning (6:00 AM - 11:00 AM)' })}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          formData.timeSlot.includes('Morning')
                            ? 'bg-[#183a0e] border-[#facc15] text-[#facc15] shadow-sm'
                            : 'bg-[#081303]/60 border-[#234914] text-zinc-400 hover:text-white hover:border-[#34661e]'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>Morning (6–11 AM)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: 'Evening (4:00 PM - 10:00 PM)' })}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          formData.timeSlot.includes('Evening')
                            ? 'bg-[#183a0e] border-[#facc15] text-[#facc15] shadow-sm'
                            : 'bg-[#081303]/60 border-[#234914] text-zinc-400 hover:text-white hover:border-[#34661e]'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>Evening (4–10 PM)</span>
                      </button>
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Specific Goal or Question <span className="text-zinc-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      placeholder="e.g. Inquiring about personal trainer availability, student discount, or workout trial..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#081303]/80 border border-[#234914] text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-xs sm:text-sm uppercase tracking-wider font-extrabold flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[0_8px_25px_rgba(250,204,21,0.3)] transition-all cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Quote...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Get My Free Quote on WhatsApp</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-zinc-400 text-center mt-2 font-sans-clean">
                      ⚡ Quick response within minutes &bull; Free 1-Day Trial Pass voucher included
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* RIGHT: Live Google Map & Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#0d2106]/90 border border-[#234914] p-5 sm:p-7 shadow-2xl backdrop-blur-md"
          >
            <div>
              {/* Map Header Status */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1b3d0f]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-headline text-sm font-bold text-white tracking-wide">
                    Live Gym Location
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#183a0e] text-[#facc15] text-[11px] font-bold">
                  <Star className="w-3 h-3 fill-[#facc15]" />
                  <span>4.7 (40+ Reviews)</span>
                </div>
              </div>

              {/* Exact Google Map Embed provided by User */}
              <div className="w-full rounded-2xl overflow-hidden border border-[#234914] shadow-md bg-black/40 min-h-[300px] sm:min-h-[350px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1870912919235!2d77.0513362!3d28.624154299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0506eeb08c4b%3A0x6ea73506ff88d571!2sP%20Academy%20Gym!5e0!3m2!1sen!2sin!4v1790326066844!5m2!1sen!2sin" 
                  width="100%" 
                  height="340" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="P Academy Gym Map Location"
                  className="w-full h-[320px] sm:h-[350px] object-cover"
                />
              </div>

              {/* Address details */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#081303]/70 border border-[#234914]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                      P Academy Gym Uttam Nagar
                    </h5>
                    <p className="text-[12px] text-zinc-300 leading-relaxed font-sans-clean">
                      1st Floor, Om Vihar-II, Plot No. 135-136, near Aryan Garden, Phase 1, Om Vihar, Uttam Nagar, Delhi - 110059
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons row */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#142d0a] hover:bg-[#1a380e] border border-[#2e5b19] hover:border-[#facc15] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-[#facc15]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${GYM_INFO.phone}`}
                className="py-2.5 px-3 rounded-xl bg-[#142d0a] hover:bg-[#1a380e] border border-[#2e5b19] hover:border-[#facc15] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#facc15]" />
                <span>Call Directly</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
