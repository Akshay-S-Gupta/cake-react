// User Database and Service
import { httpService } from './httpService';

// Enhanced User Database with more fields
let users = [
  {
    id: 1,
    email: "admin@cakestore.com",
    password: "admin123",
    firstName: "Admin",
    lastName: "User",
    phone: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "Salinas",
      state: "CA",
      zipCode: "93901"
    },
    role: "admin",
    createdAt: new Date('2024-01-01'),
    lastLogin: new Date(),
    isActive: true,
    preferences: {
      newsletter: true,
      notifications: true
    }
  },
  {
    id: 2,
    email: "john.doe@example.com",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
    phone: "555-123-4567",
    address: {
      street: "456 Oak Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102"
    },
    role: "customer",
    createdAt: new Date('2024-01-15'),
    lastLogin: new Date(),
    isActive: true,
    preferences: {
      newsletter: true,
      notifications: false
    }
  }
];

let nextUserId = 3;

export const userService = {
  // HTTP Methods for User Management
  
  // Get all users (HTTP)
  async getAllUsersHTTP() {
    return await httpService.get('/users');
  },

  // Get user by ID (HTTP)
  async getUserByIdHTTP(id) {
    return await httpService.get(`/users/${id}`);
  },

  // Create new user (HTTP)
  async createUserHTTP(userData) {
    return await httpService.post('/users', userData);
  },

  // Update user (HTTP)
  async updateUserHTTP(id, userData) {
    return await httpService.put(`/users/${id}`, userData);
  },

  // Delete user (HTTP)
  async deleteUserHTTP(id) {
    return await httpService.delete(`/users/${id}`);
  },

  // Login user (HTTP)
  async loginUserHTTP(email, password) {
    return await httpService.post('/auth/login', { email, password });
  },

  // Register user (HTTP)
  async registerUserHTTP(userData) {
    return await httpService.post('/auth/register', userData);
  },

  // Validate email (HTTP)
  async validateEmailHTTP(email) {
    return await httpService.post('/auth/validate-email', { email });
  },

  // Reset password (HTTP)
  async resetPasswordHTTP(email) {
    return await httpService.post('/auth/reset-password', { email });
  },

  // Update password (HTTP)
  async updatePasswordHTTP(id, oldPassword, newPassword) {
    return await httpService.put(`/users/${id}/password`, { oldPassword, newPassword });
  },

  // Update user preferences (HTTP)
  async updatePreferencesHTTP(id, preferences) {
    return await httpService.patch(`/users/${id}/preferences`, preferences);
  },

  // Local Database Methods (Fallback)
  
  // Get all users
  getAllUsers() {
    return users;
  },

  // Get user by email
  getUserByEmail(email) {
    return users.find(user => user.email === email);
  },

  // Get user by ID
  getUserById(id) {
    return users.find(user => user.id === id);
  },

  // Create new user
  createUser(userData) {
    const newUser = {
      id: nextUserId++,
      ...userData,
      role: "customer",
      createdAt: new Date(),
      lastLogin: new Date(),
      isActive: true,
      preferences: {
        newsletter: true,
        notifications: true,
        ...userData.preferences
      }
    };
    users.push(newUser);
    return newUser;
  },

  // Update user
  updateUser(id, userData) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { 
        ...users[userIndex], 
        ...userData,
        lastLogin: new Date()
      };
      return users[userIndex];
    }
    return null;
  },

  // Delete user
  deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      return users.splice(userIndex, 1)[0];
    }
    return null;
  },

  // Validate user credentials
  validateCredentials(email, password) {
    const user = this.getUserByEmail(email);
    if (user && user.password === password && user.isActive) {
      this.updateUser(user.id, { lastLogin: new Date() });
      return user;
    }
    return null;
  },

  // Check if email exists
  emailExists(email) {
    return users.some(user => user.email === email);
  },

  // Get user statistics
  getUserStats() {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.isActive).length;
    const adminUsers = users.filter(user => user.role === 'admin').length;
    const customerUsers = users.filter(user => user.role === 'customer').length;
    
    return {
      totalUsers,
      activeUsers,
      adminUsers,
      customerUsers,
      inactiveUsers: totalUsers - activeUsers
    };
  },

  // Search users
  searchUsers(query) {
    const lowercaseQuery = query.toLowerCase();
    return users.filter(user => 
      user.firstName.toLowerCase().includes(lowercaseQuery) ||
      user.lastName.toLowerCase().includes(lowercaseQuery) ||
      user.email.toLowerCase().includes(lowercaseQuery)
    );
  },

  // Get users by role
  getUsersByRole(role) {
    return users.filter(user => user.role === role);
  },

  // Update user preferences
  updateUserPreferences(id, preferences) {
    const user = this.getUserById(id);
    if (user) {
      user.preferences = { ...user.preferences, ...preferences };
      return user;
    }
    return null;
  },

  // Deactivate user
  deactivateUser(id) {
    return this.updateUser(id, { isActive: false });
  },

  // Activate user
  activateUser(id) {
    return this.updateUser(id, { isActive: true });
  }
};
