import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, updateCart } from '../../ReduxMaterial/StateSlicers/cartSlice';
import { addBill } from '../../ReduxMaterial/StateSlicers/billSlice';
import { increment } from '../../ReduxMaterial/StateSlicers/counterSlice';
import { setPizzaSelections } from '../../ReduxMaterial/StateSlicers/pizzaListSlice';
import './Main.css';
import SizeDropdown from './Size Dropdown/size_drop';
import QtyDropdown from './Quantity Dropdown/qty_drop';
import Modal from './Modal/Modal';
import pizzaFetcher from '../../API/pizzaFetcher';

function Main() {
    const cart = useSelector((state) => state.cart.value)
    const pizzaList = useSelector((state) => state.pizzaList.list)
    const pizzaSelections = useSelector((state) => state.pizzaList.selections)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(pizzaFetcher());
    }, [dispatch]);


    const [openPizzaId, setOpenPizzaId] = useState(null);

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
        newSelections[index] = { ...newSelections[index], size };
        dispatch(setPizzaSelections(newSelections));
    };
    
    const handlePizzaQty = (qty, index) => {
        const newSelections = [...pizzaSelections];
        newSelections[index] = { ...newSelections[index], quantity: qty };
        dispatch(setPizzaSelections(newSelections));
    };
    
    const handleCart = (id, title, img, size, qty, price) => {
        if (isNaN(price)) {
            alert('Not available');
            return;
        }

        dispatch(addBill(price));

        const existingItem = cart.find((cartItem) => cartItem.id === id && cartItem.size === size);
        if (existingItem){
            dispatch(updateCart({id: id, size: size, qty: qty, price: price}));
        }
        else {
            dispatch(increment());
            const newCartItem = {'id': id, 'title': title, 'img': img, 'size': size, 'qty': qty, 'price': price}
            dispatch(addCart(newCartItem));
        }
    };

    return (
        <div className="Main">
            {pizzaList.map((pizza, index) => (
                <div className='Pizza-Card' key={pizza.id}>
                    <div className='Pizza-Card-Inner'>
                        <div className='Pizza-Card-Inner-Upper' onClick={() => handleOpenModal(index)}>
                            <h1>{pizza.title}</h1>
                            <img src={pizza.img} alt={`${pizza.title}`} />
                        </div>
                        <div className='Options'>
                            <SizeDropdown handlePizzaSize={(size) => handlePizzaSize(size.value, index)} />
                            <QtyDropdown handlePizzaQty={(qty) => handlePizzaQty(qty.value, index)} />
                        </div>
                        <div className='Carting'>
                            <div>
                                <p>PRICE : {pizza.prices[pizzaSelections[index].size] * pizzaSelections[index].quantity} Rs/-</p>
                            </div>
                            <div>
                                <button type='button' onClick={() => handleCart(index, pizza.title, pizza.img, pizzaSelections[index].size, pizzaSelections[index].quantity,pizza.prices[pizzaSelections[index].size] * pizzaSelections[index].quantity)}>ADD TO CART</button>
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
