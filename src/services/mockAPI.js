// Mock Backend API Service for testing HTTP methods
// This simulates a backend API for development purposes

class MockAPIService {
  constructor() {
    this.users = [];
    this.newsletters = [];
    this.orders = [];
    this.contacts = [];
  }

  // Simulate network delay
  async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Users API
  async getUsers() {
    await this.delay();
    return { success: true, data: this.users };
  }

  async getUserById(id) {
    await this.delay();
    const user = this.users.find(u => u.id === parseInt(id));
    if (user) {
      return { success: true, data: user };
    }
    return { success: false, error: 'User not found' };
  }

  async createUser(userData) {
    await this.delay();
    const newUser = {
      id: this.users.length + 1,
      ...userData,
      createdAt: new Date().toISOString(),
      isActive: true
    };
    this.users.push(newUser);
    return { success: true, data: newUser };
  }

  async updateUser(id, userData) {
    await this.delay();
    const userIndex = this.users.findIndex(u => u.id === parseInt(id));
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
      return { success: true, data: this.users[userIndex] };
    }
    return { success: false, error: 'User not found' };
  }

  async deleteUser(id) {
    await this.delay();
    const userIndex = this.users.findIndex(u => u.id === parseInt(id));
    if (userIndex !== -1) {
      const deletedUser = this.users.splice(userIndex, 1)[0];
      return { success: true, data: deletedUser };
    }
    return { success: false, error: 'User not found' };
  }

  // Auth API
  async login(credentials) {
    await this.delay();
    const user = this.users.find(u => 
      u.email === credentials.email && 
      u.password === credentials.password &&
      u.isActive
    );
    if (user) {
      return { success: true, data: { user, token: 'mock-jwt-token' } };
    }
    return { success: false, error: 'Invalid credentials' };
  }

  async register(userData) {
    await this.delay();
    const existingUser = this.users.find(u => u.email === userData.email);
    if (existingUser) {
      return { success: false, error: 'Email already exists' };
    }
    const newUser = {
      id: this.users.length + 1,
      ...userData,
      createdAt: new Date().toISOString(),
      isActive: true
    };
    this.users.push(newUser);
    return { success: true, data: newUser };
  }

  async validateEmail(email) {
    await this.delay();
    const exists = this.users.some(u => u.email === email);
    return { success: true, data: { exists } };
  }

  // Newsletter API
  async subscribeNewsletter(emailData) {
    await this.delay();
    const existing = this.newsletters.find(n => n.email === emailData.email);
    if (existing) {
      return { success: false, error: 'Email already subscribed' };
    }
    this.newsletters.push(emailData);
    return { success: true, data: emailData };
  }

  // Orders API
  async createOrder(orderData) {
    await this.delay();
    const newOrder = {
      id: this.orders.length + 1,
      ...orderData,
      orderNumber: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    this.orders.push(newOrder);
    return { success: true, data: newOrder };
  }

  // Contact API
  async submitContact(contactData) {
    await this.delay();
    const newContact = {
      id: this.contacts.length + 1,
      ...contactData,
      createdAt: new Date().toISOString()
    };
    this.contacts.push(newContact);
    return { success: true, data: newContact };
  }
}

// Create mock API instance
export const mockAPI = new MockAPIService();

// Mock fetch function for development
export const mockFetch = async (url, options = {}) => {
  const urlObj = new URL(url);
  const path = urlObj.pathname;
  const method = options.method || 'GET';
  
  let body = null;
  if (options.body) {
    body = JSON.parse(options.body);
  }

  // Route API calls to mock service
  switch (true) {
    case path === '/api/users' && method === 'GET':
      return {
        ok: true,
        json: () => mockAPI.getUsers()
      };
    
    case path.startsWith('/api/users/') && method === 'GET':
      const userId = path.split('/')[3];
      return {
        ok: true,
        json: () => mockAPI.getUserById(userId)
      };
    
    case path === '/api/users' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.createUser(body)
      };
    
    case path.startsWith('/api/users/') && method === 'PUT':
      const updateUserId = path.split('/')[3];
      return {
        ok: true,
        json: () => mockAPI.updateUser(updateUserId, body)
      };
    
    case path.startsWith('/api/users/') && method === 'DELETE':
      const deleteUserId = path.split('/')[3];
      return {
        ok: true,
        json: () => mockAPI.deleteUser(deleteUserId)
      };
    
    case path === '/api/auth/login' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.login(body)
      };
    
    case path === '/api/auth/register' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.register(body)
      };
    
    case path === '/api/auth/validate-email' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.validateEmail(body.email)
      };
    
    case path === '/api/newsletter/subscribe' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.subscribeNewsletter(body)
      };
    
    case path === '/api/orders' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.createOrder(body)
      };
    
    case path === '/api/contact' && method === 'POST':
      return {
        ok: true,
        json: () => mockAPI.submitContact(body)
      };
    
    default:
      return {
        ok: false,
        status: 404,
        json: () => ({ success: false, error: 'Endpoint not found' })
      };
  }
};

// Override fetch in development
if (process.env.NODE_ENV === 'development') {
  window.fetch = mockFetch;
}
