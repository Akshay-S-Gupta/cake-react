import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Newsletter from "../components/Newsletter";

const PaymentGateway = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (paymentMethod) => {
    setIsProcessing(true);
    setSelectedPayment(paymentMethod);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/payment-success"); // << Go to animated success page
    }, 2500);
  };

  if (items.length === 0) {
    return (
      <div>
        <section className="banner-section">
          <div className="container">
            <div className="banner-content text-center">
              <h1 className="banner-title">Payment</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-4">No items to pay for</h2>
              <p className="text-muted mb-4">
                Please add items to your cart before proceeding to payment.
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
            <h1 className="banner-title">Payment Gateway</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a
                    href="/checkout"
                    className="text-white text-decoration-none"
                  >
                    Checkout
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Payment
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Payment Content */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Order Summary */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
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
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                  }}
                                />
                                <span>{item.name}</span>
                              </div>
                            </td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total Amount:</strong>
                    <strong className="text-primary">
                      ${getTotalPrice().toFixed(2)}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Choose Payment Method</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* PayPal */}
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-2">
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <i
                              className="fab fa-paypal text-primary"
                              style={{ fontSize: "3rem" }}
                            ></i>
                          </div>
                          <h6 className="card-title">PayPal</h6>
                          <p className="card-text small text-muted">
                            Pay securely with your PayPal account
                          </p>
                          <button
                            className="btn btn-primary w-100"
                            onClick={() => handlePayment("PayPal")}
                            disabled={isProcessing}
                          >
                            {isProcessing && selectedPayment === "PayPal" ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                ></span>
                                Processing...
                              </>
                            ) : (
                              "Pay with PayPal"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* UPI */}
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-2">
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <i
                              className="fas fa-mobile-alt text-success"
                              style={{ fontSize: "3rem" }}
                            ></i>
                          </div>
                          <h6 className="card-title">UPI Payment</h6>
                          <p className="card-text small text-muted">
                            Pay using UPI apps like PhonePe, Google Pay, Paytm
                          </p>
                          <button
                            className="btn btn-success w-100"
                            onClick={() => handlePayment("UPI")}
                            disabled={isProcessing}
                          >
                            {isProcessing && selectedPayment === "UPI" ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                ></span>
                                Processing...
                              </>
                            ) : (
                              "Pay with UPI"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Google Pay */}
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-2">
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <i
                              className="fab fa-google-pay text-info"
                              style={{ fontSize: "3rem" }}
                            ></i>
                          </div>
                          <h6 className="card-title">Google Pay</h6>
                          <p className="card-text small text-muted">
                            Quick and secure payment with Google Pay
                          </p>
                          <button
                            className="btn btn-info w-100"
                            onClick={() => handlePayment("Google Pay")}
                            disabled={isProcessing}
                          >
                            {isProcessing &&
                            selectedPayment === "Google Pay" ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                ></span>
                                Processing...
                              </>
                            ) : (
                              "Pay with Google Pay"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Credit/Debit Card */}
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-2">
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <i
                              className="fas fa-credit-card text-warning"
                              style={{ fontSize: "3rem" }}
                            ></i>
                          </div>
                          <h6 className="card-title">Credit/Debit Card</h6>
                          <p className="card-text small text-muted">
                            Pay with Visa, MasterCard, or American Express
                          </p>
                          <button
                            className="btn btn-warning w-100"
                            onClick={() => handlePayment("Credit/Debit Card")}
                            disabled={isProcessing}
                          >
                            {isProcessing &&
                            selectedPayment === "Credit/Debit Card" ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                ></span>
                                Processing...
                              </>
                            ) : (
                              "Pay with Card"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="mt-4 p-3 bg-light rounded">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-shield-alt text-success me-3"></i>
                      <div>
                        <h6 className="mb-1">Secure Payment</h6>
                        <small className="text-muted">
                          Your payment information is encrypted and secure. We
                          never store your payment details.
                        </small>
                      </div>
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="mt-4 text-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => navigate("/checkout")}
                      disabled={isProcessing}
                    >
                      Back to Checkout
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

export default PaymentGateway;
