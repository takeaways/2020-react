import React, { Component } from "react";

export default class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
