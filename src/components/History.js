import React from 'react';
import Step from './Step';

function History(props) {
  const history = props.history;

  return (
    <ol className="history">
      {
        history.map((step, stepNum) => {
          return <Step stepNum={stepNum} 
                       key={stepNum} 
                       onClick={() => props.onClick(stepNum)} />
        })
      }
    </ol>
  );
}

export default History;