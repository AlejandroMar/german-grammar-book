import React, { useRef, useState } from 'react';
import { Input as MuInput } from '@material-ui/core';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import isTouchDevice from 'is-touch-device/src';
import CorrectAnswer from '../common-components/correct-answer';
import { DisplayChars } from '../common-components/specialLettersToolTip/displayChars';
import { letters } from '../common-components/specialLettersToolTip/spanish-letters';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    position: 'relative',
  },
}));

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

  const displayAnswer = props.answer === inputValue;

  return displayAnswer ? (
    <CorrectAnswer answer={props.answer} />
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
      <DisplayChars
        isTouchDevice={isTouchDevice}
        displayChars={displayChars}
        addCharacterToState={addCharacterToState}
        letters={letters}
      />
    </div>
  );
};

export default InputComponent;
