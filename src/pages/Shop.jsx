import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../services/database';
import { useCart } from '../context/CartContext';
import Newsletter from '../components/Newsletter';
import './css/Shop.css';


const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const { addToCart, isInCart } = useCart();

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleCartClick = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Shop</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-5">
        <div className="container">
          {/* Filters and Sorting */}
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="mb-0 text-muted">
                Showing 1-{sortedProducts.length} of {products.length} results
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <select 
                  className="form-select" 
                  style={{maxWidth: '200px'}}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                  <option value="name">Sort by name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row">
            {sortedProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
       <div className="card product-card h-100">
            <div className="product-image-wrapper position-relative">
              <img
                src={product.mainImage}
                className="card-img-top product-image"
                alt={product.name}
              />
              {/* Floating cart/tick icon */}
              <button
                className={`cart-icon-btn${isInCart(product.id) ? ' added' : ''}`}
                type="button"
                onClick={() => addToCart(product)}
                aria-label={isInCart(product.id) ? "Added to cart" : "Add to cart"}
              >
                <img
                  src={isInCart(product.id)
                    ? '/images/tick.png'
                    : '/images/cart.png'}
                  alt={isInCart(product.id) ? "Added to cart" : "Add to cart"}
                  className="cart-icon-img"
                />
              </button>
            </div>
            <div className="card-body text-center d-flex flex-column">
              <div className="product-info">
                <h5 className="card-title product-title">{product.name}</h5>
                <p className="card-text product-price">
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  )}
                  ${product.price.toFixed(2)}
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}`}
                    ></i>
                  ))}
                  <span className="ms-2 text-muted">({product.rating})</span>
                </div>
              </div>
          <div className="d-flex gap-2 justify-content-center">
                <Link 
                  to={`/product/${product.id}`} 
                  className="btn btn-outline-primary btn-sm flex-fill"
                >
                  View Details
                </Link>
                {/* Cart/tick button REMOVED from here */}
              </div>
            </div>
          </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Shop;
