import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
 const { cart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    if (cart.length > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
  }, [cart]);


    return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">E-commerce Store</Link>
        </h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/products">Products</Link></li>
            <li>
              <Link to="/cart" className={`cart-button ${animate ? 'animate' : ''}`}>
                Cart ({cartCount})
              </Link>
            </li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
