import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Plus, Minus } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default like in reference

  const faqs = [
    {
      question: 'I am a complete beginner. Is this gym for me?',
      answer:
        'Absolutely! Over 60% of our members started as complete beginners. Our dedicated personal trainers guide you step-by-step through machine orientations, proper lifting mechanics, and custom routines tailored to your starting fitness level.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, your first session is 100% free! You get full access to our gym facilities, locker rooms, and an introductory consultation with one of our certified fitness coaches with zero obligations.',
    },
    {
      question: 'Are there any hidden fees?',
      answer:
        'None at all. All our membership pricing is 100% transparent. No hidden enrollment fees, maintenance surcharges, or surprise cancellation penalties.',
    },
    {
      question: "What's your cancellation policy?",
      answer:
        'We offer flexible month-to-month plans with no long-term lock-in contracts. You can pause or cancel your membership anytime with a simple 7-day notice.',
    },
    {
      question: 'What do I need to bring for my first session?',
      answer:
        'Just bring comfortable athletic workout clothes, clean training shoes, and a water bottle. We provide lockers, fresh towels, shower amenities, and premium workout equipment.',
    },
    {
      question: 'Do you have parking and showers?',
      answer:
        'Yes! We offer free dedicated member parking right in front of the facility, along with private, hygienic showers, changing rooms, and steam & sauna recovery suites.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="relative bg-white text-black py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Solid Neon Lime Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#d8f801] text-[#081303] rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between min-h-[440px] text-left"
          >
            <div>
              {/* Pill Tag: FAQ'S */}
              <div className="mb-6">
                <span className="font-sans-clean border border-[#081303]/40 text-[#081303] text-xs font-extrabold px-4 py-1 rounded-full inline-block uppercase tracking-wider">
                  FAQ'S
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-[54px] text-[#081303] uppercase leading-[0.94] tracking-tight mb-8">
                We Have
                <br />
                Collected The
                <br />
                Most Asked
                <br />
                Questions
              </h2>
            </div>

            {/* Bottom Question Prompt & CTA */}
            <div className="pt-6 border-t border-[#081303]/15">
              <p className="font-sans-clean text-[#081303]/80 text-xs sm:text-[13px] font-medium mb-3">
                Do you have any questions?
              </p>
              <button
                onClick={onOpenBooking}
                className="bg-[#0e2205] hover:bg-black text-white font-sans-clean font-bold text-xs px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Accordion Capsules */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0e2205] text-white shadow-lg border border-[#0e2205]'
                      : 'bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  {/* Accordion Header / Trigger */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 sm:py-4.5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`font-sans-clean font-bold text-sm sm:text-[15px] pr-4 ${
                        isOpen ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#d8f801] text-[#081303]'
                          : 'text-zinc-600 group-hover:text-black'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expandable Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-white/10">
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

        </div>
      </div>
    </section>
  );
}
