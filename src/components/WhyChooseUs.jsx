import React from 'react';
import { motion } from 'framer-motion';
import { Award, Dumbbell, ClipboardCheck, TrendingUp, Utensils, Clock, ChevronRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking }) {
  const leftFeatures = [
    {
      title: 'Certified Expert Coaches',
      description: 'Train with certified professionals who guide you effectively.',
      icon: Award,
    },
    {
      title: 'State-Of-The-Art Equipment',
      description: 'Train with the latest machines for better results.',
      icon: Dumbbell,
    },
    {
      title: 'Personalized Fitness Plans',
      description: 'Get a plan tailored to your body, lifestyle, and goals.',
      icon: ClipboardCheck,
    },
  ];

  const rightFeatures = [
    {
      title: 'Proven Transformations',
      description: "Join hundreds who've achieved real and lasting results here.",
      icon: TrendingUp,
    },
    {
      title: 'Nutrition & Wellness Guidance',
      description: 'Receive expert tips on meals, recovery, and overall wellness.',
      icon: Utensils,
    },
    {
      title: 'Convenient Location & Hours',
      description: 'Train anytime with easy access and extended opening hours.',
      icon: Clock,
    },
  ];

  const allFeatures = [...leftFeatures, ...rightFeatures];

  return (
    <section id="why-us" className="relative bg-white text-black py-14 sm:py-20 lg:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Top Header Badge & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-18"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-[2px] bg-[#ca8a04]"></span>
            <span className="font-sans-clean text-xs font-black uppercase tracking-[0.22em] text-[#ca8a04]">
              Why Choose Us
            </span>
            <span className="w-6 h-[2px] bg-[#ca8a04]"></span>
          </div>

          {/* Headline */}
          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-[42px] leading-[1.15] text-[#0e2205] tracking-tight">
            Why We're The Right Fit For You
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (lg and up: 3 columns with athlete in center, icons + text)  */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-12">
          
          {/* Left 3 Features (Desktop: Aligned to the Right towards Athlete) */}
          <div className="lg:col-span-4 flex flex-col gap-8 sm:gap-10">
            {leftFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 text-right justify-end"
                >
                  <div className="flex-1">
                    <h3 className="font-sans-clean font-extrabold text-base sm:text-[17px] text-[#0e2205] leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans-clean text-zinc-500 text-xs sm:text-[13px] font-normal leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                  {/* Athletic Yellow Circle Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon className="w-5 h-5 text-[#081303] stroke-[2.2]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Athlete Photo with Warm Yellow Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 relative flex items-center justify-center"
          >
            {/* Ambient Radial Backlight Glow */}
            <div 
              className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full pointer-events-none -z-0"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.35) 0%, rgba(202, 138, 4, 0.15) 45%, transparent 70%)',
              }}
            />

            {/* Athlete Image */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/why-choose-athlete.webp"
                alt="P Academy Gym Peak Physical Fitness"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </motion.div>

          {/* Right 3 Features (Desktop: Aligned to the Left) */}
          <div className="lg:col-span-4 flex flex-col gap-8 sm:gap-10">
            {rightFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 text-left justify-start"
                >
                  {/* Athletic Yellow Circle Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon className="w-5 h-5 text-[#081303] stroke-[2.2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans-clean font-extrabold text-base sm:text-[17px] text-[#0e2205] leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans-clean text-zinc-500 text-xs sm:text-[13px] font-normal leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE / TABLET VIEW (< lg: Athlete + 2 items per row, NO icons/explanation) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden max-w-xl mx-auto mb-10">
          {/* Athlete Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center mb-6"
          >
            {/* Ambient Radial Backlight Glow */}
            <div 
              className="absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full pointer-events-none -z-0"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.35) 0%, rgba(202, 138, 4, 0.15) 45%, transparent 70%)',
              }}
            />

            {/* Athlete Image */}
            <div className="relative w-[210px] sm:w-[250px] aspect-square rounded-full overflow-hidden flex items-center justify-center shadow-lg border-2 border-[#facc15]/30">
              <img
                src="/images/why-choose-athlete.webp"
                alt="P Academy Gym Peak Physical Fitness"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </motion.div>

          {/* 2 Items per Row Grid (No Icons, No Descriptions) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
            {allFeatures.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-zinc-50 border border-zinc-200/90 hover:border-[#ca8a04]/40 rounded-xl px-3 py-3.5 sm:px-4 sm:py-4 flex items-center justify-center text-center shadow-xs transition-colors"
              >
                <span className="font-sans-clean font-extrabold text-[13px] sm:text-sm text-[#0e2205] leading-snug tracking-tight">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Centered Free Trial Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onOpenBooking}
            className="bg-[#facc15] hover:bg-[#081303] text-[#081303] hover:text-[#facc15] font-sans-clean font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-250 cursor-pointer group"
          >
            <span>Start Your Free Trial</span>
            <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
}
