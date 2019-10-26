import React from 'react';
import Cell from './Cell';
import * as d3 from 'd3';
import '../stylesheets/Game.css';
import {getDefaultBoard} from '../defaultBoard';


export type cell = {
    terrain: "land" | "water" | "desert" | "lava",
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
        // const size = 20; // the size of the map
        // this.state={
        //     board: Array(size).fill(0).map(() => {return Array.from({length:size},(): cell=> ({'terrain':'land'}))})
        // }
        this.state={
            board: getDefaultBoard()
        }
    }

    componentDidMount() {
        this.colorBoard()
        console.log(this.state.board)
    }

    colorBoard() {
        let board: cell[] = [];
        this.state.board.forEach( row => {
            board = board.concat(row)
        });
        d3.selectAll(".cell")
        .data(board)
        .style("background-color",val => {return val.terrain === "water" ? "#00F" : val.terrain === "land" ? "#FFF" : val.terrain === "lava" ? "#F00" : "#FF0"})
    }
    render() {
        return(
            <div className="GridContainer">
                {this.state.board.map((row,i) => {
                    return row.map((cell,j) => {
                        return <Cell key={i+j}row={i} column={j}/>
                    })
                })}
            </div>
        );
    }
}

export default Game;

