import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 100% Real Google Reviews extracted directly from Google Business Profile
  // https://share.google/jtFzTjcuAYyYf9cPV (P Academy Gym)
  const testimonials = [
    {
      id: 1,
      name: 'Prateek Verma',
      role: 'Google Local Reviewer',
      avatar: '/avatars/prateek.webp',
      rating: 5,
      date: 'Google Maps Review',
      quote:
        'Devender Dhaiya (Trainer) has been excellent with his work and the gym having good machinery. They give us great workout training and full support to new people, especially for weight loss. If anyone wants to lose weight, go & join..!',
    },
    {
      id: 2,
      name: 'Vikrant Sharma',
      role: 'Google Local Reviewer',
      avatar: '/avatars/vikrant.webp',
      rating: 5,
      date: 'Google Maps Review',
      quote:
        'Great place to workout and train yourself.. The machines and equipment are well-maintained, the space is clean, and the environment keeps you motivated every single day.',
    },
    {
      id: 3,
      name: 'Akash Kaushik',
      role: 'Google Verified Reviewer',
      avatar: '/avatars/akash.webp',
      rating: 5,
      date: 'Google Maps Review',
      quote:
        'Awesome place to workout.... getting trained by Devender Dahiya... do not want to change as getting results here only... 😎🤟',
    },
    {
      id: 4,
      name: 'Aditya Chaudhary',
      role: 'Google Local Reviewer',
      avatar: '/avatars/aditya.webp',
      rating: 5,
      date: 'Google Maps Review',
      quote:
        'New machines, cost effective, well-behaved owner and very spacious gym. Highly recommended for everyone in the area looking for real results.',
    },
    {
      id: 5,
      name: 'Kaajjal Pherwani',
      role: 'Google Verified Reviewer',
      avatar: '/avatars/kaajjal.webp',
      rating: 5,
      date: 'Google Maps Review',
      quote:
        'More equivalent and new techniques to be taught... Enjoy your best experience of gyming... Especially for gym freak people! ❤👍',
    },
    {
      id: 6,
      name: 'Jennifer (Jenna)',
      role: 'Google Verified Reviewer',
      avatar: '/avatars/jennifer.webp',
      rating: 5,
      date: 'Google Maps Review',
      quote:
        'This is the best place to workout.... people go with the goals and surely achieve them. Guys do join this! 🤩',
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative bg-white text-black py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Split Grid: Left Headline & Controls + Right Stacked Review Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Pill Badge, Headline, Subtitle, Google Rating Chip, Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Pill Tag: Reviews */}
            <div className="mb-4">
              <span className="font-sans-clean bg-[#d8f801] text-[#081303] text-xs font-extrabold px-5 py-1.5 rounded-full inline-block uppercase tracking-wider shadow-sm">
                Reviews
              </span>
            </div>

            {/* Headline: HEAR FROM HAPPY CLIENTS */}
            <h2 className="font-headline font-black text-5xl sm:text-6xl lg:text-[72px] leading-[0.93] text-[#0e2205] uppercase tracking-tight mb-4">
              HEAR FROM
              <br />
              <span className="text-[#d8f801]">HAPPY</span> CLIENTS
            </h2>

            {/* Subtitle Description */}
            <p className="font-sans-clean text-zinc-600 text-xs sm:text-[13.5px] font-normal leading-relaxed max-w-sm mb-5">
              Authentic reviews directly from our members at P Academy Gym. Verified on Google Maps with an outstanding 4.7★ community score.
            </p>

            {/* Official Google Reviews Badge (Clickable) */}
            <a
              href="https://share.google/jtFzTjcuAYyYf9cPV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100 transition-all shadow-sm w-fit mb-8 group cursor-pointer"
            >
              {/* Google 4-color 'G' icon */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <div className="flex items-center gap-2 text-xs font-sans-clean">
                <span className="font-extrabold text-zinc-900 text-sm">4.7</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-zinc-500 font-medium">(40+ Google Reviews)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-colors ml-0.5" />
              </div>
            </a>

            {/* Carousel Arrow Controls & Review Counter */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevReview}
                aria-label="Previous Review"
                className="w-11 h-11 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next Review"
                className="w-11 h-11 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              <span className="font-sans-clean text-xs font-bold text-zinc-400">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Stacked Testimonial Card */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* Background layered card for 3D stacked effect */}
            <div className="absolute inset-0 bg-zinc-100 rounded-3xl translate-y-3 sm:translate-y-4 scale-[0.96] opacity-70 border border-zinc-200 pointer-events-none" />

            {/* Foreground Active Review Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-zinc-100 flex flex-col items-center text-center z-10"
              >
                {/* Google Verified Review Top Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-sans-clean font-semibold mb-5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Verified Review</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-emerald-700 font-bold">5.0 ★</span>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-6 text-[#d8f801]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#d8f801] text-[#d8f801]"
                    />
                  ))}
                </div>

                {/* Review Quote Text */}
                <p className="font-sans-clean italic text-zinc-800 text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-medium">
                  "{current.quote}"
                </p>

                {/* Member Profile Avatar & Name */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full p-0.5 border-2 border-[#0e2205] shadow-md mb-2 overflow-hidden bg-zinc-100">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      loading="lazy"
                      decoding="async"
                      width="56"
                      height="56"
                      className="w-full h-full rounded-full object-cover select-none"
                    />
                  </div>
                  <h4 className="font-sans-clean font-extrabold text-base text-[#0e2205]">
                    {current.name}
                  </h4>
                  <span className="font-sans-clean text-zinc-500 text-xs font-medium">
                    {current.role}
                  </span>
                </div>

                {/* Pagination indicator dots */}
                <div className="flex items-center gap-1.5 mt-6">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === idx
                          ? 'w-6 bg-[#0e2205]'
                          : 'w-1.5 bg-zinc-200 hover:bg-zinc-300'
                      }`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
