import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useUser();

  return (
    <header>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                {!isAuthenticated ? (
                  <>
                    <Link to="/signin" className="btn btn-outline-primary btn-sm me-2">
                      Sign In
                    </Link>
                    <Link to="/signup" className="btn btn-outline-primary btn-sm me-3">
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <div className="d-flex align-items-center me-3">
                    <span className="text-muted me-2">Welcome, {user?.firstName}!</span>
                    <button 
                      className="btn btn-outline-secondary btn-sm"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                )}
                <i className="fas fa-phone text-danger me-2"></i>
                <span className="text-muted">12345-67-8910</span>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <Link to="/" className="logo text-decoration-none">
                Cake Store
              </Link>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-end align-items-center">
                <div className="social-icons me-3">
                  <a href="#" className="text-decoration-none">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <a href="#" className="text-decoration-none me-3">
                    <i className="fas fa-search"></i>
                  </a>
                  <Link to="/cart" className="text-decoration-none position-relative">
                    <i className="fas fa-shopping-cart"></i>
                    {getTotalItems() > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {getTotalItems()}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">
                      SHOP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      CONTACT US
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      PAGES
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/team">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/signup">
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
