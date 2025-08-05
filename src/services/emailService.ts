import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  timeframe: string;
  message: string;
}

export interface LeadMagnetData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
}

export interface EmailCaptureData {
  email: string;
}

export const sendContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      timeframe: formData.timeframe,
      message: formData.message,
      to_email: 'your-email@namecheap.com', // Replace with your Namecheap email
      subject: `New Contact Form - ${formData.service}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Contact form sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

export const sendLeadMagnet = async (formData: LeadMagnetData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      property_type: formData.propertyType || 'Not specified',
      to_email: 'your-email@namecheap.com', // Replace with your Namecheap email
      subject: 'New Lead Magnet Download - Free Roofing Guide',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'YOUR_LEAD_TEMPLATE_ID', // Create a separate template for lead magnets
      templateParams
    );

    console.log('Lead magnet notification sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending lead magnet notification:', error);
    return false;
  }
};

export const sendEmailCapture = async (formData: EmailCaptureData): Promise<boolean> => {
  try {
    const templateParams = {
      from_email: formData.email,
      to_email: 'your-email@namecheap.com', // Replace with your Namecheap email
      subject: 'New Email Signup - Maintenance Guide',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'YOUR_EMAIL_TEMPLATE_ID', // Create a separate template for email signups
      templateParams
    );

    console.log('Email capture notification sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email capture notification:', error);
    return false;
  }
};