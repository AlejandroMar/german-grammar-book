import React from 'react'
import In from '../../packages/gatsby-theme-language-book/exercise-builders/input'

const tabla = [
  {
    tiempo: 'presente',
    frase: (
      <span class="bold">
        ich kau
        <In answer="fe" root="kaufen" />
      </span>
    ),
    traducción: 'yo compro',
  },
  {
    tiempo: 'pasado',
    frase: (
      <span class="bold">
        ich kau
        <In answer="fte" root="kaufen" />
      </span>
    ),
    traducción: 'yo compré',
  },
  {
    tiempo: 'pasado',
    frase: (
      <span class="bold">
        ich kau
        <In answer="fte" root="kaufen" />
      </span>
    ),
    traducción: 'yo compré',
    otra: 'yo comprékfdlk',
  },
]
/* const tabla = [
  {
    caso: 'nominativo',
    masculino: 'ein',
    femenino: 'ein<span class="fem">e</span>',
    neutro: 'ein',
  },
  {
    caso: 'acusativo',
    masculino: 'ein<span class="masc">en</span>',
    femenino: 'ein<span class="fem">e</span>',
    neutro: 'ein',
  },
  {
    caso: 'genitivo',
    masculino: 'ein<span class="masc">es</span>',
    femenino: 'ein<span class="fem">er</span>',
    neutro: 'ein<span class="neutro">es</span>',
  },
  {
    caso: 'dativo',
    masculino: 'ein<span class="masc">em</span>',
    femenino: 'ein<span class="fem">er</span>',
    neutro: 'ein<span class="neutro">em</span>',
  },
] */

const Index = () => {
  const displayHeader = true

  const TableRows = ({ table }) => {
    return table.map((row, index) => {
      const keys = Object.keys(row)
      return (
        <tr key={index}>
          {keys.map((key, i) => (
            <td>{row[key]}</td>
          ))}
        </tr>
      )
    })
  }

  const TableHeaders = ({ table }) => {
    const keys = Object.keys(table[0])
    return keys.map((key, i) => {
      return (
        <th className="gray" key={i}>
          {key.toUpperCase()}
        </th>
      )
    })
  }
  return (
    <div>
      <h1>caso</h1>
      <table>
        <tbody>
          {displayHeader && (
            <tr>
              <TableHeaders table={tabla} />
            </tr>
          )}
          <TableRows table={tabla} />
        </tbody>
      </table>
    </div>
  )
}

export default Index
