import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formService } from '../services/formService';
import Newsletter from '../components/Newsletter';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!formService.validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const result = await formService.resetPasswordHTTP(email);
      if (result.success) {
        setMessage('Password reset instructions have been sent to your email address.');
        setEmail('');
      } else {
        setError('Failed to send reset instructions. Please try again.');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      setError('Failed to send reset instructions. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Forgot Password</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Forgot Password
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Forgot Password Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow">
                <div className="card-header bg-primary text-white text-center">
                  <h3 className="mb-0 script-font">Reset Your Password</h3>
                  <p className="mb-0">Enter your email to receive reset instructions</p>
                </div>
                <div className="card-body p-4">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {message && (
                    <div className="alert alert-success" role="alert">
                      {message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary-custom btn-lg px-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
                      </button>
                    </div>

                    {/* Links */}
                    <div className="text-center">
                      <p className="mb-2">
                        <Link to="/signin" className="text-primary text-decoration-none">
                          Back to Sign In
                        </Link>
                      </p>
                      <p className="mb-0">
                        Don't have an account? 
                        <Link to="/signup" className="text-primary text-decoration-none ms-1">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default ForgotPassword;
