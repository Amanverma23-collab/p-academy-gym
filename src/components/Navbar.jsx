import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import CardNav from './CardNav';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const mobileNavItems = [
    { label: "About", href: "#about", bgColor: "#122509", textColor: "#ffffff" },
    { label: "Services", href: "#services", bgColor: "#162c0b", textColor: "#ffffff" },
    { label: "Team", href: "#team", bgColor: "#1a340e", textColor: "#ffffff" },
    { label: "Testimonials", href: "#testimonials", bgColor: "#1f3d10", textColor: "#ffffff" },
    { label: "Pricing", href: "#pricing", bgColor: "#244613", textColor: "#ffffff" },
    { label: "Gallery", href: "#gallery", bgColor: "#295016", textColor: "#ffffff" },
    { label: "Faq's", href: "#faqs", bgColor: "#2e5a19", textColor: "#ffffff" },
    {
      label: "Start Free Trial",
      href: "#",
      onClick: onOpenBooking,
      bgColor: "#d2ff00",
      textColor: "#081303",
      isCta: true
    }
  ];

  return (
    <>
      {/* Desktop Navigation (>= md) */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0e1f07]/95 py-3 md:py-4 border-b border-[#234212]/60 shadow-xl'
            : 'bg-transparent py-3.5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo: P Academy Gym */}
          <a href="#" className="flex items-center group py-1">
            <img
              src="/logo.webp"
              alt="P Academy Gym"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-7 lg:gap-9">
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
          <div className="flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#d2ff00] hover:bg-[#c3ec00] text-[#091204] font-sans-clean font-bold text-[13.5px] px-6 py-2.5 rounded-full flex items-center gap-1.5 shadow-[0_0_25px_rgba(210,255,0,0.35)] hover:shadow-[0_0_35px_rgba(210,255,0,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile-Only CardNav (< md) */}
      <div className="block md:hidden">
        <CardNav
          logo="/logo.webp"
          logoAlt="P Academy Gym"
          items={mobileNavItems}
          baseColor="#ffffff"
          menuColor="#081303"
          buttonBgColor="#081303"
          buttonTextColor="#d8f801"
          callText="Call"
          callNumber="+917014792446"
          onCtaClick={onOpenBooking}
        />
      </div>
    </>
  );
}

