import { Box } from '@material-ui/core';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { letters } from '../common-components/specialLettersToolTip/german-letters';
import {
  addCharacterToStateActionCreator,
  checkIfCorrect,
  checkIfVerbAndComplementMatch,
  checkIfVerbAndSubjectMatch,
  checkIfVerbIsPredefined,
  cleanState,
  handleChangeActionCreator,
} from './action-creators';
import ButtonCheckAnswer from './button-check-answer';
import { ComplementComponent } from './complement-component';
import { CorrectAnswer } from './correct-answer';
import { getComplement, getSubject, getVerb } from './filters';
import { initialState } from './initial-state';
import { useStyles } from './mui-styles';
import { reducer } from './reducer';
import { setDisplayCharsOnBlurOrFocus } from './setDisplayCharsOnBlurOrFocus';
import { SubjectComponent } from './subject-component';
import { VerbComponent } from './verb-component';
import { WrongAnswerTip } from './wrong-answer-tip';

// el componente debe ser independiente de los datos
// un api

const InputGrid = ({ predefinedVerb, verbs, complements, subjects }) => {
  const classes = useStyles();
  const initialMount = useRef(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { localSubject, localVerb, localComplement, msg, correct } = state;
  const [displayCharsSubject, setDisplayCharsSubject] = useState(false);
  const [displayCharsVerb, setDisplayCharsVerb] = useState(false);
  const [displayCharsComplement, setDisplayCharsComplement] = useState(false);

  // no se sie esto es un buen patron pero
  // cuando el componente se monta si tengo verbos predefinidos
  // los pongo en el state como localVerb
  // y cambio el input por un span, así me queda lista la lógica

  useEffect(() => {
    checkIfVerbIsPredefined(predefinedVerb, dispatch);
  }, [predefinedVerb]);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    } else {
      checkIfCorrect(state, dispatch);
    }
  }, [state.subjectWithVerbMatch, state.verbWithComplementMatch]);

  const handleChange = e => {
    handleChangeActionCreator(e, dispatch);
  };

  const checkAnswer = e => {
    e.preventDefault();

    cleanState(dispatch);
    checkIfCorrect(state, dispatch);

    const verb = getVerb(verbs, localVerb);
    const subject = getSubject(subjects, localSubject);
    const complement = getComplement(complements, localComplement);

    checkIfVerbAndSubjectMatch(verb, subject, localVerb, dispatch);
    checkIfVerbAndComplementMatch(verb, complement, dispatch);
  };

  const handleFocus = e => {
    setDisplayCharsOnBlurOrFocus(e, true, {
      setDisplayCharsSubject,
      setDisplayCharsVerb,
      setDisplayCharsComplement,
    });
  };

  const handleBlur = e => {
    setDisplayCharsOnBlurOrFocus(e, false, {
      setDisplayCharsSubject,
      setDisplayCharsVerb,
      setDisplayCharsComplement,
    });
  };

  const addCharacterToState = (e, name) => {
    e.preventDefault();
    addCharacterToStateActionCreator(dispatch, e, name);
  };

  return (
    <Box component="div" className={classes.wrapper}>
      {correct ? (
        <CorrectAnswer
          classes={classes}
          localSubject={localSubject}
          localVerb={localVerb}
          localComplement={localComplement}
          msg={msg}
        />
      ) : (
        <form>
          <SubjectComponent
            classes={classes}
            value={localSubject}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            displayChars={displayCharsSubject}
            addCharacterToState={addCharacterToState}
            letters={letters}
          />

          <VerbComponent
            predefinedVerb={predefinedVerb}
            classes={classes}
            value={localVerb}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            displayChars={displayCharsVerb}
            addCharacterToState={addCharacterToState}
            letters={letters}
          />

          <ComplementComponent
            classes={classes}
            value={localComplement}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            displayChars={displayCharsComplement}
            addCharacterToState={addCharacterToState}
            letters={letters}
          />

          <ButtonCheckAnswer onClick={checkAnswer} />
          <WrongAnswerTip msg={msg} classes={classes} />
        </form>
      )}
    </Box>
  );
};

export default InputGrid;
