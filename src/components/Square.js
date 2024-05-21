import React from 'react';
import './Square.css'; // Import the CSS file

const Square = ({ value, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
