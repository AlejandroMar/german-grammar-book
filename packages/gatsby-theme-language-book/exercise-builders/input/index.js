import React, { Component } from 'react';
import { answer } from './input.module.css';
import { Input as MuInput } from '@material-ui/core';
import styled from 'styled-components';

const Input = styled(MuInput)`
  width: ${props => (props.size + 2) * 8 + 'px'};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: inherit;
`;

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
        <Input
          type="text"
          name="fill-in"
          placeholder={this.props.root}
          value={this.state.inputValue}
          onChange={this.handleChange}
          size={this.props.answer.length}
          autoComplete={false}
          variant="outlined"
        />
      </label>
    );
  }
}

export default InputComp;
