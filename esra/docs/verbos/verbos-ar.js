import React from 'react'
import In from 'gatsby-theme-language-book/exercise-builders/input'
import VerbsTable from './verbs-table'
import { Hint } from './Hint'

const tabla = [
  {
    pronombre: 'yo',
    hablar: (
      <span className="bold">
        habl
        <In answer="o" root="    " />
        <Hint text="ich spreche" />
      </span>
    ),
    buscar: (
      <span className="bold">
        busc
        <In answer="o" root="    " />
        <Hint text="ich suche" />
      </span>
    ),
    comprar: (
      <span className="bold">
        compr
        <In answer="o" root="    " />
        <Hint text="ich kaufe" />
      </span>
    ),
  },
  {
    pronombre: 'tú',
    hablar: (
      <span className="bold">
        habl
        <In answer="as" root="    " />
        <Hint text="du sprichst" />
      </span>
    ),
    buscar: (
      <span className="bold">
        busc
        <In answer="as" root="    " />
        <Hint text="du suchst" />
      </span>
    ),
    comprar: (
      <span className="bold">
        compr
        <In answer="as" root="    " />
        <Hint text="du kaufst" />
      </span>
    ),
  },
  {
    pronombre: 'él/ella',
    hablar: (
      <span className="bold">
        habl
        <In answer="a" root="    " />
        <Hint text="er/sie/es spricht" />
      </span>
    ),
    buscar: (
      <span className="bold">
        busc
        <In answer="a" root="    " />
        <Hint text="er/sie/es sucht" />
      </span>
    ),
    comprar: (
      <span className="bold">
        compr
        <In answer="a" root="    " />
        <Hint text="er/sie/es kauft" />
      </span>
    ),
  },
  {
    pronombre: 'nosotros/-as',
    hablar: (
      <span className="bold">
        habl
        <In answer="amos" root="    " />
        <Hint text="wir sprechen" />
      </span>
    ),
    buscar: (
      <span className="bold">
        busc
        <In answer="amos" root="    " />
        <Hint text="wir suchen" />
      </span>
    ),
    comprar: (
      <span className="bold">
        compr
        <In answer="amos" root="    " />
        <Hint text="wir kaufen" />
      </span>
    ),
  },
  {
    pronombre: 'vosotros/-as',
    hablar: (
      <span className="bold">
        habl
        <In answer="áis" root="    " />
        <Hint text="ihr sprecht" />
      </span>
    ),
    buscar: (
      <span className="bold">
        busc
        <In answer="áis" root="    " />
        <Hint text="ihr sucht" />
      </span>
    ),
    comprar: (
      <span className="bold">
        compr
        <In answer="áis" root="    " />
        <Hint text="ihr kauft" />
      </span>
    ),
  },
  {
    pronombre: 'ellos/-as',
    hablar: (
      <span className="bold">
        habl
        <In answer="an" root="    " />
        <Hint text="sie sprechen" />
      </span>
    ),
    buscar: (
      <span className="bold">
        busc
        <In answer="an" root="    " />
        <Hint text="sie suchen" />
      </span>
    ),
    comprar: (
      <span className="bold">
        compr
        <In answer="an" root="    " />
        <Hint text="sie kaufen" />
      </span>
    ),
  },
]

const Index = () => {
  return (
    <>
      <h1>Verbos en presente con -ar</h1>
      <VerbsTable table={tabla} />
    </>
  )
}

export default Index
