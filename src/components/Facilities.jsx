import React from 'react';
import { motion } from 'framer-motion';
import { FACILITIES } from '../data/gymData';

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
            World-Class Amenities
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-none mb-4">
            Facilities & Infrastructure.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Every zone engineered for comfort, hygiene, and peak athletic performance.
          </p>
        </div>

        {/* Facilities Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="p-6 bg-white border-t border-zinc-200">
                <h3 className="font-heading text-xl font-bold text-black group-hover:text-emerald-600 transition-colors mb-2">
                  {facility.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
