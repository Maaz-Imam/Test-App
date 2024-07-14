import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './size_drop.css';

function Size_Dropdown({ handlePizzaSize }) {

  const options = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  return (
    <div>
      <label htmlFor="variant-select">Variants:</label>
      <Select
        id="variant-select"
        options={options}
        onChange={handlePizzaSize}
        placeholder="small"
      />
    </div>
  );
};

export default Size_Dropdown;
