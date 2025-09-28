import React, { useState } from 'react';
import { formService } from '../services/formService';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter your email address');
      return;
    }

    if (!formService.validateEmail(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const result = await formService.submitNewsletterForm(email);
      if (result.success) {
        setMessage('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content text-center">
          <h2 className="newsletter-title">Join Our Newsletter</h2>
          <p className="newsletter-subtitle">
            Sign Up for our newsletter and never miss any offers
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control newsletter-input"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              className="btn newsletter-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SIGNING UP...' : 'SIGN UP'}
            </button>
          </form>
          {message && (
            <div className={`mt-3 ${message.includes('Thank you') ? 'text-success' : 'text-danger'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
