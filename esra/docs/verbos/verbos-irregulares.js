import React from 'react'
import In from 'gatsby-theme-language-book/exercise-builders/input'
import VerbsTable from './verbs-table'
import Hint from './Hint'

const tabla = [
  {
    pronombre: 'yo',
    hacer: (
      <span className="bold">
        ha
        <In answer="go" root="    " />
        <Hint text="ich mache, ¡IRREGULAR!" />
      </span>
    ),
    tener: (
      <span className="bold">
        t
        <In answer="e" root="    " />
        n
        <In answer="go" root="    " />
        <Hint text="ich habe, ¡IRREGULAR!" />
      </span>
    ),
    querer: (
      <span className="bold">
        qu
        <In answer="ie" root="    " />
        r
        <In answer="o" root="    " />
        <Hint text="ich will" />
      </span>
    ),
  },
  {
    pronombre: 'tú',
    hacer: (
      <span className="bold">
        hac
        <In answer="es" root="    " />
        <Hint text="du machst" />
      </span>
    ),
    tener: (
      <span className="bold">
        t
        <In answer="ie" root="    " />
        n
        <In answer="es" root="    " />
        <Hint text="du hast" />
      </span>
    ),
    querer: (
      <span className="bold">
        qu
        <In answer="ie" root="    " />
        r
        <In answer="es" root="    " />
        <Hint text="du willst" />
      </span>
    ),
  },
  {
    pronombre: 'él/ella',
    hacer: (
      <span className="bold">
        hac
        <In answer="e" root="    " />
        <Hint text="er/sie/es macht" />
      </span>
    ),
    tener: (
      <span className="bold">
        t
        <In answer="ie" root="    " />
        n
        <In answer="e" root="    " />
        <Hint text="er/sie/es hat" />
      </span>
    ),
    querer: (
      <span className="bold">
        qu
        <In answer="ie" root="    " />
        r
        <In answer="e" root="    " />
        <Hint text="er/sie/es will" />
      </span>
    ),
  },
  {
    pronombre: 'nosotrs/-as',
    hacer: (
      <span className="bold">
        hac
        <In answer="emos" root="    " />
        <Hint text="wir machen" />
      </span>
    ),
    tener: (
      <span className="bold">
        t
        <In answer="e" root="    " />
        n
        <In answer="emos" root="    " />
        <Hint text="wir haben" />
      </span>
    ),
    querer: (
      <span className="bold">
        qu
        <In answer="e" root="    " />
        r
        <In answer="emos" root="    " />
        <Hint text="wir wollen" />
      </span>
    ),
  },
  {
    pronombre: 'vosotrs/-as',
    hacer: (
      <span className="bold">
        hac
        <In answer="éis" root="    " />
        <Hint text="ihr macht" />
      </span>
    ),
    tener: (
      <span className="bold">
        t
        <In answer="e" root="    " />
        n
        <In answer="éis" root="    " />
        <Hint text="ihr habt" />
      </span>
    ),
    querer: (
      <span className="bold">
        qu
        <In answer="e" root="    " />
        r
        <In answer="éis" root="    " />
        <Hint text="ihr wollt" />
      </span>
    ),
  },
  {
    pronombre: 'ellos/-as',
    hacer: (
      <span className="bold">
        hac
        <In answer="en" root="    " />
        <Hint text="sie machen" />
      </span>
    ),
    tener: (
      <span className="bold">
        t
        <In answer="ie" root="    " />
        n
        <In answer="en" root="    " />
        <Hint text="sie haben" />
      </span>
    ),
    querer: (
      <span className="bold">
        qu
        <In answer="ie" root="    " />
        r
        <In answer="en" root="    " />
        <Hint text="sie wollen" />
      </span>
    ),
  },
]

const Index = () => {
  return (
    <>
      <h1>Verbos irregulares en presente (hacer, tener, querer) </h1>
      <VerbsTable table={tabla} />
    </>
  )
}

export default Index
