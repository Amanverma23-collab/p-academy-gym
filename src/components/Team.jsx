import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import Lanyard from './Lanyard';

// Inline SVG brand icons with authentic official logos and colors
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socialLinks = [
  { 
    label: 'Instagram', 
    href: GYM_INFO.instagramUrl, 
    Icon: InstagramIcon, 
    bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm' 
  },
  { 
    label: 'YouTube',   
    href: 'https://youtube.com', 
    Icon: YoutubeIcon,   
    bgClass: 'bg-[#FF0000] text-white shadow-sm' 
  },
  { 
    label: 'Facebook',  
    href: GYM_INFO.facebookUrl, 
    Icon: FacebookIcon,  
    bgClass: 'bg-[#1877F2] text-white shadow-sm' 
  },
];

const expertiseLeft = [
  { 
    number: '01',
    title: 'Muscle Building & Strength',
    desc: 'Learn proper lifting form and follow a workout routine that builds strength safely.' 
  },
  { 
    number: '02',
    title: 'Simple Indian Diet Plans',
    desc: 'Easy-to-follow meal plans using regular home-cooked food (veg & non-veg).' 
  },
];

const expertiseRight = [
  { 
    number: '03',
    title: 'Fat Loss & Body Toning',
    desc: 'Burn fat and build stamina with the right mix of weights and cardio.' 
  },
  { 
    number: '04',
    title: 'Personal Support & Tracking',
    desc: 'Daily posture checks on the floor and direct guidance whenever you need help.' 
  },
];

const stats = [
  { value: '8+',     label: 'Years Coaching' },
  { value: '500+',   label: 'Transformations' },
  { value: '4.9★',   label: 'Member Rating' },
  { value: '1-on-1', label: 'Personal Training' },
];

const credentials = [
  'Certified Personal Trainer (8+ Years Experience)',
  'Custom Diet Planning (Veg & Non-Veg)',
  'Safe Lifting & Injury-Free Training',
  '500+ Transformations in Delhi NCR',
];

