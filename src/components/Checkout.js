// src/components/Checkout.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from './Header';
import Footer from './Footer';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="container">
          <h2>Checkout</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="checkout-content">
              <div className="checkout-items">
                {cart.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <img src={item.image} alt={item.name} className="checkout-item-image" />
                    <div className="checkout-item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="checkout-summary">
                <h3>Total: ${calculateTotal()}</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card">Credit Card:</label>
                    <input type="text" id="card" name="card" required />
                  </div>
                  <button type="submit" className="place-order-button">Place Order</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
