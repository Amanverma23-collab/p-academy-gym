import React, { useState, useEffect, useMemo } from 'react';
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

export default function Gallery({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
      {/* Ambient background glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none -z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(216, 248, 1, 0.16) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8 gap-4">
          <div>
            <div className="mb-2">
              <span className="font-sans-clean bg-[#d8f801] text-[#081303] text-[11px] font-black px-3.5 py-1 rounded-full inline-block uppercase tracking-wider shadow-sm">
                Gallery
              </span>
            </div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
              INSIDE <span className="text-[#d8f801]">P ACADEMY GYM</span>
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
                  className={`font-sans-clean text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#d8f801] text-[#081303] shadow-md scale-105'
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
        <div className="block md:hidden relative w-full h-[470px] xs:h-[510px] my-3">
          <DepthCarousel
            key={selectedFilter}
            items={carouselItems}
            depth={200}
            spread={75}
            tilt={20}
            tiltDirection="right"
            perspective={1200}
            visibleCards={3}
            falloff={0.22}
            blur={4}
            autoplay={false}
            loop={true}
            cardWidth={260}
            cardHeight={350}
            radius={20}
            tint="#071403"
            duration={650}
            ease="power3.out"
            autoplayDelay={3200}
            showControls={true}
            showIndicators={true}
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
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a1804] border border-[#1f3f13] hover:border-[#d8f801]/80 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 ${item.span}`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />

                  {/* Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-[#d8f801] border border-white/20 flex items-center justify-center shadow">
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-sans-clean font-extrabold uppercase text-[#d8f801] tracking-wider block">
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
                    className="group relative rounded-2xl overflow-hidden bg-[#0a1804] border border-[#1f3f13] hover:border-[#d8f801]/80 aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-[#d8f801] border border-white/20 flex items-center justify-center shadow">
                          <Maximize2 className="w-3 h-3" />
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-sans-clean font-extrabold uppercase text-[#d8f801] tracking-wider block">
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
              className="bg-[#d8f801] hover:bg-[#c6e500] text-[#081303] font-sans-clean font-extrabold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
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

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && currentItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2.5 rounded-full bg-[#12260a] text-zinc-300 hover:text-white border border-[#244b16] transition-all cursor-pointer z-50 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 sm:left-6 p-3 rounded-full bg-[#12260a]/90 text-zinc-200 hover:text-[#d8f801] border border-[#244b16] transition-all cursor-pointer z-50 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 sm:right-6 p-3 rounded-full bg-[#12260a]/90 text-zinc-200 hover:text-[#d8f801] border border-[#244b16] transition-all cursor-pointer z-50 shadow-lg"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Lightbox Center */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col items-center justify-center"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[#214314] bg-black shadow-2xl max-h-[78vh] flex items-center justify-center">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-[76vh] w-auto max-w-full object-contain rounded-2xl"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-[#d8f801] font-sans-clean text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>

                <div className="text-center mt-3">
                  <span className="text-[10px] font-sans-clean font-extrabold uppercase text-[#d8f801] tracking-wider block">
                    {currentItem.category}
                  </span>
                  <h3 className="font-headline font-black text-white text-xl sm:text-2xl uppercase tracking-wide mt-0.5">
                    {currentItem.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
