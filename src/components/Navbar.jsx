import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: "Faq's", href: '#faqs' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0e1f07]/95 backdrop-blur-md py-3 md:py-4 border-b border-[#234212]/60 shadow-xl'
            : 'bg-transparent py-3.5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo: P Academy Gym */}
          <a href="#" className="flex items-center group py-1">
            <img
              src="/logo.png"
              alt="P Academy Gym"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans-clean text-[14px] font-medium text-zinc-200 hover:text-[#d2ff00] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d2ff00] group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Pill CTA "Start Free Trial >" */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#d2ff00] hover:bg-[#c3ec00] text-[#091204] font-sans-clean font-bold text-[13.5px] px-6 py-2.5 rounded-full flex items-center gap-1.5 shadow-[0_0_25px_rgba(210,255,0,0.35)] hover:shadow-[0_0_35px_rgba(210,255,0,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#1a350c] text-white hover:text-[#d2ff00] border border-[#2a4d16] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0e1f07]/98 backdrop-blur-2xl md:hidden pt-28 px-8 pb-10 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans-clean text-xl font-semibold text-zinc-100 hover:text-[#d2ff00] transition-colors border-b border-[#1c380e] pb-3"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#d2ff00] text-[#091204] font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(210,255,0,0.4)] text-base font-sans-clean"
              >
                <span>Start Free Trial</span>
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

