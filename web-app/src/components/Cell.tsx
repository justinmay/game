import React from 'react';
import '../stylesheets/Cell.css';

type CellProps = {
    row: number,
    column: number,
}

type CellState = {
}

class Cell extends React.Component<CellProps,CellState> {
    constructor(props: CellProps) {
        super(props)
        /** Variables */
        this.printID = this.printID.bind(this);
    }
    
    printID() {
        console.log(this.props.row,this.props.column);
    }
    render() {
      return <button className="cell" onClick={this.printID}></button>;
    }
}

export default Cell;

