import React, { Component } from "react";
import Habbit from "./habit";

export default class Habbits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habbit, i) => (
          <Habbit
            key={habbit.id}
            habbit={habbit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
