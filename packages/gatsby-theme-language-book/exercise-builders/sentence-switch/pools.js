import React from 'react'
import style from './pools.module.css'
import cx from 'classnames'

const SujetosColumn = ({ sujetos }) => (
  <div className={cx(style.col, style.sujeto)}>
    <h4 className={style.catName}>sujetos: </h4>

    <ul className={style.list}>
      {sujetos.map((sujeto, i) => (
        <li key={i} className={style.listItem}>
          {sujeto.name}
        </li>
      ))}
    </ul>
  </div>
)

const VerbosColumn = ({ verbosPre, verbos }) => (
  <div className={cx(style.col, style.verbo)}>
    <h4 className={style.catName}>verbos: </h4>
    <ul className={style.list}>
      {verbosPre
        ? verbosPre.map((verbo, i) => (
            <li key={i} className={style.listItem}>
              {verbo}
            </li>
          ))
        : verbos.map((verbo, i) => (
            <li key={i} className={style.listItem}>
              {verbo.nombre}
            </li>
          ))}
    </ul>
  </div>
)

const ComplementosColumn = ({ complementos }) => (
  <div className={cx(style.col, style.complemento)}>
    <h4 className={style.catName}>complementos: </h4>
    <ul className={style.list}>
      {complementos.map((complemento, i) => (
        <li key={i} className={style.listItem}>
          {complemento.texto}
        </li>
      ))}
    </ul>
  </div>
)

const Pools = ({ verbosPre, sujetos, verbos, complementos }) => {
  return (
    <div className={style.row}>
      <SujetosColumn sujetos={sujetos} />
      <VerbosColumn verbosPre={verbosPre} verbos={verbos} />
      <ComplementosColumn complementos={complementos} />
    </div>
  )
}

export default Pools
