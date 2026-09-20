import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Maximize2 } from 'lucide-react';

const LOCAL_VIDEO_PATH = '/videos/about-gym-video.mp4';

export default function About({ playTrigger = 0 }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoRef = useRef(null);

  // Trigger video playback and scroll when requested (e.g. from Hero "Watch video" button)
  useEffect(() => {
    if (playTrigger && playTrigger > 0) {
      setIsPlayingInline(true);
      const banner = document.getElementById('about-video-banner');
      if (banner) {
        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play();
            }
          });
        }
      }, 450);
    }
  }, [playTrigger]);

  // Also listen for custom event
  useEffect(() => {
    const handleCustomPlay = () => {
      setIsPlayingInline(true);
      const banner = document.getElementById('about-video-banner');
      if (banner) {
        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }, 450);
    };

    window.addEventListener('play-gym-video', handleCustomPlay);
    return () => window.removeEventListener('play-gym-video', handleCustomPlay);
  }, []);

  const handleStartPlay = () => {
    setIsPlayingInline(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  const handleStopPlay = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlayingInline(false);
  };

  const stats = [
    {
      number: '24/7',
      label: 'Open Access',
      description: 'Your gym is always open. Train on your schedule.',
    },
    {
      number: '15+',
      label: 'Years Of Excellence',
      description: 'Over a decade of helping people achieve their fitness goals.',
    },
    {
      number: '100%',
      label: 'Certified Coaches',
      description: 'Every trainer is professionally certified and expert-led.',
    },
    {
      number: '50+',
      label: 'Weekly Classes',
      description: 'From HIIT to Yoga, find your perfect group challenge.',
    },
  ];

  return (
    <section id="about" className="relative bg-white text-black py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header Row: Split Left Heading & Right Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-14 sm:mb-16">
          
          {/* Left Column: Pill Badge & Huge Condensed Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-start text-left"
          >
            {/* Pill Tag: About Us */}
            <div className="mb-4">
              <span className="font-sans-clean bg-[#facc15] text-[#081303] text-xs font-extrabold px-5 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-sm">
                About Us
              </span>
            </div>

            {/* Headline: THE POWER BEHIND YOUR VISION */}
            <h2 className="font-headline font-black text-6xl sm:text-7xl lg:text-[76px] xl:text-[84px] leading-[0.92] text-[#0e2205] uppercase tracking-tight">
              THE <span className="text-[#eab308]">POWER</span>
              <br />
              BEHIND YOUR
              <br />
              VISION
            </h2>
          </motion.div>

          {/* Right Column: Paragraph + Vision / Mission Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-start text-left pt-2"
          >
            {/* Mission Statement Paragraph */}
            <p className="font-sans-clean text-zinc-700 text-base sm:text-[17px] font-normal leading-relaxed mb-8 max-w-xl">
              P Academy Gym is dedicated to helping you achieve your fitness and wellness goals through expert coaching. Personalized workout plans, and nutrition guidance
            </p>

            {/* Vision and Mission 2-Card Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Card 1: OUR VISION (Solid Yellow Pill Card) */}
              <div className="bg-[#facc15] text-[#081303] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-sans-clean font-black text-sm tracking-wider uppercase text-[#081303]">
                    OUR VISION
                  </h3>
                  <p className="font-sans-clean text-xs sm:text-[13px] text-[#081303]/90 font-semibold leading-relaxed mt-3">
                    To inspire & empower individuals to lead healthier, stronger & more fulfilling lives through fitness and wellness
                  </p>
                </div>
              </div>

              {/* Card 2: OUR MISSION (Clean Minimal Card) */}
              <div className="bg-transparent p-6 rounded-2xl border-b sm:border-b-0 sm:border-l border-zinc-200 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans-clean font-black text-sm tracking-wider uppercase text-[#0e2205]">
                    OUR MISSION
                  </h3>
                  <p className="font-sans-clean text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed mt-3">
                    To empower individuals with effective fitness solutions that build strength, confidence, and lasting healthy habits
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Center Feature Video Banner */}
        <div id="about-video-banner" className="scroll-mt-24 sm:scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black group aspect-[16/9] sm:aspect-[16/8] max-h-[540px] border border-zinc-800"
          >
            {isPlayingInline ? (
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={LOCAL_VIDEO_PATH}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Top Action Overlay: Expand to Theater Modal & Close to Cover */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white md:backdrop-blur-md transition-all shadow-md cursor-pointer border border-white/15"
                    title="Open in Theater Modal"
                    aria-label="Theater Mode"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleStopPlay}
                    className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white md:backdrop-blur-md transition-all shadow-md cursor-pointer border border-white/15"
                    title="Close Video"
                    aria-label="Close Video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Background Poster Image */}
                <img
                  src="/images/about-deadlift.webp"
                  alt="P Academy Gym Heavy Deadlift Athletic Strength"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />

                {/* Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

                {/* Center "Play Video" Trigger Button */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <button
                    onClick={handleStartPlay}
                    className="bg-[#facc15]/95 hover:bg-[#facc15] md:backdrop-blur-md text-[#081303] px-6 sm:px-8 py-3.5 rounded-full flex items-center gap-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span className="font-sans-clean font-extrabold text-sm sm:text-base tracking-wide text-[#081303]">
                      Play Video
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-inner group-hover/btn:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15] ml-0.5" />
                    </div>
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom 4 Metric Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16 mt-4">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-start text-left"
            >
              {/* Massive Metric Number */}
              <span className="font-headline font-black text-5xl sm:text-6xl lg:text-[68px] text-[#0e2205] leading-none tracking-tight">
                {item.number}
              </span>

              {/* Title / Metric Name */}
              <h4 className="font-sans-clean font-bold text-base sm:text-lg text-zinc-900 mt-2.5 mb-3">
                {item.label}
              </h4>

              {/* Thin Divider Line */}
              <div className="w-full h-[1px] bg-zinc-200 mb-3"></div>

              {/* Descriptive Subtext */}
              <p className="font-sans-clean text-xs sm:text-[13.5px] text-zinc-500 font-normal leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 md:backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex items-center gap-2">
                  <span className="font-brand-serif text-lg font-bold text-white">
                    P Academy Gym
                  </span>
                  <span className="text-[#facc15] text-xs uppercase tracking-wider font-bold">
                    • Heavy Strength & Vision
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  src={LOCAL_VIDEO_PATH}
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              {/* Modal Footer Note */}
              <div className="p-4 sm:p-5 bg-zinc-950 flex items-center justify-between border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse"></span>
                  <p className="text-zinc-300 text-xs font-sans-clean font-medium">
                    P Academy Gym Member Training Video • HD Playback
                  </p>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
