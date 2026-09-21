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

    // 2. Smooth progress increment from 0 to 100
    const duration = 2000; // 2.0 seconds total load time
    const intervalTime = 30;
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
    }, duration + 200);

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
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain reveal
            },
          }}
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
            {/* Ambient gold glow behind big logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.4, 0.75, 0.4],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-72 sm:w-96 md:w-[440px] h-72 sm:h-96 md:h-[440px] rounded-full pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.28) 0%, rgba(234, 179, 8, 0.12) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* BIG GYM LOGO WITH ANIMATION */}
            <motion.div
              initial={{ scale: 0.82, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex items-center justify-center"
            >
              {/* Gentle floating breathing animation */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="/logo.webp"
                  alt="P Academy Gym Logo"
                  width="420"
                  height="160"
                  className="w-[260px] xs:w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px] max-w-[85vw] h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
                  priority="true"
                />
              </motion.div>
            </motion.div>

            {/* Subtitle / Athletic Gym Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
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
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 sm:mt-7 flex flex-col items-center gap-2.5 w-full max-w-[200px] sm:max-w-[260px]"
            >
              {/* Progress Track */}
              <div className="w-full h-[3px] sm:h-[3.5px] bg-zinc-200/80 rounded-full overflow-hidden relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#facc15] via-[#091404] to-[#facc15] rounded-full"
                  style={{ width: `${Math.min(100, Math.round(progress))}%` }}
                  transition={{ ease: 'linear' }}
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
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-6 font-sans-clean text-[10.5px] tracking-wider uppercase text-zinc-400"
          >
            Tap anywhere to skip
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
