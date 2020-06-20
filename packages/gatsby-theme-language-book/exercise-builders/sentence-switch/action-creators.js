import {
  CHECK_IF_CORRECT,
  CLEAN_STATE,
  HANDLE_CHANGE,
  HANDLE_SPECIAL_CHAR_CLICK,
  PREDEFINED_VERB,
  SUJETO_CON_VERBO,
  VERBO_CON_COMPLEMENTO,
} from './action-types';

// this action creatpr checks if correct
export const checkIfCorrect = (state, dispatch) => {
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

export const handleChangeActionCreator = (e, dispatch) => {
  const { name, value } = e.target;
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      value: value,
      name: name,
    },
  });
};

export function checkIfVerbIsPredefined(verboPre, dispatch) {
  if (verboPre) {
    dispatch({
      type: PREDEFINED_VERB,
      payload: {
        verboLocal: verboPre,
      },
    });
  }
}

export const cleanState = dispatch => {
  dispatch({
    type: CLEAN_STATE,
    payload: {
      sujetoConVerbo: false,
      verboConComplemento: false,
      msg: '',
    },
  });
};

export function checkIfVerbAndSubjectMatch(
  verbo,
  sujeto,
  verboLocal,
  dispatch
) {
  if (verbo.conjugacion[sujeto.p] === verboLocal.trim()) {
    dispatch({
      type: SUJETO_CON_VERBO,
      payload: {
        sujetoConVerbo: true,
      },
    });
  }
}

export function checkIfVerbAndComplementMatch(verbo, complemento, dispatch) {
  if (verbo.complementos.includes(complemento.categoria)) {
    dispatch({
      type: VERBO_CON_COMPLEMENTO,
      payload: {
        verboConComplemento: true,
      },
    });
  }
}

export function addCharacterToStateActionCreator(dispatch, e, name) {
  dispatch({
    type: HANDLE_SPECIAL_CHAR_CLICK,
    payload: {
      value: e.target.innerText,
      name: name,
    },
  });
}
