import React, { Component } from "react";

class Habbit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habbit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habbit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habbit);
  };

  render() {
    const { name, count } = this.props.habbit;
    return (
      <li className="habit">
        <span className="habbit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habbit;
