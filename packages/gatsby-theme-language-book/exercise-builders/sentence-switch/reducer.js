import {
  CHECK_IF_CORRECT,
  CLEAN_STATE,
  HANDLE_CHANGE,
  HANDLE_SPECIAL_CHAR_CLICK,
  PREDEFINED_VERB,
  SUJETO_CON_VERBO,
  VERBO_CON_COMPLEMENTO,
} from './action-types';

export const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case PREDEFINED_VERB: {
      return { ...state, ...payload };
    }
    case HANDLE_CHANGE: {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case HANDLE_SPECIAL_CHAR_CLICK: {
      const { name, value } = payload;
      const newValue = state[name] + value;
      return { ...state, [name]: newValue };
    }
    case SUJETO_CON_VERBO: {
      return { ...state, ...payload };
    }
    case VERBO_CON_COMPLEMENTO: {
      return { ...state, ...payload };
    }
    case CHECK_IF_CORRECT: {
      return { ...state, ...payload };
    }
    case CLEAN_STATE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
