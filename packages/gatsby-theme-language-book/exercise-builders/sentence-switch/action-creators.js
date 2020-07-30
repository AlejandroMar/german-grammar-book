import {
  CHECK_IF_CORRECT,
  CLEAN_STATE,
  HANDLE_CHANGE,
  HANDLE_SPECIAL_CHAR_CLICK,
  PREDEFINED_VERB,
  SUBJECT_WITH_VERB_MATCH,
  VERB_WITH_COMPLEMENT_MATCH,
} from './action-types';

// this action creatpr checks if correct
export const checkIfCorrect = (state, dispatch) => {
  if (state.subjectWithVerbMatch && state.verbWithComplementMatch) {
    dispatch({
      type: CHECK_IF_CORRECT,
      payload: { correct: true, msg: 'correcto' },
    });
  } else {
    dispatch({
      type: CHECK_IF_CORRECT,
      payload: { correct: false, msg: 'falso: intenta otra vez' },
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

export function checkIfVerbIsPredefined(predefinedVerb, dispatch) {
  if (predefinedVerb) {
    dispatch({
      type: PREDEFINED_VERB,
      payload: {
        localVerb: predefinedVerb,
      },
    });
  }
}

export const cleanState = dispatch => {
  dispatch({
    type: CLEAN_STATE,
    payload: {
      subjectWithVerbMatch: false,
      verbWithComplementMatch: false,
      msg: '',
    },
  });
};

export function checkIfVerbAndSubjectMatch(
  verb,
  sujeto,
  localVerb,
  dispatch
) {
  if (verb.conjugacion[sujeto.p] === localVerb.trim()) {
    dispatch({
      type: SUBJECT_WITH_VERB_MATCH,
      payload: {
        subjectWithVerbMatch: true,
      },
    });
  }
}

export function checkIfVerbAndComplementMatch(verb, complemento, dispatch) {
  if (verb.complementos.includes(complemento.categoria)) {
    dispatch({
      type: VERB_WITH_COMPLEMENT_MATCH,
      payload: {
        verbWithComplementMatch: true,
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
