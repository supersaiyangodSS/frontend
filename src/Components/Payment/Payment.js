import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment">
      <h1>Payment Page</h1>
      <form className="payment-form">
        <div className="payment-form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="payment-form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input type="text" id="cardName" placeholder="John Doe" />
        </div>
        <div className="payment-form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" />
        </div>
        <div className="payment-form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" />
        </div>
        <button type="submit" className="payment-submit-button">CONFIRM</button>
      </form>
    </div>
  );
}

export default Payment;
