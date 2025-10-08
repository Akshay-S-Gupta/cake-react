// User service (HTTP-only). Mock/local user database removed.
import { httpService } from './httpService';

export const userService = {
  // Get all users
  async getAllUsers() {
    return await httpService.get('/users');
  },

  // Get user by ID
  async getUserById(id) {
    return await httpService.get(`/users/${id}`);
  },

  // Create new user
  async createUser(userData) {
    return await httpService.post('/users', userData);
  },

  // Update user
  async updateUser(id, userData) {
    return await httpService.put(`/users/${id}`, userData);
  },

  // Delete user
  async deleteUser(id) {
    return await httpService.delete(`/users/${id}`);
  },

  // Login user
  async loginUser(email, password) {
    return await httpService.post('/auth/login', { email, password });
  },

  // Register user
  async registerUser(userData) {
    return await httpService.post('/auth/register', userData);
  },

  // Validate email
  async validateEmail(email) {
    return await httpService.post('/auth/validate-email', { email });
  },

  // Reset password
  async resetPassword(email) {
    return await httpService.post('/auth/reset-password', { email });
  },

  // Update password
  async updatePassword(id, oldPassword, newPassword) {
    return await httpService.put(`/users/${id}/password`, { oldPassword, newPassword });
  },

  // Update user preferences
  async updatePreferences(id, preferences) {
    return await httpService.patch(`/users/${id}/preferences`, preferences);
  }
};
