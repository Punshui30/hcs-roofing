import React, { useState } from 'react';
import { Mail, Gift, CheckCircle } from 'lucide-react';
import { sendEmailCapture } from '../services/emailService';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      // Send email notification via EmailJS
      const success = await sendEmailCapture({ email });
      
      if (success) {
        // Track email signup event
        if (typeof window !== 'undefined' && (window as any).trackEvent) {
          (window as any).trackEvent('email_signup', {
            email: email,
            source: 'maintenance_guide'
          });
        }
        
        setIsSubmitted(true);
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Email signup error:', error);
      alert('There was an error signing you up. Please try again or call us at (410) 746-7225.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Check your email for the free maintenance guide and seasonal roofing tips!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <Gift className="h-8 w-8 text-emerald-200 mr-3" />
        <div>
          <h3 className="text-xl font-bold">Free Roof Maintenance Guide</h3>
          <p className="text-emerald-100 text-sm">Plus seasonal roofing tips delivered monthly</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
          >
            <Mail className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Get Free Guide'}
          </button>
        </div>
        
        <p className="text-xs text-emerald-100">
          We respect your privacy. Unsubscribe at any time. No spam, just valuable roofing tips.
        </p>
      </form>
    </div>
  );
};

export default EmailCapture;