import { Box, Button as MuButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const ENHEMAYUSCULA = 'ENHEMAYUSCULA';

export const initialState = {
  letter: '',
};

export const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ENHEMAYUSCULA: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};

const ButtonMin = styled(MuButton)`
  text-transform: lowercase;
`;

const Button = styled(MuButton)``;

export const LetterSupport = () => {
  return (
    <>
      <Box component="span" mr={2}>
        <Button variant="contained">Ñ</Button>
      </Box>
      <Box component="span" mr={2}>
        <ButtonMin variant="contained">ñ</ButtonMin>
      </Box>
      <Box component="span" mr={2}>
        <Button variant="contained">{'´'}</Button>
      </Box>
    </>
  );
};
