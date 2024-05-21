import React, { useState } from 'react';
import Square from './Square';
import './GameBoard.css'; // Import the CSS file

const GameBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    const newSquares = [...squares];
    if (calculateWinner(squares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        className={squares[i] ? (squares[i] === 'X' ? 'square x' : 'square o') : 'square'}
      />
    );
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="wrapper">
      <div className="status">{status}</div>
      <div className="game-board">
        {squares.map((square, i) => renderSquare(i))}
      </div>
      <button className="button" onClick={resetGame}>Reset Game</button>
      {winner && (
        <div className="popup">
          <div id="message">{`Player ${winner === 'X' ? '1' : '2'} won!`}</div>
          
        </div>
      )}
    </div>
  );
};

// Function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default GameBoard;
