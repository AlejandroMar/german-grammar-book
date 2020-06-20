import React, { useEffect, useReducer, useRef, useState } from 'react';
import { getComplement, getSubject, getVerb } from './filtros';
import { Box } from '@material-ui/core';
import { letters } from '../common-components/specialLettersToolTip/spanish-letters';
import {
  CHECK_IF_CORRECT,
  CLEAN_STATE,
  HANDLE_CHANGE,
  HANDLE_SPECIAL_CHAR_CLICK,
  PREDEFINED_VERB,
  SUJETO_CON_VERBO,
  VERBO_CON_COMPLEMENTO,
} from './action-types';
import { reducer } from './reducer';
import { initalState } from './initial-state';
import { useStyles } from './mui-styles';
import { CorrectAnswer } from './correct-answer';
import { WrongAnswerTip } from './wrong-answer-tip';
import { ButtonCheckAnswer } from './button-check-answer';
import { SubjectComponent } from './subject-component';
import { VerbComponent } from './verb-component';
import { ComplementComponent } from './complement-component';

// el componente debe ser independiente de los datos
// un api

const cleanState = (dispatch, type, payload) => {
  dispatch({
    type,
    payload,
  });
};

const InputGrid = ({ verboPre, verbos, complementos, sujetos }) => {
  const classes = useStyles();
  const initialMount = useRef(true);

  const [state, dispatch] = useReducer(reducer, initalState);
  const { sujetoLocal, verboLocal, complementoLocal, msg, correcto } = state;
  const [displayCharsSub, setDisplayCharsSub] = useState(false);
  const [displayCharsVerb, setDisplayCharsVerb] = useState(false);
  const [displayCharsComp, setDisplayCharsComp] = useState(false);

  const checkIfCorrect = () => {
    if (state.sujetoConVerbo && state.verboConComplemento) {
      dispatch({
        type: CHECK_IF_CORRECT,
        payload: { correcto: true, msg: 'correcto' },
      });
    } else {
      dispatch({
        type: CHECK_IF_CORRECT,
        payload: { correcto: false, msg: 'falso: intenta otra vez' },
      });
    }
    return false;
  };

  // no se sie esto es un buen patron pero
  // cuando el componente se monta si tengo verbos predefinidos
  // los pongo en el state como verboLocal
  // y cambio el input por un span, así me queda lista la lógica

  useEffect(() => {
    if (verboPre) {
      dispatch({
        type: PREDEFINED_VERB,
        payload: {
          verboLocal: verboPre,
        },
      });
    }
  }, [verboPre]);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    } else {
      checkIfCorrect();
    }
  }, [state.sujetoConVerbo, state.verboConComplemento]);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        value: value,
        name: name,
      },
    });
  };

  const checkAnswer = e => {
    e.preventDefault();
    cleanState(dispatch, CLEAN_STATE, {
      sujetoConVerbo: false,
      verboConComplemento: false,
      msg: '',
    });

    checkIfCorrect();

    const sujeto = getSubject(sujetos, sujetoLocal);
    const verbo = getVerb(verbos, verboLocal);
    const complemento = getComplement(complementos, complementoLocal);

    if (verbo.conjugacion[sujeto.p] === verboLocal.trim()) {
      dispatch({
        type: SUJETO_CON_VERBO,
        payload: {
          sujetoConVerbo: true,
        },
      });
    }

    if (verbo.complementos.includes(complemento.categoria)) {
      dispatch({
        type: VERBO_CON_COMPLEMENTO,
        payload: {
          verboConComplemento: true,
        },
      });
    }
  };

  const setDisplayCharsOnBlurOrFocus = (e, shouldDisplayChars) => {
    const trueOrFalse = shouldDisplayChars;
    if (e.target.name === 'sujetoLocal') {
      setDisplayCharsSub(trueOrFalse);
    } else if (e.target.name === 'verboLocal') {
      setDisplayCharsVerb(trueOrFalse);
    } else if (e.target.name === 'complementoLocal') {
      setDisplayCharsComp(trueOrFalse);
    }
  };

  const handleFocus = e => {
    setDisplayCharsOnBlurOrFocus(e, true);
  };

  const handleBlur = e => {
    setDisplayCharsOnBlurOrFocus(e, false);
  };

  const addCharacterToState = (e, name) => {
    e.preventDefault();
    dispatch({
      type: HANDLE_SPECIAL_CHAR_CLICK,
      payload: {
        value: e.target.innerText,
        name: name,
      },
    });
  };

  return (
    <Box component="div" className={classes.wrapper}>
      {correcto ? (
        <CorrectAnswer
          classes={classes}
          sujetoLocal={sujetoLocal}
          verboLocal={verboLocal}
          complementoLocal={complementoLocal}
          msg={msg}
        />
      ) : (
        <form>
          <SubjectComponent
            classes={classes}
            value={sujetoLocal}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            displayChars={displayCharsSub}
            addCharacterToState={addCharacterToState}
            letters={letters}
          />

          <VerbComponent
            verboPre={verboPre}
            classes={classes}
            value={verboLocal}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            displayChars={displayCharsVerb}
            addCharacterToState={addCharacterToState}
            letters={letters}
          />

          <ComplementComponent
            classes={classes}
            value={complementoLocal}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            displayChars={displayCharsComp}
            addCharacterToState={addCharacterToState}
            letters={letters}
          />

          <ButtonCheckAnswer onClick={checkAnswer} classes={classes} />
          <WrongAnswerTip msg={msg} classes={classes} />
        </form>
      )}
    </Box>
  );
};

export default InputGrid;
