import React from 'react';
import { ExternalLink, Star, Award, Shield } from 'lucide-react';

const DirectoryLinks: React.FC = () => {
  const directories = [
    {
      name: "Better Business Bureau",
      rating: "A+ Rating",
      description: "Accredited business with excellent customer service record",
      url: "https://www.bbb.org/",
      logo: null,
      color: "bg-blue-600",
      verified: true
    },
    {
      name: "Angie's List",
      rating: "Top Rated 2024",
      description: "Consistently rated as a top roofing contractor",
      url: "https://www.angieslist.com/",
      logo: null,
      color: "bg-green-600",
      verified: true
    },
    {
      name: "Google My Business",
      rating: "4.9 Stars",
      description: "87+ verified customer reviews",
      url: "https://www.google.com/search?q=HCS+Roofing+Windows+reviews",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      color: "bg-red-500",
      verified: true
    },
    {
      name: "Yelp",
      rating: "5 Stars",
      description: "Highly rated local roofing contractor",
      url: "https://www.yelp.com/",
      logo: null,
      color: "bg-red-600",
      verified: true
    },
    {
      name: "HomeAdvisor",
      rating: "Elite Service",
      description: "Background checked and customer approved",
      url: "https://www.homeadvisor.com/",
      logo: null,
      color: "bg-orange-600",
      verified: true
    },
    {
      name: "Thumbtack",
      rating: "Top Pro",
      description: "Consistently hired with great reviews",
      url: "https://www.thumbtack.com/",
      logo: null,
      color: "bg-blue-500",
      verified: true
    }
  ];

  const handleDirectoryClick = (directoryName: string) => {
    // Track directory link click
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('directory_link_click', {
        directory: directoryName
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Verified & Trusted Across All Platforms
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HCS Roofing & Windows maintains excellent ratings across all major review platforms and business directories. 
            See what customers are saying about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {directories.map((directory, index) => (
            <a
              key={index}
              href={directory.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleDirectoryClick(directory.name)}
              className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-6 transition-all duration-200 hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {directory.logo ? (
                    <img src={directory.logo} alt={directory.name} className="h-8 w-8 mr-3" />
                  ) : (
                    <div className={`${directory.color} text-white p-2 rounded-lg mr-3`}>
                      <Award className="h-4 w-4" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                      {directory.name}
                    </h3>
                    {directory.verified && (
                      <span className="text-xs text-green-600 font-medium">✓ Verified</span>
                    )}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 transition-colors duration-200" />
              </div>
              
              <div className="mb-3">
                <div className="flex items-center mb-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-gray-900">{directory.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{directory.description}</p>
              </div>
              
              <div className="text-xs text-emerald-600 font-medium">
                Click to view our profile →
              </div>
            </a>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
            Licensed, Insured & Certified
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-3 rounded-full mb-2">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Licensed</h4>
              <p className="text-xs text-gray-600">Maryland Contractor</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Insured</h4>
              <p className="text-xs text-gray-600">Full Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-3 rounded-full mb-2">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Certified</h4>
              <p className="text-xs text-gray-600">Industry Standards</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-2">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Award Winning</h4>
              <p className="text-xs text-gray-600">Excellence in Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectoryLinks;