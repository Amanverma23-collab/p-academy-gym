import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

export default function Pricing({ onOpenBooking }) {
  const plans = [
    {
      name: 'Monthly Plan',
      badge: '1 Month Access',
      subtitle: 'For beginners starting their fitness routine or trial workout.',
      price: '1,600',
      duration: '/ 1 Month',
      effectivePrice: '₹1,600 / mo',
      savings: null,
      isFeatured: false,
      electricColor: '#7df9ff',
      speed: 0.9,
      chaos: 0.1,
      features: [
        'Full Strength & Cardio floor access',
        'General trainer floor assistance',
        'Locker & shower facilities',
        'Basic workout chart & BMI check',
        'Free vehicle parking space',
      ],
      buttonBg: 'bg-[#d8f801] hover:bg-[#c6e600] text-[#081303]',
      cardBg: 'bg-white text-zinc-900 border border-zinc-100 shadow-xl',
      priceColor: 'text-black',
      checkBg: 'bg-[#0e2205] text-[#d8f801]',
      dividerColor: 'bg-zinc-200',
    },
    {
      name: 'Quarterly Plan',
      badge: 'Most Popular',
      subtitle: 'Best for building consistency, muscle tone & visible body transformation.',
      price: '4,500',
      duration: '/ 3 Months',
      effectivePrice: '₹1,500 / mo',
      savings: 'Save ₹300',
      isFeatured: true,
      electricColor: '#7df9ff',
      speed: 1.25,
      chaos: 0.13,
      features: [
        'Unlimited Strength & Cardio floor access',
        'Hygienic Steam bath & sauna access',
        'Personalized diet & nutrition consultation',
        'Bi-weekly body composition tracking',
        'Personal training guidance on floor',
        'Dedicated locker & changing room access',
      ],
      buttonBg: 'bg-[#081303] hover:bg-black text-white shadow-lg',
      cardBg: 'bg-[#d8f801] text-[#081303] border-2 border-[#c2e400] shadow-[0_20px_50px_rgba(216,248,1,0.35)]',
      priceColor: 'text-[#081303]',
      checkBg: 'bg-[#081303] text-[#d8f801]',
      dividerColor: 'bg-[#081303]/20',
    },
    {
      name: 'Yearly Plan',
      badge: 'Best Value',
      subtitle: 'The complete 365-day commitment for serious lifters & complete fitness transformation.',
      price: '10,000',
      duration: '/ 12 Months',
      effectivePrice: '₹833 / mo',
      savings: 'Save 48% (₹9,200)',
      isFeatured: false,
      electricColor: '#7df9ff',
      speed: 0.9,
      chaos: 0.1,
      features: [
        'Unlimited 365 days gym & cardio access',
        'Unlimited Steam & Sauna recovery suite',
        'Custom diet & supplement consultation',
        '1 Month membership freeze facility',
        'Free P Academy gym shaker & kit',
        'Priority floor trainer support',
        'Quarterly fitness audits & progress checkups',
      ],
      buttonBg: 'bg-[#d8f801] hover:bg-[#c6e600] text-[#081303]',
      cardBg: 'bg-white text-zinc-900 border border-zinc-100 shadow-xl',
      priceColor: 'text-black',
      checkBg: 'bg-[#0e2205] text-[#d8f801]',
      dividerColor: 'bg-zinc-200',
    },
  ];

  return (
    <section id="pricing" className="relative bg-[#0d2106] py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      {/* Background ambient radial glows */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(216, 248, 1, 0.18) 0%, rgba(132, 204, 22, 0.08) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Top Header Badge & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          {/* Pill Badge: Pricing */}
          <div className="mb-4">
            <span className="font-sans-clean bg-[#d8f801] text-[#081303] text-xs font-extrabold px-5 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-sm">
              Pricing
            </span>
          </div>

          {/* Headline: CHOOSE THE BEST PRICING FOR YOU */}
          <h2 className="font-headline font-black text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.92] text-white uppercase tracking-tight">
            CHOOSE <span className="text-[#d8f801]">THE BEST</span>
            <br />
            PRICING FOR YOU
          </h2>
        </motion.div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                          ? 'bg-[#081303] text-[#d8f801]'
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
                      className={`font-sans-clean font-extrabold text-xs sm:text-sm px-7 py-3 rounded-full inline-flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer ${plan.buttonBg}`}
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
