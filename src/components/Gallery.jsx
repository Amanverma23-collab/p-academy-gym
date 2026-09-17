import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Strength', 'Equipment', 'Ambience'];

  const filteredItems = selectedFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-zinc-50 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
              Authentic Visual Showcase
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-none">
              Gym Gallery.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedFilter === cat
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white border border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-style Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 cursor-pointer h-72 shadow-sm hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/80 backdrop-blur-md text-emerald-600 border border-zinc-200">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest block">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-white text-base mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
              >
                <img
                  src={filteredItems[lightboxIndex]?.image}
                  alt={filteredItems[lightboxIndex]?.title}
                  className="max-h-[75vh] w-auto object-contain rounded-2xl border border-zinc-800 shadow-2xl"
                />
                <div className="text-center mt-4">
                  <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest block">
                    {filteredItems[lightboxIndex]?.category}
                  </span>
                  <h3 className="font-heading font-bold text-white text-xl mt-1">
                    {filteredItems[lightboxIndex]?.title}
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
