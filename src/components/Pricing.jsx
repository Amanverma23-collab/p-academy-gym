import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

export default function Pricing({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('strength');

  const strengthPlans = [
    {
      name: 'Monthly Plan',
      badge: '1 Month Access',
      subtitle: 'For beginners starting their workout routine or trial training.',
      price: '1,600',
      duration: '/ 1 Month',
      effectivePrice: '₹1,600 / mo',
      savings: null,
      isFeatured: false,
      electricColor: '#7df9ff',
      speed: 0.9,
      chaos: 0.1,
      features: [
        'Full Strength training floor access',
        'General trainer floor assistance',
        'Locker & shower facilities',
        'Basic workout split & BMI check',
        'Free vehicle parking space',
      ],
    },
    {
      name: 'Quarterly Plan',
      badge: 'Most Popular',
      subtitle: 'Best for building consistency, muscle tone & visible physique changes.',
      price: '4,500',
      duration: '/ 3 Months',
      effectivePrice: '₹1,500 / mo',
      savings: 'Save ₹300',
      isFeatured: true,
      electricColor: '#7df9ff',
      speed: 1.25,
      chaos: 0.13,
      features: [
        'Unlimited Strength training floor access',
        'Hygienic Steam bath & sauna access',
        'Personalized diet & nutrition guidance',
        'Bi-weekly body composition tracking',
        'Floor trainer assistance on form',
        'Dedicated locker & changing room',
      ],
    },
    {
      name: 'Yearly Plan',
      badge: 'Best Value',
      subtitle: 'The complete 365-day commitment for lifters seeking real transformation.',
      price: '10,000',
      duration: '/ 12 Months',
      effectivePrice: '₹833 / mo',
      savings: 'Save 48% (₹9,200)',
      isFeatured: false,
      electricColor: '#7df9ff',
      speed: 0.9,
      chaos: 0.1,
      features: [
        'Unlimited 365 days gym floor access',
        'Unlimited Steam & Sauna recovery suite',
        'Custom diet & supplement consultation',
        '1 Month membership freeze facility',
        'Free P Academy gym shaker & kit',
        'Priority floor trainer support',
        'Quarterly fitness audits & checkups',
      ],
    },
  ];

  const cardioPlans = [
    {
      name: 'Monthly Cardio',
      badge: 'Strength + Cardio',
      subtitle: 'Cardio endurance combined with plate-loaded strength training.',
      price: '2,100',
      duration: '/ 1 Month',
      effectivePrice: '₹2,100 / mo',
      savings: null,
      isFeatured: false,
      electricColor: '#7df9ff',
      speed: 0.9,
      chaos: 0.1,
      features: [
        'Strength floor + Cardio Zone access',
        'Commercial treadmills, cycles & cross-trainers',
        'Trainer assistance on warmup & pacing',
        'Locker & shower facilities',
        'Free vehicle parking space',
      ],
    },
    {
      name: 'Quarterly Cardio',
      badge: 'Popular Cardio',
      subtitle: 'Complete fat-loss and endurance regimen with full steam recovery.',
      price: '5,500',
      duration: '/ 3 Months',
      effectivePrice: '₹1,833 / mo',
      savings: 'Save ₹800',
      isFeatured: true,
      electricColor: '#7df9ff',
      speed: 1.25,
      chaos: 0.13,
      features: [
        'Unlimited Strength + Cardio Zone access',
        'Hygienic Steam bath & sauna suite',
        'Custom fat-loss nutrition protocol',
        'Heart-rate & endurance progression tracking',
        'Locker & changing room privileges',
        'Trainer supervision across both floors',
      ],
    },
    {
      name: 'Yearly Cardio',
      badge: 'All-Inclusive',
      subtitle: 'Year-round unlimited strength, cardio, and steam for peak conditioning.',
      price: '13,000',
      duration: '/ 12 Months',
      effectivePrice: '₹1,083 / mo',
      savings: 'Best Long-Term Value',
      isFeatured: false,
      electricColor: '#7df9ff',
      speed: 0.9,
      chaos: 0.1,
      features: [
        '365 Days Unlimited Strength & Cardio Floor',
        'Unlimited Steam & Sauna recovery suite',
        'Complete metabolic & diet coaching',
        'Free membership freeze up to 45 days',
        'Free P Academy gym shaker & gym bag',
        'Year-round trainer goal accountability',
        'Quarterly body composition checkups',
      ],
    },
  ];

  const currentPlans = activeTab === 'strength' ? strengthPlans : cardioPlans;

  return (
    <section id="pricing" className="relative bg-[#0d2106] py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      {/* Background ambient radial glows */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, rgba(132, 204, 22, 0.08) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Top Header Badge & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-3.5">
            <span className="w-6 h-[2px] bg-[#facc15]"></span>
            <span className="font-sans-clean text-xs font-black uppercase tracking-[0.22em] text-[#facc15]">
              Membership Plans
            </span>
            <span className="w-6 h-[2px] bg-[#facc15]"></span>
          </div>

          {/* Headline */}
          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-[42px] leading-[1.12] text-white tracking-tight mb-6">
            Choose The Best Plan For You
          </h2>

          {/* Functional Category Toggle Switch */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#122b09] border border-[#234c14] shadow-inner">
            <button
              onClick={() => setActiveTab('strength')}
              className={`px-5 py-2.5 rounded-full font-sans-clean text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === 'strength'
                  ? 'bg-[#facc15] text-[#081303] shadow-md scale-[1.02]'
                  : 'text-zinc-300 hover:text-[#facc15] hover:bg-white/5 hover:scale-[1.02]'
              }`}
            >
              Strength Training Floor
            </button>
            <button
              onClick={() => setActiveTab('cardio')}
              className={`px-5 py-2.5 rounded-full font-sans-clean text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === 'cardio'
                  ? 'bg-[#facc15] text-[#081303] shadow-md scale-[1.02]'
                  : 'text-zinc-300 hover:text-[#facc15] hover:bg-white/5 hover:scale-[1.02]'
              }`}
            >
              Strength + Cardio Floor
            </button>
          </div>
        </motion.div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {currentPlans.map((plan, idx) => (
            <motion.div
              key={`${activeTab}-${plan.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`h-full ${plan.isFeatured ? 'lg:-translate-y-3' : ''}`}
            >
              <ElectricBorder
                color={plan.electricColor}
                speed={plan.speed}
                chaos={plan.chaos}
                borderRadius={24}
                thickness={2}
                className="h-full"
              >
                <div
                  className={`group rounded-3xl flex flex-col justify-between text-left h-full transition-colors duration-300 bg-white border shadow-lg overflow-hidden cursor-default hover:bg-amber-50
                    ${ plan.isFeatured
                      ? 'border-[#facc15]'
                      : 'border-zinc-200 hover:border-[#facc15]/60'
                    }`}
                >

                  <div className="p-8 sm:p-10 flex flex-col h-full">
                    <div>
                      {/* Badge & Savings Row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`font-sans-clean text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                          plan.isFeatured
                            ? 'bg-[#facc15] text-[#081303]'
                            : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                        }`}>
                          {plan.badge}
                        </span>
                        {plan.savings && (
                          <span className="font-sans-clean text-[11.5px] font-extrabold text-emerald-600">
                            {plan.savings}
                          </span>
                        )}
                      </div>

                      {/* Plan Name */}
                      <h3 className="font-headline font-bold text-2xl tracking-tight mb-1 text-zinc-900">
                        {plan.name}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs leading-relaxed mb-6 font-sans-clean text-zinc-500 font-normal">
                        {plan.subtitle}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline mb-6">
                        <span className="font-headline font-black text-4xl sm:text-5xl tracking-tight text-zinc-900">
                          ₹{plan.price}
                        </span>
                        <div className="flex flex-col ml-2.5">
                          <span className="text-xs font-sans-clean text-zinc-600 font-semibold">
                            {plan.duration}
                          </span>
                          {plan.effectivePrice && (
                            <span className="text-[11px] font-sans-clean font-bold text-emerald-600">
                              ({plan.effectivePrice})
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-[1px] my-6 bg-zinc-200 group-hover:bg-[#facc15]/40 transition-colors duration-300" />

                      {/* Features */}
                      <div className="flex flex-col gap-3.5 mb-8">
                        {plan.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0e2205] text-[#facc15]">
                              <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                            </div>
                            <span className="font-sans-clean text-xs sm:text-[13px] leading-snug font-medium text-zinc-700">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2 mt-auto">
                      <button
                        onClick={onOpenBooking}
                        className="btn-base btn-primary gap-1.5 group/btn w-full sm:w-auto"
                      >
                        <span>Select Plan</span>
                        <ChevronRight className="w-4 h-4 stroke-[3] group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
