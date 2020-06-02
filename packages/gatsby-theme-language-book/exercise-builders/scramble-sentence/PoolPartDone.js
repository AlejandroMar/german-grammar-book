import React, { Component } from 'react';
import { PoolPartContainer as Container } from './PoolStyledComponents';

class Part extends Component {
  state = {};
  render() {
    const { part, index, lastIndex } = this.props;
    if (lastIndex === index) {
      /* add point at phrase end */
      return <Container>{part.content}.</Container>;
    }
    return <Container>{part.content}</Container>;
  }
}

export default Part;
