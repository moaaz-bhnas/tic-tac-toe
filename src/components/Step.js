import React from 'react';

function Step(props) {
  const stepNum = props.stepNum;
  const value = stepNum ? `Go to move #${stepNum}` 
                        : 'Go to game start';

  return (
    <li className="step">
      <button onClick={props.onClick}>
        {value}
      </button>
    </li>
  );
}

export default Step;

// Go to game start 
// Go to move #1