import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import Newsletter from "../components/Newsletter";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    streetAddress: "",
    apartment: "",
    city: user?.address?.city || "",
    state: user?.address?.state || "Karnataka",
    zipCode: user?.address?.zipCode || "",
    phone: user?.phone || "",
    email: user?.email || "",
    orderNotes: "",
    paymentMethod: "paypal",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order and redirect to payment gateway
    navigate("/payment");
  };

  if (items.length === 0) {
    return (
      <div>
        <section className="banner-section">
          <div className="container">
            <div className="banner-content text-center">
              <h1 className="banner-title">Checkout</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-4">Your cart is empty</h2>
              <p className="text-muted mb-4">
                Please add items to your cart before proceeding to checkout.
              </p>
              <a href="/shop" className="btn btn-primary-custom">
                Continue Shopping
              </a>
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
            <h1 className="banner-title">Checkout</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-5">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Billing Details */}
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="mb-0">Billing Details</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Street Address *</label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="House number and street name"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartments, suite, etc."
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Town / City *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">State *</label>
                        <select
                          className="form-select"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Zip Code *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone *</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email address *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="mb-0">Cart Totals</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span>SUBTOTAL</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>SHIPPING</span>
                      <span>Free</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>TOTAL</strong>
                      <strong>${getTotalPrice().toFixed(2)}</strong>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Payment Methods</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <strong>PAYPAL</strong>
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === "upi"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <strong>UPI PAYMENT</strong>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          value="google-pay"
                          checked={formData.paymentMethod === "google-pay"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                          <strong>GOOGLE PAY</strong>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary-custom w-100"
                    >
                      PLACE AN ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Checkout;
