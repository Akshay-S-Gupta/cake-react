import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '../services/userService';
import { formService } from '../services/formService';
import { useUser } from '../context/UserContext';
import Newsletter from '../components/Newsletter';

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formService.validateEmail(formData.email)) {
      newErrors.email = 'Email is invalid';
    } else if (userService.emailExists(formData.email)) {
      newErrors.email = 'Email already exists';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!formService.validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!formService.validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must be in format XXX-XXX-XXXX';
    }

    // Address validation
    if (!formData.address.street.trim()) {
      newErrors['address.street'] = 'Street address is required';
    }

    if (!formData.address.city.trim()) {
      newErrors['address.city'] = 'City is required';
    }

    if (!formData.address.state.trim()) {
      newErrors['address.state'] = 'State is required';
    }

    if (!formData.address.zipCode.trim()) {
      newErrors['address.zipCode'] = 'Zip code is required';
    } else if (!formService.validateZipCode(formData.address.zipCode)) {
      newErrors['address.zipCode'] = 'Zip code must be 5 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Try HTTP method first, fallback to local method
      let result;
      try {
        result = await formService.submitRegistrationForm(formData);
        if (result.success) {
          // Auto-login the user after successful registration
          const loginResult = await formService.submitLoginForm({
            email: formData.email,
            password: formData.password
          });
          
          if (loginResult.success) {
            login(loginResult.data.user);
            alert('Account created successfully! Welcome to Cake Store!');
            navigate('/');
          } else {
            // Registration successful but login failed, create local user
            const newUser = userService.createUser({
              firstName: formData.firstName.trim(),
              lastName: formData.lastName.trim(),
              email: formData.email.trim(),
              password: formData.password,
              phone: formData.phone.trim(),
              address: {
                street: formData.address.street.trim(),
                city: formData.address.city.trim(),
                state: formData.address.state.trim(),
                zipCode: formData.address.zipCode.trim()
              }
            });
            login(newUser);
            alert('Account created successfully! Welcome to Cake Store!');
            navigate('/');
          }
        } else {
          throw new Error(result.error);
        }
      } catch (httpError) {
        console.log('HTTP registration failed, using local method:', httpError);
        // Fallback to local registration
        const newUser = userService.createUser({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          password: formData.password,
          phone: formData.phone.trim(),
          address: {
            street: formData.address.street.trim(),
            city: formData.address.city.trim(),
            state: formData.address.state.trim(),
            zipCode: formData.address.zipCode.trim()
          }
        });
        login(newUser);
        alert('Account created successfully! Welcome to Cake Store!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert(formService.handleFormError(error.message));
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
            <h1 className="banner-title">Sign Up</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Sign Up
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow">
                <div className="card-header bg-primary text-white text-center">
                  <h3 className="mb-0 script-font">Create Your Account</h3>
                  <p className="mb-0">Join our community of cake lovers!</p>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary mb-3">Personal Information</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary mb-3">Contact Information</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="XXX-XXX-XXXX"
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary mb-3">Account Security</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Password *</label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                        />
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Confirm Password *</label>
                        <input
                          type="password"
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                          <div className="invalid-feedback">{errors.confirmPassword}</div>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary mb-3">Address Information</h5>
                      </div>
                      <div className="col-12 mb-3">
                        <label className="form-label">Street Address *</label>
                        <input
                          type="text"
                          className={`form-control ${errors['address.street'] ? 'is-invalid' : ''}`}
                          name="address.street"
                          value={formData.address.street}
                          onChange={handleInputChange}
                          placeholder="Enter your street address"
                        />
                        {errors['address.street'] && (
                          <div className="invalid-feedback">{errors['address.street']}</div>
                        )}
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">City *</label>
                        <input
                          type="text"
                          className={`form-control ${errors['address.city'] ? 'is-invalid' : ''}`}
                          name="address.city"
                          value={formData.address.city}
                          onChange={handleInputChange}
                          placeholder="Enter your city"
                        />
                        {errors['address.city'] && (
                          <div className="invalid-feedback">{errors['address.city']}</div>
                        )}
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">State *</label>
                        <select
                          className={`form-select ${errors['address.state'] ? 'is-invalid' : ''}`}
                          name="address.state"
                          value={formData.address.state}
                          onChange={handleInputChange}
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          <option value="IL">Illinois</option>
                        </select>
                        {errors['address.state'] && (
                          <div className="invalid-feedback">{errors['address.state']}</div>
                        )}
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Zip Code *</label>
                        <input
                          type="text"
                          className={`form-control ${errors['address.zipCode'] ? 'is-invalid' : ''}`}
                          name="address.zipCode"
                          value={formData.address.zipCode}
                          onChange={handleInputChange}
                          placeholder="12345"
                          maxLength="5"
                        />
                        {errors['address.zipCode'] && (
                          <div className="invalid-feedback">{errors['address.zipCode']}</div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary-custom btn-lg px-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                      </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-4">
                      <p className="mb-0">
                        Already have an account? 
                        <Link to="/signin" className="text-primary text-decoration-none ms-1">
                          Sign In
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

export default SignUp;
