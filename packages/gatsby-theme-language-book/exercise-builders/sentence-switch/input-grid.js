import React, { useEffect, useReducer, useRef } from 'react';
import { getComplement, getSubject, getVerb } from './filtros';
import { Input as MuInput, Box } from '@material-ui/core';
import styled from 'styled-components';

import {
  CHECK_IF_CORRECT,
  CLEAN_STATE,
  HANDLE_CHANGE,
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
  variant: 'outlined',
  type: 'text',
})`
  width: 20%;
  padding: 10px 10px;
  margin: 1% 5px;
  display: inline-block;
  box-sizing: border-box;
`;

const useStyles = makeStyles(theme => ({
  wrapper: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '.5%',
    margin: '2.5% 2.5%',
  },
  /*input: {
    width: '20%',
    padding: '10px 10px',
    margin: '1% 5px',
    display: 'inline-block',
    boxSizing: 'border-box',
  },*/

  inputSujeto: {
    borderBottom: '1px solid turquoise',
  },
  inputVerbo: {
    borderBottom: '1px solid wheat',
  },
  inputComplemento: {
    borderBottom: '1px solid teal',
  },

  label: {
    width: '50%',
    display: 'inline-block',
  },

  submit: {
    color: 'white',
    textTransform: 'none',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
  },

  correctAnswer: {
    /* text-align: center; */
  },

  sujeto: {
    padding: '1% 2%',
    backgroundColor: 'turquoise',
  },
  verbo: {
    padding: '1% 2%',
    backgroundColor: 'wheat',
  },
  complemento: {
    padding: '1% 2%',
    backgroundColor: 'teal',
  },

  correct: {
    color: ' rgb(148, 223, 150)',
  },

  wrong: {
    color: 'rgb(205, 59, 7)',
  },
}));

const InputGrid = ({ verboPre, verbos, complementos, sujetos }) => {
  const classes = useStyles();
  const initialMount = useRef(true);

  const [state, dispatch] = useReducer(reducer, initalState);
  const { sujetoLocal, verboLocal, complementoLocal, msg, correcto } = state;

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

  return (
    <div className={classes.wrapper}>
      {correcto ? (
        <p className={classes.correctAnswer}>
          <span className={classes.sujeto}>{sujetoLocal}</span>
          <span className={classes.verbo}>{verboLocal}</span>
          <span className={classes.complemento}>{complementoLocal}</span>
          <span className={classes.correct}> &#10003; {msg}</span>
        </p>
      ) : (
        <form>
          <label htmlFor="sujetoLocal">
            <Input
              name="sujetoLocal"
              value={sujetoLocal}
              placeholder="sujeto"
              onChange={handleChange}
              className={`${classes.inputSujeto}`}
            />
          </label>
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
            <label htmlFor="verboLocal">
              <Input
                name="verboLocal"
                value={verboLocal}
                placeholder="verbo"
                onChange={handleChange}
                className={`${classes.inputVerbo}`}
              />
            </label>
          )}

          <label htmlFor="complementoLocal">
            <Input
              name="complementoLocal"
              value={complementoLocal}
              placeholder="complemento"
              onChange={handleChange}
              className={`${classes.inputComplemento}`}
            />
          </label>
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
    </div>
  );
};

export default InputGrid;
