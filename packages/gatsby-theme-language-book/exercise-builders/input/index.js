import React, { useRef, useState } from 'react';
import { Box, Input as MuInput } from '@material-ui/core';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import isTouchDevice from 'is-touch-device/src';
import SpecialLettersToolTip from '../../src/components/SpecialLettersToolTip';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    position: 'relative',
  },
}));

const letters = [
  'á',
  'é',
  'í',
  'ó',
  'ú',
  'Á',
  'É',
  'Í',
  'Ó',
  'Ú',
  'Ñ',
  'ñ',
  '¿',
  '¡',
];

const CorrectAnswer = styled(Box)`
  color: ${({ theme }) => theme.palette.success.main};
`;

const Input = styled(MuInput)`
  width: ${props => (props.size + 2) * 8 + 'px'};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: inherit;
`;

const InputComponent = props => {
  const [inputValue, setInputValue] = useState('');
  const [displayChars, setDisplayChars] = useState(false);
  const classes = useStyles();

  const inputEl = useRef(null);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setDisplayChars(false);
  };

  const handleFocus = () => {
    setDisplayChars(true);
  };

  const addCharacterToState = e => {
    e.preventDefault();
    setInputValue(inputValue + e.target.innerText);

    try {
      inputEl.focus();
    } catch (e) {
      throw `Error on addCharactersToState on focusing input ${e}`;
    }
  };

  const DisplayChars = () => {
    return (
      !isTouchDevice() &&
      displayChars && (
        <SpecialLettersToolTip fun={addCharacterToState} letters={letters} />
      )
    );
  };

  const displayAnswer = props.answer === inputValue;

  return displayAnswer ? (
    <CorrectAnswer component="span" borderBottom={1} borderColor="success.main">
      {props.answer}
    </CorrectAnswer>
  ) : (
    <div className={classes.root}>
      <label htmlFor="fill-in">
        <Input
          inputRef={inputEl}
          type="text"
          name="fill-in"
          placeholder={props.root}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          size={props.answer.length}
          autoComplete="off"
          variant="outlined"
        />
      </label>
      <DisplayChars />
    </div>
  );
};

export default InputComponent;
