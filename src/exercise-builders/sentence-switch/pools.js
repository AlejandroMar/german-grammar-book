import React from "react"
import style from "./pools.module.css"

const Pools = ({ verbosPre, sujetos, verbos, complementos }) => {
  return (
    <div className={style.row}>
      <div className={style.col}>
        <h4 className={style.catName}>sujetos: </h4>

        <ul className={style.list}>
          {sujetos.map((sujeto, i) => (
            <li key={i} className={style.listItem}>
              {sujeto.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.col}>
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
      <div className={style.col}>
        <h4 className={style.catName}>complementos: </h4>
        <ul className={style.list}>
          {complementos.map((complemento, i) => (
            <li key={i} className={style.listItem}>
              {complemento.texto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Pools
