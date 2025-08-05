import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import EnhancedReviews from './components/EnhancedReviews';
import BlogSection from './components/BlogSection';
import DirectoryLinks from './components/DirectoryLinks';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LeadMagnet from './components/LeadMagnet';
import StickyCallButton from './components/StickyCallButton';
import FloatingCTA from './components/FloatingCTA';
import MarketingIntegrations from './components/MarketingIntegrations';
import { ContactProvider } from './context/ContactContext';
import { useLeadMagnet } from './hooks/useLeadMagnet';

function AppContent() {
  const { showLeadMagnet, closeLeadMagnet } = useLeadMagnet();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <EnhancedReviews />
        <DirectoryLinks />
        <BlogSection />
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <EmailCapture />
          </div>
        </div>
      </main>
      <Footer />
      <ContactModal />
      <LeadMagnet isOpen={showLeadMagnet} onClose={closeLeadMagnet} />
      <StickyCallButton />
      <FloatingCTA />
    </div>
  );
}

function App() {
  return (
    <MarketingIntegrations>
      <ContactProvider>
        <AppContent />
      </ContactProvider>
    </MarketingIntegrations>
  );
}

export default App;