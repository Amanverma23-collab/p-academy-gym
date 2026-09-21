import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';

export default function Reviews() {
  // 100% Real Google Reviews extracted directly from Google Business Profile
  // https://share.google/jtFzTjcuAYyYf9cPV (P Academy Gym, Uttam Nagar)
  const testimonials = [
    {
      id: 1,
      name: 'Prateek Verma',
      role: 'Local Reviewer',
      avatar: '/avatars/prateek.webp',
      rating: 5,
      tag: 'Weight Loss & Training',
      quote:
        'Devender Dhaiya (Trainer) has been excellent with his work and the gym having good machinery. They give us great workout training and full support to new people, especially for weight loss.',
    },
    {
      id: 2,
      name: 'Vikrant Sharma',
      role: 'Local Reviewer',
      avatar: '/avatars/vikrant.webp',
      rating: 5,
      tag: 'Equipment & Cleanliness',
      quote:
        'Great place to workout and train yourself.. The machines and equipment are well-maintained, the space is clean, and the environment keeps you motivated every single day.',
    },
    {
      id: 3,
      name: 'Akash Kaushik',
      role: 'Verified Reviewer',
      avatar: '/avatars/akash.webp',
      rating: 5,
      tag: 'Personal Mentorship',
      quote:
        'Awesome place to workout.... getting trained by Devender Dahiya... do not want to change as getting results here only... 😎🤟',
    },
    {
      id: 4,
      name: 'Aditya Chaudhary',
      role: 'Local Reviewer',
      avatar: '/avatars/aditya.webp',
      rating: 5,
      tag: 'Spacious & Cost Effective',
      quote:
        'New machines, cost effective, well-behaved owner and very spacious gym. Highly recommended for everyone in the area looking for real results.',
    },
    {
      id: 5,
      name: 'Kaajjal Pherwani',
      role: 'Verified Reviewer',
      avatar: '/avatars/kaajjal.webp',
      rating: 5,
      tag: 'Technique & Guidance',
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
      className="relative bg-white text-zinc-900 py-12 sm:py-16 overflow-hidden select-none border-t border-zinc-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header: Title, Subtitle, Google Rating Chip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center bg-[#facc15] text-[#081303] text-[10.5px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs mb-2">
              Google Reviews
            </div>

            <h2 className="font-headline font-black text-3xl sm:text-4xl lg:text-[42px] leading-[0.95] text-[#081404] uppercase tracking-tight mb-1.5">
              HEAR FROM <span className="text-[#ca8a04]">HAPPY CLIENTS</span>
            </h2>

            <p className="font-sans-clean text-zinc-600 text-xs sm:text-[13px] font-normal leading-snug">
              Authentic reviews directly from members training at P Academy Gym, Uttam Nagar.
            </p>
          </div>

          {/* Compact Google Rating Pill Button */}
          <a
            href="https://share.google/jtFzTjcuAYyYf9cPV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-50 hover:bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all w-fit flex-shrink-0 group cursor-pointer"
          >
            {/* Google 'G' icon */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
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
            <div className="flex items-center gap-1.5 text-xs font-sans-clean">
              <span className="font-black text-zinc-900 text-xs">4.7</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-zinc-500 text-[11px] font-medium">(40+ Reviews)</span>
              <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
            </div>
          </a>
        </div>

        {/* Compact 6-Card Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative group overflow-hidden text-left"
            >
              {/* Subtle small quote watermark */}
              <Quote className="absolute right-3 top-3 w-10 h-10 text-zinc-100 group-hover:text-amber-50 transition-colors pointer-events-none rotate-180" />

              <div>
                {/* Top Row: Stars + Verified Pill */}
                <div className="flex items-center justify-between gap-2 mb-2.5 relative z-10">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[10px] font-sans-clean font-bold">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    <span>5.0 ★</span>
                  </div>
                </div>

                {/* Review Quote Text: Compact & crisp */}
                <p className="font-sans-clean italic text-zinc-700 text-[12.5px] sm:text-[13px] leading-relaxed font-normal mb-3.5 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Member Profile Info */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-zinc-100 relative z-10">
                <div className="w-8 h-8 rounded-full p-0.5 border border-[#eab308] shadow-xs overflow-hidden bg-zinc-50 flex-shrink-0">
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
                  <h4 className="font-headline font-black text-[13px] sm:text-[13.5px] text-zinc-900 tracking-wide uppercase truncate leading-tight">
                    {t.name}
                  </h4>
                  <p className="font-sans-clean text-zinc-500 text-[10px] sm:text-[10.5px] font-medium truncate leading-tight mt-0.5">
                    {t.role} • <span className="text-amber-600 font-bold">{t.tag}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
