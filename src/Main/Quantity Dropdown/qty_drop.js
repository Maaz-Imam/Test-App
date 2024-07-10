import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function Qty_Dropdown({ onQuantityChange, pizzaIndex }) {
  const [selectedOption, setSelectedOption] = useState({ value: '1', label: '1' });

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];

  useEffect(() => {
    onQuantityChange(pizzaIndex, selectedOption.value);
  }, [selectedOption, pizzaIndex, onQuantityChange]);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <label htmlFor="quantity-select">Quantity:</label>
      <Select
        id="quantity-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="1"
      />
    </div>
  );
}

export default Qty_Dropdown;
