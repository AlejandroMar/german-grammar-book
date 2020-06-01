import React from 'react'
import InputGrid from './input-grid'
import PoolGrid from './pools'

// si el ejercicio viene con el verbo predeterminado
const Predeterminados = ({ verbosPre, verbos, sujetos, complementos }) => {
  return verbosPre.map((verbo, i) => (
    <InputGrid
      key={i}
      verboPre={verbo}
      verbos={verbos}
      complementos={complementos}
      sujetos={sujetos}
    />
  ))
}

// si el ejercicio viene sin verbo determinado
const Dynamic = ({ verbos, sujetos, complementos }) => {
  return sujetos.map((verbo, i) => (
    <InputGrid
      key={i}
      verbos={verbos}
      complementos={complementos}
      sujetos={sujetos}
    />
  ))
}

const VerboComponent = ({ verbosPre, verbos, sujetos, complementos }) => {
  return (
    <>
      <PoolGrid
        verbosPre={verbosPre}
        sujetos={sujetos}
        verbos={verbos}
        complementos={complementos}
      />

      {verbosPre ? (
        <Predeterminados
          verbosPre={verbosPre}
          verbos={verbos}
          complementos={complementos}
          sujetos={sujetos}
        />
      ) : (
        <Dynamic
          verbos={verbos}
          complementos={complementos}
          sujetos={sujetos}
        />
      )}
    </>
  )
}

export default VerboComponent
