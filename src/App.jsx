import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Machines from './components/Machines';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import ReadyCta from './components/ReadyCta';
import Footer from './components/Footer';
import BookVisitModal from './components/BookVisitModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [videoPlayTrigger, setVideoPlayTrigger] = useState(0);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleWatchVideo = () => {
    // 1. Smooth scroll to the video banner in About section
    const videoBanner = document.getElementById('about-video-banner');
    if (videoBanner) {
      videoBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // 2. Trigger video start
    setVideoPlayTrigger((prev) => prev + 1);
    window.dispatchEvent(new CustomEvent('play-gym-video'));
  };

  return (
    <div className="min-h-screen bg-[#0d2106] text-white selection:bg-[#facc15] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* 1. Header / Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Main Created Sections */}
      <main>
        {/* Section 1: Hero (Achieve Your Fitness Dreams) */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onWatchVideo={handleWatchVideo}
        />

        {/* Section 2: About (The Power Behind Your Vision + Video Banner + 4 Stats) */}
        <About playTrigger={videoPlayTrigger} />

        {/* Section 3: Gym Machines & Equipment Fleet (Interactive Slideshow) */}
        <Machines onOpenBooking={handleOpenBooking} />

        {/* Section 4: Why Choose Us (Why We're The Right Fit For You + Central Athlete + 6 Features) */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* Section 5: Head Coach Spotlight (Devender Dahiya) */}
        <Team onOpenBooking={handleOpenBooking} />

        {/* Section 6: Testimonials (Hear From Happy Clients + Interactive Carousel) */}
        <Reviews />

        {/* Section 7: Pricing (Choose The Best Pricing For You + 3 Tiers) */}
        <Pricing onOpenBooking={handleOpenBooking} />

        {/* Section 8: Gallery (Explore Our Gym Atmosphere & Spaces + Lightbox) */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* Section 9: Call To Action (We're Ready When You Are) */}
        <ReadyCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer / CTA Banner */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Free Trial / Booking Modal */}
      <BookVisitModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

