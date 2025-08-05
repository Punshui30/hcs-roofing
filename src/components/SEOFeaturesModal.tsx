import React from 'react';
import { X, Search, Star, Award, MapPin, Share2, Eye, TrendingUp, Mail, BarChart3, Users, Gift } from 'lucide-react';

interface SEOFeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEOFeaturesModal: React.FC<SEOFeaturesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-slate-800 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Complete SEO & Marketing Suite</h2>
              <p className="text-slate-300 mt-1">Professional optimization + automated marketing tools</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-slate-300 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* SEO Features */}
            <div>
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">SEO Optimization</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Technical SEO</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Schema.org structured data for Local Business</li>
                    <li>• Optimized meta titles and descriptions</li>
                    <li>• Proper heading hierarchy (H1, H2, H3)</li>
                    <li>• Semantic HTML structure</li>
                    <li>• Alt text for all images</li>
                    <li>• Canonical URL implementation</li>
                    <li>• Robots meta tags</li>
                  </ul>
                </div>
                
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Local SEO</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Geographic targeting for Maryland</li>
                    <li>• Service area coverage (all MD counties)</li>
                    <li>• Local business schema markup</li>
                    <li>• ICBM coordinates for location</li>
                    <li>• Service-specific landing content</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Social Media SEO</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Open Graph meta tags (Facebook/LinkedIn)</li>
                    <li>• Twitter Card optimization</li>
                    <li>• Social sharing image optimization</li>
                    <li>• Rich snippets for social platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Integrations Section */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-slate-800">Free Marketing Integrations</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Analytics & Tracking */}
              <div>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics & Tracking
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Google Analytics 4 <span className="text-red-600 font-medium">(ID needed)</span></li>
                    <li>• Google Tag Manager <span className="text-red-600 font-medium">(ID needed)</span></li>
                    <li>• Facebook Pixel <span className="text-red-600 font-medium">(ID needed)</span></li>
                    <li>• Microsoft Clarity <span className="text-red-600 font-medium">(ID needed)</span></li>
                    <li>• Hotjar heatmaps <span className="text-red-600 font-medium">(ID needed)</span></li>
                    <li>• Custom event tracking (built-in)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Marketing
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Email capture forms (built-in)</li>
                    <li>• Newsletter signup (built-in)</li>
                    <li>• Lead magnet system (built-in)</li>
                    <li>• Mailchimp integration ready</li>
                    <li>• ConvertKit integration ready</li>
                    <li>• EmailJS integration ready</li>
                  </ul>
                </div>
              </div>
              
              {/* Lead Generation & Social Proof */}
              <div>
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <Gift className="h-4 w-4 mr-2" />
                    Lead Generation
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Exit-intent popup (built-in)</li>
                    <li>• Free roofing guide offer (built-in)</li>
                    <li>• Smart timing system (built-in)</li>
                    <li>• Property type segmentation (built-in)</li>
                    <li>• Contact form with tracking (built-in)</li>
                    <li>• Phone call tracking (built-in)</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Social Proof & Reviews
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Interactive testimonials (built-in)</li>
                    <li>• Review platform links (built-in)</li>
                    <li>• Star ratings display (built-in)</li>
                    <li>• Review click tracking (built-in)</li>
                    <li>• Customer story showcase (built-in)</li>
                    <li>• Trust badges & certifications (built-in)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Self-Promoting Features */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">Self-Promoting Features</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Trust Signals</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 4.9-star rating with visual stars</li>
                    <li>• 127+ verified customer reviews</li>
                    <li>• Licensed & insured badges</li>
                    <li>• 15+ years experience highlight</li>
                    <li>• 500+ happy customers counter</li>
                    <li>• 24/7 emergency service</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Awards & Certifications</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• BBB A+ Rating badge</li>
                    <li>• Angie's List Top Rated 2024</li>
                    <li>• 5-Star Google Reviews</li>
                    <li>• Award-winning service recognition</li>
                    <li>• Maryland licensed contractor</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Social Proof</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Customer testimonials with names</li>
                    <li>• Before/after project gallery</li>
                    <li>• Service area coverage map</li>
                    <li>• Local community focus</li>
                    <li>• Real project locations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="text-lg font-bold text-slate-800 mb-4">🔧 Setup Instructions</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <h5 className="font-semibold text-yellow-800 mb-2">Required IDs to Complete Setup:</h5>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-yellow-800">Analytics:</p>
                  <ul className="text-yellow-700 ml-4">
                    <li>• Google Analytics 4 Measurement ID</li>
                    <li>• Google Tag Manager Container ID</li>
                    <li>• Facebook Pixel ID</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-yellow-800">User Behavior:</p>
                  <ul className="text-yellow-700 ml-4">
                    <li>• Microsoft Clarity Project ID</li>
                    <li>• Hotjar Site ID</li>
                    <li>• Email service API keys</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 mb-1">Visibility</h4>
                <p className="text-sm text-slate-600">Optimized for Google Local Service Ads and organic search</p>
              </div>
              
              <div className="text-center">
                <Share2 className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 mb-1">Shareability</h4>
                <p className="text-sm text-slate-600">Enhanced social media sharing with rich previews</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-800 mb-1">Local Focus</h4>
                <p className="text-sm text-slate-600">Geo-targeted for Maryland roofing and window searches</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-800 mb-2">✅ Ready for Integration</h4>
            <p className="text-sm text-emerald-700">
              All marketing integrations are pre-built and ready to activate. Simply add your account IDs 
              to the configuration files. Email marketing forms are functional and ready to connect to 
              your preferred service (Mailchimp, ConvertKit, EmailJS, etc.).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOFeaturesModal;