import React from 'react';
import './Square.css'; 
const Square = ({ value, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
