import React from 'react';
import Square from './Square'

function Board(props) {
  const squaresValues = props.squaresValues;

  return (
    <ul className="board">
      {
        squaresValues.map((value, index) => {
          return (
            <Square value={value} 
                    key={index} 
                    onClick={() => props.onClick(index)} />
          );
        })
      }
    </ul>
  );
}

export default Board;