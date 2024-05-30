// src/components/Home.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import productData from '../data/products';
import './Home.css';

const Home = () => {
    const { addToCart } = useContext(CartContext);
    return (
    <div>
      <Header />
      <main className="main-content">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-showcase">
            {Object.keys(productData).map((key) => (
              <div key={productData[key].id} className="product-card">
                <img src={productData[key].images[0]} alt={productData[key].name} className="product-image" />
                <h3><Link to={`/product/${productData[key].id}`}>{productData[key].name}</Link></h3>
                <p>{productData[key].description}</p>
                <p>{productData[key].price}</p>
                <button onClick={() => addToCart(productData[key])}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;