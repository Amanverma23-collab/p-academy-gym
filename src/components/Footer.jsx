import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200 pt-16 pb-24 lg:pb-12 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-200">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <span className="font-heading font-black text-3xl tracking-tighter uppercase text-black">
                Oxygen Gym
              </span>
            </a>
            <p className="text-zinc-600 text-sm max-w-sm leading-relaxed mb-6">
              Sikar's premier fitness destination for strength training, weight loss, cardio, steam, sauna, and elite physical coaching.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oxygen Gym Instagram"
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-pink-600 hover:border-pink-500 transition-colors shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oxygen Gym Facebook"
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-blue-600 hover:border-blue-500 transition-colors shadow-sm"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oxygen Gym Google Business"
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 hover:border-emerald-500 transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-black uppercase text-xs tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About Facility</a></li>
              <li><a href="#why-us" className="hover:text-black transition-colors">Why Choose Us</a></li>
              <li><a href="#membership" className="hover:text-black transition-colors">Membership Plans</a></li>
              <li><a href="#facilities" className="hover:text-black transition-colors">Steam & Sauna Suite</a></li>
              <li><a href="#gallery" className="hover:text-black transition-colors">Gym Gallery</a></li>
              <li><a href="#reviews" className="hover:text-black transition-colors">Member Reviews</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-black uppercase text-xs tracking-widest mb-4">
              Address & Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Shiv Nagar, Gorana Ki Dhani, Near Allen Coaching, Piprali Rd, Sikar</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href={`tel:${GYM_INFO.phone}`} className="hover:text-emerald-600 font-semibold">{GYM_INFO.phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{GYM_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-bold text-black uppercase text-xs tracking-widest mb-4">
              Official Channels
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href={GYM_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-600">
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={GYM_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-600">
                  Facebook Page <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={GYM_INFO.googleShareUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-600">
                  Google Business Listing <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-zinc-500 gap-4">
          <p>© {currentYear} Oxygen Gym. All Rights Reserved.</p>
          <p className="text-zinc-600 font-medium">Train Strong. Stay Consistent.</p>
        </div>

      </div>
    </footer>
  );
}
