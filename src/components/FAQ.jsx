import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function FAQ({ onOpenBooking }) {
  // Initially null so NO question is open by default
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'I am a complete beginner. Is this gym for me?',
      answer:
        'Absolutely! Over 60% of our members started as complete beginners. Head Coach Devender Dahiya personally guides you step-by-step through equipment orientation, proper biomechanics, and a customized routine tailored to your current fitness level.',
    },
    {
      question: 'Do you offer a free trial before joining?',
      answer:
        'Yes, your first trial session is 100% free! You get full access to our imported strength machines, cardio floor, and locker facilities with zero commitment.',
    },
    {
      question: 'Are there any hidden admission or maintenance fees?',
      answer:
        'None at all. All our membership pricing is 100% upfront and transparent. No hidden registration fees, maintenance surcharges, or surprise fees.',
    },
    {
      question: 'What are the gym operating hours?',
      answer:
        'We are open Monday through Saturday with dedicated morning and evening slots: Morning 6:00 AM – 11:00 AM and Evening 4:00 PM – 10:00 PM. Sundays are reserved for maintenance.',
    },
    {
      question: 'What should I bring for my first gym workout?',
      answer:
        'Just wear comfortable athletic gym clothing and clean sports shoes, and bring a water bottle. We provide private lockers, changing areas, and all training gear.',
    },
    {
      question: 'Where is P Academy Gym located in Uttam Nagar?',
      answer:
        'We are located at 1st Floor, Om Vihar-II, Plot No. 135-136, near Aryan Garden, Phase 1, Om Vihar, Uttam Nagar, Delhi - 110059. Free member parking is available right in front.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const whatsappInquiryUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi P Academy Gym! I have a question regarding gym membership and facilities.'
  )}`;

  return (
    <section 
      id="faqs" 
      className="relative bg-[#0d2106] py-16 sm:py-20 lg:py-24 overflow-hidden select-none border-t border-[#1a380e] scroll-mt-24"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute left-[-100px] top-[25%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute right-[-100px] bottom-[20%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Clean Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#081303] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            FREQUENTLY ASKED <span className="text-[#facc15]">QUESTIONS</span>
          </h2>

          <p className="font-sans-clean text-[#b4ceaf] text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Everything you need to know about joining P Academy Gym, personal coaching with Devender Dahiya, timings, and membership.
          </p>
        </div>

        {/* Sleek Accordion List */}
        <div className="flex flex-col gap-3 sm:gap-3.5 mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0f2708] border border-[#facc15] shadow-lg shadow-[#facc15]/5'
                    : 'bg-[#091a04]/90 border border-[#1a380c] hover:border-[#facc15]/50'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none group"
                >
                  <span
                    className={`font-sans-clean font-bold text-sm sm:text-base pr-4 transition-colors leading-snug ${
                      isOpen ? 'text-[#facc15]' : 'text-white group-hover:text-[#facc15]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#facc15] text-[#081303] rotate-180 shadow-md'
                        : 'bg-[#12280a] text-zinc-300 border border-[#214713] group-hover:border-[#facc15] group-hover:text-[#facc15]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#1a380c]">
                        <p className="font-sans-clean text-xs sm:text-[13.5px] text-[#b4ceaf] font-normal leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="bg-[#091a04]/90 border border-[#1a380c] rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="font-headline font-black text-white text-lg sm:text-xl uppercase tracking-wide">
              Still Have A Question?
            </h4>
            <p className="font-sans-clean text-xs text-[#a1c499] mt-0.5">
              Chat directly with Coach Devender or call us at +91 95828 87741.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-sans-clean font-extrabold text-xs px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#12280a] hover:bg-[#1a390e] border border-[#214713] hover:border-[#facc15]/50 text-white font-sans-clean font-bold text-xs px-4 py-3 rounded-xl inline-flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${GYM_INFO.phone}`}
              className="bg-[#12280a] hover:bg-[#1a390e] border border-[#214713] hover:border-[#facc15]/50 text-white font-sans-clean font-bold text-xs px-4 py-3 rounded-xl inline-flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#facc15]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
