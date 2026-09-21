import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Maximize2, Dumbbell, ShieldCheck, Clock, Star, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

const LOCAL_VIDEO_PATH = '/videos/about-gym-video.mp4';

export default function About({ playTrigger = 0 }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoRef = useRef(null);

  // Manage Lenis scroll when video modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
    return () => {
      window.__lenis?.start();
    };
  }, [isVideoModalOpen]);

  // Trigger video playback and scroll when requested (e.g. from Hero "Watch video" button)
  useEffect(() => {
    if (playTrigger && playTrigger > 0) {
      setIsPlayingInline(true);
      const banner = document.getElementById('about-video-banner');
      if (banner) {
        if (window.__lenis) {
          window.__lenis.scrollTo(banner, { offset: -80 });
        } else {
          banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
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
        if (window.__lenis) {
          window.__lenis.scrollTo(banner, { offset: -80 });
        } else {
          banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
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

  const realStats = [
    {
      number: '4.7 ★',
      label: 'Google Rating',
      description: 'Over 40+ authentic reviews praising coaching, machinery, and hygiene.',
    },
    {
      number: '500+',
      label: 'Member Transformations',
      description: 'Documented results in sustainable weight loss, muscle gain & athletic conditioning.',
    },
    {
      number: '100%',
      label: 'Floor Guidance',
      description: 'Hands-on posture checks and exercise form corrections on every workout set.',
    },
    {
      number: '2 Shifts',
      label: 'Daily Training Hours',
      description: 'Morning 6:00–11:00 AM & Evening 4:00–10:00 PM (Monday through Saturday).',
    },
  ];

  return (
    <section 
      id="about" 
      className="relative bg-white text-zinc-900 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden select-none border-t border-zinc-100 scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          
          {/* Left Column: Pill Badge, Clean Punchy Headline & Description */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left">
            {/* Pill Tag */}
            <div className="mb-3">
              <span className="font-sans-clean bg-[#facc15] text-[#081303] text-[11px] font-black px-3.5 py-1 rounded-full inline-block uppercase tracking-wider shadow-xs">
                About P Academy Gym
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[0.94] text-[#081404] uppercase tracking-tight mb-5">
              BUILT FOR REAL <br />
              <span className="text-[#ca8a04]">TRANSFORMATION</span>
            </h2>

            <p className="font-sans-clean text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Located in Uttam Nagar, Delhi, P Academy Gym is a results-focused training destination. We provide a motivating environment equipped with commercial plate-loaded machinery, heavy free weights, and hands-on coaching led by Head Coach Devender Dahiya.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-sans-clean font-semibold text-zinc-600">
              <MapPin className="w-4 h-4 text-[#ca8a04] flex-shrink-0" />
              <span>Om Vihar, Phase 1, Near Aryan Garden, Uttam Nagar, Delhi</span>
            </div>
          </div>

          {/* Right Column: 2 Clean Real Gym Feature Cards (Zero corporate fluff) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Card 1: Hands-On Coach Guidance */}
            <div className="bg-zinc-50 hover:bg-zinc-100/90 border border-zinc-200/90 p-5 sm:p-6 rounded-2xl transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#facc15] text-[#081303] flex items-center justify-center mb-4 shadow-xs">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-headline font-black text-base uppercase text-[#081404] tracking-wide mb-2">
                  Head Coach Mentorship
                </h3>
                <p className="font-sans-clean text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                  Direct floor supervision by Coach Devender Dahiya. Focus on correct lifting biomechanics, injury prevention, and progressive overload.
                </p>
              </div>
            </div>

            {/* Card 2: Heavy Iron & Biomechanical Machines */}
            <div className="bg-zinc-50 hover:bg-zinc-100/90 border border-zinc-200/90 p-5 sm:p-6 rounded-2xl transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#081404] text-[#facc15] flex items-center justify-center mb-4 shadow-xs">
                  <Dumbbell className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-headline font-black text-base uppercase text-[#081404] tracking-wide mb-2">
                  Commercial Machinery
                </h3>
                <p className="font-sans-clean text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                  High-grade Pro Bodyline plate-loaded stations, multi-pulley cable setups, Olympic racks, and complete dumbbell sets for all muscle groups.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Center Feature Video Banner */}
        <div id="about-video-banner" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-black group aspect-[16/9] sm:aspect-[16/8] max-h-[520px] border border-zinc-200">
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
                  alt="P Academy Gym Training Floor"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />

                {/* Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 pointer-events-none"></div>

                {/* Top Video Title Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                  <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white font-sans-clean text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Member Workout Footage • P Academy Gym
                  </span>
                </div>

                {/* Center "Play Video" Trigger Button */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <button
                    onClick={handleStartPlay}
                    className="bg-[#facc15] hover:bg-[#eab308] text-[#081303] px-6 sm:px-8 py-3.5 rounded-full flex items-center gap-3 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span className="font-sans-clean font-black text-xs sm:text-sm tracking-widest uppercase text-[#081303]">
                      Watch Gym Video
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#081303] flex items-center justify-center shadow-inner group-hover/btn:scale-110 transition-transform">
                      <Play className="w-3 h-3 fill-[#facc15] text-[#facc15] ml-0.5" />
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom 4 Real Gym Metric Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-14 mt-2">
          {realStats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-start text-left"
            >
              {/* Metric Number */}
              <span className="font-headline font-black text-4xl sm:text-5xl lg:text-[54px] text-[#081404] leading-none tracking-tight">
                {item.number}
              </span>

              {/* Metric Label */}
              <h4 className="font-sans-clean font-bold text-sm sm:text-base text-zinc-900 mt-2 mb-2">
                {item.label}
              </h4>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-zinc-200 mb-2.5"></div>

              {/* Subtext */}
              <p className="font-sans-clean text-xs sm:text-[13px] text-zinc-500 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
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
            data-lenis-prevent
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-base font-bold text-white uppercase tracking-wider">
                    P Academy Gym
                  </span>
                  <span className="text-[#facc15] text-xs uppercase tracking-wider font-bold">
                    • Member Training Floor
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
