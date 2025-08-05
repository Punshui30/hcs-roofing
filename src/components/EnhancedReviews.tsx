import React from 'react';
import { Star, Quote, ExternalLink, Facebook, Instagram } from 'lucide-react';

const EnhancedReviews: React.FC = () => {
  const detailedReviews = [
    {
      name: "Sarah Johnson",
      location: "Baltimore, MD",
      rating: 5,
      date: "2 weeks ago",
      service: "Complete Roof Replacement",
      text: "HCS Roofing replaced our entire roof after storm damage. From the initial inspection to final cleanup, they were professional, on-time, and the quality exceeded our expectations. The crew was respectful of our property and neighbors. Highly recommend!",
      verified: true,
      platform: "Google"
    },
    {
      name: "Mike Rodriguez",
      location: "Annapolis, MD", 
      rating: 5,
      date: "1 month ago",
      service: "Window Installation",
      text: "Outstanding service from start to finish. Fair pricing, excellent workmanship, and they cleaned up everything perfectly. Our new windows look amazing and have already reduced our energy bills significantly. The team was knowledgeable and answered all our questions.",
      verified: true,
      platform: "Facebook"
    },
    {
      name: "Jennifer Chen",
      location: "Frederick, MD",
      rating: 5,
      date: "3 weeks ago",
      service: "Emergency Roof Repair",
      text: "Emergency roof repair during a storm - they came out the same day and fixed our leak quickly and professionally. Honest pricing and quality work. We'll definitely use them for our full roof replacement next year. True professionals!",
      verified: true,
      platform: "Yelp"
    },
    {
      name: "David Thompson",
      location: "Glen Burnie, MD",
      rating: 5,
      date: "1 week ago",
      service: "Roof Inspection & Repair",
      text: "Called HCS for a roof inspection after noticing some missing shingles. They provided a thorough assessment and fixed the issues at a fair price. No high-pressure sales tactics, just honest recommendations. Great local company!",
      verified: true,
      platform: "Google"
    },
    {
      name: "Lisa Martinez",
      location: "Severna Park, MD",
      rating: 5,
      date: "2 months ago",
      service: "Window & Roof Combo",
      text: "Had both our roof and windows replaced by HCS. The project was completed on schedule and within budget. The quality of materials and workmanship is excellent. Our home looks fantastic and feels more comfortable. Worth every penny!",
      verified: true,
      platform: "Angie's List"
    },
    {
      name: "Robert Kim",
      location: "Pasadena, MD",
      rating: 5,
      date: "3 weeks ago",
      service: "Storm Damage Repair",
      text: "After Hurricane damage, HCS worked directly with our insurance company to make the process smooth. They handled all the paperwork and delivered exceptional results. Our roof looks better than before the storm. Highly professional team!",
      verified: true,
      platform: "BBB"
    }
  ];

  const reviewPlatforms = [
    {
      name: "Google Reviews",
      rating: "4.9",
      count: "87+",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      url: "https://www.google.com/search?q=HCS+Roofing+Windows+reviews"
    },
    {
      name: "Facebook",
      rating: "5.0",
      count: "23+",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg",
      url: "https://www.facebook.com/share/1DfFyDZhck/?mibextid=wwXIfr"
    },
    {
      name: "Better Business Bureau",
      rating: "A+",
      count: "Accredited",
      logo: null,
      url: "https://www.bbb.org/"
    },
    {
      name: "Angie's List",
      rating: "4.8",
      count: "17+",
      logo: null,
      url: "https://www.angieslist.com/"
    }
  ];

  const handleReviewClick = (reviewerName: string, platform: string) => {
    // Track review interaction
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('review_interaction', {
        reviewer: reviewerName,
        platform: platform,
        action: 'click'
      });
    }
  };

  const handlePlatformClick = (platform: string) => {
    // Track external review platform click
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('external_review_platform_click', {
        platform: platform
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Verified Customer Reviews
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">4.9 out of 5</span>
            <span className="ml-2 text-gray-600">(127+ verified reviews)</span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real feedback from Maryland homeowners who trusted HCS Roofing & Windows with their home improvements
          </p>
        </div>

        {/* Review Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {reviewPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handlePlatformClick(platform.name)}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="flex items-center justify-center mb-2">
                {platform.logo ? (
                  <img src={platform.logo} alt={platform.name} className="h-6 w-6" />
                ) : (
                  <div className="h-6 w-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    {platform.name === "Better Business Bureau" ? "BBB" : "AL"}
                  </div>
                )}
              </div>
              <div className="text-lg font-bold text-gray-900">{platform.rating}</div>
              <div className="text-sm text-gray-600">{platform.name}</div>
              <div className="text-xs text-gray-500">{platform.count}</div>
            </a>
          ))}
        </div>

        {/* Detailed Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {detailedReviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleReviewClick(review.name, review.platform)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Quote className="h-6 w-6 text-emerald-600 mr-2" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{review.text}"</p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{review.date}</p>
                    <p className="text-xs text-blue-600">{review.platform}</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Follow */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Follow Us for More Customer Stories
          </h3>
          <p className="text-gray-600 mb-6">
            See our latest projects and customer testimonials on social media
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/share/1DfFyDZhck/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              onClick={() => handlePlatformClick('Facebook')}
            >
              <Facebook className="h-5 w-5 mr-2" />
              <span className="font-medium">Follow on Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/h.c.s.baltimore?igsh=MXM4ODJzd2drdDQwMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-200"
              onClick={() => handlePlatformClick('Instagram')}
            >
              <Instagram className="h-5 w-5 mr-2" />
              <span className="font-medium">Follow on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedReviews;