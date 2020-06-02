import React, { useEffect, useReducer, useRef } from 'react';
import { getComplement, getSubject, getVerb } from './filtros';
import style from './input-grid.module.css';
import {
  CHECK_IF_CORRECT,
  CLEAN_STATE,
  HANDLE_CHANGE,
  PREDEFINED_VERB,
  SUJETO_CON_VERBO,
  VERBO_CON_COMPLEMENTO,
} from './action-types';
import { reducer } from './reducer';
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

const InputGrid = ({ verboPre, verbos, complementos, sujetos }) => {
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
    <div className={style.wrapper}>
      {correcto ? (
        <p className={style.correctAnswer}>
          <span className={style.sujeto}>{sujetoLocal}</span>
          <span className={style.verbo}>{verboLocal}</span>
          <span className={style.complemento}>{complementoLocal}</span>
          <span className={style.correct}> &#10003; {msg}</span>
        </p>
      ) : (
        <form>
          <label htmlFor="sujetoLocal">
            <input
              type="text"
              name="sujetoLocal"
              value={sujetoLocal}
              placeholder="sujeto"
              onChange={handleChange}
              className={`${style.input} ${style.inputSujeto}`}
            />
          </label>
          {verboPre ? (
            <span style={{ margin: '0 5px' }} className={`${style.verbo}`}>
              {verboPre}
            </span>
          ) : (
            <label htmlFor="verboLocal">
              <input
                type="text"
                name="verboLocal"
                value={verboLocal}
                placeholder="verbo"
                onChange={handleChange}
                className={`${style.input} ${style.inputVerbo}`}
              />
            </label>
          )}

          <label htmlFor="complementoLocal">
            <input
              type="text"
              name="complementoLocal"
              value={complementoLocal}
              placeholder="complemento"
              onChange={handleChange}
              className={`${style.input} ${style.inputComplemento}`}
            />
          </label>
          <button type="submit" onClick={checkAnswer} className={style.submit}>
            salvar
          </button>
          {correcto && msg ? (
            <span className={style.correct}> &#10003; {msg}</span>
          ) : (
            msg && <span className={style.wrong}>&#10007; {msg}</span>
          )}
        </form>
      )}
    </div>
  );
};

export default InputGrid;
