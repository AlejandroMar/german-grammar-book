import React, { useState, useRef } from 'react';
import { answer } from './input.module.css';
import { Input as MuInput } from '@material-ui/core';
import styled from 'styled-components';
import { Button as MuButton, ButtonGroup } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    position: 'relative',
  },
  letterTool: {
    position: 'absolute',
    top: '-100%',
    left: '-100%',
    width: '100px',
    opacity: '.5',
  },
}));

const ButtonMin = styled(MuButton)`
  text-transform: lowercase;
`;

const Button = styled(MuButton)``;

const Input = styled(MuInput)`
  width: ${props => (props.size + 2) * 8 + 'px'};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: inherit;
`;

const InputFun = props => {
  const [inputValue, setInputValue] = useState('');
  const [displayChars, setDisplayChars] = useState(false);
  const classes = useStyles();

  const inputEl = useRef(null);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const LetterSupport = ({ fun }) => {
    return (
      <ButtonGroup size="small" className={classes.letterTool}>
        <Button variant="contained" onClick={e => fun(e)}>
          Ñ
        </Button>

        <ButtonMin variant="contained" onClick={e => fun(e)}>
          ñ
        </ButtonMin>

        <ButtonMin variant="contained" onClick={e => fun(e)}>
          á
        </ButtonMin>

        <ButtonMin variant="contained" onClick={e => fun(e)}>
          é
        </ButtonMin>

        <ButtonMin variant="contained" onClick={e => fun(e)}>
          í
        </ButtonMin>

        <ButtonMin variant="contained" onClick={e => fun(e)}>
          ó
        </ButtonMin>

        <ButtonMin variant="contained" onClick={e => fun(e)}>
          ú
        </ButtonMin>
      </ButtonGroup>
    );
  };

  let timeOut;
  const handleBlur = () => {
    timeOut = setTimeout(() => {
      setDisplayChars(false);
    }, 300);
  };

  const handleFocus = () => {
    setDisplayChars(true);
    clearTimeout(timeOut);
  };

  const addCharacterToState = e => {
    setInputValue(inputValue + e.target.innerText);
    clearTimeout(timeOut);
    try {
      inputEl.current.children[0].focus();
    } catch (e) {
      console.log(e);
    }
  };

  const DisplayChars = () => {
    return displayChars && <LetterSupport fun={addCharacterToState} />;
  };

  const displayAnswer = props.answer === inputValue;

  return displayAnswer ? (
    <span className={answer}>{props.answer}</span>
  ) : (
    <div className={classes.root}>
      <DisplayChars />
      <label htmlFor="fill-in">
        <Input
          ref={inputEl}
          type="text"
          name="fill-in"
          placeholder={props.root}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          size={props.answer.length}
          autoComplete="off"
          variant="outlined"
          onBlur={handleBlur}
        />
      </label>
    </div>
  );
};

export default InputFun;
