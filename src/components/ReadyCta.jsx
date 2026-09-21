import React from 'react';
import { motion } from 'framer-motion';
import { GYM_INFO } from '../data/gymData';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ReadyCta({ onOpenBooking }) {
  const whatsappInquiryUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi P Academy Gym! I would like to inquire about membership plans and training programs.'
  )}`;

  return (
    <section 
      id="cta-ready" 
      className="relative bg-[#0d2106] py-20 sm:py-28 md:py-36 px-4 sm:px-6 select-none border-t border-[#1a380e] overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute right-[-100px] bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Bold Centered Headline in Gym Theme (White + Yellow) */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] text-white uppercase tracking-tight leading-[0.96] mb-10 sm:mb-14"
        >
          WE'RE READY WHEN
          <br />
          <span className="text-[#facc15]">
            YOU ARE.
          </span>
        </motion.h2>

        {/* 2 Vertically Stacked Pill Buttons in Gym Gold & Border */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center gap-3.5 sm:gap-4 w-full"
        >
          {/* Top Pill: Solid Gold/Yellow "TRY US FREE" */}
          <button
            onClick={onOpenBooking}
            className="w-full max-w-[280px] sm:max-w-[320px] bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-sans-clean font-black text-xs sm:text-sm tracking-widest uppercase py-4 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>TRY US FREE</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>

          {/* Bottom Pill: Outlined Gold Pill "MEMBERSHIP INQUIRY" */}
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[280px] sm:max-w-[320px] bg-[#091a04]/80 hover:bg-[#facc15] text-[#facc15] hover:text-[#081303] border-2 border-[#facc15] font-sans-clean font-black text-xs sm:text-sm tracking-widest uppercase py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <MessageCircle className="w-4 h-4" />
            <span>MEMBERSHIP INQUIRY</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
