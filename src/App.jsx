import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Team from './pages/Team';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import PaymentGateway from './pages/PaymentGateway';
import PaymentSuccess from './pages/PaymentSuccess';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <UserProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/team" element={<Team />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/payment" element={<PaymentGateway />} />
                 <Route path="/payment-success" element={<PaymentSuccess />} /> 
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
