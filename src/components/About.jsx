import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Maximize2, MapPin, ArrowUpRight, ShieldCheck, Dumbbell, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

const LOCAL_VIDEO_PATH = '/videos/about-gym-video.mp4';

export default function About({ playTrigger = 0, onOpenBooking }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideoModalOpen) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
    return () => { window.__lenis?.start(); };
  }, [isVideoModalOpen]);

  useEffect(() => {
    if (playTrigger && playTrigger > 0) {
      setIsPlayingInline(true);
      const banner = document.getElementById('about-video-banner');
      if (banner) {
        if (window.__lenis) {
          window.__lenis.scrollTo(banner, { offset: -90 });
        } else {
          banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {
            if (videoRef.current) { videoRef.current.muted = true; videoRef.current.play(); }
          });
        }
      }, 450);
    }
  }, [playTrigger]);

  useEffect(() => {
    const handleCustomPlay = () => {
      setIsPlayingInline(true);
      const banner = document.getElementById('about-video-banner');
      if (banner) {
        if (window.__lenis) { window.__lenis.scrollTo(banner, { offset: -90 }); }
        else { banner.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }
      setTimeout(() => { if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => {}); } }, 450);
    };
    window.addEventListener('play-gym-video', handleCustomPlay);
    return () => window.removeEventListener('play-gym-video', handleCustomPlay);
  }, []);

  const handleStartPlay = () => {
    setIsPlayingInline(true);
    setTimeout(() => { if (videoRef.current) { videoRef.current.play().catch(() => {}); } }, 100);
  };

  const handleStopPlay = () => {
    if (videoRef.current) { videoRef.current.pause(); }
    setIsPlayingInline(false);
  };

  const pillars = [
    { icon: ShieldCheck, title: "Direct Head Coach Supervision", description: "Coach Devender personally monitors your form on every set." },
    { icon: Dumbbell,    title: "Heavy-Duty Commercial Machines", description: "Pro Bodyline plate-loaded stations, cables & Olympic free weights." },
    { icon: Clock,       title: "Flexible Morning & Evening Shifts", description: "6:00 AM–11:00 AM & 4:00 PM–10:00 PM, Mon–Sat." },
  ];

  const stats = [
    { value: "4.7 ★", label: "Google Rating",    detail: "40+ verified reviews" },
    { value: "500+",  label: "Transformations",  detail: "Weight loss & muscle gain" },
    { value: "100%",  label: "Floor Guidance",   detail: "Daily posture corrections" },
    { value: "10 hrs",label: "Daily Access",     detail: "Split into 2 flexible shifts" },
  ];

  /* ─── Shared video container ───────────────────────────────────────── */
  const VideoBlock = ({ aspectClass }) => (
    <div
      id="about-video-banner"
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl bg-black border border-zinc-200 scroll-mt-28 ${aspectClass}`}
    >
      {isPlayingInline ? (
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          <video ref={videoRef} src={LOCAL_VIDEO_PATH} controls autoPlay playsInline className="w-full h-full object-cover" />
          <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
            <button onClick={() => setIsVideoModalOpen(true)} className="p-2 rounded-full bg-black/75 hover:bg-[#facc15] hover:text-[#081303] text-white transition-all duration-200 cursor-pointer border border-white/20" aria-label="Theater Mode">
              <Maximize2 className="w-4 h-4" />
            </button>
            <button onClick={handleStopPlay} className="p-2 rounded-full bg-black/75 hover:bg-[#facc15] hover:text-[#081303] text-white transition-all duration-200 cursor-pointer border border-white/20" aria-label="Close Video">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <img src="/images/about-deadlift.webp" alt="P Academy Gym Training Floor" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 pointer-events-none" />
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-black/70 backdrop-blur-md border border-white/20 text-white font-sans-clean text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Floor Tour • P Academy Gym
            </span>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <button onClick={handleStartPlay} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#facc15] hover:bg-white text-[#081303] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer mb-2.5" aria-label="Play Gym Video">
              <Play className="w-5 h-5 fill-[#081303] text-[#081303] ml-0.5" />
            </button>
            <span className="font-sans-clean font-bold text-xs text-white drop-shadow-md tracking-wide">Watch Member Workout (30s)</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl">
            <span className="text-xs text-zinc-200 font-sans-clean font-medium"><span className="text-[#facc15] font-bold">★ 4.7</span> Google Rating</span>
            <span className="text-[11px] text-zinc-400 font-sans-clean">40+ Reviews</span>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section
      id="about"
      className="relative bg-white text-zinc-900 pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 overflow-hidden select-none border-t border-zinc-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* MOBILE LAYOUT (< lg) — compact, top-to-bottom              */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="block lg:hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#ca8a04]" />
            <span className="font-sans-clean text-[11px] font-black uppercase tracking-[0.22em] text-[#ca8a04]">About P Academy Gym</span>
          </div>

          {/* Headline — tight */}
          <h2 className="font-headline font-extrabold text-[26px] leading-[1.1] text-[#081404] tracking-tight mb-3">
            Real Coaching.<br />Real Transformation.
          </h2>

          {/* 1-line description */}
          <p className="font-sans-clean text-zinc-500 text-sm leading-relaxed mb-5">
            Uttam Nagar's dedicated strength gym — personal coach, commercial machines, and flexible shifts.
          </p>

          {/* 3 Compact Pillars — icon + label only */}
          <div className="flex flex-col gap-2.5 mb-6">
            {pillars.map(({ icon: Icon, title, description }, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#081404] text-[#facc15] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <p className="font-sans-clean font-bold text-sm text-[#081404] leading-tight">{title}</p>
                  <p className="font-sans-clean text-xs text-zinc-500 leading-snug mt-0.5">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Maps link */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <button onClick={onOpenBooking} className="btn-secondary gap-2 group text-sm">
              <span>Book Free Gym Visit</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
            <a href={GYM_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-sans-clean font-semibold text-zinc-600 hover:text-[#ca8a04] transition-colors duration-200 cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-[#ca8a04]" />
              <span>Om Vihar, Uttam Nagar</span>
            </a>
          </div>

          {/* 16:9 Video — full width */}
          <VideoBlock aspectClass="aspect-video" />
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* DESKTOP LAYOUT (>= lg) — 2-column, video right             */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-center">

          {/* Left: Text */}
          <div className="col-span-7 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#ca8a04]" />
              <span className="font-sans-clean text-xs font-black uppercase tracking-[0.22em] text-[#ca8a04]">About P Academy Gym</span>
            </div>

            <h2 className="font-headline font-extrabold text-3xl lg:text-[40px] leading-[1.12] text-[#081404] tracking-tight mb-4">
              Real Coaching. Real Iron.<br />Real Transformation.
            </h2>

            <p className="font-sans-clean text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Located in Uttam Nagar, P Academy Gym is built for people who want results without the clutter. Whether you are lifting a barbell for the first time or training for competitive strength, you get dedicated floor guidance and commercial-grade machines designed for steady, injury-free progress.
            </p>

            <div className="space-y-4 mb-8">
              {pillars.map(({ icon: Icon, title, description }, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-zinc-50 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-[#081404] text-[#facc15] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-sans-clean font-bold text-sm sm:text-[15px] text-[#081404] mb-1">{title}</h3>
                    <p className="font-sans-clean text-xs sm:text-sm text-zinc-500 leading-normal">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onOpenBooking} className="btn-secondary gap-2 group">
                <span>Book Free Gym Visit</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
              <a href={GYM_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-sans-clean font-semibold text-zinc-700 hover:text-[#ca8a04] px-3 py-2 transition-colors duration-200 cursor-pointer group">
                <MapPin className="w-4 h-4 text-[#ca8a04] flex-shrink-0" />
                <span>Om Vihar, Uttam Nagar (Open in Maps)</span>
              </a>
            </div>
          </div>

          {/* Right: Video — 4/5 aspect on desktop */}
          <div className="col-span-5 flex justify-center">
            <VideoBlock aspectClass="aspect-[4/5] max-h-[520px] group" />
          </div>
        </div>

        {/* Stats strip — desktop only */}
        <div className="hidden lg:grid mt-16 pt-10 border-t border-zinc-200 grid-cols-4 gap-8">
          {stats.map(({ value, label, detail }, idx) => (
            <div key={idx} className={`flex flex-col text-left ${idx !== stats.length - 1 ? 'border-r border-zinc-200 pr-6' : ''}`}>
              <span className="font-headline font-extrabold text-3xl lg:text-4xl text-[#081404] tracking-tight leading-none mb-1.5">{value}</span>
              <span className="font-sans-clean font-bold text-sm text-zinc-900 mb-0.5">{label}</span>
              <span className="font-sans-clean text-xs text-zinc-500">{detail}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 md:backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)} data-lenis-prevent
          >
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} data-lenis-prevent
              className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/90">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-sm font-bold text-white uppercase tracking-wider">P Academy Gym</span>
                  <span className="text-[#facc15] text-xs uppercase tracking-wider font-semibold">• Floor Workout Tour</span>
                </div>
                <button onClick={() => setIsVideoModalOpen(false)} className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-[#081303] hover:bg-[#facc15] flex items-center justify-center transition-all duration-200 cursor-pointer" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="relative aspect-video bg-black">
                <video className="w-full h-full object-cover" src={LOCAL_VIDEO_PATH} controls autoPlay playsInline />
              </div>
              <div className="p-4 bg-zinc-950 flex items-center justify-between border-t border-zinc-800">
                <p className="text-zinc-300 text-xs font-sans-clean font-medium">P Academy Gym • Real Member Training Session</p>
                <button onClick={() => setIsVideoModalOpen(false)} className="text-xs bg-zinc-800 hover:bg-[#facc15] hover:text-[#081303] text-white px-4 py-1.5 rounded-lg font-bold transition-all duration-200 cursor-pointer">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
