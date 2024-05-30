import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Header from './Header';
import Footer from './Footer';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value);
    updateQuantity(productId, quantity);
  };
    const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };
  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>Price: {item.price}</p>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(event) => handleQuantityChange(item.id, event)}
                      />
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h3>Subtotal: ${calculateSubtotal()}</h3>
                <Link to="/checkout" className="checkout-button">Continue to Checkout</Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Cart;
