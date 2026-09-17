import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Membership from './components/Membership';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import SocialFeed from './components/SocialFeed';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import BookVisitModal from './components/BookVisitModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black font-sans antialiased">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <WhyChooseUs />
        <Membership onOpenBooking={handleOpenBooking} />
        <Facilities />
        <Gallery />
        <Reviews />
        <SocialFeed />
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Sticky CTA */}
      <MobileBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookVisitModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
