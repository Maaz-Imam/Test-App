import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Admin.css';
import pizzaFetcher from '../../API/pizzaFetcher';
import pizzaAdder from '../../API/pizzaAdder';
import pizzaDeleter from '../../API/pizzaDeleter';

function Admin() {
    const pizzaList = useSelector((state) => state.pizzaList.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pizzaFetcher());
    }, [dispatch]);


    const [newPizza, setNewPizza] = useState({
        id: '',
        title: '',
        img: '',
        prices: { small: 0, medium: 0, large: 0 },
        description: ''
    });

    const [pizzaId, setPizzaId] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value
        });
    };

    const handlePriceChange = (size, value) => {
        setNewPizza({
            ...newPizza,
            prices: {
                ...newPizza.prices,
                [size]: Number(value)
            }
        });
    };

    const addPizza = () => {
        const newPizzaWithId = {
            ...newPizza,
            id: String(pizzaList && pizzaList.length > 0 ? Number(pizzaList[pizzaList.length - 1].id) + 1 : 0)
        };
        dispatch(pizzaAdder(newPizzaWithId));
        setNewPizza({ id: '', title: '', img: '', prices: { small: 0, medium: 0, large: 0 }, description: '' });
    };
    

    const delPizza = () => {
        if (pizzaId) {
            console.log('del: ',pizzaId);
            dispatch(pizzaDeleter(pizzaId));
            setPizzaId(''); // Clear input after deletion
        }
    };

    const handleInputChange = (e) => {
        console.log('change: ',pizzaId);
        setPizzaId(e.target.value);
    };

    return (
        <div className="Admin">
            <div className="New-Pizza-Form">
                <input
                    type="text"
                    name="title"
                    value={newPizza.title}
                    onChange={handleChange}
                    placeholder="Pizza Title"
                />
                <input
                    type="text"
                    name="img"
                    value={newPizza.img}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <input
                    type="number"
                    name="small"
                    value={newPizza.prices.small}
                    onChange={(e) => handlePriceChange('small', e.target.value)}
                    placeholder="Small Price"
                />
                <input
                    type="number"
                    name="medium"
                    value={newPizza.prices.medium}
                    onChange={(e) => handlePriceChange('medium', e.target.value)}
                    placeholder="Medium Price"
                />
                <input
                    type="number"
                    name="large"
                    value={newPizza.prices.large}
                    onChange={(e) => handlePriceChange('large', e.target.value)}
                    placeholder="Large Price"
                />
                <textarea
                    name="description"
                    value={newPizza.description}
                    onChange={handleChange}
                    placeholder="Description"
                ></textarea>
                <button onClick={addPizza}>Add Pizza</button>
            </div>
            <div className="Delete-Pizza-Form">
                <input
                    type="number"
                    value={pizzaId}
                    onChange={handleInputChange}
                    placeholder="Enter Pizza ID"
                />
                <button onClick={delPizza}>Delete Pizza</button>
            </div>
            {pizzaList.map((pizza) => (
                <div className='Pizza-Card' key={pizza.id}>
                    <div className='Pizza-Card-Inner'>
                        <div className='Pizza-Card-Inner-Upper'>
                            <h1>{pizza.title} ID: {pizza.id}</h1>
                            <img src={pizza.img} alt={`${pizza.title}`} />
                        </div>
                        <div className='Carting'>
                            <h3>Prices:</h3>
                            <ul>
                                {Object.entries(pizza.prices).map(([size, price]) => (
                                    <li key={size}>
                                        {size}: {price} Rs/-
                                    </li>
                                ))}
                            </ul>                           
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Admin;
