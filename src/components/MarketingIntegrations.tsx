import React, { useEffect } from 'react';

interface MarketingIntegrationsProps {
  children: React.ReactNode;
}

const MarketingIntegrations: React.FC<MarketingIntegrationsProps> = ({ children }) => {
  useEffect(() => {
    // Facebook Pixel Integration
    const initFacebookPixel = () => {
      if (typeof window !== 'undefined' && !(window as any).fbq) {
        const script = document.createElement('script');
        script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          // Replace 'YOUR_PIXEL_ID' with actual Facebook Pixel ID
          // fbq('init', 'YOUR_PIXEL_ID');
          // fbq('track', 'PageView');
        `;
        document.head.appendChild(script);
      }
    };

    // Google Analytics 4 Integration
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && !(window as any).gtag) {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Replace 'GA_MEASUREMENT_ID' with actual Google Analytics ID
          // gtag('config', 'GA_MEASUREMENT_ID');
        `;
        document.head.appendChild(script2);
      }
    };

    // Google Tag Manager Integration
    const initGoogleTagManager = () => {
      if (typeof window !== 'undefined' && !(window as any).google_tag_manager) {
        const script = document.createElement('script');
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `;
        document.head.appendChild(script);

        // GTM noscript fallback
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `;
        document.body.insertBefore(noscript, document.body.firstChild);
      }
    };

    // Microsoft Clarity Integration
    const initMicrosoftClarity = () => {
      if (typeof window !== 'undefined' && !(window as any).clarity) {
        const script = document.createElement('script');
        script.innerHTML = `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
        `;
        document.head.appendChild(script);
      }
    };

    // Initialize all tracking (commented out until IDs are provided)
    // initFacebookPixel();
    // initGoogleAnalytics();
    // initGoogleTagManager();
    // initMicrosoftClarity();

  }, []);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: any) => {
    // Google Analytics event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }

    // Facebook Pixel event tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, parameters);
    }

    // Microsoft Clarity custom events
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', eventName, parameters);
    }
  };

  // Make tracking function available globally
  useEffect(() => {
    (window as any).trackEvent = trackEvent;
  }, []);

  return <>{children}</>;
};

export default MarketingIntegrations;