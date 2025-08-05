import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openModal } = useContact();

  useEffect(() => {
    // Show floating CTA after user has been on page for 15 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    // Track floating CTA click
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('floating_cta_click', {
        source: 'floating_inspection_cta'
      });
    }
    openModal();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-4 relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="pr-6">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
            <h3 className="font-bold text-gray-900 text-sm">Free Roof Inspection</h3>
          </div>
          <p className="text-gray-600 text-xs mb-3">
            Get a professional assessment of your roof's condition - completely free, no obligation.
          </p>
          <button
            onClick={handleCTAClick}
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors duration-200"
          >
            Schedule Now
          </button>
        </div>

        {/* Arrow pointer */}
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
      </div>
    </div>
  );
};

export default FloatingCTA;