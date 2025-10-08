import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/PaymentSuccess.css';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [showDelivery, setShowDelivery] = useState(false);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelivery(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center py-5 payment-success-bg"
      style={{
        minHeight: "80vh",
        position: "relative",
        background: "white"
      }}
    >
      
      <div className="success-animation mb-4">
        <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ display: 'block' }}>
          <circle cx="100" cy="100" r="95" fill="#e6ffe6" stroke="#28a745" strokeWidth="8" />
          <polyline
            points="60,120 90,150 150,80"
            fill="none"
            stroke="#28a745"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate attributeName="points" dur="0.9s" fill="freeze"
              from="100,120 100,120 100,120"
              to="60,120 90,150 150,80" />
          </polyline>
        </svg>
      </div>

      <h2 className="text-success mb-3">Payment Successful!</h2>
      <p className="mb-3">Your order has been placed. Delivery is on the way!</p>

      
      {showDelivery && (
        <div className="delivery-image-container mb-5">
          <img
            src="/images/delivery2.png"
            alt="Delivery Guy"
            className="delivery-image"
          />
        </div>
      )}

      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Back</button>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
