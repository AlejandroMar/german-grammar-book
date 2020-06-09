import React from 'react'
import In from 'gatsby-theme-language-book/exercise-builders/input'
import VerbsTable from 'gatsby-theme-language-book/exercise-builders/verbos-table/verbs-table'
import Hint from 'gatsby-theme-language-book/exercise-builders/verbos-table/Hint'

const tabla = [
  {
    pronombre: 'yo',
    comer: (
      <span className="bold">
        com
        <In answer="o" root="    " />
        <Hint text="ich esse" />
      </span>
    ),
    leer: (
      <span className="bold">
        le
        <In answer="o" root="    " />
        <Hint text="ich lese" />
      </span>
    ),
    ver: (
      <span className="bold">
        v
        <In answer="eo" root="    " />
        <Hint text="ich sehe, ¡IRREGULAR!" />
      </span>
    ),
  },
  {
    pronombre: 'tú',
    comer: (
      <span className="bold">
        com
        <In answer="es" root="    " />
        <Hint text="du isst" />
      </span>
    ),
    leer: (
      <span className="bold">
        le
        <In answer="es" root="    " />
        <Hint text="du liest" />
      </span>
    ),
    ver: (
      <span className="bold">
        v
        <In answer="es" root="    " />
        <Hint text="du siehst" />
      </span>
    ),
  },
  {
    pronombre: 'él/ella',
    comer: (
      <span className="bold">
        com
        <In answer="e" root="    " />
        <Hint text="er/sie/es isst" />
      </span>
    ),
    leer: (
      <span className="bold">
        le
        <In answer="e" root="    " />
        <Hint text="er/sie/es liest" />
      </span>
    ),
    ver: (
      <span className="bold">
        v
        <In answer="e" root="    " />
        <Hint text="er/sie/es sieht" />
      </span>
    ),
  },
  {
    pronombre: 'nosotros/-as',
    comer: (
      <span className="bold">
        com
        <In answer="emos" root="    " />
        <Hint text="wir essen" />
      </span>
    ),
    leer: (
      <span className="bold">
        le
        <In answer="emos" root="    " />
        <Hint text="wir lesen" />
      </span>
    ),
    ver: (
      <span className="bold">
        v
        <In answer="emos" root="    " />
        <Hint text="wir sehen" />
      </span>
    ),
  },
  {
    pronombre: 'vosotros/-as',
    comer: (
      <span className="bold">
        com
        <In answer="éis" root="    " />
        <Hint text="ihr esst" />
      </span>
    ),
    leer: (
      <span className="bold">
        le
        <In answer="éis" root="    " />
        <Hint text="ihr lest" />
      </span>
    ),
    ver: (
      <span className="bold">
        v
        <In answer="eis" root="    " />
        <Hint text="ihr seht, (eine Silbe => ohne Akzent!)" />
      </span>
    ),
  },
  {
    pronombre: 'ellos/-as',
    comer: (
      <span className="bold">
        com
        <In answer="en" root="    " />
        <Hint text="sie essen" />
      </span>
    ),
    leer: (
      <span className="bold">
        le
        <In answer="en" root="    " />
        <Hint text="sie lesen" />
      </span>
    ),
    ver: (
      <span className="bold">
        v
        <In answer="en" root="    " />
        <Hint text="sie sehen" />
      </span>
    ),
  },
]

const Index = () => {
  return (
    <>
      <h1>Verbos en presente con -er</h1>
      <VerbsTable table={tabla} />
    </>
  )
}

export default Index
