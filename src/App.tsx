import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PromoBanner } from './components/PromoBanner';
import { AboutSection } from './components/AboutSection';
import { SpaceGallery } from './components/SpaceGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenContactModal = (serviceTitle?: string) => {
    setSelectedServiceForModal(serviceTitle);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-teal-700 selection:text-white flex flex-col">
      {/* Header & Sticky Navigation */}
      <Header onOpenContactModal={handleOpenContactModal} />

      {/* Main Content - Streamlined into 5 core sections */}
      <main className="flex-grow">
        <Hero onOpenContactModal={handleOpenContactModal} />
        <ServicesSection onOpenContactModal={handleOpenContactModal} />
        <PromoBanner onOpenContactModal={handleOpenContactModal} />
        <AboutSection />
        <SpaceGallery onOpenContactModal={handleOpenContactModal} />
        <TestimonialsSection />
        <LocationSection onOpenContactModal={handleOpenContactModal} />
      </main>

      {/* Footer */}
      <Footer onOpenContactModal={handleOpenContactModal} />

      {/* WhatsApp Quick Action Floating Button */}
      <WhatsAppFloatingButton onOpenContactModal={handleOpenContactModal} />

      {/* Contact / Appointment Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
