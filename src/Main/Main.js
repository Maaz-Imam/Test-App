import React, { useState } from 'react';
import './Main.css';
import Size_Dropdown from './Size Dropdown/size_drop';
import Qty_Dropdown from './Quantity Dropdown/qty_drop';
import pizzaList from '../Pizza List/pizzaList.json';

function Main() {
    // State to hold selected quantities and sizes for each pizza
    const [quantities, setQuantities] = useState(Array(pizzaList.length).fill(1));
    const [sizes, setSizes] = useState(Array(pizzaList.length).fill({ value: 'small', price: 0 }));

    // Function to update the quantity of a specific pizza
    const handleQuantityChange = (index, quantity) => {
        const newQuantities = [...quantities];
        newQuantities[index] = parseInt(quantity);
        setQuantities(newQuantities);
    };

    // Function to update the size of a specific pizza
    const handleSizeChange = (index, size) => {
        const newSizes = [...sizes];
        newSizes[index] = size;
        setSizes(newSizes);
    };

    return (
        <div className="Main">
            {
                pizzaList.map((pizza, i) => (
                    <div className='Pizza-Card' key={i}>
                        <div className='Pizza-Card-Inner'>
                            <h1>{pizza.title}</h1>
                            <img src={pizza.img} alt={`${pizza.title}`} />
                            <div className='Options'>
                                <Size_Dropdown
                                    pizzaIndex={i}
                                    onSizeChange={handleSizeChange}
                                    sizes={sizes}
                                    pizzaSizes={pizza.sizes} // Pass the sizes and prices for this pizza
                                />
                                <Qty_Dropdown
                                    pizzaIndex={i}
                                    onQuantityChange={handleQuantityChange}
                                />
                            </div>
                            <div className='Carting'>
                                <div>
                                    <p>PRICE : {sizes[i].price * quantities[i]} Rs/-</p>
                                </div>
                                <div>
                                    <button type='submit'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Main;
