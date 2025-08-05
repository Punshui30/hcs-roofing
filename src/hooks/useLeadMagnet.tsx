import { useState, useEffect } from 'react';

export const useLeadMagnet = () => {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);

  useEffect(() => {
    // Show lead magnet after user has been on site for 10 seconds
    const timer = setTimeout(() => {
      // Check if user hasn't already seen it in this session
      const hasSeenToday = sessionStorage.getItem('leadMagnetShown');
      
      if (!hasSeenToday) {
        setShowLeadMagnet(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Also trigger on exit intent (when mouse moves toward browser top)
  useEffect(() => {
    let hasTriggered = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        const hasSeenToday = sessionStorage.getItem('leadMagnetShown');
        
        if (!hasSeenToday) {
          setShowLeadMagnet(true);
          sessionStorage.setItem('leadMagnetShown', 'true');
          hasTriggered = true;
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const closeLeadMagnet = () => {
    setShowLeadMagnet(false);
    sessionStorage.setItem('leadMagnetShown', 'true');
  };

  return {
    showLeadMagnet,
    closeLeadMagnet
  };
};