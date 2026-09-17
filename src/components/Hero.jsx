import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Clock, Star } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Editorial Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 bg-black text-white rounded-full">
            Oxygen Gym Sikar
          </span>
          <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 inline" />
            Near Allen Coaching, Piprali Road
          </span>
        </motion.div>

        {/* Large Typography Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h1 className="font-heading font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.92] text-black mb-6">
              Train Strong.<br />
              <span className="text-zinc-400">Stay Consistent.</span>
            </h1>

            <p className="text-zinc-700 text-lg sm:text-xl max-w-xl font-normal leading-relaxed mb-8">
              Sikar's premier destination for strength training, weight loss, cardio split, and dedicated steam & sauna recovery. Built for serious athletes, students, and fitness enthusiasts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#membership"
                className="bg-black text-white hover:bg-emerald-600 transition-all duration-300 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                View Membership Plans
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-zinc-100 border border-zinc-300 text-black hover:border-black transition-all duration-300 px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider"
              >
                Book Gym Visit
              </button>
            </div>

            {/* Practical Quick Info Strip */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-200">
              <div>
                <span className="font-heading font-bold text-xl sm:text-2xl text-black block">
                  5 AM – 10 PM
                </span>
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Daily Hours
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="font-heading font-bold text-xl sm:text-2xl text-black">4.9</span>
                  <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                </div>
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Google Rated
                </span>
              </div>

              <div>
                <span className="font-heading font-bold text-xl sm:text-2xl text-black block">
                  Steam & Sauna
                </span>
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Included
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Real Gym Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100">
              <img
                src="/images/gym-machines-white.jpg"
                alt="Oxygen Gym Sikar — Pro Bodyline Machine Floor"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                  Piprali Road, Sikar
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  Heavy Strength & Cardio Suite
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
