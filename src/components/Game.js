import React, { Component } from 'react';
import Board from './Borad'
import Status from './Status'
import History from './History'

class Game extends Component {
  state = {
    history: [
      {
        squaresValues: Array(9).fill(null)
      }
    ],
    stepNum: 0,
    xIsNext: true
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNum+1);
    const squaresValues = history[history.length-1].squaresValues.slice();

    if (this.determineWinner(squaresValues) || squaresValues[i]) {
      return;
    }
    
    squaresValues[i] = (this.state.xIsNext) ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squaresValues: squaresValues
      }]),
      xIsNext: !this.state.xIsNext,
      stepNum: history.length
    });
  }

  determineWinner = squaresValues => {
    for (let i = 0; i < squaresValues.length; i += 3) { // Horizontal
      if (squaresValues[i] && (squaresValues[i] === squaresValues[i+1]) && (squaresValues[i] === squaresValues[i+2])) {
        return (squaresValues[i] === 'X') ? 'X' : 'O';
      }
    }
    for (let i = 0; i < 3; i++) { // Vertical
      if (squaresValues[i] && (squaresValues[i] === squaresValues[i+3]) && (squaresValues[i] === squaresValues[i+6])) {
        return (squaresValues[i] === 'X') ? 'X' : 'O';
      }
    }
    if (squaresValues[0] && (squaresValues[0] === squaresValues[4]) && (squaresValues[0] === squaresValues[8])) { // (\)
      return (squaresValues[0] === 'X') ? 'X' : 'O';
    } else if (squaresValues[2] && (squaresValues[2] === squaresValues[4]) && (squaresValues[2] === squaresValues[6])) { // (/)
      return (squaresValues[2] === 'X') ? 'X' : 'O';
    }
  }

  jumpTo = stepNum => {
    this.setState({
      stepNum,
      xIsNext: (stepNum % 2) === 0
    })
  }

  render() {
    const {history, xIsNext} = this.state;
    const current = history[this.state.stepNum].squaresValues;
    const winner = this.determineWinner(current);

    return (
      <div className="game">
        <Status winner={winner} 
                xIsNext={xIsNext} />
        <Board squaresValues={current}
               onClick={i => this.handleClick(i)} />
        <History history={history}
                 onClick={stepNum => this.jumpTo(stepNum)}/>
      </div>
    );
  }
}

export default Game;