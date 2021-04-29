import React from "react";
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
      </div>
    );
  }
}

export default Board