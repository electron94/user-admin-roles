'use client'
import React, { useState } from 'react';

const OneWayDataBinding = () => {
  // Example state
  const [name, setName] = useState('pallavi');

  const handleInputChange = (e) =>{
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Hello, {name}</h1>
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
  
};

export default OneWayDataBinding;