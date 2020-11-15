import React, { Component } from "react";
import Habbit from "./habit";

export default class Habbits extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.habits.map((habbit, i) => (
            <Habbit
              key={habbit.id}
              habbit={habbit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}
