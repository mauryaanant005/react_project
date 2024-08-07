import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css'; 
import { useNavigate } from 'react-router-dom';// Create a separate CSS file for styling if needed

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleClick1() {
    navigate('/Home');
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart__list">
          {cart.map((item, index) => (
            <li key={index} className="cart__item">
              <img src={item.image} alt={item.title} className="cart__image" />
              <div className="cart__details">
                <p className="cart__title">{item.title}</p>
                <p className="cart__price">₨{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
       <button className="product__button" onClick={handleClick1}>Go to Home Page →</button>
    </div>
  );
};

export default Cart;

