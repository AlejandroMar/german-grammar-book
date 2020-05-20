import React, { Component } from "react";
import PoolPartDone from "./PoolPartDone";
import { Container, PoolPartList } from "./PoolStyledComponents";

class Pool extends Component {
  state = {};
  render() {
    const { phrase, pool } = this.props;
    const lastIndex = phrase.length - 1;
    return (
      <Container done={pool.done.correct}>
        <PoolPartList done={pool.done.correct}>
          {phrase.map((part, index) => (
            <PoolPartDone
              part={part}
              index={index}
              key={part.id}
              lastIndex={lastIndex}
            />
          ))}
        </PoolPartList>
      </Container>
    );
  }
}

export default Pool;
