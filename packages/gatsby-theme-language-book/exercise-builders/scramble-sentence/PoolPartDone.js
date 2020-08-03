import React from 'react';
import { PoolPartContainer as Container } from './PoolStyledComponents';

const Part = ({ index, lastIndex, part }) => {
  if (lastIndex === index) {
    /* add point at phrase end */
    return <Container>{part.content}.</Container>;
  }
  return <Container>{part.content}</Container>;
};

export default Part;
