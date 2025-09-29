import React from "react";
import { Link } from "react-router-dom";
import { products } from "../services/database";
import { useCart } from "../context/CartContext";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const featuredProducts = products.slice(0, 5);
  const { addToCart, isInCart } = useCart();

  const handleCartClick = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-dark py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 script-font mb-4">
                Explore a world of exquisite flavors
              </h1>
              <p className="lead mb-4">
                Discover our handcrafted cakes, pastries, and desserts made with
                love and the finest ingredients.
              </p>
              <Link to="/shop" className="btn btn-primary-custom btn-lg">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Delicious Cake Shop */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="script-font display-5 mb-3">
              Our Delicious Cake Shop
            </h2>
            <p className="lead text-muted">
              Experience the finest selection of cakes, pastries, and desserts
              crafted with passion and expertise.
            </p>
          </div>

          <div className="row">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="card product-card h-100">
                  <img
                    src={product.mainImage}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title product-title">{product.name}</h5>
                    <p className="card-text product-price">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="d-flex gap-2 justify-content-center">
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-primary btn-sm flex-fill"
                      >
                        View Details
                      </Link>
                      <button
                        className={`btn btn-sm ${
                          isInCart(product.id)
                            ? "btn-success"
                            : "btn-primary-custom"
                        }`}
                        onClick={() => handleCartClick(product)}
                        style={{ minWidth: "40px" }}
                      >
                        {isInCart(product.id) ? (
                          <i className="fas fa-check"></i>
                        ) : (
                          <i className="fas fa-shopping-cart"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotional-section text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="script-font display-5 mb-3">
                Celebrate life's special moments with our bespoke cakes and
                pastries!
              </h2>
              <p className="lead mb-4">
                From birthdays to weddings, anniversaries to celebrations, we
                create memorable moments with our delicious treats.
              </p>
              <button className="btn btn-outline-custom">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="public/highlight-1.jpg"
                alt="Our Products"
                className="img-fluid rounded mb-4"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="script-font display-5 mb-3">Our Products</h2>
              <p className="lead mb-4">
                We offer a wide variety of freshly baked goods, from traditional
                favorites to modern creations. Each product is made with premium
                ingredients and crafted with care.
              </p>
              <Link to="/shop" className="btn btn-primary-custom">
                Shop Now
              </Link>
              <div className="mt-4">
                <img
                  src="public/highlight-2.jpg"
                  alt="Mini Donuts"
                  className="img-fluid rounded"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Commitment */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="script-font display-5 mb-3">
                Quality & Commitment
              </h2>
              <p className="lead mb-4">
                We are committed to providing the highest quality products and
                exceptional service. Our team of skilled bakers uses only the
                finest ingredients and traditional techniques to create
                memorable experiences for our customers.
              </p>
              <button className="btn btn-primary-custom">Read More</button>
            </div>
            <div className="col-lg-6">
              <img
                src="public/Our_Recipies/postimg1.jpg"
                alt="Quality Dessert"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="script-font display-5 mb-3">Testimonials</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <div className="mb-4">
                  <i
                    className="fas fa-star text-warning"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="fas fa-star text-warning"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="fas fa-star text-warning"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="fas fa-star text-warning"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="fas fa-star text-warning"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-4 lead">
                    "To each and every one of you, thank you for your dedication
                    and hard work. I know that I can always count on you to
                    deliver the best possible results."
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Jane Smith</cite>
                  </footer>
                </blockquote>
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

export default Home;
