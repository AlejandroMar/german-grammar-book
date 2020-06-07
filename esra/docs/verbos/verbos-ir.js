import React from 'react'
import In from 'gatsby-theme-language-book/exercise-builders/input'
import VerbsTable from './verbs-table'
import Hint from './Hint'

const tabla = [
  {
    pronombre: 'yo',
    vivir: (
      <span className="bold">
        viv
        <In answer="o" root="    " />
        <Hint text="ich lebe/wohne" />
      </span>
    ),
    escribir: (
      <span className="bold">
        escrib
        <In answer="o" root="    " />
        <Hint text="ich schreibe" />
      </span>
    ),
    discutir: (
      <span className="bold">
        discut
        <In answer="o" root="    " />
        <Hint text="ich diskutiere/streite" />
      </span>
    ),
  },
  {
    pronombre: 'tú',
    vivir: (
      <span className="bold">
        viv
        <In answer="es" root="    " />
        <Hint text="du lebst/wohnst" />
      </span>
    ),
    escribir: (
      <span className="bold">
        escrib
        <In answer="es" root="    " />
        <Hint text="du schreibst" />
      </span>
    ),
    discutir: (
      <span className="bold">
        discut
        <In answer="es" root="    " />
        <Hint text="du diskutierst/streitest" />
      </span>
    ),
  },
  {
    pronombre: 'él/ella',
    vivir: (
      <span className="bold">
        viv
        <In answer="e" root="    " />
        <Hint text="er/sie/es lebt/wohnt" />
      </span>
    ),
    escribir: (
      <span className="bold">
        escrib
        <In answer="e" root="    " />
        <Hint text="er/sie/es schreibt" />
      </span>
    ),
    discutir: (
      <span className="bold">
        discut
        <In answer="e" root="    " />
        <Hint text="er/sie/es diskutiert/streitet" />
      </span>
    ),
  },
  {
    pronombre: 'nosotros/-as',
    vivir: (
      <span className="bold">
        viv
        <In answer="imos" root="    " />
        <Hint text="wir leben/wohnen" />
      </span>
    ),
    escribir: (
      <span className="bold">
        escrib
        <In answer="imos" root="    " />
        <Hint text="wir schreiben" />
      </span>
    ),
    discutir: (
      <span className="bold">
        discut
        <In answer="imos" root="    " />
        <Hint text="wir diskutieren/streiten" />
      </span>
    ),
  },
  {
    pronombre: 'vosotros/-as',
    vivir: (
      <span className="bold">
        viv
        <In answer="ís" root="    " />
        <Hint text="ihr lebt/wohnt" />
      </span>
    ),
    escribir: (
      <span className="bold">
        escrib
        <In answer="ís" root="    " />
        <Hint text="ihr schreibt" />
      </span>
    ),
    discutir: (
      <span className="bold">
        discut
        <In answer="ís" root="    " />
        <Hint text="ihr diskutiert/streitet" />
      </span>
    ),
  },
  {
    pronombre: 'ellos/-as',
    vivir: (
      <span className="bold">
        viv
        <In answer="en" root="    " />
        <Hint text="sie leben/wohnen" />
      </span>
    ),
    escribir: (
      <span className="bold">
        escrib
        <In answer="en" root="    " />
        <Hint text="sie schreiben" />
      </span>
    ),
    discutir: (
      <span className="bold">
        discut
        <In answer="en" root="    " />
        <Hint text="sie diskutieren/streiten" />
      </span>
    ),
  },
]

const Index = () => {
  return (
    <>
      <h1>Verbos en presente con -ir</h1>
      <VerbsTable table={tabla} />
    </>
  )
}
export default Index
