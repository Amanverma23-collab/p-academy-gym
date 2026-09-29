import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, CheckCircle2, Quote, ChevronDown, ChevronUp } from 'lucide-react';

export default function Reviews() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  // 100% Real Google Reviews extracted directly from Google Business Profile
  // https://share.google/jtFzTjcuAYyYf9cPV (P Academy Gym, Uttam Nagar)
  const testimonials = [
    {
      id: 1,
      name: 'Prateek Verma',
      role: 'Local Reviewer',
      avatar: '/avatars/prateek.webp',
      rating: 5,
      tag: 'Weight Loss',
      quote:
        'Devender Dhaiya (Trainer) has been excellent with his work and the gym having good machinery. They give us great workout training and full support.',
    },
    {
      id: 2,
      name: 'Vikrant Sharma',
      role: 'Local Reviewer',
      avatar: '/avatars/vikrant.webp',
      rating: 5,
      tag: 'Clean & Equipped',
      quote:
        'Great place to workout and train yourself.. The machines and equipment are well-maintained, the space is clean, and the environment keeps you motivated.',
    },
    {
      id: 3,
      name: 'Akash Kaushik',
      role: 'Verified Reviewer',
      avatar: '/avatars/akash.webp',
      rating: 5,
      tag: 'Mentorship',
      quote:
        'Awesome place to workout.... getting trained by Devender Dahiya... do not want to change as getting results here only... 😎🤟',
    },
    {
      id: 4,
      name: 'Aditya Chaudhary',
      role: 'Local Reviewer',
      avatar: '/avatars/aditya.webp',
      rating: 5,
      tag: 'Spacious & Value',
      quote:
        'New machines, cost effective, well-behaved owner and very spacious gym. Highly recommended for everyone in the area looking for real results.',
    },
    {
      id: 5,
      name: 'Kaajjal Pherwani',
      role: 'Verified Reviewer',
      avatar: '/avatars/kaajjal.webp',
      rating: 5,
      tag: 'Technique',
      quote:
        'More equivalent and new techniques to be taught... Enjoy your best experience of gyming... Especially for gym freak people! ❤👍',
    },
    {
      id: 6,
      name: 'Jennifer (Jenna)',
      role: 'Verified Reviewer',
      avatar: '/avatars/jennifer.webp',
      rating: 5,
      tag: 'Goal Achievement',
      quote:
        'This is the best place to workout.... people go with the goals and surely achieve them. Guys do join this! 🤩',
    },
  ];

  return (
    <section 
      id="testimonials" 
      className="relative bg-white text-zinc-900 py-8 sm:py-14 lg:py-16 overflow-hidden select-none border-t border-zinc-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header: Title, Subtitle, Google Rating Chip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-8 gap-3 sm:gap-4">
          <div className="max-w-xl text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-1 sm:mb-2">
              <span className="w-4 sm:w-5 h-[2px] bg-[#ca8a04]"></span>
              <span className="font-sans-clean text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#ca8a04]">
                Google Reviews
              </span>
            </div>

            <h2 className="font-headline font-extrabold text-xl sm:text-3xl lg:text-[36px] leading-tight text-[#081404] tracking-tight mb-1">
              Hear From Happy Members
            </h2>

            <p className="font-sans-clean text-zinc-500 text-[11px] sm:text-[13px] font-normal leading-snug">
              Authentic reviews directly from members training at P Academy Gym.
            </p>
          </div>

          {/* Compact Google Rating Pill Button */}
          <a
            href="https://share.google/jtFzTjcuAYyYf9cPV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-zinc-50 hover:bg-[#081303] text-zinc-900 hover:text-white border border-zinc-200/90 hover:border-[#081303] hover:shadow-md transition-all duration-200 w-fit flex-shrink-0 group cursor-pointer"
          >
            {/* Google 'G' icon */}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
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
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-sans-clean">
              <span className="font-black text-zinc-900 group-hover:text-white text-[11px] sm:text-xs transition-colors">4.7</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-zinc-500 group-hover:text-zinc-300 text-[10px] sm:text-[11px] font-medium transition-colors">(40+ Reviews)</span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-400 group-hover:text-[#facc15] transition-all duration-200" />
            </div>
          </a>
        </div>

        {/* 2-Column Grid on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {testimonials.map((t, idx) => {
            // In mobile view, hide items beyond index 3 unless showAllMobile is true
            const isHiddenOnMobile = !showAllMobile && idx >= 4;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className={`bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-zinc-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between relative group text-left ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                {/* Subtle watermark quote icon on desktop */}
                <Quote className="hidden sm:block absolute right-2.5 top-2.5 w-7 h-7 text-zinc-100 group-hover:text-amber-50 transition-colors pointer-events-none rotate-180" />

                <div>
                  {/* Top Row: Stars + Rating badge */}
                  <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2 relative z-10">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[9px] sm:text-[10px] font-sans-clean font-bold">
                      <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-600" />
                      <span>5.0 ★</span>
                    </div>
                  </div>

                  {/* Review Quote Text: line-clamped on mobile so all cards are uniform & compact */}
                  <p className="font-sans-clean italic text-zinc-700 text-[10.5px] sm:text-[12.5px] leading-snug sm:leading-relaxed font-normal mb-2 sm:mb-3 line-clamp-3 sm:line-clamp-4 relative z-10">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Reviewer Profile */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 pt-2 border-t border-zinc-100 relative z-10 mt-auto">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full p-0.5 border border-[#eab308] shadow-xs overflow-hidden bg-zinc-50 flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      width="32"
                      height="32"
                      className="w-full h-full rounded-full object-cover select-none"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-sans-clean font-bold text-[10.5px] sm:text-[12.5px] text-zinc-900 truncate leading-tight">
                      {t.name}
                    </h4>
                    <p className="font-sans-clean text-zinc-400 text-[8.5px] sm:text-[10px] font-medium truncate leading-tight mt-0.5">
                      <span className="text-amber-600 font-bold">{t.tag}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile-only toggle button to prevent making section too long */}
        <div className="mt-3.5 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[11px] font-sans-clean font-bold active:scale-95 transition-all"
          >
            <span>{showAllMobile ? 'Show Less' : 'View All 6 Reviews'}</span>
            {showAllMobile ? (
              <ChevronUp className="w-3 h-3 text-zinc-600" />
            ) : (
              <ChevronDown className="w-3 h-3 text-zinc-600" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
