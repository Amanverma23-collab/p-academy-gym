import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function BookVisitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    membership: 'Quarterly Plan (₹4,500 / 3 Months)',
    timeSlot: 'Morning (6 AM - 10 AM)',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello P Academy Gym!\n\nI would like to book a visit / free trial.\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested Plan: ${formData.membership}\nPreferred Slot: ${formData.timeSlot}`
    );
    window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 md:backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-black"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-widest block mb-1">
              P Academy Gym
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-black">
              Schedule Your Gym Visit
            </h2>
            <p className="text-zinc-600 text-xs mt-1">
              Visit our facility for a complete tour & free body workout consultation.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold text-black">Visit Booking Requested!</h3>
              <p className="text-xs text-zinc-600 mt-2 max-w-xs mx-auto">
                You have been redirected to WhatsApp to confirm your preferred time slot with our team.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black placeholder-zinc-400 focus:outline-none focus:border-yellow-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="7014792446"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black placeholder-zinc-400 focus:outline-none focus:border-yellow-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Interested Plan
                  </label>
                  <select
                    value={formData.membership}
                    onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black focus:outline-none focus:border-yellow-500 text-xs"
                  >
                    <option value="1 Month Standard (₹1600)">1 Month Standard (₹1,600)</option>
                    <option value="1 Month Cardio (₹2100)">1 Month Cardio (₹2,100)</option>
                    <option value="3 Months Standard (₹4500)">3 Months Standard (₹4,500)</option>
                    <option value="6 Months Standard (₹7000)">6 Months Standard (₹7,000)</option>
                    <option value="1 Year Transformation (₹10000)">1 Year Transformation (₹10,000)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Preferred Visit Time
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black focus:outline-none focus:border-yellow-500 text-xs"
                  >
                    <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Confirm Visit on WhatsApp
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="text-[11px] font-bold text-zinc-600 hover:text-black flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-yellow-600" />
                  Or Call Directly: {GYM_INFO.phoneFormatted}
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
