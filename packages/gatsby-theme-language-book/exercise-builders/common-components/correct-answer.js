import styled from 'styled-components';
import { Box } from '@material-ui/core';
import React from 'react';

const Comp = styled(Box)`
  color: ${({ theme }) => theme.palette.success.main};
`;

const CorrectAnswer = ({ answer }) => {
  return (
    <Comp component="span" borderBottom={1} borderColor="success.main">
      {answer}
    </Comp>
  );
};

export default CorrectAnswer;
