// Form Service for handling form data with HTTP methods
import { httpService } from './httpService';

export const formService = {
  // Generic form submission
  async submitForm(endpoint, formData, method = 'POST') {
    try {
      const result = await httpService.request(endpoint, {
        method,
        body: JSON.stringify(formData)
      });
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // User registration form
  async submitRegistrationForm(formData) {
    const userData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      password: formData.password,
      phone: formData.phone.trim(),
      address: {
        street: formData['address.street'].trim(),
        city: formData['address.city'].trim(),
        state: formData['address.state'].trim(),
        zipCode: formData['address.zipCode'].trim()
      },
      preferences: {
        newsletter: true,
        notifications: true
      }
    };

    return await httpService.post('/auth/register', userData);
  },

  // User login form
  async submitLoginForm(formData) {
    const loginData = {
      email: formData.email.trim(),
      password: formData.password
    };

    return await httpService.post('/auth/login', loginData);
  },

  // Contact form
  async submitContactForm(formData) {
    const contactData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString()
    };

    return await httpService.post('/contact', contactData);
  },

  // Newsletter subscription form
  async submitNewsletterForm(email) {
    const newsletterData = {
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
      isActive: true
    };

    return await httpService.post('/newsletter/subscribe', newsletterData);
  },

  // Order form (checkout)
  async submitOrderForm(formData, cartItems) {
    const orderData = {
      customer: {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        address: {
          street: formData.streetAddress.trim(),
          apartment: formData.apartment.trim(),
          city: formData.city.trim(),
          state: formData.state.trim(),
          zipCode: formData.zipCode.trim(),
          country: formData.country.trim()
        }
      },
      items: cartItems.map(item => ({
        productId: item.id,
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.price * item.quantity
      })),
      orderNotes: formData.orderNotes.trim(),
      paymentMethod: formData.paymentMethod,
      totalAmount: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    return await httpService.post('/orders', orderData);
  },

  // Profile update form
  async submitProfileUpdateForm(userId, formData) {
    const profileData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      phone: formData.phone.trim(),
      address: {
        street: formData['address.street'].trim(),
        city: formData['address.city'].trim(),
        state: formData['address.state'].trim(),
        zipCode: formData['address.zipCode'].trim()
      },
      preferences: formData.preferences || {}
    };

    return await httpService.put(`/users/${userId}`, profileData);
  },

  // Password change form
  async submitPasswordChangeForm(userId, formData) {
    const passwordData = {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword
    };

    return await httpService.put(`/users/${userId}/password`, passwordData);
  },

  // Form validation helpers
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validatePhone(phone) {
     return /^[6-9][0-9]{9}$/.test(phone);
    return phoneRegex.test(phone);
  },

  validatePassword(password) {
    return password.length >= 6;
  },

  validateZipCode(zipCode) {
    const zipRegex = /^\d{5}$/;
    return zipRegex.test(zipCode);
  },

  // Form data sanitization
  sanitizeFormData(formData) {
    const sanitized = {};
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'string') {
        sanitized[key] = value.trim();
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  },

  // Form error handling
  handleFormError(error) {
    if (error.includes('409')) {
      return 'Email already exists. Please use a different email address.';
    } else if (error.includes('400')) {
      return 'Invalid form data. Please check your inputs.';
    } else if (error.includes('401')) {
      return 'Authentication failed. Please check your credentials.';
    } else if (error.includes('500')) {
      return 'Server error. Please try again later.';
    } else {
      return 'An error occurred. Please try again.';
    }
  }
};
