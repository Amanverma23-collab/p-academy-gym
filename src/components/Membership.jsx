import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { STANDARD_MEMBERSHIPS, CARDIO_MEMBERSHIPS, GYM_INFO } from '../data/gymData';

export default function Membership({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('standard');

  const plansToDisplay = activeTab === 'standard' ? STANDARD_MEMBERSHIPS : CARDIO_MEMBERSHIPS;

  const handleJoinWhatsApp = (planName, price) => {
    const text = encodeURIComponent(
      `Hi Oxygen Gym Sikar! I want to join the "${planName}" plan for ₹${price.toLocaleString('en-IN')}. Please share admission details.`
    );
    window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="membership" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2 block">
            Transparent Rates
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-none mb-4">
            Membership Plans.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Exact, honest pricing for Standard Gym and Cardio + Gym packages.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-full bg-zinc-200 border border-zinc-300 flex items-center gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'standard'
                  ? 'bg-black text-white shadow-md'
                  : 'text-zinc-700 hover:text-black'
              }`}
            >
              Standard Gym Plans
            </button>
            <button
              onClick={() => setActiveTab('cardio')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'cardio'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'text-zinc-700 hover:text-black'
              }`}
            >
              Cardio + Gym Plans
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {plansToDisplay.map((planItem, index) => {
              const isPopular = planItem.tag !== null;

              return (
                <div
                  key={index}
                  className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? 'bg-black text-white shadow-2xl scale-[1.02] border-2 border-emerald-500 z-10'
                      : 'bg-white text-black border border-zinc-200 hover:border-zinc-400 shadow-sm'
                  }`}
                >
                  {/* Badge */}
                  {planItem.tag && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm ${
                        isPopular ? 'bg-emerald-500 text-black' : 'bg-zinc-100 text-emerald-700 border border-zinc-300'
                      }`}
                    >
                      {planItem.tag}
                    </div>
                  )}

                  <div>
                    <h3 className={`font-heading text-lg font-bold tracking-tight uppercase mb-4 pt-1 ${isPopular ? 'text-white' : 'text-black'}`}>
                      {planItem.plan}
                    </h3>

                    {/* Price */}
                    <div className="mb-6 border-b pb-6 border-current/10">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-2xl font-bold ${isPopular ? 'text-emerald-400' : 'text-emerald-600'}`}>
                          ₹
                        </span>
                        <span className={`font-heading font-black text-4xl sm:text-5xl tracking-tight ${isPopular ? 'text-white' : 'text-black'}`}>
                          {planItem.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className={`text-[11px] font-semibold uppercase tracking-wider block mt-1 ${isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Duration: {planItem.duration}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {planItem.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs font-medium">
                          <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isPopular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                          <span className={isPopular ? 'text-zinc-200' : 'text-zinc-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleJoinWhatsApp(planItem.plan, planItem.price)}
                      className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                        isPopular
                          ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                          : 'bg-black text-white hover:bg-emerald-600'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Join on WhatsApp
                    </button>
                    
                    <button
                      onClick={onOpenBooking}
                      className={`w-full py-2 text-[11px] font-bold uppercase tracking-wider text-center transition-colors ${
                        isPopular ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
                      }`}
                    >
                      Book In-Person Visit
                    </button>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center text-xs text-zinc-500 font-medium">
          All memberships include lockers, changing rooms, and free vehicle parking.
        </div>

      </div>
    </section>
  );
}
