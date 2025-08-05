import React from 'react';
import { Star, Quote, Facebook, Instagram } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Baltimore, MD",
      rating: 5,
      text: "HCS Roofing replaced our entire roof after storm damage. Professional, on-time, and the quality exceeded our expectations. The crew was respectful and cleaned up perfectly.",
      service: "Complete Roof Replacement",
      date: "2 weeks ago"
    },
    {
      name: "Mike Rodriguez",
      location: "Annapolis, MD", 
      rating: 5,
      text: "Fair pricing, excellent workmanship, and they cleaned up everything perfectly. Our new windows look amazing and have already reduced our energy bills significantly.",
      service: "Window Installation",
      date: "1 month ago"
    },
    {
      name: "Jennifer Chen",
      location: "Frederick, MD",
      rating: 5,
      text: "Emergency roof repair during a storm. They came out the same day and fixed our leak quickly. Honest pricing and quality work. Highly recommend!",
      service: "Emergency Roof Repair",
      date: "3 weeks ago"
    }
  ];

  const handleReviewClick = (reviewerName: string) => {
    // Track review interaction
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('review_interaction', {
        reviewer: reviewerName,
        action: 'click'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Are Saying
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">4.9 out of 5</span>
            <span className="ml-2 text-gray-600">(127+ reviews)</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-gray-600">Follow us for more updates:</span>
            <a 
              href="https://www.facebook.com/share/1DfFyDZhck/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <Facebook className="h-6 w-6 mr-2" />
              <span className="font-medium">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/h.c.s.baltimore?igsh=MXM4ODJzd2drdDQwMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-600 hover:text-pink-700 transition-colors duration-200"
            >
              <Instagram className="h-6 w-6 mr-2" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleReviewClick(testimonial.name)}
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-emerald-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-emerald-600 font-medium">{testimonial.service}</p>
                  </div>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platform Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">See more reviews on:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.google.com/search?q=HCS+Roofing+Windows+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).trackEvent) {
                  (window as any).trackEvent('external_review_click', { platform: 'google' });
                }
              }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5 w-5 mr-2" />
              <span className="font-medium">Google Reviews</span>
            </a>
            
            <a 
              href="https://www.bbb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).trackEvent) {
                  (window as any).trackEvent('external_review_click', { platform: 'bbb' });
                }
              }}
            >
              <div className="h-5 w-5 mr-2 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">BBB</div>
              <span className="font-medium">Better Business Bureau</span>
            </a>
            
            <a 
              href="https://www.angieslist.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).trackEvent) {
                  (window as any).trackEvent('external_review_click', { platform: 'angies' });
                }
              }}
            >
              <div className="h-5 w-5 mr-2 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">AL</div>
              <span className="font-medium">Angie's List</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;