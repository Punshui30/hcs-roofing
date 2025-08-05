import React, { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import SEOFeaturesModal from './SEOFeaturesModal';

const Header: React.FC = () => {
  const [showSEOModal, setShowSEOModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-slate-800">
                  <button 
                    onClick={() => setShowSEOModal(true)}
                    className="hover:text-emerald-600 transition-colors duration-200"
                    title="View SEO Features"
                  >
                    H
                  </button>
                  CS
                </span>
                <span className="text-xl text-slate-600 ml-1">Roofing & Windows</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Serving All of Maryland</span>
              </div>
              <a 
                href="tel:+1-410-746-7225"
                className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">(410) 746-7225</span>
              </a>
            </div>
            
            <div className="md:hidden">
              <a 
                href="tel:+1-410-746-7225"
                className="flex items-center bg-emerald-600 text-white px-3 py-2 rounded-lg"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <SEOFeaturesModal 
        isOpen={showSEOModal} 
        onClose={() => setShowSEOModal(false)} 
      />
    </>
  );
};

export default Header;