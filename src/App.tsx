import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { TourPackages } from './components/TourPackages';
import { BookingForm } from './components/BookingForm';
import { VisionMission } from './components/VisionMission';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Featured Destinations */}
        <FeaturedDestinations />

        {/* Tour Packages */}
        <TourPackages />

        {/* Vision & Mission */}
        <VisionMission />

        {/* Testimonials */}
        <Testimonials />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Book Now Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3"
          onClick={() => setShowBookingModal(true)}
        >
          Book Your Trip
        </Button>
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book Your Adventure</DialogTitle>
            <DialogDescription>
              Fill out the form below to book your perfect travel experience with J-Express Travel and Tours.
            </DialogDescription>
          </DialogHeader>
          <BookingForm 
            tourName="J-Express Custom Travel Package" 
            tourPrice={999}
            onClose={() => setShowBookingModal(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}