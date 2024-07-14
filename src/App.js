import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Login from './Login/login';
import Signup from './Signup/Signup';
import Cart from './Cart/Cart';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App (){
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [bill, setBill] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const addCart = (id, title, img, size, qty, price) => {
        if (isNaN(price)) {
            alert('Not available');
            return;
        }
        
        addBill(price);
        const newCartItem = {'id': id, 'title': title, 'img': img, 'size': size, 'qty': qty, 'price': price};
    
        setCart(prevCart => {
            // Find the index of the existing item in the cart
            const existingItemIndex = prevCart.findIndex(item => item.id === newCartItem.id && item.size === newCartItem.size);
    
            if (existingItemIndex !== -1) {
                // If match is found, update the quantity and price of the existing item
                // Create a new array with the same items
                const updatedCart = [...prevCart];
                
                // Replace the existing item with a new object that has updated properties
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],  // Spread the existing properties
                    qty: Number(updatedCart[existingItemIndex].qty) + Number(newCartItem.qty),  // Update qty
                    price: Number(updatedCart[existingItemIndex].price) + Number(newCartItem.price)  // Update price
                };
                return updatedCart;  // Return the new array
            } else {
                // If no match is found, add the new item to the cart
                increment();
                return [...prevCart, newCartItem];
            }
        });
    };    

    const subCart = (id, title, img, size, qty, price) => {
        subBill(price);
        decrement();
        const deleteCartItem = {'id': id, 'title': title, 'img': img, 'size': size, 'qty': qty, 'price': price};
        const existingItemIndex = cart.findIndex(item => item.id === deleteCartItem.id && item.size === deleteCartItem.size);
        const newCart = [...cart.slice(0, existingItemIndex), ...cart.slice(existingItemIndex + 1)];
        setCart(newCart);
    }; 

    const addBill = (price) => {
        setBill(bill + price);
    }

    const subBill = (price) => {
        if (bill === 0) {
            return;
        }
        setBill(bill - price);
    }
    
    useEffect(() => {
        console.log("Updated cart:", cart);
    }, [cart]); // This will log whenever cart changes    

    return (    
        <Router>
            <Header count={count} />
            <Routes>
                <Route exact path="/" element={<Main addCart={addCart} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart cart={cart} bill={bill} addCart={addCart} subCart={subCart} />} />
            </Routes>
        </Router>
    )
}

export default App;