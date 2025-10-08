import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import Newsletter from '../components/Newsletter';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div>
        {/* Banner Section */}
        <section className="banner-section">
          <div className="container">
            <div className="banner-content text-center">
              <h1 className="banner-title">Cart</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Empty Cart */}
        <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-4">Your cart is empty</h2>
              <p className="text-muted mb-4">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/shop" className="btn btn-primary-custom">
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>

        <Newsletter />
      </div>
    );
  }

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Cart</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>QUANTITY</th>
                      <th>SUBTOTAL</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.mainImage}
                              alt={item.name}
                              className="me-3"
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                              }}
                            />
                            <div>
                              <h6 className="mb-1">{item.name}</h6>
                              <p className="text-muted mb-0">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center mx-2"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value) || 0
                                )
                              }
                              style={{ width: "60px" }}
                              min="0"
                            />
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <strong>
                            ${(item.price * item.quantity).toFixed(2)}
                          </strong>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Total */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Cart Total</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <span>SUBTOTAL</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>SHIPPING</span>
                    <span>Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4">
                    <strong>TOTAL</strong>
                    <strong>${getTotalPrice().toFixed(2)}</strong>
                  </div>

                  <div className="d-grid gap-2">
                    <Link to="/shop" className="btn btn-outline-secondary">
                      CONTINUE SHOPPING
                    </Link>
                    <button
                      type="button"
                      className="btn btn-primary-custom"
                      onClick={() => {
                        if (!isAuthenticated) {
                          // prompt login and redirect to signin
                          alert('Please sign in to proceed to checkout');
                          navigate('/signin');
                          return;
                        }
                        navigate('/checkout');
                      }}
                    >
                      CHECKOUT
                    </button>
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

export default Cart;
