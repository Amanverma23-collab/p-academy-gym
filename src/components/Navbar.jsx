import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import CardNav from './CardNav';
import StickerPeel from './StickerPeel';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = ['gallery', 'pricing', 'team', 'machines', 'about', 'hero'];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Machines', href: '#machines', id: 'machines' },
    { name: 'Coach', href: '#team', id: 'team' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
  ];

  const mobileNavItems = [
    { label: "About", href: "#about", bgColor: "#122509", textColor: "#ffffff" },
    { label: "Machines", href: "#machines", bgColor: "#162c0b", textColor: "#ffffff" },
    { label: "Coach", href: "#team", bgColor: "#1a340e", textColor: "#ffffff" },
    { label: "Testimonials", href: "#testimonials", bgColor: "#1f3d10", textColor: "#ffffff" },
    { label: "Pricing", href: "#pricing", bgColor: "#244613", textColor: "#ffffff" },
    { label: "Gallery", href: "#gallery", bgColor: "#295016", textColor: "#ffffff" },
    {
      label: "Start Free Trial",
      href: "#",
      onClick: onOpenBooking,
      bgColor: "#facc15",
      textColor: "#081303",
      isCta: true
    }
  ];

  return (
    <>
      {/* Desktop Navigation (>= md) - Liquid Glass Style */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
          scrolled ? 'py-3' : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Gym Logo with StickerPeel */}
          <a href="#hero" className="flex items-center group py-1 cursor-pointer">
            <StickerPeel
              imageSrc="/logo.webp"
              width={140}
              rotate={0}
              peelBackHoverPct={32}
              peelBackActivePct={42}
              shadowIntensity={0.5}
              lightingIntensity={0.12}
              initialPosition="center"
              peelDirection={0}
            />
          </a>

          {/* Center: Liquid Glass Capsule Island */}
          <nav className="flex items-center gap-1 p-1.5 rounded-full liquid-glass-capsule">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`font-sans-clean text-xs lg:text-[13px] px-4 lg:px-5 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'liquid-glass-active-tab text-white font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.06] font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Liquid Glass Pill CTA Button */}
          <div className="flex items-center">
            <button
              onClick={onOpenBooking}
              className="liquid-glass-btn font-sans-clean font-extrabold text-xs lg:text-[13px] px-6 py-2.5 rounded-full text-zinc-100 flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform duration-200" />
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
          buttonTextColor="#facc15"
          callText="Call"
          callNumber="+919582887741"
          onCtaClick={onOpenBooking}
        />
      </div>
    </>
  );
}

