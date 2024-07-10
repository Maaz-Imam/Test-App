import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './size_drop.css';

function Size_Dropdown({ pizzaIndex, onSizeChange, pizzaSizes }) {
  const [selectedOption, setSelectedOption] = useState({ value: 'small', price: pizzaSizes.small });

  const options = [
    { value: 'small', label: 'Small', price: pizzaSizes.small },
    { value: 'medium', label: 'Medium', price: pizzaSizes.medium },
    { value: 'large', label: 'Large', price: pizzaSizes.large },
  ];

  useEffect(() => {
    onSizeChange(pizzaIndex, selectedOption);
  }, [selectedOption, pizzaIndex, onSizeChange]);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <label htmlFor="variant-select">Variants:</label>
      <Select
        id="variant-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Small"
      />
    </div>
  );
};

export default Size_Dropdown;
