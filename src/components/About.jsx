import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/gymData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-3 block">
              About Oxygen Gym Sikar
            </span>

            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-tight mb-6">
              A Dedicated Fitness Destination on Piprali Road.
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Oxygen Gym was established to offer students, working professionals, and residents of Sikar a clean, professional, and well-maintained training space. Located near Allen Coaching Centre on Piprali Road, we focus on real strength training, cardio conditioning, and complete bodily recovery.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are preparing for athletic goals, weight loss, or maintaining consistency alongside heavy study schedules, our facility provides top-grade equipment, floor trainers, and hygienic steam & sauna amenities.
            </p>

            {/* Services List */}
            <div className="mb-8">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-4">
                Available Facilities & Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((serv, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-800 text-xs font-bold shadow-sm"
                  >
                    {serv}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Fact Note */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <h4 className="font-heading font-bold text-black text-base mb-1">
                Flexible Timings for Coaching Students & Working Pros
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                Open continuously from 5:00 AM in the morning to 10:00 PM at night, making it easy to schedule workouts around Coaching classes and work shifts.
              </p>
            </div>
          </motion.div>

          {/* Single Photography Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-lg bg-white">
              <img
                src="/images/dumbbell-rack.png"
                alt="Oxygen Gym Sikar — Dumbbell & Free Weight Rack"
                className="w-full h-[480px] object-cover"
              />
              <div className="p-5 border-t border-zinc-200 bg-white">
                <p className="font-heading text-sm font-bold text-black">
                  Certified Trainer Assistance & Floor Supervision
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Oxygen Gym • Shiv Nagar, Piprali Road, Sikar
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
