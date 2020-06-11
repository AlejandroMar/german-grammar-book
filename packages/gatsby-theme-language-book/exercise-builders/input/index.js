import React, { useState, useRef } from 'react';
import { answer } from './input.module.css';
import { InputBase as MuInput } from '@material-ui/core';
import styled from 'styled-components';
import { Box, Button as MuButton, Paper, ButtonGroup } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: '5%',
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
  const [letterClicked, setLetterClicked] = useState(false);

  const inputEl = useRef(null);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const LetterSupport = ({ fun }) => {
    const classes = useStyles();
    return (
      <ButtonGroup size="small" className={classes.root}>
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

  const addCharacterToState = e => {
    console.log(e.target.innerText);

    setInputValue(inputValue + e.target.innerText);

    try {
      inputEl.current.children[0].focus();
    } catch (e) {
      console.log(e);
    }
  };

  const handleFocus = e => {
    setDisplayChars(true);
  };

  const handleBlur = () => {
    return;
    /*console.log('blurrrrr: ', inputEl);
    if (letterClicked) {
      return;
    }
    setDisplayChars(false);*/
  };

  const DisplayChars = () => {
    return displayChars && <LetterSupport fun={addCharacterToState} />;
  };

  const displayAnswer = props.answer === inputValue;

  return displayAnswer ? (
    <span className={answer}>{props.answer}</span>
  ) : (
    <>
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
          autoComplete="false"
          variant="outlined"
          onBlur={handleBlur}
        />
      </label>
    </>
  );
};

export default InputFun;
