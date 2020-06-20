import styled from 'styled-components';
import { TextField as MuInput } from '@material-ui/core';

export const Input = styled(MuInput).attrs({
  autoComplete: 'off',
  type: 'text',
})`
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
`;
