// PaymentSuccess.js
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [showContent, setShowContent] = useState(false);
  const reference = searchParams.get('reference');

  useEffect(() => {
    // Add animation delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container">
      <div className={`success-card ${showContent ? 'show' : ''}`}>

        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="order-details">
          <div className="detail-item">
            <span className="detail-label">Transaction ID:</span>
            <span className="detail-value">{reference}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status:</span>
            <span className="detail-value success">Completed</span>
          </div>
        </div>

        <div className="success-actions">
          <Link to="/" className="action-button view-order">
            View Order
          </Link>
          <Link to="/" className="action-button continue-shopping">
            Continue Shopping
          </Link>
        </div>

        <div className="support-info">
          <p>Need help? Contact our support team</p>
          <a href="mailto:support@example.com" className="support-link">
            pratyushsharma2374@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;