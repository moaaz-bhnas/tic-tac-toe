import React from 'react';

function Square(props) {
  return (
    <li className="square"
        onClick={props.onClick}>
      {props.value}
    </li>
  );
}

export default Square;