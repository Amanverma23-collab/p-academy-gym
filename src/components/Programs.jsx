import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronRight, User, Dumbbell, Flame, HeartPulse } from 'lucide-react';

export default function Programs({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const programs = [
    {
      id: 'coaching',
      title: 'One-On-One Coaching',
      badge: 'Personal Training',
      icon: User,
      image: '/images/coaching-man.webp',
      description:
        'Experience the power of personalized attention. Our one-on-one coaching sessions are crafted to your specific needs, ensuring rapid progress and lasting results',
      features: [
        'Customized workout plans',
        'Nutrition guidance',
        'Regular progress tracking',
        '24/7 coach support',
      ],
    },
    {
      id: 'strength',
      title: 'Strength & Hypertrophy',
      badge: 'Muscle Building',
      icon: Dumbbell,
      image: '/images/about-deadlift.webp',
      description:
        'Supercharge your muscular power and raw strength with progressive overload protocols tailored by expert strength coaches.',
      features: [
        'Powerlifting & hypertrophy splits',
        'Compound lift technique coaching',
        'Targeted muscle group recovery',
        'Max lifting & volume periodization',
      ],
    },
    {
      id: 'fatloss',
      title: 'Fat Loss & HIIT Conditioning',
      badge: 'Metabolic Conditioning',
      icon: Flame,
      image: '/hero-athlete.webp',
      description:
        'Torch calories, boost functional cardiovascular stamina, and transform body composition with intense metabolic resistance workouts.',
      features: [
        'High-intensity circuit training',
        'Caloric deficit meal planning',
        'Heart-rate zone conditioning',
        'Weekly body fat composition scans',
      ],
    },
  ];

  const nextProgram = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevProgram = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const current = programs[currentIndex];
  const IconComponent = current.icon;

  return (
    <section id="services" className="relative bg-[#0d2106] py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div 
        className="absolute right-[-150px] top-[20%] w-[550px] h-[550px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(216, 248, 1, 0.25) 0%, rgba(132, 204, 22, 0.12) 40%, transparent 70%)',
        }}
      />
      <div 
        className="absolute left-[-150px] bottom-[10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          
          {/* Left Column: Pill Badge & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-start text-left"
          >
            {/* Pill Tag: Services */}
            <div className="mb-4">
              <span className="font-sans-clean bg-[#d8f801] text-[#081303] text-xs font-extrabold px-5 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-sm">
                Services
              </span>
            </div>

            {/* Headline: TAILORED PROGRAMS FOR EVERY GOAL */}
            <h2 className="font-headline font-black text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.92] text-white uppercase tracking-tight">
              TAILORED <span className="text-[#d8f801]">PROGRAMS</span>
              <br />
              FOR EVERY GOAL
            </h2>
          </motion.div>

          {/* Right Column: Explanatory Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-end text-left pb-2"
          >
            <p className="font-sans-clean text-[#b4ceaf] text-sm sm:text-base leading-relaxed max-w-lg">
              We understand that every fitness journey is unique, and what works for one person may not work for another. That's why we provide a wide range of services tailored to different goals, lifestyles, and fitness levels
            </p>
          </motion.div>

        </div>

        {/* Main Program Card Showcase: Split Image Left + White Card Right */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
            >
              
              {/* Left Photo Container */}
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-square sm:aspect-[4/3] lg:aspect-auto min-h-[360px] sm:min-h-[440px] relative group">
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-5 left-5 bg-black/70 md:backdrop-blur-md text-[#d8f801] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {current.badge}
                </span>
              </div>

              {/* Right White Details Card */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between text-left">
                <div>
                  {/* Neon Lime Circle Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#d8f801] flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#081303] stroke-[2.2]" />
                  </div>

                  {/* Program Title */}
                  <h3 className="font-headline font-black text-3xl sm:text-4xl text-[#0e2205] uppercase tracking-wide mb-3">
                    {current.title}
                  </h3>

                  {/* Program Description */}
                  <p className="font-sans-clean text-zinc-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Checkmark Feature List */}
                  <div className="flex flex-col gap-3 mb-6">
                    {current.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#0e2205] text-[#d8f801] flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="font-sans-clean text-xs sm:text-[13px] font-semibold text-zinc-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Now Pill CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] font-sans-clean font-extrabold text-xs sm:text-sm px-7 py-3 rounded-full inline-flex items-center gap-1.5 shadow-[0_4px_20px_rgba(216,248,1,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Join Now</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Arrow Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
            <button
              onClick={prevProgram}
              aria-label="Previous Program"
              className="w-11 h-11 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextProgram}
              aria-label="Next Program"
              className="w-11 h-11 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