export default function Team({ onOpenBooking, isAppLoaded = true }) {
  const sectionRef = useRef(null);
  const [isNearView, setIsNearView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : false));

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAppLoaded) return;
    if (!sectionRef.current) return;

    // Preload 3D Lanyard when user scrolls within 500px of Team section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '500px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isAppLoaded]);

  const shouldRender3D = isAppLoaded && isNearView;

  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Coach Devender, I want to consult regarding personal training and custom diet plans at P Academy Gym.'
  )}`;

  return (
    <section ref={sectionRef} id="team" className="relative bg-[#071303] pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 overflow-visible">
      
      {/* Ambient Gym Lighting Spotlight in Center (clipped inside so no page horizontal scrollbar) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 35%, rgba(250,204,21,0.11) 0%, rgba(13,33,6,0.35) 45%, transparent 80%)',
          }}
        />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-20 blur-3xl rounded-full bg-[#facc15]/30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── DESKTOP VIEW (lg+): Balanced 3-Column Centerpiece Layout ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT COLUMN (4 Cols): Coach Profile, Philosophy & Core Pillars ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6 pt-6 relative z-10 pointer-events-auto"
          >
            {/* Editorial Header */}
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#facc15]/85 uppercase font-semibold block mb-2">
                Head Coach &amp; Biomechanics Director
              </span>
              <h2 className="font-headline font-black text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.06]">
                Devender Dahiya
              </h2>
              <p className="text-xs sm:text-[13px] text-zinc-400 font-medium tracking-wide mt-1.5">
                Master Personal Trainer &bull; 8+ Years On The Floor
              </p>
            </div>

            {/* Philosophy Statement: Clean Editorial Border-Left */}
            <div className="border-l border-white/20 pl-4 py-1">
              <p className="text-[13.5px] text-zinc-300 leading-relaxed font-normal">
                &ldquo;At P Academy, transformations are never outsourced to junior trainers or automated algorithms. Every lift, meal adjustment, and biomechanical form check is personally evaluated on the floor.&rdquo;
              </p>
            </div>

            {/* 2 Specialization Columns: Typographic, Numbered, Clean */}
            <div className="flex flex-col gap-4 pt-1">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                Core Specializations
              </span>
              <div className="flex flex-col gap-4">
                {expertiseLeft.map(({ number, title, desc }) => (
                  <div key={number} className="group">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-mono text-[#facc15]/85 font-bold">{number}</span>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-6 mt-1">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct 1-on-1 guarantee strip */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">1-on-1 Dedicated Floor Mentorship</span>
              <span className="text-zinc-500 font-mono text-[11px]">Sector 12, Dwarka</span>
            </div>
          </motion.div>

          {/* ── CENTER COLUMN (4 Cols): Hanging 3D Lanyard Card (NO BOX) ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-center justify-start -mt-6 sm:-mt-8 lg:-mt-10 relative z-20 overflow-visible"
          >
            {/* 3D Hanging Lanyard Canvas Container - Expands across side boxes */}
            <div className="w-full h-[580px] relative flex flex-col justify-end items-center overflow-visible">
              
              {/* Sleek top anchor mount where lanyard connects to the Coach section ceiling */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                <div className="w-16 h-2 bg-gradient-to-r from-zinc-800 via-[#facc15]/90 to-zinc-800 rounded-b-md shadow-md border-b border-[#facc15]/40" />
                <div className="w-6 h-0.5 bg-[#081303] rounded-full mt-[-1px] opacity-75" />
              </div>

              {/* The 3D Canvas: Anchored flush to section top (top-0) & spans 310% width for side swinging */}
              <div
                className="absolute top-0 -bottom-16 overflow-visible pointer-events-auto z-20 flex items-center justify-center"
                style={{ width: '310%', left: '-105%' }}
              >
                {shouldRender3D && isDesktop ? (
                  <Lanyard
                    position={[0, 0.25, 14.5]}
                    gravity={[0, -38, 0]}
                    fov={20}
                    frontImage="/coach-card.png"
                    backImage="/coach-card.png"
                    lanyardImage="/p-academy-lanyard.png?v=3"
                    lanyardWidth={1.2}
                    imageFit="cover"
                    transparent={true}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full pt-10">
                    <img
                      src="/coach-card.png"
                      alt="Coach Devender Dahiya Badge"
                      className="w-[190px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                )}
              </div>

              {/* Social links below the card */}
              <div className="relative z-30 text-center pb-2 pointer-events-auto">
                <div className="flex items-center justify-center gap-2.5 mt-2">
                  {socialLinks.map(({ label, href, Icon, bgClass }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Coach Devender on ${label}`}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${bgClass} shadow-md hover:scale-115 active:scale-95 transition-all`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN (4 Cols): Specializations, Credentials, Stats & CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-5 pt-6 relative z-10 pointer-events-auto"
          >
            {/* 2 Specialization Columns: Typographic, Numbered, Clean */}
            <div className="flex flex-col gap-4">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                Methodology &amp; Standards
              </span>
              <div className="flex flex-col gap-4">
                {expertiseRight.map(({ number, title, desc }) => (
                  <div key={number} className="group">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-mono text-[#facc15]/85 font-bold">{number}</span>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-6 mt-1">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials: Clean Typographic Bullets */}
            <div className="pt-1">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold block mb-2.5">
                Verified Credentials
              </span>
              <div className="flex flex-col gap-2">
                {credentials.map((item, idx) => (
                  <div key={idx} className="flex items-baseline gap-2.5 text-xs text-zinc-300">
                    <span className="text-[#facc15] font-bold select-none">&bull;</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Metric Strip */}
            <div className="grid grid-cols-4 gap-2 py-3 border-y border-white/10">
              {stats.map(({ value, label }, idx) => (
                <div key={idx}>
                  <div className="font-headline font-black text-xl lg:text-2xl text-white tracking-tight leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Member Review: Refined Editorial Quote */}
            <div className="border-l border-white/20 pl-3.5 py-0.5">
              <p className="text-xs text-zinc-300 leading-relaxed italic">
                &ldquo;Awesome place to workout... getting trained by Devender Dahiya... getting results here only.&rdquo;
              </p>
              <div className="text-[11px] text-zinc-400 not-italic mt-1 font-mono">
                5.0 &bull; Google Verified Member Review
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1 relative z-30 pointer-events-auto">
              <button
                onClick={onOpenBooking}
                className="btn-base btn-primary !py-2.5 !px-4 !text-xs flex-1 flex items-center justify-center gap-2 group shadow-xl hover:shadow-[#facc15]/20 font-semibold"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline !py-2.5 !px-4 !text-xs flex items-center justify-center gap-2 font-semibold"
              >
                <span>WhatsApp Consult</span>
              </a>
            </div>

          </motion.div>
        </div>

        {/* ── MOBILE VIEW (<lg): Centered Hanging Card from Section Top + Clean Dossier ── */}
        <div className="block lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Mobile Editorial Header */}
            <div className="text-center pt-2">
              <span className="text-[10.5px] font-mono tracking-[0.25em] text-[#facc15]/85 uppercase font-semibold block mb-1.5">
                Head Coach &amp; Biomechanics Director
              </span>
              <h2 className="font-headline font-black text-3xl text-white tracking-tight leading-tight">
                Devender Dahiya
              </h2>
              <p className="text-xs text-zinc-400 font-medium tracking-wide mt-1">
                Master Personal Trainer &bull; 8+ Years On The Floor
              </p>
            </div>

            {/* Mobile Coach Real Photo Card (No hanging card on mobile) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#142e09] to-[#071303] border border-[#facc15]/30 shadow-2xl">
              {/* Coach Photo Container */}
              <div className="relative aspect-[4/5] max-h-[460px] w-full overflow-hidden bg-zinc-950">
                <img
                  src="/trainers/trainer-rayhan.webp"
                  alt="Coach Devender Dahiya - Head Trainer P Academy Gym"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071303] via-[#071303]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#facc15]/40 text-[#facc15] text-[10.5px] font-bold tracking-wide shadow-md">
                    ★ Head Coach
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#facc15] text-[#081303] text-[10.5px] font-black tracking-wide shadow-md">
                    500+ Transformed
                  </span>
                </div>

                {/* Bottom Overlay with Coach Name & Title & Socials */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-[#071303]/85 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-headline font-black text-lg text-white tracking-tight">
                          Devender Dahiya
                        </h3>
                        <p className="text-[11px] text-[#facc15] font-semibold">
                          Head Coach &bull; Master Trainer (8+ Yrs)
                        </p>
                      </div>

                      {/* Social icons on mobile */}
                      <div className="flex items-center gap-1.5">
                        {socialLinks.map(({ label, href, Icon, bgClass }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Follow Coach Devender on ${label}`}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center ${bgClass} hover:scale-110 active:scale-95 transition-all shadow-sm`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio statement */}
            <div className="border-l border-white/20 pl-3.5 py-1">
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                &ldquo;At P Academy, transformations are never outsourced to junior trainers or automated algorithms. Every lift, meal adjustment, and biomechanical form check is personally evaluated on the floor.&rdquo;
              </p>
            </div>

            {/* 4 Pillars Grid on Mobile: Numbered, No Toy Icons */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                Core Specializations &amp; Protocols
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[...expertiseLeft, ...expertiseRight].map(({ number, title, desc }) => (
                  <div key={number} className="pt-2 border-t border-white/10">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[11px] font-mono text-[#facc15]/85 font-bold">{number}</span>
                      <h4 className="text-xs font-semibold text-white tracking-tight">
                        {title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed pl-5">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="pt-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold block mb-2">
                Verified Credentials
              </span>
              <div className="flex flex-col gap-1.5">
                {credentials.map((item, idx) => (
                  <div key={idx} className="flex items-baseline gap-2 text-[11px] text-zinc-300">
                    <span className="text-[#facc15] font-bold select-none">&bull;</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats 4-Grid */}
            <div className="grid grid-cols-4 gap-2 py-3 border-y border-white/10 text-center">
              {stats.map(({ value, label }, idx) => (
                <div key={idx}>
                  <div className="font-headline font-black text-base text-white leading-none mb-0.5">
                    {value}
                  </div>
                  <div className="text-[9px] uppercase font-mono text-zinc-400 tracking-wider leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Review quote */}
            <div className="border-l border-white/20 pl-3 py-0.5">
              <p className="text-[11px] text-zinc-300 italic leading-snug">
                &ldquo;Awesome place to workout... getting trained by Devender Dahiya... getting results here only.&rdquo;
              </p>
              <div className="text-[10px] text-zinc-400 not-italic mt-0.5 font-mono">
                5.0 &bull; Google Verified Member Review
              </div>
            </div>

            {/* Mobile Dual Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={onOpenBooking}
                className="btn-base btn-primary !py-2.5 !px-2 !text-xs flex items-center justify-center gap-1 shadow-lg font-semibold"
              >
                <span>Book Consult</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline !py-2.5 !px-2 !text-xs flex items-center justify-center gap-1 font-semibold"
              >
                <span>WhatsApp</span>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
