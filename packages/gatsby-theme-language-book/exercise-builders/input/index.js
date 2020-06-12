import React, { useState, useRef } from 'react';
import { answer } from './input.module.css';
import { Input as MuInput } from '@material-ui/core';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import isTouchDevice from 'is-touch-device/src';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    position: 'relative',
  },
  letterTool: {
    position: 'absolute',
    listStyle: 'none',
    marginTop: '2px',
    width: '7rem',
    padding: '0',
    zIndex: '1200',
    backgroundColor: theme.palette.info.light,
    opacity: '.8',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },

  letterToolItem: {
    textAlign: 'center',
    float: 'left',
    width: '1rem',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'white',
    },
  },
}));

const Input = styled(MuInput)`
  width: ${props => (props.size + 2) * 8 + 'px'};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: inherit;
`;

/*const InputComponent = styled.input.attrs({
  autocapitalize: 'none',
  spellcheck: 'off',
})``;*/

const InputFun = props => {
  const [inputValue, setInputValue] = useState('');
  const [displayChars, setDisplayChars] = useState(false);
  const classes = useStyles();

  const inputEl = useRef(null);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const LetterSupport = ({ fun }) => {
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
    return (
      <ul className={classes.letterTool}>
        {letters.map((letter, i) => (
          <li
            className={classes.letterToolItem}
            key={i}
            onMouseDown={e => fun(e)}
          >
            {letter}
          </li>
        ))}
      </ul>
    );
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
      console.log('ref: ', inputEl);
      inputEl.current.children[0].focus();
    } catch (e) {
      console.log(e);
    }
  };

  const DisplayChars = () => {
    return (
      !isTouchDevice() &&
      displayChars && <LetterSupport fun={addCharacterToState} />
    );
  };

  const displayAnswer = props.answer === inputValue;

  const WrappInFromToStopCapsOnMovile = ({ children }) => {
    return isTouchDevice() ? (
      <form autoCapitalize="none">{children} </form>
    ) : (
      <div>{children}</div>
    );
  };

  return displayAnswer ? (
    <span className={answer}>{props.answer}</span>
  ) : (
    <div className={classes.root}>
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
      <DisplayChars />
    </div>
  );
};

export default InputFun;
