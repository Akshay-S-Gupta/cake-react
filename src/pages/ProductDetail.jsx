import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../services/database';
import { useCart } from '../context/CartContext';
import Newsletter from '../components/Newsletter';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Product not found</h2>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} ${product.name}(s) added to cart!`);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <section className="py-3 bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shop" className="text-decoration-none">Pages</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Shop</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6">
              <div className="row">
                {/* Thumbnail Gallery */}
                <div className="col-3">
                  <div className="d-flex flex-column gap-2">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className={`img-fluid rounded cursor-pointer ${selectedImage === index ? 'border border-primary' : ''}`}
                        style={{height: '80px', objectFit: 'cover'}}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>
                {/* Main Image */}
                <div className="col-9">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <h1 className="script-font h2 mb-3">{product.name}</h1>
              
              {/* Rating */}
              <div className="d-flex align-items-center mb-3">
                <div className="me-2">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}`}
                    ></i>
                  ))}
                </div>
                <span className="text-muted">({product.rating})</span>
              </div>

              {/* Price */}
              <div className="mb-3">
                {product.originalPrice && (
                  <span className="original-price me-2">${product.originalPrice.toFixed(2)}</span>
                )}
                <span className="product-price h4">${product.price.toFixed(2)}</span>
              </div>

              {/* Description */}
              <p className="text-muted mb-4">{product.description}</p>

              {/* Stock */}
              <p className="mb-3">
                <strong>Availability:</strong> {product.stock} in stock
              </p>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center mb-4">
                <label className="me-3"><strong>Quantity:</strong></label>
                <div className="d-flex align-items-center border rounded">
                  <button 
                    className="btn btn-outline-secondary border-0"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control text-center border-0"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                    style={{width: '60px'}}
                    min="1"
                    max={product.stock}
                  />
                  <button 
                    className="btn btn-outline-secondary border-0"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 mb-4">
                <button 
                  className="btn btn-primary-custom"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fas fa-heart"></i>
                </button>
              </div>

              {/* Category */}
              <p className="mb-3">
                <strong>Category:</strong> {product.category}
              </p>

              {/* Share */}
              <div className="d-flex align-items-center">
                <strong className="me-3">Share:</strong>
                <div className="social-icons">
                  <a href="#" className="text-decoration-none me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-decoration-none me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-decoration-none me-2">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="text-decoration-none me-2">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="text-decoration-none me-2">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="row mt-5">
            <div className="col-12">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                  >
                    DESCRIPTION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
                    onClick={() => setActiveTab('additional')}
                  >
                    ADDITIONAL INFORMATION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`}
                    onClick={() => setActiveTab('shipping')}
                  >
                    SHIPPING & RETURN
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    REVIEWS
                  </button>
                </li>
              </ul>

              <div className="tab-content p-4 border border-top-0">
                {activeTab === 'description' && (
                  <div>
                    <h4>Product Description</h4>
                    <p className="text-muted">{product.description}</p>
                    <p className="text-muted">{product.additionalInfo}</p>
                    <ul className="text-muted">
                      <li>Made with premium ingredients</li>
                      <li>Fresh daily preparation</li>
                      <li>Perfect for any occasion</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'additional' && (
                  <div>
                    <h4>Additional Information</h4>
                    <p className="text-muted">{product.additionalInfo}</p>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td><strong>Weight</strong></td>
                          <td>0.5 kg</td>
                        </tr>
                        <tr>
                          <td><strong>Dimensions</strong></td>
                          <td>10 x 10 x 5 cm</td>
                        </tr>
                        <tr>
                          <td><strong>Ingredients</strong></td>
                          <td>Flour, Sugar, Eggs, Butter, Vanilla</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div>
                    <h4>Shipping & Return Information</h4>
                    <p className="text-muted">{product.shippingInfo}</p>
                    <ul className="text-muted">
                      <li>Free shipping on orders over $50</li>
                      <li>Standard delivery: 2-3 business days</li>
                      <li>Express delivery: 1-2 business days</li>
                      <li>30-day return policy</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h4>Customer Reviews</h4>
                    {product.reviews.length > 0 ? (
                      product.reviews.map(review => (
                        <div key={review.id} className="border-bottom pb-3 mb-3">
                          <div className="d-flex align-items-center mb-2">
                            <strong className="me-3">{review.name}</strong>
                            <div>
                              {[...Array(5)].map((_, i) => (
                                <i 
                                  key={i} 
                                  className={`fas fa-star ${i < review.rating ? 'text-warning' : 'text-muted'}`}
                                ></i>
                              ))}
                            </div>
                          </div>
                          <p className="text-muted">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">No reviews yet. Be the first to review this product!</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="script-font h2 mb-4 text-center">RELATED PRODUCTS</h3>
              <div className="row">
                {products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
                  <div key={relatedProduct.id} className="col-lg-3 col-md-6 mb-4">
                    <div className="card product-card h-100">
                      <img 
                        src={relatedProduct.mainImage} 
                        className="card-img-top product-image" 
                        alt={relatedProduct.name}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title product-title">{relatedProduct.name}</h5>
                        <p className="card-text product-price">${relatedProduct.price.toFixed(2)}</p>
                        <Link 
                          to={`/product/${relatedProduct.id}`} 
                          className="btn btn-outline-primary btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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

export default ProductDetail;
