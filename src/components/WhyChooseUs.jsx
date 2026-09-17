import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../data/gymData';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2 block">
            Why Choose Us
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-none mb-4">
            Built for Real Fitness Progress.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            High quality equipment, clean atmosphere, certified trainers, and full steam recovery.
          </p>
        </div>

        {/* 6 Editorial Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200 flex flex-col h-[400px] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Card Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 text-xs font-heading font-black px-3 py-1 rounded-full bg-black text-white shadow-sm">
                  {item.id}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-zinc-50">
                <div>
                  <h3 className="font-heading text-xl font-bold text-black mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Oxygen Gym Sikar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
