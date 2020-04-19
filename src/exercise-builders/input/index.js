import React, { Component } from "react"
import { answer } from "./input.module.css"

class InputComp extends Component {
  state = {
    inputValue: "",
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    const answerText = () => {
      if (this.props.answer === this.state.inputValue) {
        return <span className={answer}>{this.props.answer}</span>
      } else {
        return (
          <label htmlFor="fill-in">
            <input
              type="text"
              name="fill-in"
              placeholder={this.props.root}
              value={this.state.inputValue}
              onChange={this.handleChange}
              size={this.props.root.length}
            />
          </label>
        )
      }
    }

    return <>{answerText()}</>
  }
}

export default InputComp
