import React, { /*useState,*/ useEffect, useContext } from 'react';
// import axios from 'axios';
import CartContext from './CartContext';
import pizzaList from '../../Data/Pizza List/pizzaList.json';
import './Cart.css';

function Cart() {
  const { cart, bill, addCart, subCart } = useContext(CartContext);

  // const [pizzaList, setPizzaList] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/pizzas`)
  //   .then(response => {
  //       setPizzaList(response.data);
  //   })
  //   .catch(error => console.error('Error fetching pizzas:', error));
  // }, []);

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
      {cart.map((cartItem, i) => {
        // const pizzaPrice = pizzaList.find(pizzaPrice => pizzaPrice.id === cartItem.id).prices.small;
        const pizzaPrice = pizzaList[cartItem.id].prices[cartItem.size];
        return (
          <div className='CartItem' key={i}>
            <div className='CartItemDetails'>
              <h2>{cartItem.title} [{cartItem.size}]</h2>
              <p>Price: {cartItem.qty} * {pizzaPrice} = {cartItem.price}</p>
              <p>Quantity: 
                <button type='button' onClick={() => addCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, -1, -(pizzaPrice))}>-</button> 
                {cartItem.qty} 
                <button type='button' onClick={() => addCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, 1, pizzaPrice)}>+</button>
              </p>
            </div>
            <img src={cartItem.img} alt={cartItem.title} className='CartItemImg' />
            <div className='CartItemQtyChanger'>
              <button type='button' className='delete' onClick={() => subCart(cartItem.id, cartItem.title, cartItem.img, cartItem.size, cartItem.qty, cartItem.price)}>🗑</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;