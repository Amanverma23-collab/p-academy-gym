import React from 'react';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

// Official Brand Icons & Logos
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const GoogleMapsIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M12 2C8.13 2 5 5.13 5 9c0 3.17 1.85 6.06 3.65 8.24L12 22l3.35-4.76C17.15 15.06 19 12.17 19 9c0-3.87-3.13-7-7-7z"/>
    <path fill="#EA4335" d="M12 2c-3.87 0-7 3.13-7 7 0 2.5 1.3 5 3.1 7.2L12 9V2z"/>
    <path fill="#FBBC04" d="M12 2v7l3.9 7.2c1.8-2.2 3.1-4.7 3.1-7.2 0-3.87-3.13-7-7-7z"/>
    <path fill="#34A853" d="M8.65 17.24L12 22l3.35-4.76C14.2 15.8 13.1 14.8 12 14c-1.1.8-2.2 1.8-3.35 3.24z"/>
    <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
  </svg>
);

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="relative bg-[#0a1804] text-white pt-8 sm:pt-16 pb-8 sm:pb-12 overflow-hidden select-none border-t border-[#18360a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Mobile-Only Brand Header (Compact & Centered) */}
        <div className="lg:hidden flex flex-col items-center text-center pb-4 mb-4 border-b border-white/10">
          <a href="#hero" className="inline-block mb-1.5 group" aria-label="Back to top">
            <img
              src="/logo.webp"
              alt="P Academy Gym"
              loading="lazy"
              decoding="async"
              width="130"
              height="48"
              className="h-9 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="font-sans-clean text-zinc-400 text-[11px] leading-relaxed max-w-xs mb-2.5">
            Premier fitness &amp; bodybuilding gym in Uttam Nagar, Delhi.
          </p>
          
          {/* Mobile Real Brand Social Icons */}
          <div className="flex items-center justify-center gap-2.5">
            <a
              href={GYM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={GYM_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={GYM_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Google Maps"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <GoogleMapsIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Symmetrical Grid: 2 tables/columns per row on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-6 lg:gap-10 text-left">
          
          {/* Desktop Column 1: Brand & Socials (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5">
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
            <p className="font-sans-clean text-zinc-400 text-xs sm:text-[12.5px] leading-relaxed max-w-sm mb-6">
              Premier fitness and bodybuilding facility in Uttam Nagar, Delhi. Commercial plate-loaded machinery, certified trainers, and a disciplined training environment.
            </p>

            {/* Desktop Real Brand Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={GYM_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Google Maps"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <GoogleMapsIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Table 1: Navigation (Col 1 on mobile, Col 2 on desktop) */}
          <div className="col-span-1 lg:col-span-2 bg-white/[0.03] lg:bg-transparent rounded-xl p-2.5 sm:p-0 border border-white/8 lg:border-0 flex flex-col justify-between">
            <div>
              <h4 className="font-sans-clean font-bold text-[11px] sm:text-sm text-[#facc15] lg:text-white mb-2 sm:mb-4 uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 font-sans-clean text-[11px] sm:text-[13px] text-zinc-400">
                <li><a href="#hero" className="hover:text-[#facc15] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#facc15] transition-colors">About us</a></li>
                <li><a href="#machines" className="hover:text-[#facc15] transition-colors">Machines</a></li>
                <li><a href="#team" className="hover:text-[#facc15] transition-colors">Head Coach</a></li>
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
          </div>

          {/* Table 2: Quick Links (Col 2 on mobile, Col 3 on desktop) */}
          <div className="col-span-1 lg:col-span-2 bg-white/[0.03] lg:bg-transparent rounded-xl p-2.5 sm:p-0 border border-white/8 lg:border-0 flex flex-col justify-between">
            <div>
              <h4 className="font-sans-clean font-bold text-[11px] sm:text-sm text-[#facc15] lg:text-white mb-2 sm:mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 font-sans-clean text-[11px] sm:text-[13px] text-zinc-400">
                <li>
                  <button 
                    onClick={onOpenBooking} 
                    className="hover:text-[#facc15] inline-block transition-colors cursor-pointer text-left"
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
                    WhatsApp Help
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
                  <a href="#testimonials" className="hover:text-[#facc15] transition-colors">
                    Member Reviews
                  </a>
                </li>
                <li>
                  <a href="#membership" className="hover:text-[#facc15] transition-colors">
                    Pricing Plans
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Table 3: Timings & Rating (Mobile-Only Col 1 in Row 2) */}
          <div className="col-span-1 lg:hidden bg-white/[0.03] rounded-xl p-2.5 border border-white/8 flex flex-col justify-between">
            <div>
              <h4 className="font-sans-clean font-bold text-[11px] text-[#facc15] mb-2 uppercase tracking-wider">
                Gym Timings
              </h4>
              <div className="space-y-1.5 font-sans-clean text-[10.5px] text-zinc-400">
                <div className="flex items-start gap-1">
                  <Clock className="w-3 h-3 text-[#facc15] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-zinc-200 font-bold leading-tight">Mon – Sat</p>
                    <p className="text-zinc-400 text-[10px] leading-tight mt-0.5">6–11 AM &amp; 4–10 PM</p>
                    <p className="text-amber-400/90 text-[9px] mt-0.5 font-semibold">Sun Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-1.5 mt-2 border-t border-white/8 flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#facc15] text-[#facc15] shrink-0" />
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#facc15] font-bold text-[10px] hover:underline"
              >
                4.7★ (40+ Reviews)
              </a>
            </div>
          </div>

          {/* Table 4: Contact & Location (Mobile-Only Col 2 in Row 2) */}
          <div className="col-span-1 lg:hidden bg-white/[0.03] rounded-xl p-2.5 border border-white/8 flex flex-col justify-between">
            <div>
              <h4 className="font-sans-clean font-bold text-[11px] text-[#facc15] mb-2 uppercase tracking-wider">
                Contact &amp; Map
              </h4>
              <div className="space-y-1.5 font-sans-clean text-[10.5px] text-zinc-400">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#facc15] shrink-0" />
                  <a href="tel:+919582887741" className="hover:text-[#facc15] text-zinc-200 font-semibold text-[10.5px]">
                    +91 95828 87741
                  </a>
                </div>
                <div className="flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-[#facc15] shrink-0 mt-0.5" />
                  <p className="text-zinc-400 text-[10px] leading-tight">
                    Om Vihar-II, Uttam Nagar, Delhi
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-1.5 mt-2 border-t border-white/8">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#facc15] font-bold text-[10px] hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Desktop Column 4: Contact Info (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-3">
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
                  Mon–Sat: 6–11 AM &amp; 4–10 PM (Sun Closed)
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
        <div className="mt-5 sm:mt-12 pt-3.5 sm:pt-6 border-t border-white/10 text-center">
          <p className="font-sans-clean text-zinc-500 text-[10px] sm:text-xs">
            © 2025 P Academy Gym · Uttam Nagar, Delhi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
