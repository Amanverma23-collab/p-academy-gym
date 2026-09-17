import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function MobileBar({ onOpenBooking }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hi Oxygen Gym Sikar! I am looking for membership details and would like to visit the gym.');
    window.open(`https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-xl border-t border-zinc-200 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${GYM_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 font-bold text-[10px] uppercase tracking-wider hover:bg-zinc-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-600 mb-1" />
          Call Now
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-wider shadow-md hover:bg-emerald-400 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-1" />
          WhatsApp
        </button>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-black text-white font-bold text-[10px] uppercase tracking-wider shadow-md hover:bg-zinc-800 transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1" />
          Visit Gym
        </button>
      </div>
    </div>
  );
}
