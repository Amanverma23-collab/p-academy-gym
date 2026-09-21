import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Phone, Star, Clock, MessageSquare, Compass } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

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

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-[#081303]" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="relative bg-[#0a1804] text-white pt-16 sm:pt-20 pb-12 overflow-hidden select-none border-t border-[#18360a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Middle Footer Navigation Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 sm:py-20 text-left">
          
          {/* Column 1: Brand & Socials (5 cols) */}
          <div className="lg:col-span-5">
            {/* Brand Logo */}
            <a href="#hero" className="inline-block mb-4 group" aria-label="Back to top">
              <img
                src="/logo.webp"
                alt="P Academy Gym"
                loading="lazy"
                decoding="async"
                width="160"
                height="64"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-200"
              />
            </a>

            {/* Paragraph */}
            <p className="font-sans-clean text-zinc-400 text-xs sm:text-[12.5px] leading-relaxed max-w-sm mb-6">
              Premier fitness and bodybuilding facility in Uttam Nagar, Delhi. Commercial plate-loaded machinery, certified trainers, and a disciplined training environment.
            </p>

            {/* Functional Social / Contact Circles */}
            <div className="flex items-center gap-3">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full bg-[#facc15] hover:bg-[#eab308] text-[#081303] flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <InstagramIcon />
              </a>
              <a
                href={GYM_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-[#facc15] hover:bg-[#eab308] text-[#081303] flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <FacebookIcon />
              </a>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#facc15] hover:bg-[#eab308] text-[#081303] flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Google Maps"
                className="w-9 h-9 rounded-full bg-[#facc15] hover:bg-[#eab308] text-[#081303] flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 stroke-[2.5]" />
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
                <a href="#hero" className="hover:text-[#facc15] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#facc15] transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#machines" className="hover:text-[#facc15] transition-colors">
                  Machines & Equipment
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#facc15] transition-colors">
                  Head Coach
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenBooking();
                  }}
                  className="hover:text-[#facc15] transition-colors"
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
                <button 
                  onClick={onOpenBooking} 
                  className="hover:text-[#facc15] transition-colors cursor-pointer text-left"
                >
                  Start Free Trial
                </button>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${GYM_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#facc15] transition-colors"
                >
                  WhatsApp Assistance
                </a>
              </li>
              <li>
                <a 
                  href={GYM_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#facc15] transition-colors"
                >
                  Get Directions
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-[#facc15] transition-colors">
                  Operating Hours
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
                <MapPin className="w-4 h-4 text-[#facc15] flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/e3T3Vqe8W6evK8jN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#facc15] transition-colors leading-relaxed"
                >
                  1st Floor, Om Vihar-II, Plot No. 135-136, Near Aryan Garden, Uttam Nagar, Delhi 110059 ↗
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                <span className="text-zinc-300">
                  Mon–Sat: 6–11 AM & 4–10 PM (Sun Closed)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                <a href="tel:+919582887741" className="hover:text-[#facc15] transition-colors">
                  +91 95828 87741
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/e3T3Vqe8W6evK8jN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#facc15] transition-colors font-medium text-[#facc15]"
                >
                  4.7 ★ on Google Maps (40+ Reviews) ↗
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
