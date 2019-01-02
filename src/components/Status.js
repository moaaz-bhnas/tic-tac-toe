import React from 'react';

function Status(props) {
  const {winner, xIsNext} = props;
  const nextPlayer = xIsNext ? 'X' : 'O';
  const status = winner ? `${winner} won!` : `Next player: ${nextPlayer}`;

  return (
    <p className="status">
      {status}
    </p>
  );
}

export default Status;