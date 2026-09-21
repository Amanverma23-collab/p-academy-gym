import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Award, 
  Flame, 
  Star, 
  Dumbbell, 
  Apple, 
  Target, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Team({ onOpenBooking }) {
  const highlights = [
    'Certified Master Personal Trainer & Transformation Specialist',
    'Personalized Indian Macro & Diet Planning (Veg & Non-Veg)',
    'Strict Biomechanical Form & Injury Prevention Protocol',
    'Documented 500+ Transformations across Delhi & NCR',
  ];

  const pillars = [
    {
      icon: Dumbbell,
      title: 'Hypertrophy & Strength',
      desc: 'Science-backed progressive overload and customized split programming for injury-free muscle gains.',
    },
    {
      icon: Apple,
      title: 'Custom Indian Diets',
      desc: 'Culturally relevant, sustainable meal plans built for your metabolic rate and daily routine.',
    },
    {
      icon: Target,
      title: 'Body Recomposition',
      desc: 'Targeted calorie-deficit protocols that strip stubborn fat while maintaining and toning lean muscle.',
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Support',
      desc: 'Daily habit accountability, weekly body measurement audits, and continuous routine fine-tuning.',
    },
  ];

  const stats = [
    { value: '8+', label: 'Years Experience', sub: 'In Elite Coaching' },
    { value: '500+', label: 'Transformations', sub: 'Documented' },
    { value: '1-on-1', label: 'Personal Guidance', sub: 'On Gym Floor' },
    { value: '4.9 ★', label: 'Member Rating', sub: 'Verified Reviews' },
  ];

  const whatsappConsultUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Coach Devender, I want to consult regarding 1-on-1 personal training and custom workout/diet plans at P Academy Gym.'
  )}`;

  return (
    <section id="team" className="relative bg-[#0d2106] py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div 
        className="absolute left-[-100px] top-[20%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, rgba(132, 204, 22, 0.06) 40%, transparent 70%)',
        }}
      />
      <div 
        className="absolute right-[-100px] bottom-[15%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left sm:text-center max-w-3xl sm:mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#facc15] text-[#081303] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md mb-4"
          >
            <Award className="w-4 h-4 stroke-[2.5]" />
            <span>Head Coach Spotlight</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-4"
          >
            Train Personally Under <br className="hidden sm:inline" />
            <span className="text-[#facc15]">Coach Devender Dahiya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans-clean text-[#b4ceaf] text-sm sm:text-base leading-relaxed"
          >
            Direct 1-on-1 Mentorship • Science-Backed Protocols • Personalized Nutrition • Guaranteed Real Results
          </motion.p>
        </div>

        {/* Spotlight Showcase Grid: Left Info & Pillars + Right Coach Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): Bio, Pillars, Highlights, Stats, CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0a1a04]/90 border border-[#1a380c] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-sm"
          >
            <div>
              {/* Coach Badge & Title */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="bg-[#18360a] border border-[#2d5c14] text-[#facc15] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
                  Founder & Head Coach
                </span>
                <span className="text-zinc-400 text-xs font-sans-clean">
                  • P Academy Gym, Uttam Nagar
                </span>
              </div>

              {/* Bio Narrative */}
              <p className="font-sans-clean text-zinc-200 text-sm sm:text-[15px] font-normal leading-relaxed mb-8">
                At P Academy, your transformation is never outsourced or left to generic gym routines. 
                <strong className="text-white font-semibold"> Head Coach Devender Dahiya</strong> personally evaluates your posture, structural mobility, and metabolic response to formulate an exact lifting and dietary roadmap built around your lifestyle.
              </p>

              {/* 4 Pillars Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#0f2407]/70 border border-[#1b3a0e] rounded-2xl p-4 hover:border-[#facc15]/40 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#facc15]/10 border border-[#facc15]/20 flex items-center justify-center text-[#facc15] mb-3 group-hover:scale-105 group-hover:bg-[#facc15] group-hover:text-[#081303] transition-all duration-300">
                        <Icon className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <h4 className="font-sans-clean font-bold text-white text-sm mb-1">
                        {pillar.title}
                      </h4>
                      <p className="font-sans-clean text-[#a2c29d] text-xs leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Highlights Checklist */}
              <div className="bg-[#071303]/60 border border-[#163309] rounded-2xl p-5 mb-8 flex flex-col gap-3">
                <h5 className="font-sans-clean text-xs font-bold text-[#facc15] uppercase tracking-wider mb-1">
                  Why Members Trust Coach Devender:
                </h5>
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#facc15] text-[#081303] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                    </div>
                    <span className="font-sans-clean text-xs sm:text-[13px] font-medium text-zinc-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#18360a] mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="font-headline font-black text-2xl sm:text-3xl text-[#facc15] leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="font-sans-clean text-xs font-bold text-white leading-tight">
                      {stat.label}
                    </div>
                    <div className="font-sans-clean text-[10px] text-[#93b38e] mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenBooking}
                className="flex-1 bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-sans-clean font-extrabold text-sm py-3.5 px-6 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Free Consultation with Coach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#142e09] hover:bg-[#1a3b0d] border border-[#2d5c14] hover:border-[#facc15]/50 text-white font-sans-clean font-bold text-sm py-3.5 px-6 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Coach</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Devender Dahiya Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-[#071303] border border-[#1a380c] hover:border-[#facc15]/60 transition-all duration-300 h-full">
              
              {/* Coach Photo Container with Badges */}
              <div className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex-1 overflow-hidden bg-zinc-950">
                <img
                  src="/trainers/trainer-rayhan.webp"
                  alt="Coach Devender Dahiya - Head Coach P Academy Gym"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
                />

                {/* Subtle cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071303] via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-md border border-[#facc15]/40 text-[#facc15] px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]" />
                    <span>Head Coach</span>
                  </div>

                  <div className="bg-[#facc15] text-[#081303] px-3.5 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 shadow-lg">
                    <Flame className="w-3.5 h-3.5 fill-[#081303] text-[#081303]" />
                    <span>500+ Transformed</span>
                  </div>
                </div>

                {/* Personal Quote Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a1a04]/90 backdrop-blur-md border border-[#234512] rounded-2xl p-4 shadow-xl pointer-events-none">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-5 h-5 text-[#facc15] flex-shrink-0 opacity-80" />
                    <p className="font-sans-clean text-xs sm:text-[12.5px] italic text-zinc-200 leading-snug">
                      "Consistency beats motivation every single time. Put in the discipline, trust the process, and I will personally guarantee your results."
                    </p>
                  </div>
                  <div className="text-right mt-1.5">
                    <span className="text-[11px] font-bold text-[#facc15] uppercase tracking-wider font-sans-clean">
                      Coach Devender Dahiya, Head Trainer
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Coach Identity Bar */}
              <div className="bg-[#facc15] text-[#081303] py-4 px-6 text-center flex flex-col justify-center items-center shadow-lg">
                <h3 className="font-sans-clean font-black text-lg sm:text-xl leading-tight text-[#081303] tracking-tight">
                  Coach Devender Dahiya
                </h3>
                <p className="font-sans-clean text-xs sm:text-[13px] font-bold text-[#081303]/85 mt-0.5">
                  Head Coach & Transformation Specialist
                </p>
                <div className="mt-2 pt-2 border-t border-[#081303]/15 w-full flex items-center justify-between text-[11px] font-semibold text-[#081303]/80">
                  <span>• 1-on-1 Personal Training</span>
                  <span>• Custom Indian Diet Plans</span>
                </div>
              </div>

              {/* Real Member Testimonial Card */}
              <div className="bg-[#050f02] p-4 sm:p-5 border-t border-[#132c07]">
                <div className="flex items-center gap-1 text-[#facc15] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]" />
                  ))}
                  <span className="text-[11px] font-bold text-white ml-1.5">5.0 Star Member Review</span>
                </div>
                <p className="font-sans-clean text-xs text-[#a9c9a3] italic leading-relaxed">
                  "Awesome place to workout.... getting trained by Devender Dahiya... do not want to change as getting results here only... 😎🤟"
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>Verified Google Review</span>
                  <span className="text-[#facc15] font-semibold">P Academy Gym, Uttam Nagar, Delhi</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
