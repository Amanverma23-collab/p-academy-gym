import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  ArrowRight 
} from 'lucide-react';
import { GALLERY_ITEMS, GYM_INFO } from '../data/gymData';
import DepthCarousel from './DepthCarousel';
import TargetCursor from './TargetCursor';

export default function Gallery({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Lock body scroll when lightbox modal is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

  const categories = ['All', 'Machines', 'Free Weights', 'Athletes', 'Facility'];

  const filteredItems = selectedFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const carouselItems = useMemo(() => {
    return filteredItems.map(item => ({
      image: item.image,
      alt: item.title,
      title: item.title,
      category: item.category,
      id: item.id
    }));
  }, [filteredItems]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section 
      id="gallery" 
      className="relative bg-[#0d2106] py-16 sm:py-20 lg:py-22 overflow-hidden select-none border-t border-[#1a380e] scroll-mt-24"
    >
      {/* Desktop Target Cursor Effect */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#B497CF"
        containerSelector="#gallery"
      />

      {/* Ambient background glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none -z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8 gap-4">
          <div>
            <div className="mb-2">
              <span className="font-sans-clean bg-[#facc15] text-[#081303] text-[11px] font-black px-3.5 py-1 rounded-full inline-block uppercase tracking-wider shadow-sm">
                Gallery
              </span>
            </div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
              INSIDE <span className="text-[#facc15]">P ACADEMY GYM</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`cursor-target font-sans-clean text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#facc15] text-[#081303] shadow-md scale-105'
                      : 'bg-[#102409] text-zinc-300 hover:text-white border border-[#214314]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE VIEW ONLY: 3D DepthCarousel */}
        <div className="block md:hidden relative w-full h-[470px] xs:h-[500px] my-2">
          <DepthCarousel
            key={selectedFilter}
            items={carouselItems}
            depth={190}
            spread={55}
            tilt={18}
            tiltDirection="right"
            perspective={1200}
            visibleCards={3}
            falloff={0.22}
            blur={4}
            autoplay={false}
            loop={true}
            cardWidth={300}
            cardHeight={420}
            radius={22}
            tint="#071403"
            duration={650}
            ease="power3.out"
            autoplayDelay={3200}
            showControls={false}
            showIndicators={false}
            onItemClick={(idx) => setLightboxIndex(idx)}
          />
        </div>

        {/* DESKTOP & TABLET VIEW ONLY: Dynamic Bento Mosaic */}
        <div className="hidden md:block">
          {selectedFilter === 'All' ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group cursor-target relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a1804] border border-[#1f3f13] hover:border-[#facc15]/80 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 ${item.span}`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />

                  {/* Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="w-7 h-7 rounded-full bg-white/20 md:backdrop-blur-md text-[#facc15] border border-white/20 flex items-center justify-center shadow">
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-sans-clean font-extrabold uppercase text-[#facc15] tracking-wider block">
                        {item.category}
                      </span>
                      <h3 className="font-headline font-black text-white text-base sm:text-lg uppercase tracking-wide leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setLightboxIndex(idx)}
                    className="group cursor-target relative rounded-2xl overflow-hidden bg-[#0a1804] border border-[#1f3f13] hover:border-[#facc15]/80 aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <span className="w-7 h-7 rounded-full bg-white/20 md:backdrop-blur-md text-[#facc15] border border-white/20 flex items-center justify-center shadow">
                          <Maximize2 className="w-3 h-3" />
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-sans-clean font-extrabold uppercase text-[#facc15] tracking-wider block">
                          {item.category}
                        </span>
                        <h3 className="font-headline font-black text-white text-base uppercase tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Bottom Simple Action Bar */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#0f2408] border border-[#1f4214]">
          <div className="text-center sm:text-left">
            <h4 className="font-headline font-black text-white text-lg sm:text-xl uppercase tracking-wide">
              Visit P Academy Gym In Person
            </h4>
            <span className="font-sans-clean text-xs text-zinc-300">
              Open 5:00 AM – 10:00 PM Daily • Near Aryan Garden, Uttam Nagar
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#facc15] hover:bg-[#eab308] text-[#081303] font-sans-clean font-extrabold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Book Free Visit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
            <a
              href={GYM_INFO.googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#081303] hover:bg-black text-white font-sans-clean font-bold text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#214314] transition-colors"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal (Portaled to document.body to avoid stacking context & navbar overlap) */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && currentItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
              >
                {/* Top Action Bar */}
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className="w-full max-w-5xl mx-auto flex items-center justify-between z-30 pt-1 pb-2"
                >
                  {/* Left: Counter Badge */}
                  <div className="flex items-center gap-2">
                    <span className="bg-[#12260a] border border-[#244b16] text-[#facc15] font-headline text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                      {String(lightboxIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                    </span>
                    <span className="text-zinc-400 font-sans-clean text-xs uppercase tracking-wider hidden sm:inline">
                      • {currentItem.category}
                    </span>
                  </div>

                  {/* Center: Image Title */}
                  <h3 className="font-headline font-black text-white text-sm sm:text-lg lg:text-xl uppercase tracking-wide truncate max-w-[200px] sm:max-w-md text-center px-2">
                    {currentItem.title}
                  </h3>

                  {/* Right: Close Button */}
                  <button
                    onClick={() => setLightboxIndex(null)}
                    aria-label="Close Lightbox"
                    className="w-10 h-10 rounded-full bg-[#12260a] hover:bg-[#facc15] text-zinc-300 hover:text-[#081303] border border-[#244b16] hover:border-[#facc15] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg group"
                  >
                    <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Center Image Area with Navigation Buttons */}
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto my-auto overflow-hidden py-1"
                >
                  {/* Left Prev Arrow */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-[#facc15] text-white hover:text-[#081303] border border-white/20 hover:border-[#facc15] flex items-center justify-center transition-all duration-200 cursor-pointer z-40 shadow-2xl backdrop-blur-sm group"
                  >
                    <ChevronLeft className="w-6 h-6 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
                  </button>

                  {/* Active Image Box */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentItem.id || currentItem.image}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="max-h-[72vh] sm:max-h-[76vh] max-w-full flex items-center justify-center rounded-2xl overflow-hidden border border-[#214314]/80 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.85)]"
                    >
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-full object-contain select-none"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Right Next Arrow */}
                  <button
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-[#facc15] text-white hover:text-[#081303] border border-white/20 hover:border-[#facc15] flex items-center justify-center transition-all duration-200 cursor-pointer z-40 shadow-2xl backdrop-blur-sm group"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Bottom Bar: Instructions */}
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-5xl mx-auto flex items-center justify-between text-[11px] sm:text-xs text-zinc-400 pt-2 z-30"
                >
                  <span className="hidden sm:inline">
                    Click outside or press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px] border border-zinc-700">ESC</kbd> to close
                  </span>
                  <span className="text-[#facc15] font-sans-clean font-semibold mx-auto sm:mx-0">
                    P Academy Gym • Uttam Nagar, Delhi
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
}
