import React from 'react';
import Cell from './Cell';
import * as d3 from 'd3';
import '../stylesheets/Game.css';
import {getDefaultBoard} from '../defaultBoard';


export type cell = {
    water: number;
    grass: number;
    lava: number;
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
        //     board: Array(size).fill(0).map(() => {return Array.from({length:size},(): cell=> ({'water':0,'grass':0,'lava':0}))})
        // }
        this.state={
            board: getDefaultBoard(),
        }
    }

    editCellColor(row: number, column: number) {
        const board = this.state.board;
        console.log(row, column)
        if (board[row][column].grass === 10) {
            board[row][column] = {
                water: 10,
                grass: 0,
                lava: 0,
            }
        } else if (board[row][column].water === 10) {
            board[row][column] = {
                water: 0,
                grass: 0,
                lava: 10,
            }
        } else {
            board[row][column] = {
                water: 0,
                grass: 10,
                lava: 0,
            }
        }
        this.setState({
            board
        });
        this.colorBoard();
        console.log(board)
    }

    componentDidMount() {
        this.colorBoard()
    }

    getHexValue(r: number, g: number, b: number) {
        var hex = [
            Math.floor(r / (r + g + b) * 255).toString( 16 ),
            Math.floor(g / (r + g + b) * 255).toString( 16 ),
            Math.floor(b / (r + g + b) * 255).toString( 16 )
        ];
        if (hex[0].length === 1) hex[0] = "0" + hex[0];
        if (hex[1].length === 1) hex[1] = "0" + hex[1];
        if (hex[2].length === 1) hex[2] = "0" + hex[2];
        return "#" + hex.join( "" ).toUpperCase();
    }

    colorBoard() {
        let board: cell[] = [];
        this.state.board.forEach( row => {
            board = board.concat(row)
        });
        d3.selectAll(".cell")
        .data(board)
        .style("background-color",val => {return this.getHexValue(val.lava,val.grass,val.water)})
    }
    render() {
        return(
            <div className="GridContainer">
                {this.state.board.map((row,i) => {
                    return row.map((cell,j) => {
                        return <Cell key={i+j}row={i} column={j} func={this.editCellColor.bind(this)}/>
                    })
                })}
            </div>
        );
    }
}

export default Game;

