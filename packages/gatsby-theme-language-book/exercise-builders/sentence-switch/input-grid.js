import React, { useEffect, useReducer, useRef, useState } from 'react';
import { getComplement, getSubject, getVerb } from './filtros';
import { TextField as MuInput, Box, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { DisplayChars } from '../common-components/specialLettersToolTip/displayChars';
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
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

// el componente debe ser independiente de los datos
// un api

const initalState = {
  sujetoLocal: '',
  verboLocal: '',
  complementoLocal: '',
  sujetoConVerbo: false,
  verboConComplemento: false,
  correcto: false,
  msg: '',
};

const cleanState = (dispatch, type, payload) => {
  dispatch({
    type,
    payload,
  });
};

const Input = styled(MuInput).attrs({
  autoComplete: 'off',
  type: 'text',
})`
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
`;

const useStyles = makeStyles(theme => ({
  wrapper: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '.5%',
    padding: '1%',
    margin: '2% 0',
  },

  inputSujeto: {
    //borderBottom: '1px solid turquoise',
  },
  inputVerbo: {
    //borderBottom: '1px solid wheat',
  },
  inputComplemento: {
    //borderBottom: '1px solid teal',
  },

  inputAndLettersWrap: {
    display: 'inline-block',
    width: '20%',
    position: 'relative',
    margin: ' 1% 5px',
  },

  submit: {
    transform: 'translate(20%, 40%)',
    color: 'white',
    textTransform: 'none',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
  },

  correctAnswer: {
    width: '60%',
  },

  sujeto: {
    padding: '2% 2%',
    display: 'inline-block',
    backgroundColor: theme.palette.primary.dark,
  },
  verbo: {
    padding: '2% 2%',
    display: 'inline-block',
    backgroundColor: theme.palette.warning.dark,
  },
  complemento: {
    padding: '2% 2%',
    display: 'inline-block',
    backgroundColor: theme.palette.info.dark,
  },

  correct: {
    color: theme.palette.success.light,
    marginLeft: '5%',
    display: 'inline-block',
    textAlign: 'center',
  },

  wrong: {
    marginLeft: '3%',
    display: 'inline-block',
    color: theme.palette.error.light,
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(50%)',
    },
  },
}));

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

    const verbo = getVerb(verbos, verboLocal);
    const complemento = getComplement(complementos, complementoLocal);
    const sujeto = getSubject(sujetos, sujetoLocal);

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

  const handleFocus = e => {
    if (e.target.name === 'sujetoLocal') {
      setDisplayCharsSub(true);
    } else if (e.target.name === 'verboLocal') {
      setDisplayCharsVerb(true);
    } else if (e.target.name === 'complementoLocal') {
      setDisplayCharsComp(true);
    }
  };

  const handleBlur = e => {
    if (e.target.name === 'sujetoLocal') {
      setDisplayCharsSub(false);
    } else if (e.target.name === 'verboLocal') {
      setDisplayCharsVerb(false);
    } else if (e.target.name === 'complementoLocal') {
      setDisplayCharsComp(false);
    }
  };

  const addCharacterToState = (e, name) => {
    //console.log(e.target.innerText);
    //console.log(name);
    e.preventDefault();
    dispatch({
      type: HANDLE_SPECIAL_CHAR_CLICK,
      payload: {
        value: e.target.innerText,
        name: name,
      },
    });
    /*setInputValue(inputValue + e.target.innerText);

    try {
      inputEl.focus();
    } catch (e) {
      throw `Error on addCharactersToState on focusing input ${e}`;
    }*/
  };

  return (
    <Box component="div" className={classes.wrapper}>
      {correcto ? (
        <Paper className={classes.correctAnswer}>
          <Box component="span" className={classes.sujeto}>
            {sujetoLocal}
          </Box>
          <Box component="span" className={classes.verbo}>
            {verboLocal}
          </Box>
          <Box component="span" className={classes.complemento}>
            {complementoLocal}
          </Box>

          <Box component="span" className={classes.correct}>
            &#10003; {msg}
          </Box>
        </Paper>
      ) : (
        <form>
          <div className={classes.inputAndLettersWrap}>
            <Input
              label="sujeto"
              name="sujetoLocal"
              value={sujetoLocal}
              onChange={handleChange}
              className={`${classes.inputSujeto}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <DisplayChars
              letters={letters}
              displayChars={displayCharsSub}
              addCharacterToState={addCharacterToState}
              name="sujetoLocal"
            />
          </div>

          {verboPre ? (
            <Box
              boxShadow={1}
              component="span"
              style={{ margin: '0 5px' }}
              className={`${classes.verbo}`}
            >
              {verboPre}
            </Box>
          ) : (
            <div className={classes.inputAndLettersWrap}>
              <Input
                label="verbo"
                name="verboLocal"
                value={verboLocal}
                onChange={handleChange}
                className={`${classes.inputVerbo}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <DisplayChars
                letters={letters}
                displayChars={displayCharsVerb}
                addCharacterToState={addCharacterToState}
                name="verboLocal"
              />
            </div>
          )}

          <div className={classes.inputAndLettersWrap}>
            <Input
              label="complemento"
              name="complementoLocal"
              value={complementoLocal}
              onChange={handleChange}
              className={`${classes.inputComplemento}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <DisplayChars
              letters={letters}
              displayChars={displayCharsComp}
              addCharacterToState={addCharacterToState}
              name="complementoLocal"
            />
          </div>

          <Button
            variant="contained"
            type="submit"
            onClick={checkAnswer}
            className={classes.submit}
            size="medium"
          >
            salvar
          </Button>
          {correcto && msg ? (
            <span className={classes.correct}> &#10003; {msg}</span>
          ) : (
            msg && <span className={classes.wrong}>&#10007; {msg}</span>
          )}
        </form>
      )}
    </Box>
  );
};

export default InputGrid;
