import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
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
    <div className="min-h-screen bg-[#0d2106] text-white selection:bg-[#d8f801] selection:text-black font-sans antialiased overflow-x-hidden">
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

        {/* Section 3: Services (Tailored Programs For Every Goal + Interactive Carousel) */}
        <Programs onOpenBooking={handleOpenBooking} />

        {/* Section 4: Why Choose Us (Why We're The Right Fit For You + Central Athlete + 6 Features) */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* Section 5: Team (Meet Your Dedicated Coaches + 4 Coaches Grid) */}
        <Team />

        {/* Section 6: Testimonials (Hear From Happy Clients + Interactive Carousel) */}
        <Reviews />

        {/* Section 7: Pricing (Choose The Best Pricing For You + 3 Tiers) */}
        <Pricing onOpenBooking={handleOpenBooking} />

        {/* Section 8: Gallery (Explore Our Gym Atmosphere & Spaces + Lightbox) */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* Section 9: FAQ's (We Have Collected The Most Asked Questions + Accordion) */}
        <FAQ onOpenBooking={handleOpenBooking} />
      </main>

      {/* Section 9: CTA Banner + Footer Links */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Free Trial / Booking Modal */}
      <BookVisitModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

