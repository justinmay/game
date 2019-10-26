import React from 'react';
import Cell from './Cell';
import '../stylesheets/Game.css';

type cell = {
    terrain: "land" | "water" | "desert",
}

type GameProps = {
}

type GameState = {
    board: cell[][],
}

class Game extends React.Component<GameProps,GameState> {
    constructor(props: GameProps) {
        super(props)
        /** Variables */
        const size = 20; // the size of the map
        this.state={
            board: Array(size).fill(0).map(() => {return Array.from({length:size},(): cell=> ({'terrain':'water'}))})
        }
    }
    render() {
        return(
            <div className="GridContainer">
                {this.state.board.map(row => {
                    return row.map(cell => {
                        return <Cell/>
                    })
                })}
            </div>
        );
    }
}

export default Game;

