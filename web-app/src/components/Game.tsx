import React from 'react';
import Cell from './Cell';
import '../stylesheets/Game.css';

type cell = {
    terrain: string,
}

type GameProps = {
}

type GameState = {
    board: cell[][],
}

class Game extends React.Component<GameProps,GameState> {
    constructor(props: GameProps) {
        super(props)
        this.state={
            board: Array(40).fill(0).map(() => {return new Array(this.state !== undefined? this.state.size: 40).fill(cell)})
        }
    }
    render() {
      return(
          <div className="GridContainer">
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
          </div>
      );
    }
}

export default Game;

