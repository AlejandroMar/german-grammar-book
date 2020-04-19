import React from "react"

const Pools = ({ verbosPre, sujetos, verbos, complementos }) => {
  return (
    <>
      <h4>Sujetos: </h4>
      <ul>
        {sujetos.map((sujeto, i) => (
          <li key={i}>{sujeto.name}</li>
        ))}
      </ul>
      <h4>Verbos: </h4>
      <ul>
        {verbosPre
          ? verbosPre.map((verbo, i) => <li key={i}>{verbo}</li>)
          : verbos.map((verbo, i) => <li key={i}>{verbo.nombre}</li>)}
      </ul>
      <h4>complementos: </h4>
      <ul>
        {complementos.map((complemento, i) => (
          <li key={i}>{complemento.texto}</li>
        ))}
      </ul>
    </>
  )
}

export default Pools
