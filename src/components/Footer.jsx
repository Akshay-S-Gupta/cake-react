import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          {/* Cake Store Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="footer-logo">Cake Store</h4>
            <p className="footer-text">
              Join us on a journey of taste and tradition at Cake Store.
            </p>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Contact</h5>
            <div className="footer-text">
              <p>Cake Store Inc.</p>
              <p>Salinas, CA</p>
              <p>831-585-4398</p>
              <p>contact@yourcompany.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Links</h5>
            <div>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About us</Link>
              <Link to="/team" className="footer-link">Team</Link>
              <Link to="/signin" className="footer-link">Sign In</Link>
              <Link to="/signup" className="footer-link">Sign Up</Link>
              <Link to="/contact" className="footer-link">Contact us</Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Follow us</h5>
            <div className="social-icons">
              <a href="#" className="footer-link me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-link me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-link me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-link me-3">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="footer-link me-3">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="mt-3">
              <p className="footer-text mb-2">We Accept:</p>
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/60x40/1A1F71/FFFFFF?text=VISA" alt="Visa" className="me-2" style={{height: '20px'}} />
                <img src="https://via.placeholder.com/60x40/006FCF/FFFFFF?text=AMEX" alt="American Express" className="me-2" style={{height: '20px'}} />
                <img src="https://via.placeholder.com/60x40/EB001B/FFFFFF?text=MC" alt="MasterCard" className="me-2" style={{height: '20px'}} />
                <img src="https://via.placeholder.com/60x40/FF6000/FFFFFF?text=DISC" alt="Discover" className="me-2" style={{height: '20px'}} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-muted">
                © 2024 Cake Store HTML Template by TemplatesJungle
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0 text-muted">We Accept</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
