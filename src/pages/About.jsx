import React from "react";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          {/* Introduction, Services, Goal */}
          <div className="row mb-5">
            <div className="col-lg-4 mb-4">
              <h3 className="script-font h2 mb-3">Introduction</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="script-font h2 mb-3">Our Services</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="script-font h2 mb-3">Our Goal</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>

          {/* The beginning of our journey */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="script-font h1 mb-4">
                The beginning of our journey
              </h2>
              <p className="text-muted mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted mb-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  • Lorem ipsum dolor sit amet consectetur
                </li>
                <li className="mb-2">
                  • Sed do eiusmod tempor incididunt ut labore
                </li>
                <li className="mb-2">
                  • Duis aute irure dolor in reprehenderit
                </li>
              </ul>
              <button className="btn btn-outline-danger">SHOP NOW</button>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="public/highlight-3.jpg"
                  alt="Bakery Interior"
                  className="img-fluid rounded shadow"
                  style={{ transform: "rotate(-2deg)" }}
                />
              </div>
            </div>
          </div>

          {/* Who are we? */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="row">
                <img
                  src="public/highlight-4.jpg"
                  alt="Pastries Display"
                  className="img-fluid rounded"
                />
              </div>
            </div>{" "}
            <div className="col-lg-6">
              <h2 className="script-font h1 mb-4">Who are we?</h2>
              <p className="text-muted mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted mb-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* What Our Customers say */}
          <div className="text-center mb-5">
            <h2 className="script-font h1 mb-5">What Our Customers say</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <p className="text-muted mb-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua."
                    </p>
                    <h6 className="mb-1">Jane Cooper</h6>
                    <small className="text-muted">CEO, ABC Inc.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <p className="text-muted mb-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua."
                    </p>
                    <h6 className="mb-1">Melanie Griffith</h6>
                    <small className="text-muted">CEO, ABC Inc.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <p className="text-muted mb-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua."
                    </p>
                    <h6 className="mb-1">Amy Johnson</h6>
                    <small className="text-muted">CEO, ABC Inc.</small>
                  </div>
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

export default About;
