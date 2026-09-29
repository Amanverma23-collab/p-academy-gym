import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 1. Lock scroll during preloading
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
    }

    // 2. Smooth progress increment from 0 to 100 with efficient interval
    const duration = 1500; // 1.5s fast, responsive load time
    const intervalTime = 50; // Smooth 50ms tick (20 updates/sec instead of 33)
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // 3. Mark finished once progress completes + tiny pause
    const finishTimeout = setTimeout(() => {
      setIsFinished(true);
    }, duration + 100);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
      // Restore scroll
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        if (window.__lenis) {
          window.__lenis.start();
        }
      }
    };
  }, []);

  // When exit animation completes, notify parent
  const handleExitComplete = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
    }
    if (onComplete) {
      onComplete();
    }
  };

  // Skip on click or keypress
  const handleSkip = () => {
    setIsFinished(true);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain reveal
            },
          }}
          style={{ willChange: 'transform' }}
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center select-none cursor-pointer overflow-hidden"
          aria-label="Loading P Academy Gym"
        >
          {/* Subtle warm luxury background vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 45%, rgba(250, 204, 21, 0.08) 0%, rgba(255, 255, 255, 0) 65%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center px-6">
            {/* Ambient gold glow behind big logo - Pure CSS hardware-accelerated, NO heavy blur filter */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0.3 }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-72 sm:w-96 md:w-[460px] h-72 sm:h-96 md:h-[460px] rounded-full pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.32) 0%, rgba(234, 179, 8, 0.14) 35%, rgba(250, 204, 21, 0.04) 55%, transparent 72%)',
                willChange: 'transform, opacity',
              }}
            />

            {/* BIG GYM LOGO WITH ANIMATION */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: 'transform, opacity' }}
              className="relative flex items-center justify-center"
            >
              {/* Gentle floating breathing animation */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ willChange: 'transform' }}
              >
                <img
                  src="/logo.webp"
                  alt="P Academy Gym Logo"
                  width="420"
                  height="160"
                  className="w-[260px] xs:w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px] max-w-[85vw] h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
                  priority="true"
                />
              </motion.div>
            </motion.div>

            {/* Subtitle / Athletic Gym Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{ willChange: 'transform, opacity' }}
              className="mt-6 sm:mt-8 flex items-center gap-3"
            >
              <span className="w-5 sm:w-8 h-[1.5px] bg-[#facc15] rounded-full" />
              <span className="font-sans-clean font-semibold tracking-[0.28em] text-[11px] sm:text-xs text-zinc-700 uppercase">
                Building Real Strength
              </span>
              <span className="w-5 sm:w-8 h-[1.5px] bg-[#facc15] rounded-full" />
            </motion.div>

            {/* Sleek Athletic Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 sm:mt-7 flex flex-col items-center gap-2.5 w-full max-w-[200px] sm:max-w-[260px]"
            >
              {/* Progress Track */}
              <div className="w-full h-[3px] sm:h-[3.5px] bg-zinc-200/80 rounded-full overflow-hidden relative shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-[#facc15] via-[#091404] to-[#facc15] rounded-full transition-all duration-150 ease-out"
                  style={{
                    width: `${Math.min(100, Math.round(progress))}%`,
                    willChange: 'width',
                  }}
                />
              </div>

              {/* Counter / Percentage */}
              <div className="flex items-center justify-between w-full text-[11px] sm:text-xs font-sans-clean font-bold text-zinc-500 tabular-nums">
                <span className="tracking-widest uppercase text-[10px] text-zinc-400">Loading</span>
                <span>{Math.min(100, Math.round(progress))}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Tap to Skip subtle cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-6 font-sans-clean text-[10.5px] tracking-wider uppercase text-zinc-400"
          >
            Tap anywhere to skip
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
