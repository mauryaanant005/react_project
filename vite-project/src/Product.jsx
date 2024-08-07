import "./Product.css";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from 'react-router-dom';

const Product = ({ id, title, image, price, description }) => {
  const [message, setMessage] = useState('');
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    addToCart({ id, title, image, price, description });
    setMessage('Added to cart');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="product1">
      <img src={image} alt="Product" className="product__image" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__description">{description}</p>
        <p className="product__price">
          <strong>₨{price}</strong>
        </p>
        <button className="product__button1" onClick={handleClick}>
          Add to Cart
        </button>
        {message && <p className="product__message">{message}</p>}
      </div>
    </div>
  );
};

export default Product;
