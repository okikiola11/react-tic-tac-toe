function Square(props) {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    const { onClick, value } = props;
    
    return (
      <button 
        className="square" 
        onClick={() => onClick()}
      >
        {value}
      </button>
    );
}

export default Square;