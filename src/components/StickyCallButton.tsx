import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

const StickyCallButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show sticky button after user scrolls down 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleCall = () => {
    // Track call button click
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('sticky_call_button_click', {
        source: 'sticky_button'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center">
      {/* Call Button */}
      <a
        href="tel:+1-410-746-7225"
        onClick={handleCall}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center font-semibold transition-all duration-200 hover:scale-105 animate-pulse"
      >
        <Phone className="h-5 w-5 mr-2" />
        <span className="hidden sm:inline">Call Now</span>
        <span className="sm:hidden">(410) 746-7225</span>
      </a>
      
      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="ml-2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Dismiss call button"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default StickyCallButton;