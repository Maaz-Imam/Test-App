import React, { useState } from 'react';
import './Main.css';
import Size_Dropdown from './Size Dropdown/size_drop';
import Qty_Dropdown from './Quantity Dropdown/qty_drop';
import pizzaList from '../Pizza List/pizzaList.json';
import Modal from './Modal/Modal';

function Main({ addCart }) {
    // State to track which pizza's modal is open
    const [openPizzaId, setOpenPizzaId] = useState(null);

    // State to track sizes and quantities of each pizza
    const [pizzaSelections, setPizzaSelections] = useState(
        pizzaList.map(() => ({ size: 'small', quantity: 1 }))
    );

    // Function to open the modal for a specific pizza
    const handleOpenModal = (id) => {
        console.log(id);
        setOpenPizzaId(id);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setOpenPizzaId(null);
    };

    const handlePizzaSize = (size, index) => {
        const newSelections = [...pizzaSelections];
        newSelections[index].size = size;
        setPizzaSelections(newSelections);
    };

    const handlePizzaQty = (qty, index) => {
        const newSelections = [...pizzaSelections];
        newSelections[index].quantity = qty;
        setPizzaSelections(newSelections);
    };

    return (
        <div className="Main">
            {pizzaList.map((pizza, i) => (
                <div className='Pizza-Card' key={i}>
                    <div className='Pizza-Card-Inner'>
                        <div className='Pizza-Card-Inner-Upper' onClick={() => handleOpenModal(i)}>
                            <h1>{pizza.title}</h1>
                            <img src={pizza.img} alt={`${pizza.title}`} />
                        </div>
                        <div className='Options'>
                            <Size_Dropdown handlePizzaSize={(size) => handlePizzaSize(size.value, i)} />
                            <Qty_Dropdown handlePizzaQty={(qty) => handlePizzaQty(qty.value, i)} />
                        </div>
                        <div className='Carting'>
                            <div>
                                <p>PRICE : {pizza.prices[pizzaSelections[i].size] * pizzaSelections[i].quantity} Rs/-</p>
                            </div>
                            <div>
                                <button type='button' onClick={() => addCart(i, pizza.title, pizza.img, pizzaSelections[i].size, pizzaSelections[i].quantity,pizza.prices[pizzaSelections[i].size] * pizzaSelections[i].quantity)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {openPizzaId !== null && (
                <Modal
                    setIsOpen={handleCloseModal}
                    pizza={pizzaList[openPizzaId]}
                />
            )}
        </div>
    );
}

export default Main;
