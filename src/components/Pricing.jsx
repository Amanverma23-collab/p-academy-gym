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
      buttonBg: 'bg-[#facc15] hover:bg-[#eab308] text-[#081303]',
      cardBg: 'bg-white text-zinc-900 border border-zinc-100 shadow-xl',
      priceColor: 'text-black',
      checkBg: 'bg-[#0e2205] text-[#facc15]',
      dividerColor: 'bg-zinc-200',
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
      buttonBg: 'bg-[#081303] hover:bg-black text-white shadow-md',
      cardBg: 'bg-[#facc15] text-[#081303] border-2 border-[#eab308] shadow-xl',
      priceColor: 'text-[#081303]',
      checkBg: 'bg-[#081303] text-[#facc15]',
      dividerColor: 'bg-[#081303]/20',
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
      buttonBg: 'bg-[#facc15] hover:bg-[#eab308] text-[#081303]',
      cardBg: 'bg-white text-zinc-900 border border-zinc-100 shadow-xl',
      priceColor: 'text-black',
      checkBg: 'bg-[#0e2205] text-[#facc15]',
      dividerColor: 'bg-zinc-200',
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
      buttonBg: 'bg-[#facc15] hover:bg-[#eab308] text-[#081303]',
      cardBg: 'bg-white text-zinc-900 border border-zinc-100 shadow-xl',
      priceColor: 'text-black',
      checkBg: 'bg-[#0e2205] text-[#facc15]',
      dividerColor: 'bg-zinc-200',
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
      buttonBg: 'bg-[#081303] hover:bg-black text-white shadow-md',
      cardBg: 'bg-[#facc15] text-[#081303] border-2 border-[#eab308] shadow-xl',
      priceColor: 'text-[#081303]',
      checkBg: 'bg-[#081303] text-[#facc15]',
      dividerColor: 'bg-[#081303]/20',
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
      buttonBg: 'bg-[#facc15] hover:bg-[#eab308] text-[#081303]',
      cardBg: 'bg-white text-zinc-900 border border-zinc-100 shadow-xl',
      priceColor: 'text-black',
      checkBg: 'bg-[#0e2205] text-[#facc15]',
      dividerColor: 'bg-zinc-200',
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
          {/* Pill Badge: Pricing */}
          <div className="mb-4">
            <span className="font-sans-clean bg-[#facc15] text-[#081303] text-xs font-extrabold px-5 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-sm">
              Membership Plans
            </span>
          </div>

          {/* Headline: CHOOSE THE BEST PRICING FOR YOU */}
          <h2 className="font-headline font-black text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.92] text-white uppercase tracking-tight mb-6">
            CHOOSE <span className="text-[#facc15]">THE BEST</span>
            <br />
            PRICING FOR YOU
          </h2>

          {/* Functional Category Toggle Switch */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#122b09] border border-[#234c14] shadow-inner">
            <button
              onClick={() => setActiveTab('strength')}
              className={`px-5 py-2 rounded-full font-sans-clean text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'strength'
                  ? 'bg-[#facc15] text-[#081303] shadow-sm'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Strength Training Floor
            </button>
            <button
              onClick={() => setActiveTab('cardio')}
              className={`px-5 py-2 rounded-full font-sans-clean text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'cardio'
                  ? 'bg-[#facc15] text-[#081303] shadow-sm'
                  : 'text-zinc-300 hover:text-white'
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
              transition={{ duration: 0.4, delay: idx * 0.08 }}
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
                  className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left h-full transition-transform duration-300 ${
                    plan.cardBg
                  }`}
                >
                  <div>
                    {/* Badge Tag & Savings Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`font-sans-clean text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                        plan.isFeatured
                          ? 'bg-[#081303] text-[#facc15]'
                          : 'bg-zinc-100 text-zinc-800 border border-zinc-200'
                      }`}>
                        {plan.badge}
                      </span>
                      {plan.savings && (
                        <span className={`font-sans-clean text-[11.5px] font-extrabold ${
                          plan.isFeatured ? 'text-[#081303]' : 'text-emerald-600'
                        }`}>
                          {plan.savings}
                        </span>
                      )}
                    </div>

                    {/* Plan Name */}
                    <h3 className={`font-headline font-black text-3xl uppercase tracking-wide mb-1 ${plan.priceColor}`}>
                      {plan.name}
                    </h3>

                    {/* Subtitle */}
                    <p className={`text-xs leading-relaxed mb-6 font-sans-clean ${
                      plan.isFeatured ? 'text-[#081303]/85 font-medium' : 'text-zinc-500 font-normal'
                    }`}>
                      {plan.subtitle}
                    </p>

                    {/* Price Display */}
                    <div className="flex items-baseline mb-6">
                      <span className={`font-headline font-black text-5xl sm:text-6xl tracking-tight ${plan.priceColor}`}>
                        ₹{plan.price}
                      </span>
                      <div className="flex flex-col ml-2.5">
                        <span className={`text-xs font-sans-clean ${
                          plan.isFeatured ? 'text-[#081303]/90 font-bold' : 'text-zinc-600 font-semibold'
                        }`}>
                          {plan.duration}
                        </span>
                        {plan.effectivePrice && (
                          <span className={`text-[11px] font-sans-clean font-bold ${
                            plan.isFeatured ? 'text-[#081303]/75' : 'text-emerald-600'
                          }`}>
                            ({plan.effectivePrice})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Thin Divider Line */}
                    <div className={`w-full h-[1px] my-6 ${plan.dividerColor}`}></div>

                    {/* Checklist Features */}
                    <div className="flex flex-col gap-3.5 mb-8">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm ${plan.checkBg}`}>
                            <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                          </div>
                          <span className={`font-sans-clean text-xs sm:text-[13px] leading-snug ${
                            plan.isFeatured ? 'font-semibold text-[#081303]' : 'font-medium text-zinc-700'
                          }`}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Select Plan Pill CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className={`font-sans-clean font-extrabold text-xs sm:text-sm px-7 py-3 rounded-full inline-flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer ${plan.buttonBg}`}
                    >
                      <span>Select Plan</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
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
