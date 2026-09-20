import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Team() {
  const coaches = [
    {
      name: 'Trainer Devender Dahiya',
      role: 'Head Coach & Transformation Specialist',
      image: '/trainers/trainer-rayhan.jpg',
    },
    {
      name: 'Trainer Aman Sharma',
      role: 'Bodybuilding & Strength Coach',
      image: '/trainers/trainer-rabbi.jpg',
    },
    {
      name: 'Trainer Pooja Malik',
      role: 'Strength & Conditioning Coach',
      image: '/trainers/trainer-maryam.jpg',
    },
    {
      name: 'Trainer Neha Sharma',
      role: 'Functional Trainer & Mobility Specialist',
      image: '/trainers/trainer-brock.jpg',
    },
  ];

  const highlights = [
    'Certified Personal Trainer',
    'Nutrition Specialist',
    'Former Competitive Athlete',
    'Helped 500+ Clients To Achieve Their Fitness Goals',
  ];

  return (
    <section id="team" className="relative bg-[#0d2106] py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div 
        className="absolute left-[-100px] top-[30%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(216, 248, 1, 0.2) 0%, rgba(132, 204, 22, 0.1) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div 
        className="absolute right-[-100px] bottom-[10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.22) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Asymmetrical Grid: Left Dark Card + Right 4 Coaches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Intro Dark Green Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-[#0a1a04] border border-[#1a380c] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl text-left"
          >
            <div>
              {/* Pill Tag: Our Team */}
              <div className="mb-4">
                <span className="font-sans-clean bg-[#d8f801] text-[#081303] text-xs font-extrabold px-5 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-sm">
                  Our Team
                </span>
              </div>

              {/* Heading: Meet Your Dedicated Coaches */}
              <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-[56px] text-white uppercase leading-[0.94] tracking-tight mb-5">
                Meet Your
                <br />
                <span className="text-[#d8f801]">Dedicated</span>
                <br />
                Coaches
              </h2>

              {/* Description Paragraph */}
              <p className="font-sans-clean text-[#b4ceaf] text-xs sm:text-[13.5px] font-normal leading-relaxed mb-8">
                Through personalized coaching, cutting edge techniques, and unwavering support, we'll help you achieve the fitness goals you've always dreamed of.
              </p>

              {/* Bullet Checklist */}
              <div className="flex flex-col gap-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#d8f801] text-[#081303] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                    </div>
                    <span className="font-sans-clean text-xs sm:text-[13px] font-semibold text-zinc-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent brand indicator */}
            <div className="pt-8 mt-8 border-t border-[#18360a] flex items-center justify-between">
              <span className="font-brand-serif font-bold text-lg text-white">
                P Academy Elite
              </span>
              <span className="text-xs text-[#d8f801] font-sans-clean font-bold uppercase tracking-wider">
                • 100% Certified
              </span>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of 4 Coach Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coaches.map((coach, idx) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-zinc-900 border border-[#1a380c] hover:border-[#d8f801]/60 transition-all duration-300"
              >
                {/* Coach Photo */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-950">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Neon Lime Label Bar */}
                <div className="bg-[#d8f801] text-[#081303] py-3.5 px-4 text-center flex flex-col justify-center items-center">
                  <h3 className="font-sans-clean font-extrabold text-sm sm:text-base leading-tight text-[#081303]">
                    {coach.name}
                  </h3>
                  <p className="font-sans-clean text-[11px] sm:text-[12px] font-semibold text-[#081303]/85 mt-0.5">
                    {coach.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
