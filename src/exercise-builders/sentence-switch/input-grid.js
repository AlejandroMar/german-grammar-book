import React, { useReducer, useEffect, useRef } from "react"
import { verboListo, sujetoListo, complementoListo } from "./filtros"
// el componente debe ser independiente de los datos
// un api

const initalState = {
  sujetoLocal: "",
  verboLocal: "",
  complementoLocal: "",
  sujetoConVerbo: false,
  verboConComplemento: false,
  correcto: false,
  msg: "",
}

const reducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case PREDEFINED_VERB: {
      return { ...state, ...payload }
    }
    case HANDLE_CHANGE: {
      const { name, value } = payload
      return { ...state, [name]: value }
    }
    case SUJETO_CON_VERBO: {
      return { ...state, ...payload }
    }
    case VERBO_CON_COMPLEMENTO: {
      return { ...state, ...payload }
    }
    case CHECK_IF_CORRECT: {
      return { ...state, ...payload }
    }
    case CLEAN_STATE: {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}

const HANDLE_CHANGE = "HANDLE_CHANGE"
const SUJETO_CON_VERBO = "SUJETO_CON_VERBO"
const VERBO_CON_COMPLEMENTO = "VERBO_CON_COMPLEMENTO"
const CHECK_IF_CORRECT = "CHECK_IF_CORRECT"
const CLEAN_STATE = "CLEAN_STATE"
const PREDEFINED_VERB = "PREDEFINED_VERB"

const cleanState = (dispatch, type, payload) => {
  dispatch({
    type,
    payload,
  })
}

const InputGrid = ({ verboPre, verbos, complementos, sujetos }) => {
  const initialMount = useRef(true)

  const [state, dispatch] = useReducer(reducer, initalState)
  const { sujetoLocal, verboLocal, complementoLocal, msg } = state

  const checkIfCorrect = () => {
    if (state.sujetoConVerbo && state.verboConComplemento) {
      dispatch({
        type: CHECK_IF_CORRECT,
        payload: { correcto: true, msg: "correcto" },
      })
    } else {
      dispatch({
        type: CHECK_IF_CORRECT,
        payload: { correcto: false, msg: "falso: intenta otra vez" },
      })
    }
    return false
  }

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
      })
    }
  }, [verboPre])

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false
      return
    } else {
      checkIfCorrect()
    }
  }, [state.sujetoConVerbo, state.verboConComplemento])

  const handleChange = e => {
    const { name, value } = e.target
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        value: value,
        name: name,
      },
    })
  }

  const checkAnswer = e => {
    e.preventDefault()
    cleanState(dispatch, CLEAN_STATE, {
      sujetoConVerbo: false,
      verboConComplemento: false,
      msg: "",
    })

    checkIfCorrect()

    const verbo = verboListo(verbos, verboLocal)
    const complemento = complementoListo(complementos, complementoLocal)
    const sujeto = sujetoListo(sujetos, sujetoLocal)

    if (verbo.conjugacion[sujeto.p] === verboLocal.trim()) {
      dispatch({
        type: SUJETO_CON_VERBO,
        payload: {
          sujetoConVerbo: true,
        },
      })
    }

    if (verbo.complementos.includes(complemento.categoria)) {
      dispatch({
        type: VERBO_CON_COMPLEMENTO,
        payload: {
          verboConComplemento: true,
        },
      })
    }
  }

  return (
    <>
      <form>
        <label htmlFor="sujetoLocal">
          <input
            type="text"
            name="sujetoLocal"
            value={sujetoLocal}
            placeholder="Sujeto"
            onChange={handleChange}
          />
        </label>
        {verboPre ? (
          <span style={{ margin: "0 5px" }}>{verboPre}</span>
        ) : (
          <label htmlFor="verboLocal">
            <input
              type="text"
              name="verboLocal"
              value={verboLocal}
              placeholder="verbo"
              onChange={handleChange}
            />
          </label>
        )}

        <label htmlFor="complementoLocal">
          <input
            type="text"
            name="complementoLocal"
            value={complementoLocal}
            placeholder="Complemento"
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={checkAnswer}>
          salvar
        </button>
        {msg && (
          <span>
            {"---"}
            {msg}
          </span>
        )}
      </form>
    </>
  )
}

export default InputGrid
