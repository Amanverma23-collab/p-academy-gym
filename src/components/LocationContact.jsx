import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function LocationContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    membership: '3 Months Standard (₹4500)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello P Academy Gym Uttam Nagar!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested Plan: ${formData.membership}\nMessage: ${formData.message || 'I want to schedule a visit.'}`
    );
    window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="location" className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Info & Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
                Visit Us Today
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-none mb-6">
                Location & Details.
              </h2>

              {/* Info Cards */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-black text-base">Gym Address</h3>
                    <p className="text-zinc-600 text-sm mt-1 leading-relaxed">
                      {GYM_INFO.address}
                    </p>
                    <a
                      href={GYM_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold text-xs mt-2 transition-colors"
                    >
                      <span>Open on Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${GYM_INFO.phone}`}
                    className="flex items-center gap-3 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-emerald-500 transition-colors"
                  >
                    <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-black text-xs uppercase tracking-wider">Direct Call</h3>
                      <p className="text-emerald-700 font-bold text-sm mt-0.5">{GYM_INFO.phoneFormatted}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-black text-xs uppercase tracking-wider">Working Hours</h3>
                      <p className="text-zinc-700 font-semibold text-sm mt-0.5">{GYM_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact / Inquiry Form */}
            <div id="contact" className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-md">
              <h3 className="font-heading text-xl font-bold text-black mb-2">
                Inquire or Schedule a Gym Visit
              </h3>
              <p className="text-zinc-500 text-xs mb-6">
                Fill out your details to connect directly with our head trainer via WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-heading text-base font-bold text-black">Inquiry Redirected to WhatsApp</h4>
                  <p className="text-xs text-zinc-600 mt-1">We look forward to meeting you at P Academy Gym Uttam Nagar!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-emerald-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-black placeholder-zinc-400 focus:outline-none focus:border-emerald-500 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="9582887741"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-black placeholder-zinc-400 focus:outline-none focus:border-emerald-500 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Membership Interested
                    </label>
                    <select
                      name="membership"
                      value={formData.membership}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-black focus:outline-none focus:border-emerald-500 text-sm shadow-sm"
                    >
                      <option value="1 Month Standard (₹1600)">1 Month Standard (₹1,600)</option>
                      <option value="3 Months Standard (₹4500)">3 Months Standard (₹4,500)</option>
                      <option value="6 Months Standard (₹7000)">6 Months Standard (₹7,000)</option>
                      <option value="12 Months Standard (₹10000)">12 Months Standard (₹10,000)</option>
                      <option value="1 Month Cardio (₹2100)">1 Month Cardio (₹2,100)</option>
                      <option value="3 Months Cardio (₹5500)">3 Months Cardio (₹5,500)</option>
                      <option value="6 Months Cardio (₹8500)">6 Months Cardio (₹8,500)</option>
                      <option value="12 Months Cardio (₹13000)">12 Months Cardio (₹13,000)</option>
                      <option value="Just Visiting / Trial">Just Visiting / Free Walk-Through</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Any specific fitness goal or preferred time to visit..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-black placeholder-zinc-400 focus:outline-none focus:border-emerald-500 text-sm shadow-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 text-black hover:bg-emerald-400 transition-colors font-heading font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Submit & Chat on WhatsApp
                  </button>
                </form>
              )}
            </div>

          </motion.div>

          {/* Right Column: Embedded Google Maps Map exact iframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 h-full flex flex-col"
          >
            <div className="p-2 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-xl h-full flex flex-col">
              <div className="p-4 flex items-center justify-between border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="font-heading text-sm font-bold text-black">Live Map Location</span>
                </div>
                <span className="text-xs text-zinc-600 font-medium">Om Vihar, Uttam Nagar, Delhi</span>
              </div>

              <div
                className="w-full flex-1 rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[500px]"
                dangerouslySetInnerHTML={{ __html: GYM_INFO.googleMapIframe }}
              />
            </div>
          </motion.div>

        </div>

        {/* Large Contact CTA Banner */}
        <div className="rounded-3xl p-10 sm:p-16 bg-black text-white border border-zinc-800 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
            Start Today
          </span>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-6">
            Ready to Start Your Fitness Journey?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Experience Delhi's premier fitness destination firsthand. Walk in during operational hours or schedule a personal facility tour.
          </p>

          <a
            href={`tel:${GYM_INFO.phone}`}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black hover:bg-emerald-400 hover:text-black transition-all duration-300 font-heading font-extrabold text-sm uppercase tracking-wider shadow-2xl"
          >
            Visit P Academy Gym Today
          </a>
        </div>

      </div>
    </section>
  );
}
