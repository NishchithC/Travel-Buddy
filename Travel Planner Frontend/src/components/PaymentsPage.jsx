import React, { useState } from 'react';

const PaymentsPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentDetails, setPaymentDetails] = useState({
    creditCard: { cardNumber: '', expiry: '', cvv: '', name: '' },
    debitCard: { cardNumber: '', expiry: '', cvv: '', name: '' },
    upi: { upiId: '' },
    paypal: { email: '' },
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (method, field, value) => {
    setPaymentDetails({
      ...paymentDetails,
      [method]: {
        ...paymentDetails[method],
        [field]: value,
      },
    });
  };

  const handleSubmit = async () => {
    const paymentData = {
      method: paymentMethod,
      details: paymentDetails[paymentMethod],
    };

    try {
      const response = await fetch('http://localhost:3000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Payment processed successfully!');
      } else {
        setMessage(`Payment failed: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: '#00796b' }}>Payment Options</h1>
      <div style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={inputStyle}
          >
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {paymentMethod === 'creditCard' && (
          <div>
            {/* Credit Card Fields */}
            {renderCreditCardFields()}
          </div>
        )}

        {paymentMethod === 'debitCard' && (
          <div>
            {/* Debit Card Fields */}
            {renderDebitCardFields()}
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div style={inputGroupStyle}>
            <label style={labelStyle}>UPI ID:</label>
            <input
              type="text"
              value={paymentDetails.upi.upiId}
              onChange={(e) => handleInputChange('upi', 'upiId', e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div style={inputGroupStyle}>
            <label style={labelStyle}>PayPal Email:</label>
            <input
              type="email"
              value={paymentDetails.paypal.email}
              onChange={(e) => handleInputChange('paypal', 'email', e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        <button onClick={handleSubmit} style={buttonStyle}>
          Submit Payment
        </button>

        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </div>
  );

  function renderCreditCardFields() {
    return (
      <>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Card Number:</label>
          <input
            type="text"
            value={paymentDetails.creditCard.cardNumber}
            onChange={(e) => handleInputChange('creditCard', 'cardNumber', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Expiry Date:</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={paymentDetails.creditCard.expiry}
            onChange={(e) => handleInputChange('creditCard', 'expiry', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>CVV:</label>
          <input
            type="text"
            value={paymentDetails.creditCard.cvv}
            onChange={(e) => handleInputChange('creditCard', 'cvv', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name on Card:</label>
          <input
            type="text"
            value={paymentDetails.creditCard.name}
            onChange={(e) => handleInputChange('creditCard', 'name', e.target.value)}
            style={inputStyle}
          />
        </div>
      </>
    );
  }

  function renderDebitCardFields() {
    return (
      <>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Card Number:</label>
          <input
            type="text"
            value={paymentDetails.debitCard.cardNumber}
            onChange={(e) => handleInputChange('debitCard', 'cardNumber', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Expiry Date:</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={paymentDetails.debitCard.expiry}
            onChange={(e) => handleInputChange('debitCard', 'expiry', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>CVV:</label>
          <input
            type="text"
            value={paymentDetails.debitCard.cvv}
            onChange={(e) => handleInputChange('debitCard', 'cvv', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name on Card:</label>
          <input
            type="text"
            value={paymentDetails.debitCard.name}
            onChange={(e) => handleInputChange('debitCard', 'name', e.target.value)}
            style={inputStyle}
          />
        </div>
      </>
    );
  }
};

// Styles
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#e0f7fa',
  padding: '30px',
};

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const inputGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const messageStyle = {
  marginTop: '20px',
  textAlign: 'center',
  color: '#00796b',
};

export default PaymentsPage;
