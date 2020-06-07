import React, { Component } from 'react';
import { answer } from './input.module.css';

class InputComp extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const displayAnswer = this.props.answer === this.state.inputValue;

    return displayAnswer ? (
      <span className={answer}>{this.props.answer}</span>
    ) : (
      <label htmlFor="fill-in">
        <input
          type="text"
          name="fill-in"
          placeholder={this.props.root}
          value={this.state.inputValue}
          onChange={this.handleChange}
          size={this.props.answer.length}
        />
      </label>
    );
  }
}

export default InputComp;
