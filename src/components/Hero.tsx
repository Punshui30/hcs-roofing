import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const Hero: React.FC = () => {
  const { openModal } = useContact();
  const [currentMedia, setCurrentMedia] = React.useState<'logo' | 'video' | 'finalLogo'>('logo');
  const [hasUserInteracted, setHasUserInteracted] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const logoTimer = setTimeout(() => {
      setCurrentMedia('video');
    }, 2000);

    return () => clearTimeout(logoTimer);
  }, []);

  React.useEffect(() => {
    if (currentMedia === 'video' && videoRef.current) {
      const video = videoRef.current;
      
      const handleVideoEnd = () => {
        setCurrentMedia('finalLogo');
      };
      
      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentMedia]);

  React.useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasUserInteracted && videoRef.current && currentMedia === 'video') {
        videoRef.current.muted = false;
        setHasUserInteracted(true);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasUserInteracted, currentMedia]);

  const renderMedia = () => {
    if (currentMedia === 'logo') {
      return (
        <img 
          src="https://i.imgur.com/UHtthhB.png"
          alt="HCS Roofing & Windows Logo"
          className="w-full h-48 sm:h-56 lg:h-80 xl:h-96 object-contain rounded-lg"
        />
      );
    }
    
    if (currentMedia === 'video') {
      return (
        <div 
          className="relative cursor-pointer"
          onClick={() => {
            if (!hasUserInteracted && videoRef.current) {
              videoRef.current.muted = false;
              setHasUserInteracted(true);
            }
          }}
        >
          <video 
            ref={videoRef}
            autoPlay
            muted={true}
            playsInline
            controls={false}
            className="w-full h-48 sm:h-56 lg:h-80 xl:h-96 object-cover rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              if (!hasUserInteracted && videoRef.current) {
                videoRef.current.muted = false;
                setHasUserInteracted(true);
              }
            }}
          >
            <source src="https://i.imgur.com/asxAIzS.mp4" type="video/mp4" />
            <img 
              src="https://i.imgur.com/UHtthhB.png"
              alt="HCS Roofing & Windows Logo"
              className="w-full h-48 sm:h-56 lg:h-80 xl:h-96 object-contain bg-white rounded-lg"
            />
          </video>
          {!hasUserInteracted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
              <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium">
                🔇 Click for audio
              </div>
            </div>
          )}
        </div>
      );
    }
    
    // Final logo
    return (
      <img 
        src="https://i.imgur.com/UHtthhB.png"
        alt="HCS Roofing & Windows Logo"
        className="w-full h-48 sm:h-56 lg:h-80 xl:h-96 object-contain rounded-lg"
      />
    );
  };
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8 lg:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Protect Your Home with 
                <span className="text-amber-400 block">Expert Roofing</span>
                <span className="text-stone-200">& Window Replacements</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 font-medium">
                Best Price Guarantee – Top Quality Roofing & Windows Without the High Price Tag
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button
                onClick={openModal}
                className="bg-emerald-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center"
              >
                Get Free Inspection
              </button>
              
              <a 
                href="tel:+1-410-746-7225"
                className="bg-transparent border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors duration-200 flex items-center justify-center"
              >
                Call Now: (410) 746-7225
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 lg:gap-6 text-sm lg:text-base">
              <div className="flex items-center">
                <Shield className="h-4 w-4 lg:h-5 lg:w-5 mr-2 text-emerald-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 lg:h-5 lg:w-5 mr-2 text-amber-400" />
                <span>Award Winning Service</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 lg:h-5 lg:w-5 mr-2 text-slate-300" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            {renderMedia()}
            <div className="absolute top-4 right-4 bg-white text-slate-800 p-3 lg:p-4 rounded-lg shadow-lg">
              <div className="text-lg lg:text-xl font-bold">4.9★</div>
              <div className="text-sm lg:text-base">127+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;