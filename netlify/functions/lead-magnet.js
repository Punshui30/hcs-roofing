const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, propertyType } = data;

    // Validate required fields
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Send notification email to business
    const notificationEmail = {
      from: process.env.SMTP_USER,
      to: 'contact@hcsroof.com',
      subject: 'New Lead Magnet Download - Free Roofing Guide',
      html: `
        <h2>New Lead Magnet Download</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
        <hr>
        <p><strong>Lead Source:</strong> Free Roofing Guide Download</p>
        <p><small>Downloaded from HCS Roofing website</small></p>
      `
    };

    // Send welcome email to lead with download link
    const welcomeEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Your Free Roofing Guide - HCS Roofing & Windows',
      html: `
        <h2>Thank you for downloading our Free Roofing Guide!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for your interest in our roofing services. Your free guide is attached to this email.</p>
        
        <h3>What's Inside Your Guide:</h3>
        <ul>
          <li>When to replace vs. repair your roof</li>
          <li>Seasonal maintenance checklist</li>
          <li>How to spot early warning signs</li>
          <li>Insurance claim tips and process</li>
          <li>Material comparison guide</li>
        </ul>
        
        <p>If you have any questions about your roof or would like a free inspection, don't hesitate to contact us:</p>
        <p><strong>Phone:</strong> (410) 746-7225</p>
        <p><strong>Email:</strong> contact@hcsroof.com</p>
        
        <p>Best regards,<br>
        The HCS Roofing & Windows Team</p>
        
        <hr>
        <p><small>HCS Roofing & Windows - Maryland's Premier Roofing Contractor</small></p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(welcomeEmail)
    ]);

    // Track lead magnet conversion
    console.log('Lead magnet downloaded:', { name, email, propertyType });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Guide sent successfully' 
      })
    };

  } catch (error) {
    console.error('Lead magnet error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to process download request'
      })
    };
  }
};
