import React from 'react';
import '../stylesheets/Cell.css';

type CellProps = {
}

type CellState = {
}

class Cell extends React.Component<CellProps,CellState> {
    render() {
      return <div className="cell"></div>;
    }
}

export default Cell;

