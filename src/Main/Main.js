import React, { useState, useEffect } from 'react';
import './Main.css';
import SizeDropdown from './Size Dropdown/size_drop';
import QtyDropdown from './Quantity Dropdown/qty_drop';
// import pizzaList from '../Pizza List/pizzaList.json';
import Modal from './Modal/Modal';
import axios from 'axios';

function Main({ addCart }) {

    const [pizzaList, setPizzaList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/pizzas`)
        .then(response => {
            setPizzaList(response.data);
            setPizzaSelections(response.data.map(() => ({ size: 'small', quantity: 1 })));
        })
        .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    // State to track which pizza's modal is open
    const [openPizzaId, setOpenPizzaId] = useState(null);

    // State to track sizes and quantities of each pizza
    const [pizzaSelections, setPizzaSelections] = useState([]);

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
            {pizzaList.map((pizza) => (
                <div className='Pizza-Card' key={pizza.id}>
                    <div className='Pizza-Card-Inner'>
                        <div className='Pizza-Card-Inner-Upper' onClick={() => handleOpenModal(pizza.id)}>
                            <h1>{pizza.title} {pizza.id}</h1>
                            <img src={pizza.img} alt={`${pizza.title}`} />
                        </div>
                        <div className='Options'>
                            <SizeDropdown handlePizzaSize={(size) => handlePizzaSize(size.value, pizza.id)} />
                            <QtyDropdown handlePizzaQty={(qty) => handlePizzaQty(qty.value, pizza.id)} />
                        </div>
                        <div className='Carting'>
                            <div>
                                <p>PRICE : {pizza.prices[pizzaSelections[pizza.id].size] * pizzaSelections[pizza.id].quantity} Rs/-</p>
                            </div>
                            <div>
                                <button type='button' onClick={() => addCart(pizza.id, pizza.title, pizza.img, pizzaSelections[pizza.id].size, pizzaSelections[pizza.id].quantity,pizza.prices[pizzaSelections[pizza.id].size] * pizzaSelections[pizza.id].quantity)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {openPizzaId !== null && (
                <Modal
                    handleCloseModal={handleCloseModal}
                    pizza={pizzaList[openPizzaId]}
                />
            )}
        </div>
    );
}

export default Main;
