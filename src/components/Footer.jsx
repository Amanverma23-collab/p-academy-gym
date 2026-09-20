import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Mail, Phone, Star } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-[#081303]" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-[#081303] stroke-[2.2]" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-[#081303]" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-[#081303]" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="relative bg-[#0a1804] text-white pt-20 sm:pt-24 pb-12 overflow-hidden select-none border-t border-[#18360a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top CTA Banner: GET STARTED TODAY! FIRST SESSION FREE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 sm:pb-20 border-b border-white/10">
          
          {/* Left Headline */}
          <div className="lg:col-span-7 text-left">
            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.94] tracking-tight">
              GET STARTED <span className="text-[#d8f801]">TODAY!</span>
              <br />
              FIRST SESSION FREE
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="lg:col-span-5 flex flex-col lg:items-end text-left lg:text-right">
            <p className="font-sans-clean text-[#b4ceaf] text-xs sm:text-[13px] leading-relaxed max-w-sm mb-5">
              Booking Your Appointment Is Quick And Easy — Choose Your Preferred Time, And We'll Take Care Of The Rest.
            </p>
            <button
              onClick={onOpenBooking}
              className="bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] font-sans-clean font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(216,248,1,0.45)] hover:scale-105 active:scale-95 transition-all w-fit cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* Middle Footer Navigation Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 sm:py-20 text-left">
          
          {/* Column 1: Brand & Socials (5 cols) */}
          <div className="lg:col-span-5">
            {/* Brand Logo */}
            <a href="#" className="inline-block mb-4 group">
              <img
                src="/logo.png"
                alt="P Academy Gym"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-200"
              />
            </a>

            {/* Paragraph */}
            <p className="font-sans-clean text-zinc-400 text-xs sm:text-[12.5px] leading-relaxed max-w-sm mb-6">
              Through personalized coaching, cutting edge techniques and support we will help you achieve the fitness goals we have always wanted
            </p>

            {/* 4 Neon Lime Social Media Circles */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-[#d8f801] hover:bg-[#c6e600] text-[#081303] flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans-clean font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans-clean text-xs sm:text-[13px] text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-[#d8f801] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d8f801] transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d8f801] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#d8f801] transition-colors">
                  Coaches
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenBooking();
                  }}
                  className="hover:text-[#d8f801] transition-colors"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans-clean font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans-clean text-xs sm:text-[13px] text-zinc-400">
              <li>
                <a href="#" className="hover:text-[#d8f801] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8f801] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8f801] transition-colors">
                  Member Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8f801] transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans-clean font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3.5 font-sans-clean text-xs sm:text-[13px] text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d8f801] flex-shrink-0 mt-0.5" />
                <a
                  href="https://share.google/jtFzTjcuAYyYf9cPV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d8f801] transition-colors leading-relaxed"
                >
                  1st Floor, Om Vihar-II, Plot No. 135-136, Near Aryan Garden, Uttam Nagar, Delhi 110059
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d8f801] flex-shrink-0" />
                <a href="tel:+919582887741" className="hover:text-[#d8f801] transition-colors">
                  +91 95828 87741
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-4 h-4 text-[#d8f801] flex-shrink-0" />
                <a
                  href="https://share.google/jtFzTjcuAYyYf9cPV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d8f801] transition-colors font-medium"
                >
                  4.7 ★ on Google (40+ Reviews) ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-sans-clean text-zinc-500 text-xs">
            © 2025 P Academy Gym. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
