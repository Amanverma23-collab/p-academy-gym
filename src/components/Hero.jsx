import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Star } from 'lucide-react';

const SplashCursor = React.lazy(() => import('./SplashCursor'));

export default function Hero({ onOpenBooking, onWatchVideo }) {
  const [enableSplash, setEnableSplash] = useState(false);

  useEffect(() => {
    const checkSupport = () => {
      // Enable on all desktop/laptop screens (min-width: 1024px)
      const isDesktop = window.innerWidth >= 1024 || window.matchMedia('(min-width: 1024px)').matches;
      setEnableSplash(isDesktop);
    };

    checkSupport();
    window.addEventListener('resize', checkSupport);
    return () => window.removeEventListener('resize', checkSupport);
  }, []);

  // Bottom ribbon ticker items
  const marqueeItems = [
    'Certified Trainers',
    '1200+ Member Transformed',
    '10+ Years Experience',
    'Certified Trainers',
    '1200+ Member Transformed',
    '10+ Years Experience',
    'Certified Trainers',
    '1200+ Member Transformed',
  ];

  return (
    <section className="relative w-full min-h-svh bg-[#112708] flex flex-col justify-between overflow-hidden select-none">
      {/* Interactive WebGL Fluid Splash Cursor Effect - Desktop Only */}
      {enableSplash && (
        <Suspense fallback={null}>
          <SplashCursor
            DENSITY_DISSIPATION={3.2}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.28}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING={true}
            RAINBOW_MODE={false}
            COLOR="#d8f801"
            DYE_RESOLUTION={1024}
            PRESSURE_ITERATIONS={14}
            zIndex={35}
          />
        </Suspense>
      )}
      
      {/* Dynamic Lime Backlight Glowing Halo behind athlete (Desktop only) */}
      <div 
        className="hidden md:block absolute right-0 md:right-[6%] lg:right-[10%] top-[52%] -translate-y-1/2 w-[460px] sm:w-[560px] md:w-[660px] lg:w-[740px] h-[460px] sm:h-[560px] md:h-[660px] lg:h-[740px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(216, 248, 1, 0.42) 0%, rgba(142, 210, 10, 0.22) 42%, rgba(17, 39, 8, 0) 72%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Subtle Ambient Radial Highlight Top-Left */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(216, 248, 1, 0.12) 0%, rgba(17, 39, 8, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main Hero Container */}
      {/* ========================================================================= */}
      {/* MOBILE VIEW (< md) - Redesigned Editorial Athlete Poster Layout           */}
      {/* "ACHIEVE YOUR FITNESS DREAMS" is placed in the background of the athlete  */}
      {/* ========================================================================= */}
      <div className="block md:hidden relative z-10 w-full flex-grow flex flex-col items-center pt-22 xs:pt-24 pb-0 px-3 xs:px-4">

        {/* Dynamically Centered Welcome Message: Automatically Centers Between Navbar & Athlete Head */}
        <div className="w-full flex-1 flex flex-col items-center justify-center z-20 select-none py-2 my-auto">
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center text-center w-full px-2"
          >
            {/* "Welcome to" in stylish neon script */}
            <span 
              className="font-script font-bold text-[#d8f801] tracking-wide block"
              style={{ 
                fontSize: '48px', 
                lineHeight: '0.9',
                textShadow: '0 4px 20px rgba(216,248,1,0.65), 0 2px 8px rgba(0,0,0,0.8)' 
              }}
            >
              Welcome to
            </span>

            {/* "P ACADEMY GYM" in athletic typography with glowing accent bars */}
            <div className="flex items-center justify-center gap-2 xs:gap-3 mt-1 w-full">
              <span className="w-5 xs:w-7 h-[2px] bg-[#d8f801] rounded-full flex-shrink-0 shadow-[0_0_8px_#d8f801]" />
              <span 
                className="font-headline uppercase text-white tracking-[0.1em] whitespace-nowrap block"
                style={{ 
                  fontSize: '28px', 
                  lineHeight: '1',
                  textShadow: '0 4px 18px rgba(0,0,0,0.95), 0 0 12px rgba(216,248,1,0.3)' 
                }}
              >
                P ACADEMY GYM
              </span>
              <span className="w-5 xs:w-7 h-[2px] bg-[#d8f801] rounded-full flex-shrink-0 shadow-[0_0_8px_#d8f801]" />
            </div>
          </motion.div>
        </div>

        {/* Center/Bottom: Athlete Standing Flush on the Yellow Marquee Ribbon */}
        <div className="relative w-full max-w-[480px] mx-auto flex items-end justify-center -mb-[1px] mt-auto">
          
          {/* Neon Lime Radial Backlight Glow behind athlete's torso/silhouette */}
          <div
            className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] xs:w-[420px] h-[360px] xs:h-[420px] rounded-full pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, rgba(216, 248, 1, 0.52) 0%, rgba(142, 210, 10, 0.28) 45%, rgba(17, 39, 8, 0) 75%)',
            }}
          />

          {/* BACKGROUND TYPOGRAPHY: Positioned directly behind athlete head, ears, and traps */}
          <div className="absolute inset-0 flex flex-col justify-start select-none pointer-events-none z-0 px-1">
            
            {/* Row 1: ACHIEVE (left) + YOUR (right) framing head and ears */}
            <div className="absolute top-[8%] left-0 right-0 flex items-center justify-between w-full">
              <span className="font-headline text-[48px] xs:text-[56px] uppercase tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] pl-1">
                ACHIEVE
              </span>
              <span className="font-headline text-[52px] xs:text-[60px] uppercase tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] pr-1 inline-flex items-center">
                <span>Y</span>
                <span className="relative inline-flex items-center justify-center">
                  <span>O</span>
                  {/* Glowing neon lime electric aura behind the bolt */}
                  <span
                    className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[75%] h-[45%] rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(250, 255, 200, 0.98) 0%, rgba(216, 248, 1, 0.75) 35%, rgba(132, 204, 22, 0.3) 60%, transparent 75%)',
                      filter: 'blur(3px)',
                    }}
                  />
                  {/* Sharp electric lightning bolt inside O */}
                  <svg
                    className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[58%] h-[38%] text-[#d8f801] fill-[#d8f801] pointer-events-none drop-shadow-[0_0_8px_rgba(216,248,1,0.95)]"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                <span>UR</span>
              </span>
            </div>

            {/* Row 2: FITNESS (left) + DREAMS (right) framing deltoids & upper traps */}
            <div className="absolute top-[20%] left-0 right-0 flex items-center justify-between w-full">
              <span className="font-headline text-[40px] xs:text-[48px] uppercase tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] pl-1">
                FITNESS
              </span>
              <span className="font-headline text-[40px] xs:text-[48px] uppercase tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] pr-1">
                DREAMS
              </span>
            </div>

          </div>

          {/* FRONT LAYER: Muscular Athlete Standing Flush on the Yellow Strip (-mb-[1px]) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative z-10 w-full flex items-end justify-center pointer-events-none -mb-[1px]"
          >
            <img
              src="/hero-athlete-mobile.webp"
              alt="P Academy Gym Professional Athlete"
              className="w-[450px] xs:w-[490px] max-w-none h-auto max-h-[82vh] object-contain object-bottom -mb-[1px] select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.92)]"
            />
          </motion.div>

          {/* FLANKING ACTION BUTTONS: Left (Join Now) and Right (Watch Video) Flanking Waist Above Ribbon */}
          <div className="absolute bottom-5 xs:bottom-7 left-0 right-0 z-30 px-1 xs:px-2 flex items-center justify-between pointer-events-auto">
            {/* Left: Join Now Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={onOpenBooking}
              className="bg-[#d8f801] hover:bg-[#c6e600] active:scale-95 text-[#081303] font-sans-clean font-bold text-xs xs:text-[13px] py-2.5 xs:py-3 px-3.5 xs:px-4.5 rounded-full flex items-center gap-1 shadow-[0_0_22px_rgba(216,248,1,0.5)] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Join Now</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </motion.button>

            {/* Right: Watch Video Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={onWatchVideo}
              className="flex items-center gap-1.5 xs:gap-2 py-2.5 xs:py-3 px-3 xs:px-3.5 rounded-full bg-black/60 hover:bg-black/80 active:scale-95 border border-white/25 md:backdrop-blur-md text-white font-sans-clean font-semibold text-xs xs:text-[12.5px] shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-200 cursor-pointer whitespace-nowrap"
              aria-label="Watch gym video"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow">
                <Play className="w-2.5 h-2.5 fill-[#081303] text-[#081303] ml-0.5" />
              </div>
              <span>Watch video</span>
            </motion.button>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW (>= md) - Classic 2-Column Split Hero Layout                  */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-grow items-center pt-24 sm:pt-28 md:pt-32 pb-0">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-end w-full">
          
          {/* Left Column: Headlines, Copy, CTAs, Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="col-span-7 flex flex-col justify-center text-left py-8 sm:py-12 z-20"
          >
            {/* Main Punchy Condensed Typography Headline */}
            <h1 className="font-headline font-normal text-5xl sm:text-6xl md:text-6xl lg:text-[76px] xl:text-[88px] uppercase leading-[0.92] tracking-tight text-white mb-6">
              <span className="block whitespace-nowrap">
                ACHIEVE{' '}
                <span className="inline-block relative whitespace-nowrap">
                  <span>Y</span>
                  <span className="relative inline-flex items-center justify-center">
                    <span className="text-white">O</span>
                    {/* Glowing neon lime electric aura behind the bolt */}
                    <span
                      className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[72%] h-[40%] rounded-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(250, 255, 200, 0.98) 0%, rgba(216, 248, 1, 0.65) 35%, rgba(132, 204, 22, 0.2) 60%, transparent 75%)',
                        filter: 'blur(3.5px)',
                      }}
                    />
                    {/* Sharp electric lightning bolt inside O */}
                    <svg
                      className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[56%] h-[35%] text-[#d8f801] fill-[#d8f801] pointer-events-none drop-shadow-[0_0_8px_rgba(216,248,1,0.95)]"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </span>
                  <span>UR</span>
                </span>
              </span>
              <span className="block whitespace-nowrap text-white">
                FITNESS DREAMS
              </span>
            </h1>

            {/* Subtitle / Descriptive Copy */}
            <p className="font-sans-clean text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal">
              Through personalized coaching, cutting edge techniques and support we will help you achieve the fitness goals you have always wanted
            </p>

            {/* Dual CTA Actions Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 relative z-40">
              {/* Join Now Pill Button */}
              <button
                onClick={onOpenBooking}
                className="bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] font-sans-clean font-bold text-sm sm:text-[14.5px] px-7 sm:px-8 py-3.5 rounded-full flex items-center gap-1.5 shadow-[0_0_25px_rgba(216,248,1,0.35)] hover:shadow-[0_0_35px_rgba(216,248,1,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Join Now</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Watch Video Circular Play Trigger: scrolls to and plays the video below */}
              <button
                onClick={onWatchVideo}
                className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
                aria-label="Watch gym video below"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#d8f801] transition-all duration-200">
                  <Play className="w-4 h-4 fill-[#081303] text-[#081303] ml-0.5" />
                </div>
                <span className="font-sans-clean font-semibold text-white text-sm sm:text-base group-hover:text-[#d8f801] transition-colors">
                  Watch video
                </span>
              </button>
            </div>

            {/* Social Proof Row */}
            <div className="flex items-center gap-4">
              {/* 3 Overlapping Avatars */}
              <div className="flex items-center">
                <img
                  src="/avatars/vikrant.webp"
                  alt="Vikrant Sharma - Google Reviewer"
                  loading="lazy"
                  decoding="async"
                  width="44"
                  height="44"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="/avatars/prateek.webp"
                  alt="Prateek Verma - Google Reviewer"
                  loading="lazy"
                  decoding="async"
                  width="44"
                  height="44"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover -ml-3 shadow-md"
                />
                <img
                  src="/avatars/aditya.webp"
                  alt="Aditya Chaudhary - Google Reviewer"
                  loading="lazy"
                  decoding="async"
                  width="44"
                  height="44"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover -ml-3 shadow-md"
                />
              </div>

              {/* Stars & Rating */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#d8f801]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#d8f801] text-[#d8f801]"
                      />
                    ))}
                  </div>
                  <span className="font-sans-clean font-bold text-white text-sm sm:text-base leading-none">
                    4.7
                  </span>
                </div>
                <span className="font-sans-clean text-[#b4ceaf] text-xs font-normal mt-1">
                  Based On 40+ Google Reviews
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Muscular Athlete Standing Flush on Top of Ribbon, Below Navbar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="col-span-5 flex items-end justify-center md:justify-center lg:justify-start self-end z-10 -mb-[1px]"
          >
            <div className="relative w-full flex items-end justify-center md:justify-center lg:justify-start pt-12 md:pt-14 lg:pt-16">
              <img
                src="/hero-athlete.webp"
                alt="P Academy Gym Professional Bodybuilder"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[640px] max-h-[calc(100vh-180px)] sm:max-h-[calc(100vh-160px)] md:max-h-[calc(100vh-140px)] lg:max-h-[calc(100vh-130px)] h-auto object-contain object-bottom -translate-x-3 sm:-translate-x-6 md:-translate-x-10 lg:-translate-x-14 xl:-translate-x-16 select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.75)]"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Full-Width Neon Lime Marquee Ticker */}
      <div className="relative w-full bg-[#d8f801] py-3 sm:py-3.5 overflow-hidden z-20 border-t border-[#c2de00]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Loop twice for continuous infinite ticker */}
          {[...marqueeItems, ...marqueeItems].map((text, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-sans-clean font-extrabold text-sm sm:text-base tracking-wide text-[#081303] uppercase mx-4">
                {text}
              </span>
              {/* 4-Pointed Sparkle Star Icon */}
              <svg
                className="w-4 h-4 text-[#081303] fill-[#081303] mx-3 flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
