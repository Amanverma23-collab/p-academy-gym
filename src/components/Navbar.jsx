import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Membership', href: '#membership' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-4 shadow-sm'
            : 'bg-white/80 backdrop-blur-md py-6 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: Clean "OXYGEN GYM" without dot or Sikar badge */}
          <a href="#hero" className="flex items-center group">
            <span className="font-heading font-black text-2xl tracking-tighter uppercase text-black group-hover:text-emerald-600 transition-colors">
              Oxygen Gym
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-bold text-zinc-600 hover:text-black transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions: Call Icon Button + Book Visit CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Call Icon Button */}
            <a
              href={`tel:${GYM_INFO.phone}`}
              aria-label="Call Oxygen Gym"
              title={`Call ${GYM_INFO.phoneFormatted}`}
              className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 flex items-center justify-center shadow-sm"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Visit Button */}
            <button
              onClick={onOpenBooking}
              className="bg-black text-white hover:bg-emerald-500 hover:text-black transition-all duration-300 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
            >
              Book Visit
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-black focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-2xl font-bold text-zinc-900 hover:text-emerald-600 transition-colors border-b border-zinc-100 pb-3"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-3 text-zinc-600 text-sm font-medium">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Piprali Road, Near Allen Coaching, Sikar</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0"
                  aria-label="Call Oxygen Gym"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 bg-black text-white hover:bg-emerald-500 hover:text-black transition-colors font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  Book Gym Visit
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
