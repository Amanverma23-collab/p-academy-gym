import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Machines() {
  const machines = [
    { name: '45° Plate-Loaded Leg Press', image: '/images/machines/leg-press.jpg' },
    { name: 'Dual Cable Lat Pulldown Station', image: '/images/machines/lat-pulldown.jpg' },
    { name: 'Seated Chest Press Machine', image: '/images/machines/chest-press.jpg' },
    { name: 'Commercial Cable Crossover', image: '/images/machines/cable-crossover.jpg' },
    { name: 'Linear Bearing Smith Machine', image: '/images/machines/smith-machine.jpg' },
    { name: 'Pec Deck & Rear Delt Fly', image: '/images/machines/pec-fly.jpg' },
    { name: 'Chest-Supported T-Bar Row', image: '/images/machines/tbar-row.jpg' },
    { name: 'Seated Leg Extension Machine', image: '/images/machines/leg-extension.jpg' },
    { name: 'Commercial Touchscreen Treadmill', image: '/images/machines/commercial-treadmill.jpg' },
  ];

  return (
    <section 
      id="machines" 
      className="relative bg-[#0d2106] py-16 sm:py-20 lg:py-24 overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div 
        className="absolute right-[-100px] top-[20%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute left-[-100px] bottom-[15%] w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74, 130, 20, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full">
        
        {/* Simple Clean Section Header */}
        <div className="text-center mb-8 sm:mb-12 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#081303] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
            <Dumbbell className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Gym Equipment</span>
          </div>

          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            OUR <span className="text-[#facc15]">MACHINES</span>
          </h2>
        </div>

        {/* Continuous Infinite Marquee Chain of Machine Cards */}
        <div className="relative w-full overflow-hidden">
          {/* Left & Right subtle edge fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#0d2106] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#0d2106] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track: duplicated array for seamless non-stop loop */}
          <div className="animate-marquee-slow flex items-center gap-5 sm:gap-6 py-4">
            {[...machines, ...machines].map((machine, index) => (
              <div
                key={`${machine.name}-${index}`}
                className="group relative flex-shrink-0 w-[270px] sm:w-[330px] h-[260px] sm:h-[320px] rounded-3xl overflow-hidden bg-black border border-[#1a380c] hover:border-[#facc15] shadow-2xl transition-all duration-300"
              >
                {/* Machine Photo */}
                <img
                  src={machine.image}
                  alt={machine.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                />

                {/* Gradient overlay for clear text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Number Badge at Top Right */}
                <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[11px] font-bold text-[#facc15] shadow-md">
                  #{String((index % machines.length) + 1).padStart(2, '0')}
                </div>

                {/* Machine Name Bar at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center">
                  <h3 className="font-headline font-black text-lg sm:text-xl text-white uppercase tracking-wide group-hover:text-[#facc15] transition-colors leading-tight">
                    {machine.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
