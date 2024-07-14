import React, { useEffect } from 'react';
import './Cart.css';
import pizzaList from '../Pizza List/pizzaList.json';

function Cart({ cart, bill, addCart, subCart }) {
  useEffect(() => {
    // Filter out items with a price of 0 and call subCart for each
    cart.forEach(cartItem => {
      if (cartItem.price === 0) {
        subCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, cartItem.qty, cartItem.price);
      }
    });
  }, [cart, subCart]);

  if (cart.length === 0) {
    return (
      <h1 className='emptyCart'>Cart is Empty!</h1>
    );
  }

  return (
    <div className='Cart'>
      <h2>Total Amount: {bill} Rs/-</h2>
      {cart.map((cartItem, i) => (
        <div className='CartItem' key={i}>
          <div className='CartItemDetails'>
            <h2>{cartItem.title} [{cartItem.size}]</h2>
            <p>Price: {cartItem.qty} * {pizzaList[cartItem.id].prices[cartItem.size]} = {cartItem.price}</p>
            <p>Quantity: 
              <button type='button' onClick={() => addCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, -1, -(pizzaList[cartItem.id].prices[cartItem.size]))}>-</button> 
              {cartItem.qty} 
              <button type='button' onClick={() => addCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, 1, pizzaList[cartItem.id].prices[cartItem.size])}>+</button>
            </p>
          </div>
          <img src={cartItem.img} alt={cartItem.title} className='CartItemImg' />
          <div className='CartItemQtyChanger'>
            <button type='button' className='delete' onClick={() => subCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, cartItem.qty, cartItem.price)}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;