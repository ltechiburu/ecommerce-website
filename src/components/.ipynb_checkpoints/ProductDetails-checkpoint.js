import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Header from './Header';
import Footer from './Footer';
import productData from '../data/products';
import './ProductDetails.css';


const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = productData[id];
  
    const [mainImage, setMainImage] = useState(product.images[0]);

  if (!product) {
    return <div>Product not found</div>;
  }
    
  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="product-details">
            <div className="image-gallery">
              <img src={mainImage} alt={product.name} className="product-image" />
              <div className="thumbnail-container">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.name}
                    className="thumbnail"
                    onMouseEnter={() => setMainImage(image)}
                    onTouchStart={() => setMainImage(image)}

                  />
                ))}
              </div>
            </div>            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
              <ul className="product-bullet-points">
                {product.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p>Price: {product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
